import { useContext } from "react";
import { SyndicateContext } from "../context/members";
import { ISyndicate } from "../interfaces/ISyndicate";

const CodeValidator = (fullPathname: string) => {
  function zeroToThree(string: string) {
    return /^[0-3]+$/.test(string);
  }
  const { members } = useContext<ISyndicate>(SyndicateContext);
  const blankCode = "00000".repeat(members.length);
  // get the share code from the url
  try {
    const splitCode = fullPathname.split("?")[1].split("=")[1];
    if (splitCode && splitCode.length === 85 && zeroToThree(splitCode)) {
      return splitCode;
    }
    return blankCode;
  } catch (error) {
    return blankCode;
  }
};

export default CodeValidator;
