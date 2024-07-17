var varrRecipes = [
	{
		"id":"crepePancakes.html",
		"title":"Pancakes",
		"description":"pancake, dessert, vegetarian",
		"ingredients":"milk, flour, sugar, flour, egg, oil, lemon, butter",
		"utensils":"frying pan",
	},
	{
		"id":"americanPancakes.html",
		"title":"American Pancakes",
		"description":"American, pancake, dessert, vegetarian",
		"ingredients":"milk, flour, baking powder, sugar, flour, egg, oil, butter, salt, pecans, maple syrup",
		"utensils":"frying pan, cast iron",
	},
	{
		"id": "3Three",
		"title": "What is React?",
		"description":
			"React is a popular JavaScript library which heavily used to build single-page applications.",
	}]

var vRecipesIndex = lunr(function () {
	this.ref("id")
    this.field('title')
    this.field('description')
	this.field('ingredients')
	this.field('utensils')
  
    varrRecipes.forEach(function (doc) {
      this.add(doc)
    }, this)
  });

function fnSearch(event) {
    vResult = vRecipesIndex.search(event.target.elements.searchValue.value);
	event.preventDefault();
	
	varrResult = vResult.map((item) => {
		return varrRecipes.find((vRecipe) => item.ref === vRecipe.id)
	})
}