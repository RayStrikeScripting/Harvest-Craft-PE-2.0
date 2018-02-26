CropRegistry.registerWithID("raspberrycrop","raspberrycrop","raspberry_crop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.raspberrycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.raspberrycrop,
	drop:ItemID.raspberry,
	seed:ItemID.raspberry_seed
});