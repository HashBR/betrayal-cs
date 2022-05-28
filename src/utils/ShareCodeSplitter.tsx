const ShareCodeSplitter = (
  shareCode: string = "00000",
  columnIndex: number = 0
) => {
  const splitCount = shareCode.substring(5 * columnIndex, 5 * columnIndex + 5);
  return Number(splitCount);
};

export default ShareCodeSplitter;
