import { useQuery } from 'react-query';

const fetchArticles = async () => {
  const res = await fetch('http://localhost:9001/articles', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
};

export const useFetch = () => {
  return useQuery('articles', fetchArticles);
};
