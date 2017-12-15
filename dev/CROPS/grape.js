CropRegistry.registerWithID("grapecrop","grapecrop","grapecrop",ItemID.grape_seed);
CropRegistry.fruitPush(BlockID.grapecrop,ItemID.grape);
Harvest.registerDroppingBlock(BlockID.grapecrop);

PlantModel.crop(BlockID.grapecrop);

TileEntity.registerPrototype(BlockID.grapecrop,cropPROTO);

CropRegistry.registerSeed(ItemID.grape_seed,BlockID.grapecrop);