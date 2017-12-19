IDRegistry.genItemID("black_pepper");
Item.createItem("black_pepper", "Black pepper", {name: "black_pepper", meta: 0});
Recipes.addShapeless({id: ItemID.black_pepper, count: 1, data: 0}, [{id: ItemID.mortar_bowl, data: 0}, {id: ItemID.peppercorn, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.mortar_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});
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
Item.createFoodItem("cheese", "Cheese", {name: "cheese", meta: 0}, {food: 2});
Recipes.addShapeless({id: ItemID.cheese, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: ItemID.salt, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
//BlockID.pomidor
//BlockID.ogurec
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
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.rutabaga, data: 0}], function(api, field, result){
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
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.bean, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.rice, data: 0}], function(api, field, result){
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
		if (field[i].id != ItemID.pot){
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
IDRegistry.genItemID("spidereyesoup");
Item.createFoodItem("spidereyesoup", "Spider Eye Soup", {name: "spidereyesoup", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.spidereyesoup, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 375, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("zombiejerky");
Item.createFoodItem("zombiejerky", "Zombie Jerky", {name: "zombiejerky", meta: 0}, {food: 4});
Recipes.addShapeless({id: ItemID.zombiejerky, count: 1, data: 0}, [{id: ItemID.salt, data: 0}, {id: ItemID.salt, data: 0}, {id: 367, data: 0}]);

IDRegistry.genItemID("currypowder");
Item.createItem("currypowder", "Curry Powder", {name: "currypowder", meta: 0});
Recipes.addShapeless({id: ItemID.currypowder, count: 1, data: 0}, [{id: ItemID.mortar_bowl, data: 0}, {id: ItemID.curryleaf, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.mortar_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("vindaloo");
Item.createFoodItem("vindaloo", "Vindaloo", {name: "vindaloo", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.vindaloo, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: 363, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.vindaloo, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: 365, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.vindaloo, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: 319, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.vindaloo, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: 411, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.vindaloo, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: 423, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("sausage");
Item.createFoodItem("sausage", "Sausage", {name: "sausage", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.sausage, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.salt, data: 0}, {id: ItemID.currypowder, data: 0}, {id: 363, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("cashewChicken");
Item.createFoodItem("cashewChicken", "Cashew chicken", {name: "cashewchicken", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.cashewChicken, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: ItemID.peas, data: 0}, {id: ItemID.peppercorn, data: 0}, {id: ItemID.corn, data: 0},{id: 365, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("chickenCeleryCasserole");
Item.createFoodItem("chickenCeleryCasserole", "Chicken celery casserole", {name: "chickencelerycasserole", meta: 0}, {food: 12});
Recipes.addShapeless({id: ItemID.chickenCeleryCasserole, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: 391, data: 0}, {id: ItemID.garlic, data: 0}, {id: 39, data: 0},{id: 365, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("chickenChowmein");
Item.createFoodItem("chickenChowmein", "Chicken chowmein", {name: "chickenchowmein", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.chickenChowmein, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 391, data: 0}, {id: ItemID.peas, data: 0}, {id: ItemID.onion, data: 0},{id: ItemID.garlic, data: 0},{id: ItemID.stock, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("chickenCurry");
Item.createFoodItem("chickenCurry", "Chicken curry", {name: "chickencurry", meta: 0}, {food: 14});
Recipes.addShapeless({id: ItemID.chickenCurry, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 392, data: 0}, {id: ItemID.plain_yogurt, data: 0}, {id: ItemID.spice_leaf, data: 0},{id: ItemID.chili_pepper, data: 0},{id: 365, data: 0},{id: ItemID.lettuce, data: 0},{id: ItemID.peas, data: 0},{id: ItemID.garlic, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("chickenGumbo");
Item.createFoodItem("chickenGumbo", "Chicken gumbo", {name: "chickengumbo", meta: 0}, {food: 16});
Recipes.addShapeless({id: ItemID.chickenGumbo, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 392, data: 0}, {id: 391, data: 0}, {id: ItemID.onion, data: 0},{id: ItemID.stock, data: 0},{id: 365, data: 0},{id: ItemID.spice_leaf, data: 0},{id: ItemID.bellpepper, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("chickenNoodleSoup");
Item.createFoodItem("chickenNoodleSoup", "Chicken noodle soup", {name: "chickennoodlesoup", meta: 0}, {food: 9});
Recipes.addShapeless({id: ItemID.chickenNoodleSoup, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 296, data: 0}, {id: 391, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("chickenPotPie");
Item.createFoodItem("chickenPotPie", "Chicken pot pie", {name: "chickenpotpie", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.chickenPotPie, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: 265, data: 0}, {id: 391, data: 0},{id: ItemID.dough, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("chickenSandwich");
Item.createFoodItem("chickenSandwich", "Chicken sandwich", {name: "chickensandwich", meta: 0}, {food: 11});
Recipes.addShapeless({id: ItemID.chickenSandwich, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 365, data: 0}, {id: 297, data: 0}, {id: ItemID.mayo, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("friredChicken");
Item.createFoodItem("friredChicken", "Fried chicken", {name: "friedchicken", meta: 0}, {food: 11});
Recipes.addShapeless({id: ItemID.friredChicken, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 365, data: 0}, {id: ItemID.butter, data: 0}, {id: ItemID.spice_leaf, data: 0}, {id: ItemID.black_pepper, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("garlicChicken");
Item.createFoodItem("garlicChicken", "Garlic chicken", {name: "garlicchicken", meta: 0}, {food: 12});
Recipes.addShapeless({id: ItemID.garlicChicken, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: ItemID.garlic, data: 0}, {id: ItemID.garlic, data: 0},{id: 365, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("generalTsoChicken");
Item.createFoodItem("generalTsoChicken", "General tso chicken", {name: "generaltsochicken", meta: 0}, {food: 12});
Recipes.addShapeless({id: ItemID.generalTsoChicken, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 365, data: 0}, {id: ItemID.lettuce, data: 0}, {id: 353, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("gingerChicken");
Item.createFoodItem("gingerChicken", "Ginger chicken", {name: "gingerchicken", meta: 0}, {food: 12});
Recipes.addShapeless({id: ItemID.gingerChicken, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: ItemID.garlic, data: 0}, {id: 365, data: 0}, {id: ItemID.onion, data: 0}, {id: 353, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("kungPaoCkicken");
Item.createFoodItem("kungPaoCkicken", "Kung pao chicken", {name: "kungpaochicken", meta: 0}, {food: 12});
Recipes.addShapeless({id: ItemID.kungPaoCkicken, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id:365, data: 0}, {id: ItemID.grape, data: 0}, {id: ItemID.garlic, data: 0}, {id: ItemID.onion, data: 0},{id:353 ,data:0},{id:ItemID.butter ,data:0},{id:ItemID.peppercorn ,data:0},{id:ItemID.cucumber ,data:0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("lemonChicken");
Item.createFoodItem("lemonChicken", "Lemon chicken", {name: "lemonchicken", meta: 0}, {food: 9});
Recipes.addShapeless({id: ItemID.lemonChicken, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id:365, data: 0}, {id: ItemID.grape, data: 0},{id:ItemID.butter ,data:0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("orangeChicken");
Item.createFoodItem("orangeChicken", "Orange chicken", {name: "orangechicken", meta: 0}, {food: 12});
Recipes.addShapeless({id: ItemID.orangeChicken, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id:365, data: 0}, {id: ItemID.grape, data: 0},{id:353 ,data:0},{id:ItemID.lettuce ,data:0},{id:ItemID.cabbage ,data:0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("sweetAndSourChicken");
Item.createFoodItem("sweetAndSourChicken", "Sweet and sour chicken", {name: "sweetandsourchicken", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.sweetAndSourChicken, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id:365, data: 0}, {id: ItemID.butter, data: 0},{id:ItemID.grape ,data:0},{id:ItemID.bellpepper ,data:0},{id:ItemID.onion ,data:0},{id:ItemID.tomato ,data:0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("teriyakiChicken");
Item.createFoodItem("teriyakiChicken", "Teriyaki chicken", {name: "teriyakichicken", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.teriyakiChicken, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id:365, data: 0}, {id: ItemID.peas, data: 0},{id:ItemID.sausage ,data:0},{id:ItemID.candleberry ,data:0},{id:ItemID.onion ,data:0},{id:ItemID.garlic ,data:0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("baconAndEggs");
Item.createFoodItem("baconAndEggs", "Bacon and eggs", {name: "baconandeggs", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.baconAndEggs, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id:319, data: 0}, {id: 344, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("bakedHam");
Item.createFoodItem("bakedHam", "Baked ham", {name: "bakedham", meta: 0}, {food: 9});
Recipes.addShapeless({id: ItemID.bakedHam, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id:319, data: 0}, {id: 260, data: 0}, {id: 353, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("honeyGlazedHam");
Item.createFoodItem("honeyGlazedHam", "Honey glazed ham", {name: "honeyglazedham", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.honeyGlazedHam, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id:319, data: 0}, {id: 353, data: 0}, {id: ItemID.black_pepper, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
/*
pot roast
spider eye soup
zombie jerky
vindaloo
sausage

meat pie
baked beans
maple sausage
hamburger
dim sum
cottage pie
cornish pasty
corned beef
beef wellington

beef jerky
shepards pie
lamb berley soup
honey lemon lamb
rabbit stew
spicy mustard pork
pork lo mein
pineapple ham
pea and ham soup
hot and sour soup
honey soy ribs

honey glazed ham
baked ham
bacon and eggs
teriyaki chicken
sweet and sour chicken
orange chicken
lemon chicken
kung pao chicken
ginger chicken
general tso's chicken
garlic chicken
fired chicken
chicken sandwich
chicken pot pie
chicken noodle soup
chicken gumbo
chicken curry
chicken chow mein
chicken celery casserole
cashew chicken
*/
IDRegistry.genItemID("honeySoyRibs");
Item.createFoodItem("honeySoyRibs", "Honey soy ribs", {name: "honeysoyribs", meta: 0}, {food: 14});
Recipes.addShapeless({id: ItemID.honeySoyRibs, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id:319, data: 0}, {id: 353, data: 0}, {id: ItemID.sausage, data: 0},{id: ItemID.garlic, data: 0},{id: ItemID.vinegar, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("hotAndSourSoup");
Item.createFoodItem("hotAndSourSoup", "Hot and sour soup", {name: "hotandsoursoup", meta: 0}, {food: 12});
Recipes.addShapeless({id: ItemID.hotAndSourSoup, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id:319, data: 0}, {id: 39, data: 0}, {id: ItemID.cucumber, data: 0},{id: 344, data: 0},{id: ItemID.vinegar, data: 0},{id: ItemID.black_pepper, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("peaAndHamSoup");
Item.createFoodItem("peaAndHamSoup", "Pea and ham soup", {name: "peaandhamsoup", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.peaAndHamSoup, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id:319, data: 0}, {id: ItemID.peas, data: 0}, {id: ItemID.strawberry, data: 0},{id: ItemID.onion, data: 0},{id: 391, data: 0},{id: ItemID.raspberry, data: 0},{id: ItemID.black_pepper, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("pineappleHam");
Item.createFoodItem("pineappleHam", "Pineapple ham", {name: "pineappleham", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.pineappleHam, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id:319, data: 0}, {id: 353, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("porkLoMein");
Item.createFoodItem("porkLoMein", "Pork lo mein", {name: "porklomein", meta: 0}, {food: 14});
Recipes.addShapeless({id: ItemID.porkLoMein, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id:319, data: 0}, {id: 296, data: 0}, {id: ItemID.onion, data: 0}, {id: 291, data: 0},{id: ItemID.cabbage, data: 0},{id: ItemID.garlic, data: 0},{id: ItemID.sausage, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("spicyMustardPork");
Item.createFoodItem("spicyMustardPork", "Spicy mustarg pork", {name: "spicymustardpork", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.spicyMustardPork, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id:319, data: 0}, {id: ItemID.garlic, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spicyMustardPork, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id:319, data: 0}, {id: ItemID.salt, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spicyMustardPork, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id:319, data: 0}, {id: ItemID.black_pepper, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spicyMustardPork, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id:319, data: 0}, {id: ItemID.black_pepper, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("honeyLemonLamb");
Item.createFoodItem("honeyLemonLamb", "Honey lemon lamb", {name: "honeylemonlamb", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.honeyLemonLamb, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id:291, data: 0}, {id: 292, data: 0}, {id: 411, data: 0}, {id: 39, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("lambBarleySoup");
Item.createFoodItem("lambBarleySoup", "Lamb barley soup", {name: "lambbarleysoup", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.lambBarleySoup, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id:291, data: 0}, {id: ItemID.stock, data: 0}, {id: 411, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("shepardsPie");
Item.createFoodItem("shepardsPie", "Shepards pie", {name: "shepardspie", meta: 0}, {food: 12});
Recipes.addShapeless({id: ItemID.shepardsPie, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id:292, data: 0}, {id: ItemID.dough, data: 0}, {id: 291, data: 0}, {id: ItemID.peas, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("beefjerky");
Item.createFoodItem("beefjerky", "Beefjerky", {name: "beefjerky", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.beefjerky, count: 1, data: 0}, [{id:363, data: 0}, {id: ItemID.salt, data: 0}]);

IDRegistry.genItemID("meatPie");
Item.createFoodItem("meatPie", "Meat pie", {name: "meatpie", meta: 0}, {food: 14});
Recipes.addShapeless({id: ItemID.meatPie, count: 1, data: 0}, [{id: ItemID.dough, data: 0}, {id:363, data: 0}, {id: ItemID.bakeware, data: 0}, {id: ItemID.onion, data: 0}, {id: ItemID.garlic, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("bakedbeans");
Item.createFoodItem("bakedbeans", "Baked Beans", {name: "bakedbeans", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.bakedbeans, count: 1, data: 0}, [{id: ItemID.bean, data: 0}, {id: ItemID.pot, data: 0}, {id:320, data: 0}, {id:353, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("maplesausage");
Item.createFoodItem("maplesausage", "Maple Sausage", {name: "maplesausage", meta: 0}, {food: 1});
Recipes.addShapeless({id: ItemID.maplesausage, count: 1, data: 0}, [{id: ItemID.spice_leaf, data: 0}, {id:363, data: 0}]);

IDRegistry.genItemID("toast");
Item.createFoodItem("toast", "Toast", {name: "toast", meta: 0}, {food: 4});
Recipes.addShapeless({id: ItemID.toast, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id:297, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("hamburger");
Item.createFoodItem("hamburger", "Hamburger", {name: "hamburger", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.hamburger, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id:363, data: 0}, {id: ItemID.toast, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("dimsum");
Item.createFoodItem("dimsum", "Dim Sum", {name: "dimsum", meta: 0}, {food: 12});
/*
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id:365, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id:363, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id:319, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id:411, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id:423, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id: ItemID.turkeyRaw, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id: ItemID.venisonRaw, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
*/
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id:365, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id:363, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id:319, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id:411, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id:423, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id: ItemID.turkeyRaw, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id: ItemID.venisonRaw, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id:365, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id:363, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id:319, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id:411, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id:423, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id: ItemID.turkeyRaw, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dimsum, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id: ItemID.venisonRaw, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("cottagepie");
Item.createFoodItem("cottagepie", "Cottage Pie", {name: "cottagepie", meta: 0}, {food: 12});
Recipes.addShapeless({id: ItemID.cottagepie, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id:363, data: 0}, {id:392, data: 0}, {id:391, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.peas, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("cornishpasty");
Item.createFoodItem("cornishpasty", "Cornish Pasty", {name: "cornishpasty", meta: 0}, {food: 12});
Recipes.addShapeless({id: ItemID.cornishpasty, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id:363, data: 0}, {id:392, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.rutabaga, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("cornedbeef");
Item.createFoodItem("cornedbeef", "Corned Beef", {name: "cornedbeef", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.cornishpasty, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id:363, data: 0}, {id: ItemID.salt, data: 0}, {id:353, data: 0}, {id: ItemID.mustardseeds, data: 0}, {id: ItemID.spice_leaf, data: 0}, {id: ItemID.ginger, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("beefwellington");
Item.createFoodItem("beefwellington", "Beef Wellington", {name: "beefwellington", meta: 0}, {food: 18});
Recipes.addShapeless({id: ItemID.beefwellington, count: 1, data: 0}, [{id:363, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.spinach, data: 0}, {id:40, data: 0}]);
Recipes.addShapeless({id: ItemID.beefwellington, count: 1, data: 0}, [{id:363, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.spinach, data: 0}, {id:39, data: 0}]);
//
