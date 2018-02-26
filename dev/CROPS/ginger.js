CropRegistry.registerWithID("gingercrop","gingercrop","gingercrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.gingercrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.gingercrop,
	drop:ItemID.ginger,
	seed:ItemID.ginger_seed
});