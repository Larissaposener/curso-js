const maca = {
    value: 2
}

const laranja = {
    value: 3
}
//o item é cada elementro dentro do array que vai ser modificado *
function mapComThis(arr, thisArg){
    return arr.map(function(item){
       return item * this.value;
    }, thisArg)
}

const nums = [1,2]
console.log('this -> maca',mapComThis(nums,maca))

//console.log('this -> laranja',MapComThis(nums,laranja))

//sem o this(obj)
function mapSemThis(arr){
    return arr.map(function(item){
        return item * 2
    })
}

const arr = [2,4,6,8,10]
console.log(mapSemThis(arr))