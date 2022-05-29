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

  return sumInHexSplit;
};

export default ShareCodeCreator;
