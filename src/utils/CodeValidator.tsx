import { useContext } from "react";
import { SyndicateContext } from "../context/members";
import { ISyndicate } from "../interfaces/ISyndicate";
import ShareCodeDecoder from "./ShareCodeDecoder";

const CodeValidator = (fullPathname: string) => {
  function zeroToThree(string: string) {
    return /^[0-3]+$/.test(string);
  }
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const blankCode = "00000".repeat(members.length);

  try {
    const splitCode = fullPathname.split("?")[1].split("=")[1];
    const decodedCode = ShareCodeDecoder(splitCode);

    if (decodedCode && decodedCode.length === 85 && zeroToThree(decodedCode)) {
      return decodedCode;
    }
    return blankCode;
  } catch (error) {
    return blankCode;
  }
};

export default CodeValidator;
