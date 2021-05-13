const resetPreviousShapePosition = (tableAfterMove, currentShape) => {
    for (let i=0; i<currentShape.length; i++) {
        tableAfterMove[currentShape[i][0]][currentShape[i][1]] = 0
    }
}

export default resetPreviousShapePosition;