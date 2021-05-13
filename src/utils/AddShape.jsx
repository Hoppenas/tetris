import shapeT from './Shapes';

const AddShape = (currentTable, setCurrentTable, currentShape, setCurrentShape) => {
    const shape = JSON.parse(JSON.stringify(shapeT()));
    setCurrentShape(shape);
    const tableAfterMove = [...currentTable];

    for (let i=0; i<shape.length; i++) {
        tableAfterMove[shape[i][0]][shape[i][1]] = 1
    }
    setCurrentTable(tableAfterMove)
};

export default AddShape;
