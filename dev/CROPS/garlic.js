CropRegistry.registerWithID("garliccrop","garliccrop","garliccrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.garliccrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.garliccrop,
	drop:ItemID.garlic,
	seed:ItemID.garlic_seed
});