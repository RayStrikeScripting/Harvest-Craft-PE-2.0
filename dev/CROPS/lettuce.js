CropRegistry.registerWithID("lettucecrop","lettucecrop","lettucecrop",ItemID.lettuce_seed);
CropRegistry.fruitPush(BlockID.lettucecrop,ItemID.lettuce);
Harvest.registerDroppingBlock(BlockID.lettucecrop);

PlantModel.crop(BlockID.lettucecrop);

TileEntity.registerPrototype(BlockID.lettucecrop,cropPROTO);

CropRegistry.registerSeed(ItemID.lettuce_seed,BlockID.lettuce);