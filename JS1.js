//Find Duplicates in Array using Set 

let arr = [1,3,4,1,2,3,7,8,9,3,2,1];

function findDuplicates(arr)
{
    let seen = new Set();
    let duplicates = new Set();
    for(let num of arr)
    {
        if(seen.has(num)) duplicates.add(num);
        else seen.add(num)
    }
    return [...duplicates];
}
console.log(findDuplicates(arr));