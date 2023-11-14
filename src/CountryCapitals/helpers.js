export const shuffleOptions = (options, answer) => {
  const newArr = [...options, answer];
  return newArr
    .map((answer) => ({ sort: Math.random(), value: answer }))
    .sort((a, b) => a.sort - b.sort)
    .map((obj) => obj.value);
};
