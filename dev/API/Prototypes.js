var BLOCK_TYPE_CANDLE = Block.createSpecialType({
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
			Player.decreaseCarriedItem(1);
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
	farmland:[{id:18,data:0}],
	growStages:3
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
	Block.registerDropFunction(idd, function(coords, blockID, blockData, level){
		return[[ 0, 0,0 ]];
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