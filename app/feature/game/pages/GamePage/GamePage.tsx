import { Link,useParams } from 'react-router';

export default function GamePage() {
  const { gameId } = useParams();

  return (
    <div>
      <Link to="/catalog">← Back to Catalog</Link>
      <h1>Game Details</h1>
      <p>Now viewing game ID: <strong>{gameId}</strong></p>
    </div>
  );
}