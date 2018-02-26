CropRegistry.registerWithID("spiceleafcrop","spiceleafcrop","spiceleafcrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.spiceleafcrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.spiceleafcrop,
	drop:ItemID.spice_leaf,
	seed:ItemID.spice_leaf_seed
});