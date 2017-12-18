CropRegistry.registerWithID("spinachcrop","spinachcrop","spinachcrop",ItemID.spinach_seed);
CropRegistry.fruitPush(BlockID.spinachcrop,ItemID.spinach);
Harvest.registerDroppingBlock(BlockID.spinachcrop);

PlantModel.crop(BlockID.spinachcrop);

TileEntity.registerPrototype(BlockID.spinachcrop,cropPROTO);

CropRegistry.registerSeed(ItemID.spinach_seed,BlockID.spinachcrop);