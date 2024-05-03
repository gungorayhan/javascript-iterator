

//----------------------------------------------------------
// state
// next
// return
// throw
//----------------------------------------------------------

(()=>{
    function customIterator(array) {
        let index = 0;
        return {
          next: function() {
            return index < array.length ?
              { value: array[index++], done: false } :
              { done: true };
          }
        };
      }
      
      let myArray = [1, 2, 3];
      let iterator = customIterator(myArray);
      
      console.log(iterator.next()); // { value: 1, done: false }
      console.log(iterator.next()); // { value: 2, done: false }
      console.log(iterator.next()); // { value: 3, done: false }
      console.log(iterator.next()); // { done: true }
})()

//-------------------------------------------------------------------

function* genFunc(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}

//suspended
const iterator = genFunc()

iterator.next(); //{ value: 1, done: false}
iterator.next(); //{ value: 2, done: false}
iterator.next(); //{ value: 3, done: false}
iterator.next(); //{ value: 4, done: true}

//closed
//--------------------------------------------------

function* generatorFunc(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}


console.log([...generatorFunc()]) //[ 1, 2, 3 ]

for(const value of generatorFunc()){
    console.log(value)
}
// 1
// 2
// 3

//---------------------------------------------

let myArray = [1,2,3,4,5]

let iteratorArray= myArray[Symbol.iterator]();

console.log(iteratorArray.next()); // { value: 1, done: false }
console.log(iteratorArray.next()); // { value: 2, done: false }
console.log(iteratorArray.next()); // { value: 3, done: false }
console.log(iteratorArray.next()); // { value: 4, done: false }
console.log(iteratorArray.next()); // { value: 5, done: false }
console.log(iteratorArray.next()); // { value: undefined, done: true }
