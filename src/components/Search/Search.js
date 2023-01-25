import './Search.css';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css';
import { useEffect, useState, useContext } from 'react';
import { getBreeds } from '../../services/catsAPI';
import { MyContext } from '../../contexts/myContext';
function Search() {
    const [breeds, setBreeds] = useState([]);
    const [state, dispatch] = useContext(MyContext);

    useEffect(() => {
        getBreeds().then(breeds => {
            const newBreeds = [];
            breeds.forEach(breed => {
                newBreeds.push({
                    name: breed.name,
                    value: breed.id
                })
            });
            setBreeds(newBreeds);
        })
    }, [])

    function onSelectChange(breedId) {
        dispatch({
            type: 'SET_SEARCH_BREED',
            searchBreedId: breedId
        });
    }

    return (
        <div>
            <SelectSearch options={breeds} onChange={onSelectChange} value={state.searchBreedId} name="language" placeholder="Choose your language" />
        </div>
    );
}

export default Search;