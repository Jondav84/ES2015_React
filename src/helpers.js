/** @format */
const choice = (items) => {
  const randChoice = Math.floor(Math.random() * items.length);
  return items[randChoice];
};

const remove = (item, items) => {
  return items.filter((i) => i !== item);
};

export { choice, remove };
