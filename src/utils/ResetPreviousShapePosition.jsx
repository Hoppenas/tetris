const resetPreviousShapePosition = (tableAfterMove, currentShape, setCurrentTable) => {
    for (let i=0; i<currentShape.length; i++) {
        tableAfterMove[currentShape[i][0]][currentShape[i][1]] = 0
    }
    setCurrentTable(tableAfterMove);
}

export default resetPreviousShapePosition;