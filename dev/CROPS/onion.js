CropRegistry.registerWithID("onioncrop","onioncrop","onioncrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.onioncrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.onioncrop,
	drop:ItemID.onion,
	seed:ItemID.onion_seed
});