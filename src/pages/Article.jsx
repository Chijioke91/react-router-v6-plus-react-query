import { useParams } from 'react-router-dom';
import { useFetchArticle } from '../hooks/useFetchArticle';

export default function Article() {
  const { id } = useParams();

  const { data: article, isLoading, error, isError } = useFetchArticle(id);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      {article && (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>By {article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
