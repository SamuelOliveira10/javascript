

function well(x){
  const boas = x.filter((item) => item == 'good')
  const scrr = boas.length
  if (scrr > 0 && scrr < 3) {
    return 'Publish!'
  } else if (scrr > 2) {
    return 'I smell a series!'
  }// else if (scrr < 1) {
  //   return 'Fail!'
  // }
}

console.log(well(ideias))