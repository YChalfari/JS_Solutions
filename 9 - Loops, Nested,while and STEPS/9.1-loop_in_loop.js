const listOfNeighbors = [["Canada", "Mexico"],["Spain"],["Norway", "Sweden", "Russia"],];

const printNeighbors = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      let neighbor= arr[i][j];
      console.log('Neighbor: ', neighbor);      
    }    
  }
}
printNeighbors(listOfNeighbors)