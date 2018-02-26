CropRegistry.registerWithID("tomatocrop","tomatocrop","tomatocrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.tomatocrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.tomatocrop,
	drop:ItemID.tomato,
	seed:ItemID.tomato_seed
});