CropRegistry.registerWithID("coffeebeancrop","coffeebeancrop","coffeebeancrop",ItemID.coffee_seed);
CropRegistry.fruitPush(BlockID.coffeebeancrop,ItemID.coffee_beans);
Harvest.registerDroppingBlock(BlockID.coffeebeancrop);

PlantModel.crop(BlockID.coffeebeancrop);

TileEntity.registerPrototype(BlockID.coffeebeancrop,cropPROTO);

CropRegistry.registerSeed(ItemID.coffee_seed,BlockID.coffeebeancrop);