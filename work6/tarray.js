var  arr = [1,2,3,4,2,5,6,2,7,2];
doucument.get.ElementId('array').innerHTML = arr.toString()
var index = 0,newArr = [];
for(var i in arr){
    if(arr[i] !=2){
        newArr[index] = arr[i];
        ++index
    }
}
doucument.get.ElementId('transArray').innerHTML = newArr.toString()
