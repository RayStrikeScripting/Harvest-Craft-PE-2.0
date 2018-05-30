IDRegistry.genBlockID("aridgarden"); 
Block.createBlock("aridgarden", [
	{name: "Arid garden", texture: [["empty", 0],["empty", 0],["aridgarden", 0]], inCreative: false}
],BLOCK_TYPE_PLANT);
PlantModel.tree(BlockID.aridgarden,0);
CropRegistry.deriveCropAsClass("harvestcraft_tropicalGarden",{
	id:BlockID.aridgarden,
	drop:0,
	seed:ItemID.aridGardenITEM
});
Block.registerDropFunction("aridgarden", function(coords, blockID, blockData, level){
	var drop = [];	
	drop.push([ItemID.cactusfruit, Random.Int(1,3), 0]);	
	drop.push([81, Random.Int(1,3), 0]);
	return drop;
});