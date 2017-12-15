/*IDRegistry.genItemID("Atree");
Item.createItem("Atree", "Spawn Tree", {name: "stick", data: 0});
Item.registerUseFunction("Atree",function(coords, item, block){
	Debug.m("Item");	
	Harvest.addTree(0,BlockID.appleBlock,8,coords.x,coords.y,coords.z);
});

IDRegistry.genItemID("AGE");
Item.createItem("AGE", "AGE", {name: "stick", data: 0});
Item.registerUseFunction("AGE",function(coords, item, block){
	var te = World.getTileEntity(coords.x,coords.y,coords.z);
	Game.message(te.isCrop);
 });
 
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
});*/