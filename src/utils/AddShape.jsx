import shapeT from './Shapes';

const AddShape = (currentTable, setCurrentTable, currentShape, setCurrentShape) => {
    const shape = [...shapeT()];
    setCurrentShape(shape);
    const tableAfterMove = [...currentTable];
    const newShape = [...currentShape];

    for (let i=0; i<shape.length; i++) {
        tableAfterMove[shape[i][0]][shape[i][1]] = 1
    }
    setCurrentTable(tableAfterMove)
};

export default AddShape;
