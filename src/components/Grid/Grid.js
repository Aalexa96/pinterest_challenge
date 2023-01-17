import { useContext } from "react";
import { MyContext } from "../../contexts/myContext";
import Card from "../Card/Card";
import './Grid.css';

function Grid(props) {
    const cats = props.cats;
    const noColumns = props.noColumns;
    const columnsArrays = [];
    const itemsPerColumn = Math.floor(cats.length / noColumns);

    for (let i = 0; i < noColumns; i++) {
        let newColumn = cats.splice(0, itemsPerColumn);
        columnsArrays.push(newColumn);
    }

    const [contextState, setContextState] = useContext(MyContext);

    return (
        <div className="Grid_row">
            <h1>{contextState}</h1>
            {columnsArrays.map((column, index) => {
                return (<div className="Grid_column" key={index}>

                    {column.map(cat => {
                        return (<Card cat={cat} key={cat.id} />);
                    })}


                </div>)
            })}
        </div>
    );
}

export default Grid;