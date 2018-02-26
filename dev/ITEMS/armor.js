IDRegistry.genItemID("hardedLeather");
Item.createItem("hardedLeather", "Harded leather", {name: "hardenedleatherItem", meta: 0}, {stack: 64});
IDRegistry.genItemID("hardedHelm");
IDRegistry.genItemID("hardedChestplate");
IDRegistry.genItemID("hardedLegging");
IDRegistry.genItemID("hardedFoots");

Item.createArmorItem("hardedHelm", "Harded Leather Helmet", {name: "hardenedleatherhelmItem"}, {type: "helmet", armor: 2, durability: 149, texture: "armor/hardenedleather_1.png"});
Item.createArmorItem("hardedChestplate", "Harded Leather Chestplate", {name: "hardenedleatherchestItem"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/hardenedleather_1.png"});
Item.createArmorItem("hardedLegging", "Harded Leather Leggings", {name: "hardenedleatherleggingsItem"}, {type: "leggings", armor: 5, durability: 203, texture: "armor/hardenedleather_2.png"});
Item.createArmorItem("hardedFoots", "Harded Leather Boots", {name: "hardenedleatherbootsItem"}, {type: "boots", armor: 2, durability: 176, texture: "armor/hardenedleather_1.png"});
Callback.addCallback("PostLoaded", function(){
	Recipes.addShapeless({id: ItemID.hardedLeather, count: 1, data: 0}, [{id: 334, data: 0}, {id: ItemID.pressedWax, data: 0}]);
	Recipes.addShaped({id: ItemID.hardedHelm, count: 1, data: 0}, [
		"xxx",
		"x x"
	], ['x', ItemID.hardedLeather, 0]);

	Recipes.addShaped({id: ItemID.hardedChestplate, count: 1, data: 0}, [
		"x x",
		"xxx",
		"xxx"
	], ['x', ItemID.hardedLeather, 0]);

	Recipes.addShaped({id: ItemID.hardedLegging, count: 1, data: 0}, [
		"xxx",
		"x x",
		"x x"
	], ['x', ItemID.hardedLeather, 0]);

	Recipes.addShaped({id: ItemID.hardedFoots, count: 1, data: 0}, [
		"x x",
		"x x"
	], ['x', ItemID.hardedLeather, 0]);
});