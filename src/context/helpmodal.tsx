import { createContext, useEffect, useState } from "react";
import { HelpModalProps } from "../interfaces/HelpModalProps";
import { IHelpModal } from "../interfaces/IHelpModal";

const LOCAL_STORAGE_KEY = "betrayalcs.firstTime";

export const HelpModalContext = createContext<IHelpModal>({
  isHelpOpen: false,
  setIsHelpOpen: () => {},
});

export const HelpModalProvider = (props: HelpModalProps) => {
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  useEffect(() => {
    const storedHelpModal = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY)!
    );
    if (storedHelpModal !== null) {
      setIsHelpOpen(storedHelpModal);
    } else {
      setIsHelpOpen(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(isHelpOpen));
  }, [isHelpOpen]);

  const value = { isHelpOpen, setIsHelpOpen };
  return (
    <HelpModalContext.Provider value={value}>
      {props.children}
    </HelpModalContext.Provider>
  );
};
