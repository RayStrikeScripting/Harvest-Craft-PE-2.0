CropRegistry.registerWithID("strawberrycrop","strawberrycrop","strawberrycrop",ItemID.strawberry_seed);
CropRegistry.fruitPush(BlockID.strawberrycrop,ItemID.strawberry);
Harvest.registerDroppingBlock(BlockID.strawberrycrop);

PlantModel.crop(BlockID.strawberrycrop);

TileEntity.registerPrototype(BlockID.strawberrycrop,cropPROTO);

CropRegistry.registerSeed(ItemID.strawberry_seed,BlockID.strawberrycrop);