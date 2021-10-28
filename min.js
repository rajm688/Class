class Calc{
getMin(...data){
    if (data.length === 0){
        return 0;
    }
    else{
        return data.min();
    }
}
}
let arr = new Calc();
let minVal = arr.getMin([3,2,5,1,4,8,6]);
console.log(b);
