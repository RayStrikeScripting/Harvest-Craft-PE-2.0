IDRegistry.genItemID("plain_yogurt");
Item.createFoodItem("plain_yogurt", "Plain yogurt", {name: "plain_yogurt", meta: 0}, {food: 2});
Recipes.addShapeless({id: ItemID.plain_yogurt, count: 4, data: 0}, [{id: ItemID.fresh_milk, data: 0}, {id: 334, data: 0}]);
Recipes.addShapeless({id: ItemID.plain_yogurt, count: 2, data: 0}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.fresh_milk, data: 0}]);
Recipes.addShapeless({id: ItemID.plain_yogurt, count: 4, data: 0}, [{id: 325, data: 1}, {id: 334, data: 0}], function(api, field, result){ 
	for (var i in field){ 
		if (field[i].id != 325){ 
			api.decreaseFieldSlot(i); 
		} 
		else{
			field[i].data = 0
		}
	} 
});
Recipes.addShapeless({id: ItemID.plain_yogurt, count: 2, data: 0}, [{id: ItemID.plain_yogurt, data: 0}, {id: 325, data: 1}], function(api, field, result){ 
	for (var i in field){ 
		if (field[i].id != 325){ 
			api.decreaseFieldSlot(i); 
		} 
		else{
			field[i].data = 0
		}
	} 
});

IDRegistry.genItemID("strawberry_yogurt");
Item.createFoodItem("strawberry_yogurt", "Strawberry yogurt", {name: "strawberry_yogurt", meta: 0}, {food: 8}); 
Recipes.addShapeless({id: ItemID.strawberry_yogurt, count: 1, data: 0}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.strawberry, data: 0}]);

IDRegistry.genItemID("raspberry_yogurt");
Item.createFoodItem("raspberry_yogurt", "Raspberry yogurt", {name: "raspberry_yogurt", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.raspberry_yogurt, count: 1, data: 0}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.raspberry, data: 0}]);

IDRegistry.genItemID("grape_yogurt");
Item.createFoodItem("grape_yogurt", "Grape yogurt", {name: "grape_yogurt", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.grape_yogurt, count: 1, data: 0}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.grape, data: 0}]);

IDRegistry.genItemID("apple_yogurt");
Item.createFoodItem("apple_yogurt", "Apple yogurt", {name: "apple_yogurt", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.apple_yogurt, count: 1, data: 0}, [{id: ItemID.plain_yogurt, data: 0}, {id: 260, data: 0}]);

IDRegistry.genItemID("blackberry_yogurt");
Item.createFoodItem("blackberry_yogurt", "Blackberry yogurt", {name: "blackberry_yogurt", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.blackberry_yogurt, count: 1, data: 0}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.blackberry, data: 0}]);

IDRegistry.genItemID("blueberry_yogurt");
Item.createFoodItem("blueberry_yogurt", "Blueberry yogurt", {name: "blueberry_yogurt", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.blueberry_yogurt, count: 1, data: 0}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.blueberry, data: 0}]);

IDRegistry.genItemID("pumpkin_yogurt");
Item.createFoodItem("pumpkin_yogurt", "Pumpkin yogurt", {name: "pumpkin_yogurt", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.pumpkin_yogurt, count: 1, data: 0}, [{id: ItemID.plain_yogurt, data: 0}, {id: 86, data: 0}]);

IDRegistry.genItemID("melon_yogurt");
Item.createFoodItem("melon_yogurt", "Melon yogurt", {name: "melon_yogurt", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.melon_yogurt, count: 1, data: 0}, [{id: ItemID.plain_yogurt, data: 0}, {id: 360, data: 0}]);

IDRegistry.genItemID("chocolate_yogurt");
Item.createFoodItem("chocolate_yogurt", "Chocolate yogurt", {name: "chocolate_yogurt", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.chocolate_yogurt, count: 1, data: 0}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.strawberry_yogurt, data: 0}]);