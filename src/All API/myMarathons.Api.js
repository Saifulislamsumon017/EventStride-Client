export const myMarathonsLoader = email => {
  return fetch(
    `https://event-stride-server.vercel.app/marathons?email=${email}`,
    { credentials: 'include' }
  ).then(res => res.json());
};
