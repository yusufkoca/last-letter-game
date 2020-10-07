import names from '../configs/names.json';

export default function isValidNewWord(newWord: string, words: string[]) {
  const lastWord = words[words.length - 1];

  if (words.findIndex((word) => word === newWord) >= 0) {
    return false;
  }

  if (lastWord && lastWord.charAt(lastWord.length - 1) !== newWord[0]) {
    return false;
  }

  if (names.findIndex((name) => name === newWord) < 0) {
    return false;
  }

  return true;
}
