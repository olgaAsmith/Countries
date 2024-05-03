import { useParams, Navigate, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Country = (props) => {
  const navigate = useNavigate();
  const urlParameters = useParams();
  const country = props.countriesList.find(
    (country) => country.name.common === urlParameters.name
  );

  const handleClick = () => {
    navigate('/');
  };

  return (!country || !urlParameters.name || !props.countriesList) ? (
    <Navigate to='/' />
  ) : (
    <div className='bg-dark text-light p-5 d-flex flex-column align-items-center vh-100'>
      <button className='btn btn-danger align-self-start' onClick={handleClick}>Back to</button>
        <div className='w-75 d-flex align-items-center justify-content-between'>
          <h1 className='w-25 text-center'>{urlParameters.name}</h1>
          {country.flags && (
            <img className='w-25 rounded object-fit-cover'
              src={country.flags.png}
              alt={country.flags.alt}
            />
          )}
          <ul className='w-25 list-unstyled text-uppercase'>
            <li className='p-2'>Capital: {country.capital ?? 'Not exist'}</li>
            <li className='p-2'>Population: {country.population ?? 'Not exist'}</li>
            <li className='p-2'>Region: {country.region ?? 'Not exist'}</li>
            <li className='p-2'>
              Languages:{' '}
              {country.languages
                ? Object.values(country.languages).join(', ')
                : 'Not exist'}
            </li>
          </ul>
      </div>
    </div>
  );
};

Country.propTypes = {
  countriesList: PropTypes.array.isRequired,
};

export default Country;
