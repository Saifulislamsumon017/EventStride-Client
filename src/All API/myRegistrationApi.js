export const myRegistration = (email, search = '') => {
  const url = `http://localhost:3000/registration?email=${email}&search=${search}`;
  return fetch(url).then(res => res.json());
};
