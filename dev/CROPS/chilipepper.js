CropRegistry.registerWithID("chilipeppercrop","chilipeppercrop","chilipeppercrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.chilipeppercrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.chilipeppercrop,
	drop:ItemID.chili_pepper,
	seed:ItemID.chili_pepper_seed
});