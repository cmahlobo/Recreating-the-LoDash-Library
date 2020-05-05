const _ = {
  clamp(number,lower,upper){
    const lowerClampedValue = Math.max(number,lower)
    const clampedValue = Math.min(lowerClampedValue, upper)
    return clampedValue
  },
  inRange(number, start, end){
    if(end===undefined){
      end = start;
      start = 0;
    } else if(start>end){
      let temp = end;
      end = start;
      start = temp
    }
    let isInRange = (start<=number&&number<end)
    return isInRange
  },
  words(string){
    let words = string.split('');
    return words
  },
  pad(string, length){
    if(length<=string){
      let startPaddingLength = Math.floor((length-string)/2);
      let endPaddingLength = length-string-startPaddingLength;
      let paddedString = this.repeat(' ') + string +this.endPaddingLength(' ');
      return paddedString
    }
  },
  has(object, key){
     let hasValue = object[key];
    if(hasValue != undefined){
      return true
    } else{
      return false
    }
  },
  invert(object){
    let invertedObject = {};
    for(let key in object){
      const originalValue = object[key];
      invertedObject = {originalValue :key}
    }
    return invertedObject
  },
  findKey(object, predicate){
    for(let key in object){
      let value = object[key];
      let predicateReturnValue = predicate(value);
      if(predicateReturnValue){
        return key;
      };
    }return undefined
  },
  drop(array, n){
    if(n===undefined){
      n=1
    }
    let droppedArray = array.slice(n)
    return droppedArray
  },
  dropWhile(array, predicate){
    let dropNumber = array.findIndex(function(element, index){
      return !predicate(element, index, array)
    })
    let droppedArray = this.drop(dropNumber)
    return droppedArray
  },
  chunk(array, size=1){
    let arrayChunks = [];
    for(let i = 0; i < array.length; i += size){
      let arrayChunk = array.slice(i, i + size);
      arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
  }
}




// Do not write or modify code below this line.
module.exports = _;