CropRegistry.registerWithID("coffeebeancrop","coffeebeancrop","coffeebeancrop",BLOCK_TYPE_CROP);
PlantModel.crop(BlockID.coffeebeancrop);
CropRegistry.deriveCropAsClass("harvestcraft_crop",{
	id:BlockID.coffeebeancrop,
	drop:ItemID.coffee_beans,
	seed:ItemID.coffee_seed
});