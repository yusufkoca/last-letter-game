import names from '../configs/names.json';

export default function pickAName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}
