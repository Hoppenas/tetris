const checkPosition = (position) => {
    const currentPosition = [...position];
    const column = [];
    const line = [];
    for (let i = 0; i<currentPosition.length; i++) {
        column.push(currentPosition[i][1]);
        line.push(currentPosition[i][0]);
    }
    // console.log("position");
    // console.log([Math.max(...line), Math.min(...column), Math.max(...column)]);
    return([Math.max(...line), Math.min(...column), Math.max(...column)]);
} 

export default checkPosition;