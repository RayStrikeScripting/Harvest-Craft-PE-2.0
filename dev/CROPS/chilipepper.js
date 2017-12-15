CropRegistry.registerWithID("chilipeppercrop","chilipeppercrop","chilipeppercrop",ItemID.chili_pepper_seed);
CropRegistry.fruitPush(BlockID.chilipeppercrop,ItemID.chili_pepper);
Harvest.registerDroppingBlock(BlockID.chilipeppercrop);

PlantModel.crop(BlockID.chilipeppercrop);

TileEntity.registerPrototype(BlockID.chilipeppercrop,cropPROTO);

CropRegistry.registerSeed(ItemID.chili_pepper_seed,BlockID.chilipeppercrop);