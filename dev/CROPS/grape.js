CropRegistry.registerWithID("grapecrop","grapecrop","grapecrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.grapecrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.grapecrop,
	drop:ItemID.grape,
	seed:ItemID.grape_seed
});