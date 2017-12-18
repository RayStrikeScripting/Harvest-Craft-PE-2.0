CropRegistry.registerWithID("ricecrop","ricecrop","ricecrop",ItemID.rice_seed);
CropRegistry.fruitPush(BlockID.ricecrop,ItemID.rice);
Harvest.registerDroppingBlock(BlockID.ricecrop);

PlantModel.crop(BlockID.ricecrop);

TileEntity.registerPrototype(BlockID.ricecrop,cropPROTO);

CropRegistry.registerSeed(ItemID.rice_seed,BlockID.ricecrop);