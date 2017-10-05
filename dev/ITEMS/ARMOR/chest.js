IDRegistry.genItemID("hardenedLeatherChest");
Item.createArmorItem("hardenedLeatherChest", "Hardened leather chest", {name: "hardenedleatherchestItem"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/hardenedleather_1.png"});
Recipes.addShaped({id: ItemID.hardenedLeatherChest, count: 1, data: 0}, ["a a", " aaa"," aaa"], ["a", ItemID.hardedLeather, 0]);