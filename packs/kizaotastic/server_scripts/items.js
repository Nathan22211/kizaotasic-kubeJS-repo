//item recipes
ServerEvents.recipes(event => {
  //items
  event.replaceInput(
    { input: 'create:andesite_alloy' },         // Arg 1: the filter
    'create:andesite_alloy',                    // Arg 2: the item to replace
    '#kubejs:zinc_alloys'
    )
  //recipe removal
  event.remove({ id: 'primity:iron_nugget' })
  event.remove({ id: 'mekanism:processing/steel/ingot/from_dust_smelting' })
  event.remove({ output: 'minecraft:wooden_axe' })
  event.remove({ output: 'minecraft:wooden_hoe' })
  event.remove({ output: 'minecraft:wooden_pickaxe' })
  event.remove({ output: 'minecraft:wooden_shovel' })
  event.remove({ output: 'minecraft:wooden_sword' })
  event.remove({ output: 'create:andesite_alloy' })
  //mek items
  event.recipes.mekanism.metallurgic_infusing("kubejs:starter_control_circuit", "minecraft:copper_ingot", "10x mekanism:redstone", false)
  event.remove({ output: 'mekanism:alloy_infused' })
  event.recipes.mekanism.metallurgic_infusing("kubejs:alloy_starter", "minecraft:copper_block", "10x mekanism:redstone", false)

  event.recipes.create.mixing(['#kubejs:iron_alloys', 'minecraft:redstone_dust'], 'kubejs:powdered_infused_alloy')
  event.recipes.mekanism.enriching('mekanism:alloy_infused', 'kubejs:powdered_infused_alloy')
  
  //basic items
  event.shapeless(
    Item.of('kubejs:kaolin_clay_ball', 1), // arg 1: output
    [
      'minecraft:clay_ball',
      'minecraft:coal', 	       // arg 2: the array of inputs
      'minecraft:sand'
    ]
  )
  event.shapeless(
    Item.of('minecraft:stick', 1), // arg 1: output
    [
      '#minecraft:saplings'
    ]
  )
  event.shapeless(
    Item.of('minecraft:flint', 1), // arg 1: output
    [
      'minecraft:gravel',
      'minecraft:gravel'
    ]
  )
//alloy smelter
  event.custom({
    type: "alloy_smelter:smelting",
    ingredients: [
      {
        ingredient: { item: "oks_more_cobble:cobbled_andesite" },
        count: 2
      },
      {
        ingredient: { item: "create:zinc_nugget" },
        count: 2
      }
    ],
    result: {
      id: "kubejs:andesite_zinc_alloy",
      count: 1
    },
    smeltingTime: 1000,
    fuelPerTick: 0.1,
    requiredTier: 1
  })
  event.custom({
    type: "alloy_smelter:smelting",
    ingredients: [
      {
        ingredient: { item: "oks_more_cobble:cobbled_andesite" },
        count: 2
      },
      {
        ingredient: { item: "minecraft:iron_nugget" },
        count: 2
      }
    ],
    result: {
      id: "kubejs:andesite_iron_alloy",
      count: 1
    },
    smeltingTime: 1000,
    fuelPerTick: 0.1,
    requiredTier: 1
  })
  event.custom({
    type: "alloy_smelter:smelting",
    ingredients: [
      {
        ingredient: { item: "oks_more_cobble:cobbled_diorite" },
        count: 2
      },
      {
        ingredient: { item: "create:zinc_nugget" },
        count: 2
      }
    ],
    result: {
      id: "kubejs:diorite_zinc_alloy",
      count: 1
    },
    smeltingTime: 1000,
    fuelPerTick: 0.1,
    requiredTier: 1
  })
  event.custom({
    type: "alloy_smelter:smelting",
    ingredients: [
      {
        ingredient: { item: "oks_more_cobble:cobbled_diorite" },
        count: 2
      },
      {
        ingredient: { item: "minecraft:iron_nugget" },
        count: 2
      }
    ],
    result: {
      id: "kubejs:diorite_iron_alloy",
      count: 1
    },
    smeltingTime: 1000,
    fuelPerTick: 0.1,
    requiredTier: 1
  })
  event.custom({
    type: "alloy_smelter:smelting",
    ingredients: [
      {
        ingredient: { item: "oks_more_cobble:cobbled_granite" },
        count: 2
      },
      {
        ingredient: { item: "create:zinc_nugget" },
        count: 2
      }
    ],
    result: {
      id: "kubejs:granite_zinc_alloy",
      count: 1
    },
    smeltingTime: 1000,
    fuelPerTick: 0.1,
    requiredTier: 1
  })
  event.custom({
    type: "alloy_smelter:smelting",
    ingredients: [
      {
        ingredient: { item: "oks_more_cobble:cobbled_granite" },
        count: 2
      },
      {
        ingredient: { item: "minecraft:iron_nugget" },
        count: 2
      }
    ],
    result: {
      id: "kubejs:granite_iron_alloy",
      count: 1
    },
    smeltingTime: 1000,
    fuelPerTick: 0.1,
    requiredTier: 1
  })
  event.remove({ output: 'create:brass_ingot' })
  event.custom({
    type: "alloy_smelter:smelting",
    ingredients: [
      {
        ingredient: { item: "minecraft:copper_ingot" },
        count: 1
      },
      {
        ingredient: { item: "create:zinc_ingot" },
        count: 1
      }
    ],
    result: {
      id: "create:brass_ingot",
      count: 1
    },
    smeltingTime: 200,
    fuelPerTick: 1,
    requiredTier: 1
  })
})
