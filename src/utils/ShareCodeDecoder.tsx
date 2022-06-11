const ShareCodeDecoder = (
  shareCode: string = "SgBYwEuMzXShGaEQAFUFIwEapJoCEQI="
) => {
  // decode base64 to hex with 2 digits
  const base64ToHex = (base64string: string) => {
    return atob(base64string)
      .split("")
      .map((char: string) => {
        // console.log(char.charCodeAt(0).toString(16).padStart(2, "0"));
        return char.charCodeAt(0).toString(16).padStart(2, "0");
      })
      .join("");
  };

  const shareCode64 = base64ToHex(shareCode);
  // Remove a padded digit
  const decodedCode64ToHex = shareCode64.slice(0, -2) + shareCode64.slice(-1);

  // Create groups of 5 digits
  const splitCode = decodedCode64ToHex.match(/.{1,5}/g);
  //Convert back to decimal
  const decodedCodeHexToDecimal = splitCode
    ?.map((code) => {
      const eachDigitDecimal = code.split("").map((digit) => {
        return parseInt(digit, 16);
      });
      // odd rows are modulus 4
      const oddRow = eachDigitDecimal
        .map((digit) => {
          return Math.floor(digit % 4).toString();
        })
        .join("");
      // even rows are Floor of / 4
      const evenRow = eachDigitDecimal
        .map((digit) => {
          return Math.floor(digit / 4).toString();
        })
        .join("");
      return oddRow + evenRow;
    })
    .join("") // join all the rows
    .substring(0, 85); // remove the last 5 digits

  return decodedCodeHexToDecimal;
};

export default ShareCodeDecoder;
