CropRegistry.registerWithID("tomatocrop","tomatocrop","tomatocrop",ItemID.tomato_seed);
CropRegistry.fruitPush(BlockID.tomatocrop,ItemID.tomato);
Harvest.registerDroppingBlock(BlockID.tomatocrop);

PlantModel.crop(BlockID.tomatocrop);

TileEntity.registerPrototype(BlockID.tomatocrop,cropPROTO);

CropRegistry.registerSeed(ItemID.tomato_seed,BlockID.tomatocrop);