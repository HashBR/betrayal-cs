import { createContext, useEffect, useState } from "react";
import { OptionsProps } from "../interfaces/OptionsProps";
import { IOptions } from "../interfaces/IOptions";
import { LOCAL_STORAGE_KEY_OPTIONS } from "../utils/consts";

export const OptionsContext = createContext<IOptions>({
  isColorblind: false,
  setIsColorblind: () => {},
});

export const OptionsProvider = (props: OptionsProps) => {
  const [isColorblind, setIsColorblind] = useState<boolean>(false);
  useEffect(() => {
    const storedOptions = JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY_OPTIONS)!
    );
    if (storedOptions !== null) {
      setIsColorblind(storedOptions);
    } else {
      setIsColorblind(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      LOCAL_STORAGE_KEY_OPTIONS,
      JSON.stringify(isColorblind)
    );
  }, [isColorblind]);

  const value = { isColorblind, setIsColorblind };
  return (
    <OptionsContext.Provider value={value}>
      {props.children}
    </OptionsContext.Provider>
  );
};
