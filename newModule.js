function doSomething(){
    console.log("something is called.")
}
function againDoSomething(){
    console.log("hello")

}
let arr = [];
function createFun(element){
    arr.push(element)
    return arr;
}
function readFun(element){
    return arr;
}
function updateFun(index, element){
    arr[index] = element;
    return arr;
}
function deleteFun(element){
    arr.splice(index,1)
    return arr;
}

module.exports = {doSomething, againDoSomething,createFun, readFun, updateFun, deleteFun};