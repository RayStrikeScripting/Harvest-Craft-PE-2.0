CropRegistry.registerWithID("curryleaf","curryleaf","curryleafcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.curryleaf);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.curryleaf,
	drop:ItemID.curryleaf,
	seed:ItemID.curryleaf_seed
});