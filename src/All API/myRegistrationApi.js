export const myRegistration = email => {
  return fetch(`http://localhost:3000/registration?email=${email}`).then(res =>
    res.json()
  );
};
