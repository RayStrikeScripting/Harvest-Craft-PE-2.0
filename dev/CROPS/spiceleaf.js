CropRegistry.registerWithID("spiceleafcrop","spiceleafcrop","spiceleafcrop",ItemID.spice_leaf_seed);
CropRegistry.fruitPush(BlockID.spiceleafcrop,ItemID.spice_leaf_seed);
Harvest.registerDroppingBlock(BlockID.spiceleafcrop);

PlantModel.crop(BlockID.spiceleafcrop);

TileEntity.registerPrototype(BlockID.spiceleafcrop,cropPROTO);

CropRegistry.registerSeed(ItemID.spice_leaf_seed,BlockID.spiceleafcrop);