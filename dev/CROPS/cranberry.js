CropRegistry.registerWithID("cranberrycrop","cranberrycrop","cranberrycrop",ItemID.cranberry_seed);
CropRegistry.fruitPush(BlockID.cranberrycrop,ItemID.cranberry);
Harvest.registerDroppingBlock(BlockID.cranberrycrop);

PlantModel.crop(BlockID.cranberrycrop);

TileEntity.registerPrototype(BlockID.cranberrycrop,cropPROTO);

CropRegistry.registerSeed(ItemID.cranberry_seed,BlockID.cranberrycrop);