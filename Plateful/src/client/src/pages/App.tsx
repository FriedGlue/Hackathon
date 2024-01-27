import useFetchData from '../hooks/useFetchData.tsx'; // adjust the path as needed
import Dashboard from '../components/Dashboard/Dashboard.tsx';
import Hero from '../components/Dashboard/Hero/Hero.tsx';

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const { data: pantryData, loading, error } = useFetchData(`${apiUrl}/pantries_info.json`);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data!</p>;

  return (
    <>
      <Hero />
      <Dashboard pantryData={pantryData} />
    </>
  );
}

export default App;
