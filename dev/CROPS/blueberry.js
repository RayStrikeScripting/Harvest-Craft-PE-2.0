CropRegistry.registerWithID("blueberrycrop","blueberrycrop","blueberrycrop",ItemID.blueberry_seed);
CropRegistry.fruitPush(BlockID.blueberrycrop,ItemID.blueberry);
Harvest.registerDroppingBlock(BlockID.blueberrycrop);

PlantModel.crop(BlockID.blueberrycrop);

TileEntity.registerPrototype(BlockID.blueberrycrop,cropPROTO);

CropRegistry.registerSeed(ItemID.blueberry_seed,BlockID.blueberrycrop);