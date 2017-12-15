IDRegistry.genBlockID("berrygarden"); 
Block.createBlock("berrygarden", [
	{name: "Berry garden", texture: [["empty", 0],["empty", 0],["berrygardenBlock", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);

Harvest.registerDroppingBlock(BlockID.berrygarden);

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