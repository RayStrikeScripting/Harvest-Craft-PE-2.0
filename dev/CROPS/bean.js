CropRegistry.registerWithID("beancrop","beancrop","beancrop",ItemID.bean_seed);
CropRegistry.fruitPush(BlockID.beancrop,ItemID.bean);
Harvest.registerDroppingBlock(BlockID.beancrop);

PlantModel.crop(BlockID.beancrop);

TileEntity.registerPrototype(BlockID.beancrop,cropPROTO);

CropRegistry.registerSeed(ItemID.bean_seed,BlockID.beancrop);