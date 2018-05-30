/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 69
*/



// file: API/importLib.js

IMPORT("Plant_Model");
IMPORT("Harvest_Core");




// file: API/Prototypes.js

﻿var BLOCK_TYPE_CANDLE = Block.createSpecialType({
	base: 50,
	opaque: false,
	lightopacity: 0,
	lightlevel: 10 
});  
var ForestryAPI = modsAPI.ForestryAPI;

var particles = __config__.access("other.particles");
CropRegistry.registerClass("harvestcraft_crop");
CropRegistry.registerClassConfig("harvestcraft_crop",{
	ageSpeed:__config__.access("other.ageSpeed.crops"),
	manure:{id:351,data:15},
	farmland:[{id:60,data:0},{id:60,data:7}],
	seedsPlaceFunc:true,
	growStages:3
});
CropRegistry.setRegularFunctionsForClass("harvestcraft_crop",__config__.access("other.growChance.crops"),particles);
CropRegistry.registerClassDeriveFunction("harvestcraft_crop",function(classs,idd){
	Recipes.addFurnaceFuel(CropRegistry.getSeedFromCrop(idd), 0, 60);
	var cfg = CropRegistry.getConfigFromCrop(idd);
	Harvest.registerDroppingBlock(idd);
	Block.setDestroyLevelForID (idd, 0);
	ToolAPI.registerBlockMaterial(idd, "plant");
	Block.setRandomTickCallback(idd,function(x,y,z,id,data){
		for(var f in cfg.farmland){
			if(World.getBlockID(x,y-1,z)!=cfg.farmland[f].id&&World.getBlockData(x,y-1,z)!=cfg.farmland[f].data){
				World.destroyBlock(x,y,z,true);
			}
		}
		var chance = cfg.ageSpeed;
		if(Math.random()<chance&&data<2){
			World.setBlock(x,y,z,id,data+1);
		}
	});
	Block.registerDropFunction(idd, function(coords, blockID, blockData, level){
		return[[ CropRegistry.getSeedFromCrop(idd), 1,0 ]];
	});
	if(ForestryAPI){
		for(var m = 0;m<3;m++){	
			ForestryAPI.BeeRegistry.FLOWERS_FLOWERS.push(idd+':'+m);
		}
	}
});


CropRegistry.registerClass("harvestcraft_garden");
CropRegistry.registerClassConfig("harvestcraft_garden",{
	farmland:[{id:60,data:0},{id:2,data:0},{id:3,data:0},{id:60,data:7}],
	seedsPlaceFunc:true
});
CropRegistry.registerClassDeriveFunction("harvestcraft_garden",function(classs,id){
	Recipes.addFurnaceFuel(CropRegistry.getSeedFromCrop(id), 0, 120);
	Block.setDestroyLevelForID (id, 0);
	ToolAPI.registerBlockMaterial(id, "plant");
	Harvest.registerDroppingBlock(id);
	Callback.addCallback("ItemUse", function(coords, item, block){
		if(block.id==id){
			Harvest.drop(CropRegistry.getSeedFromCrop(id),1,coords);
			World.setBlock(coords.x,coords.y,coords.z,0,0);
		}
	});
	if(ForestryAPI){
		ForestryAPI.BeeRegistry.FLOWERS_FLOWERS.push(id+':'+0);
	}
});


CropRegistry.registerClass("harvestcraft_tropicalGarden");
CropRegistry.registerClassConfig("harvestcraft_tropicalGarden",{
	farmland:[{id:60,data:0},{id:2,data:0},{id:3,data:0},{id:60,data:7},{id:12,data:0}],
	seedsPlaceFunc:true
});
CropRegistry.registerClassDeriveFunction("harvestcraft_tropicalGarden",function(classs,id){
	Recipes.addFurnaceFuel(CropRegistry.getSeedFromCrop(id), 0, 120);
	Block.setDestroyLevelForID (id, 0);
	ToolAPI.registerBlockMaterial(id, "plant");
	Harvest.registerDroppingBlock(id);
	Callback.addCallback("ItemUse", function(coords, item, block){
		if(block.id==id){
			Harvest.drop(CropRegistry.getSeedFromCrop(id),1,coords);
			World.setBlock(coords.x,coords.y,coords.z,0,0);
		}
	});
	if(ForestryAPI){
		ForestryAPI.BeeRegistry.FLOWERS_CACTI.push(id+':'+0);
		ForestryAPI.BeeRegistry.FLOWERS_JUNGLE.push(id+':'+0);
	}	
});


CropRegistry.registerClass("Harvestcraft_treeSapling");
CropRegistry.registerClassConfig("Harvestcraft_treeSapling",{
	ageSpeed:__config__.access("other.ageSpeed.saplings"),
	manure:{id:351,data:15},
	farmland:[{id:60,data:0},{id:2,data:0},{id:3,data:0},{id:60,data:7}],
	seedsPlaceFunc:true
});
CropRegistry.registerClassDeriveFunction("Harvestcraft_treeSapling",function(classs,idd){
	Recipes.addFurnaceFuel(CropRegistry.getSeedFromCrop(idd), 0, 140);
	var cfg = CropRegistry.getConfigFromCrop(idd);
	PlantModel.tree(idd,0);
	Block.setDestroyLevelForID (idd, 0);
	ToolAPI.registerBlockMaterial(idd, "plant");
	Harvest.registerDroppingBlock(idd);
	Block.setRandomTickCallback(idd,function(x,y,z,id,data){
		var chance = cfg.ageSpeed;
		if(Math.random()<chance){
			TreeRegistry.deployTree(x,y,z,TreeRegistry.getTreeFromSaplingBlock(idd));
		}
	});
	Callback.addCallback("ItemUse",function(coords,item,block){
		var manure = cfg.manure;
		var chance = __config__.access("other.growChance.saplings");
		if(item.id==manure.id&&item.data==manure.data&&block.id==idd){
			if(Math.random()<chance){
				TreeRegistry.deployTree(coords.x,coords.y,coords.z,TreeRegistry.getTreeFromSaplingBlock(idd));
			}	
			if(particles){
				for(var i = 0;i<particles;i++){
					Particles.addParticle(Native.ParticleType.happyVillager, coords.x+Math.random()*.8,coords.y+Math.random()*.8,coords.z+Math.random()*.8,0,0,0,0)
				}
			}
		}
	});
	Block.registerDropFunction(idd, function(coords, blockID, blockData, level){
		return[[ CropRegistry.getSeedFromCrop(idd), 1,0 ]];
	});
	if(ForestryAPI){
		ForestryAPI.BeeRegistry.FLOWERS_JUNGLE.push(idd+':'+0);
		ForestryAPI.BeeRegistry.FLOWERS_FLOWERS.push(idd+':'+0);
	}
});


CropRegistry.registerClass("Harvestcraft_fruit");
CropRegistry.registerClassConfig("Harvestcraft_fruit",{
	ageSpeed:__config__.access("other.ageSpeed.fruits"),
	manure:{id:351,data:15},
	farmland:[{id:18,data:0}]
});
CropRegistry.setRegularFunctionsForClass("Harvestcraft_fruit",__config__.access("other.growChance.fruits"),particles);
CropRegistry.registerClassDeriveFunction("Harvestcraft_fruit",function(classs,idd){
	var cfg = CropRegistry.getConfigFromCrop(idd);
	PlantModel.fruit(idd);
	Block.setDestroyLevelForID (idd, 0);
	ToolAPI.registerBlockMaterial(idd, "plant");
	Block.setRandomTickCallback(idd,function(x,y,z,id,data){
		var chance = cfg.ageSpeed;
		if(Math.random()<chance&&data<2){
			World.setBlock(x,y,z,id,data+1);
		}
	});
	if(ForestryAPI){
		ForestryAPI.BeeRegistry.FLOWERS_JUNGLE.push(idd+':'+0);
		ForestryAPI.BeeRegistry.FLOWERS_FLOWERS.push(idd+':'+0);
	}
});
//MIDDLE
TreeRegistry.registerClass("Harvestcraft_middleFruitTree");
TreeRegistry.registerClassConfig("Harvestcraft_middleFruitTree",{
	fruitCount:7
});

var standartHarvestCraftTreePrototype = TreeRegistry.generateStandartTreePrototypeWithParams({leaves:{id:18,data:0},wood:{id:17,data:0}});

TreeRegistry.registerClassPrototype("Harvestcraft_middleFruitTree",standartHarvestCraftTreePrototype);

//JUNGLE
TreeRegistry.registerClass("Harvestcraft_jungleFruitTree");
TreeRegistry.registerClassConfig("Harvestcraft_jungleFruitTree",{
	fruitCount:5
});

var jungleHarvestCraftTreePrototype = TreeRegistry.generateStandartTreePrototypeWithParams({leaves:{id:18,data:3},wood:{id:17,data:3}});

TreeRegistry.registerClassPrototype("Harvestcraft_jungleFruitTree",jungleHarvestCraftTreePrototype);


//TAIGA
TreeRegistry.registerClass("Harvestcraft_taigaFruitTree");
TreeRegistry.registerClassConfig("Harvestcraft_taigaFruitTree",{
	fruitCount:4
});

var taigaHarvestCraftTreePrototype = TreeRegistry.generateStandartTreePrototypeWithParams({leaves:{id:18,data:4},wood:{id:162,data:0}});

TreeRegistry.registerClassPrototype("Harvestcraft_taigaFruitTree",taigaHarvestCraftTreePrototype);


/*
var standartHarvestCraftTreePrototype = new TreePrototype();
standartHarvestCraftTreePrototype.addStructure([
	{
		id:18,
		data:0,
		box:{
			pos1:{x:-2,y:3,z:-2},
			pos2:{x:2,y:4,z:2}
		}
	},
	{
		id:18,
		data:0,
		box:{
			pos1:{x:-1,y:5,z:0},
			pos2:{x:1,y:6,z:0}
		}
	},
	{
		id:18,
		data:0,
		box:{
			pos1:{x:0,y:5,z:-1},
			pos2:{x:0,y:6,z:1}
		}
	},
	{
		id:17,
		data:0,
		box:{
			pos1:{x:0,y:0,z:0},
			pos2:{x:0,y:5,z:0}
		}
	}
]);
standartHarvestCraftTreePrototype.addFruitsArea([
	{
		box:{
			pos1:{x:-2,y:2,z:-2}, 
			pos2:{x:2,y:2,z:2}
		}
	}
]);*/




// file: DEBUG/translation.js

﻿Translation.addTranslation("Cutting board", {ru: " Разделочная доска", zh:"砧板" });
Translation.addTranslation("Pot", {ru: "Чаша",zh:"锅"});
Translation.addTranslation("Skillet", {ru: "Сковорода",zh:"煎锅"});
Translation.addTranslation("Saucepan", {ru: "Кастрюля",zh:"平底锅"});
Translation.addTranslation("Bakeware", {ru: "Протвень для выпекания",zh:"烤盘"});
Translation.addTranslation("Mixing bowl", {ru: "Чаща для смешивания",zh:"搅拌碗"});
Translation.addTranslation("Mortar bowl", {ru: "Пестик и ступка",zh:"研钵"});
Translation.addTranslation("Juicer", {ru: "Соковыжималка",zh:"榨汁机"});
Translation.addTranslation("Toast", {ru: "Тост",zh:"吐司面包"});
Translation.addTranslation("Raspberry juice", {ru: "Малиновый сок",zh:"覆盆子汁"});
Translation.addTranslation("Cranberry juice", {ru: "Клюквенный сок",zh:"蔓越莓汁"});
Translation.addTranslation("Blackberry juice", {ru: "Черничный сок",zh:"黑莓汁"});
Translation.addTranslation("Grape juice", {ru: "Виноградный сок",zh:"葡萄汁"});
Translation.addTranslation("Melon juice", {ru: "Арбузный сок",zh:"西瓜汁"});
Translation.addTranslation("Blueberry juice", {ru: "Сок из голубики",zh:"蓝莓汁"});
Translation.addTranslation("Carrot juice", {ru: "Морковный сок",zh:"胡萝卜汁"});
Translation.addTranslation("Apple juice", {ru: "Яблочный сок",zh:"苹果汁"});
Translation.addTranslation("Cocoa powder", {ru: "Какао порошок",zh:"可可粉"});
Translation.addTranslation("Chocolate milk", {ru: "Шоколадное молоко",zh:"巧克力牛奶"});
Translation.addTranslation("Strawberry smoothie", {ru: "Клубничный смузи",zh:"草莓冰沙"});
Translation.addTranslation("Raspberry smoothie", {ru: "Малиновый смузи",zh:"覆盆子冰沙"});
Translation.addTranslation("Blackberry smoothie", {ru: "Черничный смузи",zh:"黑莓冰沙"});
Translation.addTranslation("Blueberry smoothie", {ru: "Смузи из черники",zh:"蓝莓冰沙"});
Translation.addTranslation("Melon smoothie", {ru: "Арбузный смузи",zh:"西瓜冰沙"});
Translation.addTranslation("Plain yogurt", {ru: "Йогурт",zh:"纯酸奶"});
Translation.addTranslation("Strawberry yogurt", {ru: "Клубничный йогурт",zh:"草莓酸奶"});
Translation.addTranslation("Raspberry yogurt", {ru: "Малиновый йогурт",zh:"覆盆子酸奶"});
Translation.addTranslation("Grape yogurt", {ru: "Виноградный йогурт",zh:"葡萄酸奶"});
Translation.addTranslation("Apple yogurt", {ru: "Яблочный йогурт",zh:"苹果酸奶"});
Translation.addTranslation("Blackberry yogurt", {ru: "Йогурт из черники",zh:"黑莓酸奶"});
Translation.addTranslation("Blueberry yogurt", {ru: "Йогурт из голубики",zh:"蓝莓酸奶"});
Translation.addTranslation("Pumpkin yogurt", {ru: "Тыквенный йогурт",zh:"南瓜酸奶"});
Translation.addTranslation("Melon yogurt", {ru: "Абрузный йогурт",zh:"西瓜酸奶"});
Translation.addTranslation("Chocolate yogurt", {ru: "Шоколадный йогурт",zh:"巧克力酸奶"});
Translation.addTranslation("Espresso", {ru: "Эспрессо",zh:"咖啡"});
Translation.addTranslation("Hot chocolate", {ru: "Горячий шоколад",zh:"热巧克力"});
Translation.addTranslation("Vinegar", {ru: "Укус",zh:"醋"});
Translation.addTranslation("Сheese", {ru: "Сыр",zh:"芝士"});
Translation.addTranslation("Beet salad", {ru: "Салат из свеклы",zh:"甜菜沙拉"});
Translation.addTranslation("Fruit salad", {ru: "Фруктовый салат",zh:"水果沙拉"});
Translation.addTranslation("Spring salad", {ru: "Весенний салат",zh:"时蔬沙拉"});
Translation.addTranslation("Cucumber salad", {ru: "Огуречный салат",zh:"黄瓜沙拉"});
Translation.addTranslation("Ceasar salade", {ru: "Салат Цезарь",zh:"凯撒沙拉"});
Translation.addTranslation("Stock", {ru: "Бульон",zh:"肉汤"});
Translation.addTranslation("Pot roast", {ru: "Тушеное мясо",zh:"炖肉"});
Translation.addTranslation("Vegetable soup", {ru: "Овощной суп",zh:"蔬菜汤"});
Translation.addTranslation("Heavy cream", {ru: "Жирные сливки",zh:"奶油"});
Translation.addTranslation("Pumpkin soup", {ru: "Суп из тыквы",zh:"南瓜汤"});
Translation.addTranslation("Cornflakes", {ru: "Кукурузные хлопья",zh:"玉米片"});
Translation.addTranslation("Fried egg", {ru: "Жаренное яйцо",zh:"煎鸡蛋"});
Translation.addTranslation("Boiled egg", {ru: "Вареное яйцо",zh:"煮鸡蛋"});
Translation.addTranslation("Pancakes", {ru: "Блины",zh:"煎饼"});
Translation.addTranslation("Dough", {ru: "Тесто",zh:"面团"});
Translation.addTranslation("Cranberry bar", {ru: "Клюквенный батончик",zh:"蔓越莓块"});
Translation.addTranslation("Pizza", {ru: "Пицца",zh:"比萨"});
Translation.addTranslation("Fries", {ru: "Картофель фри",zh:"薯条"});
Translation.addTranslation("Breaded porkchop", {ru: "Панированная свинная отбивная",zh:"猪扒包"});
Translation.addTranslation("Butter", {ru: "Масло",zh:"黄油"});
Translation.addTranslation("Hot wings", {ru: "Горячие крылья",zh:"辣鸡翅"});
Translation.addTranslation("Mayo", {ru: "Майонез",zh:"蛋黄酱"});
Translation.addTranslation("Fish dinner", {ru: "Рыбный ужин",zh:"烧鱼"});
Translation.addTranslation("Potato cakes", {ru: "Картофельные пирожные",zh:"土豆蛋糕"});
Translation.addTranslation("Hearty breakfast", {ru: "Сердечный завтрак",zh:"丰盛的早餐"});
Translation.addTranslation("Steak and chips", {ru: "Стейк и чипсы",zh:"牛排配薯条"});
Translation.addTranslation("Roast chicken", {ru: "Жаренный цыпленок",zh:"烤鸡"});
Translation.addTranslation("Roast potatoes", {ru: "Жареная картошка",zh:"烤土豆"});
Translation.addTranslation("Sunday roast", {ru: "Воскресный обед",zh:"周日烧烤"});
Translation.addTranslation("Lamb with mint sauce", {ru: "Ягненок с мятным соусом",zh:"羊肉配薄荷酱"});
Translation.addTranslation("Meaty stew", {ru: "Мясное рагу",zh:"炖肉煲"});
Translation.addTranslation("Chocolate bar", {ru: "Шоколадный батончик",zh:"巧克力"});
Translation.addTranslation("Chaos cookie", {ru: "Хаос печенье",zh:"曲奇饼干"});
Translation.addTranslation("Blueberry pie", {ru: "Пирог с голубикой",zh:"蓝莓派"});
Translation.addTranslation("Waffles", {ru: "Вафли",zh:"威化饼干"});
Translation.addTranslation("Strawberry", {ru: "Земляника",zh:"草莓"});
Translation.addTranslation("Raspberry", {ru: "Малина",zh:"覆盆子"});
Translation.addTranslation("Cranberry", {ru: "Клюква",zh:"蔓越莓"});
Translation.addTranslation("Blueberry", {ru: "Голубика",zh:"蓝莓"});
Translation.addTranslation("Blackberry", {ru: "Черника",zh:"黑莓"});
Translation.addTranslation("Grape", {ru: "Виноград",zh:"葡萄"});
Translation.addTranslation("Cucumber", {ru: "Огурец",zh:"黄瓜"});
Translation.addTranslation("Onion", {ru: "Лук",zh:"洋葱"});
Translation.addTranslation("Cabbage", {ru: "Капуста",zh:"卷心菜"});
Translation.addTranslation("Tomato", {ru: "Помидор",zh:"西红柿"});
Translation.addTranslation("Bellpepper", {ru: "Болгарский перец",zh:"灯笼椒"});
Translation.addTranslation("Garlic", {ru: "Чеснок",zh:"大蒜"});
Translation.addTranslation("Lettuce", {ru: "Салат",zh:"生菜"});
Translation.addTranslation("Coffee beans", {ru: "Кофейные зерна",zh:"咖啡豆"});
Translation.addTranslation("Peas", {ru: "Горох",zh:"豌豆"});
Translation.addTranslation("Chilli pepper", {ru: "Перец чили",zh:"山椒"});
Translation.addTranslation("Spice leaf", {ru: "Лист специй",zh:"香料叶"});
Translation.addTranslation("Corn", {ru: "Кукуруза",zh:"玉米"});
Translation.addTranslation("Peppercorn", {ru: "Перчинка",zh:"辣椒子"});
Translation.addTranslation("Black pepper", {ru: "Черный перец",zh:"黑胡椒"});
Translation.addTranslation("Fresh water", {ru: "Свежая вода",zh:"纯净水"});
Translation.addTranslation("Fresh milk", {ru: "Свежее молоко",zh:"纯牛奶"});
Translation.addTranslation("Salt", {ru: "Соль",zh:"盐"});
Translation.addTranslation("Flour", {ru: "Мука",zh:"面粉"});
Translation.addTranslation("Strawberry seed", {ru: "Семя клубники",zh:"草莓种子"});
Translation.addTranslation("Raspberry seed", {ru: "Семя малины",zh:"覆盆子种子"});
Translation.addTranslation("Cranberry seed", {ru: "Семя клюквы",zh:"蔓越莓种子"});
Translation.addTranslation("Blueberry seed", {ru: "Семя голубики",zh:"蓝莓种子"});
Translation.addTranslation("Blackberry seed", {ru: "Семя черники",zh:"黑莓种子"});
Translation.addTranslation("Candle berry seed", {ru: "Семя свечной ягоды",zh:"蜡烛莓种子"});
Translation.addTranslation("Grape seed", {ru: "Семя винограда",zh:"葡萄种子"});
Translation.addTranslation("Cucumber seed", {ru: "Семя огурца",zh:"黄瓜种子"});
Translation.addTranslation("Onion seed", {ru: "Семя лука",zh:"洋葱种子"});
Translation.addTranslation("Cabbage seed", {ru: "Семя капусты",zh:"卷心菜种子"});
Translation.addTranslation("Tomato seed", {ru: "Семя помидора",zh:"西红柿种子"});
Translation.addTranslation("Bellpepper seed", {ru: "Семя Болгарского перца",zh:"灯笼椒种子"});
Translation.addTranslation("Garlic seed", {ru: "Семя чеснока",zh:"大蒜种子"});
Translation.addTranslation("Lettuce seed", {ru: "Семя салата",zh:"生菜种子"});
Translation.addTranslation("Coffee seed", {ru: "Семя кофейного дерева",zh:"咖啡豆种子"});
Translation.addTranslation("Peas seed", {ru: "Семя гороха",zh:"豌豆种子"});
Translation.addTranslation("Chilli pepper seed", {ru: "Семя перца чили",zh:"山椒种子"});
Translation.addTranslation("Spice leaf seed", {ru: "Семя листа специй",zh:"香料叶种子"});
Translation.addTranslation("Corn seed", {ru: "Семя кукурузы",zh:"玉米种子"});
Translation.addTranslation("Peppercorn seed", {ru: "Семя чёрного перца",zh:"胡椒子种子"});
Translation.addTranslation("Grass garden", {ru: "Лекарственный куст",zh:"草丛"});
Translation.addTranslation("Herb garden", {ru: "Травяной сад",zh:"草药丛"});
Translation.addTranslation("Berry garden", {ru: "Ягодный сад",zh:"野果丛"});
Translation.addTranslation("Salt", {ru: "Соль",zh:"盐"});
Translation.addTranslation("Apple Tree Sapling", {ru: "Саженец яблони",zh:"苹果树树苗"});
Translation.addTranslation("Sink",   {ru:"Бочка для воды",zh:"水槽"});
Translation.addTranslation("Sink 1", {ru:"Каменный резервуар",zh:"水槽1"});
Translation.addTranslation("Sink 2", {ru:"Глиняный кувшин",zh:"水槽2"});
Translation.addTranslation("Sink 3", {ru:"Кирпичный колодец",zh:"水槽3"});
Translation.addTranslation("Fish trap", {ru:"Ловушка для рыбы",zh:"鱼陷阱"});
Translation.addTranslation("Animal trap", {ru:"Ловушка для зверей",zh:"动物陷阱"});
Translation.addTranslation("Harded Leather Helmet", {ru:"Шлем из прочной кожи",zh:"坚硬皮革头盔"});
Translation.addTranslation("Harded Leather Chestplate", {ru:"Кираса из прочной кожи",zh:"坚硬皮革胸甲"});
Translation.addTranslation("Harded Leather Leggings", {ru:"Поножи из прочной кожи",zh:"坚硬皮革护腿"});
Translation.addTranslation("Harded Leather Boots", {ru:"Ботинки из прочной кожи",zh:"坚硬皮革鞋子"});
Translation.addTranslation("Grain bait", {ru: "Семечковая приманка"});
Translation.addTranslation("Fruit bait", {ru: "Фруктовая приманка"});
Translation.addTranslation("Veggie bait", {ru: "Овощная приманка"});
Translation.addTranslation("Curryleaf", {ru: "Японское карри"});
Translation.addTranslation("Curry Powder", {ru: "Порошок карри"});
Translation.addTranslation("Curryleaf seed", {ru: "Семя японского карри"});
Translation.addTranslation("Raw venison", {ru: "Сырая оленина"});
Translation.addTranslation("Cooked venison", {ru: "Приготовленная оленина"});
Translation.addTranslation("Raw turkey", {ru: "Сырая индейка"});
Translation.addTranslation("Cooked turkey", {ru: "Приготовленная индейка"});
Translation.addTranslation("Spider Eye Soup", {ru: "Суп из глаза паука"});
Translation.addTranslation("Zombie Jerky", {ru: "Вяленое мясо зомби"});
Translation.addTranslation("Curry powder", {ru: "Прошок японского карри"});
Translation.addTranslation("Vindaloo", {ru: "Виндалу"});
Translation.addTranslation("Sausage", {ru: "Колбаса"});
Translation.addTranslation("Wax", {ru: "Воск"});
Translation.addTranslation("Harded leather", {ru: "Прочная кожа"});
Translation.addTranslation("Candle", {ru: "Свеча"});
Translation.addTranslation("Candleberry garden", {ru: "Куст свечной ягоды"});
Translation.addTranslation("Apple", {ru: "Яблоко"});
Translation.addTranslation("Pressed wax", {ru: "Прессованный воск"});
Translation.addTranslation("Candle berry", {ru: "Свечная ягода"});
Translation.addTranslation("Cashew chicken", {ru: "Курица кешью"});
Translation.addTranslation("Chicken celery casserole", {ru: "Куриная запеканка с сельдереем"});
Translation.addTranslation("Chicken chowmein", {ru: "Китайское рагу из курицы"});
Translation.addTranslation("Cheese", {ru: "Сыр"});
Translation.addTranslation("Chicken curry", {ru: "Куриное карри"});
Translation.addTranslation("Chicken gumbo", {ru: "Куриное гамбо"});
Translation.addTranslation("Chicken noodle soup", {ru: "Куриный суп с лапшой"});
Translation.addTranslation("Chicken pot pie", {ru: "Куриный пирог в горшочке"});
Translation.addTranslation("Chicken sandwich", {ru: "Куриный сэндвич"});
Translation.addTranslation("Fried chicken", {ru: "Курица фри"});
Translation.addTranslation("Garlic chicken", {ru: "Курица с чесноком"});
Translation.addTranslation("General tso chicken", {ru: "Курица генерала ЦО"});
Translation.addTranslation("Ginger chicken", {ru: "Имбирная курица"});
Translation.addTranslation("Kung pao chicken", {ru: "Курица Кунг Пао"});
Translation.addTranslation("Lemon chicken", {ru: "Курица с лемоном"});
Translation.addTranslation("Orange chicken", {ru: "Курица с апельсином"});
Translation.addTranslation("Sweet and sour chicken", {ru: "Кисло-сладкая курица"});
Translation.addTranslation("Teriyaki chicken", {ru: "Курица Терияки"});
Translation.addTranslation("Bacon and eggs", {ru: "Яйца с беконом"});
Translation.addTranslation("Baked ham", {ru: "Буженина"});
Translation.addTranslation("Honey glazed ham", {ru: "Медовая ветчина"});
Translation.addTranslation("Honey soy ribs", {ru: "Соевые ребра с медом"});
Translation.addTranslation("Hot and sour soup", {ru: "Горячий кислый суп"});
Translation.addTranslation("Pea and ham soup", {ru: "Ветчина с персиком"});
Translation.addTranslation("Pineapple ham", {ru: "Ветчина с ананасом"});
Translation.addTranslation("Pork lo mein", {ru: "Свинина с лапшой"});
Translation.addTranslation("Spicy mustarg pork", {ru: "Свинина в острой горчице"});
Translation.addTranslation("Honey lemon lamb", {ru: "Медовая баранина с медом"});
Translation.addTranslation("Lamb barley soup", {ru: "Суп из баранины с ячменем"});
Translation.addTranslation("Shepards pie", {ru: "Пирог Шепарда"});
Translation.addTranslation("Beefjerky", {ru: "Вяленое мясо"});
Translation.addTranslation("Cotton", {ru: "Хлопок"});
Translation.addTranslation("Cotton seed", {ru: "Семя хлопка"});
Translation.addTranslation("Cotton garden", {ru: "Хлопковый куст"});
Translation.addTranslation("Strawberry juice", {ru: "Клубничный сок"});
Translation.addTranslation("Cornish Pasty", {ru: "Корниш-пасты"});
Translation.addTranslation("Maple Sausage", {ru: "Кленовая колбаса"});
Translation.addTranslation("Hamburger", {ru: "Гамбургер"});
Translation.addTranslation("Cottage Pie", {ru: "Коттеджный пирог"});
Translation.addTranslation("Meat Pie", {ru: "Пирог с мясом"});
Translation.addTranslation("Corned Beef", {ru: "Солонина"});
Translation.addTranslation("Beef Wellington", {ru: "Биф Веллингтон"});
Translation.addTranslation("Bean", {ru: "Бобы"});
Translation.addTranslation("Rice", {ru: "Рис"});
Translation.addTranslation("Water Chestnut", {ru: "Каштан"});
Translation.addTranslation("Rutabaga", {ru: "Редис"});
Translation.addTranslation("Mustard Seeds", {ru: "Горчичные семена"});
Translation.addTranslation("Ginger", {ru: "Имбирь"});
Translation.addTranslation("Spinach", {ru: "Шпинат"});
Translation.addTranslation("Bean Seed", {ru: "Семя бобов"});
Translation.addTranslation("Rice Seed", {ru: "Семя риса"});
Translation.addTranslation("Water Chestnut Seed", {ru: "Семя каштана"});
Translation.addTranslation("Rutabaga Seed", {ru: "Семя редиса"});
Translation.addTranslation("Mustard Seed", {ru: "Горчичное семя"});
Translation.addTranslation("Ginger Seed", {ru: "Семя имбиря"});
Translation.addTranslation("Spinach Seed", {ru: "Семя шпината"});
Translation.addTranslation("Meat Pie", {ru: "Мясной пирог"});
Translation.addTranslation("Baked Beans", {ru: "Печеные бобы"});
Translation.addTranslation("Dim Sum", {ru: "Дим-Сам"});
////////////////////////////////
Translation.addTranslation("Apricot", {ru: "Абрикос"});
Translation.addTranslation("Cherry", {ru: "Вишня"});
Translation.addTranslation("Avocado", {ru: "Авокадо"});
Translation.addTranslation("Banana", {ru: "Банан"});
Translation.addTranslation("Date", {ru: "Финик"});
Translation.addTranslation("Dragonfruit", {ru: "Питайа"});
Translation.addTranslation("Fig", {ru: "Инжир"});
Translation.addTranslation("Grapefruit", {ru: "Грейпфрут"});
Translation.addTranslation("Gooseberry", {ru: "Крыжовник"});
Translation.addTranslation("Lemon", {ru: "Лимон"});
Translation.addTranslation("Lime", {ru: "Лайм"});
Translation.addTranslation("Mango", {ru: "Манго"});
Translation.addTranslation("Olive", {ru: "Олива"});
Translation.addTranslation("Orange", {ru: "Апельсин"});
Translation.addTranslation("Papaya", {ru: "Папайа"});
Translation.addTranslation("Peach", {ru: "Персик"});
Translation.addTranslation("Pear", {ru: "Груша"});
Translation.addTranslation("Persimmon", {ru: "Хурма"});
Translation.addTranslation("Plum", {ru: "Слива"});
Translation.addTranslation("Pomegranate", {ru: "Гранат"});
Translation.addTranslation("Starfruit", {ru: "Карамбола"});
Translation.addTranslation("Almond", {ru: "Миндаль"});
Translation.addTranslation("Cashew", {ru: "Кешью"});
Translation.addTranslation("Coconut", {ru: "Кокос"});
Translation.addTranslation("Cactusfruit", {ru: "Плод кактуса"});
Translation.addTranslation("Cantaloupe", {ru: "Канталупа"});
Translation.addTranslation("Kiwi", {ru: "Киви"});
Translation.addTranslation("Pineapple", {ru: "Ананас"});
Translation.addTranslation("Artichoke", {ru: "Артишок"});
Translation.addTranslation("Asparagus", {ru: "Спаржа"});
Translation.addTranslation("Bambooshoot", {ru: "Бамбуковый побег"});
Translation.addTranslation("Broccoli", {ru: "Брокколи"});
Translation.addTranslation("Brusselsprout", {ru: "Брюссельская капуста"});
Translation.addTranslation("Cauliflower", {ru: "Цветная капуста"});
Translation.addTranslation("Celery", {ru: "Сельдерей"});
Translation.addTranslation("Radish", {ru: "Редис"});
Translation.addTranslation("Eggplant", {ru: "Баклажан"});
Translation.addTranslation("Leek", {ru: "Лук-порей"});
Translation.addTranslation("Okra", {ru: "Окра"});
Translation.addTranslation("Parsnip", {ru: "Пастернак"});
Translation.addTranslation("Rhubarb", {ru: "Ревень"});
Translation.addTranslation("Scallion", {ru: "Лук-шалот"});
Translation.addTranslation("Soybean", {ru: "Соевые бобы"});
Translation.addTranslation("Sweet Potato", {ru: "Сладкий картофель"});
Translation.addTranslation("Turnip", {ru: "Репа"});
Translation.addTranslation("Peanut", {ru: "Арахис"});
Translation.addTranslation("Rye", {ru: "Рожь"});
Translation.addTranslation("Zucchini", {ru: "Цуккини"});
Translation.addTranslation("Barley", {ru: "Ячмень"});
Translation.addTranslation("Oats", {ru: "Овёс"});
Translation.addTranslation("Beet", {ru: "Свёкла"});
Translation.addTranslation("Wintersquash", {ru: "Зимняя тыква"});
Translation.addTranslation("Tea leaf", {ru: "Чайный лист"});
Translation.addTranslation("Apricot smoothie", {ru: "Абрикосовый смузи"});
Translation.addTranslation("Pina collada", {ru: "Пинья колада"});
Translation.addTranslation("Cherry smoothie", {ru: "Вишневый смузи"});
Translation.addTranslation("Banana smoothie", {ru: "Банановый смузи"});
Translation.addTranslation("Banana milkshake", {ru: "Банановый молочный коктель"});
Translation.addTranslation("Goosseberry milkshake", {ru: "Крыжовниковый молочный коктель"});
Translation.addTranslation("Fig smoothie", {ru: "Фиговый смузи"});
Translation.addTranslation("Gooseberry smoothie", {ru: "Крыжовниковый смузи"});
Translation.addTranslation("Lemon smoothie", {ru: "Лимонный смузи"});
Translation.addTranslation("Lime smoothie", {ru: "Лаймовый смузи"});
Translation.addTranslation("Mango smoothie", {ru: "Манговый смузи"});
Translation.addTranslation("Orange smoothie", {ru: "Апельсиновый смузи"});
Translation.addTranslation("Papaya smoothie", {ru: "Смузи из папайи"});
Translation.addTranslation("Peach smoothie", {ru: "Персиковый смузи"});
Translation.addTranslation("Pear smoothie", {ru: "Грушевый смузи"});
Translation.addTranslation("Persimmon smoothie", {ru: "Хурмовый смузи"});
Translation.addTranslation("Plum smoothie", {ru: "Сливовый смузи"});
Translation.addTranslation("Pomegranate smoothie", {ru: "Гранатовый смузи"});
Translation.addTranslation("Starfruit smoothie", {ru: "Смузи из карамболы"});
Translation.addTranslation("Coconut smoothie", {ru: "Кокосовый смузи"});
Translation.addTranslation("Apricot jelly", {ru: "Абрикосовое желе"});
Translation.addTranslation("Cherry jelly", {ru: "Вишневый желе"});
Translation.addTranslation("Fig jelly", {ru: "Фиговый желе"});
Translation.addTranslation("Grapefruit jelly", {ru: "Грейпфрутовое желе"});
Translation.addTranslation("Gooseberry jelly", {ru: "Желе из крыжовника"});
Translation.addTranslation("Lemon jelly", {ru: "Лимонное желе"});
Translation.addTranslation("Lime jelly", {ru: "Лаймовое желе"});
Translation.addTranslation("Mango jelly", {ru: "Желе из манго"});
Translation.addTranslation("Orange jelly", {ru: "Апельсиновое желе"});
Translation.addTranslation("Papaya jelly", {ru: "Желе из папайи"});
Translation.addTranslation("Peach jelly", {ru: "Персиковое желе"});
Translation.addTranslation("Pear jelly", {ru: "Желе из груши"});
Translation.addTranslation("Persimmon jelly", {ru: "Хурмовое желе"});
Translation.addTranslation("Plum jelly", {ru: "Сливовое желе"});
Translation.addTranslation("Pomegranate jelly", {ru: "Гранатовое желе"});
Translation.addTranslation("Starfruit jelly", {ru: "Желе из карамболы"});
Translation.addTranslation("Coconut jelly", {ru: "Кокосовое желе"});
Translation.addTranslation("Apricot juice", {ru: "Абрикосовый сок"});
Translation.addTranslation("Cherry juice", {ru: "Вишневый сок"});
Translation.addTranslation("Fig juice", {ru: "Фиговый сок"});
Translation.addTranslation("Grapefruit juice", {ru: "Грейпфрутовый сок"});
Translation.addTranslation("Lemonade", {ru: "Лимонад"});
Translation.addTranslation("Lime juice", {ru: "Лаймовый сок"});
Translation.addTranslation("Mango juice", {ru: "Сок из манго"});
Translation.addTranslation("Orange juice", {ru: "Апельсиновый сок"});
Translation.addTranslation("Papaya juice", {ru: "Сок из папайи"});
Translation.addTranslation("Peach juice", {ru: "Персиковый сок"});
Translation.addTranslation("Pear juice", {ru: "Сок из груши"});
Translation.addTranslation("Persimmon juice", {ru: "Хурмовый сок"});
Translation.addTranslation("Plum juice", {ru: "Сливовый сок"});
Translation.addTranslation("Pomegranate juice", {ru: "Гранатовый сок"});
Translation.addTranslation("Starfruit juice", {ru: "Сок из карамболы"});
Translation.addTranslation("Coconut milk", {ru: "Кокосовое молоко"});
Translation.addTranslation("Pineapple yogurt", {ru: "Ананасовый йогурт"});
Translation.addTranslation("Apricot yogurt", {ru: "Абрикосовый йогурт"});
Translation.addTranslation("Cherry yogurt", {ru: "Вишневый йогурт"});
Translation.addTranslation("Banana yogurt", {ru: "Банановый йогурт"});
Translation.addTranslation("Fig yogurt", {ru: "Фиговый йогурт"});
Translation.addTranslation("Grapefruit yogurt", {ru: "Грейпфрутовый йогурт"});
Translation.addTranslation("Gooseberry yogurt", {ru: "Йогурт из крыжовника"});
Translation.addTranslation("Lemon yogurt", {ru: "Лимонный йогурт"});
Translation.addTranslation("Lime yogurt", {ru: "Лаймовый йогурт"});
Translation.addTranslation("Mango yogurt", {ru: "Йогурт из манго"});
Translation.addTranslation("Orange yogurt", {ru: "Апельсиновый йогурт"});
Translation.addTranslation("Papaya yogurt", {ru: "Йогурт из папайи"});
Translation.addTranslation("Peach yogurt", {ru: "Персиковый йогурт"});
Translation.addTranslation("Pear yogurt", {ru: "Йогурт из груши"});
Translation.addTranslation("Persimmon yogurt", {ru: "Хурмовый йогурт"});
Translation.addTranslation("Plum yogurt", {ru: "Сливовый йогурт"});
Translation.addTranslation("Pomegranate yogurt", {ru: "Гранатовый йогурт"});
Translation.addTranslation("Starfruit yogurt", {ru: "Йогурт из карамболы"});
Translation.addTranslation("Coconut yogurt", {ru: "Кокосовый йогурт"});
Translation.addTranslation("Cactusfruit Seed", {ru: "Семя кактуса"});
Translation.addTranslation("Cantaloupe Seed", {ru: "Семя канталупы"});
Translation.addTranslation("Kiwi Seed", {ru: "Семя киви"});
Translation.addTranslation("Pineapple Seed", {ru: "Семя ананаса"});
Translation.addTranslation("Artichoke Seed", {ru: "Семя артишока"});
Translation.addTranslation("Asparagus Seed", {ru: "Семя спаржи"});
Translation.addTranslation("Bambooshoot Seed", {ru: "Семя бамбукового побега"});
Translation.addTranslation("Broccoli Seed", {ru: "Семя броколли"});
Translation.addTranslation("Brusselsprout Seed", {ru: "Семя брюссельской капусты"});
Translation.addTranslation("Cauliflower Seed", {ru: "Семя цветной капусты"});
Translation.addTranslation("Celery Seed", {ru: "Семя сельдерея"});
Translation.addTranslation("Radish Seed", {ru: "Семя редиса"});
Translation.addTranslation("Eggplant Seed", {ru: "Семя баклажана"});
Translation.addTranslation("Leek Seed", {ru: "Семя лука-порея"});
Translation.addTranslation("Okra Seed", {ru: "Семя окры"});
Translation.addTranslation("Parsnip Seed", {ru: "Семя пастернака"});
Translation.addTranslation("Rhubarb Seed", {ru: "Семя ревеня"});
Translation.addTranslation("Scallion Seed", {ru: "Семя лука-шалота"});
Translation.addTranslation("Soybean Seed", {ru: "Семя соевого боба"});
Translation.addTranslation("Sweet Potato Seed", {ru: "Семя сладкого картофеля"});
Translation.addTranslation("Turnip Seed", {ru: "Семя репы"});
Translation.addTranslation("Peanut Seed", {ru: "Семя арахиса"});
Translation.addTranslation("Rye Seed", {ru: "Семя ржи"});
Translation.addTranslation("Zucchini Seed", {ru: "Семя цуккини"});
Translation.addTranslation("Barley Seed", {ru: "Семя ячменя"});
Translation.addTranslation("Oats Seed", {ru: "Семя овса"});
Translation.addTranslation("Wintersquash Seed", {ru: "Семя зимней тыквы"});
Translation.addTranslation("Tealeaf Seed", {ru: "Семя чайного листа"});
Translation.addTranslation("Beet Seed", {ru: "Семя свёклы"});
Translation.addTranslation("Apricot Tree Sapling", {ru: "Саженец абрикоса"});
Translation.addTranslation("Cherry Tree Sapling", {ru: "Саженец вишни"});
Translation.addTranslation("Avocado Tree Sapling", {ru: "Саженец авокадо"});
Translation.addTranslation("Banana Tree Sapling", {ru: "Саженец банана"});
Translation.addTranslation("Date Tree Sapling", {ru: "Саженец финика"});
Translation.addTranslation("Dragonfruit Tree Sapling", {ru: "Саженец питайи"});
Translation.addTranslation("Fig Tree Sapling", {ru: "Саженец фига"});
Translation.addTranslation("Grapefruit Tree Sapling", {ru: "Саженец грейпфрута"});
Translation.addTranslation("Gooseberry Tree Sapling", {ru: "Саженец крыжовника"});
Translation.addTranslation("Lime Tree Sapling", {ru: "Саженец лайма"});
Translation.addTranslation("Lemon Tree Sapling", {ru: "Саженец лимона"});
Translation.addTranslation("Mango Tree Sapling", {ru: "Саженец манго"});
Translation.addTranslation("Olive Tree Sapling", {ru: "Саженец оливы"});
Translation.addTranslation("Orange Tree Sapling", {ru: "Саженец апельсина"});
Translation.addTranslation("Papaya Tree Sapling", {ru: "Саженец папайи"});
Translation.addTranslation("Peach Tree Sapling", {ru: "Саженец персика"});
Translation.addTranslation("Pear Tree Sapling", {ru: "Саженец груши"});
Translation.addTranslation("Persimmon Tree Sapling", {ru: "Саженец хурмы"});
Translation.addTranslation("Plum Tree Sapling", {ru: "Саженец сливы"});
Translation.addTranslation("Pomegranate Tree Sapling", {ru: "Саженец граната"});
Translation.addTranslation("Starfruit Tree Sapling", {ru: "Саженец карамболы"});
Translation.addTranslation("Almond Tree Sapling", {ru: "Саженец миндаля"});
Translation.addTranslation("Peppercorn Tree Sapling", {ru: "Саженец перца"});
Translation.addTranslation("Cashew Tree Sapling", {ru: "Саженец кешью"});
Translation.addTranslation("Coconut Tree Sapling", {ru: "Саженец кокоса"});
Translation.addTranslation("Kiwi smoothie", {ru: "Смузи из киви"});
Translation.addTranslation("Kiwi yogurt", {ru: "Йогурт из киви"});
Translation.addTranslation("Coconut cream", {ru: "Кокосовый крем"});
Translation.addTranslation("Chai tea", {ru: "Чай масала"});
Translation.addTranslation("Raspberry ice tea", {ru: "Малиновый холодный чай"});
Translation.addTranslation("Fig bar", {ru: "Фиговый батончик"});
Translation.addTranslation("Lemon bar", {ru: "Лимонный батончик"});
Translation.addTranslation("Bacon wrapped dates", {ru: "Финики обёрнутые беконом"});
Translation.addTranslation("Carnied lemon", {ru: "Карамельные лимоны"});
Translation.addTranslation("Arid garden", {ru: "Пустынный куст"});
Translation.addTranslation("Tropical garden", {ru: "Тропический куст"});
Translation.addTranslation("Leafy garden", {ru: "Лиственный куст"});
Translation.addTranslation("Frosty garden", {ru: "Морозный сад"});
Translation.addTranslation("Ground garden", {ru: "Земляной куст"});
Translation.addTranslation("Stalk garden", {ru: "Стебельковый куст"});
Translation.addTranslation("Gourd garden", {ru: "Тыквенный куст"});




// file: DEBUG/debugItems.js

﻿/*IDRegistry.genItemID("Atree");
Item.createItem("Atree", "Spawn Tree", {name: "stick", data: 0});
Item.registerUseFunction("Atree",function(coords, item, block){
	Debug.m("Item");	
});

IDRegistry.genItemID("AGE");
Item.createItem("AGE", "AGE", {name: "stick", data: 0});
Item.registerUseFunction("AGE",function(coords, item, block){
	var te = World.getTileEntity(coords.x,coords.y,coords.z);
	Game.message(te.isCrop);
 });
 
IDRegistry.genItemID("waaa");
Item.createItem("waaa", "Check water", {name: "stick", data: 0});
Item.registerUseFunction("waaa",function(coords, item, block){
	var bblok = World.getBlockID(coords.x,coords.y+1,coords.z);
	Debug.m("Block id: "+bblok+", is transparent: "+GenerationUtils.isTransparentBlock(bblok));
});*/

IDRegistry.genItemID("data");
Item.createItem("data", "data", {name: "stick", data: 0});
Item.registerUseFunction("data",function(coords, item, block){
	Debug.m("ID:"+World.getBlockID(coords.x,coords.y,coords.z));
	Debug.m("DATA:"+World.getBlockData(coords.x,coords.y,coords.z)); 	
});

IDRegistry.genItemID("biome");
Item.createItem("biome", "Get biome", {name: "stick", data: 0});
Item.registerUseFunction("biome",function(coords, item, block){
	Debug.m("Biome id: "+World.getBiome(coords.x, coords.z) );
});




// file: ITEMS/tools.js

IDRegistry.genItemID("cutting_board");
Item.createItem("cutting_board", "Cutting board", {name: "cutting_board", meta: 0}, {stack: 1});
Harvest.registerTool(ItemID.cutting_board);

IDRegistry.genItemID("pot");
Item.createItem("pot", "Pot", {name: "pot", meta: 0}, {stack: 1});
Harvest.registerTool(ItemID.pot);

IDRegistry.genItemID("skillet");
Item.createItem("skillet", "Skillet", {name: "skillet", meta: 0}, {stack: 1});
Harvest.registerTool(ItemID.skillet);

IDRegistry.genItemID("saucepan");
Item.createItem("saucepan", "Saucepan", {name: "saucepan", meta: 0}, {stack: 1});
Harvest.registerTool(ItemID.saucepan);

IDRegistry.genItemID("bakeware");
Item.createItem("bakeware", "Bakeware", {name: "bakeware", meta: 0}, {stack: 1});
Harvest.registerTool(ItemID.bakeware);

IDRegistry.genItemID("mixing_bowl");
Item.createItem("mixing_bowl", "Mixing bowl", {name: "mixing_bowl", meta: 0}, {stack: 1});
Harvest.registerTool(ItemID.mixing_bowl);

IDRegistry.genItemID("mortar_bowl");
Item.createItem("mortar_bowl", "Mortar bowl", {name: "mortar_bowl", meta: 0}, {stack: 1});
Harvest.registerTool(ItemID.mortar_bowl);

IDRegistry.genItemID("juicer");
Item.createItem("juicer", "Juicer", {name: "juicer", meta: 0}, {stack: 1});
Harvest.registerTool(ItemID.juicer);

Harvest.registerTool(325);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.juicer, count: 1, data: 0}, ["a  ", "b  "], ["a", 1, 0, "b", 70, 0]);
	Recipes.addShaped({id: ItemID.mortar_bowl, count: 1, data: 0}, ["aba", " a "], ["a", 1, 0, "b", 280, 0]);
	Recipes.addShaped({id: ItemID.mixing_bowl, count: 1, data: 0}, ["aba", " a "], ["a", 5, 0, "b", 280, 0]);
	Recipes.addShaped({id: ItemID.bakeware, count: 1, data: 0}, ["aaa", "a a", "aaa"], ["a", 336, 0]);
	Recipes.addShaped({id: ItemID.saucepan, count: 1, data: 0}, ["a  ", "b  "], ["a", 265, 0, "b", 280, 0]);
	Recipes.addShaped({id: ItemID.skillet, count: 1, data: 0}, ["a  ", " a ", "  b"], ["a", 265, 0, "b", 280, 0]);
	Recipes.addShaped({id: ItemID.pot, count: 1, data: 0}, ["abb", " bb"], ["a", 280, 0, "b", 265, 0]);
	Recipes.addShaped({id: ItemID.cutting_board, count: 1, data: 0}, ["a  ", " b ", "  c"], ["a", 265, 0, "b", 280, 0, "c", 5, 0]);
});




// file: ITEMS/baits.js

IDRegistry.genItemID("graitBait");
Item.createItem("graitBait", "Grain bait", {name: "grain_bait", meta: 0}, {});
IDRegistry.genItemID("fruitBait");
Item.createItem("fruitBait", "Fruit bait", {name: "fruit_bait", meta: 0}, {});
IDRegistry.genItemID("veggieBait");
Item.createItem("veggieBait", "Veggie bait", {name: "veggie_bait", meta: 0}, {});
/*
IDRegistry.genItemID("fishBait");
Item.createItem("fishBait", "Fish bait", {name: "fish_bait", meta: 0}, {});*/
Callback.addCallback("LevelLoaded", function(){
	Recipes.addShapeless({id: ItemID.graitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: 295, data: 0},{id: 295, data: 0},{id: 295, data: 0}]);
	Recipes.addShapeless({id: ItemID.graitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.rhubarb, data: 0},{id: ItemID.rhubarb, data: 0},{id: ItemID.rhubarb, data: 0}]);
	Recipes.addShapeless({id: ItemID.graitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.rye, data: 0},{id: ItemID.rye, data: 0},{id: ItemID.rye, data: 0}]);
	Recipes.addShapeless({id: ItemID.graitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.barley, data: 0},{id: ItemID.barley, data: 0},{id: ItemID.barley, data: 0}]);
	Recipes.addShapeless({id: ItemID.graitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.oats, data: 0},{id: ItemID.oats, data: 0},{id: ItemID.oats, data: 0}]);
	Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: 260, data: 0},{id: 260, data: 0},{id: 260, data: 0}]);
	Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.cactusfruit, data: 0},{id: ItemID.cactusfruit, data: 0},{id: ItemID.cactusfruit, data: 0}]);
	Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.cantaloupe, data: 0},{id: ItemID.cantaloupe, data: 0},{id: ItemID.cantaloupe, data: 0}]);
	Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.strawberry, data: 0},{id: ItemID.strawberry, data: 0},{id: ItemID.strawberry, data: 0}]);
	Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.raspberry, data: 0},{id: ItemID.raspberry, data: 0},{id: ItemID.raspberry, data: 0}]);
	Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.cranberry, data: 0},{id: ItemID.cranberry, data: 0},{id: ItemID.cranberry, data: 0}]);
	Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.blueberry, data: 0},{id: ItemID.blueberry, data: 0},{id: ItemID.blueberry, data: 0}]);
	Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.blackberry, data: 0},{id: ItemID.blackberry, data: 0},{id: ItemID.blackberry, data: 0}]);
	Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.grape, data: 0},{id: ItemID.grape, data: 0},{id: ItemID.grape, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.cucumber, data: 0},{id: ItemID.cucumber, data: 0},{id: ItemID.cucumber, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.zucchini, data: 0},{id: ItemID.zucchini, data: 0},{id: ItemID.zucchini, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.onion, data: 0},{id: ItemID.onion, data: 0},{id: ItemID.onion, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.cabbage, data: 0},{id: ItemID.cabbage, data: 0},{id: ItemID.cabbage, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.tomato, data: 0},{id: ItemID.tomato, data: 0},{id: ItemID.tomato, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.soybean, data: 0},{id: ItemID.soybean, data: 0},{id: ItemID.soybean, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.bellpepper, data: 0},{id: ItemID.bellpepper, data: 0},{id: ItemID.bellpepper, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.artichoke, data: 0},{id: ItemID.artichoke, data: 0},{id: ItemID.artichoke, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.asparagus, data: 0},{id: ItemID.asparagus, data: 0},{id: ItemID.asparagus, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.bambooshoot, data: 0},{id: ItemID.bambooshoot, data: 0},{id: ItemID.bambooshoot, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.radish, data: 0},{id: ItemID.radish, data: 0},{id: ItemID.radish, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.parsnip, data: 0},{id: ItemID.parsnip, data: 0},{id: ItemID.parsnip, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.brusselsprout, data: 0},{id: ItemID.brusselsprout, data: 0},{id: ItemID.brusselsprout, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.beet, data: 0},{id: ItemID.beet, data: 0},{id: ItemID.beet, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.garlic, data: 0},{id: ItemID.garlic, data: 0},{id: ItemID.garlic, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.lettuce, data: 0},{id: ItemID.lettuce, data: 0},{id: ItemID.lettuce, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.peas, data: 0},{id: ItemID.peas, data: 0},{id: ItemID.peas, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.chili_pepper, data: 0},{id: ItemID.chili_pepper, data: 0},{id: ItemID.chili_pepper, data: 0}]);
	Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.corn, data: 0},{id: ItemID.corn, data: 0},{id: ItemID.corn, data: 0}]);
	//Recipes.addShapeless({id: ItemID.fishBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: 349, data: 0},{id: 349 data: 0},{id: 349, data: 0}]);
	//Recipes.addShapeless({id: ItemID.fishBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: 460, data: 0},{id: 460 data: 0},{id: 460, data: 0}]);
	//Recipes.addShapeless({id: ItemID.fishBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: 461, data: 0},{id: 461 data: 0},{id: 461, data: 0}]);
});




// file: ITEMS/FOOD/fruits.js

Harvest.setFood("strawberry","Strawberry",1);
Harvest.setFood("raspberry","Raspberry",1);
Harvest.setFood("cranberry","Cranberry",1);
Harvest.setFood("blueberry","Blueberry",1);
Harvest.setFood("blackberry","Blackberry",1);
Harvest.setFood("candleberry","Candle berry",1);
Harvest.setFood("grape","Grape",1);
Harvest.setFood("cucumber","Cucumber",1);
Harvest.setFood("onion","Onion",1);
Harvest.setFood("cabbage","Cabbage",1);
Harvest.setFood("tomato","Tomato",1);
Harvest.setFood("bellpepper","Bellpepper",1);
Harvest.setFood("garlic","Garlic",1);
Harvest.setFood("lettuce","Lettuce",1);
Harvest.setFood("coffee_beans","Coffee beans",1);
Harvest.setFood("peas","Peas",1);
Harvest.setFood("chili_pepper","Chilli pepper",1);
Harvest.setFood("spice_leaf","Spice leaf",1);
Harvest.setFood("corn","Corn",1);
Harvest.setFood("peppercorn","Peppercorn",1);
Harvest.setFood("curryleaf","Curryleaf",1);
Harvest.setFood("cotton","Cotton",1);
Harvest.setFood("bean","Bean",1);
Harvest.setFood("rice","Rice",1);
Harvest.setFood("waterchestnut","Water Chestnut",1);
Harvest.setFood("rutabaga","Rutabaga",1);
Harvest.setFood("mustardseeds","Mustard Seeds",1);
Harvest.setFood("ginger","Ginger",1);
Harvest.setFood("spinach","Spinach",1);
Harvest.setFood("cactusfruit","Cactusfruit",1);
Harvest.setFood("cantaloupe","Cantaloupe",1);
Harvest.setFood("kiwi","Kiwi",1);
Harvest.setFood("pineapple","Pineapple",1);
Harvest.setFood("artichoke","Artichoke",1);
Harvest.setFood("asparagus","Asparagus",1);
Harvest.setFood("bambooshoot","Bambooshoot",1);
Harvest.setFood("broccoli","Broccoli",1);
Harvest.setFood("brusselsprout","Brusselsprout",1);
Harvest.setFood("cauliflower","Cauliflower",1);
Harvest.setFood("celery","Celery",1);
Harvest.setFood("radish","Radish",1);
Harvest.setFood("eggplant","Eggplant",1);
Harvest.setFood("leek","Leek",1);
Harvest.setFood("okra","Okra",1);
Harvest.setFood("parsnip","Parsnip",1);
Harvest.setFood("rhubarb","Rhubarb",1);
Harvest.setFood("scallion","Scallion",1);
Harvest.setFood("soybean","Soybean",1);
Harvest.setFood("sweetpotato","Sweet Potato",1);
Harvest.setFood("turnip","Turnip",1);
Harvest.setFood("peanut","Peanut",1);
Harvest.setFood("rye","Rye",1);
Harvest.setFood("zucchini","Zucchini",1);
Harvest.setFood("barley","Barley",1);
Harvest.setFood("oats","Oats",1);
Harvest.setFood("beet","Beet",1);
Harvest.setFood("wintersquash","Wintersquash",1);
IDRegistry.genItemID("tealeaf");
Item.createItem("tealeaf", "Tea leaf", {name: "tealeaf", meta: 0});




// file: ITEMS/seeds.js

IDRegistry.genItemID("strawberry_seed");
Item.createItem("strawberry_seed", "Strawberry seed", {name: "strawberry_seed", meta: 0});
Harvest.recipe({id:ItemID.strawberry_seed},[{id: ItemID.strawberry, data: 0}]);
Harvest.addGrassDrop(ItemID.strawberry_seed);

IDRegistry.genItemID("raspberry_seed");
Item.createItem("raspberry_seed", "Raspberry seed", {name: "raspberry_seed", meta: 0});
Harvest.recipe({id:ItemID.raspberry_seed},[{id: ItemID.raspberry, data: 0}]);
Harvest.addGrassDrop(ItemID.raspberry_seed);

IDRegistry.genItemID("cranberry_seed");
Item.createItem("cranberry_seed", "Cranberry seed", {name: "cranberry_seed", meta: 0});
Harvest.recipe({id:ItemID.cranberry_seed},[{id: ItemID.cranberry, data: 0}]);
Harvest.addGrassDrop(ItemID.cranberry_seed);

IDRegistry.genItemID("blueberry_seed");
Item.createItem("blueberry_seed", "Blueberry seed", {name: "blueberry_seed", meta: 0});
Harvest.recipe({id:ItemID.blueberry_seed},[{id: ItemID.blueberry, data: 0}]);
Harvest.addGrassDrop(ItemID.blueberry_seed);

IDRegistry.genItemID("blackberry_seed");
Item.createItem("blackberry_seed", "Blackberry seed", {name: "blackberry_seed", meta: 0});
Harvest.recipe({id:ItemID.blackberry_seed},[{id: ItemID.blackberry, data: 0}]);
Harvest.addGrassDrop(ItemID.blackberry_seed);

IDRegistry.genItemID("candleberryseed");
Item.createItem("candleberryseed", "Candle berry seed", {name: "candleberryseedItem", meta: 0});
Harvest.recipe({id:ItemID.candleberryseed},[{id: ItemID.candleberry, data: 0}]);
Harvest.addGrassDrop(ItemID.candleberryseed);

IDRegistry.genItemID("grape_seed");
Item.createItem("grape_seed", "Grape seed", {name: "grape_seed", meta: 0});
Harvest.recipe({id:ItemID.grape_seed},[{id: ItemID.grape, data: 0}]);
Harvest.addGrassDrop(ItemID.grape_seed);

IDRegistry.genItemID("cucumber_seed");
Item.createItem("cucumber_seed", "Cucumber seed", {name: "cucumber_seed", meta: 0});
Harvest.recipe({id:ItemID.cucumber_seed},[{id: ItemID.cucumber, data: 0}]);
Harvest.addGrassDrop(ItemID.cucumber_seed);

IDRegistry.genItemID("onion_seed");
Item.createItem("onion_seed", "Onion seed", {name: "onion_seed", meta: 0});
Harvest.recipe({id:ItemID.onion_seed},[{id: ItemID.onion, data: 0}]);
Harvest.addGrassDrop(ItemID.onion_seed);

IDRegistry.genItemID("cabbage_seed");
Item.createItem("cabbage_seed", "Cabbage seed", {name: "cabbage_seed", meta: 0});
Harvest.recipe({id:ItemID.cabbage_seed},[{id: ItemID.cabbage, data: 0}]);
Harvest.addGrassDrop(ItemID.cabbage_seed);

IDRegistry.genItemID("tomato_seed");
Item.createItem("tomato_seed", "Tomato seed", {name: "tomato_seed", meta: 0});
Harvest.recipe({id:ItemID.tomato_seed},[{id: ItemID.tomato, data: 0}]);
Harvest.addGrassDrop(ItemID.tomato_seed);

IDRegistry.genItemID("bellpepper_seed");
Item.createItem("bellpepper_seed", "Bellpepper seed", {name: "bellpepper_seed", meta: 0});
Harvest.recipe({id:ItemID.bellpepper_seed},[{id: ItemID.bellpepper, data: 0}]);
Harvest.addGrassDrop(ItemID.bellpepper_seed);

IDRegistry.genItemID("garlic_seed");
Item.createItem("garlic_seed", "Garlic seed", {name: "garlic_seed", meta: 0});
Harvest.recipe({id:ItemID.garlic_seed},[{id: ItemID.garlic, data: 0}]);
Harvest.addGrassDrop(ItemID.garlic_seed);

IDRegistry.genItemID("lettuce_seed");
Item.createItem("lettuce_seed", "Lettuce seed", {name: "lettuce_seed", meta: 0});
Harvest.recipe({id:ItemID.lettuce_seed},[{id: ItemID.lettuce, data: 0}]);
Harvest.addGrassDrop(ItemID.lettuce_seed);

IDRegistry.genItemID("coffee_seed");
Item.createItem("coffee_seed", "Coffee seed", {name: "coffee_seed", meta: 0});
Harvest.recipe({id:ItemID.coffee_seed},[{id: ItemID.coffee_beans, data: 0}]);
Harvest.addGrassDrop(ItemID.coffee_seed);

IDRegistry.genItemID("peas_seed");
Item.createItem("peas_seed", "Peas seed", {name: "peas_seed", meta: 0});
Harvest.recipe({id:ItemID.peas_seed},[{id: ItemID.peas, data: 0}]);
Harvest.addGrassDrop(ItemID.peas_seed);

IDRegistry.genItemID("chili_pepper_seed");
Item.createItem("chili_pepper_seed", "Chilli pepper seed", {name: "chili_pepper_seed", meta: 0});
Harvest.recipe({id:ItemID.chili_pepper_seed},[{id: ItemID.chili_pepper, data: 0}]);
Harvest.addGrassDrop(ItemID.chili_pepper_seed);

IDRegistry.genItemID("spice_leaf_seed");
Item.createItem("spice_leaf_seed", "Spice leaf seed", {name: "spice_leaf_seed", meta: 0});
Harvest.recipe({id:ItemID.spice_leaf_seed},[{id: ItemID.spice_leaf, data: 0}]);
Harvest.addGrassDrop(ItemID.spice_leaf_seed);

IDRegistry.genItemID("corn_seed");
Item.createItem("corn_seed", "Corn seed", {name: "corn_seed", meta: 0});
Harvest.recipe({id:ItemID.corn_seed},[{id: ItemID.corn, data: 0}]);
Harvest.addGrassDrop(ItemID.corn_seed);

IDRegistry.genItemID("peppercorn_seed");
Item.createItem("peppercorn_seed", "Peppercorn seed", {name: "peppercorn_seed", meta: 0});
Harvest.recipe({id:ItemID.peppercorn_seed},[{id: ItemID.peppercorn, data: 0}]);
Harvest.addGrassDrop(ItemID.peppercorn_seed);

IDRegistry.genItemID("curryleaf_seed");
Item.createItem("curryleaf_seed", "Curryleaf seed", {name: "curryleafseed", meta: 0});
Harvest.recipe({id:ItemID.curryleaf_seed},[{id: ItemID.curryleaf, data: 0}]);
Harvest.addGrassDrop(ItemID.curryleaf_seed);

IDRegistry.genItemID("cotton_seed");
Item.createItem("cotton_seed", "Cotton seed", {name: "cottonSeed", meta: 0});
Harvest.recipe({id:ItemID.cotton_seed},[{id: ItemID.cotton, data: 0}]);
Harvest.addGrassDrop(ItemID.cotton_seed);

IDRegistry.genItemID("bean_seed");
Item.createItem("bean_seed", "Bean Seed", {name: "beanseed", meta: 0});
Harvest.recipe({id:ItemID.bean_seed},[{id: ItemID.bean, data: 0}]);
Harvest.addGrassDrop(ItemID.bean_seed);

IDRegistry.genItemID("rice_seed");
Item.createItem("rice_seed", "Rice Seed", {name: "riceseed", meta: 0});
Harvest.recipe({id:ItemID.rice_seed},[{id: ItemID.rice, data: 0}]);
Harvest.addGrassDrop(ItemID.rice_seed);

IDRegistry.genItemID("waterchestnut_seed");
Item.createItem("waterchestnut_seed", "Water Chestnut Seed", {name: "waterchestnutseed", meta: 0});
Harvest.recipe({id:ItemID.waterchestnut_seed},[{id: ItemID.waterchestnut, data: 0}]);
Harvest.addGrassDrop(ItemID.waterchestnut_seed);

IDRegistry.genItemID("rutabaga_seed");
Item.createItem("rutabaga_seed", "Rutabaga Seed", {name: "rutabagaseed", meta: 0});
Harvest.recipe({id:ItemID.rutabaga_seed},[{id: ItemID.rutabaga, data: 0}]);
Harvest.addGrassDrop(ItemID.rutabaga_seed);

IDRegistry.genItemID("mustard_seed");
Item.createItem("mustard_seed", "Mustard Seed", {name: "mustardseed", meta: 0});
Harvest.recipe({id:ItemID.mustard_seed},[{id: ItemID.mustardseeds, data: 0}]);
Harvest.addGrassDrop(ItemID.mustard_seed);

IDRegistry.genItemID("ginger_seed");
Item.createItem("ginger_seed", "Ginger Seed", {name: "gingerseed", meta: 0});
Harvest.recipe({id:ItemID.ginger_seed},[{id: ItemID.ginger, data: 0}]);
Harvest.addGrassDrop(ItemID.ginger_seed);

IDRegistry.genItemID("spinach_seed");
Item.createItem("spinach_seed", "Spinach Seed", {name: "spinachseed", meta: 0});
Harvest.recipe({id:ItemID.spinach_seed},[{id: ItemID.spinach, data: 0}]);
Harvest.addGrassDrop(ItemID.spinach_seed);

IDRegistry.genItemID("cactusfruit_seed");
Item.createItem("cactusfruit_seed", "Cactusfruit Seed", {name: "cactusfruitseed", meta: 0});
Harvest.recipe({id:ItemID.cactusfruit_seed},[{id: ItemID.cactusfruit, data: 0}]);
Harvest.addGrassDrop(ItemID.cactusfruit_seed);

IDRegistry.genItemID("cantaloupe_seed");
Item.createItem("cantaloupe_seed", "Cantaloupe Seed", {name: "cantaloupeseed", meta: 0});
Harvest.recipe({id:ItemID.cantaloupe_seed},[{id: ItemID.cantaloupe, data: 0}]);
Harvest.addGrassDrop(ItemID.cantaloupe_seed);

IDRegistry.genItemID("kiwi_seed");
Item.createItem("kiwi_seed", "Kiwi Seed", {name: "kiwiseed", meta: 0});
Harvest.recipe({id:ItemID.kiwi_seed},[{id: ItemID.kiwi, data: 0}]);
Harvest.addGrassDrop(ItemID.kiwi_seed);

IDRegistry.genItemID("pineapple_seed");
Item.createItem("pineapple_seed", "Pineapple Seed", {name: "pineappleseed", meta: 0});
Harvest.recipe({id:ItemID.pineapple_seed},[{id: ItemID.pineapple, data: 0}]);
Harvest.addGrassDrop(ItemID.pineapple_seed);

IDRegistry.genItemID("artichoke_seed");
Item.createItem("artichoke_seed", "Artichoke Seed", {name: "artichokeseed", meta: 0});
Harvest.recipe({id:ItemID.artichoke_seed},[{id: ItemID.artichoke, data: 0}]);
Harvest.addGrassDrop(ItemID.artichoke_seed);

IDRegistry.genItemID("asparagus_seed");
Item.createItem("asparagus_seed", "Asparagus Seed", {name: "asparagusseed", meta: 0});
Harvest.recipe({id:ItemID.asparagus_seed},[{id: ItemID.asparagus, data: 0}]);
Harvest.addGrassDrop(ItemID.asparagus_seed);

IDRegistry.genItemID("bambooshoot_seed");
Item.createItem("bambooshoot_seed", "Bambooshoot Seed", {name: "bambooshootseed", meta: 0});
Harvest.recipe({id:ItemID.bambooshoot_seed},[{id: ItemID.bambooshoot, data: 0}]);
Harvest.addGrassDrop(ItemID.bambooshoot_seed);

IDRegistry.genItemID("broccoli_seed");
Item.createItem("broccoli_seed", "Broccoli Seed", {name: "broccoliseed", meta: 0});
Harvest.recipe({id:ItemID.broccoli_seed},[{id: ItemID.broccoli, data: 0}]);
Harvest.addGrassDrop(ItemID.broccoli_seed);

IDRegistry.genItemID("brusselsprout_seed");
Item.createItem("brusselsprout_seed", "Brusselsprout Seed", {name: "brusselsproutseed", meta: 0});
Harvest.recipe({id:ItemID.brusselsprout_seed},[{id: ItemID.brusselsprout, data: 0}]);
Harvest.addGrassDrop(ItemID.brusselsprout_seed);

IDRegistry.genItemID("cauliflower_seed");
Item.createItem("cauliflower_seed", "Cauliflower Seed", {name: "cauliflowerseed", meta: 0});
Harvest.recipe({id:ItemID.cauliflower_seed},[{id: ItemID.cauliflower, data: 0}]);
Harvest.addGrassDrop(ItemID.cauliflower_seed);

IDRegistry.genItemID("celery_seed");
Item.createItem("celery_seed", "Celery Seed", {name: "celeryseed", meta: 0});
Harvest.recipe({id:ItemID.celery_seed},[{id: ItemID.celery, data: 0}]);
Harvest.addGrassDrop(ItemID.celery_seed);

IDRegistry.genItemID("radish_seed");
Item.createItem("radish_seed", "Radish Seed", {name: "radishseed", meta: 0});
Harvest.recipe({id:ItemID.radish_seed},[{id: ItemID.radish, data: 0}]);
Harvest.addGrassDrop(ItemID.radish_seed);

IDRegistry.genItemID("eggplant_seed");
Item.createItem("eggplant_seed", "Eggplant Seed", {name: "eggplantseed", meta: 0});
Harvest.recipe({id:ItemID.eggplant_seed},[{id: ItemID.eggplant, data: 0}]);
Harvest.addGrassDrop(ItemID.eggplant_seed);

IDRegistry.genItemID("leek_seed");
Item.createItem("leek_seed", "Leek Seed", {name: "leekseed", meta: 0});
Harvest.recipe({id:ItemID.leek_seed},[{id: ItemID.leek, data: 0}]);
Harvest.addGrassDrop(ItemID.leek_seed);

IDRegistry.genItemID("okra_seed");
Item.createItem("okra_seed", "Okra Seed", {name: "okraseed", meta: 0});
Harvest.recipe({id:ItemID.okra_seed},[{id: ItemID.okra, data: 0}]);
Harvest.addGrassDrop(ItemID.okra_seed);

IDRegistry.genItemID("parsnip_seed");
Item.createItem("parsnip_seed", "Parsnip Seed", {name: "parsnipseed", meta: 0});
Harvest.recipe({id:ItemID.parsnip_seed},[{id: ItemID.parsnip, data: 0}]);
Harvest.addGrassDrop(ItemID.parsnip_seed);

IDRegistry.genItemID("rhubarb_seed");
Item.createItem("rhubarb_seed", "Rhubarb Seed", {name: "rhubarbseed", meta: 0});
Harvest.recipe({id:ItemID.rhubarb_seed},[{id: ItemID.rhubarb, data: 0}]);
Harvest.addGrassDrop(ItemID.rhubarb_seed);

IDRegistry.genItemID("scallion_seed");
Item.createItem("scallion_seed", "Scallion Seed", {name: "scallionseed", meta: 0});
Harvest.recipe({id:ItemID.scallion_seed},[{id: ItemID.scallion, data: 0}]);
Harvest.addGrassDrop(ItemID.scallion_seed);

IDRegistry.genItemID("soybean_seed");
Item.createItem("soybean_seed", "Soybean Seed", {name: "soybeanseed", meta: 0});
Harvest.recipe({id:ItemID.soybean_seed},[{id: ItemID.soybean, data: 0}]);
Harvest.addGrassDrop(ItemID.soybean_seed);

IDRegistry.genItemID("sweetpotato_seed");
Item.createItem("sweetpotato_seed", "Sweet Potato Seed", {name: "sweetpotatoseed", meta: 0});
Harvest.recipe({id:ItemID.sweetpotato_seed},[{id: ItemID.sweetpotato, data: 0}]);
Harvest.addGrassDrop(ItemID.sweetpotato_seed);

IDRegistry.genItemID("turnip_seed");
Item.createItem("turnip_seed", "Turnip Seed", {name: "turnipseed", meta: 0});
Harvest.recipe({id:ItemID.turnip_seed},[{id: ItemID.turnip, data: 0}]);
Harvest.addGrassDrop(ItemID.turnip_seed);

IDRegistry.genItemID("peanut_seed");
Item.createItem("peanut_seed", "Peanut Seed", {name: "peanutseed", meta: 0});
Harvest.recipe({id:ItemID.peanut_seed},[{id: ItemID.peanut, data: 0}]);
Harvest.addGrassDrop(ItemID.peanut_seed);

IDRegistry.genItemID("rye_seed");
Item.createItem("rye_seed", "Rye Seed", {name: "ryeseed", meta: 0});
Harvest.recipe({id:ItemID.rye_seed},[{id: ItemID.rye, data: 0}]);
Harvest.addGrassDrop(ItemID.rye_seed);

IDRegistry.genItemID("zucchini_seed");
Item.createItem("zucchini_seed", "Zucchini Seed", {name: "zucchiniseed", meta: 0});
Harvest.recipe({id:ItemID.zucchini_seed},[{id: ItemID.zucchini, data: 0}]);
Harvest.addGrassDrop(ItemID.zucchini_seed);

IDRegistry.genItemID("barley_seed");
Item.createItem("turnip_seed", "Barley Seed", {name: "barleyseed", meta: 0});
Harvest.recipe({id:ItemID.turnip_seed},[{id: ItemID.barley, data: 0}]);
Harvest.addGrassDrop(ItemID.turnip_seed);

IDRegistry.genItemID("oats_seed");
Item.createItem("oats_seed", "Oats Seed", {name: "oatsseed", meta: 0});
Harvest.recipe({id:ItemID.oats_seed},[{id: ItemID.oats, data: 0}]);
Harvest.addGrassDrop(ItemID.oats_seed);

IDRegistry.genItemID("wintersquash_seed");
Item.createItem("wintersquash_seed", "Wintersquash Seed", {name: "wintersquashseed", meta: 0});
Harvest.recipe({id:ItemID.wintersquash_seed},[{id: ItemID.wintersquash, data: 0}]);
Harvest.addGrassDrop(ItemID.wintersquash_seed);

IDRegistry.genItemID("tealeaf_seed");
Item.createItem("tealeaf_seed", "Tealeaf Seed", {name: "teaseed", meta: 0});
Harvest.recipe({id:ItemID.tealeaf_seed},[{id: ItemID.tealeaf, data: 0}]);
Harvest.addGrassDrop(ItemID.tealeaf_seed);

IDRegistry.genItemID("beet_seed");
Item.createItem("beet_seed", "Beet Seed", {name: "beetseed", meta: 0});
Harvest.recipe({id:ItemID.beet_seed},[{id: ItemID.beet, data: 0}]);
Harvest.addGrassDrop(ItemID.beet_seed);




// file: ITEMS/FOOD/juice.js

Harvest.setFood("strawberry_juice","Strawberry juice",5);
Harvest.recipe({id:ItemID.strawberry_juice},[{id: ItemID.juicer, data: 0}, {id: ItemID.strawberry, data: 0}]);

Harvest.setFood("raspberry_juice","Raspberry juice",5);
Harvest.recipe({id:ItemID.raspberry_juice},[{id: ItemID.juicer, data: 0}, {id: ItemID.strawberry, data: 0}]);

Harvest.setFood("cranberry_juice","Cranberry juice",5);
Harvest.recipe({id:ItemID.cranberry_juice},[{id: ItemID.juicer, data: 0}, {id: ItemID.cranberry, data: 0}]);

Harvest.setFood("blackberry_juice","Blackberry juice",5);
Harvest.recipe({id:ItemID.blackberry_juice},[{id: ItemID.juicer, data: 0}, {id: ItemID.blackberry, data: 0}]);

Harvest.setFood("grape_juice","Grape juice",5);
Harvest.recipe({id:ItemID.grape_juice},[{id: ItemID.juicer, data: 0}, {id: ItemID.grape, data: 0}]);

Harvest.setFood("melon_juice","Melon juice",5);
Harvest.recipe({id:ItemID.melon_juice},[{id: ItemID.juicer, data: 0}, {id: 360, data: 0}]);

Harvest.setFood("blueberry_juice","Blueberry juice",5);
Harvest.recipe({id:ItemID.blueberry_juice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.blueberry, data: 0}]);

Harvest.setFood("carrot_juice","Carrot juice",5);
Harvest.recipe({id:ItemID.carrot_juice},[{id: ItemID.juicer, data: 0}, {id: 391, data: 0}]);

Harvest.setFood("apple_juice","Apple juice",5);
Harvest.recipe({id:ItemID.apple_juice}, [{id: ItemID.juicer, data: 0}, {id: 260, data: 0}]);

Harvest.setFood("cactusfruitjuice","Cactusfruit juice",5);
Harvest.recipe({id:ItemID.cactusfruitjuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.cactusfruit, data: 0}]);

Harvest.setFood("kiwijuice","Kiwi juice",5);
Harvest.recipe({id:ItemID.kiwijuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.kiwi, data: 0}]);

Harvest.setFood("apricotjuice","Apricot juice",5);
Harvest.recipe({id:ItemID.apricotjuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.apricot, data: 0}]);

Harvest.setFood("cherryjuice","Cherry juice",5);
Harvest.recipe({id:ItemID.cherryjuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.cherry, data: 0}]);

Harvest.setFood("figjuice","Fig juice",5);
Harvest.recipe({id:ItemID.figjuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.fig, data: 0}]);

Harvest.setFood("grapefruitjuice","Grapefruit juice",5);
Harvest.recipe({id:ItemID.grapefruitjuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.grapefruit, data: 0}]);

Harvest.setFood("lemonade","Lemonade",5);
Harvest.recipe({id:ItemID.lemonade}, [{id: ItemID.juicer, data: 0}, {id: ItemID.lemon, data: 0}]);

Harvest.setFood("limejuice","Lime juice",5);
Harvest.recipe({id:ItemID.limejuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.lime, data: 0}]);

Harvest.setFood("mangojuice","Mango juice",5);
Harvest.recipe({id:ItemID.mangojuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.mango, data: 0}]);

Harvest.setFood("orangejuice","Orange juice",5);
Harvest.recipe({id:ItemID.orangejuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.orange, data: 0}]);

Harvest.setFood("papayajuice","Papaya juice",5);
Harvest.recipe({id:ItemID.papayajuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.papaya, data: 0}]);

Harvest.setFood("peachjuice","Peach juice",5);
Harvest.recipe({id:ItemID.peachjuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.peach, data: 0}]);

Harvest.setFood("pearjuice","Pear juice",5);
Harvest.recipe({id:ItemID.pearjuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.pear, data: 0}]);

Harvest.setFood("persimmonjuice","Persimmon juice",5);
Harvest.recipe({id:ItemID.persimmonjuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.persimmon, data: 0}]);

Harvest.setFood("plumjuice","Plum juice",5);
Harvest.recipe({id:ItemID.plumjuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.plum, data: 0}]);

Harvest.setFood("pomegranatejuice","Pomegranate juice",5);
Harvest.recipe({id:ItemID.pomegranatejuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.pomegranate, data: 0}]);

Harvest.setFood("starfruitjuice","Starfruit juice",5);
Harvest.recipe({id:ItemID.starfruitjuice}, [{id: ItemID.juicer, data: 0}, {id: ItemID.starfruit, data: 0}]);

Harvest.setFood("coconutmilk","Coconut milk",5);
Harvest.recipe({id:ItemID.coconutmilk}, [{id: ItemID.juicer, data: 0}, {id: ItemID.coconut, data: 0}]);




// file: ITEMS/FOOD/smothie.js

Harvest.setFood("strawberry_smoothie","Strawberry smoothie",6);
Harvest.recipe({id:ItemID.raspberry_juice},[{id: ItemID.juicer, data: 0}, {id: ItemID.strawberry, data: 0},{id: 332, data: 0}]);

Harvest.setFood("raspberry_smoothie","Raspberry smoothie",6);
Harvest.recipe({id:ItemID.raspberry_juice},[{id: ItemID.juicer, data: 0}, {id: ItemID.raspberry, data: 0},{id: 332, data: 0}]);

Harvest.setFood("blackberry_smoothie","Blackberry smoothie",6);
Harvest.recipe({id:ItemID.raspberry_juice},[{id: ItemID.juicer, data: 0}, {id: ItemID.blackberry, data: 0},{id: 332, data: 0}]);

Harvest.setFood("blueberry_smoothie","Blueberry smoothie",6);
Harvest.recipe({id:ItemID.raspberry_juice},[{id: ItemID.juicer, data: 0}, {id: ItemID.blueberry, data: 0},{id: 332, data: 0}]);

Harvest.setFood("melon_smoothie","Melon smoothie",6);
Harvest.recipe({id:ItemID.raspberry_juice},[{id: ItemID.juicer, data: 0}, {id: 360, data: 0},{id: 332, data: 0}]);

Harvest.setFood("kiwismoothie","Kiwi smoothie",6);
Harvest.recipe({id:ItemID.kiwismoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.kiwi, data: 0},{id: 332, data: 0}]);

Harvest.setFood("apricotsmoothie","Apricot smoothie",6);
Harvest.recipe({id:ItemID.apricotsmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.apricot, data: 0},{id: 332, data: 0}]);

Harvest.setFood("pinacolada","Pina collada",6);
Harvest.recipe({id:ItemID.pinacolada},[{id: ItemID.juicer, data: 0}, {id: ItemID.pineapple, data: 0},{id: ItemID.coconut, data: 0}]);

Harvest.setFood("cherrysmoothie","Cherry smoothie",6);
Harvest.recipe({id:ItemID.cherrysmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.cherry, data: 0},{id: 332, data: 0}]);

Harvest.setFood("bananasmoothie","Banana smoothie",6);
Harvest.recipe({id:ItemID.bananasmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.banana, data: 0},{id: 332, data: 0}]);

Harvest.setFood("bananamilkshake","Banana milkshake",6);
Harvest.recipe({id:ItemID.bananasmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.banana, data: 0},{id: 325, data: 1},{id: 332, data: 0}]);

Harvest.setFood("gooseberrymilkshake","Goosseberry milkshake",6);
Harvest.recipe({id:ItemID.gooseberrymilkshake},[{id: ItemID.juicer, data: 0}, {id: ItemID.gooseberry, data: 0},{id: 325, data: 1},{id: 332, data: 0}]);

Harvest.setFood("figsmoothie","Fig smoothie",6);
Harvest.recipe({id:ItemID.figsmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.fig, data: 0},{id: 332, data: 0}]);

Harvest.setFood("gooseberrysmoothie","Gooseberry smoothie",6);
Harvest.recipe({id:ItemID.gooseberrysmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.gooseberry, data: 0},{id: 332, data: 0}]);

Harvest.setFood("lemonsmoothie","Lemon smoothie",6);
Harvest.recipe({id:ItemID.lemonsmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.lemon, data: 0},{id: 332, data: 0}]);

Harvest.setFood("limesmoothie","Lime smoothie",6);
Harvest.recipe({id:ItemID.limesmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.lime, data: 0},{id: 332, data: 0}]);

Harvest.setFood("mangosmoothie","Mango smoothie",6);
Harvest.recipe({id:ItemID.mangosmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.mango, data: 0},{id: 332, data: 0}]);

Harvest.setFood("orangesmoothie","Orange smoothie",6);
Harvest.recipe({id:ItemID.orangesmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.orange, data: 0},{id: 332, data: 0}]);

Harvest.setFood("papayasmoothie","Papaya smoothie",6);
Harvest.recipe({id:ItemID.papayasmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.papaya, data: 0},{id: 332, data: 0}]);

Harvest.setFood("peachsmoothie","Peach smoothie",6);
Harvest.recipe({id:ItemID.peachsmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.peach, data: 0},{id: 332, data: 0}]);

Harvest.setFood("pearsmoothie","Pear smoothie",6);
Harvest.recipe({id:ItemID.pearsmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.pear, data: 0},{id: 332, data: 0}]);

Harvest.setFood("persimmonsmoothie","Persimmon smoothie",6);
Harvest.recipe({id:ItemID.persimmonsmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.persimmon, data: 0},{id: 332, data: 0}]);

Harvest.setFood("plumsmoothie","Plum smoothie",6);
Harvest.recipe({id:ItemID.plumsmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.plum, data: 0},{id: 332, data: 0}]);

Harvest.setFood("pomegranatesmoothie","Pomegranate smoothie",6);
Harvest.recipe({id:ItemID.pomegranatesmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.pomegranate, data: 0},{id: 332, data: 0}]);

Harvest.setFood("starfruitsmoothie","Starfruit smoothie",6);
Harvest.recipe({id:ItemID.starfruitsmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.starfruit, data: 0},{id: 332, data: 0}]);

Harvest.setFood("coconutsmoothie","Coconut smoothie",6);
Harvest.recipe({id:ItemID.coconutsmoothie},[{id: ItemID.juicer, data: 0}, {id: ItemID.coconut, data: 0},{id: 332, data: 0}]);




// file: ITEMS/FOOD/yogurt.js

Harvest.setFood("plain_yogurt","Plain yogurt",2);
Harvest.recipe({id:ItemID.plain_yogurt,count: 4},[{id: ItemID.fresh_milk, data: 0}, {id: 334, data: 0}]);
Harvest.recipe({id:ItemID.plain_yogurt,count: 4},[{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.fresh_milk, data: 0}]);
Harvest.recipe({id:ItemID.plain_yogurt,count: 4},[{id: 325, data: 1}, {id: 334, data: 0}]);

Harvest.setFood("strawberry_yogurt","Strawberry yogurt",8);
Harvest.recipe({id:ItemID.strawberry_yogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.strawberry, data: 0}]);

Harvest.setFood("raspberry_yogurt","Raspberry yogurt",8);
Harvest.recipe({id:ItemID.raspberry_yogurt},[{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.raspberry, data: 0}]);

Harvest.setFood("grape_yogurt","Grape yogurt",8);
Harvest.recipe({id:ItemID.grape_yogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.grape, data: 0}]);

Harvest.setFood("apple_yogurt","Apple yogurt",8);
Harvest.recipe({id:ItemID.apple_yogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: 260, data: 0}]);

Harvest.setFood("blackberry_yogurt","Blackberry yogurt",8);
Harvest.recipe({id:ItemID.blackberry_yogurt},[{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.blackberry, data: 0}]);

Harvest.setFood("blueberry_yogurt","Blueberry yogurt",8);
Harvest.recipe({id:ItemID.blueberry_yogurt},[{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.blueberry, data: 0}]);

Harvest.setFood("pumpkin_yogurt","Pumpkin yogurt",8);
Harvest.recipe({id:ItemID.pumpkin_yogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: 86, data: 0}]);

Harvest.setFood("melon_yogurt","Melon yogurt",8);
Harvest.recipe({id:ItemID.melon_yogurt},[{id: ItemID.plain_yogurt, data: 0}, {id: 360, data: 0}]);

Harvest.setFood("chocolate_yogurt","Chocolate yogurt",8);
Harvest.recipe({id:ItemID.chocolate_yogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.cocoa_powder, data: 0}]);

Harvest.setFood("kiwiyogurt","Kiwi yogurt",8);
Harvest.recipe({id:ItemID.kiwiyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.kiwi, data: 0}]);

Harvest.setFood("pineappleyogurt","Pineapple yogurt",8);
Harvest.recipe({id:ItemID.pineappleyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.pineapple, data: 0}]);

Harvest.setFood("apricotyogurt","Apricot yogurt",8);
Harvest.recipe({id:ItemID.apricotyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.apricot, data: 0}]);

Harvest.setFood("cherryyogurt","Cherry yogurt",8);
Harvest.recipe({id:ItemID.cherryyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.cherry, data: 0}]);

Harvest.setFood("bananayogurt","Banana yogurt",8);
Harvest.recipe({id:ItemID.bananayogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.banana, data: 0}]);

Harvest.setFood("figyogurt","Fig yogurt",8);
Harvest.recipe({id:ItemID.figyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.fig, data: 0}]);

Harvest.setFood("grapefruityogurt","Grapefruit yogurt",8);
Harvest.recipe({id:ItemID.grapefruityogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.grapefruit, data: 0}]);

Harvest.setFood("gooseberryyogurt","Gooseberry yogurt",8);
Harvest.recipe({id:ItemID.gooseberryyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.gooseberry, data: 0}]);

Harvest.setFood("lemonyogurt","Lemon yogurt",8);
Harvest.recipe({id:ItemID.lemonyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.lemon, data: 0}]);

Harvest.setFood("limeyogurt","Lime yogurt",8);
Harvest.recipe({id:ItemID.limeyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.lime, data: 0}]);

Harvest.setFood("mangoyogurt","Mango yogurt",8);
Harvest.recipe({id:ItemID.mangoyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.mango, data: 0}]);

Harvest.setFood("orangeyogurt","Orange yogurt",8);
Harvest.recipe({id:ItemID.orangeyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.orange, data: 0}]);

Harvest.setFood("papayayogurt","Papaya yogurt",8);
Harvest.recipe({id:ItemID.papayayogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.papaya, data: 0}]);

Harvest.setFood("peachyogurt","Peach yogurt",8);
Harvest.recipe({id:ItemID.peachyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.peach, data: 0}]);

Harvest.setFood("pearyogurt","Pear yogurt",8);
Harvest.recipe({id:ItemID.pearyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.pear, data: 0}]);

Harvest.setFood("persimmonyogurt","Persimmon yogurt",8);
Harvest.recipe({id:ItemID.persimmonyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.persimmon, data: 0}]);

Harvest.setFood("plumyogurt","Plum yogurt",8);
Harvest.recipe({id:ItemID.plumyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.plum, data: 0}]);

Harvest.setFood("pomegranateyogurt","Pomegranate yogurt",8);
Harvest.recipe({id:ItemID.pomegranateyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.pomegranate, data: 0}]);

Harvest.setFood("starfruityogurt","Starfruit yogurt",8);
Harvest.recipe({id:ItemID.starfruityogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.starfruit, data: 0}]);

Harvest.setFood("coconutyogurt","Coconut yogurt",8);
Harvest.recipe({id:ItemID.coconutyogurt}, [{id: ItemID.plain_yogurt, data: 0}, {id: ItemID.coconut, data: 0}]);




// file: ITEMS/FOOD/jelly.js

Harvest.setFood("apricotjelly","Apricot jelly",4);
Harvest.recipe({id:ItemID.apricotjelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.apricot, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("cherryjelly","Cherry jelly",4);
Harvest.recipe({id:ItemID.cherryjelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.cherry, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("figjelly","Fig jelly",4);
Harvest.recipe({id:ItemID.figjelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.fig, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("grapefruitjelly","Grapefruit jelly",4);
Harvest.recipe({id:ItemID.grapefruitjelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.grapefruit, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("gooseberryjelly","Gooseberry jelly",4);
Harvest.recipe({id:ItemID.gooseberryjelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.gooseberry, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("lemonjelly","Lemon jelly",4);
Harvest.recipe({id:ItemID.lemonjelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.lemon, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("limejelly","Lime jelly",4);
Harvest.recipe({id:ItemID.limejelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.lime, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("mangojelly","Mango jelly",4);
Harvest.recipe({id:ItemID.mangojelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.mango, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("orangejelly","Orange jelly",4);
Harvest.recipe({id:ItemID.orangejelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.orange, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("papayajelly","Papaya jelly",4);
Harvest.recipe({id:ItemID.papayajelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.papaya, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("peachjelly","Peach jelly",4);
Harvest.recipe({id:ItemID.peachjelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.peach, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("pearjelly","Pear jelly",4);
Harvest.recipe({id:ItemID.pearjelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.pear, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("persimmonjelly","Persimmon jelly",4);
Harvest.recipe({id:ItemID.persimmonjelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.persimmon, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("plumjelly","Plum jelly",4);
Harvest.recipe({id:ItemID.plumjelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.plum, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("pomegranatejelly","Pomegranate jelly",4);
Harvest.recipe({id:ItemID.pomegranatejelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.pomegranate, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("starfruitjelly","Starfruit jelly",4);
Harvest.recipe({id:ItemID.starfruitjelly},[{id: ItemID.bakeware, data: 0},{id: ItemID.saucepan, data: 0},{id: ItemID.starfruit, data: 0},  {id: 353, data: 0}]);

Harvest.setFood("coconutcream","Coconut cream",2);
Harvest.recipe({id:ItemID.coconutcream},[{id: ItemID.pot, data: 0},{id: ItemID.coconutcream, data: 0}]);




// file: ITEMS/FOOD/salad.js

Harvest.setFood("beet_salad","Beet salad",10);
Harvest.recipe({id:ItemID.beet_salad}, [{id: ItemID.mixing_bowl, data: 0}, {id: 457, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.vinegar, data: 0}, {id: ItemID.cheese, data: 0}]);

Harvest.setFood("fruit_salad","Fruit salad",6);
Harvest.recipeVariations({id:ItemID.fruit_salad},ItemID.cutting_board,[ItemID.wintersquash,ItemID.starfruit,ItemID.pomegranate,ItemID.plum,ItemID.persimmon,ItemID.pear,ItemID.papaya,ItemID.orange,ItemID.mango,ItemID.lime,ItemID.lemon,ItemID.gooseberry,ItemID.grapefruit,ItemID.fig,ItemID.dragonfruit,ItemID.date,ItemID.banana,ItemID.cherry,ItemID.strawberry,ItemID.raspberry,260,ItemID.cranberry,ItemID.blueberry,ItemID.blackberry,ItemID.grape,ItemID.cactusfruit,ItemID.cantaloupe]);

Harvest.setFood("spring_salad","Spring salad",9);
Harvest.recipeVariations({id:ItemID.spring_salad},ItemID.cutting_board,[ItemID.avocado,ItemID.lettuce,ItemID.onion,ItemID.cucumber,ItemID.bellpepper,ItemID.zucchini,ItemID.tomato,ItemID.leek,ItemID.rhubarb,ItemID.peas,391,ItemID.rutabaga,ItemID.broccoli,ItemID.cauliflower,ItemID.radish]);

Harvest.setFood("cucumber_salad","Cucumber salad",11);
Harvest.recipe({id:ItemID.cucumber_salad}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.spring_salad, data: 0}, {id: ItemID.cucumber, data: 0}]);

Harvest.setFood("ceasar_salade","Ceasar salad",10);
Harvest.recipe({id:ItemID.ceasar_salade}, [{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.toast, data: 0}, {id: ItemID.cheese, data: 0}, {id: ItemID.garlic, data: 0}, {id: ItemID.black_pepper, data: 0}]);




// file: ITEMS/FOOD/meat.js

Harvest.setFood("venisonRaw","Raw venison",3);

Harvest.setFood("venisonCooked","Cooked venison",8);
Recipes.addFurnace(ItemID.venisonRaw, ItemID.venisonCooked, 0);

Harvest.setFood("turkeyRaw","Raw turkey",2);

Harvest.setFood("turkeyCooked","Cooked turkey",5);
Recipes.addFurnace(ItemID.turkeyRaw, ItemID.turkeyCooked, 0);




// file: ITEMS/FOOD/food.js

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




// file: ITEMS/wax.js

IDRegistry.genItemID("pressedWax");
Item.createItem("pressedWax", "Wax", {name: "wax", meta: 0}, {});

IDRegistry.genBlockID("pressedWaxBlock"); 
Block.createBlock("pressedWaxBlock", [
	{name: "Pressed wax", texture: [["pressedwax", 0]], inCreative: true}
]);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.pressedWaxBlock, count: 1, data: 0}, ["bbb", "bbb"," bbb"], [ "b", ItemID.pressedWax, 0]);
	Recipes.addShapeless({id: ItemID.pressedWax, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0}], function(api, field, result){ 
		for (var i in field){
			if (field[i].id != ItemID.pot){
				api.decreaseFieldSlot(i);
			}
		}
	});
});




// file: ITEMS/armor.js

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




// file: ITEMS/candles.js

for(var i = 0;i<16;i++){
	IDRegistry.genItemID("candleItem"+i);
	Item.createItem("candleItem"+i, "Candle", {name: "candle", meta: i},{});
};
Item.registerUseFunction("candleItem1", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,1);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem2", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,2);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem3", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,3);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem4", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,4);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem5", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,5);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem6", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,6);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem7", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,7);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem8", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,8);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem9", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,9);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem10", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,10);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem11", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,11);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem12", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,12);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem13", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,13);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem14", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,14);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem15", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,15);
		Player.decreaseCarriedItem(1);
	}
});
Item.registerUseFunction("candleItem0", function(coords, item, block){
	if(coords.side==1&&!GenerationUtils.isTransparentBlock(block.id)){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,0);
		Player.decreaseCarriedItem(1);
	}
});

Callback.addCallback("PostLoaded", function(){	
	Recipes.addShapeless({id: ItemID.candleItem0, count: 4, data: 0}, [{id: 287, data: 0},{id: ItemID.pressedWax, data: 0}]);
	for(var paintIndex = 14;paintIndex>=0;paintIndex-- ){
		var candleData = 15-paintIndex;
		Recipes.addShapeless({id: Item.getNumericId("candleItem"+candleData), count: 4, data: 0}, [{id: 351, data: paintIndex},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
	}
});




// file: BLOCKS/salt.js

IDRegistry.genBlockID("salt"); 
Block.createBlock("salt", [
	{name: "Salt", texture: [["saltBLOCK", 0]], inCreative: true}
]);
Block.registerDropFunction("salt", function(coords, blockID, blockData, level){
	var drop = [];
		drop.push([ItemID.salt, Random.Int(2,5), 0]);	
	return drop;
});




// file: BLOCKS/sinks.js

IDRegistry.genBlockID("well"); 
Block.createBlock("well", [
	{name: "Sink", texture: [["sinkbottom", 0], ["sinktop", 0], ["sinkside", 0], ["sinkside", 0], ["sinkside", 0], ["sinkside", 0]], inCreative: true},
	{name: "Sink", texture: [["sinkbottom", 1], ["sinktop", 1], ["sinkside", 1], ["sinkside", 1], ["sinkside", 1], ["sinkside", 1]], inCreative: true},
	{name: "Sink", texture: [["sinkbottom", 2], ["sinktop", 2], ["sinkside", 2], ["sinkside", 2], ["sinkside", 2], ["sinkside", 2]], inCreative: true},
	{name: "Sink", texture: [["sinkbottom", 3], ["sinktop", 3], ["sinkside", 3], ["sinkside", 3], ["sinkside", 3], ["sinkside", 3]], inCreative: true}
]);
Callback.addCallback("ItemUse", function(coords,item,block){
	if(block.id==BlockID.well){
		if((item.id==325&&item.data==0)){
			Player.addItemToInventory(325, 1, 8);
			Player.decreaseCarriedItem(1);	
		}
		if(item.id==374){	
			Player.addItemToInventory(373, 1, 0);
			Player.decreaseCarriedItem(1);
		}
	}
});       
Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.well, count: 1, data: 0}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 17, -1]);
	 Recipes.addShaped({id: BlockID.well, count: 1, data: 1}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 1, -1]);
	 Recipes.addShaped({id: BlockID.well, count: 1, data: 2}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 82, 0]);
	 Recipes.addShaped({id: BlockID.well, count: 1, data: 3}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 1, -1]);
});




// file: BLOCKS/TRAP/ANIMAL/block.js

IDRegistry.genBlockID("animalTrap"); 
Block.createBlock("animalTrap", [
	{name: "Animal trap", texture: [["animaltrap", 0]], inCreative: true}
]);
//ICRenderLib.addConnectionBlock("bc-container", BlockID.animalTrap);
Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.animalTrap, count: 1, data: 0}, ["aba", "sds","asa"], ["a", 280, 0, "b", 96, 0,"d",54,0,"s",287,0]);
});




// file: BLOCKS/TRAP/ANIMAL/gui.js

var animalTrapGUI = new UI.StandartWindow({
	standart: {
        header: {
            text: {
                text:"AnimalTrap"
            }
        },
        inventory: {
            standart: true
        },
        background: {
            standart: true
        }
    },
    drawing: [
		{type: "bitmap", bitmap: "groundtrap", x: 320, y: 70, scale: 4}
    ],
    elements: {
	
		"slotBait":{type:"slot",x:408,y:173,size:71,bitmap:"slot",isTransparentBackground:true},
		
	    "slot0":{type:"slot",x:553,y:103,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot1":{type:"slot",x:625,y:103,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot2":{type:"slot",x:697,y:103,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot3":{type:"slot",x:769,y:103,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot4":{type:"slot",x:841,y:103,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot5":{type:"slot",x:913,y:103,size:71,bitmap:"slot",isTransparentBackground:true},

		"slot6":{type:"slot",x:553,y:175,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot7":{type:"slot",x:625,y:175,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot8":{type:"slot",x:697,y:175,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot9":{type:"slot",x:769,y:175,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot10":{type:"slot",x:841,y:175,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot11":{type:"slot",x:913,y:175,size:71,bitmap:"slot",isTransparentBackground:true},

		"slot12":{type:"slot",x:553,y:247,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot13":{type:"slot",x:625,y:247,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot14":{type:"slot",x:697,y:247,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot15":{type:"slot",x:769,y:247,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot16":{type:"slot",x:841,y:247,size:71,bitmap:"slot",isTransparentBackground:true},
		"slot17":{type:"slot",x:913,y:247,size:71,bitmap:"slot",isTransparentBackground:true}
    }
});




// file: BLOCKS/TRAP/ANIMAL/TileEntity.js

if(__config__.access("traps.animal.TileEntity")){
	TileEntity.registerPrototype(BlockID.animalTrap,{
		defaultValues: {
			progress:0,
			drop:[]
		},	
		getGuiScreen: function(){
			return animalTrapGUI;
		},
		getTransportSlots: function(){
			return {
				input: ["slotBait"],
				output: ["slot0","slot1","slot2","slot3","slot4","slot5","slot6","slot7","slot8","slot9","slot10","slot11","slot12","slot13","slot14","slot15","slot16","slot17"]
			};
		},
		checker:function(){
			if(World.getBlockID(this.x+1,this.y,this.z)==2&&
			   World.getBlockID(this.x-1,this.y,this.z)==2&&
			   World.getBlockID(this.x,this.y,this.z+1)==2&&
			   World.getBlockID(this.x,this.y,this.z-1)==2&&
			   World.getBlockID(this.x-1,this.y,this.z-1)==2&&
			   World.getBlockID(this.x+1,this.y,this.z-1)==2&&
			   World.getBlockID(this.x+1,this.y,this.z+1)==2&&
			   World.getBlockID(this.x-1,this.y,this.z+1)==2){
				this.data.progress++;
			}
		},
		tick:function(){
			var nnumber = __config__.access("traps.animal.number");
			var slot = this.container.getSlot("slotBait").id;
			if((this.data.progress<100)&&((slot==ItemID.graitBait)||(slot==ItemID.fruitBait)||(slot==ItemID.veggieBait))&&(Math.random()<nnumber)){
				this.checker();
			}
			if((this.data.progress==100)&&((slot==ItemID.graitBait)||(slot==ItemID.fruitBait)||(slot==ItemID.veggieBait))){
				var slot = this.container.getSlot("slotBait");
				slot.count-=1;
				this.data.progress=0;
				this.swither();
				var tt = Random.Int(1,3);
				for(var u = 0; u < tt; u++){
					var targetItem = this.data.drop[Random.Int(0,this.data.drop.length-1)];
					this.addResult("slot",targetItem, 1, 0);
				}	
				this.container.validateAll();
			}
		},
		addResult: function(area, id, count, data){
			for (var i = 0; i < 18; i++){
				var slot = this.container.getSlot(area + i);
				if (slot.id == 0){
					var add = Math.min(64 - slot.count, count);
					slot.count += add;
					slot.id = id;
					slot.data = data;
					count -= add;
					if (count == 0){
						break;
					}
				}
			}
			if (count > 0){
				World.drop(this.x + .5, this.y + 1, this.z + .5, id, count, data);
			}
		},
		swither:function(){
			switch(this.container.getSlot("slotBait").id){
				case ItemID.graitBait :
					this.data.drop= [352,334,344,ItemID.turkeyRaw,288,365];
						break;
				case ItemID.fruitBait :
					this.data.drop=[352,334,344,288,411,365];
						break;
				case ItemID.veggieBait :
					this.data.drop=[352,334,344,ItemID.venisonRaw,288,365];
						break;
			}
		}
	});
};




// file: BLOCKS/fishTrap.js

/*IDRegistry.genBlockID("fishTrap"); 
Block.createBlock("fishTrap", [
	{name: "Fish trap", texture: [["fishtrap", 0]], inCreative: true}
]);*/




// file: BLOCKS/candle.js

var candleVariations = [];
for(var e = 0;e<16;e++){
	candleVariations.push({name: "Candle", texture: [["empty", 0],["empty", 0],["candle", e]], inCreative: false})
};
IDRegistry.genBlockID("candle"); 
Block.createBlock("candle", candleVariations,BLOCK_TYPE_CANDLE);
PlantModel.tree(BlockID.candle,0);
Block.setAnimateTickCallback(BlockID.candle, function(x, y, z, id, data) { 
	if(particles){
		Particles.addParticle(Native.ParticleType.flame,x+0.5, y+0.5, z+0.5, Random.Float(-0.01,0.01), Random.Float(-0.01,0.01), Random.Float(-0.01,0.01),0);
	}
});
Block.registerDropFunction("candle", function(coords, blockID, blockData, level){
	return[[ ItemID["candleItem"+blockData],1,0 ]];
});




// file: GARDENS/BERRYGARDEN/block.js

IDRegistry.genBlockID("berrygarden"); 
Block.createBlock("berrygarden", [
	{name: "Berry garden", texture: [["empty", 0],["empty", 0],["berrygardenBlock", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.berrygarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.berrygarden,
	drop:0,
	seed:ItemID.berryGardenITEM
});
Block.registerDropFunction("berrygarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.blackberry,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.candleberry,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.strawberry,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.raspberry,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.blueberry,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.cranberry,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.grape, Random.Int(1,3), 0]);
	}	
	return drop;
});




// file: GARDENS/BERRYGARDEN/item.js

IDRegistry.genItemID("berryGardenITEM");
Item.createItem("berryGardenITEM", "Berry garden", {name: "berrygardenBlock", meta: 0} ,{isTech: false} );




// file: GARDENS/GRASSGARDEN/block.js

IDRegistry.genBlockID("grassgarden"); 
Block.createBlock("grassgarden", [
	{name: "Grass garden", texture: [["empty", 0],["empty", 0],["grassgardenBlock", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.grassgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.grassgarden,
	drop:0,
	seed:ItemID.grassGardenITEM
});
Block.registerDropFunction("grassgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.corn,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.ItemID.asparagus, Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.ItemID.bambooshoot, Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.ItemID.rye, Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.oats, Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.barley, Random.Int(1,3), 0]);
	}
	return drop;
});




// file: GARDENS/GRASSGARDEN/item.js

IDRegistry.genItemID("grassGardenITEM");
Item.createItem("grassGardenITEM", "Grass garden", {name: "grassgardenBlock", meta: 0} ,{isTech: false} );




// file: GARDENS/HERBGARDEN/block.js

IDRegistry.genBlockID("herbgarden"); 
Block.createBlock("herbgarden", [
	{name: "Herb garden", texture: [["empty", 0],["empty", 0],["herbgardenBlock", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.herbgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.herbgarden,
	drop:0,
	seed:ItemID.herbGardenITEM
});
Block.registerDropFunction("herbgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.celery,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.coffee_beans,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.spice_leaf,Random.Int(1,3), 0]);
	}		
	if(Math.random() < .5){
		drop.push([ItemID.garlic,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.ginger,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.mustardseeds,Random.Int(1,3), 0]);
	}		
	if(Math.random() < .5){
		drop.push([ItemID.tealeaf,Random.Int(1,3), 0]);
	}
	return drop;
});




// file: GARDENS/HERBGARDEN/item.js

IDRegistry.genItemID("herbGardenITEM");
Item.createItem("herbGardenITEM", "Herb garden", {name: "herbgardenBlock", meta: 0} ,{isTech: false} );




// file: GARDENS/CANDLEBERRYGARDEN/block.js

IDRegistry.genBlockID("candleberrygarden"); 
Block.createBlock("candleberrygarden", [
	{name: "Candleberry garden", texture: [["empty", 0],["empty", 0],["candleberrycrop", 2]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.candleberrygarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.candleberrygarden,
	drop:0,
	seed:ItemID.candleberrygardenITEM
});
Block.registerDropFunction("candleberrygarden", function(coords, blockID, blockData, level){
	var drop = [];
	drop.push([ItemID.candleberry,Random.Int(1,3), 0]);
	return drop;
});




// file: GARDENS/CANDLEBERRYGARDEN/item.js

IDRegistry.genItemID("candleberrygardenITEM");
Item.createItem("candleberrygardenITEM", "Candleberry garden", {name: "candleberrycrop", meta: 2} ,{isTech: false} );




// file: GARDENS/COTTONGARDEN/block.js

IDRegistry.genBlockID("cottongarden"); 
Block.createBlock("cottongarden", [
	{name: "Cotton garden", texture: [["empty", 0],["empty", 0],["cottoncrop", 2]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.cottongarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.cottongarden,
	drop:0,
	seed:ItemID.cottongardenITEM
});
Block.registerDropFunction("cottongarden", function(coords, blockID, blockData, level){
	var drop = [];
	drop.push([ItemID.cotton,Random.Int(1,3), 0]);
	return drop;
});




// file: GARDENS/COTTONGARDEN/item.js

IDRegistry.genItemID("cottongardenITEM");
Item.createItem("cottongardenITEM", "Cotton garden", {name: "cottonGarden", meta: 0} ,{isTech: false} );




// file: GARDENS/ARIDGARDEN/block.js

IDRegistry.genBlockID("aridgarden"); 
Block.createBlock("aridgarden", [
	{name: "Arid garden", texture: [["empty", 0],["empty", 0],["aridgarden", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.aridgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_tropicalGarden",{
	id:BlockID.aridgarden,
	drop:0,
	seed:ItemID.aridGardenITEM
});
Block.registerDropFunction("aridgarden", function(coords, blockID, blockData, level){
	var drop = [];	
	drop.push([ItemID.cactusfruit, Random.Int(1,3), 0]);	
	drop.push([81, Random.Int(1,3), 0]);
	return drop;
});




// file: GARDENS/ARIDGARDEN/item.js

IDRegistry.genItemID("aridGardenITEM");
Item.createItem("aridGardenITEM", "Arid garden", {name: "aridgarden", meta: 0} ,{isTech: false} );




// file: GARDENS/TROPICALGARDEN/block.js

IDRegistry.genBlockID("tropicalgarden"); 
Block.createBlock("tropicalgarden", [
	{name: "Tropical garden", texture: [["empty", 0],["empty", 0],["tropicalgarden", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.tropicalgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_tropicalGarden",{
	id:BlockID.tropicalgarden,
	drop:0,
	seed:ItemID.tropicalGardenITEM
});
Block.registerDropFunction("tropicalgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .8){
		drop.push([ItemID.grape,Random.Int(1,3), 0]);
	}
	if(Math.random() < .8){
		drop.push([ItemID.kiwi,Random.Int(1,3), 0]);
	}
	if(Math.random() < .8){
		drop.push([ItemID.pineapple,Random.Int(1,3), 0]);
	}
	if(Math.random() < .8){
		drop.push([103,Random.Int(1,3), 0]);
	}
	if(Math.random() < .8){
		drop.push([ItemID.curryleaf,Random.Int(1,3), 0]);
	}
	return drop;
});




// file: GARDENS/TROPICALGARDEN/item.js

IDRegistry.genItemID("tropicalGardenITEM");
Item.createItem("tropicalGardenITEM", "Tropical garden", {name: "tropicalgarden", meta: 0} ,{isTech: false} );




// file: GARDENS/LEAFYGARDEN/block.js

IDRegistry.genBlockID("leafygarden"); 
Block.createBlock("leafygarden", [
	{name: "Leafy garden", texture: [["empty", 0],["empty", 0],["leafygarden", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.leafygarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.leafygarden,
	drop:0,
	seed:ItemID.leafyGardenITEM
});
Block.registerDropFunction("leafygarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.artichoke,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.broccoli,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.brusselsprout,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.cabbage,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.cauliflower,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.leek,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.lettuce,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.scallion,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.spinach,Random.Int(1,3), 0]);
	}
	return drop;
});




// file: GARDENS/LEAFYGARDEN/item.js

IDRegistry.genItemID("leafyGardenITEM");
Item.createItem("leafyGardenITEM", "Leafy garden", {name: "leafygarden", meta: 0} ,{isTech: false} );




// file: GARDENS/FROSTYGARDEN/block.js

IDRegistry.genBlockID("frostygarden"); 
Block.createBlock("frostygarden", [
	{name: "Frosty garden", texture: [["empty", 0],["empty", 0],["frostygarden", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.frostygarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.frostygarden,
	drop:0,
	seed:ItemID.frostyGardenITEM
});
Block.registerDropFunction("frostygarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .8){
		drop.push([ItemID.broccoli,Random.Int(1,3), 0]);
	}
	if(Math.random() < .8){
		drop.push([ItemID.parsnip,Random.Int(1,3), 0]);
	}
	if(Math.random() < .8){
		drop.push([ItemID.rye,Random.Int(1,3), 0]);
	}
	if(Math.random() < .8){
		drop.push([ItemID.oats,Random.Int(1,3), 0]);
	}
	return drop;
});




// file: GARDENS/FROSTYGARDEN/item.js

IDRegistry.genItemID("frostyGardenITEM");
Item.createItem("frostyGardenITEM", "Frosty garden", {name: "frostygarden", meta: 0} ,{isTech: false} );




// file: GARDENS/GROUNDGARDEN/block.js

IDRegistry.genBlockID("groundgarden"); 
Block.createBlock("groundgarden", [
	{name: "Ground garden", texture: [["empty", 0],["empty", 0],["groundgarden", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.groundgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.groundgarden,
	drop:0,
	seed:ItemID.groundGardenITEM
});
Block.registerDropFunction("groundgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .4){
		drop.push([ItemID.beet,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([391,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([ItemID.onion,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([ItemID.parsnip,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .4){
		drop.push([ItemID.peanut,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([392,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([ItemID.radish,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([ItemID.rhubarb,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([ItemID.rutabaga,Random.Int(1,3), 0]);
	}
	if(Math.random() < .4){
		drop.push([ItemID.sweetpotato,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .4){
		drop.push([ItemID.turnip,Random.Int(1,3), 0]);
	}
	return drop;
});




// file: GARDENS/GROUNDGARDEN/item.js

IDRegistry.genItemID("groundGardenITEM");
Item.createItem("groundGardenITEM", "Ground garden", {name: "groundgarden", meta: 0} ,{isTech: false} );




// file: GARDENS/STALKGARDEN/block.js

IDRegistry.genBlockID("stalkgarden"); 
Block.createBlock("stalkgarden", [
	{name: "Stalk garden", texture: [["empty", 0],["empty", 0],["stalkgarden", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.stalkgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.stalkgarden,
	drop:0,
	seed:ItemID.stalkGardenITEM
});
Block.registerDropFunction("stalkgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.bean,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.bellpepper,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.chili_pepper,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.okra,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.eggplant,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.peas,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.tomato,Random.Int(1,3), 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.soybean,Random.Int(1,3), 0]);
	}
	return drop;
});




// file: GARDENS/STALKGARDEN/item.js

IDRegistry.genItemID("stalkGardenITEM");
Item.createItem("stalkGardenITEM", "Stalk garden", {name: "stalkgarden", meta: 0} ,{isTech: false} );




// file: GARDENS/GOURDGARDEN/block.js

IDRegistry.genBlockID("gourdgarden"); 
Block.createBlock("gourdgarden", [
	{name: "Gourd garden", texture: [["empty", 0],["empty", 0],["gourdgarden", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.gourdgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.gourdgarden,
	drop:0,
	seed:ItemID.gourdGardenITEM
});
Block.registerDropFunction("gourdgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.cantaloupe,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([91,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.zucchini,Random.Int(1,3), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.cucumber,Random.Int(1,3), 0]);
	}		
	if(Math.random() < .5){
		drop.push([ItemID.wintersquash,Random.Int(1,3), 0]);
	}
	return drop;
});




// file: GARDENS/GOURDGARDEN/item.js

IDRegistry.genItemID("gourdGardenITEM");
Item.createItem("gourdGardenITEM", "Gourd garden", {name: "gourdgarden", meta: 0} ,{isTech: false} );




// file: TREES/FRUITS/items.js

//apple
IDRegistry.genItemID("appleMini");
Item.createItem("appleMini", " Apple", {name: "appleBlock", meta: 0},{});

//apricot
Harvest.setFood("apricot","Apricot",1);

//cherry
Harvest.setFood("cherry","Cherry",1);

//avocado
Harvest.setFood("avocado","Avocado",1);

//banana
Harvest.setFood("banana","Banana",1);

//date
Harvest.setFood("date","Date",1);

//dragonfruit
Harvest.setFood("dragonfruit","Dragonfruit",1);

//fig
Harvest.setFood("fig","Fig",1);

//grapefruit
Harvest.setFood("grapefruit","Grapefruit",1);

//gooseberry
Harvest.setFood("gooseberry","Gooseberry",1);

//lemon
Harvest.setFood("lemon","Lemon",1);

//lime
Harvest.setFood("lime","Lime",1);

//mango
Harvest.setFood("mango","Mango",1);

//olive
Harvest.setFood("olive","Olive",1);

//orange
Harvest.setFood("orange","Orange",1);

//papaya
Harvest.setFood("papaya","Papaya",1);

//peach
Harvest.setFood("peach","Peach",1);

//pear
Harvest.setFood("pear","Pear",1);

//persimmon
Harvest.setFood("persimmon","Persimmon",1);

//plum
Harvest.setFood("plum","Plum",1);

//pomegranate
Harvest.setFood("pomegranate","Pomegranate",1);

//starfruit
Harvest.setFood("starfruit","Starfruit",1);

//almond
Harvest.setFood("almond","Almond",1);

//peppercorn
//Harvest.setFood("peppercorn","Peppercorn",1);

//cashew
Harvest.setFood("cashew","Cashew",1);

//coconut
Harvest.setFood("coconut","Coconut",1);




// file: TREES/FRUITS/blocks.js

//apple
CropRegistry.registerWithID("appleBlock","appleBlock","appleBlock",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.appleBlock,
	drop:260
});

//apricot
CropRegistry.registerWithID("apricot","apricot","apricot",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.apricot,
	drop:ItemID.apricot
});

//cherry
CropRegistry.registerWithID("cherry","cherry","cherry",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.cherry,
	drop:ItemID.cherry
});

//avocado
CropRegistry.registerWithID("avocado","avocado","avocado",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.avocado,
	drop:ItemID.avocado
});

//banana
CropRegistry.registerWithID("banana","banana","banana",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.banana,
	drop:ItemID.banana
});

//date
CropRegistry.registerWithID("date","date","date",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.date,
	drop:ItemID.date
});

//dragonfruit
CropRegistry.registerWithID("dragonfruit","dragonfruit","dragonfruit",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.dragonfruit,
	drop:ItemID.dragonfruit
});

//fig
CropRegistry.registerWithID("fig","fig","fig",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.fig,
	drop:ItemID.fig
});

//grapefruit
CropRegistry.registerWithID("grapefruit","grapefruit","grapefruit",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.grapefruit,
	drop:ItemID.grapefruit
});

//gooseberry
CropRegistry.registerWithID("gooseberry","gooseberry","gooseberry",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.gooseberry,
	drop:ItemID.gooseberry
});

//lemon
CropRegistry.registerWithID("lemon","lemon","lemon",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.lemon,
	drop:ItemID.lemon
});

//lime
CropRegistry.registerWithID("lime","lime","lime",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.lime,
	drop:ItemID.lime
});

//mango
CropRegistry.registerWithID("mango","mango","mango",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.mango,
	drop:ItemID.mango
});

//olive
CropRegistry.registerWithID("olive","olive","olive",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.olive,
	drop:ItemID.olive
});

//orange
CropRegistry.registerWithID("orange","orange","orange",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.orange,
	drop:ItemID.orange
});

//papaya
CropRegistry.registerWithID("papaya","papaya","papaya",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.papaya,
	drop:ItemID.papaya
});

//peach
CropRegistry.registerWithID("peach","peach","peach",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.peach,
	drop:ItemID.peach
});

//pear
CropRegistry.registerWithID("pear","pear","pear",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.pear,
	drop:ItemID.pear
});

//persimmon
CropRegistry.registerWithID("persimmon","persimmon","persimmon",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.persimmon,
	drop:ItemID.persimmon
});

//plum
CropRegistry.registerWithID("plum","plum","plum",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.plum,
	drop:ItemID.plum
});

//pomegranate
CropRegistry.registerWithID("pomegranate","pomegranate","pomegranate",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.pomegranate,
	drop:ItemID.pomegranate
});

//starfruit
CropRegistry.registerWithID("starfruit","starfruit","starfruit",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.starfruit,
	drop:ItemID.starfruit
});

//almond
CropRegistry.registerWithID("almond","almond","almond",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.almond,
	drop:ItemID.almond
});

//peppercorn
CropRegistry.registerWithID("peppercornfruit","peppercornfruit","peppercornfruit",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.peppercornfruit,
	drop:ItemID.peppercornfruit
});

//cashew
CropRegistry.registerWithID("cashew","cashew","cashew",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.cashew,
	drop:ItemID.cashew
});

//coconut
CropRegistry.registerWithID("coconut","coconut","coconut",BLOCK_TYPE_CROP);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.coconut,
	drop:ItemID.coconut
});




// file: TREES/SAPLINGS/items.js

//apple
IDRegistry.genItemID("appleSapling");
Item.createItem("appleSapling", "Apple Tree Sapling", {name: "appleSapling", data: 0});

//apricot
IDRegistry.genItemID("apricotSapling");
Item.createItem("apricotSapling", "Apricot Tree Sapling", {name: "apricotSapling", data: 0});

//cherry
IDRegistry.genItemID("cherrySapling");
Item.createItem("cherrySapling", "Cherry Tree Sapling", {name: "cherrySapling", data: 0});

//avocado
IDRegistry.genItemID("avocadoSapling");
Item.createItem("avocadoSapling", "Avocado Tree Sapling", {name: "avocadoSapling", data: 0});

//banana
IDRegistry.genItemID("bananaSapling");
Item.createItem("bananaSapling", "Banana Tree Sapling", {name: "bananaSapling", data: 0});

//date
IDRegistry.genItemID("dateSapling");
Item.createItem("dateSapling", "Date Tree Sapling", {name: "dateSapling", data: 0});

//dragonfruit
IDRegistry.genItemID("dragonfruitSapling");
Item.createItem("dragonfruitSapling", "Dragonfruit Tree Sapling", {name: "dragonfruitSapling", data: 0});

//fig
IDRegistry.genItemID("figSapling");
Item.createItem("figSapling", "Fig Tree Sapling", {name: "figSapling", data: 0});

//grapefruit
IDRegistry.genItemID("grapefruitSapling");
Item.createItem("grapefruitSapling", "Grapefruit Tree Sapling", {name: "grapefruitSapling", data: 0});

//gooseberry
IDRegistry.genItemID("gooseberrySapling");
Item.createItem("gooseberrySapling", "Gooseberry Tree Sapling", {name: "gooseberrySapling", data: 0});

//lemon
IDRegistry.genItemID("lemonSapling");
Item.createItem("lemonSapling", "Lemon Tree Sapling", {name: "lemonSapling", data: 0});

//lime
IDRegistry.genItemID("limeSapling");
Item.createItem("limeSapling", "Lime Tree Sapling", {name: "limeSapling", data: 0});

//mango
IDRegistry.genItemID("mangoSapling");
Item.createItem("mangoSapling", "Mango Tree Sapling", {name: "mangoSapling", data: 0});

//olive
IDRegistry.genItemID("oliveSapling");
Item.createItem("oliveSapling", "Olive Tree Sapling", {name: "oliveSapling", data: 0});

//orange
IDRegistry.genItemID("orangeSapling");
Item.createItem("orangeSapling", "Orange Tree Sapling", {name: "orangeSapling", data: 0});

//papaya
IDRegistry.genItemID("papayaSapling");
Item.createItem("papayaSapling", "Papaya Tree Sapling", {name: "papayaSapling", data: 0});

//peach
IDRegistry.genItemID("peachSapling");
Item.createItem("peachSapling", "Peach Tree Sapling", {name: "peachSapling", data: 0});

//pear
IDRegistry.genItemID("pearSapling");
Item.createItem("pearSapling", "Pear Tree Sapling", {name: "pearSapling", data: 0});

//persimmon
IDRegistry.genItemID("persimmonSapling");
Item.createItem("persimmonSapling", "Persimmon Tree Sapling", {name: "persimmonSapling", data: 0});

//plum
IDRegistry.genItemID("plumSapling");
Item.createItem("plumSapling", "Plum Tree Sapling", {name: "plumSapling", data: 0});

//pomegranate
IDRegistry.genItemID("pomegranateSapling");
Item.createItem("pomegranateSapling", "Pomegranate Tree Sapling", {name: "pomegranateSapling", data: 0});

//starfruit
IDRegistry.genItemID("starfruitSapling");
Item.createItem("starfruitSapling", "Starfruit Tree Sapling", {name: "starfruitSapling", data: 0});

//almond
IDRegistry.genItemID("almondSapling");
Item.createItem("almondSapling", "Almond Tree Sapling", {name: "almondSapling", data: 0});

//peppercorn
IDRegistry.genItemID("peppercornSapling");
Item.createItem("peppercornSapling", "Peppercorn Tree Sapling", {name: "peppercornSapling", data: 0});

//cashew
IDRegistry.genItemID("cashewSapling");
Item.createItem("cashewSapling", "Cashew Tree Sapling", {name: "cashewSapling", data: 0});

//coconut
IDRegistry.genItemID("coconutSapling");
Item.createItem("coconutSapling", "Coconut Tree Sapling", {name: "coconutSapling", data: 0});




// file: TREES/SAPLINGS/blocks.js

//apple
IDRegistry.genBlockID("appleTreeSapling");
Block.createBlock("appleTreeSapling", [
	{name: "Apple Tree Sapling", texture: [["empty", 0], ["empty", 0], ["appleSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.appleTreeSapling,
	seed:ItemID.appleSapling
});
Harvest.recipe({id:ItemID.appleSapling},[{id: 260, data: 0}, {id: 6, data: 0}]);

//apricot
IDRegistry.genBlockID("apricotTreeSapling");
Block.createBlock("apricotTreeSapling", [
	{name: "Apricot Tree Sapling", texture: [["empty", 0], ["empty", 0], ["apricotSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.apricotTreeSapling,
	seed:ItemID.apricotSapling
});
Harvest.recipe({id:ItemID.apricotSapling},[{id: ItemID.apricot, data: 0}, {id: 6, data: 3}]);

//cherry
IDRegistry.genBlockID("cherryTreeSapling");
Block.createBlock("cherryTreeSapling", [
	{name: "Cherry Tree Sapling", texture: [["empty", 0], ["empty", 0], ["cherrySapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.cherryTreeSapling,
	seed:ItemID.cherrySapling
});
Harvest.recipe({id:ItemID.cherrySapling},[{id: ItemID.cherry, data: 0}, {id: 6, data: 0}]);

//avocado
IDRegistry.genBlockID("avocadoTreeSapling");
Block.createBlock("avocadoTreeSapling", [
	{name: "Avocado Tree Sapling", texture: [["empty", 0], ["empty", 0], ["avocadoSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.avocadoTreeSapling,
	seed:ItemID.avocadoSapling
});
Harvest.recipe({id:ItemID.avocadoSapling},[{id: ItemID.avocado, data: 0}, {id: 6, data: 0}]);

//banana
IDRegistry.genBlockID("bananaTreeSapling");
Block.createBlock("bananaTreeSapling", [
	{name: "Banana Tree Sapling", texture: [["empty", 0], ["empty", 0], ["bananaSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.bananaTreeSapling,
	seed:ItemID.bananaSapling
});
Harvest.recipe({id:ItemID.bananaSapling},[{id: ItemID.banana, data: 0}, {id: 6, data: 3}]);

//date
IDRegistry.genBlockID("dateTreeSapling");
Block.createBlock("dateTreeSapling", [
	{name: "Date Tree Sapling", texture: [["empty", 0], ["empty", 0], ["dateSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.dateTreeSapling,
	seed:ItemID.dateSapling
});
Harvest.recipe({id:ItemID.dateSapling},[{id: ItemID.date, data: 0}, {id: 6, data: 3}]);

//dragonfruit
IDRegistry.genBlockID("dragonfruitTreeSapling");
Block.createBlock("dragonfruitTreeSapling", [
	{name: "Dragonfruit Tree Sapling", texture: [["empty", 0], ["empty", 0], ["dragonfruitSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.dragonfruitTreeSapling,
	seed:ItemID.dragonfruitSapling
});
Harvest.recipe({id:ItemID.dragonfruitSapling},[{id: ItemID.dragonfruit, data: 0}, {id: 6, data: 3}]);

//fig
IDRegistry.genBlockID("figTreeSapling");
Block.createBlock("figTreeSapling", [
	{name: "Fig Tree Sapling", texture: [["empty", 0], ["empty", 0], ["figSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.figTreeSapling,
	seed:ItemID.figSapling
});
Harvest.recipe({id:ItemID.figSapling},[{id: ItemID.fig, data: 0}, {id: 6, data: 3}]);

//grapefruit
IDRegistry.genBlockID("grapefruitTreeSapling");
Block.createBlock("grapefruitTreeSapling", [
	{name: "Grapefruit Tree Sapling", texture: [["empty", 0], ["empty", 0], ["grapefruitSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.grapefruitTreeSapling,
	seed:ItemID.grapefruitSapling
});
Harvest.recipe({id:ItemID.grapefruitSapling},[{id: ItemID.grapefruit, data: 0}, {id: 6, data: 3}]);

//gooseberry
IDRegistry.genBlockID("gooseberryTreeSapling");
Block.createBlock("gooseberryTreeSapling", [
	{name: "Gooseberry Tree Sapling", texture: [["empty", 0], ["empty", 0], ["gooseberrySapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.gooseberryTreeSapling,
	seed:ItemID.gooseberrySapling
});
Harvest.recipe({id:ItemID.gooseberrySapling},[{id: ItemID.gooseberry, data: 0}, {id: 6, data: 3}]);

//lemon
IDRegistry.genBlockID("lemonTreeSapling");
Block.createBlock("lemonTreeSapling", [
	{name: "Lemon Tree Sapling", texture: [["empty", 0], ["empty", 0], ["lemonSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.lemonTreeSapling,
	seed:ItemID.lemonSapling
});
Harvest.recipe({id:ItemID.lemonSapling},[{id: ItemID.lemon, data: 0}, {id: 6, data: 3}]);

//lime
IDRegistry.genBlockID("limeTreeSapling");
Block.createBlock("limeTreeSapling", [
	{name: "Lime Tree Sapling", texture: [["empty", 0], ["empty", 0], ["limeSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.limeTreeSapling,
	seed:ItemID.limeSapling
});
Harvest.recipe({id:ItemID.limeSapling},[{id: ItemID.lime, data: 0}, {id: 6, data: 3}]);

//mango
IDRegistry.genBlockID("mangoTreeSapling");
Block.createBlock("mangoTreeSapling", [
	{name: "Mango Tree Sapling", texture: [["empty", 0], ["empty", 0], ["mangoSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.mangoTreeSapling,
	seed:ItemID.mangoSapling
});
Harvest.recipe({id:ItemID.mangoSapling},[{id: ItemID.mango, data: 0}, {id: 6, data: 3}]);

//olive
IDRegistry.genBlockID("oliveTreeSapling");
Block.createBlock("oliveTreeSapling", [
	{name: "Olive Tree Sapling", texture: [["empty", 0], ["empty", 0], ["oliveSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.oliveTreeSapling,
	seed:ItemID.oliveSapling
});
Harvest.recipe({id:ItemID.oliveSapling},[{id: ItemID.olive, data: 0}, {id: 6, data: 3}]);

//orange
IDRegistry.genBlockID("orangeTreeSapling");
Block.createBlock("orangeTreeSapling", [
	{name: "Orange Tree Sapling", texture: [["empty", 0], ["empty", 0], ["orangeSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.orangeTreeSapling,
	seed:ItemID.orangeSapling
});
Harvest.recipe({id:ItemID.orangeSapling},[{id: ItemID.orange, data: 0}, {id: 6, data: 3}]);

//papaya
IDRegistry.genBlockID("papayaTreeSapling");
Block.createBlock("papayaTreeSapling", [
	{name: "Papaya Tree Sapling", texture: [["empty", 0], ["empty", 0], ["papayaSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.papayaTreeSapling,
	seed:ItemID.papayaSapling
});
Harvest.recipe({id:ItemID.orangeSapling},[{id: ItemID.papaya, data: 0}, {id: 6, data: 3}]);

//peach
IDRegistry.genBlockID("peachTreeSapling");
Block.createBlock("peachTreeSapling", [
	{name: "Peach Tree Sapling", texture: [["empty", 0], ["empty", 0], ["peachSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.peachTreeSapling,
	seed:ItemID.peachSapling
});
Harvest.recipe({id:ItemID.peachSapling},[{id: ItemID.peach, data: 0}, {id: 6, data: 3}]);

//pear
IDRegistry.genBlockID("pearTreeSapling");
Block.createBlock("pearTreeSapling", [
	{name: "Pear Tree Sapling", texture: [["empty", 0], ["empty", 0], ["pearSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.pearTreeSapling,
	seed:ItemID.pearSapling
});
Harvest.recipe({id:ItemID.peachSapling},[{id: ItemID.pear, data: 0}, {id: 6, data: 4}]);

//persimmon
IDRegistry.genBlockID("persimmonTreeSapling");
Block.createBlock("persimmonTreeSapling", [
	{name: "Persimmon Tree Sapling", texture: [["empty", 0], ["empty", 0], ["persimmonSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.persimmonTreeSapling,
	seed:ItemID.persimmonSapling
});
Harvest.recipe({id:ItemID.persimmonSapling},[{id: ItemID.persimmon, data: 0}, {id: 6, data: 3}]);

//plum
IDRegistry.genBlockID("plumTreeSapling");
Block.createBlock("plumTreeSapling", [
	{name: "Plum Tree Sapling", texture: [["empty", 0], ["empty", 0], ["plumSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.plumTreeSapling,
	seed:ItemID.plumSapling
});
Harvest.recipe({id:ItemID.plumSapling},[{id: ItemID.plum, data: 0}, {id: 6, data: 3}]);

//pomegranate
IDRegistry.genBlockID("pomegranateTreeSapling");
Block.createBlock("pomegranateTreeSapling", [
	{name: "Pomegranate Tree Sapling", texture: [["empty", 0], ["empty", 0], ["pomegranateSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.pomegranateTreeSapling,
	seed:ItemID.pomegranateSapling
});
Harvest.recipe({id:ItemID.pomegranateSapling},[{id: ItemID.pomegranate, data: 0}, {id: 6, data: 3}]);

//starfruit
IDRegistry.genBlockID("starfruitTreeSapling");
Block.createBlock("starfruitTreeSapling", [
	{name: "Starfruit Tree Sapling", texture: [["empty", 0], ["empty", 0], ["starfruitSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.starfruitTreeSapling,
	seed:ItemID.starfruitSapling
});
Harvest.recipe({id:ItemID.starfruitSapling},[{id: ItemID.starfruit, data: 0}, {id: 6, data: 3}]);

//almond
IDRegistry.genBlockID("almondTreeSapling");
Block.createBlock("almondTreeSapling", [
	{name: "Almond Tree Sapling", texture: [["empty", 0], ["empty", 0], ["almondSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.almondTreeSapling,
	seed:ItemID.almondSapling
});
Harvest.recipe({id:ItemID.almondSapling},[{id: ItemID.almond, data: 0}, {id: 6, data: 3}]);

//peppercorn
IDRegistry.genBlockID("peppercornTreeSapling");
Block.createBlock("peppercornTreeSapling", [
	{name: "Peppercorn Tree Sapling", texture: [["empty", 0], ["empty", 0], ["peppercornSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.peppercornTreeSapling,
	seed:ItemID.peppercornSapling
});
Harvest.recipe({id:ItemID.peppercornSapling},[{id: ItemID.peppercorn, data: 0}, {id: 6, data: 3}]);

//cashew
IDRegistry.genBlockID("cashewTreeSapling");
Block.createBlock("cashewTreeSapling", [
	{name: "Cashew Tree Sapling", texture: [["empty", 0], ["empty", 0], ["cashewSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.cashewTreeSapling,
	seed:ItemID.cashewSapling
});
Harvest.recipe({id:ItemID.cashewSapling},[{id: ItemID.cashew, data: 0}, {id: 6, data: 3}]);

//coconut
IDRegistry.genBlockID("coconutTreeSapling");
Block.createBlock("coconutTreeSapling", [
	{name: "Coconut Tree Sapling", texture: [["empty", 0], ["empty", 0], ["coconutSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
CropRegistry.deriveCropAsClass("Harvestcraft_treeSapling",{
	id:BlockID.coconutTreeSapling,
	seed:ItemID.coconutSapling
});
Harvest.recipe({id:ItemID.coconutSapling},[{id: ItemID.coconut, data: 0}, {id: 6, data: 3}]);




// file: TREES/trees.js

//apple
TreeRegistry.deriveTreeAsClass("Harvestcraft_middleFruitTree",{
	name:"apple",
	sapling:{
		block:BlockID.appleTreeSapling,
		item:ItemID.appleSapling
	},
	fruit:{
		block:BlockID.appleBlock,
		item:260
	}
});

//apricot
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"apricot",
	sapling:{
		block:BlockID.apricotTreeSapling,
		item:ItemID.apricotSapling
	},
	fruit:{
		block:BlockID.apricot,
		item:ItemID.apricot
	}
});

//cherry
TreeRegistry.deriveTreeAsClass("Harvestcraft_middleFruitTree",{
	name:"cherry",
	sapling:{
		block:BlockID.cherryTreeSapling,
		item:ItemID.cherrySapling
	},
	fruit:{
		block:BlockID.cherry,
		item:ItemID.cherry
	}
});

//avocado
TreeRegistry.deriveTreeAsClass("Harvestcraft_middleFruitTree",{
	name:"avocado",
	sapling:{
		block:BlockID.avocadoTreeSapling,
		item:ItemID.avocadoSapling
	},
	fruit:{
		block:BlockID.avocado,
		item:ItemID.avocado
	}
});

//banana
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"banana",
	sapling:{
		block:BlockID.bananaTreeSapling,
		item:ItemID.bananaSapling
	},
	fruit:{
		block:BlockID.banana,
		item:ItemID.banana
	}
});

//date
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"date",
	sapling:{
		block:BlockID.dateTreeSapling,
		item:ItemID.dateSapling
	},
	fruit:{
		block:BlockID.date,
		item:ItemID.date
	}
});

//dragonfruit
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"dragonfruit",
	sapling:{
		block:BlockID.dragonfruitTreeSapling,
		item:ItemID.dragonfruitSapling
	},
	fruit:{
		block:BlockID.dragonfruit,
		item:ItemID.dragonfruit
	}
});

//fig
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"fig",
	sapling:{
		block:BlockID.figTreeSapling,
		item:ItemID.figSapling
	},
	fruit:{
		block:BlockID.fig,
		item:ItemID.fig
	}
});

//grapefruit
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"grapefruit",
	sapling:{
		block:BlockID.grapefruitTreeSapling,
		item:ItemID.grapefruitSapling
	},
	fruit:{
		block:BlockID.grapefruit,
		item:ItemID.grapefruit
	}
});

//gooseberry
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"gooseberry",
	sapling:{
		block:BlockID.gooseberryTreeSapling,
		item:ItemID.gooseberrySapling
	},
	fruit:{
		block:BlockID.gooseberry,
		item:ItemID.gooseberry
	}
});

//lemon
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"lemon",
	sapling:{
		block:BlockID.lemonTreeSapling,
		item:ItemID.lemonSapling
	},
	fruit:{
		block:BlockID.lemon,
		item:ItemID.lemon
	}
});

//lime
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"lime",
	sapling:{
		block:BlockID.limeTreeSapling,
		item:ItemID.limeSapling
	},
	fruit:{
		block:BlockID.lime,
		item:ItemID.lime
	}
});

//mango
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"mango",
	sapling:{
		block:BlockID.mangoTreeSapling,
		item:ItemID.mangoSapling
	},
	fruit:{
		block:BlockID.mango,
		item:ItemID.mango
	}
});

//olive
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"olive",
	sapling:{
		block:BlockID.oliveTreeSapling,
		item:ItemID.oliveSapling
	},
	fruit:{
		block:BlockID.olive,
		item:ItemID.olive
	}
});

//orange
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"orange",
	sapling:{
		block:BlockID.orangeTreeSapling,
		item:ItemID.orangeSapling
	},
	fruit:{
		block:BlockID.orange,
		item:ItemID.orange
	}
});

//papaya
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"papaya",
	sapling:{
		block:BlockID.papayaTreeSapling,
		item:ItemID.papayaSapling
	},
	fruit:{
		block:BlockID.papaya,
		item:ItemID.papaya
	}
});

//peach
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"peach",
	sapling:{
		block:BlockID.peachTreeSapling,
		item:ItemID.peachSapling
	},
	fruit:{
		block:BlockID.peach,
		item:ItemID.peach
	}
});

//pear
TreeRegistry.deriveTreeAsClass("Harvestcraft_taigaFruitTree",{
	name:"pear",
	sapling:{
		block:BlockID.pearTreeSapling,
		item:ItemID.pearSapling
	},
	fruit:{
		block:BlockID.pear,
		item:ItemID.pear
	}
});

//persimmon
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"persimmon",
	sapling:{
		block:BlockID.persimmonTreeSapling,
		item:ItemID.persimmonSapling
	},
	fruit:{
		block:BlockID.persimmon,
		item:ItemID.persimmon
	}
});

//plum
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"plum",
	sapling:{
		block:BlockID.plumTreeSapling,
		item:ItemID.plumSapling
	},
	fruit:{
		block:BlockID.plum,
		item:ItemID.plum
	}
});

//pomegranate
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"pomegranate",
	sapling:{
		block:BlockID.pomegranateTreeSapling,
		item:ItemID.pomegranateSapling
	},
	fruit:{
		block:BlockID.pomegranate,
		item:ItemID.pomegranate
	}
});

//starfruit
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"starfruit",
	sapling:{
		block:BlockID.starfruitTreeSapling,
		item:ItemID.starfruitSapling
	},
	fruit:{
		block:BlockID.starfruit,
		item:ItemID.starfruit
	}
});

//almond
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"almond",
	sapling:{
		block:BlockID.almondTreeSapling,
		item:ItemID.almondSapling
	},
	fruit:{
		block:BlockID.almond,
		item:ItemID.almond
	}
});

//peppercorn
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"peppercorn",
	sapling:{
		block:BlockID.peppercornTreeSapling,
		item:ItemID.peppercornSapling
	},
	fruit:{
		block:BlockID.peppercornfruit,
		item:ItemID.peppercorn
	}
});

//cashew
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"cashew",
	sapling:{
		block:BlockID.cashewTreeSapling,
		item:ItemID.cashewSapling
	},
	fruit:{
		block:BlockID.cashew,
		item:ItemID.cashew
	}
});

//coconut
TreeRegistry.deriveTreeAsClass("Harvestcraft_jungleFruitTree",{
	name:"coconut",
	sapling:{
		block:BlockID.coconutTreeSapling,
		item:ItemID.coconutSapling
	},
	fruit:{
		block:BlockID.coconut,
		item:ItemID.coconut
	}
});




// file: WORLD/GENERATION/GARDENS/biomes.js

var SaltBiomes = [0,24,10];
	//var SaltBiomes = __config__.access("generation.biomes.gardens.SaltBiomes");
var BerryGardenBiomes = [1,4,3,132,129,34, 18, 27, 28,13];
	//var BerryGardenBiomes = __config__.access("generation.biomes.gardens.BerryGardenBiomes");
var CandleberryGardenBiomes = [1,4,3,132,129,34, 18, 27, 28,13];
	//var CandleberryGardenBiomes = __config__.access("generation.biomes.gardens.CandleberryGardenBiomes");
var DesertGardenBiomes =[2,35,37,135];
	//var DesertGardenBiomes = __config__.access("generation.biomes.gardens.DesertGardenBiomes");
var GourdGardenBiomes = [1,4,3,132,129,34, 18, 27, 28,13];
	//var GourdGardenBiomes = __config__.access("generation.biomes.gardens.GourdGardenBiomes");
var GrassGardenBiomes = [1,4,3,132,129,34, 18, 27, 28];
	//var GrassGardenBiomes = __config__.access("generation.biomes.gardens.GrassGardenBiomes");
var GroundGardenBiomes =[1,4,3,132,129,34,4, 18, 27, 28,13];
	//var GroundGardenBiomes = __config__.access("generation.biomes.gardens.GroundGardenBiomes");
var HerbGardenBiomes =  [1,4,3,132,129,34, 18, 27, 28];
	//var HerbGardenBiomes = __config__.access("generation.biomes.gardens.HerbGardenBiomes");
var LeafyGardenBiomes = [1,4,3,132,129,34, 18, 27, 28,13];
	//var LeafyGardenBiomes = __config__.access("generation.biomes.gardens.LeafyGardenBiomes");
var MushroomGardenBiomes = [1,4,3,132,129,34, 18, 27, 28];
	//var MushroomGardenBiomes = __config__.access("generation.biomes.gardens.MushroomGardenBiomes");
var StalkGardenBiomes = [1,4,3,132,129,34, 18, 27, 28];
	//var StalkGardenBiomes = __config__.access("generation.biomes.gardens.StalkGardenBiomes");
var TextileGardenBiomes = [1,4,3,132,129,34, 18, 27, 28];
	//var TextileGardenBiomes = __config__.access("generation.biomes.gardens.TextileGardenBiomes");
var TropicalGardenBiomes = [21, 22, 23, 149, 151,6, 134,36];
	//var TropicalGardenBiomes = __config__.access("generation.biomes.gardens.TropicalGardenBiomes");
var WaterGardenBiomes = [24,0];
	//var WaterGardenBiomes = __config__.access("generation.biomes.gardens.WaterGardenBiomes");
var FrostyGardenBiomes = [12,140,30,158,11,26];




// file: WORLD/GENERATION/GARDENS/berryGarden.js

var BerryGardenCount = {
	min: __config__.access("generation.group.gardens.berry.min"),
	max: __config__.access("generation.group.gardens.berry.max")
};
Harvest.addBlockGeneration({id:BlockID.berrygarden,data:0},BerryGardenBiomes,BerryGardenCount,
__config__.access("generation.numbers.gardens.berry"));




// file: WORLD/GENERATION/GARDENS/herbGarden.js

var HerbGardenCount = {
	min: __config__.access("generation.group.gardens.herb.min"),
	max: __config__.access("generation.group.gardens.herb.max")
};
Harvest.addBlockGeneration({id:BlockID.herbgarden,data:0},HerbGardenBiomes,HerbGardenCount,
__config__.access("generation.numbers.gardens.herb"));




// file: WORLD/GENERATION/GARDENS/grassGarden.js

var GrassGardenCount = {
	min: __config__.access("generation.group.gardens.grass.min"),
	max: __config__.access("generation.group.gardens.grass.max")
};
Harvest.addBlockGeneration({id:BlockID.grassgarden,data:0},GrassGardenBiomes,GrassGardenCount,
__config__.access("generation.numbers.gardens.grass"));




// file: WORLD/GENERATION/GARDENS/candleberry.js

var CandleberryGardenCount = {
	min: __config__.access("generation.group.gardens.candleberry.min"),
	max: __config__.access("generation.group.gardens.candleberry.max")
};
Harvest.addBlockGeneration({id:BlockID.candleberryGarden,data:0},CandleberryGardenBiomes,CandleberryGardenCount,
__config__.access("generation.numbers.gardens.candleberry"));




// file: WORLD/GENERATION/GARDENS/cottonGarden.js

var TextileGardenCount = {
	min: __config__.access("generation.group.gardens.cotton.min"),
	max: __config__.access("generation.group.gardens.cotton.max")
};
Harvest.addBlockGeneration({id:BlockID.cottongarden,data:0},TextileGardenBiomes,TextileGardenCount,
__config__.access("generation.numbers.gardens.cotton"));




// file: WORLD/GENERATION/GARDENS/aridGarden.js

var AridGardenCount = {
	min: __config__.access("generation.group.gardens.arid.min"),
	max: __config__.access("generation.group.gardens.arid.max")
};
Harvest.addBlockGeneration({id:BlockID.aridgarden,data:0},DesertGardenBiomes,TextileGardenCount,
__config__.access("generation.numbers.gardens.arid"));




// file: WORLD/GENERATION/GARDENS/tropicalGarden.js

var TropicalGardenCount = {
	min: __config__.access("generation.group.gardens.tropical.min"),
	max: __config__.access("generation.group.gardens.tropical.max")
};
Harvest.addBlockGeneration({id:BlockID.tropicalgarden,data:0},TropicalGardenBiomes,TropicalGardenCount,
__config__.access("generation.numbers.gardens.tropical"));




// file: WORLD/GENERATION/GARDENS/groundGarden.js

var GroundGardenCount = {
	min: __config__.access("generation.group.gardens.ground.min"),
	max: __config__.access("generation.group.gardens.ground.max")
};
Harvest.addBlockGeneration({id:BlockID.groundgarden,data:0},GroundGardenBiomes,GroundGardenCount,
__config__.access("generation.numbers.gardens.ground"));




// file: WORLD/GENERATION/GARDENS/stalkGarden.js

var StalkGardenCount = {
	min: __config__.access("generation.group.gardens.stalk.min"),
	max: __config__.access("generation.group.gardens.stalk.max")
};
Harvest.addBlockGeneration({id:BlockID.stalkgarden,data:0},StalkGardenBiomes,StalkGardenCount,
__config__.access("generation.numbers.gardens.stalk"));




// file: WORLD/GENERATION/GARDENS/gourdGarden.js

var GourdGardenCount = {
	min: __config__.access("generation.group.gardens.gourd.min"),
	max: __config__.access("generation.group.gardens.gourd.max")
};
Harvest.addBlockGeneration({id:BlockID.gourdgarden,data:0},GourdGardenBiomes,GourdGardenCount,
__config__.access("generation.numbers.gardens.gourd"));




// file: WORLD/GENERATION/salt.js

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
	coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
	if(Math.random()< __config__.access("generation.numbers.other.salt")){
		 for(var idd in SaltBiomes ){
			var id = SaltBiomes[idd];
			if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.salt, 0);
				if (Math.random() < .5){ // top
					World.setBlock(coords.x, coords.y + 2, coords.z, BlockID.salt, 0);
				}		
				if (Math.random() < .5){ // left
					World.setBlock(coords.x + 1, coords.y + 1, coords.z, BlockID.salt, 0);
				}		
				if (Math.random() < .5){ // right
					World.setBlock(coords.x - 1, coords.y + 1, coords.z, BlockID.salt, 0);
				}		
				if (Math.random() < .5){ // front
					World.setBlock(coords.x, coords.y + 1, coords.z + 1, BlockID.salt, 0);
				}		
				if (Math.random() < .5){ // back
					World.setBlock(coords.x, coords.y + 1, coords.z - 1, BlockID.salt, 0);
				}
			}
		}
	}
});
Callback.addCallback("GenerateChunkUnderground", function(chunkX, chunkZ){
	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
	if(Math.random()< __config__.access("generation.numbers.other.salt") ){
		if(World.getBlockID(coords.x,coords.y,coords.z)!=0){
			World.setBlock(coords.x, coords.y , coords.z, BlockID.salt, 0);
		}
	}
});




// file: WORLD/GENERATION/TREES/biomes.js

var middleBiomes = [1,4,3,132,129,34, 18, 27, 28,13];
var savannaBiomes = [1,2,4, 18, 27, 28,13];
var taigaBiomes = [35,163,39,36,164, 167];




// file: WORLD/GENERATION/TREES/trees.js

//apple
var appleTreesCount = {
	min:__config__.access("generation.group.trees.apple.min"),
	max:__config__.access("generation.group.trees.apple.max")
};
TreeRegistry.addTreeGeneration("apple",middleBiomes,appleTreesCount,__config__.access("generation.numbers.trees.apple"));

//apricot
var apricotTreesCount = {
	min:__config__.access("generation.group.trees.apricot.min"),
	max:__config__.access("generation.group.trees.apricot.max")
};
TreeRegistry.addTreeGeneration("apricot",savannaBiomes,apricotTreesCount,__config__.access("generation.numbers.trees.apricot"));

//cherry
var cherryTreesCount = {
	min:__config__.access("generation.group.trees.cherry.min"),
	max:__config__.access("generation.group.trees.cherry.max")
};
TreeRegistry.addTreeGeneration("cherry",middleBiomes,cherryTreesCount,__config__.access("generation.numbers.trees.cherry"));

//avocado
var avocadoTreesCount = {
	min:__config__.access("generation.group.trees.avocado.min"),
	max:__config__.access("generation.group.trees.avocado.max")
};
TreeRegistry.addTreeGeneration("avocado",middleBiomes,avocadoTreesCount,__config__.access("generation.numbers.trees.avocado"));

//banana
var bananaTreesCount = {
	min:__config__.access("generation.group.trees.banana.min"),
	max:__config__.access("generation.group.trees.banana.max")
};
TreeRegistry.addTreeGeneration("banana",savannaBiomes,bananaTreesCount,__config__.access("generation.numbers.trees.banana"));

//date
var dateTreesCount = {
	min:__config__.access("generation.group.trees.date.min"),
	max:__config__.access("generation.group.trees.date.max")
};
TreeRegistry.addTreeGeneration("date",savannaBiomes,dateTreesCount,__config__.access("generation.numbers.trees.date"));

//dragonfruit
var dragonfruitTreesCount = {
	min:__config__.access("generation.group.trees.dragonfruit.min"),
	max:__config__.access("generation.group.trees.dragonfruit.max")
};
TreeRegistry.addTreeGeneration("dragonfruit",savannaBiomes,dragonfruitTreesCount,__config__.access("generation.numbers.trees.dragonfruit"));

//fig
var figTreesCount = {
	min:__config__.access("generation.group.trees.fig.min"),
	max:__config__.access("generation.group.trees.fig.max")
};
TreeRegistry.addTreeGeneration("fig",savannaBiomes,figTreesCount,__config__.access("generation.numbers.trees.fig"));

//grapefruit
var grapefruitTreesCount = {
	min:__config__.access("generation.group.trees.grapefruit.min"),
	max:__config__.access("generation.group.trees.grapefruit.max")
};
TreeRegistry.addTreeGeneration("grapefruit",savannaBiomes,grapefruitTreesCount,__config__.access("generation.numbers.trees.grapefruit"));

//gooseberry
var gooseberryTreesCount = {
	min:__config__.access("generation.group.trees.gooseberry.min"),
	max:__config__.access("generation.group.trees.gooseberry.max")
};
TreeRegistry.addTreeGeneration("gooseberry",savannaBiomes,gooseberryTreesCount,__config__.access("generation.numbers.trees.gooseberry"));

//lemon
var lemonTreesCount = {
	min:__config__.access("generation.group.trees.lemon.min"),
	max:__config__.access("generation.group.trees.lemon.max")
};
TreeRegistry.addTreeGeneration("lemon",savannaBiomes,lemonTreesCount,__config__.access("generation.numbers.trees.lemon"));

//lime
var limeTreesCount = {
	min:__config__.access("generation.group.trees.lime.min"),
	max:__config__.access("generation.group.trees.lime.max")
};
TreeRegistry.addTreeGeneration("lime",savannaBiomes,limeTreesCount,__config__.access("generation.numbers.trees.lime"));

//mango
var mangoTreesCount = {
	min:__config__.access("generation.group.trees.mango.min"),
	max:__config__.access("generation.group.trees.mango.max")
};
TreeRegistry.addTreeGeneration("mango",savannaBiomes,mangoTreesCount,__config__.access("generation.numbers.trees.mango"));

//olive
var oliveTreesCount = {
	min:__config__.access("generation.group.trees.olive.min"),
	max:__config__.access("generation.group.trees.olive.max")
};
TreeRegistry.addTreeGeneration("olive",savannaBiomes,oliveTreesCount,__config__.access("generation.numbers.trees.olive"));

//orange
var orangeTreesCount = {
	min:__config__.access("generation.group.trees.orange.min"),
	max:__config__.access("generation.group.trees.orange.max")
};
TreeRegistry.addTreeGeneration("orange",savannaBiomes,orangeTreesCount,__config__.access("generation.numbers.trees.orange"));

//papaya
var papayaTreesCount = {
	min:__config__.access("generation.group.trees.papaya.min"),
	max:__config__.access("generation.group.trees.papaya.max")
};
TreeRegistry.addTreeGeneration("papaya",savannaBiomes,papayaTreesCount,__config__.access("generation.numbers.trees.papaya"));

//peach
var peachTreesCount = {
	min:__config__.access("generation.group.trees.peach.min"),
	max:__config__.access("generation.group.trees.peach.max")
};
TreeRegistry.addTreeGeneration("peach",savannaBiomes,peachTreesCount,__config__.access("generation.numbers.trees.peach"));

//pear
var pearTreesCount = {
	min:__config__.access("generation.group.trees.pear.min"),
	max:__config__.access("generation.group.trees.pear.max")
};
TreeRegistry.addTreeGeneration("pear",taigaBiomes,pearTreesCount,__config__.access("generation.numbers.trees.pear"));

//persimmon
var persimmonTreesCount = {
	min:__config__.access("generation.group.trees.persimmon.min"),
	max:__config__.access("generation.group.trees.persimmon.max")
};
TreeRegistry.addTreeGeneration("persimmon",savannaBiomes,persimmonTreesCount,__config__.access("generation.numbers.trees.persimmon"));

//plum
var plumTreesCount = {
	min:__config__.access("generation.group.trees.plum.min"),
	max:__config__.access("generation.group.trees.plum.max")
};
TreeRegistry.addTreeGeneration("plum",savannaBiomes,plumTreesCount,__config__.access("generation.numbers.trees.plum"));

//pomegranate
var pomegranateTreesCount = {
	min:__config__.access("generation.group.trees.pomegranate.min"),
	max:__config__.access("generation.group.trees.pomegranate.max")
};
TreeRegistry.addTreeGeneration("pomegranate",savannaBiomes,pomegranateTreesCount,__config__.access("generation.numbers.trees.pomegranate"));

//starfruit
var starfruitTreesCount = {
	min:__config__.access("generation.group.trees.starfruit.min"),
	max:__config__.access("generation.group.trees.starfruit.max")
};
TreeRegistry.addTreeGeneration("starfruit",savannaBiomes,starfruitTreesCount,__config__.access("generation.numbers.trees.starfruit"));

//almond
var almondTreesCount = {
	min:__config__.access("generation.group.trees.almond.min"),
	max:__config__.access("generation.group.trees.almond.max")
};
TreeRegistry.addTreeGeneration("almond",savannaBiomes,almondTreesCount,__config__.access("generation.numbers.trees.almond"));

//peppercorn
var peppercornTreesCount = {
	min:__config__.access("generation.group.trees.peppercorn.min"),
	max:__config__.access("generation.group.trees.peppercorn.max")
};
TreeRegistry.addTreeGeneration("peppercorn",savannaBiomes,peppercornTreesCount,__config__.access("generation.numbers.trees.peppercorn"));

//cashew
var cashewTreesCount = {
	min:__config__.access("generation.group.trees.cashew.min"),
	max:__config__.access("generation.group.trees.cashew.max")
};
TreeRegistry.addTreeGeneration("cashew",savannaBiomes,cashewTreesCount,__config__.access("generation.numbers.trees.cashew"));

//coconut
var coconutTreesCount = {
	min:__config__.access("generation.group.trees.coconut.min"),
	max:__config__.access("generation.group.trees.coconut.max")
};
TreeRegistry.addTreeGeneration("coconut",savannaBiomes,coconutTreesCount,__config__.access("generation.numbers.trees.coconut"));




// file: CROPS/crops.js

// file: CROPS/strawberry.js

CropRegistry.registerWithID("strawberrycrop","strawberrycrop","strawberrycrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.strawberrycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.strawberrycrop,
	drop:ItemID.strawberry,
	seed:ItemID.strawberry_seed
});




// file: CROPS/raspberry.js

CropRegistry.registerWithID("raspberrycrop","raspberrycrop","raspberry_crop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.raspberrycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.raspberrycrop,
	drop:ItemID.raspberry,
	seed:ItemID.raspberry_seed
});




// file: CROPS/cranberry.js

CropRegistry.registerWithID("cranberrycrop","cranberrycrop","cranberrycrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.cranberrycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.cranberrycrop,
	drop:ItemID.cranberry,
	seed:ItemID.cranberry_seed
});




// file: CROPS/blueberry.js

CropRegistry.registerWithID("blueberrycrop","blueberrycrop","blueberrycrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.blueberrycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.blueberrycrop,
	drop:ItemID.blueberry,
	seed:ItemID.blueberry_seed
});




// file: CROPS/blackberry.js

CropRegistry.registerWithID("blackberrycrop","blackberrycrop","blackberrycrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.blackberrycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.blackberrycrop,
	drop:ItemID.blackberry,
	seed:ItemID.blackberry_seed
});




// file: CROPS/grape.js

CropRegistry.registerWithID("grapecrop","grapecrop","grapecrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.grapecrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.grapecrop,
	drop:ItemID.grape,
	seed:ItemID.grape_seed
});




// file: CROPS/cucumber.js

CropRegistry.registerWithID("cucumbercrop","cucumbercrop","cucumbercrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.cucumbercrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.cucumbercrop,
	drop:ItemID.cucumber,
	seed:ItemID.cucumber_seed
});




// file: CROPS/onion.js

CropRegistry.registerWithID("onioncrop","onioncrop","onioncrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.onioncrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.onioncrop,
	drop:ItemID.onion,
	seed:ItemID.onion_seed
});




// file: CROPS/cabbage.js

CropRegistry.registerWithID("cabbagecrop","cabbagecrop","cabbagecrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.cabbagecrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.cabbagecrop,
	drop:ItemID.cabbage,
	seed:ItemID.cabbage_seed
});




// file: CROPS/tomato.js

CropRegistry.registerWithID("tomatocrop","tomatocrop","tomatocrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.tomatocrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.tomatocrop,
	drop:ItemID.tomato,
	seed:ItemID.tomato_seed
});




// file: CROPS/garlic.js

CropRegistry.registerWithID("garliccrop","garliccrop","garliccrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.garliccrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.garliccrop,
	drop:ItemID.garlic,
	seed:ItemID.garlic_seed
});




// file: CROPS/bellpepper.js

CropRegistry.registerWithID("bellpeppercrop","bellpeppercrop","bellpeppercrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.bellpeppercrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.bellpeppercrop,
	drop:ItemID.bellpepper,
	seed:ItemID.bellpepper_seed
});




// file: CROPS/lettuce.js

CropRegistry.registerWithID("lettucecrop","lettucecrop","lettucecrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.lettucecrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.lettuce,
	drop:ItemID.lettuce,
	seed:ItemID.lettuce_seed
});




// file: CROPS/coffeebean.js

CropRegistry.registerWithID("coffeebeancrop","coffeebeancrop","coffeebeancrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.coffeebeancrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.coffeebeancrop,
	drop:ItemID.coffee_beans,
	seed:ItemID.coffee_seed
});




// file: CROPS/peas.js

CropRegistry.registerWithID("peascrop","peascrop","peascrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.peascrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.peascrop,
	drop:ItemID.peas,
	seed:ItemID.peas_seed
});




// file: CROPS/chilipepper.js

CropRegistry.registerWithID("chilipeppercrop","chilipeppercrop","chilipeppercrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.chilipeppercrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.chilipeppercrop,
	drop:ItemID.chili_pepper,
	seed:ItemID.chili_pepper_seed
});




// file: CROPS/spiceleaf.js

CropRegistry.registerWithID("spiceleafcrop","spiceleafcrop","spiceleafcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.spiceleafcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.spiceleafcrop,
	drop:ItemID.spice_leaf,
	seed:ItemID.spice_leaf_seed
});




// file: CROPS/corn.js

CropRegistry.registerWithID("corncrop","corncrop","corncrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.corncrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.corncrop,
	drop:ItemID.corn,
	seed:ItemID.corn_seed
});




// file: CROPS/candleberry.js

CropRegistry.registerWithID("candleberrycrop","candleberrycrop","candleberrycrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.candleberrycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.candleberrycrop,
	drop:ItemID.candleberry,
	seed:ItemID.candleberryseed
});




// file: CROPS/curryleaf.js

CropRegistry.registerWithID("curryleaf","curryleaf","curryleafcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.curryleaf);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.curryleaf,
	drop:ItemID.curryleaf,
	seed:ItemID.curryleaf_seed
});




// file: CROPS/cotton.js

CropRegistry.registerWithID("cottoncrop","cottoncrop","cottoncrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.cottoncrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.cottoncrop,
	drop:ItemID.cotton,
	seed:ItemID.cotton_seed
});




// file: CROPS/rutabaga.js

CropRegistry.registerWithID("rutabagacrop","rutabagacrop","rutabagacrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.rutabagacrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.rutabagacrop,
	drop:ItemID.rutabaga,
	seed:ItemID.rutabaga_seed
});




// file: CROPS/bean.js

CropRegistry.registerWithID("beancrop","beancrop","beancrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.beancrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.beancrop,
	drop:ItemID.bean,
	seed:ItemID.bean_seed
});




// file: CROPS/waterchestnut.js

CropRegistry.registerWithID("waterchestnutcrop","waterchestnutcrop","waterchestnutcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.waterchestnutcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.waterchestnutcrop,
	drop:ItemID.waterchestnut,
	seed:ItemID.waterchestnut_seed
});




// file: CROPS/rice.js

CropRegistry.registerWithID("ricecrop","ricecrop","ricecrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.ricecrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.ricecrop,
	drop:ItemID.rice,
	seed:ItemID.rice_seed
});




// file: CROPS/mustardseeds.js

CropRegistry.registerWithID("mustardseedscrop","mustardseedscrop","mustardseedscrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.mustardseedscrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.mustardseedscrop,
	drop:ItemID.mustardseeds,
	seed:ItemID.mustard_seed
});




// file: CROPS/ginger.js

CropRegistry.registerWithID("gingercrop","gingercrop","gingercrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.gingercrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.gingercrop,
	drop:ItemID.ginger,
	seed:ItemID.ginger_seed
});




// file: CROPS/spinach.js

CropRegistry.registerWithID("spinachcrop","spinachcrop","spinachcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.spinachcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.spinachcrop,
	drop:ItemID.spinach,
	seed:ItemID.spinach_seed
});



// file: CROPS/cactusfruit.js

CropRegistry.registerWithID("cactusfruitcrop","cactusfruitcrop","cactusfruitcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.cactusfruitcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.cactusfruitcrop,
	drop:ItemID.cactusfruit,
	seed:ItemID.cactusfruit_seed
});



// file: CROPS/cantaloupe.js

CropRegistry.registerWithID("cantaloupecrop","cantaloupecrop","cantaloupecrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.cantaloupecrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.cantaloupecrop,
	drop:ItemID.cantaloupe,
	seed:ItemID.cantaloupe_seed
});



// file: CROPS/kiwi.js

CropRegistry.registerWithID("kiwicrop","kiwicrop","kiwicrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.kiwicrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.kiwicrop,
	drop:ItemID.kiwi,
	seed:ItemID.kiwi_seed
});



// file: CROPS/pineapple.js

CropRegistry.registerWithID("pineapplecrop","pineapplecrop","pineapplecrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.pineapplecrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.pineapplecrop,
	drop:ItemID.pineapple,
	seed:ItemID.pineapple_seed
});


//////////////////////////////////////////////////////////////////////////
// file: CROPS/artichoke.js

CropRegistry.registerWithID("artichokecrop","artichokecrop","artichokecrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.artichokecrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.artichokecrop,
	drop:ItemID.artichoke,
	seed:ItemID.artichoke_seed
});



// file: CROPS/asparagus.js

CropRegistry.registerWithID("asparaguscrop","asparaguscrop","asparaguscrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.asparaguscrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.asparaguscrop,
	drop:ItemID.asparagus,
	seed:ItemID.asparagus_seed
});



// file: CROPS/bambooshoot.js

CropRegistry.registerWithID("bambooshootcrop","bambooshootcrop","bambooshootcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.bambooshootcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.bambooshootcrop,
	drop:ItemID.bambooshoot,
	seed:ItemID.bambooshoot_seed
});



// file: CROPS/broccoli.js

CropRegistry.registerWithID("broccolicrop","broccolicrop","broccolicrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.broccolicrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.broccolicrop,
	drop:ItemID.broccoli,
	seed:ItemID.broccoli_seed
});



// file: CROPS/brusselsprout.js

CropRegistry.registerWithID("brusselsproutcrop","brusselsproutcrop","brusselsproutcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.brusselsproutcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.brusselsproutcrop,
	drop:ItemID.brusselsprout,
	seed:ItemID.brusselsprout_seed
});



// file: CROPS/cauliflower.js

CropRegistry.registerWithID("cauliflowercrop","cauliflowercrop","cauliflowercrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.cauliflowercrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.cauliflowercrop,
	drop:ItemID.cauliflower,
	seed:ItemID.cauliflower_seed
});




// file: CROPS/celery.js

CropRegistry.registerWithID("celerycrop","celerycrop","celerycrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.celerycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.celerycrop,
	drop:ItemID.celery,
	seed:ItemID.celery_seed
});




// file: CROPS/radish.js

CropRegistry.registerWithID("radishcrop","radishcrop","radishcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.radishcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.radishcrop,
	drop:ItemID.radish,
	seed:ItemID.radish_seed
});




// file: CROPS/eggplant.js

CropRegistry.registerWithID("eggplantcrop","eggplantcrop","eggplantcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.eggplantcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.eggplantcrop,
	drop:ItemID.eggplant,
	seed:ItemID.eggplant_seed
});



// file: CROPS/leek.js

CropRegistry.registerWithID("leekcrop","leekcrop","leekcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.leekcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.leekcrop,
	drop:ItemID.leek,
	seed:ItemID.leek_seed
});



// file: CROPS/okra.js

CropRegistry.registerWithID("okracrop","okracrop","okracrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.okracrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.okracrop,
	drop:ItemID.okra,
	seed:ItemID.okra_seed
});



// file: CROPS/parsnip.js

CropRegistry.registerWithID("parsnipcrop","parsnipcrop","parsnipcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.parsnipcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.parsnipcrop,
	drop:ItemID.parsnip,
	seed:ItemID.parsnip_seed
});




// file: CROPS/rhubarb.js

CropRegistry.registerWithID("rhubarbcrop","rhubarbcrop","rhubarbcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.rhubarbcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.rhubarbcrop,
	drop:ItemID.rhubarb,
	seed:ItemID.rhubarb_seed
});



// file: CROPS/scallion.js

CropRegistry.registerWithID("scallioncrop","scallioncrop","scallioncrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.scallioncrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.scallioncrop,
	drop:ItemID.scallion,
	seed:ItemID.scallion_seed
});



// file: CROPS/soybean.js

CropRegistry.registerWithID("soybeancrop","soybeancrop","soybeancrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.soybeancrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.soybeancrop,
	drop:ItemID.soybean,
	seed:ItemID.soybean_seed
});



// file: CROPS/sweetpotato.js

CropRegistry.registerWithID("sweetpotatocrop","sweetpotatocrop","sweetpotatocrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.sweetpotatocrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.sweetpotatocrop,
	drop:ItemID.sweetpotato,
	seed:ItemID.sweetpotato_seed
});



// file: CROPS/turnip.js

CropRegistry.registerWithID("turnipcrop","turnipcrop","turnipcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.turnipcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.turnipcrop,
	drop:ItemID.turnip,
	seed:ItemID.turnip_seed
});




// file: CROPS/peanut.js

CropRegistry.registerWithID("peanutcrop","peanutcrop","peanutcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.peanutcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.peanutcrop,
	drop:ItemID.peanut,
	seed:ItemID.peanut_seed
});



// file: CROPS/rye.js

CropRegistry.registerWithID("ryecrop","ryecrop","ryecrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.ryecrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.ryecrop,
	drop:ItemID.rye,
	seed:ItemID.rye_seed
});




// file: CROPS/zucchini.js

CropRegistry.registerWithID("zucchinicrop","zucchinicrop","zucchinicrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.zucchinicrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.zucchinicrop,
	drop:ItemID.zucchini,
	seed:ItemID.zucchini_seed
});




// file: CROPS/barley.js

CropRegistry.registerWithID("barleycrop","barleycrop","barleycrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.barleycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.barleycrop,
	drop:ItemID.barley,
	seed:ItemID.barley_seed
});




// file: CROPS/oats.js

CropRegistry.registerWithID("oatscrop","oatscrop","oatscrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.oatscrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.oatscrop,
	drop:ItemID.oats,
	seed:ItemID.oats_seed
});




// file: CROPS/wintersquash.js

CropRegistry.registerWithID("wintersquashcrop","wintersquashcrop","wintersquashcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.wintersquashcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.wintersquashcrop,
	drop:ItemID.wintersquash,
	seed:ItemID.wintersquash_seed
});




// file: CROPS/tealeaf.js

CropRegistry.registerWithID("tealeafcrop","tealeafcrop","tealeafcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.tealeafcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.tealeafcrop,
	drop:ItemID.tealeaf,
	seed:ItemID.tealeaf_seed
});



// file: CROPS/beet.js

CropRegistry.registerWithID("beetcrop","beetcrop","beetcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.beetcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.beetcrop,
	drop:ItemID.beet,
	seed:ItemID.beet_seed
});




