export const myRegistration = async (email, search = '') => {
  const res = await fetch(
    `https://event-stride-server.vercel.app/registration?email=${email}&search=${search}`,
    { credentials: 'include' }
  );
  const data = await res.json();
  return data;
};
