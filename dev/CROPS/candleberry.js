CropRegistry.registerWithID("candleberrycrop","candleberrycrop","candleberrycrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.candleberrycrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.candleberrycrop,
	drop:ItemID.candleberry,
	seed:ItemID.candleberryseed
});