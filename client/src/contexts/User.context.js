import { createContext } from 'react';

function empty() {}

export const UserContext = createContext({
  nickname: null,
  token: null,
  rooms: [],
  setUser: empty,
  unsetUser: empty,
  loadUser: empty,
  addRoom: empty,
});
