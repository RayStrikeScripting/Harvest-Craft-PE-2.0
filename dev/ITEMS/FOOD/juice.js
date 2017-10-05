IDRegistry.genItemID("strawberry_juice");
Item.createFoodItem("strawberry_juice", "Strawberry juice", {name: "strawberry_juice", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.strawberry_juice, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: ItemID.strawberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("raspberry_juice");
Item.createFoodItem("raspberry_juice", "Raspberry juice", {name: "raspberry_juice", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.raspberry_juice, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: ItemID.raspberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("cranberry_juice");
Item.createFoodItem("cranberry_juice", "Cranberry juice", {name: "cranberry_juice", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.cranberry_juice, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: ItemID.cranberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("blackberry_juice");
Item.createFoodItem("blackberry_juice", "Blackberry juice", {name: "blackberry_juice", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.blackberry_juice, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: ItemID.blackberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("grape_juice");
Item.createFoodItem("grape_juice", "Grape juice", {name: "grape_juice", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.grape_juice, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: ItemID.grape, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("melon_juice");
Item.createFoodItem("melon_juice", "Melon juice", {name: "melon_juice", meta: 0}, {food: 4});
Recipes.addShapeless({id: ItemID.melon_juice, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: 360, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("blueberry_juice");
Item.createFoodItem("blueberry_juice", "Blueberry juice", {name: "blueberry_juice", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.blueberry_juice, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: ItemID.blueberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("carrot_juice");
Item.createFoodItem("carrot_juice", "Carrot juice", {name: "carrot_juice", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.carrot_juice, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: 391, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("apple_juice");
Item.createFoodItem("apple_juice", "Apple juice", {name: "apple_juice", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.apple_juice, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: 260, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});