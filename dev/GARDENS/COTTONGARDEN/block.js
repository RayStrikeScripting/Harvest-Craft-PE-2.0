IDRegistry.genBlockID("cottongarden"); 
Block.createBlock("cottongarden", [
	{name: "Cotton garden", texture: [["empty", 0],["empty", 0],["cottoncrop", 2]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.cottongarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_garden",{
	id:BlockID.cottongarden,
	drop:0,
	seed:ItemID.cottongardenITEM
});
Block.registerDropFunction("cottongarden", function(coords, blockID, blockData, level){
	var drop = [];
	drop.push([ItemID.cotton,Random.Int(1,3), 0]);
	return drop;
});