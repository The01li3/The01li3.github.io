var varrRecipes = [
	{
		"id":"crepePancakes.html",
		"title":"Pancakes",
		"description":" pancake, dessert, vegetarian",
		"ingredients":[ "milk", "flour", "sugar", "flour", "egg", "oil", "lemon", "butter"],
		"utensils":" frying pan",
	},
	{
		"id":"americanPancakes.html",
		"title":"American Pancakes",
		"description":" American, pancake, dessert, vegetarian",
		"ingredients":[ "milk", "flour", "baking powder", "sugar", "flour", "egg", "oil", "butter", "salt", "pecans", "maple syrup"],
		"utensils":" frying pan, cast iron",
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

var vSearchResultsTemplate = Handlebars.compile(`
	<hr>
	{{#each this}}
<a href = "{{id}}"><h2>{{title}}</h2></a>
<p>Ingredients: {{helperSortAlpha ingredients}}</p>
<hr>
{{/each}}`);

Handlebars.registerHelper('helperSortAlpha', function (pSortArray) {	
	return pSortArray.sort().join(', ');
});


function fnSearch(vSearchParam) {
	vSearchlist = "";
    vResult = vRecipesIndex.search(vSearchParam);	

	varrResult = vResult.map(function(item) {
		return varrRecipes.find(function(vRecipe) {
			return item.ref === vRecipe.id;
		});
	});
	document.getElementById("resultList").innerHTML = vSearchResultsTemplate(varrResult);
	document.getElementById("resultsHeader").innerHTML = 'Results - "' + vSearchParam + '"';
}