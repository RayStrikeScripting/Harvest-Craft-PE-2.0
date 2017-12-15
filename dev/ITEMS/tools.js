IDRegistry.genItemID("cutting_board");
Item.createItem("cutting_board", "Cutting board", {name: "cutting_board", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.cutting_board, count: 1, data: 0}, ["a  ", " b ", "  c"], ["a", 265, 0, "b", 280, 0, "c", 5, 0]);

IDRegistry.genItemID("pot");
Item.createItem("pot", "Pot", {name: "pot", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.pot, count: 1, data: 0}, ["abb", " bb"], ["a", 280, 0, "b", 265, 0]);

IDRegistry.genItemID("skillet");
Item.createItem("skillet", "Skillet", {name: "skillet", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.skillet, count: 1, data: 0}, ["a  ", " a ", "  b"], ["a", 265, 0, "b", 280, 0]);

IDRegistry.genItemID("saucepan");
Item.createItem("saucepan", "Saucepan", {name: "saucepan", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.saucepan, count: 1, data: 0}, ["a  ", "b  "], ["a", 265, 0, "b", 280, 0]);

IDRegistry.genItemID("bakeware");
Item.createItem("bakeware", "Bakeware", {name: "bakeware", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.bakeware, count: 1, data: 0}, ["aaa", "a a", "aaa"], ["a", 336, 0]);

IDRegistry.genItemID("mixing_bowl");
Item.createItem("mixing_bowl", "Mixing bowl", {name: "mixing_bowl", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.mixing_bowl, count: 1, data: 0}, ["aba", " a "], ["a", 5, 0, "b", 280, 0]);

IDRegistry.genItemID("mortar_bowl");
Item.createItem("mortar_bowl", "Mortar bowl", {name: "mortar_bowl", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.mortar_bowl, count: 1, data: 0}, ["aba", " a "], ["a", 1, 0, "b", 280, 0]);

IDRegistry.genItemID("juicer");
Item.createItem("juicer", "Juicer", {name: "juicer", meta: 0}, {stack: 1});
Recipes.addShaped({id: ItemID.juicer, count: 1, data: 0}, ["a  ", "b  "], ["a", 1, 0, "b", 70, 0]);