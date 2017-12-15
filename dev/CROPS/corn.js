CropRegistry.registerWithID("corncrop","corncrop","corncrop",ItemID.corn_seed);
CropRegistry.fruitPush(BlockID.corncrop,ItemID.corn);
Harvest.registerDroppingBlock(BlockID.corncrop);

PlantModel.crop(BlockID.corncrop);

TileEntity.registerPrototype(BlockID.corncrop,cropPROTO);

CropRegistry.registerSeed(ItemID.corn_seed,BlockID.corncrop);