import { Link } from 'react-router-dom';
import { useFetch } from '../hooks/useFetch';
import './Home.css';

export default function Home() {
  const { data: articles, isLoading, isError, error } = useFetch();

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>{error.message}</div>;

  return (
    <div className="home">
      <h2>Articles</h2>
      {articles?.map((article) => (
        <div className="card" key={article.id}>
          <h3>{article.title}</h3>
          <p>{article.author}</p>
          <Link to={`/articles/${article.id}`}>Read more...</Link>
        </div>
      ))}
    </div>
  );
}
