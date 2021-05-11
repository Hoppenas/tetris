  // const shapeT = [[1, 4], [1, 3], [1, 5], [0, 4]];
  // console.log("shapeT")
  // console.log(shapeT)
const shape = [
    [[1, 4], [1, 3], [1, 5], [0, 4]],
    [[0, 4], [0, 3], [0, 5], [0, 6]]
];

const shapeT = () => [...shape[Math.floor(Math.random() * 2)]];
  
export default shapeT;
