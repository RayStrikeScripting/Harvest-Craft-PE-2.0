CropRegistry.registerWithID("strawberrycrop","strawberrycrop","strawberrycrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.strawberrycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.strawberrycrop,
	drop:ItemID.strawberry,
	seed:ItemID.strawberry_seed
});