CropRegistry.registerWithID("ricecrop","ricecrop","ricecrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.ricecrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.ricecrop,
	drop:ItemID.rice,
	seed:ItemID.rice_seed
});