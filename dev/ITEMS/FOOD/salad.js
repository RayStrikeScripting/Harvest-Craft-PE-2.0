Harvest.setFood("beet_salad","Beet salad",10);
Harvest.recipe({id:ItemID.beet_salad}, [{id: ItemID.mixing_bowl, data: 0}, {id: 457, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.vinegar, data: 0}, {id: ItemID.cheese, data: 0}]);

Harvest.setFood("fruit_salad","Fruit salad",6);
Harvest.recipeVariations({id:ItemID.fruit_salad},ItemID.cutting_board,[ItemID.wintersquash,ItemID.starfruit,ItemID.pomegranate,ItemID.plum,ItemID.persimmon,ItemID.pear,ItemID.papaya,ItemID.orange,ItemID.mango,ItemID.lime,ItemID.lemon,ItemID.gooseberry,ItemID.grapefruit,ItemID.fig,ItemID.dragonfruit,ItemID.date,ItemID.banana,ItemID.cherry,ItemID.strawberry,ItemID.raspberry,260,ItemID.cranberry,ItemID.blueberry,ItemID.blackberry,ItemID.grape,ItemID.cactusfruit,ItemID.cantaloupe]);

Harvest.setFood("spring_salad","Spring salad",9);
Harvest.recipeVariations({id:ItemID.spring_salad},ItemID.cutting_board,[ItemID.avocado,ItemID.lettuce,ItemID.onion,ItemID.cucumber,ItemID.bellpepper,ItemID.zucchini,ItemID.tomato,ItemID.leek,ItemID.rhubarb,ItemID.peas,391,ItemID.rutabaga,ItemID.broccoli,ItemID.cauliflower,ItemID.radish]);

Harvest.setFood("cucumber_salad","Cucumber salad",11);
Harvest.recipe({id:ItemID.cucumber_salad}, [{id: ItemID.cutting_board, data: 0}, {id: ItemID.spring_salad, data: 0}, {id: ItemID.cucumber, data: 0}]);

Harvest.setFood("ceasar_salade","Ceasar salad",10);
Harvest.recipe({id:ItemID.ceasar_salade}, [{id: ItemID.mixing_bowl, data: 0}, {id: ItemID.lettuce, data: 0}, {id: ItemID.toast, data: 0}, {id: ItemID.cheese, data: 0}, {id: ItemID.garlic, data: 0}, {id: ItemID.black_pepper, data: 0}]);