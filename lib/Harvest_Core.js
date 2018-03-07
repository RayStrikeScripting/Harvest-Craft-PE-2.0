//Harvest Core by Nikolay Savenko
//API level: 2.0
LIBRARY({
	name:"Harvest_Core",
	version:2,
	shared:true,
	api:"CoreEngine"
});

var BLOCK_TYPE_CROP = Block.createSpecialType({
    base: 59,
    opaque: false,
    rendertype: 6,
    lightopacity: 0,
    destroytime: 0
});
var BLOCK_TYPE_PLANT = Block.createSpecialType({
    base: 59,
    opaque: false,
    rendertype: 1,
    lightopacity: 0
});

var Random = {
    //Этот модуль облегчает генерацию случайных чисел
    Float:function(min,max){
        var result = ((Math.random()*max)+min);
        return result;
    },
    Int:function(min,max){
        var result = Math.round((Math.random()*max)+min);
        return result;
    }
};

var Harvest = {
    toolList:{},
    //Этот модуль является сборником полезных методов для удобной работы с растениями и деревьями
    dropWithoutDirt:{},
    dropWithoutLeaves:{},
    grassDropsArray:[],
    addGrassDrop:function(item){
        Callback.addCallback("DestroyBlock", function(coords, block, player){
            var trueIDs = {
                31:true,
                175:true
            };
            var trueMetaS = {
                1:true,
                2:true,
                10:true
            };
            if(trueIDs[block.id]&&trueMetaS[block.data]){
                var nn = Random.Int(0,400);
                if(nn<Harvest.grassDropsArray.length-1){  
                    Harvest.dropPlant(Harvest.grassDropsArray[nn],coords.x,coords.y,coords.z);
                }
            }
        });
        Callback.addCallback("ItemUse", function(coords, item, block){       
            var trueTool = {
                290:true,
                291:true,
                292:true,
                293:true,
                294:true
            };          
            if(block.id==2&&trueTool[item.id]){
                var nn = Random.Int(0,400);
                if(nn<Harvest.grassDropsArray.length){  
                    Harvest.dropPlant(Harvest.grassDropsArray[nn],coords.x,coords.y+1,coords.z);
                }
            }
        });
    },
    registerTool:function(tool){
        Harvest.toolList[tool] = true;
    },
    registerDroppingBlock:function(iiid){
        Callback.addCallback("DestroyBlock", function(coords, block, player){
            if(World.getBlockID(coords.x,coords.y+1,coords.z)==iiid){
                World.destroyBlock(coords.x, coords.y+1, coords.z,true);
                World.removeTileEntity(coords.x, coords.y+1, coords.z);
            }
        });
        Harvest.dropWithoutDirt[iiid] = true;
    },
    registerLeavesDroppingBlock:function(iiid){
        Callback.addCallback("DestroyBlock", function(coords, block, player){
            if(World.getBlockID(coords.x,coords.y-1,coords.z)==iiid){
                World.destroyBlock(coords.x, coords.y-1, coords.z,true);
                World.removeTileEntity(coords.x, coords.y-1, coords.z);
            }
        });
        Harvest.dropWithoutLeaves[iiid] = true;
    },
    setFood:function(id,name,food){
        IDRegistry.genItemID(id);
        Item.createFoodItem(id,name, {name: id, meta: 0}, {food: food});
    },
    recipe:function(id,ingredients){		
        if(ingredients){
            if(!id.count){
                id.count = 1;
            }
            if(!id.data){
                id.data = 0;
            }
			Callback.addCallback("LevelLoaded", function(){
				Recipes.addShapeless({id: id.id, count: id.count, data: id.data}, ingredients, function(api, field, result){
					for (var i in field){
						if (!Harvest.toolList[field[i].id]){
							api.decreaseFieldSlot(i);
						}
					}
				});
			});
        }
    },
	recipeVariations:function(id,tool,ingredients){
		var rrecipes = [];
		if(!id.count){
			id.count = 1;
		}
		if(!id.data){
			id.data = 0;
		}
        for(var i in ingredients){
            for(var d in ingredients){
				if(ingredients[i]!=ingredients[d]){
					rrecipes.push([{id:ingredients[i],data:0},{id:ingredients[d],data:0},{id: tool, data: 0}]);
				}
            }
        }
        Callback.addCallback("LevelLoaded", function(){
			for(var rec in rrecipes){
				Recipes.addShapeless({id: id.id, count: id.count, data: id.data}, rrecipes[rec],function(api, field, result){
					for (var i in field){
						if (!Harvest.toolList[field[i].id]){
							api.decreaseFieldSlot(i);
						}
					}
				});
			}
		});
    },
    recipeDuoVariations:function(id,tool,ingredients){
		var rrecipes = [];
		if(!id.count){
            id.count = 1;
        }
        if(!id.data){
            id.data = 0;
        }
        for(var d in ingredients){
            rrecipes.push([{id:ingredients[d],data:0},{id: tool, data: 0}]);
        } 
		Callback.addCallback("LevelLoaded", function(){	
			for(var w in rrecipes){
				Recipes.addShapeless({id: id.id, count: id.count, data: id.data}, rrecipes[w], function(api, field, result){
					for (var i in field){
						if (!Harvest.toolList[field[i].id]){
							api.decreaseFieldSlot(i);
						}
					}
				});
			}
		});
    },
    addBlockGeneration:function(block,biomes,cccount,chance){
        Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
            if(Math.random() <chance){
				var count; 
				if(typeof(cccount)=="object"){
					count = Random.Int(cccount.min,cccount.max);
				}
				else if(typeof(cccount)=="string"){
					count=cccount;
				}
                for(var ccount = 1;ccount<=count;ccount++){
                    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
                    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
                    if(biomes==null){
                        World.setBlock(coords.x, coords.y + 1, coords.z, block.id, block.data);
                        World.addTileEntity(coords.x, coords.y + 1, coords.z);  
                    }else{
                        for(var idd in biomes ){
                            var id = biomes[idd];
                            if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)){
                                World.setBlock(coords.x, coords.y + 1, coords.z, block.id, block.data);
                                World.addTileEntity(coords.x, coords.y + 1, coords.z);  
                            }
                        }
                    }           
                }
            }
        });
    },
    registerDrop:function(bl,itm){
        Block.registerDropFunction(bl, function(coords, blockID, blockData, level){
            return[[ itm,Random.Int(1,3),0 ]];
        });
    },
    registerDestroy:function(bl,itm){
        Block.registerDropFunction(bl, function(coords, blockID, blockData, level){
            return[[ itm, 1,0 ]];
        });
    },
	drop:function(id,count,coords){
		Entity.setVelocity(
			World.drop( coords.x ,  coords.y,   coords.z , id, count, 0),
			Random.Float(-0.2,0.2),
			Random.Float(-0.2,0.2),
			Random.Float(-0.2,0.2)
        );
	},
    dropFruit:function(id,x,y,z){
		Entity.setVelocity(
			World.drop( x , y,  z , id, Random.Int(1,3), 0),
			Random.Float(-0.2,0.2),
			Random.Float(-0.2,0.2),
			Random.Float(-0.2,0.2)
        );
    },
    dropPlant:function(id,x,y,z){
        Entity.setVelocity(
            World.drop( x , y,  z , id, 1 , 0),
            Random.Float(-0.2,0.2),
            Random.Float(-0.2,0.2),
            Random.Float(-0.2,0.2)
        );
    }
};

var CropRegistry = {
    cropClasses:{/*
        "harvest_crop":{
            logic:{},
			functions:{
				derive:function(class,id){},
				grow:function(coords,cchance){},
				collect:function(coords,dropFruit){}
			},
			deriveFunction:function(class,id){},
            config:{
                ageSpeed:0.001,
                manure:{id:351,data:15},
                farmland:[{id:60,data:0}],
				seedsPlaceFunc:true
            },
            heirs:{
                BlockID.candleberry:{
                    drop:ItemID.candleberry,
                    seed:ItemID.candleberrySeed
                }
            }
        }*/
    },
    registerWithID:function(blockID,name,texture,BLOCK_TYPE){
        if(typeof texture == "string"){         
            IDRegistry.genBlockID(blockID); 
            Block.createBlock(blockID, [
            {name: name, texture: [["empty", 0],["empty", 0],[texture, 0]], inCreative: false},
            {name: name, texture: [["empty", 0],["empty", 0],[texture, 1]], inCreative: false},
            {name: name, texture: [["empty", 0],["empty", 0],[texture, 2]], inCreative: false}
            ],BLOCK_TYPE);
        }
        else{
            IDRegistry.genBlockID(blockID); 
            Block.createBlock(blockID,texture.textures,BLOCK_TYPE); 
        }
    },
    registerClass:function(name){
        this.cropClasses[name] = {
            logic:null,
			functions:{
				derive:null,
				grow:null,
				collect:null
			},
            config:{},
            heirs:{}
        };
    },
    deriveCropAsClass:function(classs,crop){
        var cl = this.cropClasses[classs];
        if(cl){
			var cfg = cl.config
            cl.heirs[crop.id] = {drop:crop.drop,seed:crop.seed};
			if(cfg.seedsPlaceFunc){
				Item.registerUseFunctionForID(crop.seed, function(coords, item, block){
                        for(var i in cfg.farmland){
                            var farmland = cfg.farmland[i];
                            if(block.id == farmland.id&&block.data == farmland.data){
                                World.setBlock(coords.x,coords.y+1,coords.z,crop.id ,0);
                                Player.setCarriedItem(crop.seed, item.count - 1, 0);
								if(cl.logic){
									World.addTileEntity(coords.x, coords.y+1, coords.z);
								}
                            }
                        }                   
                });
			}
			if(cl.logic){	
				TileEntity.registerPrototype(crop.id,cl.logic);
			}  
			if(cl.functions.derive){			
				cl.functions.derive(cl,crop.id);
			}
        }
    },
	registerClassDeriveFunction:function(classs,ffunc){
		var cl = this.cropClasses[classs];
		if(cl){
			cl.functions.derive = ffunc;
		}
	},
    registerClassLogic:function(classs,logic){
        if(!logic.manure){
            logic.manure = this.cropClasses[classs].config.manure;
        }
        if(!logic.isCrop){
            logic.isCrop = true;
        };
        var cl = this.cropClasses[classs];
        cl.logic = logic;
    },
    registerClassConfig:function(classs,config){
		if(!config.seedsPlaceFunc){
            config.seedsPlaceFunc = false;
        }
        if(!config.ageSpeed){
            config.ageSpeed = 0;
        }
        if(!config.standartAge){
            config.standartAge = 0
        }
        if(!config.farmland){
            config.farmland = [];
        }
        var cl = this.cropClasses[classs];
		if(cl){
			cl.config = config;
		}
    },
	setRegularFunctionsForClass:function(cl,growChance,particles){
		var clData = this.cropClasses[cl];		
		var funcs = clData.functions;
		if(!funcs.grow){
			funcs.grow = function(coords,cchance){
				var block = World.getBlock(coords.x,coords.y,coords.z);
				var chance = 1;
				if(cchance){
					chance = cchance;
				}
				if(block.data<2){
					if(Math.random()<chance){
						World.setBlock(coords.x,coords.y,coords.z,block.id,block.data+1);
					}
					if(particles){
						for(var i = 0;i<particles;i++){
							Particles.addParticle(Native.ParticleType.happyVillager, coords.x+Math.random()*.8,coords.y+Math.random()*.8,coords.z+Math.random()*.8,0,0,0,0)
						}
					}
				}
			}
		}
		if(!funcs.collect){
			funcs.collect = function(coords,dropFruit){
				var block = World.getBlock(coords.x,coords.y,coords.z);
				var dropID = CropRegistry.getDropFromCrop(block.id);
				World.setBlock(coords.x,coords.y,coords.z,block.id,0);
				if(dropFruit){
					if(typeof(dropFruit)=="boolean"){
						Harvest.drop(dropID,Random.Int(1,3),coords);
					}
					else if(typeof(dropFruit)=="number"){
						Harvest.drop(dropID,dropFruit,coords);
					}
				}else{
					return dropID;
				}
			}
		}
		if(clData.config){
			var manure  = clData.config.manure;
			Callback.addCallback("ItemUse", function(coords, item, block){
				for(var crop in clData.heirs){
					var chance = 0;
					if(growChance){
						chance = growChance;
					}
					if(block.id==crop){
						if(item.id==manure.id&&item.data==manure.data&&block.data<2){
							funcs.grow(coords,chance);
						}
						else if(block.data==2){							
							funcs.collect(coords,true);
						}
					}
				}
			});
		}		
	},
	growCropAtCoords:function(coords,cchance){
		var cl = CropRegistry.getClassOfCrop(World.getBlockID(coords.x,coords.y,coords.z));
		var clData = this.cropClasses[cl];
		if(clData){
			if(clData.functions.grow){
				alert("grow");
				clData.functions.grow(coords,cchance);
			}else{alert("XEP")}
		}
	},
	collectCropAtCoords:function(coords,dropFruit){
		var cl = CropRegistry.getClassOfCrop(World.getBlockID(coords.x,coords.y,coords.z));
		var clData = this.cropClasses[cl];
		if(clData){
			if(clData.functions.collect){
				clData.functions.collect(coords,dropFruit);
			}
		}
	},
	setGrowFunctionForClass:function(classs,func){
		var clData =  this.cropClasses[classs];
		
		clData.functions.grow = func;
	},
	setCollectFunctionForClass:function(classs,func){
		var clData =  this.cropClasses[classs];	
		clData.functions.collect = func;
	},
	getClassOfCrop:function(crop){
		for(var i in this.cropClasses){
            if(this.cropClasses[i]){
                for(var s in this.cropClasses[i].heirs){
                    if(s==crop){
						return i
                    }
                }
            }
        }
	},
    getConfigFromCrop:function(crop){
        for(var i in this.cropClasses){
            if(this.cropClasses[i]){
                for(var s in this.cropClasses[i].heirs){
                    if(s==crop){
						if(this.cropClasses[i].config){
							return this.cropClasses[i].config;							
						}				
                    }
                }
            }
        }
    },
    getDropFromCrop:function(crop){
        for(var i in this.cropClasses){
            var id = this.cropClasses[i];
            if(id){
                var idHeirs = id.heirs;
                for(var s in idHeirs){
                    var idd = idHeirs[s];
                    if(crop==s){
                        return idd.drop;
                    }
                }
            }
        }
    },
    getCropFromSeed:function(seedID){
        for(var i in this.cropClasses){
            var id = this.cropClasses[i];
            if(id){
                var idHeirs = id.heirs;
                for(var s in idHeirs){
                    var idd = idHeirs[s];
                    if(seedID==idd.seed){
                        return s;
                    }
                }
            }
        }
    },
    getSeedFromCrop:function(CropID){
        for(var i in this.cropClasses){
            var id = this.cropClasses[i];
            if(id){
                var idHeirs = id.heirs;
                for(var s in idHeirs){
                    var idd = idHeirs[s];
                    if(CropID==s){
                        return idd.seed;
                    }
                }
            }
        }
    },
    isCrop:function(crop){
        for(var i in this.cropClasses){
            var id = this.cropClasses[i];
            if(id){
                var idHeirs = id.heirs;
                for(var s in idHeirs){
                    var idd = idHeirs[s];
                    if(crop==s){
                        return true;
                    }
                }
            }
        }
    }
};

function CropTexture(){
    this.textures = [];
    this.addTextures = function(count,name){
        for(var i = 0; i<count; i++){
            this.textures.push({name: name, texture: [["empty", 0],["empty", 0],[name, 0]], inCreative: false});
        }
    };
    this.addTexture = function(texture){
        this.textures.push(texture);
    };
};

function TreePrototype(){
    this.structure = [];
    this.fruitsArea = [];
    this.validateStructure = function(){
        this.structure = [];
    };
    this.addBlock = function(structure){
        if(structure.id&&structure.x&&structure.y&&structure.z){
            if(!structure.data){
                structure.data = 0;
                this.structure.push(structure);
            }
            else{
                this.structure.push(structure);
            }
        }
    };
    this.addStructure = function(structure){
        for(var i in structure){
            var element = structure[i];
            var pos1 = element.box.pos1;
            var pos2 = element.box.pos2;
            if(pos1.x<=pos2.x&&pos1.y<=pos2.y&&pos1.z<=pos2.z){
                for(var xx = pos1.x; xx<=pos2.x;xx++){
                    for(var yy = pos1.y; yy<=pos2.y;yy++){
                        for(var zz = pos1.z; zz<=pos2.z;zz++){
                            var blockk = {id:element.id,data:element.data,x:xx,y:yy,z:zz};
                            this.structure.push(blockk);
                        }
                    }
                }
            }
            else{
                Logger.LogError("pos2 must be higher than pos1")
            }
        }
    };
    this.debugStructure = function(){
        for(var i in this.structure){
            var element = this.structure[i];
            alert("id: "+element.id+" x: "+element.x+" y: "+element.y+" z: "+element.z);
        }
    };
    this.debugFruits = function(){
        for(var i in this.fruitsArea){
            var element = this.fruitsArea[i];
            if(element.id){
                alert("id: "+element.id+" x: "+element.x+" y: "+element.y+" z: "+element.z);
            }
            else{
                alert(" x: "+element.x+" y: "+element.y+" z: "+element.z);
            }
        }
    };
    this.addFruitsArea = function(structure){
        for(var i in structure){
            var element = structure[i];
            var pos1 = element.box.pos1;
            var pos2 = element.box.pos2;
            if(pos1.x<=pos2.x&&pos1.y<=pos2.y&&pos1.z<=pos2.z){
                for(var xx = pos1.x; xx<=pos2.x;xx++){
                    for(var yy = pos1.y; yy<=pos2.y;yy++){
                        for(var zz = pos1.z; zz<=pos2.z;zz++){
                            if(element.id){
                                if(!element.data){
                                    element.data = 0;
                                    var blockk = {id:element.id,data:element.data,x:xx,y:yy,z:zz};
                                    this.fruitsArea.push(blockk);
                                }
                                else{
                                    var blockk = {id:element.id,data:element.data,x:xx,y:yy,z:zz};
                                    this.fruitsArea.push(blockk);
                                }
                            }
                            else{
                                var blockk = {x:xx,y:yy,z:zz};
                                this.fruitsArea.push(blockk);
                            }                       
                        }
                    }
                }
            }
            else{
                Logger.LogError("pos2 must be higher than pos1")
            }
        }
    };
    this.deploy = function(coords,activate,fruits){
        for(var i in this.structure){
            var element = this.structure[i];
            World.setBlock(coords.x+element.x,coords.y+element.y,coords.z+element.z,element.id,element.data);
            if(activate){
                World.addTileEntity(coords.x+element.x,coords.y+element.y,coords.z+element.z)
            }
        }
        for(var i in fruits){
            var fruit = fruits[i];
            for(var o = 0;o<fruit.count;){
                var element = this.fruitsArea[Random.Int(0,this.fruitsArea.length-1)];
                if(element.id&&element.data){
                    World.setBlock(coords.x+element.x,coords.y+element.y,coords.z+element.z,element.id,element.data);
                    if(activate){
                        World.addTileEntity(coords.x+element.x,coords.y+element.y,coords.z+element.z)
                    }
					o++; 
                }
                else{
                    if(World.getBlockID(coords.x+element.x,coords.y+element.y,coords.z+element.z)==0){
                        World.setBlock(coords.x+element.x,coords.y+element.y,coords.z+element.z,fruit.id,fruit.data);					
                        if(activate){
                            World.addTileEntity(coords.x+element.x,coords.y+element.y,coords.z+element.z)
                        }
                        o++;    
                    }               
                }
            }
        }
    }
};

var TreeRegistry = {
    treeClasses:{/*
        "harvesTree":{
            proto: harvestTree
            deployFunc:function(treeClass){},
			config:{
				fruitCount:7
			}
            heirs:{
                "apple":{
                    sapling:{
                        item:ItemID.appleSapling,
                        block:BlockID.appleSapling
                    },
					fruit:{
						block:BlockID.apple,
						item:260
					}
                }
            }
        }
    */},
    registerClass:function(name){
        this.treeClasses[name] = {
            proto:null,
            logic:{},
			deriveFunc:null,
            deployFunc:function(){},
            config:{},
            heirs:{}
        };
    },
    deriveTreeAsClass:function(classs,tree){
        var cl = this.treeClasses[classs];
        if(cl){
            cl.heirs[tree.name] = {
				sapling:{
					item:tree.sapling.item,
					block:tree.sapling.block
				},
				fruit:{
					item:tree.fruit.item,
					block:tree.fruit.block
				}
			};
			if(cl.deriveFunc){
				cl.deriveFunc(cl);
			}
        }
    },
    deployTree:function(xx,yy,zz,tree){
        for(var i in this.treeClasses){
            var cllass = this.treeClasses[i];
            if(cllass){
                for(var y in cllass.heirs){
                    var ttree = cllass.heirs[y];
                    if(y==tree){
                        if(cllass.proto){
                            if(cllass.proto.deploy){
                                cllass.proto.deploy({x:xx,y:yy,z:zz},true,[{id:ttree.fruit.block,count:cllass.config.fruitCount,data:0}]);
                                if(cllass.deployFunc){
                                    cllass.deployFunc(cllass);
                                }
                            }
                        }
                    }
                }   
            }
        }
    },
    addTreeGeneration:function(tree,biomes,countt,chance){
        Callback.addCallback("GenerateChunk", function(chunkX, chunkZ){
            if(Math.random() <chance){
				var count =0 ;
				if(typeof(countt)=="object"){
					count = Random.Int(countt.min,countt.max);
				}else{
					count = countt;
				}
                for(var ccount = 1;ccount<=count;ccount++){
                    var coords = GenerationUtils.randomCoords(chunkX, chunkZ, 64, 128);
                    coords = GenerationUtils.findSurface(coords.x, coords.y, coords.z);
                    if(biomes==null){						
						TreeRegistry.deployTree(coords.x,coords.y,coords.z,tree); 
                    }else{
                        for(var idd in biomes ){
                            var id = biomes[idd];
                            if((World.getBiome((chunkX + 0.5) * 16, (chunkZ + 0.5) * 16)==id)&&(World.getBlockID(coords.x, coords.y, coords.z) == 2)){
								TreeRegistry.deployTree(coords.x,coords.y,coords.z,tree); 
                            }
                        }
                    }           
                }
            }
        });
    },
    registerClassDeploy:function(classs,func){
        this.treeClasses[classs].deployFunc = func;
    },
    registerClassConfig:function(classs,config){
        if(!config.fruitCount){
            config.fruitCount = 0
        }
        var cl = this.treeClasses[classs];
        cl.config = config;
    },
    registerClassPrototype:function(classs,pproto){
        var cl = this.treeClasses[classs];
        cl.proto = pproto;
    },
    getTreeFromSaplingBlock:function(block){
        for(var i in this.treeClasses){
            var cllass = this.treeClasses[i];
            for(var y in cllass.heirs){
                var ttree = cllass.heirs[y];
                if(ttree.sapling.block==block){
                    return y;
                }
            }
        }
    },
    getConfigFromTree:function(tree){
        for(var i in this.treeClasses){
            var cllass = this.treeClasses[i];
            for(var y in cllass.heirs){
                if(y==tree){
                    return cllass.config;
                }
            }
        }
    }
};

EXPORT("BLOCK_TYPE_CROP", BLOCK_TYPE_CROP);
EXPORT("BLOCK_TYPE_PLANT", BLOCK_TYPE_PLANT);
EXPORT("Random", Random);
EXPORT("Harvest", Harvest);
EXPORT("CropRegistry", CropRegistry);
EXPORT("CropTexture", CropTexture);
EXPORT("TreePrototype", TreePrototype);
EXPORT("TreeRegistry", TreeRegistry);