IDRegistry.genItemID("strawberry_smoothie");
Item.createFoodItem("strawberry_smoothie", "Strawberry smoothie", {name: "strawberry_smoothie", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.strawberry_smoothie, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: ItemID.strawberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("raspberry_smoothie");
Item.createFoodItem("raspberry_smoothie", "Raspberry smoothie", {name: "raspberry_smoothie", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.raspberry_smoothie, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: ItemID.raspberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("blackberry_smoothie");
Item.createFoodItem("blackberry_smoothie", "Blackberry smoothie", {name: "blackberry_smoothie", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.blackberry_smoothie, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: ItemID.blackberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("blueberry_smoothie");
Item.createFoodItem("blueberry_smoothie", "Blueberry smoothie", {name: "blueberry_smoothie", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.blueberry_smoothie, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: ItemID.blueberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("melon_smoothie");
Item.createFoodItem("melon_smoothie", "Melon smoothie", {name: "melon_smoothie", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.melon_smoothie, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: 360, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});