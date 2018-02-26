CropRegistry.registerWithID("appleBlock","appleBlock","appleBlock",BLOCK_TYPE_CROP);
PlantModel.tree(BlockID.appleBlock,0);
CropRegistry.deriveCropAsClass("Harvestcraft_fruit",{
	id:BlockID.appleBlock,
	drop:260
});