function theBeatlesPlay(arrMusicians, arrInstruments){
  var arr = []
  
  for(var i = 0; i < arrMusicians.length; i++){
    arr.push(arrMusicians[i] + " plays " + arrInstruments[i])
    console.log(arr)
  }
  return arr
}