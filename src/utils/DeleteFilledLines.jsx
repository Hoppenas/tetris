
const deleteFilledLines = (currentTable, setCurrentTable, tableAfterMove) => {
    const line = [[0,0,0,0,0,0,0,0,0,0]];
    for(let i = 0; i<currentTable.length; i++) {
        if (!currentTable[i].includes(0)) {
          let updatedTable = JSON.parse(JSON.stringify(currentTable));
          updatedTable.splice(i, 1);
          let res = line.concat(updatedTable);
          setCurrentTable(res);
        } 
    }
}

export default deleteFilledLines;