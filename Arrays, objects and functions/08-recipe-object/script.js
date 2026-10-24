let recipe = {
    title: "Hamburger and chips",
    serves: 2,
    ingredients: ['patty', 'lettuce', 'onions', 'tomatoes', 'cheese']
}

let recipeKeys = Object.values(recipe);

console.log(recipeKeys[0]);
console.log(`Serves: ${recipeKeys[1]}`);
console.log(`Ingredients:`);
for(let i of recipeKeys[2]){
    console.log(`• ${i}`);
}
