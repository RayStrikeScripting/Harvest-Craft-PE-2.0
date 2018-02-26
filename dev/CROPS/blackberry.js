CropRegistry.registerWithID("blackberrycrop","blackberrycrop","blackberrycrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.blackberrycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.blackberrycrop,
	drop:ItemID.blackberry,
	seed:ItemID.blackberry_seed
});