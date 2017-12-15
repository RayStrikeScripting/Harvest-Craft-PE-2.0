IDRegistry.genItemID("beet_salad");
Item.createFoodItem("beet_salad", "Beet salad", {name: "beet_salad", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.beet_salad, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: 457, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.vinegar, data: 0}, {id: ItemID.cheese, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("fruit_salad");
Item.createFoodItem("fruit_salad", "Fruit salad", {name: "fruit_salad", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: ItemID.raspberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: 260, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: ItemID.raspberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: ItemID.cranberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: ItemID.blueberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: ItemID.blackberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: ItemID.grape, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("spring_salad");
Item.createFoodItem("spring_salad", "Spring salad", {name: "spring_salad", meta: 0}, {food: 9});
Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.cucumber, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.bellpepper, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.tomato, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.peas, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: 391, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});

if(ItemID.pomidor!=null){
	Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.pomidor, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
};

if(ItemID.ogurec!=null){
	Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.ogurec, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
};

IDRegistry.genItemID("cucumber_salad");
Item.createFoodItem("cucumber_salad", "Cucumber salad", {name: "cucumber_salad", meta: 0}, {food: 11});
Recipes.addShapeless({id: ItemID.cucumber_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.spring_salad, data: 0}, {id: ItemID.cucumber, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("ceasar_salade");
Item.createFoodItem("ceasar_salade", "Ceasar salade", {name: "ceasar_salade", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.ceasar_salade, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.toast, data: 0}, {id: ItemID.cheese, data: 0}, {id: ItemID.garlic, data: 0}, {id: ItemID.black_pepper, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});