CropRegistry.registerWithID("appleBlock","appleBlock","appleBlock",0);
CropRegistry.fruitPush(BlockID.appleBlock,260);

TileEntity.registerPrototype(BlockID.appleBlock,fruitPROTO);

PlantModel.tree(BlockID.appleBlock,0);

Block.setBlockShape(BlockID.appleBlock, {x: 0.001, y: 0.001, z: 0.001}, {x: 0.999, y: 0.999, z: 0.999});