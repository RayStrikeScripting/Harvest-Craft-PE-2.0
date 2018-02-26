CropRegistry.registerWithID("bellpeppercrop","bellpeppercrop","bellpeppercrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.bellpeppercrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.bellpeppercrop,
	drop:ItemID.bellpepper,
	seed:ItemID.bellpepper_seed
});