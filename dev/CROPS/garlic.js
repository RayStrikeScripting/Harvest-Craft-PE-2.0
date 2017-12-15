CropRegistry.registerWithID("garliccrop","garliccrop","garliccrop",ItemID.garlic_seed);
CropRegistry.fruitPush(BlockID.garliccrop,ItemID.garlic);
Harvest.registerDroppingBlock(BlockID.garliccrop);

PlantModel.crop(BlockID.garliccrop);

TileEntity.registerPrototype(BlockID.garliccrop,cropPROTO);

CropRegistry.registerSeed(ItemID.garlic_seed,BlockID.garliccrop);