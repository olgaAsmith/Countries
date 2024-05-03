import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Country from './components/Country/Country';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [countriesList, setCountriesList] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCountries = async () => {
    setIsLoading(true);
    const response = await fetch('https://restcountries.com/v3.1/all');
    if (!response.ok) {
      setError('Sorry, loading data failed. Plese try later...');
      setIsLoading(false);
    } else {
      const data = await response.json();
      const sortedCountries = data.sort((a, b) => {
        return a.name.common.localeCompare(b.name.common);
      });
      setCountriesList(sortedCountries);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className='app'>
      <Header />
      {isLoading ? (
        <div className='bg-dark text-light d-flex justify-content-center align-items-center vh-100'>
          ......loading......
        </div>
      ) : error ? (
        <div className='bg-dark text-light d-flex justify-content-center align-items-center vh-100'>
          {error}
        </div>
      ) : (
        <Routes>
          <Route path='/' element={<Main countriesList={countriesList} />} />
          <Route
            path='/country/:name'
            element={<Country countriesList={countriesList} />}
          />
        </Routes>
      )}
      <Footer />
    </div>
  );
}

export default App;
