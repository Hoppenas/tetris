const collisionDetection = (shapeAfterMove, tableAfterMove) => {
    let collisionDetected = false;
    if(shapeAfterMove) {
        for (let i = 0; i<shapeAfterMove.length; i++) {
            if(tableAfterMove[shapeAfterMove[i][0]][shapeAfterMove[i][1]] === 1) {
                collisionDetected = true;
            }
        }
    }
    return collisionDetected;
}

export default collisionDetection;
