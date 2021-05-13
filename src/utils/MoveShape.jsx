import resetPreviousShapePosition from './ResetPreviousShapePosition';
import checkPosition from './CheckPosition';

const moveShape = ( moveDirection, currentTable, currentShape, setCurrentTable, setCurrentShape ) => {
    const tableAfterMove = JSON.parse(JSON.stringify(currentTable));
    const shapeAfterMove = JSON.parse(JSON.stringify(currentShape));

    const moveToNewPosition = () =>{
        for (let i=0; i<shapeAfterMove.length; i++) {
            tableAfterMove[shapeAfterMove[i][0]][shapeAfterMove[i][1]] = 1
        }
    }

    //move down
    if (moveDirection==="down" && checkPosition(shapeAfterMove)[0]<19) {
        resetPreviousShapePosition(tableAfterMove, shapeAfterMove, setCurrentTable);
        for (let i=0; i<shapeAfterMove.length; i++) {
            shapeAfterMove[i][0] = shapeAfterMove[i][0]+1; 
        }
        moveToNewPosition();
    }

    //move left
    if (moveDirection==="left" && checkPosition(shapeAfterMove)[1]>0) {
        resetPreviousShapePosition(tableAfterMove, shapeAfterMove, setCurrentTable);

        for (let i=0; i<shapeAfterMove.length; i++) {
            shapeAfterMove[i][1] = shapeAfterMove[i][1]-1; 
        }
        moveToNewPosition();
    }

    //move right
    if (moveDirection==="right" && checkPosition(shapeAfterMove)[2]<9) {
        resetPreviousShapePosition(tableAfterMove, shapeAfterMove, setCurrentTable);

        for (let i=0; i<shapeAfterMove.length; i++) {
            shapeAfterMove[i][1] = shapeAfterMove[i][1]+1; 
        }
        moveToNewPosition();     
    }

    setCurrentShape(shapeAfterMove);
    setCurrentTable(tableAfterMove);

    if (checkPosition(shapeAfterMove)[0] === 19) {
        console.log("end of field")
        // console.log(shape);
        // setCurrentShape([]);
        // setCurrentShape([])
    }
}

export default moveShape;
