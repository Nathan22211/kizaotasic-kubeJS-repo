// kubejs/server_scripts/artisan_recipes.js

ServerEvents.recipes(event => {
//   ArtisanWorktables.recipe(event, 'carpenter')
//     .shapeless(['minecraft:oak_log'])
//     .output('4x minecraft:oak_planks')
//     .tool('#minecraft:axes', 1)
//     .id('kubejs:example_carpenter_planks')
//     .create()

  // ArtisanWorktables.recipe(event, 'basic')
  //   .shaped(
  //     ['###', '# #', '###'],
  //     { '#': 'minecraft:cobblestone' }
  //   )
  //   .output('minecraft:furnace')
  //   .id('kubejs:example_basic_furnace')
  //   .create()

    ArtisanWorktables.recipe(event, 'chemist')
    .shapeless(['minecraft:blaze_powder', 'minecraft:glass_bottle'])
    .output('minecraft:potion')
    .tool('minecraft:stick', 1)           // tool slot 1
    .tool('#minecraft:axes', 2)           // tool slot 2
    .fluid('minecraft:water', 250)        // mB in the tank
    .secondary(['minecraft:redstone', 'minecraft:gunpowder'])
    .extra('minecraft:glass_bottle', 0.25) // chance output
    .minimumTier(1)                      // workstation or workshop only
    .id('kubejs:chemist_brew')
    .create()

    ArtisanWorktables.recipe(event, 'engineer')
    .shaped(
      [
        'IIIII',
        'I   I',
        'I R I',
        'I   I',
        'IIIII'
      ],
      {
        I: 'minecraft:iron_ingot',
        R: 'minecraft:redstone_block'
      }
    )
    .output('minecraft:anvil')
    .tool('minecraft:iron_pickaxe', 5)
    .tool('minecraft:iron_axe', 5)
    .tool('minecraft:iron_shovel', 5)
    .fluid('minecraft:lava', 1000)
    .secondary(['minecraft:obsidian', 'minecraft:diamond'])
    .minimumTier(2)   // workshop only
    .id('kubejs:engineer_anvil')
    .create()

  // ArtisanWorktables.recipe(event, 'runesmith')
  //   .shapeless(['minecraft:amethyst_shard', 'minecraft:book'])
  //   .output('minecraft:enchanted_book')
  //   .tool('minecraft:diamond', 1)
  //   .experienceRequired(10)
  //   .minimumTier(1)
  //   .id('kubejs:example_runesmith_book')
  //   .create()
})
