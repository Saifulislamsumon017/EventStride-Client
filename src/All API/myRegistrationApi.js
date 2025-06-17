export const myRegistration = async (email, search = '') => {
  const res = await fetch(
    `http://localhost:3000/registration?email=${email}&search=${search}`
  );
  const data = await res.json();
  return data;
};
