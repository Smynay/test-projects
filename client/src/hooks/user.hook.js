import { useState, useCallback } from 'react';

const storageName = 'userData';

export const useUser = () => {
  const [nickname, setNickname] = useState(null);
  const [token, setToken] = useState(null);
  const [rooms, setRooms] = useState(new Set());

  const loadUser = useCallback(() => {
    const ls = JSON.parse(sessionStorage.getItem(storageName));

    try {
      setNickname(ls.nickname);
      setToken(ls.token);
      setRooms(new Set(ls.rooms));
    } catch (e) {}
  }, []);

  const setUser = useCallback((nickname) => {
    const token = Math.random().toString(36).substring(2, 8);
    setNickname(nickname);
    setToken(token);
    setRooms(new Set());

    sessionStorage.setItem(
      storageName,
      JSON.stringify({ nickname, token, rooms: new Set() })
    );
  }, []);

  const unsetUser = useCallback(() => {
    setNickname();
    setToken();
    setRooms(new Set());

    sessionStorage.removeItem(storageName);
  }, []);

  const addRoom = useCallback(
    (roomId) => {
      setRooms(rooms.add(roomId));

      sessionStorage.setItem(
        storageName,
        JSON.stringify({ nickname, token, rooms })
      );
    },
    [nickname, token, rooms]
  );

  return { nickname, token, rooms, setUser, unsetUser, loadUser, addRoom };
};
