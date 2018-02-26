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