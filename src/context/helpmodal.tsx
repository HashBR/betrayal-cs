import { createContext, useEffect, useState } from "react";
import { HelpModalProps } from "../interfaces/HelpModalProps";
import { IHelpModal } from "../interfaces/IHelpModal";
import { LOCAL_STORAGE_KEY_FIRSTTIME } from "../utils/consts";

export const HelpModalContext = createContext<IHelpModal>({
  isHelpOpen: false,
  setIsHelpOpen: () => {},
});

export const HelpModalProvider = (props: HelpModalProps) => {
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  useEffect(() => {
    const storedHelpModal = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_FIRSTTIME)!
    );
    if (storedHelpModal !== null) {
      setIsHelpOpen(storedHelpModal);
    } else {
      setIsHelpOpen(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_FIRSTTIME,
      JSON.stringify(isHelpOpen)
    );
  }, [isHelpOpen]);

  const value = { isHelpOpen, setIsHelpOpen };
  return (
    <HelpModalContext.Provider value={value}>
      {props.children}
    </HelpModalContext.Provider>
  );
};
