/*              DESCRIÇÃO               */ {

/* Índices de array: */ {
    const years = new Array(1, 2, 3)
    console.log(years["2"] !== years["02"]);
}

/* Arrays esparsos: */ {
    // Alguns métodos simplismente ignoram esses elementos: 
    const colors = ["red", "yellow", "blue"];
    colors[5] = "purple";
    colors.forEach((item, index) => {
      console.log(`${index}: ${item}`);
    });
    // Output:
    // 0: red
    // 1: yellow
    // 2: blue
    // 5: purple
    
    colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']
}
}