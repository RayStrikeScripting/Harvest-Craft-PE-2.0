CropRegistry.registerWithID("curryleaf","curryleaf","curryleafcrop",ItemID.curryleaf_seed);
CropRegistry.fruitPush(BlockID.curryleaf,ItemID.curryleaf);
Harvest.registerDroppingBlock(BlockID.curryleaf);

PlantModel.crop(BlockID.curryleaf);

TileEntity.registerPrototype(BlockID.curryleaf,cropPROTO);

CropRegistry.registerSeed(ItemID.curryleaf_seed,BlockID.curryleaf);