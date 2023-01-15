import Card from "../Card/Card";
import './Grid.css';

function Grid(props) {
    const cats = props.cats;
    const noColumns = 6;
    const columnsArrays = [];
    let itemsPerColumn = Math.floor(cats.length / noColumns);

    for (let i = 0; i < noColumns; i++) {
        let newColumn = cats.splice(0, itemsPerColumn);
        columnsArrays.push(newColumn);
    }

    console.log(columnsArrays);

    return (
        <div className="Grid_row">
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