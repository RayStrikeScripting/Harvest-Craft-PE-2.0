CropRegistry.registerWithID("spinachcrop","spinachcrop","spinachcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.spinachcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.spinachcrop,
	drop:ItemID.spinach,
	seed:ItemID.spinach_seed
});