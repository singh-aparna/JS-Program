//Flatten a Nested Array

let arr = [1,[2,[3,[4]]]];

function flatten(arr)
{
    return arr.flat(Infinity);
}

console.log(flatten(arr));
