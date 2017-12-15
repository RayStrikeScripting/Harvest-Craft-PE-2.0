CropRegistry.registerWithID("bellpeppercrop","bellpeppercrop","bellpeppercrop",ItemID.bellpepper_seed);
CropRegistry.fruitPush(BlockID.bellpeppercrop,ItemID.bellpepper);
Harvest.registerDroppingBlock(BlockID.bellpeppercrop);

PlantModel.crop(BlockID.bellpeppercrop);

TileEntity.registerPrototype(BlockID.bellpeppercrop,cropPROTO);

CropRegistry.registerSeed(ItemID.bellpepper_seed,BlockID.bellpeppercrop);