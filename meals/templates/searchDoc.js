const recipesSearch = [
	{
		id: "crepePankes.html",
		title: "Pankes",
		description:
			"Dessert, sugar, flour, bicarb, egg, oil",
	},
	{
		id: "2",
		title: "What is Java?",
		description:
			"Java is a cross-platform object-oriented programming language which at first developed by the Sun Microsystems.",
	},
	{
		id: "3",
		title: "What is React?",
		description:
			"React is a popular JavaScript library which heavily used to build single-page applications.",
	},
]

var idx = lunr(function () {
    this.ref('name')
    this.field('text')
  
    recipesSearch.forEach(function (doc) {
      this.add(doc)
    }, this)
  })