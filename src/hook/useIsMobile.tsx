import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 748;

const useIsMobile = () => {
  // Domniemane jest, że chodzi o to, aby sprawdzić czy urządzenie jest mobilne na podstawie szerokości okna przeglądarki
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined"
      ? window.innerWidth < MOBILE_BREAKPOINT
      : false
  );

  useEffect(() => {
    const handleResize = () => {
      // Uaktualnij stan do obecnej szerokości okna i sprawdź, czy jest mniejsza niż punkt graniczny
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    // Dodaj event listener w momencie montowania komponentu
    window.addEventListener("resize", handleResize);

    // Wywołaj funkcję handleResize bezpośrednio po montażu, aby ustawić odpowiedni stan początkowy
    handleResize();

    // Oczyść event listener przy odmontowywaniu komponentu
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Pusta tablica zależności oznacza, że efekt uruchomi się tylko raz, przy montowaniu komponentu

  return isMobile;
};

export default useIsMobile;
