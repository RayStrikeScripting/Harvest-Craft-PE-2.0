CropRegistry.registerWithID("rutabagacrop","rutabagacrop","rutabagacrop",ItemID.rutabaga_seed);
CropRegistry.fruitPush(BlockID.rutabagacrop,ItemID.rutabaga);
Harvest.registerDroppingBlock(BlockID.rutabagacrop);

PlantModel.crop(BlockID.rutabagacrop);

TileEntity.registerPrototype(BlockID.rutabagacrop,cropPROTO);

CropRegistry.registerSeed(ItemID.rutabaga_seed,BlockID.rutabagacrop);