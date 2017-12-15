CropRegistry.registerWithID("peascrop","peascrop","peascrop",ItemID.peas_seed);
CropRegistry.fruitPush(BlockID.peascrop,ItemID.peas);
Harvest.registerDroppingBlock(BlockID.peascrop);

PlantModel.crop(BlockID.peascrop);

TileEntity.registerPrototype(BlockID.peascrop,cropPROTO);

CropRegistry.registerSeed(ItemID.peas_seed,BlockID.peascrop);