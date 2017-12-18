CropRegistry.registerWithID("gingercrop","gingercrop","gingercrop",ItemID.ginger_seed);
CropRegistry.fruitPush(BlockID.gingercrop,ItemID.ginger);
Harvest.registerDroppingBlock(BlockID.gingercrop);

PlantModel.crop(BlockID.gingercrop);

TileEntity.registerPrototype(BlockID.gingercrop,cropPROTO);

CropRegistry.registerSeed(ItemID.ginger_seed,BlockID.gingercrop);