CropRegistry.registerWithID("rutabagacrop","rutabagacrop","rutabagacrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.rutabagacrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.rutabagacrop,
	drop:ItemID.rutabaga,
	seed:ItemID.rutabaga_seed
});