CropRegistry.registerWithID("candleberrycrop","candleberrycrop","candleberrycrop",ItemID.candleberryseed);
CropRegistry.fruitPush(BlockID.candleberrycrop,ItemID.candleberry);
Harvest.registerDroppingBlock(BlockID.candleberrycrop);

PlantModel.crop(BlockID.candleberrycrop);

TileEntity.registerPrototype(BlockID.candleberrycrop,cropPROTO);

CropRegistry.registerSeed(ItemID.candleberryseed,BlockID.candleberrycrop);