CropRegistry.registerWithID("blackberrycrop","blackberrycrop","blackberrycrop",ItemID.blackberry_seed);
CropRegistry.fruitPush(BlockID.blackberrycrop,ItemID.blackberry);
Harvest.registerDroppingBlock(BlockID.blackberrycrop);

PlantModel.crop(BlockID.blackberrycrop);

TileEntity.registerPrototype(BlockID.blackberrycrop,cropPROTO);

CropRegistry.registerSeed(ItemID.blackberry_seed,BlockID.blackberrycrop);