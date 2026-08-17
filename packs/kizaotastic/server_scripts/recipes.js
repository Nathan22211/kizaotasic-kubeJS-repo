ServerEvents.tags('item', event => {
  // Get the #forge:cobblestone tag collection and add Diamond Ore to it
  event.add('minecraft:cobbles', 'nbtcompat:cobbled_stone')
  event.add('kubejs:zinc_alloys', 'kubejs:andesite_zinc_alloy')
  event.add('kubejs:zinc_alloys', 'kubejs:granite_zinc_alloy')
  event.add('kubejs:zinc_alloys', 'kubejs:diorite_zinc_alloy')
  event.add('kubejs:iron_alloys', 'kubejs:andesite_iron_alloy')
  event.add('kubejs:iron_alloys', 'kubejs:granite_iron_alloy')
  event.add('kubejs:iron_alloys', 'kubejs:diorite_iron_alloy')
})

ServerEvents.recipes(event => {
  const hasArtisan = Platform.isLoaded('artisanworktables')
  
  //blocks
  event.remove({ output: 'minecraft:brick' })
  event.campfireCooking('minecraft:brick', 'minecraft:clay_ball', 0.35, 2000)
  CustomFurnaces.recipe(event, 'kilning')
    .input('minecraft:clay_ball')
    .output('minecraft:brick')
    .xp(0.15)
    .cookTime(500)
    .id('kubejs:kilning_brick')
    .create()
  event.remove({ output: 'minecraft:stone' })
  event.remove({ output: 'minecraft:smooth_stone' })
  CustomFurnaces.recipe(event, 'kilning')
    .input('minecraft:cobblestone')
    .output('minecraft:stone')
    .xp(0.15)
    .cookTime(700)
    .id('kubejs:kilning_stone')
    .create()
  CustomFurnaces.recipe(event, 'kilning')
    .input('minecraft:stone')
    .output('minecraft:smooth_stone')
    .xp(0.15)
    .cookTime(1000)
    .id('kubejs:kilning_smooth_stone')
    .create()
  event.remove({ output: 'minecraft:andesite' })
  event.remove({ output: 'minecraft:polished_andesite' })
  CustomFurnaces.recipe(event, 'kilning')
    .input('oks_more_cobble:cobbled_andesite')
    .output('minecraft:andesite')
    .xp(0.15)
    .cookTime(1000)
    .id('kubejs:kilning_andesite')
    .create()
  CustomFurnaces.recipe(event, 'kilning')
    .input('minecraft:andesite')
    .output('minecraft:polished_andesite')
    .xp(0.15)
    .cookTime(1100)
    .id('kubejs:kilning_polished_andesite')
    .create()
    event.remove({ output: 'minecraft:diorite' })
    event.remove({ output: 'minecraft:polished_diorite' })
    CustomFurnaces.recipe(event, 'kilning')
      .input('oks_more_cobble:cobbled_diorite')
      .output('minecraft:diorite')
      .xp(0.15)
      .cookTime(1000)
      .id('kubejs:kilning_diorite')
      .create()
    CustomFurnaces.recipe(event, 'kilning')
      .input('minecraft:diorite')
      .output('minecraft:polished_diorite')
      .xp(0.15)
      .cookTime(1100)
      .id('kubejs:kilning_polished_diorite')
      .create()
      event.remove({ output: 'minecraft:granite' })
      event.remove({ output: 'minecraft:polished_granite' })
      CustomFurnaces.recipe(event, 'kilning')
        .input('oks_more_cobble:cobbled_granite')
        .output('minecraft:granite')
        .xp(0.15)
        .cookTime(1000)
        .id('kubejs:kilning_granite')
        .create()
      CustomFurnaces.recipe(event, 'kilning')
        .input('minecraft:granite')
        .output('minecraft:polished_granite')
        .xp(0.15)
        .cookTime(1100)
        .id('kubejs:kilning_polished_granite')
        .create()
  //chest replacements
  event.remove({ output: 'minecraft:chest' })
  event.remove({ output: 'minecraft:trapped_chest' })
  event.remove({ output: 'minecraft:barrel' })
  event.replaceInput(
    { input: 'minecraft:chest' },         // Arg 1: the filter
    'minecraft:chest',                    // Arg 2: the item to replace
    'custom_tiers:proper_iron_chest'
    )
  event.replaceInput(
    { input: 'minecraft:trapped_chest' },         // Arg 1: the filter
    'minecraft:trapped_chest',                    // Arg 2: the item to replace
    'custom_tiers:proper_iron_chest'
    )
  event.replaceInput(
    { input: 'minecraft:barrel' },         // Arg 1: the filter
    'minecraft:barrel',                    // Arg 2: the item to replace
    'custom_tiers:proper_iron_barrel'
    )
    event.shapeless(
      Item.of('custom_tiers:proper_iron_chest', 1), // arg 1: output
      [
        'minecraft:chest'
      ]
    )
    event.shapeless(
      Item.of('custom_tiers:proper_iron_chest', 1), // arg 1: output
      [
        'minecraft:trapped_chest'
      ]
    )
    event.shapeless(
      Item.of('custom_tiers:proper_iron_barrel', 1), // arg 1: output
      [
        'minecraft:barrel'
      ]
    )
  //crafters — nbtcompat:wood_shaped owns this pattern (stamps wood NBT).
  // Keep removing vanilla CT; do NOT re-add a #minecraft:logs shaped recipe here
  // or it races nbtcompat and wins for tagged logs (crimson/warped/oak/…) → oak table, no NBT.
  event.remove({ output: 'minecraft:crafting_table' })
  event.remove({ output: 'minecraft:bookshelf' })
    event.remove({ output: 'minecraft:furnace' })
    event.shaped(
      Item.of('minecraft:furnace', 1), // arg 1: output
      [
        'AAA',
        'A A', // arg 2: the shape (array of strings)
        'CCC'
      ],
      {
        A: 'minecraft:cobblestone',
        C: 'minecraft:smooth_stone'
      }
    )
    event.shaped(
      Item.of('custom_furnaces:andesite_smelting_furnace', 1), // arg 1: output
      [
        'AAA',
        'A A', // arg 2: the shape (array of strings)
        'CCC'
      ],
      {
        A: 'oks_more_cobble:cobbled_andesite',
        C: 'minecraft:polished_andesite'
      }
    )
    event.shaped(
      Item.of('custom_furnaces:diorite_smelting_furnace', 1), // arg 1: output
      [
        'AAA',
        'A A', // arg 2: the shape (array of strings)
        'CCC'
      ],
      {
        A: 'oks_more_cobble:cobbled_diorite',
        C: 'minecraft:polished_diorite'
      }
    )
    event.shaped(
      Item.of('custom_furnaces:granite_smelting_furnace', 1), // arg 1: output
      [
        'AAA',
        'A A', // arg 2: the shape (array of strings)
        'CCC'
      ],
      {
        A: 'oks_more_cobble:cobbled_granite',
        C: 'minecraft:polished_granite'
      }
    )
  if (hasArtisan) {
    event.shaped(
      Item.of('artisanworktables:carpenter_worktable', 1), // arg 1: output
      [
        'AAA',
        'BBB', // arg 2: the shape (array of strings)
        'BBB'
      ],
      {
        A: '#minecraft:logs',
        B: 'minecraft:andesite'
      }
    )
    event.shaped(
      Item.of('artisanworktables:mason_worktable', 1), // arg 1: output
      [
        'AAA',
        'BBB', // arg 2: the shape (array of strings)
        'BBB'
      ],
      {
        A: 'minecraft:stone',
        B: 'minecraft:brick'
      }
    )
    ArtisanWorktables.recipe(event, 'basic')
        .shaped(
            ['CCC', 'PPP', 'SSS'],
            { 'C': 'primity:cast_iron_ingot', 'P': '#minecraft:planks', 'S': '#minecraft:cobbles' }
          )
        .output('artisanworktables:blacksmith_worktable')
        .tool('#artisanworktables:tools/hammer', 40)
        .id('kubejs:blacksmith_worktable')
        .create()
    ArtisanWorktables.recipe(event, 'mason')
        .shaped(
            ['A#A', '# #', 'BBB'],
            { '#': 'minecraft:andesite', 'B': 'minecraft:polished_andesite', 'A': 'kubejs:kaolin_clay_ball' }
          )
        .output('custom_furnaces:andesite_blasting_furnace')
        .tool('#artisanworktables:tools/trowel', 20)
        .id('kubejs:andesite_blasting_furnace')
        .create()
      ArtisanWorktables.recipe(event, 'mason')
        .shaped(
            ['A#A', '# #', 'BBB'],
            { '#': 'minecraft:diorite', 'B': 'minecraft:polished_diorite', 'A': 'kubejs:kaolin_clay_ball' }
          )
        .output('custom_furnaces:diorite_blasting_furnace')
        .tool('#artisanworktables:tools/trowel', 20)
        .id('kubejs:diorite_blasting_furnace')
        .create()
      ArtisanWorktables.recipe(event, 'mason')
        .shaped(
            ['A#A', '# #', 'BBB'],
            { '#': 'minecraft:granite', 'B': 'minecraft:polished_granite', 'A': 'kubejs:kaolin_clay_ball' }
          )
        .output('custom_furnaces:granite_blasting_furnace')
        .tool('#artisanworktables:tools/trowel', 20)
        .id('kubejs:granite_blasting_furnace')
        .create()
        event.remove({ output: 'alloy_smelter:forge_controller_tier1' })
        ArtisanWorktables.recipe(event, 'mason')
        .shaped(
            ['AAA', '#B#', 'AAA'],
            { '#': 'minecraft:brick', 'B': 'minecraft:furnace', 'A': 'minecraft:bricks' }
          )
        .output('alloy_smelter:forge_controller_tier1')
        .tool('#artisanworktables:tools/trowel', 50)
        .id('kubejs:forge_controller_tier1')
        .create()
  }
  //storage
  event.remove({ mod: 'sophisticatedstorage' })
  // Sophisticated Storage linking network (vanilla recipes re-added; chest/barrel recipes stay removed)
  event.shaped(
    Item.of('sophisticatedstorage:controller', 1),
    ['SCS', 'PBP', 'SCS'],
    {
      S: '#c:stones',
      C: 'minecraft:comparator',
      P: '#minecraft:planks',
      B: 'custom_tiers:proper_iron_chest',
    }
  )
  event.shaped(
    Item.of('sophisticatedstorage:storage_link', 1),
    ['EP', 'RS'],
    {
      E: '#c:ender_pearls',
      P: '#minecraft:planks',
      R: 'minecraft:repeater',
      S: '#c:stones',
    }
  )
  event.shapeless(
    Item.of('sophisticatedstorage:storage_link', 3),
    ['sophisticatedstorage:controller', '#c:ender_pearls']
  )
  event.shaped(
    Item.of('sophisticatedstorage:storage_io', 1),
    ['SPS', 'RBG', 'SPS'],
    {
      S: '#c:stones',
      P: '#minecraft:planks',
      R: 'minecraft:repeater',
      B: 'custom_tiers:proper_iron_chest',
      G: '#c:ingots/gold',
    }
  )
  event.shaped(
    Item.of('sophisticatedstorage:storage_input', 1),
    ['SRS', 'PBP', 'SGS'],
    {
      S: '#c:stones',
      R: 'minecraft:repeater',
      P: '#minecraft:planks',
      B: 'custom_tiers:proper_iron_chest',
      G: '#c:ingots/gold',
    }
  )
  event.shaped(
    Item.of('sophisticatedstorage:storage_output', 1),
    ['SGS', 'PBP', 'SRS'],
    {
      S: '#c:stones',
      G: '#c:ingots/gold',
      P: '#minecraft:planks',
      B: 'custom_tiers:proper_iron_chest',
      R: 'minecraft:repeater',
    }
  )
  // I/O conversion cycle
  event.shapeless('sophisticatedstorage:storage_io', ['sophisticatedstorage:storage_output'])
  event.shapeless('sophisticatedstorage:storage_input', ['sophisticatedstorage:storage_io'])
  event.shapeless('sophisticatedstorage:storage_output', ['sophisticatedstorage:storage_input'])
  // Wood connectors
  const connectorWoods = [
    'oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak',
    'mangrove', 'cherry', 'bamboo', 'crimson', 'warped',
  ]
  for (const wood of connectorWoods) {
    event.shaped(
      Item.of(`sophisticatedstorage:${wood}_storage_connector`, 4),
      ['SPS', 'PSP', 'SPS'],
      {
        P: `minecraft:${wood}_planks`,
        S: 'minecraft:stick',
      }
    )
  }
    event.shaped(
        Item.of('custom_tiers:cheap_chest', 1), // arg 1: output
        [
          'AAA',
          'A A', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: '#minecraft:planks'
        }
      )
      event.shaped(
        Item.of('custom_tiers:cheap_barrel', 1), // arg 1: output
        [
          'ABA',
          'A A', // arg 2: the shape (array of strings)
          'ABA'
        ],
        {
          A: '#minecraft:planks',
          B: '#minecraft:wooden_slabs'
        }
      )
      if (hasArtisan) {
      ArtisanWorktables.recipe(event, 'carpenter')
        .shaped(
            ['###', '#A#', '###'],
            { '#': '#minecraft:planks', 'A': 'minecraft:copper_ingot' }
          )
        .output('custom_tiers:better_copper_chest')
        .tool('#artisanworktables:tools/framing_hammer', 5)
        .id('kubejs:better_copper_chest')
        .create()
      ArtisanWorktables.recipe(event, 'carpenter')
        .shaped(
            ['#B#', '#A#', '#B#'],
            { '#': '#minecraft:planks', 'A': 'minecraft:copper_ingot', 'B': '#minecraft:wooden_slabs' }
          )
        .output('custom_tiers:better_copper_barrel')
        .tool('#artisanworktables:tools/framing_hammer', 5)
        .id('kubejs:better_copper_barrel')
        .create()

      ArtisanWorktables.recipe(event, 'carpenter')
        .shaped(
            ['###', '#A#', '###'],
            { '#': '#minecraft:planks', 'A': 'minecraft:iron_ingot' }
          )
        .output('custom_tiers:proper_iron_chest')
        .tool('#artisanworktables:tools/framing_hammer', 5)
        .id('kubejs:proper_iron_chest')
        .create()
      ArtisanWorktables.recipe(event, 'carpenter')
        .shaped(
            ['#B#', '#A#', '#B#'],
            { '#': '#minecraft:planks', 'A': 'minecraft:iron_ingot', 'B': '#minecraft:wooden_slabs' }
          )
        .output('custom_tiers:proper_iron_barrel')
        .tool('#artisanworktables:tools/framing_hammer', 5)
        .id('kubejs:proper_iron_barrel')
        .create()
      ArtisanWorktables.recipe(event, 'carpenter')
        .shaped(
            [' B ', 'AAA'],
            {'A': 'minecraft:copper_ingot', 'B': '#minecraft:planks' }
          )
        .output('custom_tiers:better_copper_tier_upgrade')
        .tool('#artisanworktables:tools/tsquare', 10)
        .id('kubejs:better_copper_tier_upgrade')
        .create()
      }
      //brass chests and barrels
      ArtisanWorktables.recipe(event, 'carpenter')
        .shaped(
            ['###', '#A#', '###'],
            { '#': 'create:brass_ingot', 'A': 'custom_tiers:proper_iron_chest' }
          )
        .output('custom_tiers:brass_chest')
        .tool('#artisanworktables:tools/framing_hammer', 10)
        .id('kubejs:brass_chest')
        .create()
        ArtisanWorktables.recipe(event, 'carpenter')
        .shaped(
            ['###', '#A#', '###'],
            { '#': 'create:brass_ingot', 'A': 'custom_tiers:proper_iron_barrel' }
          )
        .output('custom_tiers:brass_barrel')
        .tool('#artisanworktables:tools/framing_hammer', 10)
        .id('kubejs:brass_barrel')
        .create()
      event.shaped(
        Item.of('custom_tiers:brass_tier_upgrade', 1), // arg 1: output
        [
          'A',
          'B'
        ],
        {
          A: '#minecraft:planks',
          B: '#c:ingots/brass'
        }
      )
      //steel chests and barrels
      ArtisanWorktables.recipe(event, 'carpenter')
        .shaped(
            ['###', '#A#', '###'],
            { '#': 'progressionreforged:steel_ingot', 'A': 'custom_tiers:proper_iron_chest' }
          )
        .output('custom_tiers:steel_chest')
        .tool('#artisanworktables:tools/framing_hammer', 10)
        .id('kubejs:steel_chest')
        .create()
        ArtisanWorktables.recipe(event, 'carpenter')
        .shaped(
            ['###', '#A#', '###'],
            { '#': 'progressionreforged:steel_ingot', 'A': 'custom_tiers:proper_iron_barrel' }
          )
        .output('custom_tiers:steel_barrel')
        .tool('#artisanworktables:tools/framing_hammer', 10)
        .id('kubejs:steel_barrel')
        .create()
      event.shaped(
        Item.of('custom_tiers:steel_tier_upgrade', 1), // arg 1: output
        [
          'A',
          'B'
        ],
        {
          A: '#minecraft:planks',
          B: '#c:ingots/steel'
        }
      )
  if (hasArtisan) {
  //artisian recipes
  event.remove({ output: 'artisanworktables:basic_worktable' })
    event.shaped(
        Item.of('artisanworktables:basic_worktable', 1), // arg 1: output
        [
          'AAA',
          'BCB', // arg 2: the shape (array of strings)
          'AAA'
        ],
        {
          A: 'minecraft:cobblestone',
          B: 'primity:cast_iron_ingot',  //arg 3: the mapping object
          C: '#c:player_workstations/crafting_tables'
        }
      )
  }
  ArtisanWorktables.recipe(event, 'basic')
        .shaped(
            ['CCC', 'PPP', 'SSS'],
            { 'C': 'minecraft:iron_ingot', 'P': '#minecraft:cobbles', 'S': 'minecraft:brick' }
          )
        .output('artisanworktables:engineer_worktable')
        .tool('#artisanworktables:tools/hammer', 40)
        .id('kubejs:engineer_worktable')
        .create()
  //mekanism recipes
  // Starter factories stand in for un-tiered base machines (custom_tiers can only insert after basic).
  // Recipes mirror vanilla base machines with kubejs:starter_control_circuit instead of #c:circuits/basic.

  event.remove({ output: 'mekanism:metallurgic_infuser' })
  event.shaped(
    Item.of('custom_tiers:starter_infusing_factory', 1),
    ['ABA', 'DCD', 'ABA'],
    {
      A: '#minecraft:cobbles',
      B: 'minecraft:furnace',
      C: 'mekanism:ingot_osmium',
      D: 'minecraft:redstone',
    }
  )

  event.remove({ output: 'mekanism:crusher' })
  event.shaped(
    Item.of('custom_tiers:starter_crushing_factory', 1),
    ['ABA', 'DCD', 'ABA'],
    {
      A: 'minecraft:redstone',
      B: 'kubejs:starter_control_circuit',
      C: 'mekanism:steel_casing',
      D: 'create:millstone',
    }
  )

  event.remove({ output: 'mekanism:enrichment_chamber' })
  event.shaped(
    Item.of('custom_tiers:starter_enriching_factory', 1),
    ['ACA', 'IXI', 'ACA'],
    {
      A: '#mekanism:alloys/basic',
      C: 'kubejs:starter_control_circuit',
      I: '#c:ingots/iron',
      X: 'mekanism:steel_casing',
    }
  )

  event.remove({ output: 'mekanism:energized_smelter' })
  event.shaped(
    Item.of('custom_tiers:starter_smelting_factory', 1),
    ['ACA', 'GXG', 'ACA'],
    {
      A: '#mekanism:alloys/basic',
      C: 'kubejs:starter_control_circuit',
      G: '#c:glass_blocks/cheap',
      X: 'mekanism:steel_casing',
    }
  )

  // custom_furnaces starter factories — same pattern, one circuit swapped for the furnace block
  const furnaceFactories = [
    { out: 'custom_furnaces:starter_smelting_factory', furnace: 'minecraft:furnace' },
    { out: 'custom_furnaces:starter_blasting_factory', furnace: 'minecraft:blast_furnace' },
    { out: 'custom_furnaces:starter_smoking_factory', furnace: 'minecraft:smoker' },
    { out: 'custom_furnaces:starter_kilning_factory', furnace: 'custom_furnaces:stone_kilning_furnace' },
  ]
  for (const entry of furnaceFactories) {
    event.shaped(
      Item.of(entry.out, 1),
      ['ACA', 'GXG', 'AFA'],
      {
        A: '#mekanism:alloys/basic',
        C: 'kubejs:starter_control_circuit',
        F: entry.furnace,
        G: '#c:glass_blocks/cheap',
        X: 'mekanism:steel_casing',
      }
    )
  }

  event.remove({ output: 'mekanism:precision_sawmill' })
  event.shaped(
    Item.of('custom_tiers:starter_sawing_factory', 1),
    ['ICI', 'AXA', 'ICI'],
    {
      A: '#mekanism:alloys/infused',
      C: 'kubejs:starter_control_circuit',
      I: '#c:ingots/iron',
      X: 'mekanism:steel_casing',
    }
  )

  event.remove({ output: 'mekanism:osmium_compressor' })
  event.shaped(
    Item.of('custom_tiers:starter_compressing_factory', 1),
    ['ACA', 'BXB', 'ACA'],
    {
      A: '#mekanism:alloys/infused',
      B: 'minecraft:bucket',
      C: 'kubejs:starter_control_circuit',
      X: 'mekanism:steel_casing',
    }
  )

  event.remove({ output: 'mekanism:combiner' })
  event.shaped(
    Item.of('custom_tiers:starter_combining_factory', 1),
    ['ACA', '_X_', 'ACA'],
    {
      A: '#mekanism:alloys/reinforced',
      C: 'kubejs:starter_control_circuit',
      X: 'mekanism:steel_casing',
      _: '#mekanism:stone_crafting_materials',
    }
  )

  event.remove({ output: 'mekanism:purification_chamber' })
  event.custom({
    type: 'mekanism:mek_data',
    category: 'misc',
    pattern: ['ACA', 'OPO', 'ACA'],
    key: {
      A: { tag: 'mekanism:alloys/infused' },
      C: { item: 'kubejs:starter_control_circuit' },
      O: { tag: 'c:ingots/osmium' },
      P: { item: 'custom_tiers:starter_enriching_factory' },
    },
    result: { count: 1, id: 'custom_tiers:starter_purifying_factory' },
  })

  event.remove({ output: 'mekanism:chemical_injection_chamber' })
  event.custom({
    type: 'mekanism:mek_data',
    category: 'misc',
    pattern: ['ACA', 'I#I', 'ACA'],
    key: {
      '#': { item: 'custom_tiers:starter_purifying_factory' },
      A: { tag: 'mekanism:alloys/reinforced' },
      C: { item: 'kubejs:starter_control_circuit' },
      I: { tag: 'c:ingots/gold' },
    },
    result: { count: 1, id: 'custom_tiers:starter_injecting_factory' },
  })

  // Starter-tier cables / tanks / bin (basic recipes with starter circuit where applicable)
  event.shaped(
    Item.of('custom_tiers:starter_bin', 1),
    ['_C_', 'A A', '___'],
    {
      A: '#mekanism:alloys/basic',
      C: 'kubejs:starter_control_circuit',
      _: '#mekanism:stone_crafting_materials',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_energy_cube', 1),
    ['AEA', 'IPI', 'AEA'],
    {
      A: '#mekanism:alloys/basic',
      E: 'mekanism:energy_tablet',
      I: '#c:ingots/iron',
      P: 'mekanism:steel_casing',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_fluid_tank', 1),
    ['AIA', 'I I', 'AIA'],
    {
      A: '#mekanism:alloys/basic',
      I: '#c:ingots/iron',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_chemical_tank', 1),
    ['AOA', 'O O', 'AOA'],
    {
      A: '#mekanism:alloys/basic',
      O: '#c:ingots/osmium',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_universal_cable', 8),
    ['S#S'],
    {
      '#': '#c:dusts/redstone',
      S: '#c:ingots/steel',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_mechanical_pipe', 8),
    ['S#S'],
    {
      '#': 'minecraft:bucket',
      S: '#c:ingots/steel',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_pressurized_tube', 8),
    ['S#S'],
    {
      '#': '#c:glass_blocks/cheap',
      S: '#c:ingots/steel',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_logistical_transporter', 8),
    ['S#S'],
    {
      '#': 'kubejs:starter_control_circuit',
      S: '#c:ingots/steel',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_thermodynamic_conductor', 8),
    ['S#S'],
    {
      '#': '#c:ingots/copper',
      S: '#c:ingots/steel',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_induction_cell', 1),
    ['LEL', 'E#E', 'LEL'],
    {
      '#': 'custom_tiers:starter_energy_cube',
      E: 'mekanism:energy_tablet',
      L: '#c:dusts/lithium',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_induction_provider', 1),
    ['LCL', 'C#C', 'LCL'],
    {
      '#': 'custom_tiers:starter_energy_cube',
      C: 'kubejs:starter_control_circuit',
      L: '#c:dusts/lithium',
    }
  )
  })
