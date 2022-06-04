import { createContext, useState } from "react";
import { HelpModalProps } from "../interfaces/HelpModalProps";
import { IHelpModal } from "../interfaces/IHelpModal";

export const HelpModalContext = createContext<IHelpModal>({
  isHelpOpen: false,
  setIsHelpOpen: () => {},
});

export const HelpModalProvider = (props: HelpModalProps) => {
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);

  const value = { isHelpOpen, setIsHelpOpen };
  return (
    <HelpModalContext.Provider value={value}>
      {props.children}
    </HelpModalContext.Provider>
  );
};
