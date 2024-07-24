function foo(x,y,...others){
    console.log(x);
    console.log(y);
    console.log(others);
}

function sort(...numbers){
    console.log(numbers);
    return numbers.sort();//to return the sorted list
}
const result=sort(14,78,45,10,97);
console.log(result);