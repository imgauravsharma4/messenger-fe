const storagePrefix = 'lm_';

const storage = {
  getToken: () => {
    return JSON.parse(window.localStorage.getItem(`${storagePrefix}token`));
  },
  setToken: (token) => {
    window.localStorage.setItem(`${storagePrefix}token`, JSON.stringify({ accessToken: token }));
  },
  clearToken: () => {
    window.localStorage.removeItem(`${storagePrefix}token`);
  },
};
// storage.setToken(
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNjgxOTY1NTAxLCJleHAiOjE2ODIwNTE5MDF9.k7ytnaMam4vb6AwezPZngZZl90XYHStIMhw6_O68EzE'
// );
export default storage;
