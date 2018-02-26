CropRegistry.registerWithID("cabbagecrop","cabbagecrop","cabbagecrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.cabbagecrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.cabbagecrop,
	drop:ItemID.cabbage,
	seed:ItemID.cabbage_seed
});