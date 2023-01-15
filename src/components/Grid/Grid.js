import Card from "../Card/Card";
import './Grid.css';

function Grid(props) {
    const cats = props.cats;
    const noColumns = 6;
    const columnsArrays = [];

    for (let i = 0; i < noColumns; i++) {
        columnsArrays.push([]);
    }

    console.log(cats);
    console.log(columnsArrays);

    return (
        <div className="Grid_row">
            <div className="Grid_column">
                <Card cat={cats[0]} />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="Grid_column">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="Grid_column">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="Grid_column">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="Grid_column">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <div className="Grid_column">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Grid;