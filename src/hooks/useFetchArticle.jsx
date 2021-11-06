import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';

const fetchArticle = async ({ queryKey }) => {
  const res = await fetch(`http://localhost:9001/articles/${queryKey[1]}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!res.ok) {
    throw new Error('Could not fetch page');
  }

  return res.json();
};

export const useFetchArticle = (id) => {
  const navigate = useNavigate();

  return useQuery(['article', id], fetchArticle, {
    onError: () => {
      navigate('/', { replace: true });
    },
  });
};
