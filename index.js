function theBeatlesPlay(arrMusicians, arrInstruments){
  var arr = []
  
  var instrument = arrInstruments[0]
  for(var i = 0; i < arrMusicians.length; i++){
    arr.push(arrMusicians[i] + instrument)
    console.log(arr)
  }
  return arr
}