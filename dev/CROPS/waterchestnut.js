CropRegistry.registerWithID("waterchestnutcrop","waterchestnutcrop","waterchestnutcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.waterchestnutcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.waterchestnutcrop,
	drop:ItemID.waterchestnut,
	seed:ItemID.waterchestnut_seed
});