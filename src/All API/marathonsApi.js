export const marathonsLoader = ({ request }) => {
  const url = new URL(request.url);
  const sort = url.searchParams.get('sort') || 'desc';
  const limit = url.searchParams.get('limit') || '9';

  return fetch(
    `https://event-stride-server.vercel.app/marathons?sort=${sort}&limit=${limit}`
  ).then(res => res.json());
};
