CropRegistry.registerWithID("peascrop","peascrop","peascrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.peascrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.peascrop,
	drop:ItemID.peas,
	seed:ItemID.peas_seed
});