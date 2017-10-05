IDRegistry.genItemID("hardedLeather");
Item.createItem("hardedLeather", "Harded leather", {name: "hardenedleatherItem", meta: 0}, {stack: 64});
Recipes.addShapeless({id: ItemID.hardedLeather, count: 1, data: 0}, [{id: 334, data: 0}, {id: ItemID.pressedWax, data: 0}]);