import { useState } from "react";
import { MyContext } from "./myContext";

function Providers(props) {
    const [contextState, setContextState] = useState('William e turbat');
    return (
    <MyContext.Provider value={[contextState, setContextState]}>
        {props.children}
    </MyContext.Provider>
    );
}
export default Providers;