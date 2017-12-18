CropRegistry.registerWithID("waterchestnutcrop","waterchestnutcrop","waterchestnutcrop",ItemID.waterchestnut_seed);
CropRegistry.fruitPush(BlockID.waterchestnutcrop,ItemID.waterchestnut);
Harvest.registerDroppingBlock(BlockID.waterchestnutcrop);

PlantModel.crop(BlockID.waterchestnutcrop);

TileEntity.registerPrototype(BlockID.waterchestnutcrop,cropPROTO);

CropRegistry.registerSeed(ItemID.waterchestnut_seed,BlockID.waterchestnutcrop);