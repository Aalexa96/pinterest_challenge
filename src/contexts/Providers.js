
import { useReducer } from "react";
import myReducer from "../reducers/myReducer";
import { MyContext } from "./myContext";

function Providers(props) {
    const [state, dispatch] = useReducer (myReducer, {
        cats: [], 
        searchBreedId: '',
        loading: false
    });

    return (
    <MyContext.Provider value={[state, dispatch]}>
        {props.children}
    </MyContext.Provider>
    );
}
export default Providers;