ServerEvents.recipes(event => {
    //shafts
    event.remove({ output: 'create:shaft' })
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['C', 'C'],
            { 'C': 'kubejs:andesite_zinc_alloy'}
          )
        .output('8x create_kinetics_tiers:andesite_zinc_alloy_shaft')
        .tool('#artisanworktables:tools/chisel', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['C', 'C'],
            { 'C': 'kubejs:andesite_iron_alloy'}
          )
        .output('8x create_kinetics_tiers:andesite_iron_alloy_shaft')
        .tool('#artisanworktables:tools/chisel', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['C', 'C'],
            { 'C': 'kubejs:granite_zinc_alloy'}
          )
        .output('8x create_kinetics_tiers:granite_zinc_alloy_shaft')
        .tool('#artisanworktables:tools/chisel', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['C', 'C'],
            { 'C': 'kubejs:granite_iron_alloy'}
          )
        .output('8x create_kinetics_tiers:granite_iron_alloy_shaft')
        .tool('#artisanworktables:tools/chisel', 10)
        .create()
    event.remove({ output: 'create:cogwheel' })
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['C', 'C'],
            { 'C': 'kubejs:diorite_zinc_alloy'}
          )
        .output('8x create_kinetics_tiers:diorite_zinc_alloy_shaft')
        .tool('#artisanworktables:tools/chisel', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['C', 'C'],
            { 'C': 'kubejs:diorite_iron_alloy'}
          )
        .output('8x create_kinetics_tiers:diorite_iron_alloy_shaft')
        .tool('#artisanworktables:tools/chisel', 10)
        .create()
    //cogs
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create_kinetics_tiers:andesite_zinc_alloy_shaft'}
            )
        .output('create_kinetics_tiers:andesite_zinc_alloy_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create_kinetics_tiers:andesite_iron_alloy_shaft'}
            )
        .output('create_kinetics_tiers:andesite_iron_alloy_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create_kinetics_tiers:granite_zinc_alloy_shaft'}
            )
        .output('create_kinetics_tiers:granite_zinc_alloy_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create_kinetics_tiers:granite_iron_alloy_shaft'}
            )
        .output('create_kinetics_tiers:granite_iron_alloy_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create_kinetics_tiers:diorite_zinc_alloy_shaft'}
            )
        .output('create_kinetics_tiers:diorite_zinc_alloy_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create_kinetics_tiers:diorite_iron_alloy_shaft'}
            )
        .output('create_kinetics_tiers:diorite_iron_alloy_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .create()
    //large cogs
    event.remove({ output: 'create:large_cogwheel' })
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create_kinetics_tiers:andesite_zinc_alloy_cogwheel'}
            )
        .output('create_kinetics_tiers:andesite_zinc_alloy_large_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create_kinetics_tiers:andesite_iron_alloy_cogwheel'}
            )
        .output('create_kinetics_tiers:andesite_iron_alloy_large_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create_kinetics_tiers:granite_zinc_alloy_cogwheel'}
            )
        .output('create_kinetics_tiers:granite_zinc_alloy_large_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create_kinetics_tiers:granite_iron_alloy_cogwheel'}
            )
        .output('create_kinetics_tiers:granite_iron_alloy_large_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create_kinetics_tiers:diorite_zinc_alloy_cogwheel'}
            )
        .output('create_kinetics_tiers:diorite_zinc_alloy_large_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create_kinetics_tiers:diorite_iron_alloy_cogwheel'}
            )
        .output('create_kinetics_tiers:diorite_iron_alloy_large_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .create()
    //water wheels
    event.remove({ output: 'create:water_wheel' })
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['CCC', 'C#C', 'CCC'],
            { 'C': '#minecraft:wooden_slabs', '#': '#kubejs:zinc_alloy_shafts'}
            )
        .output('create:water_wheel')
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/file', 20)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(1)                  // workstation or workshop only
        .id('kubejs:water_wheel')
        .create()
    //mechanical presses
    event.remove({ output: 'create:mechanical_press' })
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['S', 'C', 'I'],
            { 'C': 'custom_tiers:andesite_zinc_casing', 'S': '#kubejs:zinc_alloy_shafts', 'I': 'minecraft:iron_block'}
            )
        .output('custom_tiers:andesite_zinc_mechanical_press')
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/spanner', 50)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(1)                  // workstation or workshop only
        .id('kubejs:andesite_zinc_mechanical_press')
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['S', 'C', 'I'],
            { 'C': 'custom_tiers:andesite_iron_casing', 'S': '#kubejs:iron_alloy_shafts', 'I': 'minecraft:iron_block'}
            )
        .output('custom_tiers:andesite_iron_mechanical_press')
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/spanner', 50)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(1)                  // workstation or workshop only
        .id('kubejs:andesite_iron_mechanical_press')
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['S', 'C', 'I'],
            { 'C': 'custom_tiers:granite_zinc_casing', 'S': '#kubejs:zinc_alloy_shafts', 'I': 'minecraft:iron_block'}
            )
        .output('custom_tiers:granite_zinc_mechanical_press')
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/spanner', 50)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(1)                  // workstation or workshop only
        .id('kubejs:granite_zinc_mechanical_press')
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['S', 'C', 'I'],
            { 'C': 'custom_tiers:granite_iron_casing', 'S': '#kubejs:iron_alloy_shafts', 'I': 'minecraft:iron_block'}
            )
        .output('custom_tiers:granite_iron_mechanical_press')
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/spanner', 50)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(1)                  // workstation or workshop only
        .id('kubejs:granite_iron_mechanical_press')
        .create()
})
