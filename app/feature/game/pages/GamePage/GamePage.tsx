import { useParams } from 'react-router';

export default function GamePage() {
  const { gameId } = useParams();

  return (
    <div className="container" style={{ padding: '2rem 0' }}>
      <h1>Game Details</h1>
      <p>Game ID: {gameId}</p>
    </div>
  );
}
