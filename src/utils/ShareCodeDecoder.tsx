const ShareCodeDecoder = (
  shareCode: string = "4a0058c04b8ccd74a119a11000550523011aa49a02112"
) => {
  // Create groups of 5 digits
  const splitCode = shareCode.match(/.{1,5}/g);
  //Convert back to decimal
  const decodedCode = splitCode
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

  return decodedCode;
};

export default ShareCodeDecoder;
