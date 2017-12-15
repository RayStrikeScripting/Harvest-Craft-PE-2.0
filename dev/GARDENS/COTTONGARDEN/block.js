IDRegistry.genBlockID("cottongarden"); 
Block.createBlock("cottongarden", [
	{name: "Cotton garden", texture: [["empty", 0],["empty", 0],["cottoncrop", 2]], inCreative: false}
],BLOCK_TYPE_PLANT);

Harvest.registerDroppingBlock(BlockID.cottongarden);

PlantModel.tree(BlockID.cottongarden,0);

CropRegistry.fruitPush(BlockID.cottongarden,ItemID.cottongardenITEM);

Block.registerDropFunction("cottongarden", function(coords, blockID, blockData, level){
	var drop = [];
	drop.push([ItemID.cotton,rrr, 0]);
	return drop;
});