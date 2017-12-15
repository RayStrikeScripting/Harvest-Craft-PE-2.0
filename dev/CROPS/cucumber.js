CropRegistry.registerWithID("cucumbercrop","cucumbercrop","cucumbercrop",ItemID.cucumber_seed);
CropRegistry.fruitPush(BlockID.cucumbercrop,ItemID.cucumber);
Harvest.registerDroppingBlock(BlockID.cucumbercrop);

PlantModel.crop(BlockID.cucumbercrop);

TileEntity.registerPrototype(BlockID.cucumbercrop,cropPROTO);

CropRegistry.registerSeed(ItemID.cucumber_seed,BlockID.cucumbercrop);