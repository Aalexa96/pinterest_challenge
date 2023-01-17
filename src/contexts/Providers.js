import { MyContext } from "./myContext";

function Providers(props) {
    return (
    <MyContext.Provider value={'William e turbat'}>
        {props.children}
    </MyContext.Provider>
    );
}
export default Providers;