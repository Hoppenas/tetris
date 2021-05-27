import resetPreviousShapePosition from './ResetPreviousShapePosition';
import checkPosition from './CheckPosition';
import collisionDetection from './CollistionDetection';
import shapeT from './Shapes';
import deleteFilledLines from './DeleteFilledLines';

const moveShape = ( moveDirection, currentTable, currentShape, setCurrentTable, setCurrentShape ) => {
    const tableAfterMove = JSON.parse(JSON.stringify(currentTable));
    let shapeAfterMove = JSON.parse(JSON.stringify(currentShape));

    const moveToNewPosition = () =>{
        for (let i=0; i<shapeAfterMove.length; i++) {
            tableAfterMove[shapeAfterMove[i][0]][shapeAfterMove[i][1]] = 1
        }
    }

    //move down
    if (moveDirection==="down" && checkPosition(shapeAfterMove)[0]<19) {
        resetPreviousShapePosition(tableAfterMove, shapeAfterMove);
        for (let i=0; i<shapeAfterMove.length; i++) {
            shapeAfterMove[i][0] = shapeAfterMove[i][0]+1; 
        }

        if(collisionDetection(shapeAfterMove, tableAfterMove)) {
            for (let i=0; i<shapeAfterMove.length; i++) {
                shapeAfterMove[i][0] = shapeAfterMove[i][0]-1; 
            }
            moveToNewPosition();
            shapeAfterMove = JSON.parse(JSON.stringify(shapeT(currentTable, setCurrentTable)));
            // deleteFilledLines(currentTable, setCurrentTable);
        } 
        moveToNewPosition();
    }

    //move left
    if (moveDirection==="left" && checkPosition(shapeAfterMove)[1]>0) {
        resetPreviousShapePosition(tableAfterMove, shapeAfterMove);

        for (let i=0; i<shapeAfterMove.length; i++) {
            shapeAfterMove[i][1] = shapeAfterMove[i][1]-1; 
        }
        if(collisionDetection(shapeAfterMove, tableAfterMove)) {
            for (let i=0; i<shapeAfterMove.length; i++) {
                shapeAfterMove[i][1] = shapeAfterMove[i][1]+1; 
            }
        } 
        moveToNewPosition();
    }

    //move right
    if (moveDirection==="right" && checkPosition(shapeAfterMove)[2]<9) {
        resetPreviousShapePosition(tableAfterMove, shapeAfterMove);

        for (let i=0; i<shapeAfterMove.length; i++) {
            shapeAfterMove[i][1] = shapeAfterMove[i][1]+1; 
        }
        if(collisionDetection(shapeAfterMove, tableAfterMove)) {
            for (let i=0; i<shapeAfterMove.length; i++) {
                shapeAfterMove[i][1] = shapeAfterMove[i][1]-1; 
            }
        } 
        moveToNewPosition();
    }
    
    setCurrentShape(shapeAfterMove);
    setCurrentTable(tableAfterMove);
    deleteFilledLines(currentTable, setCurrentTable, tableAfterMove);
    
    if (checkPosition(shapeAfterMove)[0] === 19) {
        shapeAfterMove = JSON.parse(JSON.stringify(shapeT()));
        setCurrentShape(shapeAfterMove);
    }
    
}

export default moveShape;
