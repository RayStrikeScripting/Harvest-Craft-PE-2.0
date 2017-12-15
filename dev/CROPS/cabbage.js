CropRegistry.registerWithID("cabbagecrop","cabbagecrop","cabbagecrop",ItemID.cabbage_seed);
CropRegistry.fruitPush(BlockID.cabbagecrop,ItemID.cabbage);
Harvest.registerDroppingBlock(BlockID.cabbagecrop);

PlantModel.crop(BlockID.cabbagecrop);

TileEntity.registerPrototype(BlockID.cabbagecrop,cropPROTO);

CropRegistry.registerSeed(ItemID.cabbage_seed,BlockID.cabbagecrop);