CropRegistry.registerWithID("mustardseedscrop","mustardseedscrop","mustardseedscrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.mustardseedscrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.mustardseedscrop,
	drop:ItemID.mustardseeds,
	seed:ItemID.mustard_seed
});