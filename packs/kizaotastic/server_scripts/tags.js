ServerEvents.tags('item', event => {
    // compatibility 
    event.add('minecraft:cobbles', 'nbtcompat:cobbled_stone')
    event.add('c:ingots/steel', 'progressionreforged:steel_ingot')
    event.add('kubejs:gravels', 'nbtcompat:gravel')
    event.add('kubejs:gravels', 'minecraft:gravel')
    //alloys
    event.add('kubejs:zinc_alloys', 'kubejs:andesite_zinc_alloy')
    event.add('kubejs:zinc_alloys', 'kubejs:granite_zinc_alloy')
    event.add('kubejs:zinc_alloys', 'kubejs:diorite_zinc_alloy')
    event.add('kubejs:iron_alloys', 'kubejs:andesite_iron_alloy')
    event.add('kubejs:iron_alloys', 'kubejs:granite_iron_alloy')
    event.add('kubejs:iron_alloys', 'kubejs:diorite_iron_alloy')
    //shafts
    event.add('kubejs:zinc_alloy_shafts', 'create_kinetics_tiers:andesite_zinc_alloy_shaft')
    event.add('kubejs:zinc_alloy_shafts', 'create_kinetics_tiers:granite_zinc_alloy_shaft')
    event.add('kubejs:zinc_alloy_shafts', 'create_kinetics_tiers:diorite_zinc_alloy_shaft')
    event.add('kubejs:iron_alloy_shafts', 'create_kinetics_tiers:andesite_iron_alloy_shaft')
    event.add('kubejs:iron_alloy_shafts', 'create_kinetics_tiers:granite_iron_alloy_shaft')
    event.add('kubejs:iron_alloy_shafts', 'create_kinetics_tiers:diorite_iron_alloy_shaft')
    //casings
    event.add('kubejs:zinc_casings', 'custom_tiers:andesite_zinc_casing')
    event.add('kubejs:zinc_casings', 'custom_tiers:granite_zinc_casing')
    event.add('kubejs:zinc_casings', 'custom_tiers:diorite_zinc_casing')
    event.add('kubejs:iron_casings', 'custom_tiers:andesite_iron_casing')
    event.add('kubejs:iron_casings', 'custom_tiers:granite_iron_casing')
    event.add('kubejs:iron_casings', 'custom_tiers:diorite_iron_casing')
  })
