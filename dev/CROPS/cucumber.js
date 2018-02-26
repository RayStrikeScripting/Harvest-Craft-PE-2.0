CropRegistry.registerWithID("cucumbercrop","cucumbercrop","cucumbercrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.cucumbercrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.cucumbercrop,
	drop:ItemID.cucumber,
	seed:ItemID.cucumber_seed
});