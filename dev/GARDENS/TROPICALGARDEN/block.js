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