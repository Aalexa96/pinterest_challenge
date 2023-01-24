
import { MyContext } from "./myContext";

function Providers(props) {
    return (
    <MyContext.Provider value={''}>
        {props.children}
    </MyContext.Provider>
    );
}
export default Providers;