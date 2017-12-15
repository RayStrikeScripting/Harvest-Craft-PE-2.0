CropRegistry.registerWithID("peppercorncrop","peppercorncrop","peppercorncrop",ItemID.peppercorn_seed);
CropRegistry.fruitPush(BlockID.peppercorncrop,ItemID.peppercorn);
Harvest.registerDroppingBlock(BlockID.peppercorncrop);

PlantModel.crop(BlockID.peppercorncrop);

TileEntity.registerPrototype(BlockID.peppercorncrop,cropPROTO);

CropRegistry.registerSeed(ItemID.peppercorn_seed,BlockID.peppercorncrop);