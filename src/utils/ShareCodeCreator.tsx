const ShareCodeCreator = (
  codeString: string = "0200112001000032301200013233310211112002211002000001101011012301100000220122212202112"
) => {
  const code = codeString.match(/.{1,10}/g);
  const codePadded = code?.map((code) => {
    return code.padEnd(10, "0");
  });

  const sumInHex = codePadded?.map((code) => {
    return code
      ?.split("")
      .map((digit, index) => {
        return (parseInt(digit) + 4 * parseInt(code[index + 5])).toString(16);
      })
      .slice(0, 5);
  });
  const sumInHexSplit = sumInHex
    ?.map((code) => {
      return code?.join("");
    })
    .join("");

  // gets every 2 digits to transform to base64 = HEX*2*2 (16*2*2)
  const hexToBase64 = (hexstring: string) => {
    return btoa(
      hexstring
        //match to grab every 2 digits and pad if only one digit
        .match(/.{1,2}/g)!
        .map((char: string) => {
          return String.fromCharCode(parseInt(char, 16));
        })
        .join("")
    );
  };

  // decode base64 to hex with 2 digits
  const base64ToHex = (base64string: string) => {
    return atob(base64string)
      .split("")
      .map((char: string) => {
        return char.charCodeAt(0).toString(16).padStart(2, "0");
      })
      .join("");
  };

  return hexToBase64(sumInHexSplit!);
};

export default ShareCodeCreator;
