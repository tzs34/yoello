import Beer from "./beer";

const beerFactory = (data) => data.map((o) => new Beer(o));

export { beerFactory };
