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
//цнбмнйнд! ме пейнлемдсеряъ й опнвремхч!
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