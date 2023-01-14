import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
function Search() {
    return (
        <div>
            <FontAwesomeIcon icon={faEnvelope}/>
            <input className='Search_input' type='text' placeholder='Search' />
        </div>
    );
}

export default Search;