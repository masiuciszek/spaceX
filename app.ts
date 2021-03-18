export function caesarCipherEncryptor(str: string, key: number) {
  const charsXs = [];
  const newKey = key % 26;

  for (const char of str) {
    charsXs.push(getNewLetter(char, newKey));
  }

  return charsXs.join("");
}

const getNewLetter = (char: string, key: number) => {
  // moving amount of places forward
  // 122
  // 96
  const newCharCode = char.charCodeAt(0) + key;
  console.log(newCharCode, backToChar(newCharCode));
  return newCharCode <= 122 ? backToChar(newCharCode) : backToChar(96 + (newCharCode % 122));
};

const backToChar = (charCode: number) => {
  return String.fromCharCode(charCode);
};

console.log(caesarCipherEncryptor("xyz", 2)); // zab
// charCode x = 120
// charCode y = 121
// charCode s = 115
