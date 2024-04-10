

function well(x){
  const boas = x.filter((item) => item == 'good')
  if (boas.length > 0 && boas.length < 3) return 'Publish!'
  else if (boas.length > 2) return 'I smell a series!'
  else if (boas.length < 1) return 'Fail!'
}
const ideias = ['goo', 'goo', 'goo']
console.log(well(ideias))