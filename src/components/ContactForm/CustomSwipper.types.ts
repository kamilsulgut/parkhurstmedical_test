export interface IContactForm {
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

export type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  message: string;
  acceptTerms: boolean;
};
