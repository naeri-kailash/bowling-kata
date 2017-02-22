// Score 119:
 var frames = [
  [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]
 ]
// Score 141:
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]

function strike (frameNo) {
  var addA = 0
  var addB = 0
  var nextFrame = frameNo + 1
  var nextNextFrame = nextFrame + 1
  if (frameNo != 8) {
    if (frames[nextFrame][0] === 10) { // if a == 10, count one value from subs array
      addA = frames[nextFrame][0]
      addB = frames[nextNextFrame][0]
    } else {
      addA = frames[nextFrame][0]
      addB = frames[nextFrame][1]
    }
  } else {
    var lastFrames = 0
    lastFrames = frames[9][0] + frames[9][1] + 10
    return lastFrames
   }
  return addA + addB + 10 // next 2 values starting in the subsequent array added
}

function spare (frameNo) {
  var nextFrame = frameNo + 1
  var addA = 0
  addA = frames[nextFrame][0]
  return addA + 10
}

  function lastFrame (frames) {
    var lastFrameResult = 0
    for (var i = 0; i < frames[9].length; i++) {
      lastFrameResult += frames[9][i]
    }
    return lastFrameResult
  }

 function totalScore (frames) {
   var total = 0
   for (var i = 0; i < 9; i++) { // loop through arrays (1-9){
     var frameNo = i
     var a = frames[i][0]
     var b = frames[i][1]
     if (a === 10) { // if a == 10, = strike
       total += strike(frameNo) // add strike score to total
     } else if (a + b === 10) { // else if a + b == 10 = spare
       total += spare(frameNo)
     } else {
       total += (a + b)
     }
   }
   total += lastFrame(frames)
   console.log(total)
   return total
 }

 totalScore(frames)
