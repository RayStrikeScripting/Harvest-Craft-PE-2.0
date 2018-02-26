CropRegistry.registerWithID("cranberrycrop","cranberrycrop","cranberrycrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.cranberrycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.cranberrycrop,
	drop:ItemID.cranberry,
	seed:ItemID.cranberry_seed
});