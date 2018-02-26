var BLOCK_TYPE_CANDLE = Block.createSpecialType({
	base: 50,
	opaque: false,
	lightopacity: 0,
	lightlevel: 10 
});  //java.io.FileWriter


CropRegistry.registerClass("harvestcraft_crop");
CropRegistry.registerClassConfig("harvestcraft_crop",{
	ageSpeed:0.1,
	manure:{id:351,data:15},
	farmland:[{id:60,data:0}]
});
CropRegistry.registerClassDeriveFunction("harvestcraft_crop",function(classs,id){
	Block.setDestroyLevelForID (id, 0);
	ToolAPI.registerBlockMaterial(id, "plant");
	Callback.addCallback("ItemUse", function(coords, item, block){
		if(item.id==CropRegistry.getSeedFromCrop(id)){
			//World.playSound(coords.x, coords.y, coords.z, "name", 100)
		}
	});
	Callback.addCallback("DestroyBlock ", function(coords, block, player){
		if(block.id==id){
			//World.playSound(coords.x, coords.y, coords.z, "name", 100)
		}
	});
});
CropRegistry.registerClassLogic("harvestcraft_crop",{
	defaultValues : {
        grow : 0,
        fruit: 280,
        seed:0,
		onFarmLand:false,
    },
	publicFunc:{
		collect:this.collect, 
		grow:this.growCrop
	},
	growCrop:function(amount){
		if(this.data.grow+amount<100){
			this.data.grow+=amount;			
			if(this.data.grow>50&&World.getBlockData(this.x,this.y,this.z)<1){
				World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),1);
			}
		}
		if(this.data.grow+amount>100&&World.getBlockData(this.x,this.y,this.z)<2){
			this.data.grow=100
			World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),2);
		}
	},
	collect:function(drop){
		if(this.data.grow==100){
			if(drop){
				if(typeof(drop)=="number"){
					Harvest.drop(this.data.fruit,drop,{x:this.x,y:this.y,z:this.z});
				}
				else if(typeof(drop)=="boolean"){
					Harvest.drop(this.data.fruit,Random.Int(1,3),{x:this.x,y:this.y,z:this.z});
				}			
			}
			else{
				return this.data.fruit;
			}
			World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),0);
			this.data.grow=0;
		}
	},
	checkFarmLand:function(){
		if(World.getThreadTime()%20==0){
			var farmlands = CropRegistry.getConfigFromCrop(World.getBlockID(this.x,this.y,this.z)).farmland;
			for(var i in farmlands){
				var farmland  = farmlands[i];
				if(World.getBlockID(this.x,this.y,this.z)==farmland.id){
					this.data.onFarmLand = true;
				}else{
					this.data.onFarmLand = false;
				}
			}
		}
	},
	click:function(id, count, data, coords){
		if(id==this.manure.id&&data==this.manure.data){
			if(this.data.grow==100){
				this.collect(true);
			}else{
				Player.decreaseCarriedItem(1);
				this.growCrop(Random.Int(20,35));
				var particlesAmount = 20;
				var particles = true;
				if(particles){
					for(var i = 0;i<particlesAmount;i++){
						Particles.addParticle(Native.ParticleType.happyVillager, this.x+Math.random()*.8,this.y+Math.random()*.8,this.z+Math.random()*.8,0,0,0,0)
					}
				}
			}
		}
		else{
			this.collect(true);
		}
	},
	created:function(){
        this.data.fruit = CropRegistry.getDropFromCrop(World.getBlockID(this.x,this.y,this.z));
        this.data.seed = CropRegistry.getSeedFromCrop(World.getBlockID(this.x,this.y,this.z));
		this.data.ageSpeed = CropRegistry.getConfigFromCrop(World.getBlockID(this.x,this.y,this.z)).ageSpeed;	
		this.data.onFarmLand = true;
    },
	tick:function(){
		//this.checkFarmLand();
		if(Math.random()<this.data.ageSpeed){
			this.growCrop(1);
		}
		if(!this.data.onFarmLand){
			var farmlands = CropRegistry.getConfigFromCrop(World.getBlockID(this.x,this.y,this.z)).farmland[0].id;
			alert(World.getBlockID(this.x,this.y-1,this.z) + "      "+farmlands);
			World.destroyBlock(this.x,this.y,this.z,true);
			World.removeTileEntity(this.x,this.y,this.z);
		}
	}
});

CropRegistry.registerClass("harvestcraft_garden");
CropRegistry.registerClassConfig("harvestcraft_garden",{
	farmland:[{id:60,data:0},{id:2,data:0},{id:3,data:0}]
});
CropRegistry.registerClassDeriveFunction("harvestcraft_garden",function(classs,id){
	Block.setDestroyLevelForID (id, 0);
	ToolAPI.registerBlockMaterial(id, "plant");
	Callback.addCallback("ItemUse", function(coords, item, block){
		if(block.id==id){
			Harvest.drop(CropRegistry.getSeedFromCrop(id),1,coords);
			World.setBlock(coords.x,coords.y,coords.z,0,0);
		}
	});
});

CropRegistry.registerClass("Harvestcraft_treeSapling");
CropRegistry.registerClassConfig("Harvestcraft_treeSapling",{
	ageSpeed:0.1,
	manure:{id:351,data:15},
	farmland:[{id:60,data:0},{id:2,data:0},{id:3,data:0}]
});
CropRegistry.registerClassDeriveFunction("Harvestcraft_treeSapling",function(classs,id){
	Block.setDestroyLevelForID (id, 0);
	ToolAPI.registerBlockMaterial(id, "plant");
});
CropRegistry.registerClassLogic("Harvestcraft_treeSapling",{
	defaultValues : {
        grow : 0,
        tree: null,
        seed:0,
		onFarmLand:true,
    },
	publicFunc:{
		collect:this.collect, 
		grow:this.growSapling
	},
	growSapling:function(amount){
		if(this.data.grow+amount<100){
			this.data.grow+=amount;
		}
		if(this.data.grow+amount>100){
			this.data.grow=100
			TreeRegistry.deployTree(this.x,this.y,this.z,this.data.tree);
			World.removeTileEntity(this.x,this.y,this.z);
		}
	},
	collect:function(drop){},
	checkFarmLand:function(){
		if(World.getThreadTime()%5==0){
			var farmlands = CropRegistry.getConfigFromCrop(World.getBlockID(this.x,this.y,this.z)).farmland;
			for(var i in farmlands){
				var farmland  = farmlands[i];
				if(World.getBlockID(this.x,this.y,this.z)==farmland.id){
					this.data.onFarmLand = true;
				}else{
					this.data.onFarmLand = false;
				}
			}
		}
	},
	created:function(){
        this.data.tree = TreeRegistry.getTreeFromSaplingBlock(World.getBlockID(this.x,this.y,this.z));
        this.data.seed = CropRegistry.getSeedFromCrop(World.getBlockID(this.x,this.y,this.z));
		this.data.ageSpeed = CropRegistry.getConfigFromCrop(World.getBlockID(this.x,this.y,this.z)).ageSpeed;	
		this.data.onFarmLand = true;
    },
	tick:function(){
		if(Math.random()<this.data.ageSpeed){
			this.growSapling
		}
		if(!this.data.onFarmLand){
			World.destroyBlock(this.x,this.y,this.z,true);
			World.removeTileEntity(this.x,this.y,this.z);
		}
	},
	click:function(id, count, data, coords){
		if(id==this.manure.id&&data==this.manure.data){
			this.growSapling(Random.Int(20,35));
			Player.decreaseCarriedItem(1);
			var particlesAmount = 20;
			var particles = true;
			if(particles){
				for(var i = 0;i<particlesAmount;i++){
					Particles.addFarParticle(Native.ParticleType.carrotboost, this.x+Math.random,this.y+Math.random,this.z+Math.random)
				}
			}
		}
	}
});

CropRegistry.registerClass("Harvestcraft_fruit");
CropRegistry.registerClassConfig("Harvestcraft_fruit",{
	ageSpeed:0.5,
	manure:{id:351,data:15},
	farmland:[{id:18,data:-1}]
});
CropRegistry.registerClassDeriveFunction("Harvestcraft_fruit",function(classs,id){
	Block.setDestroyLevelForID (id, 0);
	ToolAPI.registerBlockMaterial(id, "plant");
	Callback.addCallback("ItemUse", function(coords, item, block){
		if(item.id==CropRegistry.getSeedFromCrop(id)){
			//World.playSound(coords.x, coords.y, coords.z, "name", 100)
		}
	});
	Callback.addCallback("DestroyBlock ", function(coords, block, player){
		if(block.id==id){
			//World.playSound(coords.x, coords.y, coords.z, "name", 100)
		}
	});
});
CropRegistry.registerClassLogic("Harvestcraft_fruit",{
	defaultValues : {
        grow : 0,
        fruit: 280,
		ageSpeed: 0.1,
		onLeaves:true
    },
	publicFunc:{
		collect:this.collect, 
		grow:this.growFruit
	},
	growFruit:function(amount){
		if(this.data.grow+amount<100){
			this.data.grow+=amount;			
			if(this.data.grow>50&&World.getBlockData(this.x,this.y,this.z)<1){
				World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),1);
			}
		}
		if(this.data.grow+amount>100&&World.getBlockData(this.x,this.y,this.z)<2){
			this.data.grow=100
			World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),2);
		}
	},
	collect:function(drop){
		if(this.data.grow==100){
			if(drop){
				if(typeof(drop)=="number"){
					Harvest.drop(this.data.fruit,drop,{x:this.x,y:this.y,z:this.z});
				}
				else if(typeof(drop)=="boolean"){
					Harvest.drop(this.data.fruit,Random.Int(1,3),{x:this.x,y:this.y,z:this.z});
				}			
			}
			else{
				return this.data.fruit;
			}
			World.setBlock(this.x,this.y,this.z,World.getBlockID(this.x,this.y,this.z),0);
			this.data.grow=0;
		}
	},
	click:function(id, count, data, coords){
		if(this.data.grow==100){
			this.collect(true);
		}
		else if(id==this.manure.id&&data==this.manure.data){
			Player.decreaseCarriedItem(1);
			var growAmount = Random.Int(20,35);
			this.growFruit(growAmount);
			var particlesAmount = 3;
			var particles = true;
			if(particles){
				for(var i = 0;i<particlesAmount;i++){
					Particles.addFarParticle(Native.ParticleType.carrotboost, this.x+Math.random,this.y+Math.random,this.z+Math.random,0,0,0,0)
				}
			}
		}
	},
	created:function(){
        this.data.fruit = CropRegistry.getDropFromCrop(World.getBlockID(this.x,this.y,this.z));
		this.data.ageSpeed = CropRegistry.getConfigFromCrop(World.getBlockID(this.x,this.y,this.z)).ageSpeed;	
		this.data.onLeaves = true;
    },
	tick:function(){
		//this.checkFarmLand();
		if(Math.random()<this.data.ageSpeed){
			this.growFruit(1);
		}
		if(!this.data.onLeaves){
			var farmlands = CropRegistry.getConfigFromCrop(World.getBlockID(this.x,this.y,this.z)).farmland[0].id;
			alert(World.getBlockID(this.x,this.y+1,this.z) + "      "+farmlands);
			World.destroyBlock(this.x,this.y,this.z,true);
			World.removeTileEntity(this.x,this.y,this.z);
		}
	}
});

TreeRegistry.registerClass("Harvestcraft_fruitTree");
TreeRegistry.registerClassConfig("Harvestcraft_fruitTree",{
	fruitCount:7
});


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
]);
TreeRegistry.registerClassPrototype("Harvestcraft_fruitTree",standartHarvestCraftTreePrototype);