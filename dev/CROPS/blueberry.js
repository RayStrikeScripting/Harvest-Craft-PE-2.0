CropRegistry.registerWithID("blueberrycrop","blueberrycrop","blueberrycrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.blueberrycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.blueberrycrop,
	drop:ItemID.blueberry,
	seed:ItemID.blueberry_seed
});