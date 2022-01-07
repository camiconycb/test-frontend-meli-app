import { atom, selector } from "recoil";


export const queryState = atom({
  key: 'queryState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const QueryValue = selector({
  key: "queryValue",
  get: ({ get }) => get(queryState),
});


export const resultSearchState = atom({
  key: 'resultSearchState',
  default: {}
});

export const ResultSearchValue = selector({
  key: "resultSearchValue",
  get: ({ get }) => get(resultSearchState),
});