IDRegistry.genItemID("venisonRaw");
Item.createFoodItem("venisonRaw", "Raw venison", {name: "venison", meta: 0}, {food:3});

IDRegistry.genItemID("venisonCooked");
Item.createFoodItem("venisonCooked", "Cooked venison", {name: "venison", meta: 1}, {food:8});
Recipes.addFurnace(ItemID.venisonRaw, ItemID.venisonCooked, 0);

IDRegistry.genItemID("turkeyRaw");
Item.createFoodItem("turkeyRaw", "Raw turkey", {name: "turkey", meta: 0}, {food:2});

IDRegistry.genItemID("turkeyCooked");
Item.createFoodItem("turkeyCooked", "Cooked turkey", {name: "turkey", meta: 1}, {food:5});
Recipes.addFurnace(ItemID.turkeyRaw, ItemID.turkeyCooked, 0);