/*
	{
		"id": "id",
		"title": "title",
		"ingredients": ["1 x 400g can of","1 garlic clove ()", "~Optional toppings: x | y | z."],
		"description": "easy, one pot, dump and cook, fish",
		"mealType": "sauce, dip, snack, main, dessert",
		"appliance": "hob, oven, slow cook, air fry",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "Cast Iron, Cake Tin, Saucepan, Frying Pan, Ninja",
		"source": "https://the01li3.github.io/"
	},
*/

var varRecipes = [
	{
		"id": "americanPancakes",
		"title": "American Pancakes",
		"ingredients": ["135g plain flour", "1 tsp baking powder", "1/2 tsp salt", "2 tbsp caster sugar", "1 large egg", "130ml milk", "2 tbsp olive oil", "~Optional toppings: Pecans | Maple Syrup | Fruit | Peanut Butter | Chocolate Spread."],
		"description": "",
		"mealType": "dessert",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "American",
		"utensils": "Cast Iron",
		"source": "DISCORD"
	},{
		"id": "bananaCake",
		"title": "Banana Cake",
		"ingredients": ["125g butter", "150g caster sugar", "2 eggs", "3 very ripe bananas", "1 tsp vanilla", "85g chocolate chips", "90g self raising flour", "90g plain flour", "1 tsp bicarbonate of soda"],
		"description": "Ann Cochius",
		"mealType": "dessert",
		"appliance": "oven",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "Loose Bottom Cake Tin",
		"source": "DISCORD"
	},{
        "id": "beansOnToast",
        "title": "Beans On Toast",
        "ingredients": ["1 x 400g can of beans","cheese","4 slices of toast","4 eggs","~Optional: Potato Waffles instead of toast"],
        "description": "easy",
        "mealType": "lunch, main",
        "appliance": "microwave, hob, toaster",
        "diet": "vegetarian, pescatarian",
        "origin": "British",
        "utensils": "Saucepan",
        "source": "https://the01li3.github.io/"
    }, {
		"id": "blackBeanAndSeitanStirFry",
		"title": "Black Bean And Seitan Stir Fry",
		"ingredients": ["1 x 400g can of black beans","30g dark brown soft sugar","3 garlic cloves (peeled)","2 tbsp soy sauce","1 tsp Chinese five spice","2 tbsp rice vinegar","1 tbsp peanut butter","1 red chill", "~Optional Toppings: Seitan | Red Pepper | Pak Choi | Spring Onions."],
		"description": "",
		"mealType": "main",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "Chinese",
		"utensils": "Frying Pan, Blender, Sauce Pan",
		"source": "https://www.bbcgoodfood.com/recipes/seitan-black-bean-stir-fry"
	},{
        "id": "bourguignonPie",
        "title": "Bourguignon Pie",
        "ingredients": ["6 portobello mushrooms (chopped)","300g chestnut mushrooms (1/4'd)","500g mince","500ml red wine","3 large shallots (diced)","3 medium carrots (sliced)","3 garlic cloves (minced)","1 tbsp fresh thyme (minced)","2 bay leaves","2 tbsp tomato paste","250ml vegetable stock","2 tbsp cornflour","1 tbsp soy sauce","1 sheet of puff pasty"],
        "description": "",
        "mealType": "main",
        "appliance": "hob, oven",
        "diet": "vegetarian, pescatarian",
        "origin": "France",
        "utensils": "Cast Iron, Frying Pan, Oven dish",
        "source": "https://thefirstmess.com/2021/11/17/vegan-mushroom-bourguignon-pot-pie/"
    },{
        "id": "brownies",
        "title": "Brownies",
        "ingredients": ["113g butter","50g cocoa powder","1 x 400g can of sweetened condensed milk","120g icing sugar","2 tsp vanilla","2 tsp molasses","1 egg yolk(whole + 1 tsp baking powder for cakey version)","90g (120g for cakey) plain flour","170g chocolate chips or other addition",],
        "description": "",
        "mealType": "snack, dessert",
        "appliance": "hob, oven, ",
        "diet": "vegetarian, pescatarian",
        "origin": "",
        "utensils": "Oven Dish 20x20, Saucepan",
        "source": "https://www.youtube.com/watch?v=lhnzdRD-hX8"
    },{
		"id": "buffaloCauliflowerCasserole",
		"title": "Buffalo Cauliflower Casserole",
		"ingredients": ["470ml vegetable stock", "118ml buffalo sauce", "22g nutritional yeast", "1 tsp onion powder", "374g chickpeas (2 cans work)", "200g cauliflower (bite sized chunks)", "182g uncooked brown rice", "3 garlic cloves (minced)", "ranch"],
		"description": "easy, dump and cook",
		"mealType": "main",
		"appliance": "oven",
		"diet": "vegetarian, pescatarian",
		"origin": "American",
		"utensils": "Casserole Dish",
		"source": "https://frommybowl.com/buffalo-cauliflower-chickpea-casserole/"
	},{
		"id": "buffaloRanchPasta",
		"title": "Buffalo Ranch Pasta",
		"ingredients": ["3 garlic cloves (minced)", "1 tbsp nutritional yeast", "2 tsp dried parsley", "1 tsp dried dill", "1/2 tsp onion powder", "225g dry pasta", "770ml water", "60ml buffalo sauce", "2 tbsp cream cheese", "2 tsp cornstarch"],
		"description": "easy, one pot",
		"mealType": "main",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "American",
		"utensils": "Saucepan, Frying Pan",
		"source": "https://frommybowl.com/vegan-buffalo-ranch-pasta-one-pot/"
	},{
		"id": "buffaloSauce",
		"title": "Buffalo Sauce",
		"ingredients": ["4 tbsp butter/low fat spread", "1 tbsp hot chilli sauce", "1/2 tbsp ketchup"],
		"description": "",
		"mealType": "dip, sauce",
		"appliance": "microwave",
		"diet": "vegetarian, pescatarian",
		"origin": "American",
		"utensils": "Bowl",
		"source": "DISCORD"
	},{
        "id": "caramelisedOnionPasta",
        "title": "Caramelised Onion Pasta",
        "ingredients": ["300g white onions","1 tbsp balsamic glaze","1 bulb of garlic","175g shortcut pasta","65g sun dried tomato","bunch of fresh basil","75g mascarpone","15g parmesan"],
        "description": "easy",
        "mealType": "main",
        "appliance": "hob, oven",
        "diet": "vegetarian, pescatarian",
        "origin": "",
        "utensils": "Oven Dish, Saucepan",
        "source": "https://www.dontgobaconmyheart.co.uk/caramilsed-onion-pasta/#wprm-recipe-container-23949"
    }, {
		"id": "carrotCake",
		"title": "Carrot Cake",
		"ingredients": ["115ml sunflower oil", "230g self raising flour", "1 tsp baking powder", "1 1/2 tsp ground cinnamon", "1/2 tsp mixed spice", "1/2 tsp ground ginger", "230g light brown muscovado sugar", "100g pecans (halved)", "260g carrots (grated)", "3 medium eggs (beaten)"],
		"description": "",
		"mealType": "dessert",
		"appliance": "oven",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "Loose Bottom Cake Tin",
		"source": "https://www.deliciousmagazine.co.uk/recipes/paul-hollywoods-ultimate-carrot-cake/"
	},{
		"id": "castIronNaan",
		"title": "Cast Iron Naan",
		"ingredients": ["1 tsp sugar", "113ml warm water", "10g active dry yeast", "281g plain flour", "125g yoghurt", "1/2 tsp salt", "1 tbsp oil"],
		"description": "",
		"mealType": "side",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "Indian",
		"utensils": "Cast Iron",
		"source": "https://rasamalaysia.com/naan/#wprm-recipe-container-746558 and discord"
	},{
		"id": "chanaMasala",
		"title": "Chana Masala",
		"ingredients": ["2 tsp garam masala", "1 tsp paprika", "1 tsp turmeric", "1 tsp ground coriander", "4 garlic cloves (minced)", "1 onion (finely diced)", "1 x 400g can chopped tomato", "1 tbsp lemon juice", "2 x 400g cans of chickpeas", "1 tbsp tomato puree"],
		"description": "easy, dump and cook",
		"mealType": "main",
		"appliance": "slow cook, hob",
		"diet": "vegetarian, pescatarian",
		"origin": "Indian",
		"utensils": "Slow Cooker, Saucepan, Ninja",
		"source": "PoN 45"
	},{
		"id": "cheeseAndMarmiteSwirls",
		"title": "Cheese And Marmite Swirls",
		"ingredients": ["320g ready rolled light puff pastry", "40g reduced fat cheddar cheese", "1 tbsp marmite", "2 tsp boiling water"],
		"description": "",
		"mealType": "snack",
		"appliance": "over",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "",
		"source": "PoN p210"
	},{
		"id": "chickenAlfredo",
		"title": "Chicken Alfredo",
		"ingredients": ["680g chicken breasts", "1 tsp oregano", "1 tsp dried basil", "455g pasta", "10g fresh parsley", "80g parmesan", "2 tbsp butter", "4 garlic cloves (minced)", "3 tbsp plain flour", "480ml milk"],
		"description": "easy",
		"mealType": "main",
		"appliance": "hob",
		"diet": "",
		"origin": "American",
		"utensils": "Saucepan, Frying Pan",
		"source": "https://tasty.co/recipe/easy-chicken-alfredo-penne"
	},{
		"id": "coconutRice",
		"title": "Coconut Rice",
		"ingredients": ["400g jasmine rice", "340ml water", "1 x 400ml can of coconut milk", "1 tsp salt", "1 tsp sugar"],
		"description": "",
		"mealType": "side",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "Saucepan",
		"source": "https://www.aheadofthyme.com/2016/04/easy-coconut-rice/"
	},{
		"id": "codInRomescoSauce",
		"title": "Cod In Romesco Sauce",
		"ingredients": ["5 ripe tomatoes (roughly chopped)","1 red onion (roughly chopped)","1 red bell pepper (deseeded and chopped)","1 red chilli (deseeded)","5 garlic cloves", "1 slice of crusty bread","500g new potatoes","2 cod fillets","2 tbsp red wine vinegar","~Optional Side: Broccoli | Vegetables | Salad | Basil Leaves"],
		"description": "fish",
		"mealType": "sauce, main",
		"appliance": "hob, oven, air fry",
		"diet": "pescatarian",
		"origin": "Spanish",
		"utensils": "Frying Pan, Ninja",
		"source": "Page 156 Joe Wick's 30 min meals"
	},{
        "id": "cornBread",
        "title": "Corn Bread",
        "ingredients": ["115g butter","360ml buttermilk","155g cornmeal","2 large eggs","64g honey","1/2 tsp salt","pinch of cayenne pepper","120g self raising flour"],
        "description": "easy, one pot",
        "mealType": "lunch, side, snack",
        "appliance": "hob, oven",
        "diet": "vegetarian, pescatarian",
        "origin": "",
        "utensils": "Cast Iron",
        "source": "https://www.allrecipes.com/recipe/267829/cast-iron-cornbread/"
    },{
        "id": "cornDogs",
        "title": "Corn Dogs",
        "ingredients": ["120g wholewheat white flour","155g yellow cornmeal","1 tsp baking powder","1/2 tsp salt","1/2 tsp ground mustard","85g butter","120ml milk","85g honey","7 hot dogs (halved)","14 wooden sticks"],
        "description": "",
        "mealType": "lunch, side, snack, main",
        "appliance": "oven, air fry",
        "diet": "",
        "origin": "American",
        "utensils": "Oven Tray ,Ninja",
        "source": "https://thebakermama.com/recipes/baked-corn-dogs/"
    },{
		"id": "creamCheeseFrosting",
		"title": "Cream Cheese Frosting",
		"ingredients": ["50g butter", "200g cream cheese", "100g icing sugar", "some vanilla"],
		"description": "",
		"mealType": "decoration, frosting",
		"appliance": "",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "Bowl",
		"source": "https://www.deliciousmagazine.co.uk/recipes/paul-hollywoods-ultimate-carrot-cake/"
	},{
		"id": "crepePancakes",
		"title": "Crepe Pancakes",
		"ingredients": ["100g plain flour", "2 large eggs", "300ml milk", "~Optional Toppings: Lemon | Sugar | Whipped Cream | Strawberries."],
		"description": "crepe",
		"mealType": "dessert",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "France",
		"utensils": "Frying Pan",
		"source": "BBC"
	},{
        "id": "dutchBabies",
        "title": "Dutch Babies",
        "ingredients": ["2 large eggs","120ml milk","60g plain flour","pinch of nutmeg","pinch of salt","28g butter","~Optional Toppings: Lemon | Sugar | Whipped Cream | Strawberries | Icing Sugar."],
        "description": "easy, one pot",
        "mealType": "snack, dessert",
        "appliance": "oven",
        "diet": "vegetarian, pescatarian",
        "origin": "American",
        "utensils": "Cast Iron",
        "source": "https://www.allrecipes.com/recipe/23898/dutch-babies-ii/"
    }, {
        "id": "enchilada",
        "title": "Enchilada",
        "ingredients": ["sauce (for topping)","4 wraps", "~Optional toppings: Sweetcorn | Black Beans | Black Olives | Mince | Sweet Potato | Butternut Squash."],
        "description": "easy",
        "mealType": "main",
        "appliance": "hob, oven",
        "diet": "vegetarian, pescatarian",
        "origin": "Mexican",
        "utensils": "Oven Dish 20x20, Frying Pan",
        "source": "https://the01li3.github.io/"
    },{
        "id": "falafel",
        "title": "Falafel",
        "ingredients": ["falafel","2 pita","hummus", "~Optional toppings: Olives | Lettuce | Peppers | Tomato | Cucumber | Chips."],
        "description": "easy, one pot",
        "mealType": "side, snack, main",
        "appliance": "air fry",
        "diet": "vegetarian, pescatarian",
        "origin": "Egyptian",
        "utensils": "Ninja",
        "source": "https://the01li3.github.io/"
    }, {
		"id": "garlicAndGingerCurry",
		"title": "Garlic And Ginger Curry",
		"ingredients": ["350ml stock", "1/4 tsp fenugreek seeds", "1 onion (diced)", "4 garlic cloves (minced)", "3cm ginger", "1 green chilli (finely chopped)", "1 1/2 tsp garam masala", "1 1/2 tsp ground cumin", "1 tsp turmeric", "1/2 tsp chilli powder", "2 tbsp tomato puree", "1 x 400g can of chopped tomato", "1 tbsp mango chutney","2 white fish fillet"],
		"description": "fish, easy",
		"mealType": "main",
		"appliance": "hob",
		"diet": "pescatarian",
		"origin": "Indian",
		"utensils": "Frying Pan",
		"source": "PoN 82"
	},{
		"id": "greekStyleBeans",
		"title": "Greek Style Beans",
		"ingredients": ["2 onions (finely chopped)", "2 garlic cloves (minced)", "2 x 400g cans of chopped tomato", "2 tbsp tomato puree", "2 tbsp fresh oregano leaves", "2 x 400g cans of butter beans", "90g reduced fat feta cheese"],
		"description": "easy, dump and cook",
		"mealType": "main",
		"appliance": "oven",
		"diet": "vegetarian, pescatarian",
		"origin": "Greek",
		"utensils": "Casserole Dish",
		"source": "PoN 192"
	},{
		"id": "hoisinCashewTofu",
		"title": "Hoisin Cashew Tofu",
		"ingredients": ["marinated tofu", "8 spring onions (1 inch pieces white and green separate)", "4 garlic cloves (minced)", "60ml hoisin sauce", "60ml water", "2 tbsp rice vinegar", "1 tbsp soy sauce", "2 tsp cornstarch", "107g cashews"],
		"description": "easy",
		"mealType": "main",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "Chinese",
		"utensils": "Saucepan",
		"source": "https://frommybowl.com/vegan-cashew-chicken-tofu/"
	}, {
        "id": "jacketPotato",
        "title": "Jacket Potato",
        "ingredients": ["2 potatoes","butter", "~Optional toppings: beans | cheese | tuna | salad."],
        "description": "easy, dump and cook, fish",
        "mealType": "side, main",
        "appliance": "microwave, air fry",
        "diet": "vegetarian, pescatarian",
        "origin": "Peru",
        "utensils": "",
        "source": "https://the01li3.github.io/"
    }, {
		"id": "kasespatzle",
		"title": "Kasespatzle",
		"ingredients": ["250g dried spaetzle cooked", "6 tbsp butter", "3 large onions (sliced)", "1/2 tsp salt", "1/2 tsp sugar", "cheeses various (emmental | gruyere etc.)"],
		"description": "easy",
		"mealType": "main",
		"appliance": "oven",
		"diet": "vegetarian, pescatarian",
		"origin": "Austrian",
		"utensils": "Casserole Dish", 
		"source": "https://www.daringgourmet.com/kasespatzle-swabian-german-macaroni-and-cheese/"
	},{
		"id": "lemonPosset",
		"title": "Lemon Posset",
		"ingredients": ["600ml double cream", "200g caster sugar", "3 lemon zest", "75ml lemon juice"],
		"description": "",
		"mealType": "dessert",
		"appliance": "fridge",
		"diet": "vegetarian, pescatarian",
		"origin": "British",
		"utensils": "Ramekin",
		"source": "https://www.bbcgoodfood.com/recipes/lemon-posset-sugared-almond-shortbread"
	},{
		"id": "lemonStirFry",
		"title": "Lemon Stir Fry",	
		"ingredients": ["2 tsp honey", "2 lemons (juiced)", "150ml chicken stock", "2 tbsp soy sauce", "4 chicken breasts (chunks)", "1 tbsp cornflour", "2 carrots (finely sliced)", "1 red pepper (sliced)", "140g sugar snap peas"],
		"description": "easy, one pot",
		"mealType": "main",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "Chinese",
		"utensils": "Frying Pan",
		"source": "https://www.bbcgoodfood.com/recipes/sticky-lemon-chicken"
	},{
        "id": "lentilCoconutCurry",
        "title": "Lentil Coconut Curry",
        "ingredients": ["1 onion (diced)","2 garlic cloves (minced)","1 red chilli","1 carrot (chopped)","10g of ginger (chopped)","1.5 tbsp tikka masala paste","1 x 400g can of cooked green lentils","220ml light coconut milk","200g frozen peas"],
        "description": "easy, one pot",
        "mealType": "side, main",
        "appliance": "hob",
        "diet": "vegetarian, pescatarian",
        "origin": "Indian",
        "utensils": "Saucepan",
        "source": "https://www.bbcgoodfood.com/recipes/speedy-lentil-coconut-curry"
    },{
		"id": "lowCaloriePizza", // make the flour and yoghurt grams
		"title": "Low Calorie Pizza",
		"ingredients": ["1.33 cups of self raising flour","1.33 cups of Greek yoghurt","1/2 tsp salt","2 tsp mixed herbs", "~Optional toppings: Cheese | Meats | Pineapple | Sweetcorn | Onions etc."],
		"description": "",
		"mealType": "snack, main",
		"appliance": "oven",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "Baking Tray",
		"source": "https://thebigmansworld.com/low-calorie-pizza/"
	},{
		"id": "meadBasics",
		"title": "Mead Basics",
		"ingredients": ["Water","Honey","Yeast","Camden Tablets","Yeast Nutrients"],
		"description": "",
		"mealType": "",
		"appliance": "",
		"diet": "",
		"origin": "",
		"utensils": "…TBD",
		"source": "FuckKnows, delay it"
	},{
		"id": "misoSoup",
		"title": "Miso Soup",
		"ingredients": ["500ml dashi stock", "3 tbsp miso paste", "~Optional Toppings: 1 tbsp Dried Wakame | Tofu | Spring Onions | Egg"],
		"description": "easy, one pot",
		"mealType": "main",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "Japanese",
		"utensils": "Saucepan",
		"source": "All recipes"
	},{
		"id": "nachoCasserole",
		"title": "Nacho Casserole",
		"ingredients": ["300g enchilada sauce", "1 x 400g can of black beans", "175g sweetcorn", "120g sliced olives", "bag of tortilla chips", "120g ish cheddar or other cheese","~Optional Toppings: Sliced Jalapeno"],
		"description": "easy, dump and cook",
		"mealType": "main",
		"appliance": "oven",
		"diet": "vegetarian, pescatarian",
		"origin": "American",
		"utensils": "Casserole Dish",
		"source": "One Pan Cookbook for Men, p73"
	},{
		"id": "noKneadFocaccia",
		"title": "No Knead Focaccia",
		"ingredients": ["500g bread/plain flour", "10g kosher/table salt", "4g instant dry yeast", "400g warm water", "68g extra-virgin olive oil"],
		"description": "pizza",
		"mealType": "main, side",
		"appliance": "oven",
		"diet": "vegetarian, pescatarian",
		"origin": "Italian",
		"utensils": "Cast Iron",
		"source": "https://www.seriouseats.com/easy-no-knead-focaccia"
	},{
		"id": "pastaSalad",
		"title": "Pasta Salad",
		"ingredients": ["250g Pasta","~Optional Sauces: Pesto | Lemon | Mayo", "~Optional toppings: Chickpeas | Mixed Beans | Sweetcorn | Onion | Pepper | Tuna | Pine Nuts | Cucumber | Olives | Radish."],
		"description": "easy, one pot",
		"mealType": "lunch, snack",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "Saucepan",
		"source": "https://the01li3.github.io/"
	},{
		"id": "pecanTassies",
		"title": "Pecan Tassies",
		"ingredients": ["130g butter", "100g soft cheese", "140g plain flour", "175g light brown sugar", "1 egg", "1 tsp vanilla", "115g pecans (chopped)"],
		"description": "",
		"mealType": "dessert",
		"appliance": "oven",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "Mini Muffin Tray, Stamper, Rolling Pin",
		"source": "DISCORD"
	},{
		"id": "pineappleColeslaw",
		"title": "Pineapple Coleslaw",
		"ingredients": ["250g cabbage (shredded)", "1/2 red onion (thinly sliced)", "1 jalapeno (diced)", "1 carrot (shredded)", "158g pineapple (1/4 inch cubes)", "1/2 lime juice", "1 1/2 tbsp distilled white vinegar", "1/2 tsp salt"],
		"description": "",
		"mealType": "side",
		"appliance": "bowl",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "",
		"source": "https://frommybowl.com/bbq-tempeh-tacos-pineapple-coleslaw/#tasty-recipes-6125-jump-target"
	},{
		"id": "pineappleFriedRice",
		"title": "Pineapple Fried Rice",
		"ingredients": ["2 eggs", "2 garlic cloves (crushed)", "4 spring onions (chopped)", "300g~ cooked rice", "100g frozen peas", "1 tsp sesame oil", "1tbsp light soy sauce", "200g~ pineapple (large chunks)","150g bean sprouts"],
		"description": "easy, one pot,",
		"mealType": "side, main",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "frying pan",
		"source": "https://www.bbcgoodfood.com/recipes/pineapple-fried-rice"
	},{
        "id": "pumpkinAndSpinachLasagne",
        "title": "Pumpkin and Spinach Lasagne",
        "ingredients": ["750g pumpkin/butternut squash (chunks)","1 large bunch of spinach (wilted and chopped)","250g low-fat cottage cheese","7 lasagne sheets","400ml passata","1 tbsp dried basil","1 tbsp dried oregano","60g light cheddar cheese","60g light mozzarella"],
        "description": "easy",
        "mealType": "main",
        "appliance": "hob, oven",
        "diet": "vegetarian, pescatarian",
        "origin": "Italian",
        "utensils": "Saucepan, Frying Pan, Oven Dish",
        "source": "https://www.healthyfood.com/healthy-recipes/pumpkin-and-spinach-cannelloni/"
    },{
		"id": "ramenBase",
		"title": "Ramen Base",
		"ingredients": ["2 tsp ginger (minced)", "1 tbsp garlic (minced)", "3 tbsp soy sauce", "2 tbsp mirin", "1l stock", "~Optional Extras: Eggs | Mushrooms | Chicken | Bok Choi | Noodles | Bean Sprouts | Tofu | Gyoza"],
		"description": "easy, one pot",
		"mealType": "main",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "Japanese",
		"utensils": "Saucepan",
		"source": "https://www.forkknifeswoon.com/simple-homemade-chicken-ramen/"
	},{
		"id": "risottoBasics",
		"title": "Risotto Basics",
		"ingredients": ["175g risotto rice", "1l stock or liquid", "1 onion (diced)", "1 garlic clove (minced)", "30g parmesan", "~Optional Flavours", "Tomato & mascarpone (1 x 400ml can of chopped tomato | -400ml stock | 30g mascarpone)", "Black Garlic (4 black garlic cloves | 30g cold butter)", "Butternut squash and sage(500g butternut squash | bunch of sage | 1/2 glass white white)"],
		"description": "easy, one pot",
		"mealType": "main",
		"appliance": "hob",
		"diet": "",
		"origin": "Italian",
		"utensils": "Frying Pan",
		"source": "BBC and Brain"
	},{
		"id": "risottoBlackGarlic",
		"title": "Black Garlic Risotto",
		"ingredients": ["175g risotto rice", "1l stock or liquid", "180g spring onion (diced)", "4 black garlic cloves (minced)", "30g parmesan", "30g cold butter"],
		"description": "easy, one pot",
		"mealType": "main",
		"appliance": "hob",
		"diet": "",
		"origin": "Italian",
		"utensils": "Frying Pan",
		"source": "BBC and Brain"
	},{
		"id": "risottoButternutSquashAndSage",
		"title": "Butternut Squash & Sage Risotto",
		"ingredients": ["150g risotto rice", "750ml stock or liquid", "1 onion (diced)", "1 garlic clove (minced)", "25g parmesan", "500g butternut squash (bite size chunks)", "bunch of sage", "1/2 glass white white)"],
		"description": "easy, one pot",
		"mealType": "main",
		"appliance": "hob",
		"diet": "",
		"origin": "Italian",
		"utensils": "Frying Pan",
		"source": "BBC and Brain"
	},{
		"id": "risottoPea",
		"title": "Pea Risotto",
		"ingredients": ["175g risotto rice", "1l stock or liquid", "1 onion (diced)", "1 garlic clove (minced)", "25g parmesan", "100ml white wine", "200g frozen peas", "handful of pea shoots"],
		"description": "easy, one pot",
		"mealType": "main",
		"appliance": "hob",
		"diet": "",
		"origin": "Italian",
		"utensils": "Frying Pan",
		"source": "BBC and Brain"
	},{
		"id": "risottoTomatoAndMascarpone",
		"title": "Tomato & Mascarpone Risotto",
		"ingredients": ["175g risotto rice", "600ml stock or liquid", "1 onion (diced)", "1 garlic clove (minced)", "30g parmesan", "1 x 400ml can of cherry tomato", "30g mascarpone/cream cheese", "small bunch of chopped basil"],
		"description": "easy, one pot",
		"mealType": "main",
		"appliance": "hob",
		"diet": "",
		"origin": "Italian",
		"utensils": "Frying Pan",
		"source": "BBC and Brain"
	},{
		"id": "riceNoodleSalad",
		"title": "Rice Noodle Salad",
		"ingredients": ["90g rice noodles","100g edamame","1/2 pointy red pepper (cut into circles)","1/2 red bell pepper (cut into batons)","3 inch of cucumber (deseeded and cut into batons)","1 carrot","1 tbsp peanut butter","1 tbsp lime juice","1 tsp lemon juice","1 tbsp light soy sauce","1 tsp dark soy sauce","1/4 tsp sesame oil","1 tbsp rice vinegar","1/2 tsp white sugar","1/2 tsp honey","1/4 tsp chilli flakes","1 tsp sesame seeds"],
		"description": "easy, one pot",
		"mealType": "main",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "Asian",
		"utensils": "Saucepan",
		"source": "Various, and experimenting."
	},{
		"id": "sataySauce",
		"title": "Satay Sauce",
		"ingredients": ["120g peanut butter", "30g sambal", "100g ketjap manis", "2 tsp sugar", "100ml water", "1 x 400ml can of coconut milk", "3.5g Indonesian spice mix", "lime juice"],
		"description": "",
		"mealType": "sauce, dip",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "Indonesian",
		"utensils": "Saucepan",
		"source": "HelloFresh"
	},{
        "id": "scones",
        "title": "Scones",
        "ingredients": ["450g self raising flour","2 tsp baking powder","50g caster sugar","100g butter (softened and cubed)","2 eggs","some milk",],
        "description": "",
        "mealType": "lunch, snack, dessert",
        "appliance": "oven",
        "diet": "vegetarian, pescatarian",
        "origin": "British",
        "utensils": "2 Inch Cutter, Oven Tray",
        "source": "https://www.bbc.co.uk/food/recipes/tea_time_scones_77839"
    },{
		"id": "slowCookedButterChicken",
		"title": "Slow Cooked Butter Chicken",
		"ingredients": ["900g chicken", "1/2 onion", "3 garlic cloves (minced)", "1 tbsp red curry paste", "2 tsp curry powder", "1 tsp salt", "1 tsp turmeric", "1/2 tsp ground ginger", "1 x 400ml can of coconut milk", "small can tomato paste", "2 tbsp butter", "60g double cream"],
		"description": "easy, dump and cook",
		"mealType": "main",
		"appliance": "slow cook",
		"diet": "",
		"origin": "Indian",
		"utensils": "Slow Cooker, Ninja",
		"source": "https://slowcookergourmet.net/slow-cooker-butter-chicken/"
	},{
		"id": "slowCookedVegetarianRedThaiCurry",
		"title": "Slow Cooked Vegetarian Red Thai Curry",
		"ingredients": ["1 x 400ml can of coconut milk", "1 x 400g can of chopped tomatoes", "1 x 400g can of chickpeas", "1 x 400g can of kidney beans in chilli sauce", "100g peanut butter", "1kg sweet potatoes", "1 lime juice", "50g Thai red curry paste", "4 tbsp soy sauce"],
		"description": "easy, dump and cook, sweet potato",
		"mealType": "main",
		"appliance": "slow cook",
		"diet": "vegetarian, pescatarian",
		"origin": "Thai",
		"utensils": "Slow Cooker, Ninja",
		"source": "https://applytofaceblog.com/easy-slow-cooker-thai-red-vegetarian-curry/"
	},{
        "id": "spamMusubi",
        "title": "Spam Musubi",
        "ingredients": ["Sushi rice as per <a href = 'sushiBasics.html'>Sushi Basics</a>", "340g spam","4? nori sheets","100g sugar","60ml light soy","60ml oyster sauce"],
        "description": "",
        "mealType": "lunch, side, snack",
        "appliance": "hob",
        "diet": "vegetarian, pescatarian",
        "origin": "Hawaiian",
        "utensils": "Frying Pan",
        "source": "https://the01li3.github.io/"
    },{
		"id": "spicedAppleCake",
		"title": "Spiced Apple Cake",
		"ingredients": ["280g plain flour", "1 tsp bicarb", "1 tsp cinnamon", "1/2 tsp ground allspice", "1/2 tsp nutmeg", "1/4 tsp ground cloves", "1/2 tsp salt", "112g butter", "200g sugar", "3 large eggs", "1/2 tsp vanilla", "255g apple sauce", "60g buttermilk/yoghurt  &milk", "60g chopped walnuts"],
		"description": "",
		"mealType": "dessert",
		"appliance": "oven",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "Square Cake Tin",
		"source": "https://www.simplyrecipes.com/recipes/applesauce_spice_cake/"
	},{
		"id": "spinachRicottaCannelloni",
		"title": "Spinach & Ricotta Cannelloni",
		"ingredients": ["300g spinach", "180g ricotta", "15g parmesan", "8 cannelloni tubes", "500g passata", "1/2 tsp garlic granules", "1/2 tsp dried Italian herbs", "70g mozzarella", "20g cheddar"],
		"description": "",
		"mealType": "main",
		"appliance": "oven",
		"diet": "vegetarian, pescatarian",
		"origin": "Italian",
		"utensils": "Piping Bag",
		"source": "https://www.dailymail.co.uk/home/you/article-7063769/PINCH-NOM-Spinach-ricotta-cannelloni.html"
	},{
		"id": "springRolls",
		"title": "Spring Rolls",
		"ingredients": ["6 spring onions (matchsticked)", "2 garlic cloves (minced)", "2cm ginger (grated)", "1 small red chilli (finely chopped)", "1 carrot (matchsticked)", "1/2 small red pepper (matchsticked)", "70g bean sprouts", "1 tbsp dark soy sauce", "pinch of Chinese 5 spice","24 squares filo 12 x 12 cm", "1 small egg"],
		"description": "",
		"mealType": "side, snack",
		"appliance": "oven, air fry",
		"diet": "vegetarian, pescatarian",
		"origin": "Chinese",
		"utensils": "Ninja",
		"source": "PoN 196"
	},{
		"id": "stickyLemonTofu",
		"title": "Sticky Lemon Tofu",
		"ingredients": ["4 garlic cloves (minced)", "3cm ginger (grated)", "60ml water", "1/4 stock cube", "60ml lemon juice", "1 lemon zest", "1 tbsp soy sauce", "50g sugar", "2 tsp cornstarch"],
		"description": "",
		"mealType": "main",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "Chinese",
		"utensils": "Saucepan",
		"source": "https://veganonboard.com/sticky-lemon-tofu/"
	},{
		"id": "stickyMangoRice",
		"title": "Sticky Mango Rice",
		"ingredients": ["200g sticky rice", "1 x 400ml can of coconut milk", "100g sugar", "2 tsp cornstarch", "Ataulfo mango"],
		"description": "",
		"mealType": "dessert",
		"appliance": "hob",
		"diet": "vegetarian, pescatarian",
		"origin": "Thai",
		"utensils": "Saucepan",
		"source": "https://www.seriouseats.com/thai-coconut-sticky-rice-mango-recipe"
	},{
		"id": "sushiBasics",
		"title": "Sushi Basics",
		"ingredients": ["250g sushi rice", "330ml water", "3 tbsp rice vinegar", "2 tbsp sugar", "1 tsp salt", "~Optional: Nori | Fried Onions | Cucumber | Tuna | Fish Sticks | Avocado | Carrot | Chicken | Pepper"],
		"description": "",
		"mealType": "main, side",
		"appliance": "hob",
		"diet": "pescatarian",
		"origin": "Japanese",
		"utensils": "Rolling Mat, Saucepan",
		"source": "SUSHI PACKET"
	},{
		"id": "tamarindFishCurry",
		"title": "Tamarind Fish Curry",
		"ingredients": ["6 garlic cloves (peeled)", "1 red chilli", "thumb sized ginger", "1 tsp turmeric", "1 tbsp ground coriander", "2 tsp cumin seeds","1 tsp fennel seeds", "2 x 400g cans of chopped tomatoes", "200g green beans (trimmed and halved)", "1 tbsp tamarind paste", "4 white fish fillets"],
		"description": "fish, easy",
		"mealType": "main",
		"appliance": "hob",
		"diet": "pescatarian",
		"origin": "Indian",
		"utensils": "Frying Pan",
		"source": "https://www.bbcgoodfood.com/recipes/tomato-tamarind-fish-curry"
	},{
		"id": "tamarindGlaze",
		"title": "Tamarind Glaze",
		"ingredients": ["1 tbsp tamarind paste","2 tbsp soy sauce","5ml sesame oil","1 grated garlic clove","30ml lime juice","1 tbsp light brown soft sugar"],
		"description": "",
		"mealType": "dip, sauce",
		"appliance": "grill",
		"diet": "vegetarian, pescatarian",
		"origin": "Asia",
		"utensils": "Bowl",
		"source": "https://www.bbcgoodfood.com/recipes/tamarind-squash-halloumi-skewers"
	},{
		"id": "tempehKebabs",
		"title": "Tempeh Kebabs",
		"ingredients": ["227g block of tempeh", "237ml stock", "sauce", "~Optional Toppings: Pepper | Onion | Halloumi | Pineapple | Mushroom"],
		"description": "easy",
		"mealType": "main",
		"appliance": "oven",
		"diet": "vegetarian, pescatarian",
		"origin": "",
		"utensils": "",
		"source": "https://frommybowl.com/bbq-tempeh-tacos-pineapple-coleslaw/#tasty-recipes-6125-jump-target"
	},{
        "id": "tandooriCod",
        "title": "Tandoori Cod",
        "ingredients": ["2 skinless cod fillets","30 tikka masala curry paste"],
        "description": "easy, fish",
        "mealType": "side, main",
        "appliance": "oven, air fry",
        "diet": "pescatarian",
        "origin": "",
        "utensils": "Oven Tray, Ninja",
        "source": "Joe Wicks 30 min meals"
    },{
		"id": "tikkaMasalaSalmon",
		"title": "Tikka Masala Salmon",
		"ingredients": ["50g fat free Greek yoghurt", "4 salmon fillets", "1/2 tsp turmeric", "1 1/2 tsp garam masala", "1 1/2 tsp ground coriander", "1/2 tsp paprika", "1 tsp cumin", "1 tsp chilli powder", "1 onion (diced)", "1 yellow pepper (diced)", "100g courgette (grated)", "2 garlic cloves (minced)", "5cm ginger (grated)", "1 x 400g can of chopped tomato", "100g passata", "1 tbsp tomato puree", "50ml vegetable stock"],
		"description": "fish,easy, one pot",
		"mealType": "main",
		"appliance": "hob",
		"diet": "pescatarian",
		"origin": "Indian",
		"utensils": "Saucepan",
		"source": "49 PoN"
	},{
		"id": "tiramisu",
		"title": "Tiramisu",
		"ingredients": [""],
		"description": "",
		"mealType": "dessert",
		"appliance": "fridge",
		"diet": "vegetarian, pescatarian",
		"origin": "Italian",
		"utensils": "",
		"source": "https://www.bbcgoodfood.com/recipes/best-ever-tiramisu and https://sallysbakingaddiction.com/tiramisu/"
	},{
		"id": "uniBaguette",
		"title": "Uni Baguette",
		"ingredients": ["part cooked baguettes", "~Optional Fillings | Pepper | Onion | Meat | Kidney beans | Sauce | Herbs"],
		"description": "easy",
		"mealType": "main",
		"appliance": "oven, grill",
		"diet": "",
		"origin": "British",
		"utensils": "",
		"source": "My Brain"
	}
];

function fnSearch(vSearchParam) {

	var vRecipesIndex = lunr(function () {
		this.ref("id")
		this.field('title')
		this.field('ingredients')
		this.field('description')		
		this.field('mealType')
		this.field('appliance')
		this.field('diet')
		this.field('origin')		
		this.field('utensils')
	  	this.field('source')

		/*varRecipes.forEach(function (doc) {
		  this.add(doc)
		}, this) */


		varRecipes.forEach(function (doc) {
			this.add({
				id: doc.id,
				title: doc.title,
				ingredients: doc.ingredients.join(" "), // Convert array to space-separated string
				description: doc.description,
				mealType: doc.mealType,
				appliance: doc.appliance,
				diet: doc.diet,
				origin: doc.origin,
				utensils: doc.utensils,
				source: doc.source
			});
		}, this); // Pass `this` to keep the correct context
	});
	
    vResult = vRecipesIndex.search(vSearchParam);

	Handlebars.registerHelper('helperSortAlpha', function (pSortArray) {	
		return pSortArray.sort().join(', ');
	});

	var vSearchResultsTemplate = Handlebars.compile(`
		<hr>
		{{#each this}}
			<a href = "{{id}}.html"><h2>{{title}}</h2></a>
			<p>Ingredients: {{helperSortAlpha ingredients}}</p>
			<hr>
		{{/each}}`);


	varResult = vResult.map(function(item) {
		return varRecipes.find(function(vRecipe) {
			return item.ref === vRecipe.id;
		});
	});

	document.getElementById("resultList").innerHTML = vSearchResultsTemplate(varResult);
	document.getElementById("resultsHeader").innerHTML = 'Results - "' + vSearchParam + '"';
}

function fnFindIngredients(pPageId){

	var vIngreIndex = lunr(function () {
		this.field("id")
		this.field('ingredients')
	  
		varRecipes.forEach(function (doc) {
		  this.add(doc)
		}, this)
	});

	arrIngredientsList = vIngreIndex.search(pPageId.slice(0,-5));//Removes .html from filename.

	varResult = arrIngredientsList.map(function(item) {  
		return varRecipes.find(function(vRecipe) {
			return item.ref === vRecipe.id;
		});
	});

	return varResult[0].ingredients;
}