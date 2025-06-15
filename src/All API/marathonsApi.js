export const marathonsLoader = ({ request }) => {
  const url = new URL(request.url);
  const sort = url.searchParams.get('sort') || 'desc';
  const limit = url.searchParams.get('limit') || '9';

  const endpoint = `http://localhost:3000/marathons?sort=${sort}&limit=${limit}`;
  return fetch(endpoint).then(res => res.json());
};
