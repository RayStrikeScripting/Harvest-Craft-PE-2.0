/*
BUILD INFO:
  dir: dev
  target: main.js
  files: 63
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
	Game.message(ChatColor.GREEN + "HarvestCraft Pe v2.0.1");
	Game.message(ChatColor.WHITE + "Author: MrMacflame, Edited by: Nikolay Savenko");
	Game.message(ChatColor.WHITE + " https://vk.com/raystrike ");
});	




// file: API/HarvestAPI.js

var Harvest = {
registerDrop:function(bl,itm){
Block.registerDropFunction(bl, function(coords, blockID, blockData, level){
return[[ itm, 1 + parseInt(Math.random() * 3),0 ]];
});
},
registerDestroy:function(bl,itm){
Block.registerDropFunction(bl, function(coords, blockID, blockData, level){
return[[ itm, 1,0 ]];
});
},
	animationSaplingSet: function(Item,ani1,ani2){		
		ani1.describeItem({
			id: Item,
			count: 1,
			data: 0,
			rotation: "x",
			size:1
		});
		ani1.load();		
		ani2.describeItem({
			id: Item,
			count: 1,
			data: 0,
			rotation: "z",
			size:1
		});
		ani2.load();
	},
	plantShape:function(id){
	Block.setBlockShape( id , {x: 0.1, y: 0, z: 0.1}, {x: 0.9, y: 0.5, z: 0.9});
	},
	dropFruit:function(id,x,y,z){
	 Entity.setVelocity(
		World.drop(	x ,	y,	z ,	id, 1 + parseInt(Math.random() * 3), 0	),
		(Math.random()*0.4),
		(Math.random()*0.4),
		(Math.random()*0.4)
		);
	},
	dropPlant:function(id,x,y,z){
	 		Entity.setVelocity(
			World.drop(	x ,		y,		z ,		id, 1 , 0	),
(Math.random()*0.4),
	 (Math.random()*0.4),
		 (Math.random()*0.4)
		);
	},
checkFruit:function(x,y,z,block){   
if((World.getBlockID(x,y-1,z)==0)&&(World.getBlockID(x-1,y-1,z)==0)&&(World.getBlockID(x+1,y-1,z)==0)&&(World.getBlockID(x,y-1,z-1)==0)&&(World.getBlockID(x,y-1,z+1)==0)){
			World.setBlock(x, y-1, z, block, 0);
			World.addTileEntity(x, y-1, z);
		}
},
	animationPlantDescribe:function(Item,ani1,ani2,ani3,ani4){
	ani1.describeItem({
			id: Item,
			count: 1,
			data: 0,
			rotation: "x",
			size:1
		});
		ani1.load();		
		if( __config__.access("advanced_item_models")==false ){
		ani2.describeItem({
			id: Item,
			count: 1,
			data: 0,
			rotation: "x",
			size:1
		});
		ani2.load(); 
		}
		if(__config__.access("advanced_item_models")==false ){
		 ani3.describeItem({
			id: Item,
			count: 1,
			data: 0,
			rotation: "z",
			size:1
		});
		ani3.load();
		}
		if( __config__.access("advanced_item_models")==false ){
		ani4.describeItem({
			id: Item,
			count: 1,
			data: 0,
			rotation: "z",
			size:1
		});
		ani4.load();
		}
	},
number:function(min,max){
var num = Math.round((Math.random()*max)+min);
return num
},
	addTree:function(type,fruit,count,x,y,z){
//��������! �� ������������� � ���������!
World.setBlock(x+2, y+2, z, fruit, 0);
World.setBlock(x-2, y+2, z, fruit, 0);
World.setBlock(x, y+2, z+2, fruit, 0);
World.setBlock(x-2, y+2, z-2, fruit, 0);
World.addTileEntity(x+2, y+2, z);
World.addTileEntity(x-2, y+2, z);
World.addTileEntity(x, y+2, z+2);
World.addTileEntity(x, y+2, z-2);
		World.setBlock(x, y+1, z, 17, type);
		World.setBlock(x, y+2, z, 17, type);
	 World.setBlock(x, y+3, z, 17, type);
	 World.setBlock(x, y+4, z, 17, type);
	 World.setBlock(x, y+5, z, 17, type);
	 World.setBlock(x, y+5, z+1,18 , type);
		World.setBlock(x, y+5, z-1, 18, type);
	 World.setBlock(x, y+4, z-2, 18, type);
		World.setBlock(x, y+4, z+2, 18, type);
	 World.setBlock(x-2, y+4, z, 18, type);
	 World.setBlock(x+2, y+4, z, 18, type);
		World.setBlock(x, y+3, z-1, 18, type);
		World.setBlock(x, y+3, z+1, 18, type);
		World.setBlock(x, y+4, z-1, 18, type);
		World.setBlock(x, y+4, z+1, 18, type);				
		World.setBlock(x+2, y+3, z, 18, type);
		World.setBlock(x-2, y+3, z, 18, type);
		World.setBlock(x, y+3, z+2, 18, type);
		World.setBlock(x, y+3, z-2, 18, type);		
		World.setBlock(x+1, y+3, z, 18, type);
		World.setBlock(x-1, y+3, z, 18, type);
		World.setBlock(x+1, y+3, z+1, 18, type);
		World.setBlock(x-1, y+3, z-1, 18, type);
		World.setBlock(x+1, y+3, z+1, 18, type);
		World.setBlock(x+1, y+3, z-1, 18, type);
		World.setBlock(x-1, y+3, z+1, 18, type);
		World.setBlock(x-1, y+3, z-1, 18, type);
		World.setBlock(x+2, y+3, z+1, 18, type);
		World.setBlock(x+2, y+3, z-1, 18, type);
		World.setBlock(x-2, y+3, z+1, 18, type);
		World.setBlock(x-2, y+3, z-1, 18, type);
		World.setBlock(x+1, y+3, z+2, 18, type);
		World.setBlock(x+1, y+3, z-2, 18, type);
		World.setBlock(x-1, y+3, z+2, 18, type);
		World.setBlock(x-1, y+3, z-2, 18, 0);
		World.setBlock(x+2, y+3, z+2, 18, type);
		World.setBlock(x+2, y+3, z-2, 18, type);
		World.setBlock(x-2, y+3, z+2, 18, type);
		World.setBlock(x-2, y+3, z-2, 18, type);
		World.setBlock(x+1, y+4, z, 18, type);
		World.setBlock(x-1, y+4, z, 18, type);
		World.setBlock(x+1, y+4, z+1, 18, type);
		World.setBlock(x-1, y+4, z-1, 18, type);
		World.setBlock(x+1, y+4, z+1, 18, type);
		World.setBlock(x+1, y+4, z-1, 18, type);
		World.setBlock(x-1, y+4, z+1, 18, type);
		World.setBlock(x-1, y+4, z-1, 18, type);
		World.setBlock(x+2, y+4, z+1, 18, type);
		World.setBlock(x+2, y+4, z-1, 18, type);
		World.setBlock(x-2, y+4, z+1, 18, type);
		World.setBlock(x-2, y+4, z-1, 18, type);
		World.setBlock(x+1, y+4, z+2, 18, type);
		World.setBlock(x+1, y+4, z-2, 18, type);
		World.setBlock(x-1, y+4, z+2, 18, type);
		World.setBlock(x-1, y+4, z-2, 18, type);
		World.setBlock(x+2, y+4, z+2, 18, type);
		World.setBlock(x+2, y+4, z-2, 18, type);
		World.setBlock(x-2, y+4, z+2, 18, type);
		World.setBlock(x-2, y+4, z-2, 18, type);
		World.setBlock(x+1, y+5, z, 18, type);
		World.setBlock(x-1, y+5, z, 18, type);
		World.setBlock(x+1, y+5, z+1, 18, type);
		World.setBlock(x-1, y+5, z-1, 18, type);
		World.setBlock(x+1, y+5, z+1, 18, type);
		World.setBlock(x+1, y+5, z-1, 18, type);
		World.setBlock(x-1, y+5, z+1, 18, type);
		World.setBlock(x-1, y+5, z-1, 18, type);
		World.setBlock(x, y+6, z, 18, type);
	}
};
 var TREE_SAPLING_GROUND_TILES = {
	2: true,
	3: true,
	60: true
};




// file: API/shareAPI.js

ModAPI.registerAPI("HAPI", {
	harvest:Harvest,	
	requireGlobal: function(command){
		return eval(command);
	}
});
Logger.Log("HarvestAPI shared with name HAPI", "API");




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
Translation.addTranslation("strawberry", {zh: "草莓"});
Translation.addTranslation("strawberry juice", {zh: "草莓汁"});





// file: DEBUG/debugItems.js

/*
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
	var te = World.getTileEntity(coords.x,coords.y,coords.z);
	Game.message(te.data.age);
 });
IDRegistry.genItemID("data");
Item.createItem("data", "data", {name: "stick", data: 0});
Item.registerUseFunction("data",
 function(coords, item, block){
 Debug.m("ID:"+World.getBlockID(coords.x,coords.y,coords.z));
 Debug.m("DATA:"+World.getBlockData(coords.x,coords.y,coords.z)); 	
 });*/




// file: DEBUG/animationsItems.js

IDRegistry.genItemID("apple_ani0");
Item.createItem("apple_ani0", " ani1", {name: "applee", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("apple_ani1");
Item.createFoodItem("apple_ani1", " ani1", {name: "applee", meta: 1},{isTech: true});
IDRegistry.genItemID("apple_ani2");
Item.createItem("apple_ani2", " ani1", {name: "applee", meta: 2},{isTech: true});
//----------------
IDRegistry.genItemID("strawberry_ani0");
Item.createFoodItem("strawberry_ani0", " ani1", {name: "strawberrycrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("strawberry_ani1");
Item.createFoodItem("strawberry_ani1", " ani1", {name: "strawberrycrop", meta: 1},{isTech: true});
IDRegistry.genItemID("strawberry_ani2");
Item.createFoodItem("strawberry_ani2", " ani1", {name: "strawberrycrop", meta: 2},{isTech: true});
//------------------
IDRegistry.genItemID("raspberry_ani0");
Item.createFoodItem("raspberry_ani0", " ani1", {name: "raspberry_crop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("raspberry_ani1");
Item.createFoodItem("raspberry_ani1", " ani1", {name: "raspberry_crop", meta: 1},{isTech: true});
IDRegistry.genItemID("raspberry_ani2");
Item.createFoodItem("raspberry_ani2", " ani1", {name: "raspberry_crop", meta: 2},{isTech: true});
//----------------
IDRegistry.genItemID("cranberrycrop_ani0");
Item.createFoodItem("cranberrycrop_ani0", " ani1", {name: "cranberrycrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("cranberrycrop_ani1");
Item.createFoodItem("cranberrycrop_ani1", " ani1", {name: "cranberrycrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("cranberrycrop_ani2");
Item.createFoodItem("cranberrycrop_ani2", " ani1", {name: "cranberrycrop", meta: 2} ,{isTech: true} );
//----------------------
IDRegistry.genItemID("blueberrycrop_ani0");
Item.createFoodItem("blueberrycrop_ani0", " ani1", {name: "blueberrycrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("blueberrycrop_ani1");
Item.createFoodItem("blueberrycrop_ani1", " ani1", {name: "blueberrycrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("blueberrycrop_ani2");
Item.createFoodItem("blueberrycrop_ani2", " ani1", {name: "blueberrycrop", meta: 2} ,{isTech: true} );
//--------------------
IDRegistry.genItemID("blackberrycrop_ani0");
Item.createFoodItem("blackberrycrop_ani0", " ani1", {name: "blackberrycrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("blackberrycrop_ani1");
Item.createFoodItem("blackberrycrop_ani1", " ani1", {name: "blackberrycrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("blackberrycrop_ani2");
Item.createFoodItem("blackberrycrop_ani2", " ani1", {name: "blackberrycrop", meta: 2} ,{isTech: true} );
//------------------------
IDRegistry.genItemID("grapecrop_ani0");
Item.createFoodItem("grapecrop_ani0", " ani1", {name: "grapecrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("grapecrop_ani1");
Item.createFoodItem("grapecrop_ani1", " ani1", {name: "grapecrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("grapecrop_ani2");
Item.createFoodItem("grapecrop_ani2", " ani1", {name: "grapecrop", meta: 2} ,{isTech: true} );
//----------------
IDRegistry.genItemID("cucumbercrop_ani0");
Item.createFoodItem("cucumbercrop_ani0", " ani1", {name: "cucumbercrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("cucumbercrop_ani1");
Item.createFoodItem("cucumbercrop_ani1", " ani1", {name: "cucumbercrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("cucumbercrop_ani2");
Item.createFoodItem("cucumbercrop_ani2", " ani1", {name: "cucumbercrop", meta: 2} ,{isTech: true} );
//------------------
IDRegistry.genItemID("onioncrop_ani0");
Item.createFoodItem("onioncrop_ani0", " ani1", {name: "onioncrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("onioncrop_ani1");
Item.createFoodItem("onioncrop_ani1", " ani1", {name: "onioncrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("onioncrop_ani2");
Item.createFoodItem("onioncrop_ani2", " ani1", {name: "onioncrop", meta: 2} ,{isTech: true} );
//--------------------
IDRegistry.genItemID("cabbagecrop_ani0");
Item.createFoodItem("cabbagecrop_ani0", " ani1", {name: "cabbagecrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("cabbagecrop_ani1");
Item.createFoodItem("cabbagecrop_ani1", " ani1", {name: "cabbagecrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("cabbagecrop_ani2");
Item.createFoodItem("cabbagecrop_ani2", " ani1", {name: "cabbagecrop", meta: 2} ,{isTech: true} );
//--------------------
IDRegistry.genItemID("tomatocrop_ani0");
Item.createFoodItem("tomatocrop_ani0", " ani1", {name: "tomatocrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("tomatocrop_ani1");
Item.createFoodItem("tomatocrop_ani1", " ani1", {name: "tomatocrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("tomatocrop_ani2");
Item.createFoodItem("tomatocrop_ani2", " ani1", {name: "tomatocrop", meta: 2} ,{isTech: true} );
//---------------------
IDRegistry.genItemID("garliccrop_ani0");
Item.createFoodItem("garliccrop_ani0", " ani1", {name: "garliccrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("garliccrop_ani1");
Item.createFoodItem("garliccrop_ani1", " ani1", {name: "garliccrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("garliccrop_ani2");
Item.createFoodItem("garliccrop_ani2", " ani1", {name: "garliccrop", meta: 2} ,{isTech: true} );
//-------------------------
IDRegistry.genItemID("bellpeppercrop_ani0");
Item.createFoodItem("bellpeppercrop_ani0", " ani1", {name: "bellpeppercrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("bellpeppercrop_ani1");
Item.createFoodItem("bellpeppercrop_ani1", " ani1", {name: "bellpeppercrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("bellpeppercrop_ani2");
Item.createFoodItem("bellpeppercrop_ani2", " ani1", {name: "bellpeppercrop", meta: 2} ,{isTech: true} );
//---------------------
IDRegistry.genItemID("lettucecrop_ani0");
Item.createFoodItem("lettucecrop_ani0", " ani1", {name: "lettucecrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("lettucecrop_ani1");
Item.createFoodItem("lettucecrop_ani1", " ani1", {name: "lettucecrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("lettucecrop_ani2");
Item.createFoodItem("lettucecrop_ani2", " ani1", {name: "lettucecrop", meta: 2} ,{isTech: true} );
//--------------------
IDRegistry.genItemID("coffeebeancrop_ani0");
Item.createFoodItem("coffeebeancrop_ani0", " ani1", {name: "coffeebeancrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("coffeebeancrop_ani1");
Item.createFoodItem("coffeebeancrop_ani1", " ani1", {name: "coffeebeancrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("coffeebeancrop_ani2");
Item.createFoodItem("coffeebeancrop_ani2", " ani1", {name: "coffeebeancrop", meta: 2} ,{isTech: true} );
//-----------------------
IDRegistry.genItemID("peascrop_ani0");
Item.createFoodItem("peascrop_ani0", " ani1", {name: "peascrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("peascrop_ani1");
Item.createFoodItem("peascrop_ani1", " ani1", {name: "peascrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("peascrop_ani2");
Item.createFoodItem("peascrop_ani2", " ani1", {name: "peascrop", meta: 2} ,{isTech: true} );
//--------------------
IDRegistry.genItemID("chilipeppercrop_ani0");
Item.createFoodItem("chilipeppercrop_ani0", " ani1", {name: "chilipeppercrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("chilipeppercrop_ani1");
Item.createFoodItem("chilipeppercrop_ani1", " ani1", {name: "chilipeppercrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("chilipeppercrop_ani2");
Item.createFoodItem("chilipeppercrop_ani2", " ani1", {name: "chilipeppercrop", meta: 2} ,{isTech: true} );
//-----------------------
IDRegistry.genItemID("spiceleafcrop_ani0");
Item.createFoodItem("spiceleafcrop_ani0", " ani1", {name: "spiceleafcrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("spiceleafcrop_ani1");
Item.createFoodItem("spiceleafcrop_ani1", " ani1", {name: "spiceleafcrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("spiceleafcrop_ani2");
Item.createFoodItem("spiceleafcrop_ani2", " ani1", {name: "spiceleafcrop", meta: 2} ,{isTech: true} );
//--------------------
IDRegistry.genItemID("corncrop_ani0");
Item.createFoodItem("corncrop_ani0", " ani1", {name: "corncrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("corncrop_ani1");
Item.createFoodItem("corncrop_ani1", " ani1", {name: "corncrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("corncrop_ani2");
Item.createFoodItem("corncrop_ani2", " ani1", {name: "corncrop", meta: 2} ,{isTech: true} );
//------------------------
IDRegistry.genItemID("peppercorncrop_ani0");
Item.createFoodItem("peppercorncrop_ani0", " ani1", {name: "peppercorncrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("peppercorncrop_ani1");
Item.createFoodItem("peppercorncrop_ani1", " ani1", {name: "peppercorncrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("peppercorncrop_ani2");
Item.createFoodItem("peppercorncrop_ani2", " ani1", {name: "peppercorncrop", meta: 2} ,{isTech: true} );
//-------------
IDRegistry.genItemID("candleberry_ani0");
Item.createFoodItem("candleberry_ani0", " ani1", {name: "candleberrycrop", meta: 0} ,{isTech: true} );
IDRegistry.genItemID("candleberry_ani1");
Item.createFoodItem("candleberry_ani1", " ani1", {name: "candleberrycrop", meta: 1} ,{isTech: true} );
IDRegistry.genItemID("candleberry_ani2");
Item.createFoodItem("candleberry_ani2", " ani1", {name: "candleberrycrop", meta: 2} ,{isTech: true} );
//-------------
IDRegistry.genItemID("grassGarden_ani0");
Item.createItem("grassGarden_ani0", "Grass garden", {name: "grassgarden", meta: 0} ,{isTech: true} );
//--------------
IDRegistry.genItemID("herbGarden_ani0");
Item.createItem("herbGarden_ani0", "Herb garden", {name: "herbgarden", meta: 0} ,{isTech: true} );
//--------------------
IDRegistry.genItemID("berryGarden_ani");
Item.createItem("berryGarden_ani", "Berry garden", {name: "berrygardenNEW", meta: 0} ,{isTech: true} );




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




// file: ITEMS/seeds.js

IDRegistry.genItemID("strawberry_seed");
Item.createFoodItem("strawberry_seed", "Strawberry seed", {name: "strawberry_seed", meta: 0});
Recipes.addShapeless({id: ItemID.strawberry_seed, count: 1, data: 0}, [{id: ItemID.strawberry, data: 0}]);

IDRegistry.genItemID("raspberry_seed");
Item.createFoodItem("raspberry_seed", "Raspberry seed", {name: "raspberry_seed", meta: 0});
Recipes.addShapeless({id: ItemID.raspberry_seed, count: 1, data: 0}, [{id: ItemID.raspberry, data: 0}]);

IDRegistry.genItemID("cranberry_seed");
Item.createFoodItem("cranberry_seed", "Cranberry seed", {name: "cranberry_seed", meta: 0});
Recipes.addShapeless({id: ItemID.cranberry_seed, count: 1, data: 0}, [{id: ItemID.cranberry, data: 0}]);

IDRegistry.genItemID("blueberry_seed");
Item.createFoodItem("blueberry_seed", "Blueberry seed", {name: "blueberry_seed", meta: 0});
Recipes.addShapeless({id: ItemID.blueberry_seed, count: 1, data: 0}, [{id: ItemID.blueberry, data: 0}]);

IDRegistry.genItemID("blackberry_seed");
Item.createFoodItem("blackberry_seed", "Blackberry seed", {name: "blackberry_seed", meta: 0});
Recipes.addShapeless({id: ItemID.blackberry_seed, count: 1, data: 0}, [{id: ItemID.blackberry, data: 0}]);

IDRegistry.genItemID("candleberryseed");
Item.createFoodItem("candleberryseed", "Candle berry seed", {name: "candleberryseedItem", meta: 0});
Recipes.addShapeless({id: ItemID.candleberryseed, count: 1, data: 0}, [{id: ItemID.candleberry , data: 0}]);

IDRegistry.genItemID("grape_seed");
Item.createFoodItem("grape_seed", "Grape seed", {name: "grape_seed", meta: 0});
Recipes.addShapeless({id: ItemID.grape_seed, count: 1, data: 0}, [{id: ItemID.grape, data: 0}]);

IDRegistry.genItemID("cucumber_seed");
Item.createFoodItem("cucumber_seed", "Cucumber seed", {name: "cucumber_seed", meta: 0});
Recipes.addShapeless({id: ItemID.cucumber_seed, count: 1, data: 0}, [{id: ItemID.cucumber, data: 0}]);

IDRegistry.genItemID("onion_seed");
Item.createFoodItem("onion_seed", "Onion seed", {name: "onion_seed", meta: 0});
Recipes.addShapeless({id: ItemID.onion_seed, count: 1, data: 0}, [{id: ItemID.onion, data: 0}]);

IDRegistry.genItemID("cabbage_seed");
Item.createFoodItem("cabbage_seed", "Cabbage seed", {name: "cabbage_seed", meta: 0});
Recipes.addShapeless({id: ItemID.cabbage_seed, count: 1, data: 0}, [{id: ItemID.cabbage, data: 0}]);

IDRegistry.genItemID("tomato_seed");
Item.createFoodItem("tomato_seed", "Tomato seed", {name: "tomato_seed", meta: 0});
Recipes.addShapeless({id: ItemID.tomato_seed, count: 1, data: 0}, [{id: ItemID.tomato, data: 0}]);


IDRegistry.genItemID("bellpepper_seed");
Item.createFoodItem("bellpepper_seed", "Bellpepper seed", {name: "bellpepper_seed", meta: 0});
Recipes.addShapeless({id: ItemID.bellpepper_seed, count: 1, data: 0}, [{id: ItemID.bellpepper, data: 0}]);

IDRegistry.genItemID("garlic_seed");
Item.createFoodItem("garlic_seed", "Garlic seed", {name: "garlic_seed", meta: 0});
Recipes.addShapeless({id: ItemID.garlic_seed, count: 1, data: 0}, [{id: ItemID.garlic, data: 0}]);

IDRegistry.genItemID("lettuce_seed");
Item.createFoodItem("lettuce_seed", "Lettuce seed", {name: "lettuce_seed", meta: 0});
Recipes.addShapeless({id: ItemID.lettuce_seed, count: 1, data: 0}, [{id: ItemID.lettuce, data: 0}]);

IDRegistry.genItemID("coffee_seed");
Item.createFoodItem("coffee_seed", "Coffee seed", {name: "coffee_seed", meta: 0});
Recipes.addShapeless({id: ItemID.coffee_seed, count: 1, data: 0}, [{id: ItemID.coffee_beans, data: 0}]);

IDRegistry.genItemID("peas_seed");
Item.createFoodItem("peas_seed", "Peas seed", {name: "peas_seed", meta: 0});
Recipes.addShapeless({id: ItemID.peas_seed, count: 1, data: 0}, [{id: ItemID.peas, data: 0}]);

IDRegistry.genItemID("chili_pepper_seed");
Item.createFoodItem("chili_pepper_seed", "Chilli pepper seed", {name: "chili_pepper_seed", meta: 0});
Recipes.addShapeless({id: ItemID.chili_pepper_seed, count: 1, data: 0}, [{id: ItemID.chili_pepper, data: 0}]);

IDRegistry.genItemID("spice_leaf_seed");
Item.createFoodItem("spice_leaf_seed", "Spice leaf seed", {name: "spice_leaf_seed", meta: 0});
Recipes.addShapeless({id: ItemID.spice_leaf_seed, count: 1, data: 0}, [{id: ItemID.spice_leaf, data: 0}]);

IDRegistry.genItemID("corn_seed");
Item.createFoodItem("corn_seed", "Corn seed", {name: "corn_seed", meta: 0});
Recipes.addShapeless({id: ItemID.corn_seed, count: 1, data: 0}, [{id: ItemID.corn, data: 0}]);

IDRegistry.genItemID("peppercorn_seed");
Item.createFoodItem("peppercorn_seed", "Peppercorn seed", {name: "peppercorn_seed", meta: 0});
Recipes.addShapeless({id: ItemID.peppercorn_seed, count: 1, data: 0}, [{id: ItemID.peppercorn, data: 0}]);




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
Item.createFoodItem("cheese", "�heese", {name: "cheese", meta: 0}, {food: 2});
Recipes.addShapeless({id: ItemID.cheese, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.fresh_milk, data: 0}, {id: ItemID.salt, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});

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
Recipes.addShapeless({id: ItemID.salt, count: 1, data: 0}, [{id: ItemID.fresh_water, data: 0}, {id: ItemID.pot, data: 0}], function(api, field, result){ 
	for (var i in field){ 
		if (field[i].id != pot){ 
			api.decreaseFieldSlot(i); 
		}
	} 
});

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




// file: ITEMS/ARMOR/wax.js

﻿IDRegistry.genItemID("pressedWax");
Item.createItem("pressedWax", "Wax", {name: "wax", meta: 0}, {stack: 1});
Recipes.addShapeless({id: ItemID.pressedWax, count: 1, data: 0}, [{id: ItemID.pot, data: 0}, {id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0},{id: ItemID.candleberry, data: 0}], function(api, field, result){ 
	for (var i in field){
		if (field[i].id != ItemID.pot){
			api.decreaseFieldSlot(i);
		}
	}
});
/*
IDRegistry.genBlockID("pressedWaxBlock"); 
Block.createBlock("pressedWaxBlock", [
	{name: "Pressed wax", texture: [["pressedwax", 0]], inCreative: true}
]);
Recipes.addShaped({id: BlockID.pressedWaxBlock, count: 1, data: 0}, ["bbb", "bbb"," bbb"], [ "b", ItemID.pressedWax, 0]);*/




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
Recipes.addShaped({id: ItemID.hardenedLeatherChest, count: 1, data: 0}, ["a a", " aaa"," aaa"], ["a", ItemID.hardedLeather, 0]);




// file: ITEMS/ARMOR/leggins.js

IDRegistry.genItemID("hardenedLeatherLeggings");
Item.createArmorItem("hardenedLeatherLeggings", "Harded leather leggins", {name: "hardenedleatherleggingsItem"}, {type: "leggings", armor: 5, durability: 203, texture: "hardenedleather_2"});
Recipes.addShaped({id: ItemID.hardenedLeatherLeggings, count: 1, data: 0}, ["aaa", " a a"," a a"], ["a", ItemID.hardedLeather, 0]);




// file: ITEMS/ARMOR/foots.js

IDRegistry.genItemID("hardenedLeatherBoots");
Item.createArmorItem("hardenedLeatherBoots", "Hardened leather boots", {name: "hardenedleatherbootsItem"}, {type: "boots", armor: 2, durability: 176, texture: "armor/hardenedleather_1.png"});
Recipes.addShaped({id: ItemID.hardenedLeatherBoots, count: 1, data: 0}, ["   ", " a a"," a a"], ["a", ItemID.hardedLeather, 0]);




// file: BLOCKS/salt.js

IDRegistry.genBlockID("salt"); 
Block.createBlock("salt", [
	{name: "Salt", texture: [["saltBLOCK", 0]], inCreative: true}
]);
Block.registerDropFunction("salt", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < 1){
		drop.push([ItemID.salt, 2 + parseInt(Math.random() * 5), 0]);
	}	
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




// file: BLOCKS/animalTrap.js

﻿IDRegistry.genBlockID("animalTrap"); 
Block.createBlock("animalTrap", [
	{name: "Animal trap", texture: [["animaltrap", 0]], inCreative: true}
]);
var fruitBaitDrop = [52,334,344,288,411,365];
var grainBaitDrop = [52,334,344,288,365];
var veggieBaitDrop = [52,334,344,288,365];
/*
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
		{type: "bitmap", bitmap: "groundtrap", x: 350, y: 100, scale: 4}
    ],
    elements: {
		
    }
});
UI.testUI(animalTrapGUI); */
TileEntity.registerPrototype(BlockID.animalTrap,{
	defaultValues: {
		scanedBlocks:0,
		progress:0
	},	
	getGuiScreen: function(){
		return animalTrapGUI;
	},
	putResult:function(type){
		
	},
	tick:function(){
		if(this.data.scanedBlocks==120){
			
		}
	},
	checkGround:function(){
		for(var x = this.x-5; x<this.x+5; x++){
			for(var z = this.z-5; z<this.z+5; z++){
				if(World.getBlockID(x,this.y,z)==(2||3)){
					this.data.scanedBlocks++;
				}
			}
		}
	}
});




// file: BLOCKS/fishTrap.js

IDRegistry.genBlockID("fishTrap"); 
Block.createBlock("fishTrap", [
	{name: "Fish trap", texture: [["fishtrap", 0]], inCreative: true}
]);




// file: GARDENS/BERRYGARDEN/block.js

IDRegistry.genBlockID("berrygarden"); 
Block.createBlock("berrygarden", [
	{name: "Berry garden", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.berrygarden );
Block.registerDropFunction("berrygarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.blackberry, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.strawberry, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.raspberry, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.blueberry, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.cranberry, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.grape, 1 + parseInt(Math.random() * 2), 0]);
	}	
	return drop;
});
TileEntity.registerPrototype( BlockID.berrygarden , {
	initAnimation:function(){
		this.animation1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		this.animation2 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
	},
	describeAnimation:function(){
		Harvest.animationSaplingSet( ItemID.berryGarden_ani ,this.animation1,this.animation2);
	},
	animationLoad:function(){
		this.initAnimation();
		this.describeAnimation();
		this.animation1.load();
		this.animation2.load();
	},
	animationDelete:function(){
	this.animation1.destroy();
	this.animation2.destroy();
	},
	init:function(){
		this.animationLoad();
	},
	Selfdestroy:function(){
		this.animationDelete();
		World.setBlock(this.x,this.y,this.z,0,0);
		World.removeTileEntity(this.x,this.y,this.z);
		},
	destroy:function(){
		this.animationDelete();
	},
	click:function( id, count, data ){
		Harvest.dropPlant(ItemID.berryGarden_ani,this.x,this.y,this.z);
		this.Selfdestroy();
	}
});




// file: GARDENS/BERRYGARDEN/item.js

IDRegistry.genItemID("berryGardenITEM");
Item.createItem("berryGardenITEM", "Berry garden", {name: "berrygardenNEW", meta: 0} ,{isTech: false} );
Item.registerUseFunction("berryGardenITEM", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);	
	if (GenerationUtils.isTransparentBlock(tile1.id) && TREE_SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.berrygarden);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});




// file: GARDENS/BERRYGARDEN/TileEntity.js

TileEntity.registerPrototype( BlockID.berrygarden , {
	initAnimation:function(){
		this.animation1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		this.animation2 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
	},
	describeAnimation:function(){
		Harvest.animationSaplingSet( ItemID.berryGarden_ani ,this.animation1,this.animation2);
	},
	animationLoad:function(){
		this.initAnimation();
		this.describeAnimation();
		this.animation1.load();
		this.animation2.load();
	},
	animationDelete:function(){
	this.animation1.destroy();
	this.animation2.destroy();
	},
	init:function(){
		this.animationLoad();
	},
	Selfdestroy:function(){
		this.animationDelete();
		World.setBlock(this.x,this.y,this.z,0,0);
		World.removeTileEntity(this.x,this.y,this.z);
		},
	destroy:function(){
		this.animationDelete();
	},
	click:function( id, count, data ){
		Harvest.dropPlant(ItemID.berryGarden_ani,this.x,this.y,this.z);
		this.Selfdestroy();
	}
});




// file: GARDENS/GRASSGARDEN/block.js

IDRegistry.genBlockID("grassgarden"); 
Block.createBlock("grassgarden", [
	{name: "Grass garden", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.grassgarden );
Block.registerDropFunction("grassgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .5){
		drop.push([ItemID.cucumber, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.onion, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.cabbage, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.tomato, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.bellpepper, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.lettuce, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.peas, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.chilli_pepper, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.corn, 1 + parseInt(Math.random() * 2), 0]);
	}	
	if(Math.random() < .5){
		drop.push([ItemID.peppercorn, 1 + parseInt(Math.random() * 2), 0]);
	}	
	return drop;
});




// file: GARDENS/GRASSGARDEN/item.js

IDRegistry.genItemID("grassGardenITEM");
Item.createItem("grassGardenITEM", "Grass garden", {name: "grassgarden", meta: 0} ,{isTech: false} );
Item.registerUseFunction("grassGardenITEM", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);	
	if (GenerationUtils.isTransparentBlock(tile1.id) && TREE_SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.grassgarden);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});




// file: GARDENS/GRASSGARDEN/TileEntity.js

TileEntity.registerPrototype( BlockID.grassgarden , {
	initAnimation:function(){
		this.animation1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		this.animation2 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
	},
	describeAnimation:function(){
		Harvest.animationSaplingSet( ItemID.grassGarden_ani0 ,this.animation1,this.animation2);
	},
	animationLoad:function(){
		this.initAnimation();
		this.describeAnimation();
		this.animation1.load();
		this.animation2.load();
	},
	animationDelete:function(){
		this.animation1.destroy();
		this.animation2.destroy();
	},
	init:function(){
		this.animationLoad();
	},
	Selfdestroy:function(){
		this.animationDelete();
		World.setBlock(this.x,this.y,this.z,0,0);
		World.removeTileEntity(this.x,this.y,this.z);
	},
	destroy:function(){
		this.animationDelete();
	},
	click:function( id, count, data ){
		Harvest.dropPlant(ItemID.grassGarden_ani0,this.x,this.y,this.z);
		this.Selfdestroy();
	}
});




// file: GARDENS/HERBGARDEN/block.js

IDRegistry.genBlockID("herbgarden"); 
Block.createBlock("herbgarden", [
	{name: "Herb garden", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.herbgarden );
Block.registerDropFunction("herbgarden", function(coords, blockID, blockData, level){
	var drop = [];
	if(Math.random() < .8){
		drop.push([ItemID.spice_leaf, 1 + parseInt(Math.random() * 3), 0]);
	}	
	if(Math.random() < .8){
		drop.push([ItemID.coffee_beans, 1 + parseInt(Math.random() * 3), 0]);
	}	
	if(Math.random() < .8){
		drop.push([ItemID.garlic, 1 + parseInt(Math.random() * 3), 0]);
	}	
	return drop;
});




// file: GARDENS/HERBGARDEN/item.js

IDRegistry.genItemID("herbGardenITEM");
Item.createItem("herbGardenITEM", "Herb garden", {name: "herbgarden", meta: 0} ,{isTech: false} );
Item.registerUseFunction("herbGardenITEM", function(coords, item, tile){
	var place = coords.relative;
	var tile1 = World.getBlock(place.x, place.y, place.z);
	var tile2 = World.getBlock(place.x, place.y - 1, place.z);	
	if (GenerationUtils.isTransparentBlock(tile1.id) && TREE_SAPLING_GROUND_TILES[tile2.id]){
		World.setBlock(place.x, place.y, place.z, BlockID.herbgarden);
		World.addTileEntity(place.x, place.y, place.z);
		Player.setCarriedItem(item.id, item.count - 1, item.data);
	}
});




// file: GARDENS/HERBGARDEN/TileEntity.js

TileEntity.registerPrototype( BlockID.herbgarden , {
	initAnimation:function(){
		this.animation1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		this.animation2 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
	},
	describeAnimation:function(){
		Harvest.animationSaplingSet( ItemID.herbGarden_ani0 ,this.animation1,this.animation2);
	},
	animationLoad:function(){
		this.initAnimation();
		this.describeAnimation();
		this.animation1.load();
		this.animation2.load();
	},
	animationDelete:function(){
		this.animation1.destroy();
		this.animation2.destroy();
	},
	init:function(){
		this.animationLoad();
	},
	Selfdestroy:function(){
		this.animationDelete();
		World.setBlock(this.x,this.y,this.z,0,0);
		World.removeTileEntity(this.x,this.y,this.z);
	},
	destroy:function(){
		this.animationDelete();
	},
	click:function( id, count, data ){
		Harvest.dropPlant(ItemID.herbGarden_ani0,this.x,this.y,this.z);
		this.Selfdestroy();
	}
});




// file: TREES/APPLE/appleBlock.js

IDRegistry.genBlockID("appleBlock"); 
Block.createBlock("appleBlock", [
	{name: "appleBlock", texture: [["empty", 0]], inCreative: false}
]);
Block.setBlockShape(BlockID.appleBlock, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.999, z: 0.999});
Block.registerDropFunction("appleBlock", function(coords, blockID, blockData, level){
	return [[0,0,0]]
});
TileEntity.registerPrototype(BlockID.appleBlock, {
	defaultValues: {
		age: 0
	},
	 createAnimations:function(){
		this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
	},
	 anim0:function(){	
		Harvest.animationSaplingSet(ItemID.apple_ani0 ,this.ani0,this.ani1);
	},
	anim1:function(){	
		Harvest.animationSaplingSet(ItemID.apple_ani1 ,this.ani0,this.ani1);
	},
	anim2:function(){	   
		Harvest.animationSaplingSet(ItemID.apple_ani2 ,this.ani0,this.ani1);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;			
			case 1 : 
				this.anim1();
					break;			
			case 2 :
				this.anim2();
					break;
		}
	},
	tick:function(){
		if(World.getBlockID(this.x,this.y+1,this.z)==0){
		this.destroy();
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){
			this.data.age++;
			this.switcher();  
			if(World.getBlockID(this.x,this.y+1,this.z)==0){
				this.destroy();
			}	
		}
	},
	init:function(){
		this.createAnimations();
		this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);	 
		this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			World.drop(	this.x,		this.y,		this.z ,	260, 1 , 0	)
		}
	} 	
});




// file: TREES/APPLE/sapling.js

var TREE_SAPLING_GROUND_TILES = {
	2: true,
	3: true,
	60: true
};
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
IDRegistry.genItemID("appleMini");
Item.createItem("appleMini", " Apple", {name: "applee", meta: 0} ,{isTech: false} );
Item.registerUseFunction("appleMini", function(coords, item, tile){
	var place = coords.relative;
	World.setBlock(place.x,place.y,place.z,BlockID.appleBlock);
	World.addTileEntity(place.x,place.y,place.z);
});
IDRegistry.genBlockID("appleTreeSapling");
Block.createBlock("appleTreeSapling", [
	{name: "Apple Tree Sapling", texture: [["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0], ["empty", 0]], inCreative: false}
]);
Block.setBlockShape(BlockID.appleTreeSapling, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.1, z: 0.999});
Block.registerDropFunction("appleTreeSapling", function(){
	return [[ItemID.appleSapling, 1, 0]];
});
TileEntity.registerPrototype( BlockID.appleTreeSapling , {
	defaultValues: {
		size: 0,
		growth: 0,
		lastGrowth: 0
	},
	created: function(){
		this.data.size = .85 + Math.random() * .25;
	},	
	initAnimation: function(){
		this.animation1 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		this.animation2 = new Animation.Item(this.x + .5, this.y + this.data.size / 2 - .02, this.z + .5);
		Harvest.animationSaplingSet( ItemID.appleSapling ,this.animation1,this.animation2);
	},	
	destroyAnimation: function(){
		if (this.animation1){
			this.animation1.destroy();
		}
		if (this.animation2){
			this.animation2.destroy();
		}
	},	
	updateAnimation: function(){
		this.destroyAnimation();
		this.initAnimation();
	},	
	init: function(){
		this.initAnimation();
	},	
	destroy: function(){
		this.destroyAnimation();
	},	
	tick: function(){
		if (World.getThreadTime() % 20 == 0){
			this.data.growth += Math.random() * 2;
			this.checkGrowth();
			if (!TREE_SAPLING_GROUND_TILES[World.getBlockID(this.x, this.y - 1, this.z)]){
				World.destroyBlock(this.x, this.y, this.z, true);
				this.selfDestroy();
			}
		}
	},	
	click: function(id, count, data){
		if (id == 351 && data == 15){
			this.data.growth += 256 + Math.random() * 128;
			this.checkGrowth();
			Player.setCarriedItem(id, count - 1, data);
		}
	},	
	checkGrowth: function(){
		if (this.data.growth - 56 > this.data.lastGrowth){
			this.data.size += (this.data.growth - this.data.lastGrowth) / 480;
			this.data.lastGrowth = this.data.growth;
			this.updateAnimation();
		}
		if (this.data.growth > 512){
			this.selfDestroy();
			Harvest.addTree(0,BlockID.appleBlock,4,this.x,this.y-1,this.z);
		}
	}
});
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
 var iid = 290;
 Callback.addCallback("DestroyBlock", function(coords, block, player){
	if(((block.id==31)&&(block.data==1)||(block.id==175)&&(block.data==10)||(block.data==2))){
		var nn = Harvest.number(0, 400);
		if(nn<seedsArray.length ){  
		Harvest.dropPlant(seedsArray[nn],coords.x,coords.y,coords.z);
		}
	}
 });
 Callback.addCallback("ItemUse", function(coords, item, block){
 if((block.id==2)&&(Player.getCarriedItem()==(290||291||292||293||294))){
	var nn = Harvest.number(0, 400);
	if(nn<seedsArray.length ){  
			World.drop(coords.x, coords.y+1, coords.z, seedsArray[nn], 1, 0) 
		}
	}
 });




// file: WORLD/GENERATION/GARDENS/biomes.js

var SaltBiomes = [0,24,10];
var BerryGardenBiomes = [1,4, 18, 27, 28,13];
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
	if(Math.random() <1){
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
	if(Math.random() <1){
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
	if(Math.random() <1){
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




// file: WORLD/GENERATION/salt.js

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
	coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
	if(Math.random()< __config__.access("saltGenNumber") ){
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
	if(Math.random()< __config__.access("saltGenNumber") ){
		if(World.getBlockID(coords.x,coords.y,coords.z)!=0){
			World.setBlock(coords.x, coords.y , coords.z, BlockID.salt, 0);
		}
	}
});




// file: WORLD/GENERATION/TREES/AppleTree.js

Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
	var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
	coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
	if((World.getBlockID(coords.x, coords.y, coords.z) == 2)){			
		Harvest.addTree(0,BlockID.appleBlock,4,this.x,this.y,this.z);
	}
});




// file: CROPS/strawberry.js

IDRegistry.genBlockID("strawberrycrop"); 
Block.createBlock("strawberrycrop", [
	{name: "strawberrycrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.strawberrycrop );
Harvest.registerDestroy("strawberrycrop",ItemID.strawberry_seed);
TileEntity.registerPrototype(BlockID.strawberrycrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.strawberry_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){	
		Harvest.animationPlantDescribe(ItemID.strawberry_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	
		Harvest.animationPlantDescribe(ItemID.strawberry_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;
        			case 1 : 
				this.anim1();
					break;      
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
				this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){   	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);    
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.strawberry,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.strawberry_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z,BlockID.strawberrycrop,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.strawberry_seed, item.count - 1, 0);
	}
});




// file: CROPS/raspberry.js

IDRegistry.genBlockID("raspberrycrop"); 
Block.createBlock("raspberrycrop", [
	{name: "raspberrycrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.raspberrycrop );
Harvest.registerDestroy("raspberrycrop",ItemID.raspberry_seed);
TileEntity.registerPrototype(BlockID.raspberrycrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
	if( __config__.access("advanced_item_models")==true){
		this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
	}
	else{
		this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
	}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.raspberry_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.raspberry_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	
		Harvest.animationPlantDescribe(ItemID.raspberry_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break; 
			case 1 : 
				this.anim1();
					break;       
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){   
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){    	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.raspberry,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.raspberry_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.raspberrycrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.raspberry_seed, item.count - 1, 0);
	}
});




// file: CROPS/cranberry.js

IDRegistry.genBlockID("cranberrycrop"); 
Block.createBlock("cranberrycrop", [
	{name: "cranberrycrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.cranberrycrop );
Harvest.registerDestroy("cranberrycrop",ItemID.cranberry_seed);
TileEntity.registerPrototype(BlockID.cranberrycrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.cranberrycrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.cranberrycrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	    
		Harvest.animationPlantDescribe(ItemID.cranberrycrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;        
			case 1 : 
				this.anim1();
					break;       
			case 2 :
				this.anim2();
					break;
		}
	},
		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){   
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){    	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.cranberry,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.cranberry_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.cranberrycrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.cranberry_seed, item.count - 1, 0);
	}
});




// file: CROPS/blueberry.js

IDRegistry.genBlockID("blueberrycrop"); 
Block.createBlock("blueberrycrop", [
	{name: "blueberrycrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.blueberrycrop );
Harvest.registerDestroy("blueberrycrop",ItemID.blueberry_seed);
TileEntity.registerPrototype(BlockID.blueberrycrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.blueberrycrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.blueberrycrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){
	    Harvest.animationPlantDescribe(ItemID.blueberrycrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;    
			case 1 : 
				this.anim1();
					break;       
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){   
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){    	
		this.createAnimations();
		this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.blueberry,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.blueberryseedItem, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.blueberrycrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.blueberry_seed, item.count - 1, 0);
	}
});




// file: CROPS/blackberry.js

IDRegistry.genBlockID("blackberrycrop"); 
Block.createBlock("blackberrycrop", [
	{name: "blackberrycrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.blackberrycrop );
Harvest.registerDestroy("blackberrycrop",ItemID.blackberry_seed);
TileEntity.registerPrototype(BlockID.blackberrycrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.blackberrycrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.blackberrycrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){
		Harvest.animationPlantDescribe(ItemID.blackberrycrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;
        
			case 1 : 
				this.anim1();
					break;
        
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){   
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){  	
		this.createAnimations();
		this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.blackberry,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.blackberryseedItem, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.blackberrycrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.blackberry_seed, item.count - 1, 0);
	}
});




// file: CROPS/grape.js

IDRegistry.genBlockID("grapecrop"); 
Block.createBlock("grapecrop", [
	{name: "grapecrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.grapecrop );
Harvest.registerDestroy("grapecrop",ItemID.grape_seed);
TileEntity.registerPrototype(BlockID.grapecrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.grapecrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.grapecrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	
		Harvest.animationPlantDescribe(ItemID.grapecrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;        
			case 1 : 
				this.anim1();
					break;        
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){   	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.grape,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.grape_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.grapecrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.grape_seed, item.count - 1, 0);
	}
});




// file: CROPS/cucumber.js

IDRegistry.genBlockID("cucumbercrop"); 
Block.createBlock("cucumbercrop", [
	{name: "cucumbercrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.cucumbercrop );
Harvest.registerDestroy("cucumbercrop",ItemID.cucumber_seed);
TileEntity.registerPrototype(BlockID.cucumbercrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.cucumbercrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.cucumbercrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	
		Harvest.animationPlantDescribe(ItemID.cucumbercrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;       
			case 1 : 
				this.anim1();
					break;     
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){   
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){    	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.cucumber,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.cucumber_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.cucumbercrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.cucumber_seed, item.count - 1, 0);
	}
});




// file: CROPS/onion.js

IDRegistry.genBlockID("onioncrop"); 
Block.createBlock("onioncrop", [
	{name: "onioncrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.onioncrop );
Harvest.registerDestroy("onioncrop",ItemID.onion_seed);
TileEntity.registerPrototype(BlockID.onioncrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.onioncrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.onioncrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	 
		Harvest.animationPlantDescribe(ItemID.onioncrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;      
			case 1 : 
				this.anim1();
					break;       
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.onion,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.onion_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.onioncrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.onion_seed, item.count - 1, 0);
	}
});




// file: CROPS/cabbage.js

IDRegistry.genBlockID("cabbagecrop"); 
Block.createBlock("cabbagecrop", [
	{name: "cabbagecrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.cabbagecrop );
Harvest.registerDestroy("cabbagecrop",ItemID.cabbage_seed);
TileEntity.registerPrototype(BlockID.cabbagecrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.cabbagecrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.cabbagecrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){
		Harvest.animationPlantDescribe(ItemID.cabbagecrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;       
			case 1 : 
				this.anim1();
					break;       
			case 2 :
				this.anim2();
					break;
		}
	},
		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){   	
		this.createAnimations();
		this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.cabbage,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.cabbageseedItem, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.cabbagecrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.cabbage_seed, item.count - 1, 0);
	}
});




// file: CROPS/tomato.js

IDRegistry.genBlockID("tomatocrop"); 
Block.createBlock("tomatocrop", [
	{name: "tomatocrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.tomatocrop );
Harvest.registerDestroy("tomatocrop",ItemID.tomato_seed);
TileEntity.registerPrototype(BlockID.tomatocrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.tomatocrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){	
		Harvest.animationPlantDescribe(ItemID.tomatocrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){
		Harvest.animationPlantDescribe(ItemID.tomatocrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;
        
			case 1 : 
				this.anim1();
					break;
        
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){   	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.tomato,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.tomato_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.tomatocrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.tomato_seed, item.count - 1, 0);
	}
});




// file: CROPS/garlic.js

IDRegistry.genBlockID("garliccrop"); 
Block.createBlock("garliccrop", [
	{name: "garliccrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.garliccrop );
Harvest.registerDestroy("garliccrop",ItemID.garlic_seed);
TileEntity.registerPrototype(BlockID.garliccrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.garliccrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.garliccrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	
		Harvest.animationPlantDescribe(ItemID.garliccrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;       
			case 1 : 
				this.anim1();
					break;        
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){   	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.garlic,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.garlic_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.garliccrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.garlic_seed, item.count - 1, 0);
	}
});




// file: CROPS/bellpepper.js

IDRegistry.genBlockID("bellpeppercrop"); 
Block.createBlock("bellpeppercrop", [
	{name: "bellpeppercrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.bellpeppercrop );
Harvest.registerDestroy("bellpeppercrop",ItemID.bellpepper_seed);
TileEntity.registerPrototype(BlockID.bellpeppercrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
			this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
			this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
			this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	 anim0:function(){
		Harvest.animationPlantDescribe(ItemID.bellpeppercrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.bellpeppercrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	
		Harvest.animationPlantDescribe(ItemID.bellpeppercrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;       
			case 1 : 
				this.anim1();
					break;       
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){  	
		this.createAnimations();
		this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0); 
		this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.bellpepper,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.bellpepperseedItem, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.bellpeppercrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.bellpepper_seed, item.count - 1, 0);
	}
});




// file: CROPS/lettuce.js

IDRegistry.genBlockID("lettucecrop"); 
Block.createBlock("lettucecrop", [
	{name: "lettucecrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.lettucecrop );
Harvest.registerDestroy("lettucecrop",ItemID.lettuce_seed);
TileEntity.registerPrototype(BlockID.lettucecrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		 else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		 }
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.lettucecrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
		anim1:function(){
	Harvest.animationPlantDescribe(ItemID.lettucecrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	  
		Harvest.animationPlantDescribe(ItemID.lettucecrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;
        
			case 1 : 
				this.anim1();
					break;
        
			case 2 :
				this.anim2();
					break;
		}	
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){    	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.lettuce,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.lettuce_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.lettucecrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.lettuce_seed, item.count - 1, 0);
	}
});




// file: CROPS/coffeebean.js

IDRegistry.genBlockID("coffeebeancrop"); 
Block.createBlock("coffeebeancrop", [
	{name: "coffeebeancrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.coffeebeancrop );
Harvest.registerDestroy("coffeebeancrop",ItemID.coffee_seed);
TileEntity.registerPrototype(BlockID.coffeebeancrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.coffeebeancrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.coffeebeancrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	
		Harvest.animationPlantDescribe(ItemID.coffeebeancrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;      
			case 1 : 
				this.anim1();
					break;       
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){    	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.coffee_beans,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.coffee_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.coffeebeancrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.coffee_seed, item.count - 1, 0);
	}
});




// file: CROPS/peas.js

IDRegistry.genBlockID("peascrop"); 
Block.createBlock("peascrop", [
	{name: "peascrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.peascrop );
Harvest.registerDestroy("peascrop",ItemID.peas_seed);
TileEntity.registerPrototype(BlockID.peascrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.peascrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){	
		Harvest.animationPlantDescribe(ItemID.peascrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){
		Harvest.animationPlantDescribe(ItemID.peascrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;       
			case 1 : 
				this.anim1();
					break;       
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){   
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){    	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.peas,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.peas_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.peascrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.peas_seed, item.count - 1, 0);
	}
});




// file: CROPS/chilipepper.js

IDRegistry.genBlockID("chilipeppercrop"); 
Block.createBlock("chilipeppercrop", [
	{name: "chilipeppercrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.chilipeppercrop );
Harvest.registerDestroy("chilipeppercrop",ItemID.chili_pepper_seed);
TileEntity.registerPrototype(BlockID.chilipeppercrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.chilipeppercrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.chilipeppercrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){
		Harvest.animationPlantDescribe(ItemID.chilipeppercrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;        
			case 1 : 
				this.anim1();
					break;        
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){    	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);
		this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.chili_pepper,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.chili_pepper_seed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.chilipeppercrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.chili_pepper_seed, item.count - 1, 0);
	}
});




// file: CROPS/spiceleaf.js

IDRegistry.genBlockID("spiceleafcrop"); 
Block.createBlock("spiceleafcrop", [
	{name: "spiceleafcrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.spiceleafcrop );
Harvest.registerDestroy("spiceleafcrop", ItemID.spice_leaf_seed );
TileEntity.registerPrototype(BlockID.spiceleafcrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.spiceleafcrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.spiceleafcrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	
		Harvest.animationPlantDescribe(ItemID.spiceleafcrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;
        
			case 1 : 
				this.anim1();
					break;
        
			case 2 :
				this.anim2();
					break;
		}
	},	 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){   
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){  	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit( ItemID.spice_leaf ,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID( ItemID.spice_leaf_seed , function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.spiceleafcrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem( ItemID.spice_leaf_seed , item.count - 1, 0);
	}
});




// file: CROPS/corn.js

IDRegistry.genBlockID("corncrop"); 
Block.createBlock("corncrop", [
	{name: "corncrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.corncrop );
Harvest.registerDestroy("corncrop", ItemID.corn_seed );
TileEntity.registerPrototype(BlockID.corncrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.corncrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.corncrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){
		Harvest.animationPlantDescribe(ItemID.corncrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;       
			case 1 : 
				this.anim1();
					break;      
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){   	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit( ItemID.corn ,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID( ItemID.corn_seed , function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.corncrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem( ItemID.corn_seed , item.count - 1, 0);
	}
});




// file: CROPS/peppercorn.js

IDRegistry.genBlockID("peppercorncrop"); 
Block.createBlock("peppercorncrop", [
	{name: "peppercorncrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.peppercorncrop );
Harvest.registerDestroy("peppercorncrop", ItemID.peppercorn_seed );
TileEntity.registerPrototype(BlockID.peppercorncrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){
		Harvest.animationPlantDescribe(ItemID.peppercorncrop_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){
		Harvest.animationPlantDescribe(ItemID.peppercorncrop_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){
		Harvest.animationPlantDescribe(ItemID.peppercorncrop_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;       
			case 1 : 
				this.anim1();
					break;        
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
			this.data.age++;
			this.switcher();  
		}	
	},
	init:function(){  	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit( ItemID.peppercorn ,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID( ItemID.peppercorn_seed , function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.peppercorncrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.peppercorn_seed, item.count - 1, 0);
	}
});




// file: CROPS/candleberry.js

﻿IDRegistry.genBlockID("candleberrycrop"); 
Block.createBlock("candleberrycrop", [
	{name: "Candleberrycrop", texture: [["empty", 0]], inCreative: false}
]);
Harvest.plantShape( BlockID.candleberrycrop );

TileEntity.registerPrototype(BlockID.candleberrycrop, {
	defaultValues: {
		age: 0
	},
	createAnimations:function(){
		if( __config__.access("advanced_item_models")==true){
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.5);
		}
		else{
			this.ani0 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.3);
		}
		this.ani1 = new Animation.Item(this.x+0.5,this.y+0.6,this.z+0.7);
		this.ani2 = new Animation.Item(this.x+0.7,this.y+0.6,this.z+0.5);
		this.ani3 = new Animation.Item(this.x+0.3,this.y+0.6,this.z+0.5);
	},
	destroyAnimations:function(){
		this.ani0.destroy();
		this.ani1.destroy();
		this.ani2.destroy();
		this.ani3.destroy(); 	
	},
	anim0:function(){	
		Harvest.animationPlantDescribe(ItemID.candleberry_ani0 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim1:function(){	
		Harvest.animationPlantDescribe(ItemID.candleberry_ani1 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	anim2:function(){	
		Harvest.animationPlantDescribe(ItemID.candleberry_ani2 ,this.ani0,this.ani1,this.ani2,this.ani3);
	},
	switcher:function(){
		switch(this.data.age){
			case 0 : 
				this.anim0();
					break;       
			case 1 : 
				this.anim1();
					break;        
			case 2 :
				this.anim2();
					break;
		}
	},		 	
	tick:function(){
		if(World.getBlockID(this.x,this.y-1,this.z)==0){
			this.destroy();	
		}	
		var number = 0.0002;
		if((Math.random()<number)&&(this.data.age<2)){    
				this.data.age++;
				this.switcher();  
		}	
	},
	init:function(){    	
		this.createAnimations();
    	this.switcher();
	},
	destroy:function(){
		World.destroyBlock(this.x, this.y, this.z, false);
		World.setBlock(this.x,this.y-1,this.z,60,0);	 
    	this.destroyAnimations();
	},
	click: function(id, count, data, coords){
		var pl = Player.getCarriedItem();
		if((pl.id==351)&&(pl.data==15)&&this.data.age<2){
			this.data.age++;
			this.switcher();
		}
		if(this.data.age==2){
			this.data.age=0;
			this.switcher();
			Harvest.dropFruit(ItemID.candleberry,this.x,this.y,this.z);
		}
	} 	
});
Item.registerUseFunctionForID(ItemID.candleberryseed, function(coords, item, block){
	if(block.id == 60){
		World.setBlock(coords.x,coords.y+1,coords.z, BlockID.candleberrycrop ,0);
		World.addTileEntity(coords.x, coords.y+1, coords.z);
		Player.setCarriedItem(ItemID.candleberryseed, item.count - 1, 0);
	}
});




