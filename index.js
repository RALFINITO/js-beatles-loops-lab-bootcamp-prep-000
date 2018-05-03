function theBeatlesPlay(arrMusicians, arrInstruments){
  var arr = []
  
  for(var i = 0; i < arrMusicians.length; i++){
    arr.push(arrMusicians[i] + " plays " + arrInstruments[i])
  }
  return arr
}


function johnLennonFacts(arrFacts){
  var arr = []
  var i = 0
  while(i < arrFacts.length){
    arr.push(arrFacts[i] + "!!!")
    i++
  }
  
  return arr
    
  }
