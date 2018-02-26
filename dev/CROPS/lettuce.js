CropRegistry.registerWithID("lettucecrop","lettucecrop","lettucecrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.lettucecrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.lettuce,
	drop:ItemID.lettuce,
	seed:ItemID.lettuce_seed
});