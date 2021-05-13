const checkPosition = (position) => {
    const column = [];
    const line = [];
    for (let i = 0; i<position.length; i++) {
        column.push(position[i][1]);
        line.push(position[i][0]);
    }
    return([Math.max(...line), Math.min(...column), Math.max(...column)]);
} 

export default checkPosition;