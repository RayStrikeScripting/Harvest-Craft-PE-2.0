CropRegistry.registerWithID("onioncrop","onioncrop","onioncrop",ItemID.onion_seed);
CropRegistry.fruitPush(BlockID.onioncrop,ItemID.onion);
Harvest.registerDroppingBlock(BlockID.onioncrop);

PlantModel.crop(BlockID.onioncrop);

TileEntity.registerPrototype(BlockID.onioncrop,cropPROTO);

CropRegistry.registerSeed(ItemID.onion_seed,BlockID.onioncrop);