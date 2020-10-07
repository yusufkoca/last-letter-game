import names from '../configs/names.json';

export default function pickANameBeginningWith(letter: string) {
  const namesBeginningWithLetter = names.filter((name) => name.charAt(0) === letter);
  const randomIndex = Math.floor(Math.random() * namesBeginningWithLetter.length);
  return namesBeginningWithLetter[randomIndex];
}
