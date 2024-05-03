import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Main = (props) => {
  return (
    <main className='bg-dark text-light p-5'>
      <h1 className='text-center text-uppercase mb-5'>Countries</h1>
      <ul className='list-unstyled'>
        {props.countriesList.length > 0 &&
          props.countriesList.map((country) => (
            <li className='m-3 text-center' key={country.name.common} >
              <Link className='link-light link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover link-opacity-75-hover' to={`/country/${country.name.common}`}>
                {country.name.common}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

Main.propTypes = {
  countriesList: PropTypes.array.isRequired,
};
export default Main;
