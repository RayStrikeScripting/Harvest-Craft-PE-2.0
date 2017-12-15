/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 72
*/



// file: OTHER/banner.js

/*  __     __                     _______    ___               ____  _________      ________    __________________
   |  |   |  |        _          |   ___  \  \   \            /   / |         |   /   ___   \  |                  |
   |  |   |  |       / \         |  /    \ |  |   |          |   |  |   ______|  |   |    \  | |______      ______|
   |  |   |  |      |   |        |  |    | |   \   \        /   /   |  |          \   \    |_/        |    |
   |  |___|  |     /  __ \       |  \____/ /    |   |      |   |    |  |______     \   \              |    |
   |         |    |   ||  |      |      __/      \   \    /   /     |         |     \   \             |    |
   |   ___   |    /  /  \  \     |  |\  \         |   |  |   |      |   ______|      \   \            |    |
   |  |   |  |   |   \__/   |    |  | \  \         \   \/   /       |  |         ____ \   \           |    |
   |  |   |  |   /    ___    \   |  |  \  \         |      |        |  |______  |   /  \   \          |    |
   |  |   |  |  |    /   \    |  |  |   \  \         \    /         |         |  \  \___\   \         |    |            
   |__|   |__|  /___|     |___\  |__|    \__\         |__|          |_________|   \_________/         |____|  
*/




// file: OTHER/header.js

Callback.addCallback("LevelLoaded", function(){
	Game.message(ChatColor.GREEN + "HarvestCraft Pe v2.3 by Nikolay Savenko");
});	




// file: API/HarvestAPI.js

﻿importLib("PlantModel", "*");
importLib("rnd_Lib", "*");
importLib("Harvest_Core", "*");

var rrr = Random.Int(1,3);
var rrd = Random.Int(1,2);

var cropPROTO = {
	defaultValues: {
		age: 0,
		fruit:280
	},	 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)!=60){
			World.destroyBlock(this.x, this.y, this.z, false);
		}	
		var number = __config__.access("other.plantAge");
		if(this.data.age<2){  
			if(Math.random()<number){
				this.data.age++;
				World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),this.data.age);
				Debug.m("age++ and now are "+this.data.age);
			}
		}	
	},
	created:function(){
		this.data.fruit = CropRegistry.cropsDrop[World.getBlockID(this.x,this.y,this.z)];
	},
	click: function(id, count, data, coords){
		if((id==351)&&(data==15)){
			if(this.data.age==2){
				this.data.age=0;
				Harvest.dropFruit(this.data.fruit,this.x,this.y,this.z);	
				World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),this.data.age);
			}
			else{
				this.data.age++;
				World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),this.data.age);
			}
		}
		else{
			if(this.data.age==2){
				this.data.age=0;
				Harvest.dropFruit(this.data.fruit,this.x,this.y,this.z);
				World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),this.data.age);
			}
		}
	} 	
};

var fruitPROTO = {
	defaultValues: {
		age: 0,
		fruit:280
	},	 	
	tick:function(){
		if(World.getBlockID(this.x,this.y+1,this.z)!=18){
			World.destroyBlock(this.x, this.y, this.z, false);
		}	
		var number = __config__.access("other.treeAge");
		if((Math.random()<number)&&(this.data.age<2)){   
			this.data.age++;
			World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),this.data.age);
		}	
	},
	created:function(){
		this.data.fruit = CropRegistry.cropsDrop[World.getBlockID(this.x,this.y,this.z)];
	},
	click: function(id, count, data, coords){
		if((id==351)&&(data==15)){
			if(this.data.age==2){
				this.data.age=0;
				Harvest.dropFruit(this.data.fruit,this.x,this.y,this.z);	
				World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),this.data.age);
			}
			else{
				this.data.age++;
				World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),this.data.age);
			}
		}
		else{
			if(this.data.age==2){
				this.data.age=0;
				Harvest.dropFruit(this.data.fruit,this.x,this.y,this.z);
				World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),this.data.age);
			}
		}
	} 	
};

var gardenPROTO = {
	defaultValues: {
		drop:280
	},
	created:function(){
		this.data.drop = CropRegistry.cropsDrop[World.getBlockID(this.x,this.y,this.z)];
	},
	click: function(id, count, data, coords){
		World.destroyBlock(this.x, this.y, this.z, false);
		Harvest.dropPlant(this.data.drop,this.x,this.y,this.z);
	}
};

var saplingPROTO = {
	tick: function(){
				if (!TREE_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
					World.destroyBlock(this.x, this.y, this.z, true);
				}
				var nnumber = __config__.access("other.treeAge");
				if (Math.random() < nnumber){
					World.destroyBlock(this.x, this.y, this.z, false);
					Harvest.addTree(0,BlockID.appleBlock,4,this.x,this.y-1,this.z);
				}
			},	
			click: function(id, count, data){
				if (id == 351 && data == 15){
					if(Math.random()<0.6){
						Harvest.addTree(0,BlockID.appleBlock,4,this.x,this.y-1,this.z);
					}
					Player.setCarriedItem(id, count - 1, data);
				}
			}
};

var TREE_SAPLING_GROUND_TILES = {
	2: true,
	3: true,
	60: true
};




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
Translation.addTranslation("Harded leather helm", {ru:"Шлем из прочной кожи",zh:"坚硬皮革头盔"});
Translation.addTranslation("Hardened leather chest", {ru:"Кираса из прочной кожи",zh:"坚硬皮革胸甲"});
Translation.addTranslation("Harded leather leggins", {ru:"Поножи из прочной кожи",zh:"坚硬皮革护腿"});
Translation.addTranslation("Hardened leather boots", {ru:"Ботинки из прочной кожи",zh:"坚硬皮革鞋子"});
Translation.addTranslation("Grain bait", {ru: "Семечковая приманка"});
Translation.addTranslation("Fruit bait", {ru: "Фруктовая приманка"});
Translation.addTranslation("Veggie bait", {ru: "Овощная приманка"});
Translation.addTranslation("Curryleaf", {ru: "Японское карри"});
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




// file: DEBUG/debugItems.js

﻿/*
IDRegistry.genItemID("Atree");
Item.createItem("Atree", "Spawn Tree", {name: "stick", data: 0});
Item.registerUseFunction("Atree",
 function(coords, item, block){
 Debug.m("Item");	
 Harvest.addTree(0,BlockID.appleBlock,8,coords.x,coords.y,coords.z);
 });
IDRegistry.genItemID("AGE");
Item.createItem("AGE", "AGE", {name: "stick", data: 0});
Item.registerUseFunction("AGE",
 function(coords, item, block){
	if(CropRegistry.cropsIDs[World.getBlockID(coords.x,coords.y,coords.z)]){
		Debug.m("Это растение");
	}
	var te = World.getTileEntity(coords.x,coords.y,coords.z);
	Game.message(te.data.age);
 });
 IDRegistry.genItemID("PROGRESS");
Item.createItem("PROGRESS", "PROGRESS", {name: "stick", data: 0});
Item.registerUseFunction("PROGRESS",
 function(coords, item, block){
	var te = World.getTileEntity(coords.x,coords.y,coords.z);
	Game.message("progress is:"+te.data.progress+";");
 });
IDRegistry.genItemID("data");
Item.createItem("data", "data", {name: "stick", data: 0});
Item.registerUseFunction("data",
 function(coords, item, block){
 Debug.m("ID:"+World.getBlockID(coords.x,coords.y,coords.z));
 Debug.m("DATA:"+World.getBlockData(coords.x,coords.y,coords.z)); 	
 });
 
IDRegistry.genItemID("CandleBerryDbug0");
Item.createItem("CandleBerryDbug0", "candle 0", {name: "stick", data: 0});
Item.registerUseFunction("CandleBerryDbug0",
 function(coords, item, block){
	World.setBlock(coords.x,coords.y,coords.z,BlockID.candleberrycrop,0);
	World.addTileEntity(coords.x,coords.y+1,coords.z);
	Debug.m("crop deployed(0) with item :"+item.id);
 });
 
IDRegistry.genItemID("CandleBerryDbug1");
Item.createItem("CandleBerryDbug1", "candle 1", {name: "stick", data: 0});
Item.registerUseFunction("CandleBerryDbug1",
 function(coords, item, block){
	World.setBlock(coords.x,coords.y1,coords.z,BlockID.candleberrycrop,1);
	World.addTileEntity(coords.x,coords.y+1,coords.z);
	Debug.m("crop deployed(1) with item :"+item.id);
 });
 
IDRegistry.genItemID("CandleBerryDbug2");
Item.createItem("CandleBerryDbug2", "candle 2", {name: "stick", data: 0});
Item.registerUseFunction("CandleBerryDbug2",
 function(coords, item, block){
	World.setBlock(coords.x,coords.y,coords.z,BlockID.candleberrycrop,2);
	World.addTileEntity(coords.x,coords.y+1,coords.z);
	Debug.m("crop deployed(2) with item :"+item.id);
 });*/




// file: ITEMS/tools.js

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

Recipes.addShapeless({id: ItemID.graitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: 295, data: 0},{id: 295, data: 0},{id: 295, data: 0}]);
Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: 260, data: 0},{id: 260, data: 0},{id: 260, data: 0}]);
Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.strawberry, data: 0},{id: ItemID.strawberry, data: 0},{id: ItemID.strawberry, data: 0}]);
Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.raspberry, data: 0},{id: ItemID.raspberry, data: 0},{id: ItemID.raspberry, data: 0}]);
Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.cranberry, data: 0},{id: ItemID.cranberry, data: 0},{id: ItemID.cranberry, data: 0}]);
Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.blueberry, data: 0},{id: ItemID.blueberry, data: 0},{id: ItemID.blueberry, data: 0}]);
Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.blackberry, data: 0},{id: ItemID.blackberry, data: 0},{id: ItemID.blackberry, data: 0}]);
Recipes.addShapeless({id: ItemID.fruitBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.grape, data: 0},{id: ItemID.grape, data: 0},{id: ItemID.grape, data: 0}]);
Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.cucumber, data: 0},{id: ItemID.cucumber, data: 0},{id: ItemID.cucumber, data: 0}]);
Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.onion, data: 0},{id: ItemID.onion, data: 0},{id: ItemID.onion, data: 0}]);
Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.cabbage, data: 0},{id: ItemID.cabbage, data: 0},{id: ItemID.cabbage, data: 0}]);
Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.tomato, data: 0},{id: ItemID.tomato, data: 0},{id: ItemID.tomato, data: 0}]);
Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.bellpepper, data: 0},{id: ItemID.bellpepper, data: 0},{id: ItemID.bellpepper, data: 0}]);
Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.garlic, data: 0},{id: ItemID.garlic, data: 0},{id: ItemID.garlic, data: 0}]);
Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.lettuce, data: 0},{id: ItemID.lettuce, data: 0},{id: ItemID.lettuce, data: 0}]);
Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.peas, data: 0},{id: ItemID.peas, data: 0},{id: ItemID.peas, data: 0}]);
Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.chili_pepper, data: 0},{id: ItemID.chili_pepper, data: 0},{id: ItemID.chili_pepper, data: 0}]);
Recipes.addShapeless({id: ItemID.veggieBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: ItemID.corn, data: 0},{id: ItemID.corn, data: 0},{id: ItemID.corn, data: 0}]);
//Recipes.addShapeless({id: ItemID.fishBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: 349, data: 0},{id: 349 data: 0},{id: 349, data: 0}]);
//Recipes.addShapeless({id: ItemID.fishBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: 460, data: 0},{id: 460 data: 0},{id: 460, data: 0}]);
//Recipes.addShapeless({id: ItemID.fishBait, count: 1, data: 0}, [{id: 287, data: 0}, {id: 461, data: 0},{id: 461 data: 0},{id: 461, data: 0}]);




// file: ITEMS/FOOD/fruits.js

IDRegistry.genItemID("strawberry");
Item.createFoodItem("strawberry", "Strawberry", {name: "strawberry", meta: 0}, {food: 1});
IDRegistry.genItemID("raspberry");
Item.createFoodItem("raspberry", "Raspberry", {name: "raspberry", meta: 0}, {food: 1});
IDRegistry.genItemID("cranberry");
Item.createFoodItem("cranberry", "Cranberry", {name: "cranberry", meta: 0}, {food: 1});
IDRegistry.genItemID("blueberry");
Item.createFoodItem("blueberry", "Blueberry", {name: "blueberry", meta: 0}, {food: 1});
IDRegistry.genItemID("blackberry");
Item.createFoodItem("blackberry", "Blackberry", {name: "blackberry", meta: 0}, {food: 1});
IDRegistry.genItemID("candleberry");
Item.createFoodItem("candleberry", "Candle berry", {name: "candleberryItem", meta: 0}, {food: 1});
IDRegistry.genItemID("grape");
Item.createFoodItem("grape", "Grape", {name: "grape", meta: 0}, {food: 1});
IDRegistry.genItemID("cucumber");
Item.createFoodItem("cucumber", "Cucumber", {name: "cucumber", meta: 0}, {food: 1});
IDRegistry.genItemID("onion");
Item.createFoodItem("onion", "Onion", {name: "onion", meta: 0}, {food: 1});
IDRegistry.genItemID("cabbage");
Item.createFoodItem("cabbage", "Cabbage", {name: "cabbage", meta: 0}, {food: 1});
IDRegistry.genItemID("tomato");
Item.createFoodItem("tomato", "Tomato", {name: "tomato", meta: 0}, {food: 1});
IDRegistry.genItemID("bellpepper");
Item.createFoodItem("bellpepper", "Bellpepper", {name: "bellpepper", meta: 0}, {food: 1});
IDRegistry.genItemID("garlic");
Item.createFoodItem("garlic", "Garlic", {name: "garlic", meta: 0}, {food: 1});
IDRegistry.genItemID("lettuce");
Item.createFoodItem("lettuce", "Lettuce", {name: "lettuce", meta: 0}, {food: 1});
IDRegistry.genItemID("coffee_beans");
Item.createFoodItem("coffee_beans", "Coffee beans", {name: "coffee_beans", meta: 0}, {food: 1});
IDRegistry.genItemID("peas");
Item.createFoodItem("peas", "Peas", {name: "peas", meta: 0}, {food: 1});
IDRegistry.genItemID("chili_pepper");
Item.createFoodItem("chili_pepper", "Chilli pepper", {name: "chili_pepper", meta: 0}, {food: 1});
IDRegistry.genItemID("spice_leaf");
Item.createFoodItem("spice_leaf", "Spice leaf", {name: "spice_leaf", meta: 0}, {food: 1});
IDRegistry.genItemID("corn");
Item.createFoodItem("corn", "Corn", {name: "corn", meta: 0}, {food: 1});
IDRegistry.genItemID("peppercorn");
Item.createFoodItem("peppercorn", "Peppercorn", {name: "pepper_corn", meta: 0}, {food: 1});
IDRegistry.genItemID("curryleaf");
Item.createFoodItem("curryleaf", "Curryleaf", {name: "curryleaf", meta: 0}, {food: 1});




// file: ITEMS/seeds.js

IDRegistry.genItemID("strawberry_seed");
Item.createItem("strawberry_seed", "Strawberry seed", {name: "strawberry_seed", meta: 0});
Recipes.addShapeless({id: ItemID.strawberry_seed, count: 1, data: 0}, [{id: ItemID.strawberry, data: 0}]);

IDRegistry.genItemID("raspberry_seed");
Item.createItem("raspberry_seed", "Raspberry seed", {name: "raspberry_seed", meta: 0});
Recipes.addShapeless({id: ItemID.raspberry_seed, count: 1, data: 0}, [{id: ItemID.raspberry, data: 0}]);

IDRegistry.genItemID("cranberry_seed");
Item.createItem("cranberry_seed", "Cranberry seed", {name: "cranberry_seed", meta: 0});
Recipes.addShapeless({id: ItemID.cranberry_seed, count: 1, data: 0}, [{id: ItemID.cranberry, data: 0}]);

IDRegistry.genItemID("blueberry_seed");
Item.createItem("blueberry_seed", "Blueberry seed", {name: "blueberry_seed", meta: 0});
Recipes.addShapeless({id: ItemID.blueberry_seed, count: 1, data: 0}, [{id: ItemID.blueberry, data: 0}]);

IDRegistry.genItemID("blackberry_seed");
Item.createItem("blackberry_seed", "Blackberry seed", {name: "blackberry_seed", meta: 0});
Recipes.addShapeless({id: ItemID.blackberry_seed, count: 1, data: 0}, [{id: ItemID.blackberry, data: 0}]);

IDRegistry.genItemID("candleberryseed");
Item.createItem("candleberryseed", "Candle berry seed", {name: "candleberryseedItem", meta: 0});
Recipes.addShapeless({id: ItemID.candleberryseed, count: 1, data: 0}, [{id: ItemID.candleberry , data: 0}]);

IDRegistry.genItemID("grape_seed");
Item.createItem("grape_seed", "Grape seed", {name: "grape_seed", meta: 0});
Recipes.addShapeless({id: ItemID.grape_seed, count: 1, data: 0}, [{id: ItemID.grape, data: 0}]);

IDRegistry.genItemID("cucumber_seed");
Item.createItem("cucumber_seed", "Cucumber seed", {name: "cucumber_seed", meta: 0});
Recipes.addShapeless({id: ItemID.cucumber_seed, count: 1, data: 0}, [{id: ItemID.cucumber, data: 0}]);

IDRegistry.genItemID("onion_seed");
Item.createItem("onion_seed", "Onion seed", {name: "onion_seed", meta: 0});
Recipes.addShapeless({id: ItemID.onion_seed, count: 1, data: 0}, [{id: ItemID.onion, data: 0}]);

IDRegistry.genItemID("cabbage_seed");
Item.createItem("cabbage_seed", "Cabbage seed", {name: "cabbage_seed", meta: 0});
Recipes.addShapeless({id: ItemID.cabbage_seed, count: 1, data: 0}, [{id: ItemID.cabbage, data: 0}]);

IDRegistry.genItemID("tomato_seed");
Item.createItem("tomato_seed", "Tomato seed", {name: "tomato_seed", meta: 0});
Recipes.addShapeless({id: ItemID.tomato_seed, count: 1, data: 0}, [{id: ItemID.tomato, data: 0}]);


IDRegistry.genItemID("bellpepper_seed");
Item.createItem("bellpepper_seed", "Bellpepper seed", {name: "bellpepper_seed", meta: 0});
Recipes.addShapeless({id: ItemID.bellpepper_seed, count: 1, data: 0}, [{id: ItemID.bellpepper, data: 0}]);

IDRegistry.genItemID("garlic_seed");
Item.createItem("garlic_seed", "Garlic seed", {name: "garlic_seed", meta: 0});
Recipes.addShapeless({id: ItemID.garlic_seed, count: 1, data: 0}, [{id: ItemID.garlic, data: 0}]);

IDRegistry.genItemID("lettuce_seed");
Item.createItem("lettuce_seed", "Lettuce seed", {name: "lettuce_seed", meta: 0});
Recipes.addShapeless({id: ItemID.lettuce_seed, count: 1, data: 0}, [{id: ItemID.lettuce, data: 0}]);

IDRegistry.genItemID("coffee_seed");
Item.createItem("coffee_seed", "Coffee seed", {name: "coffee_seed", meta: 0});
Recipes.addShapeless({id: ItemID.coffee_seed, count: 1, data: 0}, [{id: ItemID.coffee_beans, data: 0}]);

IDRegistry.genItemID("peas_seed");
Item.createItem("peas_seed", "Peas seed", {name: "peas_seed", meta: 0});
Recipes.addShapeless({id: ItemID.peas_seed, count: 1, data: 0}, [{id: ItemID.peas, data: 0}]);

IDRegistry.genItemID("chili_pepper_seed");
Item.createItem("chili_pepper_seed", "Chilli pepper seed", {name: "chili_pepper_seed", meta: 0});
Recipes.addShapeless({id: ItemID.chili_pepper_seed, count: 1, data: 0}, [{id: ItemID.chili_pepper, data: 0}]);

IDRegistry.genItemID("spice_leaf_seed");
Item.createItem("spice_leaf_seed", "Spice leaf seed", {name: "spice_leaf_seed", meta: 0});
Recipes.addShapeless({id: ItemID.spice_leaf_seed, count: 1, data: 0}, [{id: ItemID.spice_leaf, data: 0}]);

IDRegistry.genItemID("corn_seed");
Item.createItem("corn_seed", "Corn seed", {name: "corn_seed", meta: 0});
Recipes.addShapeless({id: ItemID.corn_seed, count: 1, data: 0}, [{id: ItemID.corn, data: 0}]);

IDRegistry.genItemID("peppercorn_seed");
Item.createItem("peppercorn_seed", "Peppercorn seed", {name: "peppercorn_seed", meta: 0});
Recipes.addShapeless({id: ItemID.peppercorn_seed, count: 1, data: 0}, [{id: ItemID.peppercorn, data: 0}]);

IDRegistry.genItemID("curryleaf_seed");
Item.createItem("curryleaf_seed", "Curryleaf seed", {name: "curryleafseed", meta: 0});
Recipes.addShapeless({id: ItemID.curryleaf_seed, count: 1, data: 0}, [{id: ItemID.curryleaf, data: 0}]);




// file: ITEMS/FOOD/juice.js

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




// file: ITEMS/FOOD/smothie.js

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




// file: ITEMS/FOOD/yogurt.js

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




// file: ITEMS/FOOD/salad.js

IDRegistry.genItemID("beet_salad");
Item.createFoodItem("beet_salad", "Beet salad", {name: "beet_salad", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.beet_salad, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: 457, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.vinegar, data: 0}, {id: ItemID.cheese, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("fruit_salad");
Item.createFoodItem("fruit_salad", "Fruit salad", {name: "fruit_salad", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: ItemID.raspberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: 260, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: ItemID.raspberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: ItemID.cranberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: ItemID.blueberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: ItemID.blackberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fruit_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.strawberry, data: 0}, {id: ItemID.grape, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("spring_salad");
Item.createFoodItem("spring_salad", "Spring salad", {name: "spring_salad", meta: 0}, {food: 9});
Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.cucumber, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.bellpepper, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.tomato, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.peas, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.spring_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.lettuce, data: 0}, {id: 391, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("cucumber_salad");
Item.createFoodItem("cucumber_salad", "Cucumber salad", {name: "cucumber_salad", meta: 0}, {food: 11});
Recipes.addShapeless({id: ItemID.cucumber_salad, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.spring_salad, data: 0}, {id: ItemID.cucumber, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.cutting_board){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("ceasar_salade");
Item.createFoodItem("ceasar_salade", "Ceasar salade", {name: "ceasar_salade", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.ceasar_salade, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.toast, data: 0}, {id: ItemID.cheese, data: 0}, {id: ItemID.garlic, data: 0}, {id: ItemID.black_pepper, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});




// file: ITEMS/FOOD/meat.js

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




// file: ITEMS/FOOD/food.js

IDRegistry.genItemID("black_pepper");
Item.createItem("black_pepper", "Black pepper", {name: "black_pepper", meta: 0});
Recipes.addShapeless({id: ItemID.black_pepper, count: 1, data: 0}, [{id: ItemID.mortar_bowl, data: 0}, {id: ItemID.peppercorn, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mortar_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("toast");
Item.createFoodItem("toast", "Toast", {name: "toast", meta: 0}, {food: 7});
Recipes.addFurnace(297, ItemID.toast, 0);

IDRegistry.genItemID("cocoa_powder");
Item.createItem("cocoa_powder", "Cocoa powder", {name: "cocoa_powder", meta: 0});
Recipes.addShapeless({id: ItemID.cocoa_powder, count: 1, data: 0}, [{id: ItemID.mortar_bowl, data: 0}, {id: 351, data: 3}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mortar_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});
IDRegistry.genItemID("chocolate_milk");
Item.createFoodItem("chocolate_milk", "Chocolate milk", {name: "chocolate_milk", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.chocolate_milk, count: 1, data: 0}, [{id: ItemID.cocoa_powder, data: 0}, {id: 325, data: 1}]);
Recipes.addShapeless({id: ItemID.chocolate_milk, count: 1, data: 0}, [{id: ItemID.cocoa_powder, data: 0}, {id: ItemID.fresh_milk, data: 0}]);

IDRegistry.genItemID("espresso");
Item.createFoodItem("espresso", "Espresso", {name: "espresso", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.espresso, count: 1, data: 0}, [{id: ItemID.coffee_beans, data: 0}, {id: ItemID.coffee_beans, data: 0}, {id: ItemID.coffee_beans, data: 0}, {id: 353, data: 0}]);

IDRegistry.genItemID("hot_chocolate");
Item.createFoodItem("hot_chocolate", "Hot chocolate", {name: "hot_chocolate", meta: 0}, {food: 2});
Recipes.addShapeless({id: ItemID.hot_chocolate, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: ItemID.cocoa_powder, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("vinegar");
Item.createItem("vinegar", "Vinegar", {name: "vinegar", meta: 0});
Recipes.addShapeless({id: ItemID.vinegar, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.grape_juice, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("cheese");
Item.createFoodItem("cheese", "Cheese", {name: "cheese", meta: 0}, {food: 2});
Recipes.addShapeless({id: ItemID.cheese, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: ItemID.salt, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
//BlockID.pomidor
//BlockID.ogurec
IDRegistry.genItemID("stock");
Item.createFoodItem("stock", "Stock", {name: "stock", meta: 0}, {food: 3});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 352, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 363, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 319, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 423, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 411, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 365, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.corn, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.tomato, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.cucumber, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.cabbage, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.bellpepper, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.peas, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 86, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.stock, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 392, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("pot_roast");
Item.createFoodItem("pot_roast", "Pot roast", {name: "pot_roast", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.pot_roast, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 363, data: 0}, {id: 393, data: 0}, {id: 391, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("vegetable_soup");
Item.createFoodItem("vegetable_soup", "Vegetable soup", {name: "vegetable_soup", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.vegetable_soup, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 40, data: 0}, {id: 393, data: 0}, {id: 391, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.vegetable_soup, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 39, data: 0}, {id: 393, data: 0}, {id: 391, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("heavy_cream");
Item.createItem("heavy_cream", "Heavy cream", {name: "heavy_cream", meta: 0});
Recipes.addShapeless({id: ItemID.heavy_cream, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: 352, data: 1}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl && field[i].id != 352){
			api.decreaseFieldSlot(i);
		}
		else{
			field[i].data = 0
		}
	}
});
Recipes.addShapeless({id: ItemID.heavy_cream, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.fresh_milk, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("pumpkin_soup");
Item.createFoodItem("pumpkin_soup", "Pumpkin soup", {name: "pumpkin_soup", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.pumpkin_soup, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 86, data: 0}, {id: ItemID.heavy_cream, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("cornflakes");
Item.createFoodItem("cornflakes", "Cornflakes", {name: "cornflakes", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.cornflakes, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: ItemID.corn, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("fried_egg");
Item.createFoodItem("fried_egg", "Fried egg", {name: "fried_egg", meta: 0}, {food: 4});
Recipes.addShapeless({id: ItemID.fried_egg, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 344, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("boiled_egg");
Item.createFoodItem("boiled_egg", "Boiled egg", {name: "boiled_egg", meta: 0}, {food: 2});
Recipes.addShapeless({id: ItemID.boiled_egg, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 344, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("pancakes");
Item.createFoodItem("pancakes", "Pancakes", {name: "pancakes", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.pancakes, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: 344, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.pancakes, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: ItemID.flour, data: 0}, {id: 325, data: 1}, {id: 344, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
		else{
			field[i].data = 0
		}
	}
});

IDRegistry.genItemID("dough");
Item.createItem("dough", "Dough", {name: "dough", meta: 0});
Recipes.addShapeless({id: ItemID.dough, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.fresh_water, data: 0}, {id: ItemID.salt, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.dough, count: 1, data: 0}, [{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.flour, data: 0}, {id: 325, data: 8}, {id: ItemID.salt, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.mixing_bowl){
			api.decreaseFieldSlot(i);
		}
		else{
			field[i].data = 0
		}
	}
});

IDRegistry.genItemID("cranberry_bar");
Item.createFoodItem("cranberry_bar", "Cranberry bar", {name: "cranberry_bar", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.cranberry_bar, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.cranberry, data: 0}, {id: 353, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("pizza");
Item.createFoodItem("pizza", "Pizza", {name: "pizza", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.pizza, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: ItemID.dough, data: 0}, {id: ItemID.tomato, data: 0}, {id: 319, data: 0}, {id: ItemID.cheese, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("fries");
Item.createFoodItem("fries", "Fries", {name: "fries", meta: 0}, {food: 4});
Recipes.addShapeless({id: ItemID.fries, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: 394, data: 0}, {id: ItemID.salt, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("breaded_porkchop");
Item.createFoodItem("breaded_porkchop", "Breaded porkchop", {name: "breaded_porkchop", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.breaded_porkchop, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 319, data: 0}, {id: ItemID.flour, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("butter");
Item.createItem("butter", "Butter", {name: "butter", meta: 0});
Recipes.addShapeless({id: ItemID.butter, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: ItemID.heavy_cream, data: 0}, {id: ItemID.salt, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("hot_wings");
Item.createFoodItem("hot_wings", "Hot wings", {name: "hot_wings", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.hot_wings, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 366, data: 0}, {id: ItemID.chili_pepper, data: 0}, {id: ItemID.butter, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("mayo");
Item.createFoodItem("mayo", "Mayo", {name: "mayo", meta: 0});
Recipes.addShapeless({id: ItemID.mayo, count: 1, data: 0}, [{id: ItemID.juicer, data: 0}, {id: 344, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.juicer){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("fish_dinner");
Item.createFoodItem("fish_dinner", "Fish dinner", {name: "fish_dinner", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.fish_dinner, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 349, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.mayo, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.fish_dinner, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 460, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.mayo, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("potato_cakes");
Item.createFoodItem("potato_cakes", "Potato cakes", {name: "potato_cakes", meta: 0}, {food: 7});
Recipes.addShapeless({id: ItemID.potato_cakes, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 392, data: 0}, {id: ItemID.butter, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("hearty_breakfast");
Item.createFoodItem("hearty_breakfast", "Hearty breakfast", {name: "hearty_breakfast", meta: 0}, {food: 18});
Recipes.addShapeless({id: ItemID.hearty_breakfast, count: 1, data: 0}, [{id: ItemID.fried_egg, data: 0}, {id: 320, data: 0}, {id: ItemID.potato_cakes, data: 0}, {id: ItemID.toast, data: 0}, {id: ItemID.grape_juice, data: 0}]);

IDRegistry.genItemID("steak_and_chips");
Item.createFoodItem("steak_and_chips", "Steak and chips", {name: "steak_and_chips", meta: 0}, {food: 12});
Recipes.addShapeless({id: ItemID.steak_and_chips, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: 363, data: 0}, {id: ItemID.fries, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("roast_chicken");
Item.createFoodItem("roast_chicken", "Roast chicken", {name: "roast_chicken", meta: 0}, {food: 9});
Recipes.addShapeless({id: ItemID.roast_chicken, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: 366, data: 0}, {id: ItemID.salt, data: 0}, {id: ItemID.black_pepper, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("roast_potatoes");
Item.createFoodItem("roast_potatoes", "Roast potatoes", {name: "roast_potatoes", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.roast_potatoes, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: 392, data: 0}, {id: ItemID.salt, data: 0}, {id: ItemID.black_pepper, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("sunday_roast");
Item.createFoodItem("sunday_roast", "Sunday roast", {name: "sunday_roast", meta: 0}, {food: 14});
Recipes.addShapeless({id: ItemID.sunday_roast, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: ItemID.roast_chicken, data: 0}, {id: ItemID.roast_potatoes, data: 0}, {id: ItemID.lettuce, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("lamb_with_mint_sauce");
Item.createFoodItem("lamb_with_mint_sauce", "Lamb with mint sauce", {name: "lamb_with_mint_sauce", meta: 0}, {food: 11});
Recipes.addShapeless({id: ItemID.lamb_with_mint_sauce, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: 423, data: 0}, {id: ItemID.spice_leaf, data: 0}, {id: ItemID.vinegar, data: 0}, {id: 353, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});


IDRegistry.genItemID("meaty_stew");
Item.createFoodItem("meaty_stew", "Meaty stew", {name: "meaty_stew", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.meaty_stew, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 363, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.meaty_stew, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 319, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.meaty_stew, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 423, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.meaty_stew, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 363, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.meaty_stew, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 411, data: 0}, {id: ItemID.flour, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("chocolate_bar");
Item.createFoodItem("chocolate_bar", "Chocolate bar", {name: "chocolate_bar", meta: 0}, {food: 5});
Recipes.addShapeless({id: ItemID.chocolate_bar, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: ItemID.cocoa_powder, data: 0}, {id: ItemID.butter, data: 0}, {id: ItemID.fresh_milk, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.chocolate_bar, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: ItemID.cocoa_powder, data: 0}, {id: ItemID.butter, data: 0}, {id: 325, data: 1}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
		else{
			field[i].data = 0
		}
	}
});

IDRegistry.genItemID("chaos_cookie");
Item.createFoodItem("chaos_cookie", "Chaos cookie", {name: "chaos_cookie", meta: 0}, {food: 4});
Recipes.addShapeless({id: ItemID.chaos_cookie, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: ItemID.chocolate_bar, data: 0}, {id: ItemID.flour, data: 0}, {id: 352, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("blueberry_pie");
Item.createFoodItem("blueberry_pie", "Blueberry pie", {name: "blueberry_pie", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.blueberry_pie, count: 1, data: 0}, [{id: ItemID.bakeware, data: 0}, {id: ItemID.blueberry, data: 0}, {id: ItemID.dough, data: 0}, {id: 353, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.bakeware){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("waffles");
Item.createFoodItem("waffles", "Waffles", {name: "waffles", meta: 0}, {food: 9});
Recipes.addShapeless({id: ItemID.blueberry_pie, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: ItemID.flour, data: 0}, {id: 344, data: 0}, {id: ItemID.butter, data: 0}, {id: ItemID.fresh_milk, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
	}
});
Recipes.addShapeless({id: ItemID.blueberry_pie, count: 1, data: 0}, [{id: ItemID.skillet, data: 0}, {id: ItemID.flour, data: 0}, {id: 344, data: 0}, {id: ItemID.butter, data: 0}, {id: 325, data: 1}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.skillet){
			api.decreaseFieldSlot(i);
		}
		else{
			field[i].data = 0
		}
	}
});

IDRegistry.genItemID("fresh_water"); 
Item.createItem("fresh_water", "Fresh water", {name: "fresh_water", meta: 0}); 
Recipes.addShapeless({id: ItemID.fresh_water, count: 1, data: 0}, [{id: 325, data: 8}], function(api, field, result){ 
	for (var i in field){ 
		if (field[i].id != 325){ 
			api.decreaseFieldSlot(i); 
		} 
		else{
			field[i].data = 0
		}
	} 
});

IDRegistry.genItemID("fresh_milk");
Item.createItem("fresh_milk", "Fresh milk", {name: "fresh_milk", meta: 0});
Recipes.addShapeless({id: ItemID.fresh_milk, count: 4, data: 0}, [{id: 325, data: 1}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != 325){
			api.decreaseFieldSlot(i);
		}
		else{
			field[i].data = 0
		}
	}
});

IDRegistry.genItemID("salt");
Item.createItem("salt", "Salt", {name: "salt", meta: 0});
/*Recipes.addShapeless({id: ItemID.salt, count: 1, data: 0}, [{id: ItemID.fresh_water, data: 0}, {id: ItemID.pot, data: 0}], function(api, field, result){ 
	for (var i in field){ 
		if (field[i].id != pot){ 
			api.decreaseFieldSlot(i); 
		}
	} 
});*/

IDRegistry.genItemID("flour");
Item.createItem("flour", "Flour", {name: "flour", meta: 0});
Recipes.addShapeless({id: ItemID.flour, count: 1, data: 0}, [{id: ItemID.mortar_bowl, data: 0}, {id: 394, data: 0}], function(api, field, result){ 
	for (var i in field){ 
		if (field[i].id != mortar_bowl){ 
			api.decreaseFieldSlot(i); 
		}
	} 
});
Recipes.addShapeless({id: ItemID.flour, count: 1, data: 0}, [{id: ItemID.mortar_bowl, data: 0}, {id: 296, data: 0}], function(api, field, result){ 
	for (var i in field){ 
		if (field[i].id != mortar_bowl){ 
			api.decreaseFieldSlot(i); 
		}
	} 
});

IDRegistry.genItemID("spidereyesoup");
Item.createFoodItem("spidereyesoup", "Spider Eye Soup", {name: "spidereyesoup", meta: 0}, {food: 8});
Recipes.addShapeless({id: ItemID.spidereyesoup, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: 375, data: 0}, {id: ItemID.stock, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("zombiejerky");
Item.createFoodItem("zombiejerky", "Zombie Jerky", {name: "zombiejerky", meta: 0}, {food: 4});
Recipes.addShapeless({id: ItemID.zombiejerky, count: 1, data: 0}, [{id: ItemID.salt, data: 0}, {id: ItemID.salt, data: 0}, {id: 367, data: 0}]);

IDRegistry.genItemID("currypowder");
Item.createItem("currypowder", "Curry Powder", {name: "currypowder", meta: 0});
Recipes.addShapeless({id: ItemID.currypowder, count: 1, data: 0}, [{id: ItemID.mortar_bowl, data: 0}, {id: ItemID.curryleaf, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.mortar_bowl){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("vindaloo");
Item.createFoodItem("vindaloo", "Vindaloo", {name: "vindaloo", meta: 0}, {food: 10});
Recipes.addShapeless({id: ItemID.vindaloo, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: 363, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});

Recipes.addShapeless({id: ItemID.vindaloo, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: 365, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});

Recipes.addShapeless({id: ItemID.vindaloo, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: 319, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});

Recipes.addShapeless({id: ItemID.vindaloo, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: 411, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});

Recipes.addShapeless({id: ItemID.vindaloo, count: 1, data: 0}, [{id: ItemID.saucepan, data: 0}, {id: 423, data: 0}, {id: ItemID.currypowder, data: 0}, {id: ItemID.butter, data: 0}, {id: 351, data: 0}, {id: ItemID.onion, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genItemID("sausage");
Item.createFoodItem("sausage", "Sausage", {name: "sausage", meta: 0}, {food: 6});
Recipes.addShapeless({id: ItemID.sausage, count: 1, data: 0}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.salt, data: 0}, {id: ItemID.currypowder, data: 0}, {id: 363, data: 0}], function(api, field, result){
	for (var i in field){
		if (field[i].id != ItemID.saucepan){
			api.decreaseFieldSlot(i);
		}
	}
});




// file: ITEMS/ARMOR/wax.js

﻿IDRegistry.genItemID("pressedWax");
Item.createItem("pressedWax", "Wax", {name: "wax", meta: 0}, {});
Recipes.addShapeless({id: ItemID.pressedWax, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

IDRegistry.genBlockID("pressedWaxBlock"); 
Block.createBlock("pressedWaxBlock", [
	{name: "Pressed wax", texture: [["pressedwax", 0]], inCreative: true}
]);
Recipes.addShaped({id: BlockID.pressedWaxBlock, count: 1, data: 0}, ["bbb", "bbb"," bbb"], [ "b", ItemID.pressedWax, 0]);




// file: ITEMS/ARMOR/leather.js

IDRegistry.genItemID("hardedLeather");
Item.createItem("hardedLeather", "Harded leather", {name: "hardenedleatherItem", meta: 0}, {stack: 64});
Recipes.addShapeless({id: ItemID.hardedLeather, count: 1, data: 0}, [{id: 334, data: 0}, {id: ItemID.pressedWax, data: 0}]);




// file: ITEMS/ARMOR/helm.js

IDRegistry.genItemID("hardenedLeatherHelm");
Item.createArmorItem("hardenedLeatherHelm", "Harded leather helm", {name: "hardenedleatherhelmItem"}, {type: "helmet", armor: 2, durability: 149, texture: "armor/hardenedleather_1.png"});
Recipes.addShaped({id: ItemID.hardenedLeatherHelm, count: 1, data: 0}, ["aaa", " a a"], ["a", ItemID.hardedLeather, 0]);




// file: ITEMS/ARMOR/chest.js

IDRegistry.genItemID("hardenedLeatherChest");
Item.createArmorItem("hardenedLeatherChest", "Hardened leather chest", {name: "hardenedleatherchestItem"}, {type: "chestplate", armor: 6, durability: 216, texture: "armor/hardenedleather_1.png"});
Callback.addCallback("PostLoaded",function(){
Recipes.addShaped({id: ItemID.hardenedLeatherChest, count: 1, data: 0}, ["a a", " aaa"," aaa"], ["a", ItemID.hardedLeather, 0]);
});




// file: ITEMS/ARMOR/leggins.js

IDRegistry.genItemID("hardenedLeatherLeggings");
Item.createArmorItem("hardenedLeatherLeggings", "Harded leather leggins", {name: "hardenedleatherleggingsItem"}, {type: "leggings", armor: 5, durability: 203, texture: "hardenedleather_2"});
Recipes.addShaped({id: ItemID.hardenedLeatherLeggings, count: 1, data: 0}, ["aaa", " a a"," a a"], ["a", ItemID.hardedLeather, 0]);




// file: ITEMS/ARMOR/foots.js

IDRegistry.genItemID("hardenedLeatherBoots");
Item.createArmorItem("hardenedLeatherBoots", "Hardened leather boots", {name: "hardenedleatherbootsItem"}, {type: "boots", armor: 2, durability: 176, texture: "armor/hardenedleather_1.png"});
Recipes.addShaped({id: ItemID.hardenedLeatherBoots, count: 1, data: 0}, ["   ", " a a"," a a"], ["a", ItemID.hardedLeather, 0]);




// file: ITEMS/candles.js

for(var i = 0;i<16;i++){
	IDRegistry.genItemID("candleItem"+i);
	Item.createItem("candleItem"+i, "Candle", {name: "candle", meta: i},{});
};
Item.registerUseFunction("candleItem1", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,1);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem1, item.count - 1, 0)
});
Item.registerUseFunction("candleItem2", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,2);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem2, item.count - 1, 0)
});
Item.registerUseFunction("candleItem3", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,3);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem3, item.count - 1, 0)
});
Item.registerUseFunction("candleItem4", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,4);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem4, item.count - 1, 0)
});
Item.registerUseFunction("candleItem5", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,5);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem5, item.count - 1, 0)
});
Item.registerUseFunction("candleItem6", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,6);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem6, item.count - 1, 0)
});
Item.registerUseFunction("candleItem7", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,7);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem7, item.count - 1, 0)
});
Item.registerUseFunction("candleItem8", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,8);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem8, item.count - 1, 0)
});
Item.registerUseFunction("candleItem9", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,9);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem9, item.count - 1, 0)
});
Item.registerUseFunction("candleItem10", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,10);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem10, item.count - 1, 0)
});
Item.registerUseFunction("candleItem11", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,11);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem11, item.count - 1, 0)
});
Item.registerUseFunction("candleItem12", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,12);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem12, item.count - 1, 0)
});
Item.registerUseFunction("candleItem13", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,13);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem13, item.count - 1, 0)
});
Item.registerUseFunction("candleItem14", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,14);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem14, item.count - 1, 0)
});
Item.registerUseFunction("candleItem15", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,15);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem15, item.count - 1, 0)
});
Item.registerUseFunction("candleItem0", function(coords, item, block){
	World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candle ,0);
	World.addTileEntity(coords.x, coords.y+1, coords.z);
	Player.setCarriedItem(ItemID.candleItem0, item.count - 1, 0)
});

Recipes.addShapeless({id: ItemID.candleItem0, count: 4, data: 0}, [{id: 287, data: 0},{id: ItemID.pressedWax, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem1, count: 4, data: 0}, [{id: 351, data: 14},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem2, count: 4, data: 0}, [{id: 351, data: 13},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem3, count: 4, data: 0}, [{id: 351, data: 12},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem4, count: 4, data: 0}, [{id: 351, data: 11},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem5, count: 4, data: 0}, [{id: 351, data: 10},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem6, count: 4, data: 0}, [{id: 351, data: 9},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem7, count: 4, data: 0}, [{id: 351, data: 8},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem8, count: 4, data: 0}, [{id: 351, data: 7},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem9, count: 4, data: 0}, [{id: 351, data: 6},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem10, count: 4, data: 0}, [{id: 351, data: 5},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem11, count: 4, data: 0}, [{id: 351, data: 4},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem12, count: 4, data: 0}, [{id: 351, data: 3},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem13, count: 4, data: 0}, [{id: 351, data: 2},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem14, count: 4, data: 0}, [{id: 351, data: 1},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);
Recipes.addShapeless({id: ItemID.candleItem15, count: 4, data: 0}, [{id: 351, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0},{id: ItemID.candleItem0, data: 0}]);




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

IDRegistry.genBlockID("sink_0"); 
IDRegistry.genBlockID("sink_1"); 
IDRegistry.genBlockID("sink_2"); 
IDRegistry.genBlockID("sink_3"); 
Block.createBlock("sink_0", [
{name: "Sink", texture: [["sinkbottom", 0], ["sinktop", 0], ["sinkside", 0], ["sinkside", 0], ["sinkside", 0], ["sinkside", 0]], inCreative: true}
]);
Block.createBlock("sink_1", [
{name: "Sink 1", texture: [["sinkbottom", 1], ["sinktop", 1], ["sinkside", 1], ["sinkside", 1], ["sinkside", 1], ["sinkside", 1]], inCreative: true}
]);
Block.createBlock("sink_2", [
{name: "Sink 2", texture: [["sinkbottom", 2], ["sinktop", 2], ["sinkside", 2], ["sinkside", 2], ["sinkside", 2], ["sinkside", 2]], inCreative: true}
]);
Block.createBlock("sink_3", [
{name: "Sink 3", texture: [["sinkbottom", 3], ["sinktop", 3], ["sinkside", 3], ["sinkside", 3], ["sinkside", 3], ["sinkside", 3]], inCreative: true}
]);   
 Callback.addCallback("ItemUse", function(coords,item,block){
 var pl = Player.getCarriedItem();   if((pl.id==325)){
 switch(block.id){
 case BlockID.sink_0:
 case BlockID.sink_1:
 case BlockID.sink_2:
 case BlockID.sink_3:
    Player.setCarriedItem(item.id, item.count - 1, item.data);
  Player.addItemToInventory(325, 1, 8);
break;
}}
 } );       
Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: BlockID.sink_0, count: 1, data: 0}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 17, -1]);
	 Recipes.addShaped({id: BlockID.sink_1, count: 1, data: 1}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 1, -1]);
	 Recipes.addShaped({id: BlockID.sink_2, count: 1, data: 2}, [
		"ara",
		"ara",
		"ara"
	], ["a", 265, 0, 'r', 82, 0]);
	 Recipes.addShaped({id: BlockID.sink_3, count: 1, data: 3}, [
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
Recipes.addShaped({id: BlockID.animalTrap, count: 1, data: 0}, ["aba", "sds","asa"], ["a", 280, 0, "b", 96, 0,"d",54,0,"s",287,0]);




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
//UI.testUI(animalTrapGUI); 




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




// file: BLOCKS/CANDLES/block.js

var candleVariations = [];
for(var e = 0;e<16;e++){
	candleVariations.push({name: "Candle", texture: [["empty", 0],["empty", 0],["candle", e]], inCreative: false})
};
IDRegistry.genBlockID("candle"); 
Block.createBlock("candle", candleVariations,BLOCK_TYPE_CANDLE);

PlantModel.tree(BlockID.candle,0);

Block.registerDropFunction("candle", function(coords, blockID, blockData, level){
	switch(blockData){
		case 0 : 
			return[[ ItemID.candleItem0,1,0 ]];
				break;
		case 1 : 
			return[[ ItemID.candleItem1,1,0 ]];
				break;
		case 2 : 
			return[[ ItemID.candleItem2,1,0 ]];
				break;
		case 3 : 
			return[[ ItemID.candleItem3,1,0 ]];
				break;
		case 4 : 
			return[[ ItemID.candleItem4,1,0 ]];
				break;
		case 5 : 
			return[[ ItemID.candleItem5,1,0 ]];
				break;
		case 6 : 
			return[[ ItemID.candleItem6,1,0 ]];
				break;
		case 7 : 
			return[[ ItemID.candleItem7,1,0 ]];
				break;
		case 8 : 
			return[[ ItemID.candleItem8,1,0 ]];
				break;
		case 9 : 
			return[[ ItemID.candleItem9,1,0 ]];
				break;
		case 10 : 
			return[[ ItemID.candleItem10,1,0 ]];
				break;
		case 11 : 
			return[[ ItemID.candleItem11,1,0 ]];
				break;
		case 12 : 
			return[[ ItemID.candleItem12,1,0 ]];
				break;
		case 13 : 
			return[[ ItemID.candleItem13,1,0 ]];
				break;
		case 14 : 
			return[[ ItemID.candleItem14,1,0 ]];
				break;
		case 15 : 
			return[[ ItemID.candleItem15,1,0 ]];
				break;		
	}
	//return[[ ItemID.candleItem+blockData,1,0 ]];
});




// file: BLOCKS/CANDLES/TileEntity.js

if(__config__.access("debug.TileEntity.other.candle")){
	TileEntity.registerPrototype(BlockID.candle,{
		tick:function(){
			if(Math.random()<__config__.access("other.candleBurning")){
				Particles.addParticle(this.x+0.5, this.y+0.5, this.z+0.5, 14, Random.Float(0.1,0.4), Random.Float(0.1,0.4), Random.Float(0.1,0.4)/*,0*/)
			}
		}
	});
};




// file: GARDENS/BERRYGARDEN/block.js

IDRegistry.genBlockID("berrygarden"); 
Block.createBlock("berrygarden", [
	{name: "Berry garden", texture: [["empty", 0],["empty", 0],["berrygardenBlock", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);

PlantModel.tree(BlockID.berrygarden,0);

CropRegistry.fruitPush(BlockID.berrygarden,ItemID.berryGardenITEM);

Block.registerDropFunction("berrygarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.blackberry,rrd, 0]);
	}
	if(Math.random() < .5){
		drop.push([ItemID.candleberry,rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.strawberry,rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.raspberry,rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.blueberry,rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.cranberry,rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.grape, rrd, 0]);
	}	
	return drop;
});




// file: GARDENS/BERRYGARDEN/item.js

IDRegistry.genItemID("berryGardenITEM");
Item.createItem("berryGardenITEM", "Berry garden", {name: "berrygardenBlock", meta: 0} ,{isTech: false} );
Item.registerUseFunction("berryGardenITEM", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);	
	if (GenerationUtils.isTransparentBlock(tile1.id) && TREE_SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.berrygarden);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});




// file: GARDENS/BERRYGARDEN/TileEntity.js

if(__config__.access("debug.TileEntity.garden.berry")){
	TileEntity.registerPrototype(BlockID.berrygarden,gardenPROTO);
};




// file: GARDENS/GRASSGARDEN/block.js

IDRegistry.genBlockID("grassgarden"); 
Block.createBlock("grassgarden", [
	{name: "Grass garden", texture: [["empty", 0],["empty", 0],["grassgardenBlock", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);

PlantModel.tree(BlockID.grassgarden,0);

CropRegistry.fruitPush(BlockID.grassgarden,ItemID.grassGardenITEM);

Block.registerDropFunction("grassgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.cucumber, rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.onion,rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.cabbage,rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.tomato,rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.bellpepper,rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.lettuce, rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.peas,rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.chilli_pepper,rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.corn,rrd, 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.peppercorn, rrd, 0]);
	}	
	return drop;
});




// file: GARDENS/GRASSGARDEN/item.js

IDRegistry.genItemID("grassGardenITEM");
Item.createItem("grassGardenITEM", "Grass garden", {name: "grassgardenBlock", meta: 0} ,{isTech: false} );
Item.registerUseFunction("grassGardenITEM", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);	
	if (GenerationUtils.isTransparentBlock(tile1.id) && TREE_SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.grassgarden);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});




// file: GARDENS/GRASSGARDEN/TileEntity.js

if(__config__.access("debug.TileEntity.garden.grass")){
	TileEntity.registerPrototype(BlockID.grassgarden,gardenPROTO);
};




// file: GARDENS/HERBGARDEN/block.js

IDRegistry.genBlockID("herbgarden"); 
Block.createBlock("herbgarden", [
	{name: "Herb garden", texture: [["empty", 0],["empty", 0],["herbgardenBlock", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);

PlantModel.tree(BlockID.herbgarden,0);

CropRegistry.fruitPush(BlockID.herbgarden,ItemID.herbGardenITEM);

Block.registerDropFunction("herbgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .8){
		drop.push([ItemID.spice_leaf,rrr, 0]);
	}	
	if(Math.random() < .8){
		drop.push([ItemID.coffee_beans,rrr, 0]);
	}	
	if(Math.random() < .8){
		drop.push([ItemID.garlic,rrr, 0]);
	}	
	return drop;
});




// file: GARDENS/HERBGARDEN/item.js

IDRegistry.genItemID("herbGardenITEM");
Item.createItem("herbGardenITEM", "Herb garden", {name: "herbgardenBlock", meta: 0} ,{isTech: false} );
Item.registerUseFunction("herbGardenITEM", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);	
	if (GenerationUtils.isTransparentBlock(tile1.id) && TREE_SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.herbgarden);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});




// file: GARDENS/HERBGARDEN/TileEntity.js

if(__config__.access("debug.TileEntity.garden.herb")){
	TileEntity.registerPrototype(BlockID.herbgarden,gardenPROTO);
};




// file: GARDENS/CANDLEBERRYGARDEN/block.js

IDRegistry.genBlockID("candleberrygarden"); 
Block.createBlock("candleberrygarden", [
	{name: "Candleberry garden", texture: [["empty", 0],["empty", 0],["candleberrycrop", 2]], inCreative: false}
],BLOCK_TYPE_PLANT);

PlantModel.tree(BlockID.candleberrygarden,0);

CropRegistry.fruitPush(BlockID.candleberrygarden,ItemID.candleberrygardenITEM);

Block.registerDropFunction("candleberrygarden", function(coords, blockID, blockData, level){
	var drop = [];
	drop.push([ItemID.candleberry,rrr, 0]);
	return drop;
});




// file: GARDENS/CANDLEBERRYGARDEN/item.js

IDRegistry.genItemID("candleberrygardenITEM");
Item.createItem("candleberrygardenITEM", "Candleberry garden", {name: "candleberrycrop", meta: 2} ,{isTech: false} );
Item.registerUseFunction("candleberrygardenITEM", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);	
	if (GenerationUtils.isTransparentBlock(tile1.id) && TREE_SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.candleberrygarden);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});




// file: GARDENS/CANDLEBERRYGARDEN/TileEntity.js

if(__config__.access("debug.TileEntity.garden.candleberry")){
	TileEntity.registerPrototype(BlockID.candleberrygarden,gardenPROTO);
};




// file: TREES/APPLE/appleBlock.js

CropRegistry.registerWithID("appleBlock","appleBlock","appleBlock",0);
CropRegistry.fruitPush(BlockID.appleBlock,260);

TileEntity.registerPrototype(BlockID.appleBlock,fruitPROTO);

PlantModel.tree(BlockID.appleBlock,0);

Block.setBlockShape(BlockID.appleBlock, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.999, z: 0.999});




// file: TREES/APPLE/sapling.js

IDRegistry.genItemID("appleSapling");
Item.createItem("appleSapling", "Apple Tree Sapling", {name: "appleSapling", data: 0});
Item.registerUseFunction("appleSapling", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);
	
	if (GenerationUtils.isTransparentBlock(tile1.id) && TREE_SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.appleTreeSapling);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});

PlantModel.tree(BlockID.appleTreeSapling,0);

IDRegistry.genItemID("appleMini");
Item.createItem("appleMini", " Apple", {name: "appleBlock", meta: 0},{});

Item.registerUseFunction("appleMini", function(coords, item, tile){
	var place = coords.relative;
	World.setBlock(place.x,place.y,place.z,BlockID.appleBlock);
	World.addTileEntity(place.x,place.y,place.z);
});

IDRegistry.genBlockID("appleTreeSapling");
Block.createBlock("appleTreeSapling", [
	{name: "Apple Tree Sapling", texture: [["empty", 0], ["empty", 0], ["appleSapling", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);

TileEntity.registerPrototype(BlockID.appleTreeSapling,saplingPROTO);

Harvest.registerDestroy("appleTreeSapling",ItemID.appleSapling);

Callback.addCallback("PostLoaded", function(){
	Recipes.addShaped({id: ItemID.appleSapling, count: 1, data: 0}, [
		"yx",
		"",
		""
	], ['x', 260,0,"y",6,0]);
});




// file: WORLD/grassdrop.js

 var seedsArray = [
 ItemID.candleberryseed,
 ItemID.strawberry_seed,
 ItemID.raspberry_seed,
 ItemID.cranberry_seed,
 ItemID.blueberry_seed,
 ItemID.blackberry_seed,
 ItemID.grape_seed,
 ItemID.cucumber_seed,
 ItemID.onion_seed,
 ItemID.cabbage_seed,
 ItemID.tomato_seed,
 ItemID.bellpepper_seed,
 ItemID.garlic_seed,
 ItemID.lettuce_seed,
 ItemID.coffee_seed,
 ItemID.peas_seed,
 ItemID.chili_pepper_seed,
 ItemID.spice_leaf_seed,
 ItemID.corn_seed,
 ItemID.peppercorn_seed
 ];
 Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(((block.id==31)&&(block.data==1)||(block.id==175)&&(block.data==10)||(block.data==2))){
		var nnn =__config__.access("other.grassDrop");
		var nn = Random.Int(0,nnn);
		if(nn<seedsArray.length){  
			Harvest.dropPlant(seedsArray[nn],coords.x,coords.y,coords.z);
		}
	}
 });
 Callback.addCallback("ItemUse", function(coords, item, block){
 if((block.id==2)&&((item.id==290)||(item.id==291)||(item.id==292)||(item.id==293)||(item.id==293)||(item.id==294))){
	var nn = Random.Int(0,400);
	if(nn<seedsArray.length){  
			Harvest.dropPlant(seedsArray[nn],coords.x,coords.y,coords.z); 
		}
	}
 });




// file: WORLD/GENERATION/GARDENS/biomes.js

var SaltBiomes = [0,24,10];
var BerryGardenBiomes = [1,4, 18, 27, 28,13];
var CandleberryGardenBiomes = [1,4, 18, 27, 28,13];
var DesertGardenBiomes =[2,35,37];
var GourdGardenBiomes = [1,4, 18, 27, 28,13];
var GrassGardenBiomes = [1,4, 18, 27, 28];
var GroundGardenBiomes =[4,4, 18, 27, 28,13];
var HerbGardenBiomes =  [4, 18, 27, 28];
var LeafyGardenBiomes = [4, 18, 27, 28,13];
var MushroomGardenBiomes = [4, 18, 27, 28];
var StalkGardenBiomes = [4, 18, 27, 28];
var TextileGardenBiomes = [4, 18, 27, 28];
var TropicalGardenBiomes = [21, 22, 23, 149, 151,6, 134,35,36];
var WaterGardenBiomes = [24,0];




// file: WORLD/GENERATION/GARDENS/berryGarden.js

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	var nnumber = __config__.access("genNumbers.gardens.berry");
	if(Math.random() <nnumber){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in BerryGardenBiomes ){
			if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.berrygarden, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
			}
		}
	}
});




// file: WORLD/GENERATION/GARDENS/herbGarden.js

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	var nnumber = __config__.access("genNumbers.gardens.herb");
	if(Math.random() <nnumber){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in HerbGardenBiomes ){
			if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.herbgarden , 0);
				 	World.addTileEntity(coords.x, coords.y + 1, coords.z);
				 	
			}
		}
	}
});




// file: WORLD/GENERATION/GARDENS/grassGarden.js

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	var nnumber = __config__.access("genNumbers.gardens.grass");
	if(Math.random() <nnumber){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in GrassGardenBiomes ){
			if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.grassgarden, 0);
				 World.addTileEntity(coords.x, coords.y + 1, coords.z);				 	
			}
		}
	}
});




// file: WORLD/GENERATION/GARDENS/candleberry.js

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	var nnumber = __config__.access("genNumbers.gardens.candleberry");
	if(Math.random() <nnumber){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		for(var id in CandleberryGardenBiomes ){
			if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)){
				World.setBlock(coords.x, coords.y + 1, coords.z, BlockID.candleberryGarden, 0);
				World.addTileEntity(coords.x, coords.y + 1, coords.z);
						
			}
		}
	}
});




// file: WORLD/GENERATION/salt.js

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
	coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
	if(Math.random()< __config__.access("genNumbers.other.salt")){
		 for(var id in SaltBiomes ){
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
	if(Math.random()< __config__.access("genNumbers.other.salt") ){
		if(World.getBlockID(coords.x,coords.y,coords.z)!=0){
			World.setBlock(coords.x, coords.y , coords.z, BlockID.salt, 0);
		}
	}
});




// file: WORLD/GENERATION/TREES/AppleTree.js

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	var nnumber = __config__.access("genNumbers.trees.apple");
	if(Math.random()<nnumber){
		var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
		coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
		if((World.getBlockID(coords.x, coords.y, coords.z) == 2)){			
			Harvest.addTree(0,BlockID.appleBlock,4,this.x,this.y,this.z);
		}
	}
});




// file: CROPS/strawberry.js

CropRegistry.registerWithID("strawberrycrop","strawberrycrop","strawberrycrop",ItemID.strawberry_seed);
CropRegistry.fruitPush(BlockID.strawberrycrop,ItemID.strawberry);

PlantModel.crop(BlockID.strawberrycrop);

TileEntity.registerPrototype(BlockID.strawberrycrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.strawberry_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z,BlockID.strawberrycrop,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.strawberry_seed, item.count - 1, 0);
	}
});




// file: CROPS/raspberry.js

CropRegistry.registerWithID("raspberrycrop","raspberrycrop","raspberry_crop",ItemID.raspberry_seed);
CropRegistry.fruitPush(BlockID.raspberrycrop,ItemID.raspberry);

PlantModel.crop(BlockID.raspberrycrop);

TileEntity.registerPrototype(BlockID.raspberrycrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.raspberry_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.raspberrycrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.raspberry_seed, item.count - 1, 0);
	}
});




// file: CROPS/cranberry.js

CropRegistry.registerWithID("cranberrycrop","cranberrycrop","cranberrycrop",ItemID.cranberry_seed);
CropRegistry.fruitPush(BlockID.cranberrycrop,ItemID.cranberry);

PlantModel.crop(BlockID.cranberrycrop);

TileEntity.registerPrototype(BlockID.cranberrycrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.cranberry_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.cranberrycrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.cranberry_seed, item.count - 1, 0);
	}
});




// file: CROPS/blueberry.js

CropRegistry.registerWithID("blueberrycrop","blueberrycrop","blueberrycrop",ItemID.blueberry_seed);
CropRegistry.fruitPush(BlockID.blueberrycrop,ItemID.blueberry);

PlantModel.crop(BlockID.blueberrycrop);

TileEntity.registerPrototype(BlockID.blueberrycrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.blueberry_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.blueberrycrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.blueberry_seed, item.count - 1, 0);
	}
});




// file: CROPS/blackberry.js

CropRegistry.registerWithID("blackberrycrop","blackberrycrop","blackberrycrop",ItemID.blackberry_seed);
CropRegistry.fruitPush(BlockID.blackberrycrop,ItemID.blackberry);

PlantModel.crop(BlockID.blackberrycrop);

TileEntity.registerPrototype(BlockID.blackberrycrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.blackberry_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.blackberrycrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.blackberry_seed, item.count - 1, 0);
	}
});




// file: CROPS/grape.js

CropRegistry.registerWithID("grapecrop","grapecrop","grapecrop",ItemID.grape_seed);
CropRegistry.fruitPush(BlockID.grapecrop,ItemID.grape);

PlantModel.crop(BlockID.grapecrop);

TileEntity.registerPrototype(BlockID.grapecrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.grape_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.grapecrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.grape_seed, item.count - 1, 0);
	}
});




// file: CROPS/cucumber.js

CropRegistry.registerWithID("cucumbercrop","cucumbercrop","cucumbercrop",ItemID.cucumber_seed);
CropRegistry.fruitPush(BlockID.cucumbercrop,ItemID.cucumber);

PlantModel.crop(BlockID.cucumbercrop);

TileEntity.registerPrototype(BlockID.cucumbercrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.cucumber_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.cucumbercrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.cucumber_seed, item.count - 1, 0);
	}
});




// file: CROPS/onion.js

CropRegistry.registerWithID("onioncrop","onioncrop","onioncrop",ItemID.onion_seed);
CropRegistry.fruitPush(BlockID.onioncrop,ItemID.onion);

PlantModel.crop(BlockID.onioncrop);

TileEntity.registerPrototype(BlockID.onioncrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.onion_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.onioncrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.onion_seed, item.count - 1, 0);
	}
});




// file: CROPS/cabbage.js

CropRegistry.registerWithID("cabbagecrop","cabbagecrop","cabbagecrop",ItemID.cabbage_seed);
CropRegistry.fruitPush(BlockID.cabbagecrop,ItemID.cabbage);

PlantModel.crop(BlockID.cabbagecrop);

TileEntity.registerPrototype(BlockID.cabbagecrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.cabbage_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.cabbagecrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.cabbage_seed, item.count - 1, 0);
	}
});




// file: CROPS/tomato.js

CropRegistry.registerWithID("tomatocrop","tomatocrop","tomatocrop",ItemID.tomato_seed);
CropRegistry.fruitPush(BlockID.tomatocrop,ItemID.tomato);

PlantModel.crop(BlockID.tomatocrop);

TileEntity.registerPrototype(BlockID.tomatocrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.tomato_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.tomatocrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.tomato_seed, item.count - 1, 0);
	}
});




// file: CROPS/garlic.js

CropRegistry.registerWithID("garliccrop","garliccrop","garliccrop",ItemID.garlic_seed);
CropRegistry.fruitPush(BlockID.garliccrop,ItemID.garlic);

PlantModel.crop(BlockID.garliccrop);

TileEntity.registerPrototype(BlockID.garliccrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.garlic_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.garliccrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.garlic_seed, item.count - 1, 0);
	}
});




// file: CROPS/bellpepper.js

CropRegistry.registerWithID("bellpeppercrop","bellpeppercrop","bellpeppercrop",ItemID.bellpepper_seed);
CropRegistry.fruitPush(BlockID.bellpeppercrop,ItemID.bellpepper);

PlantModel.crop(BlockID.bellpeppercrop);

TileEntity.registerPrototype(BlockID.bellpeppercrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.bellpepper_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.bellpeppercrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.bellpepper_seed, item.count - 1, 0);
	}
});




// file: CROPS/lettuce.js

CropRegistry.registerWithID("lettucecrop","lettucecrop","lettucecrop",ItemID.lettuce_seed);
CropRegistry.fruitPush(BlockID.lettucecrop,ItemID.lettuce);

PlantModel.crop(BlockID.lettucecrop);

TileEntity.registerPrototype(BlockID.lettucecrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.lettuce_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.lettucecrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.lettuce_seed, item.count - 1, 0);
	}
});




// file: CROPS/coffeebean.js

CropRegistry.registerWithID("coffeebeancrop","coffeebeancrop","coffeebeancrop",ItemID.coffee_seed);
CropRegistry.fruitPush(BlockID.coffeebeancrop,ItemID.coffee_beans);

PlantModel.crop(BlockID.coffeebeancrop);

TileEntity.registerPrototype(BlockID.coffeebeancrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.coffee_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.coffeebeancrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.coffee_seed, item.count - 1, 0);
	}
});




// file: CROPS/peas.js

CropRegistry.registerWithID("peascrop","peascrop","peascrop",ItemID.peas_seed);
CropRegistry.fruitPush(BlockID.peascrop,ItemID.peas);

PlantModel.crop(BlockID.peascrop);

TileEntity.registerPrototype(BlockID.peascrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.peas_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.peascrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.peas_seed, item.count - 1, 0);
	}
});




// file: CROPS/chilipepper.js

CropRegistry.registerWithID("chilipeppercrop","chilipeppercrop","chilipeppercrop",ItemID.chili_pepper_seed);
CropRegistry.fruitPush(BlockID.chilipeppercrop,ItemID.chili_pepper);

PlantModel.crop(BlockID.chilipeppercrop);

TileEntity.registerPrototype(BlockID.chilipeppercrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.chili_pepper_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.chilipeppercrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.chili_pepper_seed, item.count - 1, 0);
	}
});




// file: CROPS/spiceleaf.js

CropRegistry.registerWithID("spiceleafcrop","spiceleafcrop","spiceleafcrop",ItemID.spice_leaf_seed);
CropRegistry.fruitPush(BlockID.spiceleafcrop,ItemID.spice_leaf_seed);

PlantModel.crop(BlockID.spiceleafcrop);

TileEntity.registerPrototype(BlockID.spiceleafcrop,cropPROTO);

Item.registerUseFunctionForID( ItemID.spice_leaf_seed , function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.spiceleafcrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem( ItemID.spice_leaf_seed , item.count - 1, 0);
	}
});




// file: CROPS/corn.js

CropRegistry.registerWithID("corncrop","corncrop","corncrop",ItemID.corn_seed);
CropRegistry.fruitPush(BlockID.corncrop,ItemID.corn);

PlantModel.crop(BlockID.corncrop);

TileEntity.registerPrototype(BlockID.corncrop,cropPROTO);

Item.registerUseFunctionForID( ItemID.corn_seed , function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.corncrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem( ItemID.corn_seed , item.count - 1, 0);
	}
});




// file: CROPS/peppercorn.js

CropRegistry.registerWithID("peppercorncrop","peppercorncrop","peppercorncrop",ItemID.peppercorn_seed);
CropRegistry.fruitPush(BlockID.peppercorncrop,ItemID.peppercorn);

PlantModel.crop(BlockID.peppercorncrop);

TileEntity.registerPrototype(BlockID.peppercorncrop,cropPROTO);

Item.registerUseFunctionForID( ItemID.peppercorn_seed , function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.peppercorncrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.peppercorn_seed, item.count - 1, 0);
	}
});




// file: CROPS/candleberry.js

﻿CropRegistry.registerWithID("candleberrycrop","candleberrycrop","candleberrycrop",ItemID.candleberryseed);
CropRegistry.fruitPush(BlockID.candleberrycrop,ItemID.candleberry);

PlantModel.crop(BlockID.candleberrycrop);

TileEntity.registerPrototype(BlockID.candleberrycrop,cropPROTO);

Item.registerUseFunctionForID(ItemID.candleberryseed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candleberrycrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleberryseed, item.count - 1, 0);
	}
});




// file: CROPS/curryleaf.js

CropRegistry.registerWithID("curryleaf","curryleaf","curryleafcrop",ItemID.curryleaf_seed);
CropRegistry.fruitPush(BlockID.curryleaf,ItemID.curryleaf);

PlantModel.crop(BlockID.curryleaf);

TileEntity.registerPrototype(BlockID.curryleaf,cropPROTO);

Item.registerUseFunctionForID(ItemID.curryleaf_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.curryleaf ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.curryleaf_seed, item.count - 1, 0);
	}
});




