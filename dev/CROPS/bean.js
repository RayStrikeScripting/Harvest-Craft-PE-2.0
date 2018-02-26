CropRegistry.registerWithID("beancrop","beancrop","beancrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.beancrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.beancrop,
	drop:ItemID.bean,
	seed:ItemID.bean_seed
});