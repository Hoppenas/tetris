const shape = [
    [[1, 4], [1, 3], [1, 5], [0, 4]],
    [[0, 4], [0, 3], [0, 5], [0, 6]],
    [[1, 4], [0, 3], [1, 3], [1, 5]],
    [[1, 4], [0, 4], [1, 3], [0, 5]],
    [[1, 4], [0, 3], [0, 4], [1, 3]],
    [[1, 4], [0, 3], [0, 4], [1, 5]],
    [[1, 4], [1, 3], [0, 5], [1, 5]]
];

const shapeT = () => {
    const randomShape = shape[Math.floor(Math.random() * shape.length)];
    return randomShape;
}

export default shapeT;
