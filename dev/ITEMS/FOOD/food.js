IDRegistry.genItemID("black_pepper");
Item.createItem("black_pepper", "Black pepper", {name: "black_pepper", meta: 0});
Recipes.addShapeless({id: ItemID.black_pepper, count: 1, data: 0}, [{id: ItemID.mortar_bowl, data: 0}, {id: ItemID.peppercorn, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mortar_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("toast");
Item.createFoodItem("toast", "Toast", {name: "toast", meta: 0}, {food: 7});
Recipes.addFurnace(297, ItemID.toast, 0);

IDRegistry.genItemID("cocoa_powder");
Item.createItem("cocoa_powder", "Cocoa powder", {name: "cocoa_powder", meta: 0});
Recipes.addShapeless({id: ItemID.cocoa_powder, count: 1, data: 0}, [{id: ItemID.mortar_bowl, data: 0}, {id: 351, data: 3}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mortar_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("chocolate_milk");
Item.createFoodItem("chocolate_milk", "Chocolate milk", {name: "chocolate_milk", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.chocolate_milk, count: 1, data: 0}, [{id: ItemID.cocoa_powder, data: 0}, {id: 325, data: 1}]);
Recipes.addShapeless({id: ItemID.chocolate_milk, count: 1, data: 0}, [{id: ItemID.cocoa_powder, data: 0}, {id: ItemID.fresh_milk, data: 0}]);

IDRegistry.genItemID("espresso");
Item.createFoodItem("espresso", "Espresso", {name: "espresso", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.espresso, count: 1, data: 0}, [{id: ItemID.coffee_beans, data: 0}, {id: ItemID.coffee_beans, data: 0}, {id: ItemID.coffee_beans, data: 0}, {id: 353, data: 0}]);

IDRegistry.genItemID("hot_chocolate");
Item.createFoodItem("hot_chocolate", "Hot chocolate", {name: "hot_chocolate", meta: 0}, {food: 2});
Recipes.addShapeless({id: ItemID.hot_chocolate, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: ItemID.cocoa_powder, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("vinegar");
Item.createItem("vinegar", "Vinegar", {name: "vinegar", meta: 0});
Recipes.addShapeless({id: ItemID.vinegar, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.grape_juice, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("cheese");
Item.createFoodItem("cheese", "�heese", {name: "cheese", meta: 0}, {food: 2});
Recipes.addShapeless({id: ItemID.cheese, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: ItemID.salt, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("stock");
Item.createFoodItem("stock", "Stock", {name: "stock", meta: 0}, {food: 3});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 352, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 363, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 319, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 423, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 411, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 365, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.corn, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.tomato, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.cucumber, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.cabbage, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.bellpepper, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.peas, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 86, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 392, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("pot_roast");
Item.createFoodItem("pot_roast", "Pot roast", {name: "pot_roast", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.pot_roast, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 363, data: 0}, {id: 393, data: 0}, {id: 391, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("vegetable_soup");
Item.createFoodItem("vegetable_soup", "Vegetable soup", {name: "vegetable_soup", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.vegetable_soup, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 40, data: 0}, {id: 393, data: 0}, {id: 391, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.vegetable_soup, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 39, data: 0}, {id: 393, data: 0}, {id: 391, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("heavy_cream");
Item.createItem("heavy_cream", "Heavy cream", {name: "heavy_cream", meta: 0});
Recipes.addShapeless({id: ItemID.heavy_cream, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: 352, data: 1}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl && field[i].id != 352){
			api.decreaseFieldSlot(i);
		}
		else{
			field[i].data = 0
		}
	}
});
Recipes.addShapeless({id: ItemID.heavy_cream, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.fresh_milk, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("pumpkin_soup");
Item.createFoodItem("pumpkin_soup", "Pumpkin soup", {name: "pumpkin_soup", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.pumpkin_soup, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 86, data: 0}, {id: ItemID.heavy_cream, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("cornflakes");
Item.createFoodItem("cornflakes", "Cornflakes", {name: "cornflakes", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.cornflakes, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: ItemID.corn, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("fried_egg");
Item.createFoodItem("fried_egg", "Fried egg", {name: "fried_egg", meta: 0}, {food: 4});
Recipes.addShapeless({id: ItemID.fried_egg, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 344, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("boiled_egg");
Item.createFoodItem("boiled_egg", "Boiled egg", {name: "boiled_egg", meta: 0}, {food: 2});
Recipes.addShapeless({id: ItemID.boiled_egg, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 344, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("pancakes");
Item.createFoodItem("pancakes", "Pancakes", {name: "pancakes", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.pancakes, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: 344, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.pancakes, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: ItemID.flour, data: 0}, {id: 325, data: 1}, {id: 344, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
		else{
			field[i].data = 0
		}
	}
});

IDRegistry.genItemID("dough");
Item.createItem("dough", "Dough", {name: "dough", meta: 0});
Recipes.addShapeless({id: ItemID.dough, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.fresh_water, data: 0}, {id: ItemID.salt, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dough, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.flour, data: 0}, {id: 325, data: 8}, {id: ItemID.salt, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl){
			api.decreaseFieldSlot(i);
		}
		else{
			field[i].data = 0
		}
	}
});

IDRegistry.genItemID("cranberry_bar");
Item.createFoodItem("cranberry_bar", "Cranberry bar", {name: "cranberry_bar", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.cranberry_bar, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.cranberry, data: 0}, {id: 353, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("pizza");
Item.createFoodItem("pizza", "Pizza", {name: "pizza", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.pizza, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.tomato, data: 0}, {id: 319, data: 0}, {id: ItemID.cheese, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("fries");
Item.createFoodItem("fries", "Fries", {name: "fries", meta: 0}, {food: 4});
Recipes.addShapeless({id: ItemID.fries, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: 394, data: 0}, {id: ItemID.salt, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("breaded_porkchop");
Item.createFoodItem("breaded_porkchop", "Breaded porkchop", {name: "breaded_porkchop", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.breaded_porkchop, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 319, data: 0}, {id: ItemID.flour, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("butter");
Item.createItem("butter", "Butter", {name: "butter", meta: 0});
Recipes.addShapeless({id: ItemID.butter, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: ItemID.heavy_cream, data: 0}, {id: ItemID.salt, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("hot_wings");
Item.createFoodItem("hot_wings", "Hot wings", {name: "hot_wings", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.hot_wings, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 366, data: 0}, {id: ItemID.chili_pepper, data: 0}, {id: ItemID.butter, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("mayo");
Item.createFoodItem("mayo", "Mayo", {name: "mayo", meta: 0});
Recipes.addShapeless({id: ItemID.mayo, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: 344, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("fish_dinner");
Item.createFoodItem("fish_dinner", "Fish dinner", {name: "fish_dinner", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.fish_dinner, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 349, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.mayo, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fish_dinner, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 460, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.mayo, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("potato_cakes");
Item.createFoodItem("potato_cakes", "Potato cakes", {name: "potato_cakes", meta: 0}, {food: 7});
Recipes.addShapeless({id: ItemID.potato_cakes, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 392, data: 0}, {id: ItemID.butter, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("hearty_breakfast");
Item.createFoodItem("hearty_breakfast", "Hearty breakfast", {name: "hearty_breakfast", meta: 0}, {food: 18});
Recipes.addShapeless({id: ItemID.hearty_breakfast, count: 1, data: 0}, [{id: ItemID.fried_egg, data: 0}, {id: 320, data: 0}, {id: ItemID.potato_cakes, data: 0}, {id: ItemID.toast, data: 0}, {id: ItemID.grape_juice, data: 0}]);

IDRegistry.genItemID("steak_and_chips");
Item.createFoodItem("steak_and_chips", "Steak and chips", {name: "steak_and_chips", meta: 0}, {food: 12});
Recipes.addShapeless({id: ItemID.steak_and_chips, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 363, data: 0}, {id: ItemID.fries, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("roast_chicken");
Item.createFoodItem("roast_chicken", "Roast chicken", {name: "roast_chicken", meta: 0}, {food: 9});
Recipes.addShapeless({id: ItemID.roast_chicken, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: 366, data: 0}, {id: ItemID.salt, data: 0}, {id: ItemID.black_pepper, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("roast_potatoes");
Item.createFoodItem("roast_potatoes", "Roast potatoes", {name: "roast_potatoes", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.roast_potatoes, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: 392, data: 0}, {id: ItemID.salt, data: 0}, {id: ItemID.black_pepper, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("sunday_roast");
Item.createFoodItem("sunday_roast", "Sunday roast", {name: "sunday_roast", meta: 0}, {food: 14});
Recipes.addShapeless({id: ItemID.sunday_roast, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: ItemID.roast_chicken, data: 0}, {id: ItemID.roast_potatoes, data: 0}, {id: ItemID.lettuce, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("lamb_with_mint_sauce");
Item.createFoodItem("lamb_with_mint_sauce", "Lamb with mint sauce", {name: "lamb_with_mint_sauce", meta: 0}, {food: 11});
Recipes.addShapeless({id: ItemID.lamb_with_mint_sauce, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: 423, data: 0}, {id: ItemID.spice_leaf, data: 0}, {id: ItemID.vinegar, data: 0}, {id: 353, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});


IDRegistry.genItemID("meaty_stew");
Item.createFoodItem("meaty_stew", "Meaty stew", {name: "meaty_stew", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.meaty_stew, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 363, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.meaty_stew, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 319, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.meaty_stew, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 423, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.meaty_stew, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 363, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.meaty_stew, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 411, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("chocolate_bar");
Item.createFoodItem("chocolate_bar", "Chocolate bar", {name: "chocolate_bar", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.chocolate_bar, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: ItemID.cocoa_powder, data: 0}, {id: ItemID.butter, data: 0}, {id: ItemID.fresh_milk, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.chocolate_bar, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: ItemID.cocoa_powder, data: 0}, {id: ItemID.butter, data: 0}, {id: 325, data: 1}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
		else{
			field[i].data = 0
		}
	}
});

IDRegistry.genItemID("chaos_cookie");
Item.createFoodItem("chaos_cookie", "Chaos cookie", {name: "chaos_cookie", meta: 0}, {food: 4});
Recipes.addShapeless({id: ItemID.chaos_cookie, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: ItemID.chocolate_bar, data: 0}, {id: ItemID.flour, data: 0}, {id: 352, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("blueberry_pie");
Item.createFoodItem("blueberry_pie", "Blueberry pie", {name: "blueberry_pie", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.blueberry_pie, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: ItemID.blueberry, data: 0}, {id: ItemID.dough, data: 0}, {id: 353, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("waffles");
Item.createFoodItem("waffles", "Waffles", {name: "waffles", meta: 0}, {food: 9});
Recipes.addShapeless({id: ItemID.blueberry_pie, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: ItemID.flour, data: 0}, {id: 344, data: 0}, {id: ItemID.butter, data: 0}, {id: ItemID.fresh_milk, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.blueberry_pie, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: ItemID.flour, data: 0}, {id: 344, data: 0}, {id: ItemID.butter, data: 0}, {id: 325, data: 1}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
		else{
			field[i].data = 0
		}
	}
});

IDRegistry.genItemID("fresh_water"); 
Item.createItem("fresh_water", "Fresh water", {name: "fresh_water", meta: 0}); 
Recipes.addShapeless({id: ItemID.fresh_water, count: 1, data: 0}, [{id: 325, data: 8}], function(api, field, result){ 
	for (var i in field){ 
		if (field[i].id != 325){ 
			api.decreaseFieldSlot(i); 
		} 
		else{
			field[i].data = 0
		}
	} 
});

IDRegistry.genItemID("fresh_milk");
Item.createItem("fresh_milk", "Fresh milk", {name: "fresh_milk", meta: 0});
Recipes.addShapeless({id: ItemID.fresh_milk, count: 4, data: 0}, [{id: 325, data: 1}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != 325){
			api.decreaseFieldSlot(i);
		}
		else{
			field[i].data = 0
		}
	}
});

IDRegistry.genItemID("salt");
Item.createItem("salt", "Salt", {name: "salt", meta: 0});
Recipes.addShapeless({id: ItemID.salt, count: 1, data: 0}, [{id: ItemID.fresh_water, data: 0}, {id: ItemID.pot, data: 0}], function(api, field, result){ 
	for (var i in field){ 
		if (field[i].id != pot){ 
			api.decreaseFieldSlot(i); 
		}
	} 
});

IDRegistry.genItemID("flour");
Item.createItem("flour", "Flour", {name: "flour", meta: 0});
Recipes.addShapeless({id: ItemID.flour, count: 1, data: 0}, [{id: ItemID.mortar_bowl, data: 0}, {id: 394, data: 0}], function(api, field, result){ 
	for (var i in field){ 
		if (field[i].id != mortar_bowl){ 
			api.decreaseFieldSlot(i); 
		}
	} 
});
Recipes.addShapeless({id: ItemID.flour, count: 1, data: 0}, [{id: ItemID.mortar_bowl, data: 0}, {id: 296, data: 0}], function(api, field, result){ 
	for (var i in field){ 
		if (field[i].id != mortar_bowl){ 
			api.decreaseFieldSlot(i); 
		}
	} 
});