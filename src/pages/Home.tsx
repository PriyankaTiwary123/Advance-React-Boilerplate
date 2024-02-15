
  import { useNavigate } from 'react-router-dom';

  const Home:React.FC = () => {
    const navigate = useNavigate();

    const redirectToAbout = () => {
      navigate('/about');
    };

  return (
    <div>
      <h1>Pets</h1>
    <button onClick={redirectToAbout}>Go to About Page</button>
    </div>
  )
}

export default Home
