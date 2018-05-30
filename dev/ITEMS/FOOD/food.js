IDRegistry.genItemID("black_pepper");
Item.createItem("black_pepper", "Black pepper", {name: "black_pepper", meta: 0});
Harvest.recipe({id:ItemID.black_pepper},[{id: ItemID.mortar_bowl, data: 0}, {id: ItemID.peppercorn, data: 0}]);

IDRegistry.genItemID("cocoa_powder");
Item.createItem("cocoa_powder", "Cocoa powder", {name: "cocoa_powder", meta: 0});
Harvest.recipe({id:ItemID.cocoa_powder},[{id: ItemID.mortar_bowl, data: 0}, {id: 351, data: 3}]);

IDRegistry.genItemID("almondbutter");
Item.createItem("almondbutter", "Almond butter", {name: "almondbutter", meta: 0});
Harvest.recipe({id:ItemID.almondbutter},[{id: ItemID.juicer, data: 0}, {id: ItemID.almond, data: 0}]);

Harvest.setFood("chocolate_milk","Chocolate milk",6);
Harvest.recipe({id:ItemID.chocolate_milk},[{id: ItemID.cocoa_powder, data: 0}, {id: 325, data: 1}]);
Harvest.recipe({id:ItemID.chocolate_milk},[{id: ItemID.cocoa_powder, data: 0}, {id: ItemID.fresh_milk, data: 0}]);

Harvest.setFood("espresso","Espresso",8);
Harvest.recipe({id:ItemID.espresso},[{id: ItemID.coffee_beans, data: 0}, {id: ItemID.coffee_beans, data: 0}, {id: ItemID.coffee_beans, data: 0}, {id: 353, data: 0}]);

Harvest.setFood("chaitea","Chai tea",2);
Harvest.recipe({id:ItemID.chaitea},[{id: ItemID.black_pepper, data: 0},{id: ItemID.tealeaf, data: 0}]);

Harvest.setFood("raspberryicedtea","Raspberry ice tea",2);
Harvest.recipe({id:ItemID.raspberryicedtea},[{id: ItemID.raspberry, data: 0},{id: ItemID.tealeaf, data: 0},{id: 332, data: 0}]);

Harvest.setFood("hot_chocolate","Hot chocolate",2);
Harvest.recipe({id:ItemID.hot_chocolate},[{id: ItemID.juicer, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: ItemID.cocoa_powder, data: 0}]);

IDRegistry.genItemID("vinegar");
Item.createItem("vinegar", "Vinegar", {name: "vinegar", meta: 0});
Harvest.recipe({id:ItemID.vinegar},[{id: ItemID.pot, data: 0}, {id: ItemID.grape_juice, data: 0}]);

Harvest.setFood("cheese","Cheese",2);
Harvest.recipe({id:ItemID.cheese},[{id: ItemID.pot, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: ItemID.salt, data: 0}]);

Harvest.setFood("tortilla","Tortilla",6);
Harvest.recipe({id:ItemID.tortilla},[{id: ItemID.skillet, data: 0}, {id: ItemID.fresh_water, data: 0}, {id: ItemID.flour, data: 0}]);

Harvest.setFood("stock","Stock",3);
Harvest.recipeDuoVariations({id:ItemID.stock},ItemID.pot,
[352,363,319,423,411,365,ItemID.corn,ItemID.beet,ItemID.zucchini,ItemID.tomato,ItemID.cucumber,ItemID.rutabaga,ItemID.onion,ItemID.cabbage,ItemID.bellpepper,ItemID.peas,ItemID.bean,ItemID.rice,ItemID.artichoke,ItemID.parsnip,ItemID.rhubarb,ItemID.scallion,ItemID.soybean,ItemID.turnip,ItemID.okra,ItemID.asparagus,ItemID.eggplant,ItemID.bambooshoot,ItemID.brusselsprout,ItemID.cauliflower,ItemID.celery,ItemID.radish,86,392]);

Harvest.setFood("pot_roast","Pot roast",10);
Harvest.recipe({id:ItemID.pot_roast}, [{id: ItemID.pot, data: 0}, {id: 363, data: 0}, {id: 393, data: 0}, {id: 391, data: 0}, {id: ItemID.stock, data: 0}]);

Harvest.setFood("vegetable_soup","Vegetable soup",8);
Harvest.recipe({id:ItemID.vegetable_soup},[{id: ItemID.pot, data: 0}, {id: 40, data: 0}, {id: 393, data: 0}, {id: 391, data: 0}, {id: ItemID.stock, data: 0}]);
Harvest.recipe({id:ItemID.vegetable_soup},[{id: ItemID.pot, data: 0}, {id: 39, data: 0}, {id: 393, data: 0}, {id: 391, data: 0}, {id: ItemID.stock, data: 0}]);

IDRegistry.genItemID("heavy_cream");
Item.createItem("heavy_cream", "Heavy cream", {name: "heavy_cream", meta: 0});
Harvest.recipe({id:ItemID.heavy_cream},[{id: ItemID.mixing_bowl, data: 0}, {id: 352, data: 1}]);
Harvest.recipe({id:ItemID.heavy_cream},[{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.fresh_milk, data: 0}]);

Harvest.setFood("pumpkin_soup","Pumpkin soup",8);
Harvest.recipe({id:ItemID.pumpkin_soup},[{id: ItemID.pot, data: 0}, {id: 86, data: 0}, {id: ItemID.heavy_cream, data: 0}, {id: ItemID.stock, data: 0}]);

Harvest.setFood("cornflakes","Cornflakes",8);
Harvest.recipe({id:ItemID.cornflakes},[{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: ItemID.corn, data: 0}]);

Harvest.setFood("fried_egg","Fried egg",4);
Harvest.recipe({id:ItemID.fried_egg},[{id: ItemID.skillet, data: 0}, {id: 344, data: 0}]);

Harvest.setFood("boiled_egg","Boiled egg",2);
Harvest.recipe({id:ItemID.boiled_egg},[{id: ItemID.pot, data: 0}, {id: 344, data: 0}]);

Harvest.setFood("pancakes","Pancakes",6);
Harvest.recipe({id:ItemID.pancakes},[{id: ItemID.skillet, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: 344, data: 0}]);
Harvest.recipe({id:ItemID.pancakes},[{id: ItemID.skillet, data: 0}, {id: ItemID.flour, data: 0}, {id: 325, data: 1}, {id: 344, data: 0}]);

IDRegistry.genItemID("dough");
Item.createItem("dough", "Dough", {name: "dough", meta: 0});
Harvest.recipe({id:ItemID.dough},[{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.fresh_water, data: 0}, {id: ItemID.salt, data: 0}]);
Harvest.recipe({id:ItemID.dough},[{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.flour, data: 0}, {id: 325, data: 8}, {id: ItemID.salt, data: 0}]);

Harvest.setFood("cranberry_bar","Cranberry bar",8);
Harvest.recipe({id:ItemID.cranberry_bar},[{id: ItemID.bakeware, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.cranberry, data: 0}, {id: 353, data: 0}]);

Harvest.setFood("figbar","Fig bar",10);
Harvest.recipe({id:ItemID.figbar},[{id: ItemID.bakeware, data: 0}, {id:ItemID.fig, data: 0},{id: ItemID.dough, data: 0},{id: 353, data: 0}]);

Harvest.setFood("lemonbar","Lemon bar",10);
Harvest.recipe({id:ItemID.lemonbar},[{id: ItemID.bakeware, data: 0}, {id:ItemID.lemon, data: 0},{id: ItemID.dough, data: 0},{id: 353, data: 0}]);

Harvest.setFood("pizza","Pizza",10);
Harvest.recipe({id:ItemID.pizza},[{id: ItemID.bakeware, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.tomato, data: 0}, {id: 319, data: 0}, {id: ItemID.cheese, data: 0}]);

Harvest.setFood("fries","Fries",4);
Harvest.recipe({id:ItemID.fries},[{id: ItemID.bakeware, data: 0}, {id: 394, data: 0}, {id: ItemID.salt, data: 0}]);

Harvest.setFood("breaded_porkchop","Breaded porkchop",5);
Harvest.recipe({id:ItemID.breaded_porkchop},[{id: ItemID.skillet, data: 0}, {id: 319, data: 0}, {id: ItemID.flour, data: 0}]);

IDRegistry.genItemID("butter");
Item.createItem("butter", "Butter", {name: "butter", meta: 0});
Harvest.recipe({id:ItemID.butter},[{id: ItemID.saucepan, data: 0}, {id: ItemID.heavy_cream, data: 0}, {id: ItemID.salt, data: 0}]);

Harvest.setFood("hot_wings","Hot wings",5);
Harvest.recipe({id:ItemID.hot_wings},[{id: ItemID.skillet, data: 0}, {id: 366, data: 0}, {id: ItemID.chili_pepper, data: 0}, {id: ItemID.butter, data: 0}]);

IDRegistry.genItemID("mayo");
Item.createFoodItem("mayo", "Mayo", {name: "mayo", meta: 0});
Harvest.recipe({id:ItemID.mayo},[{id: ItemID.juicer, data: 0}, {id: 344, data: 0}]);

Harvest.setFood("fish_dinner","Fish dinner",10);
IDRegistry.genItemID("fish_dinner");
Item.createFoodItem("fish_dinner", "Fish dinner", {name: "fish_dinner", meta: 0}, {food: 10});
Harvest.recipe({id:ItemID.fish_dinner},[{id: ItemID.skillet, data: 0}, {id: 349, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.mayo, data: 0}]);
Harvest.recipe({id:ItemID.fish_dinner},[{id: ItemID.skillet, data: 0}, {id: 460, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.mayo, data: 0}]);

Harvest.setFood("potato_cakes","Potato cakes",7);
IDRegistry.genItemID("potato_cakes");
Item.createFoodItem("potato_cakes", "Potato cakes", {name: "potato_cakes", meta: 0}, {food: 7});
Harvest.recipe({id:ItemID.potato_cakes},[{id: ItemID.skillet, data: 0}, {id: 392, data: 0}, {id: ItemID.butter, data: 0}, {id: ItemID.onion, data: 0}]);

Harvest.setFood("hearty_breakfast","Hearty breakfast",18);
Harvest.recipe({id:ItemID.hearty_breakfast},[{id: ItemID.fried_egg, data: 0}, {id: 320, data: 0}, {id: ItemID.potato_cakes, data: 0}, {id: ItemID.toast, data: 0}, {id: ItemID.grape_juice, data: 0}]);

Harvest.setFood("steak_and_chips","Steak and chips",12);
Harvest.recipe({id:ItemID.steak_and_chips},[{id: ItemID.skillet, data: 0}, {id: 363, data: 0}, {id: ItemID.fries, data: 0}]);

Harvest.setFood("avocadoburrito","Avocado burrito",12);
Harvest.recipe({id:ItemID.avocadoburrito},[{id: ItemID.cutting_board, data: 0}, {id: ItemID.avocado, data: 0}, {id: ItemID.tortilla, data: 0}, {id: 366, data: 0}]);
Harvest.recipe({id:ItemID.avocadoburrito},[{id: ItemID.cutting_board, data: 0}, {id: ItemID.avocado, data: 0}, {id: ItemID.tortilla, data: 0}, {id: 320, data: 0}]);

Harvest.setFood("roast_chicken","Roast chicken",9);
Harvest.recipe({id:ItemID.roast_chicken},[{id: ItemID.bakeware, data: 0}, {id: 366, data: 0}, {id: ItemID.salt, data: 0}, {id: ItemID.black_pepper, data: 0}]);

Harvest.setFood("roast_potatoes","Roast potatoes",6);
Harvest.recipe({id:ItemID.roast_potatoes},[{id: ItemID.bakeware, data: 0}, {id: 392, data: 0}, {id: ItemID.salt, data: 0}, {id: ItemID.black_pepper, data: 0}]);

Harvest.setFood("sunday_roast","Strawberry juice",14);
Harvest.recipe({id:ItemID.sunday_roast},[{id: ItemID.bakeware, data: 0}, {id: ItemID.roast_chicken, data: 0}, {id: ItemID.roast_potatoes, data: 0}, {id: ItemID.lettuce, data: 0}]);

Harvest.setFood("lamb_with_mint_sauce","Lamb with mint sauce",11);
Harvest.recipe({id:ItemID.lamb_with_mint_sauce},[{id: ItemID.bakeware, data: 0}, {id: 423, data: 0}, {id: ItemID.spice_leaf, data: 0}, {id: ItemID.vinegar, data: 0}, {id: 353, data: 0}]);

Harvest.setFood("meaty_stew","Meaty stew",8);
Harvest.recipe({id:ItemID.meaty_stew},[{id: ItemID.pot, data: 0}, {id: 363, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}]);
Harvest.recipe({id:ItemID.meaty_stew},[{id: ItemID.pot, data: 0}, {id: 319, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}]);
Harvest.recipe({id:ItemID.meaty_stew},[{id: ItemID.pot, data: 0}, {id: 423, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}]);
Harvest.recipe({id:ItemID.meaty_stew},[{id: ItemID.pot, data: 0}, {id: 363, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}]);
Harvest.recipe({id:ItemID.meaty_stew},[{id: ItemID.pot, data: 0}, {id: 411, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}]);

Harvest.setFood("chocolate_bar","Chocolate bar",5);
Harvest.recipe({id:ItemID.chocolate_bar},[{id: ItemID.saucepan, data: 0}, {id: ItemID.cocoa_powder, data: 0}, {id: ItemID.butter, data: 0}, {id: ItemID.fresh_milk, data: 0}]);
Harvest.recipe({id:ItemID.chocolate_bar},[{id: ItemID.saucepan, data: 0}, {id: ItemID.cocoa_powder, data: 0}, {id: ItemID.butter, data: 0}, {id: 325, data: 1}]);

Harvest.setFood("chaos_cookie","Chaos cookie",4);
Harvest.recipe({id:ItemID.chaos_cookie}, [{id: ItemID.bakeware, data: 0}, {id: ItemID.chocolate_bar, data: 0}, {id: ItemID.flour, data: 0}, {id: 352, data: 0}]);

Harvest.setFood("blueberry_pie","Blueberry pie",8);
Harvest.recipe({id:ItemID.blueberry_pie},[{id: ItemID.bakeware, data: 0}, {id: ItemID.blueberry, data: 0}, {id: ItemID.dough, data: 0}, {id: 353, data: 0}]);

Harvest.setFood("waffles","Waffles",9);
Harvest.recipe({id:ItemID.waffles},[{id: ItemID.skillet, data: 0}, {id: ItemID.flour, data: 0}, {id: 344, data: 0}, {id: ItemID.butter, data: 0}, {id: ItemID.fresh_milk, data: 0}]);
Harvest.recipe({id:ItemID.waffles},[{id: ItemID.skillet, data: 0}, {id: ItemID.flour, data: 0}, {id: 344, data: 0}, {id: ItemID.butter, data: 0}, {id: 325, data: 1}]);

IDRegistry.genItemID("fresh_water");
Item.createItem("fresh_water", "Fresh water", {name: "fresh_water", meta: 0});
Harvest.recipe({id:ItemID.fresh_water},[{id: 325, data: 8}]);

IDRegistry.genItemID("fresh_milk");
Item.createItem("fresh_milk", "Fresh milk", {name: "fresh_milk", meta: 0});
Harvest.recipe({id:ItemID.fresh_milk},[{id: 325, data: 1}]);

IDRegistry.genItemID("salt");
Item.createItem("salt", "Salt", {name: "salt", meta: 0});
Harvest.recipe({id:ItemID.salt},[{id: ItemID.fresh_water, data: 0}, {id: ItemID.pot, data: 0}]);

IDRegistry.genItemID("flour");
Item.createItem("flour", "Flour", {name: "flour", meta: 0});
Harvest.recipe({id:ItemID.flour},[{id: ItemID.mortar_bowl, data: 0}, {id: 394, data: 0}]);
Harvest.recipe({id:ItemID.flour},[{id: ItemID.mortar_bowl, data: 0}, {id: 296, data: 0}]);

Harvest.setFood("spidereyesoup","Spider Eye Soup",8);
IDRegistry.genItemID("spidereyesoup");
Item.createFoodItem("spidereyesoup", "Spider Eye Soup", {name: "spidereyesoup", meta: 0}, {food: 8});
Harvest.recipe({id:ItemID.spidereyesoup},[{id: ItemID.pot, data: 0}, {id: 375, data: 0}, {id: ItemID.stock, data: 0}]);

Harvest.setFood("zombiejerky","Zombie Jerky",4);
Harvest.recipe({id:ItemID.zombiejerky},[{id: ItemID.salt, data: 0}, {id: ItemID.salt, data: 0}, {id: 367, data: 0}]);

IDRegistry.genItemID("currypowder");
Item.createItem("currypowder", "Curry Powder", {name: "currypowder", meta: 0});
Harvest.recipe({id:ItemID.currypowder},[{id: ItemID.mortar_bowl, data: 0}, {id: ItemID.curryleaf, data: 0}]);

Harvest.setFood("vindaloo","Vindaloo",10);
Harvest.recipe({id:ItemID.vindaloo},[{id: ItemID.saucepan, data: 0}, {id: 363, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}]);
Harvest.recipe({id:ItemID.vindaloo}, [{id: ItemID.saucepan, data: 0}, {id: 365, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}]);
Harvest.recipe({id:ItemID.vindaloo},[{id: ItemID.saucepan, data: 0}, {id: 319, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}]);
Harvest.recipe({id:ItemID.vindaloo},[{id: ItemID.saucepan, data: 0}, {id: 411, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}]);
Harvest.recipe({id:ItemID.vindaloo},[{id: ItemID.saucepan, data: 0}, {id: 423, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}]);

Harvest.setFood("sausage","Sausage",6);
Harvest.recipe({id:ItemID.sausage},[{id: ItemID.cutting_board, data: 0}, {id: ItemID.salt, data: 0}, {id: ItemID.currypowder, data: 0}, {id: 363, data: 0}]);

Harvest.setFood("cashewChicken","Cashew chicken",6);
Harvest.recipe({id:ItemID.cashewChicken},[{id: ItemID.saucepan, data: 0}, {id: ItemID.peas, data: 0}, {id: ItemID.peppercorn, data: 0}, {id: ItemID.corn, data: 0},{id: 365, data: 0}]);

Harvest.setFood("chickenCeleryCasserole","Chicken celery casserole",12);
Harvest.recipe({id:ItemID.chickenCeleryCasserole},[{id: ItemID.bakeware, data: 0}, {id: 391, data: 0}, {id: ItemID.garlic, data: 0}, {id: 39, data: 0},{id: 365, data: 0}]);

Harvest.setFood("chickenChowmein","Chicken chowmein",10);
Harvest.recipe({id:ItemID.chickenChowmein},[{id: ItemID.skillet, data: 0}, {id: 391, data: 0}, {id: ItemID.peas, data: 0}, {id: ItemID.onion, data: 0},{id: ItemID.garlic, data: 0},{id: ItemID.stock, data: 0}]);

Harvest.setFood("chickenCurry","Chicken curry",14);
Harvest.recipe({id:ItemID.chickenCurry},[{id: ItemID.pot, data: 0}, {id: 392, data: 0}, {id: ItemID.plain_yogurt, data: 0}, {id: ItemID.spice_leaf, data: 0},{id: ItemID.chili_pepper, data: 0},{id: 365, data: 0},{id: ItemID.lettuce, data: 0},{id: ItemID.peas, data: 0},{id: ItemID.garlic, data: 0}]);

Harvest.setFood("chickenGumbo","Chicken gumbo",16);
Harvest.recipe({id:ItemID.chickenGumbo},[{id: ItemID.pot, data: 0}, {id: 392, data: 0}, {id: 391, data: 0}, {id: ItemID.onion, data: 0},{id: ItemID.stock, data: 0},{id: 365, data: 0},{id: ItemID.spice_leaf, data: 0},{id: ItemID.bellpepper, data: 0}]);

Harvest.setFood("chickenNoodleSoup","Chicken noodle soup",9);
Harvest.recipe({id:ItemID.chickenNoodleSoup},[{id: ItemID.pot, data: 0}, {id: 296, data: 0}, {id: 391, data: 0}, {id: ItemID.stock, data: 0}]);

Harvest.setFood("chickenPotPie","Chicken pot pie",10);
Harvest.recipe({id:ItemID.chickenPotPie},[{id: ItemID.bakeware, data: 0}, {id: 265, data: 0}, {id: 391, data: 0},{id: ItemID.dough, data: 0}]);

Harvest.setFood("chickenSandwich","Chicken sandwich",11);
Harvest.recipe({id:ItemID.chickenSandwich},[{id: ItemID.skillet, data: 0}, {id: 365, data: 0}, {id: 297, data: 0}, {id: ItemID.mayo, data: 0}]);

Harvest.setFood("friredChicken","Fried chicken",11);
Harvest.recipe({id:ItemID.friredChicken},[{id: ItemID.pot, data: 0}, {id: 365, data: 0}, {id: ItemID.butter, data: 0}, {id: ItemID.spice_leaf, data: 0}, {id: ItemID.black_pepper, data: 0}]);

Harvest.setFood("garlicChicken","Garlic chicken",12);
Harvest.recipe({id:ItemID.garlicChicken},[{id: ItemID.bakeware, data: 0}, {id: ItemID.garlic, data: 0}, {id: ItemID.garlic, data: 0},{id: 365, data: 0}]);

Harvest.setFood("generalTsoChicken","General tso chicken",12);
Harvest.recipe({id:ItemID.generalTsoChicken},[{id: ItemID.skillet, data: 0}, {id: 365, data: 0}, {id: ItemID.lettuce, data: 0}, {id: 353, data: 0}]);

Harvest.setFood("gingerChicken","Ginger chicken",12);
Harvest.recipe({id:ItemID.gingerChicken},[{id: ItemID.saucepan, data: 0}, {id: ItemID.garlic, data: 0}, {id: 365, data: 0}, {id: ItemID.onion, data: 0}, {id: 353, data: 0}]);

Harvest.setFood("kungPaoCkicken","Kung pao chicken",12);
Harvest.recipe({id:ItemID.kungPaoCkicken},[{id: ItemID.saucepan, data: 0}, {id:365, data: 0}, {id: ItemID.grape, data: 0}, {id: ItemID.garlic, data: 0}, {id: ItemID.onion, data: 0},{id:353 ,data:0},{id:ItemID.butter ,data:0},{id:ItemID.peppercorn ,data:0},{id:ItemID.cucumber ,data:0}]);

Harvest.setFood("lemonChicken","Lemon chicken",9);
Harvest.recipe({id:ItemID.lemonChicken},[{id: ItemID.bakeware, data: 0}, {id:365, data: 0}, {id: ItemID.grape, data: 0},{id:ItemID.butter ,data:0}]);

Harvest.setFood("orangeChicken","Orange chicken",12);
Harvest.recipe({id:ItemID.orangeChicken},[{id: ItemID.saucepan, data: 0}, {id:365, data: 0}, {id: ItemID.grape, data: 0},{id:353 ,data:0},{id:ItemID.lettuce ,data:0},{id:ItemID.cabbage ,data:0}]);

Harvest.setFood("sweetAndSourChicken","Sweet and sour chicken",10);
Harvest.recipe({id:ItemID.sweetAndSourChicken},[{id: ItemID.saucepan, data: 0}, {id:365, data: 0}, {id: ItemID.butter, data: 0},{id:ItemID.grape ,data:0},{id:ItemID.bellpepper ,data:0},{id:ItemID.onion ,data:0},{id:ItemID.tomato ,data:0}]);

Harvest.setFood("teriyakiChicken","Teriyaki chicken",10);
Harvest.recipe({id:ItemID.teriyakiChicken},[{id: ItemID.skillet, data: 0}, {id:365, data: 0}, {id: ItemID.peas, data: 0},{id:ItemID.sausage ,data:0},{id:ItemID.candleberry ,data:0},{id:ItemID.onion ,data:0},{id:ItemID.garlic ,data:0}]);

Harvest.setFood("baconAndEggs","Bacon and eggs",10);
Harvest.recipe({id:ItemID.baconAndEggs},[{id: ItemID.skillet, data: 0}, {id:319, data: 0}, {id: 344, data: 0}]);

Harvest.setFood("bakedHam","Baked ham",9);
Harvest.recipe({id:ItemID.bakedHam},[{id: ItemID.bakeware, data: 0}, {id:319, data: 0}, {id: 260, data: 0}, {id: 353, data: 0}]);

Harvest.setFood("honeyGlazedHam","Honey glazed ham",10);
Harvest.recipe({id:ItemID.honeyGlazedHam}, [{id: ItemID.saucepan, data: 0}, {id:319, data: 0}, {id: 353, data: 0}, {id: ItemID.black_pepper, data: 0}]);

Harvest.setFood("honeySoyRibs","Honey soy ribs",14);
Harvest.recipe({id:ItemID.honeySoyRibs},[{id: ItemID.bakeware, data: 0}, {id:319, data: 0}, {id: 353, data: 0}, {id: ItemID.sausage, data: 0},{id: ItemID.garlic, data: 0},{id: ItemID.vinegar, data: 0}]);

Harvest.setFood("hotAndSourSoup","Hot and sour soup",12);
Harvest.recipe({id:ItemID.hotAndSourSoup},[{id: ItemID.saucepan, data: 0}, {id:319, data: 0}, {id: 39, data: 0}, {id: ItemID.cucumber, data: 0},{id: 344, data: 0},{id: ItemID.vinegar, data: 0},{id: ItemID.black_pepper, data: 0}]);

Harvest.setFood("peaAndHamSoup","Pea and ham soup",8);
Harvest.recipe({id:ItemID.peaAndHamSoup},[{id: ItemID.pot, data: 0}, {id:319, data: 0}, {id: ItemID.peas, data: 0}, {id: ItemID.strawberry, data: 0},{id: ItemID.onion, data: 0},{id: 391, data: 0},{id: ItemID.raspberry, data: 0},{id: ItemID.black_pepper, data: 0}]);

Harvest.setFood("pineappleHam","Pineapple ham",10);
Harvest.recipe({id:ItemID.pineappleHam},[{id: ItemID.bakeware, data: 0}, {id:319, data: 0}, {id: 353, data: 0}]);

Harvest.setFood("porkLoMein","Pork lo mein",14);
Harvest.recipe({id:ItemID.porkLoMein},[{id: ItemID.pot, data: 0}, {id:319, data: 0}, {id: 296, data: 0}, {id: ItemID.onion, data: 0}, {id: 291, data: 0},{id: ItemID.cabbage, data: 0},{id: ItemID.garlic, data: 0},{id: ItemID.sausage, data: 0}]);

Harvest.setFood("spicyMustardPork","Spicy mustarg pork",10);
Harvest.recipe({id:ItemID.spicyMustardPork}, [{id: ItemID.saucepan, data: 0}, {id:319, data: 0}, {id: ItemID.garlic, data: 0}]);
Harvest.recipe({id:ItemID.spicyMustardPork},[{id: ItemID.saucepan, data: 0}, {id:319, data: 0}, {id: ItemID.salt, data: 0}]);
Harvest.recipe({id:ItemID.spicyMustardPork},[{id: ItemID.saucepan, data: 0}, {id:319, data: 0}, {id: ItemID.black_pepper, data: 0}]);

Harvest.setFood("honeyLemonLamb","Honey lemon lamb",8);
Harvest.recipe({id:ItemID.honeyLemonLamb},[{id: ItemID.pot, data: 0}, {id:291, data: 0}, {id: 292, data: 0}, {id: 411, data: 0}, {id: 39, data: 0}]);

Harvest.setFood("lambBarleySoup","Lamb barley soup",10);
Harvest.recipe({id:ItemID.lambBarleySoup},[{id: ItemID.pot, data: 0}, {id:291, data: 0}, {id: ItemID.stock, data: 0}, {id: 411, data: 0}, {id: ItemID.onion, data: 0}]);

Harvest.setFood("shepardsPie","Shepards pie",12);
Harvest.recipe({id:ItemID.shepardsPie}, [{id: ItemID.bakeware, data: 0}, {id:292, data: 0}, {id: ItemID.dough, data: 0}, {id: 291, data: 0}, {id: ItemID.peas, data: 0}]);

Harvest.setFood("beefjerky","Beefjerky",5);
Harvest.recipe({id:ItemID.beefjerky},[{id:363, data: 0}, {id: ItemID.salt, data: 0}]);

Harvest.setFood("meatPie","Meat pie",14);
Harvest.recipe({id:ItemID.meatPie},[{id: ItemID.dough, data: 0}, {id:363, data: 0}, {id: ItemID.bakeware, data: 0}, {id: ItemID.onion, data: 0}, {id: ItemID.garlic, data: 0}, {id: ItemID.stock, data: 0}]);

Harvest.setFood("bakedbeans","Baked Beans",10);
Harvest.recipe({id:ItemID.bakedbeans},[{id: ItemID.bean, data: 0}, {id: ItemID.pot, data: 0}, {id:320, data: 0}, {id:353, data: 0}]);

Harvest.setFood("maplesausage","Maple Sausage",1);
Harvest.recipe({id:ItemID.maplesausage},[{id: ItemID.spice_leaf, data: 0}, {id:363, data: 0}]);

Harvest.setFood("toast","Toast",4);
Harvest.recipe({id:ItemID.toast},[{id: ItemID.bakeware, data: 0}, {id:297, data: 0}]);

Harvest.setFood("hamburger","Hamburger",8);
Harvest.recipe({id:ItemID.hamburger},[{id: ItemID.skillet, data: 0}, {id:363, data: 0}, {id: ItemID.toast, data: 0}]);

Harvest.setFood("dimsum","Dim Sum",12);
/*
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id:365, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id:363, data: 0}]);
Harvest.recipe({id:ItemID.dimsum}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id:319, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id:411, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id:423, data: 0}],);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id: ItemID.turkeyRaw, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.whitemushroom, data: 0}, {id: ItemID.venisonRaw, data: 0}]);
*/
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id:365, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id:363, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id:319, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id:411, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id:423, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id: ItemID.turkeyRaw, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:40, data: 0}, {id: ItemID.venisonRaw, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id:365, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id:363, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id:319, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id:411, data: 0}]);
Harvest.recipe({id:ItemID.dimsum}, [{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id:423, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id: ItemID.turkeyRaw, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.pot, data: 0}, {id: ItemID.waterchestnut, data: 0}, {id: ItemID.rice, data: 0}, {id: ItemID.dough, data: 0}, {id:39, data: 0}, {id: ItemID.venisonRaw, data: 0}]);
Harvest.recipe({id:ItemID.dimsum},[{id: ItemID.bakeware, data: 0}, {id:363, data: 0}, {id:392, data: 0}, {id:391, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.peas, data: 0}]);

Harvest.setFood("cornishpasty","Cornish Pasty",12);
Harvest.recipe({id:ItemID.cornishpasty},[{id: ItemID.bakeware, data: 0}, {id:363, data: 0}, {id:392, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.rutabaga, data: 0}]);

Harvest.setFood("cornedbeef","Corned Beef",10);
Harvest.recipe({id:ItemID.cornedbeef},[{id: ItemID.pot, data: 0}, {id:363, data: 0}, {id: ItemID.salt, data: 0}, {id:353, data: 0}, {id: ItemID.mustardseeds, data: 0}, {id: ItemID.spice_leaf, data: 0}, {id: ItemID.ginger, data: 0}]);

Harvest.setFood("beefwellington","Beef Wellington",18);
Harvest.recipe({id:ItemID.beefwellington},[{id:363, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.spinach, data: 0}, {id:40, data: 0}]);
Harvest.recipe({id:ItemID.beefwellington}, [{id:363, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.spinach, data: 0}, {id:39, data: 0}]);

Harvest.setFood("baconwrappeddates","Bacon wrapped dates",10);
Harvest.recipe({id:ItemID.baconwrappeddates},[{id: ItemID.bakeware, data: 0}, {id:320, data: 0},{id: ItemID.date, data: 0}]);

Harvest.setFood("candiedlemon","Carnied lemon",3);
Harvest.recipe({id:ItemID.candiedlemon},[{id: ItemID.saucepan, data: 0}, {id:353, data: 0},{id: ItemID.lemon, data: 0}]);