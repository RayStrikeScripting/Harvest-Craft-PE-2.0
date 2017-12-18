CropRegistry.registerWithID("mustardseedscrop","mustardseedscrop","mustardseedscrop",ItemID.mustard_seed);
CropRegistry.fruitPush(BlockID.mustardseedscrop,ItemID.mustardseeds);
Harvest.registerDroppingBlock(BlockID.mustardseedscrop);

PlantModel.crop(BlockID.mustardseedscrop);

TileEntity.registerPrototype(BlockID.mustardseedscrop,cropPROTO);

CropRegistry.registerSeed(ItemID.mustard_seed,BlockID.mustardseedscrop);