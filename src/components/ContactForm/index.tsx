"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface IContactForm {
  fullName: string;
  fullNameRequired: string;
  phone: string;
  phoneRequired: string;
  email: string;
  emailRequired: string;
  message: string;
  messageRequired: string;
  checkbox: string;
  acceptTermsRequired: string;
  buttonText: string;
  successMessage: string;
}

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  acceptTerms: boolean;
};

export default function ContactForm({
  fullName,
  fullNameRequired,
  phone,
  phoneRequired,
  email,
  emailRequired,
  message,
  messageRequired,
  checkbox,
  acceptTermsRequired,
  buttonText,
  successMessage,
}: IContactForm) {
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY;
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormValues>();

  const { locale } = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async ({
    fullName,
    email,
    phone,
    message,
  }) => {
    if (SERVICE_ID && TEMPLATE_ID) {
      try {
        emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: fullName,
            message: message,
            from_email: email,
            from_phone: phone,
          },
          PUBLIC_KEY
        );
      } catch (error) {
        console.log("error", error);
      } finally {
        reset();
      }
    }
  };

  return (
    <div className='w-full md:w-[430px] color-[var(--text-primary)] mt-[15px]'>
      {isSubmitSuccessful && (
        <div className='text-center  md:w-[430px] py-[15px] my-[15px] bg-[var(--text-secondary)] color-[var(--background-card)] rounded'>
          {successMessage}
        </div>
      )}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='shadow-md rounded px-8 pt-6 pb-8 mb-4'
      >
        <div className='mb-4'>
          <label
            className='block text-sm font-bold mb-2'
            htmlFor='fullName'
          >
            {fullName}
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            {...register("fullName", {
              required: fullNameRequired,
              minLength: 2,
              maxLength: 25,
            })}
          />
          {errors.fullName && (
            <span className='text-red-500'>
              {errors?.fullName?.message && <>{errors.fullName.message}</>}
            </span>
          )}
        </div>
        <div className='mb-4'>
          <label
            className='block text-sm font-bold mb-2'
            htmlFor='phone'
          >
            {phone}
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
            type='tel'
            {...register("phone", {
              minLength: 6,
              maxLength: 12,
              required: phoneRequired,
            })}
          />
          {errors.phone && (
            <span className='text-red-500'>
              {errors?.phone?.message && <>{errors.phone.message}</>}
            </span>
          )}
        </div>
        <div className='mb-4'>
          <label
            className='block text-sm font-bold mb-2'
            htmlFor='email'
          >
            {email}
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            type='email'
            {...register("email", {
              required: emailRequired,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && (
            <span className='text-red-500'>
              {errors?.email?.message && <>{errors.email.message}</>}
            </span>
          )}
        </div>
        <div className='mb-4'>
          <label
            className='block text-sm font-bold mb-2'
            htmlFor='textArea'
          >
            {message}
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
            maxLength={1000}
            {...register("message", {
              required: messageRequired,
              minLength: 3,
              maxLength: 1000,
            })}
          />
          {errors.message && (
            <span className='text-red-500'>
              {errors?.message?.message && <>{errors.message.message}</>}
            </span>
          )}
        </div>
        <div className='flex items-center mb-4'>
          <input
            {...register("acceptTerms", { required: acceptTermsRequired })}
            type='checkbox'
            className='  relative peer shrink-0 
            appearance-none w-4 h-4 border-2 border-[var(--text-primary)] rounded-sm bg-white
            checked:bg-[var(--text-secondary)] checked:border-0
            focus:outline-none focus:ring-offset-0 focus:ring-2 focus:ring-[var(--text-primary)]
            disabled:border-steel-400 disabled:bg-[var(--background-card)]'
          />
          <Link
            href={`${locale === "pl" ? "" : "/en"}/terms`}
            className={`text-sm font-bold ml-2 flex items-center navElement`}
          >
            {checkbox}
          </Link>
          {errors.acceptTerms && (
            <p className='text-red-500'>
              {errors?.acceptTerms?.message && (
                <>{errors.acceptTerms.message}</>
              )}
            </p>
          )}
        </div>

        <button
          type='submit'
          className='bg-[var(--text-secondary)] hover:bg-[var(--text-card)] hover:transition-colors delay-150 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}
