import resetPreviousShapePosition from './ResetPreviousShapePosition';
import checkPosition from './CheckPosition';
import shapeT from './Shapes';

const moveShape = ( moveDirection, currentTable, currentShape, setCurrentTable, setCurrentShape ) => {
    // find new position
    const tableAfterMove = [...currentTable];
    const shapeAfterMove = [...currentShape];

    //move down
    if (moveDirection==="down" && checkPosition(shapeAfterMove)[0]<19) {
        resetPreviousShapePosition(tableAfterMove, shapeAfterMove, setCurrentTable);
        for (let i=0; i<shapeAfterMove.length; i++) {
            shapeAfterMove[i][0] = shapeAfterMove[i][0]+1; 
        }
        for (let i=0; i<shapeAfterMove.length; i++) {
            tableAfterMove[shapeAfterMove[i][0]][shapeAfterMove[i][1]] = 1
        }
        console.log("currentShape")
        console.log(currentShape)
        console.log("shapeAfterMove")
        console.log(shapeAfterMove)
        setCurrentShape(shapeAfterMove);
        setCurrentTable(tableAfterMove);
    }

    //move left
    if (moveDirection==="left" && checkPosition(shapeAfterMove)[1]>0) {
        resetPreviousShapePosition(tableAfterMove, shapeAfterMove, setCurrentTable);

        for (let i=0; i<shapeAfterMove.length; i++) {
            shapeAfterMove[i][1] = shapeAfterMove[i][1]-1; 
        }

        for (let i=0; i<shapeAfterMove.length; i++) {
            tableAfterMove[shapeAfterMove[i][0]][shapeAfterMove[i][1]] = 1
        }
        setCurrentShape(shapeAfterMove);
        setCurrentTable(tableAfterMove); 
    }
    if (moveDirection==="right" && checkPosition(shapeAfterMove)[2]<9) {
        resetPreviousShapePosition(tableAfterMove, shapeAfterMove, setCurrentTable);

        for (let i=0; i<shapeAfterMove.length; i++) {
            shapeAfterMove[i][1] = shapeAfterMove[i][1]+1; 
        }

        for (let i=0; i<shapeAfterMove.length; i++) {
            tableAfterMove[shapeAfterMove[i][0]][shapeAfterMove[i][1]] = 1
        }
        setCurrentShape(shapeAfterMove);
        setCurrentTable(tableAfterMove);         
    }

    if (checkPosition(shapeAfterMove)[0] === 19) {
        console.log("end of field")
        // console.log(shape);
        // setCurrentShape([]);
        // setCurrentShape([])
    }
}

export default moveShape;
