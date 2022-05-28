const IncrementOnPosition = (
  currentNumber: number,
  position: number,
  maxDigit = 3,
  numberLength = 5
) => {
  if (position > numberLength) {
    throw "Position is out of range";
  }
  let stringNumberParts = currentNumber
    .toString()
    .padStart(numberLength, "0")
    .split("");
  let incremented =
    (parseInt(stringNumberParts[position]) + 1) % (maxDigit + 1); // Garante que não vai passar do max number, e voltar.
  let newNumberString = [];
  for (let i = 0; i < numberLength; i++) {
    newNumberString.push(
      i === position ? incremented : parseInt(stringNumberParts[i])
    );
  }
  const result = parseInt(newNumberString.join(""));
  return result;
};

export default IncrementOnPosition;
