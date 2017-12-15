CropRegistry.registerWithID("raspberrycrop","raspberrycrop","raspberry_crop",ItemID.raspberry_seed);
CropRegistry.fruitPush(BlockID.raspberrycrop,ItemID.raspberry);
Harvest.registerDroppingBlock(BlockID.raspberrycrop);

PlantModel.crop(BlockID.raspberrycrop);

TileEntity.registerPrototype(BlockID.raspberrycrop,cropPROTO);

CropRegistry.registerSeed(ItemID.raspberry_seed,BlockID.raspberrycrop);