CropRegistry.registerWithID("corncrop","corncrop","corncrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.corncrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.corncrop,
	drop:ItemID.corn,
	seed:ItemID.corn_seed
});