import resetPreviousShapePosition from "./ResetPreviousShapePosition";

const turn = (currentShape, setCurrentShape, currentTable, setCurrentTable ) => {
if(currentShape[0][1] > 0 && currentShape[0][1] < 9 && currentShape[0][0] <19 && currentShape[0][0] !== 0) {
    const tableAfterMove = JSON.parse(JSON.stringify(currentTable));
    const positionAfterTurn = [];
    positionAfterTurn.push(currentShape[0]);
    
    for (let i = 1; i<currentShape.length; i++) {
        const x1 = currentShape[i][0] - currentShape[0][0];
        const y1 = currentShape[i][1] - currentShape[0][1];
    
        const x2 = 0*x1+(-1*y1);
        const y2 = 1*x1+(0*y1);
    
        const x3 = currentShape[0][0] + x2;
        const y3 = currentShape[0][1] + y2;
    
        positionAfterTurn.push([x3, y3]);
    }

    let canTurn = true;
    resetPreviousShapePosition(tableAfterMove, currentShape);
    for (let i = 1; i<positionAfterTurn.length; i++) {
        if (tableAfterMove[positionAfterTurn[i][0]][positionAfterTurn[i][1]] !== 0) {
            canTurn = false;
        }
    }
    
    if (canTurn) {
        resetPreviousShapePosition(tableAfterMove, currentShape);    
        //activate turn
        for (let i=0; i<positionAfterTurn.length; i++) {
            tableAfterMove[positionAfterTurn[i][0]][positionAfterTurn[i][1]] = 1
        }
        setCurrentShape(positionAfterTurn);
        setCurrentTable(tableAfterMove);

    }
    } 
    
}

  export default turn;