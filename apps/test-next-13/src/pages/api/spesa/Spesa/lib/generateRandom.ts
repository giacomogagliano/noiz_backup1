export let generateRandom = () =>
  Math.round(Math.random() * 100_000_000_000).toString(16);
