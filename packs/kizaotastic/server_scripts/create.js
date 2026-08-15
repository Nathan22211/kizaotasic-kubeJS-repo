ServerEvents.recipes(event => {
    //shafts and cogwheels
    event.remove({ output: 'create:shaft' })
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['C', 'C'],
            { 'C': '#kubejs:zinc_alloys'}
          )
        .output('create:shaft')
        .tool('#artisanworktables:tools/chisel', 10)
        .id('kubejs:shaft')
        .create()
    event.remove({ output: 'create:cogwheel' })
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create:shaft'}
            )
        .output('create:cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .id('kubejs:cogwheel')
        .create()
    event.remove({ output: 'create:large_cogwheel' })
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            [' C ', 'C#C', ' C '],
            { 'C': '#minecraft:planks', '#': 'create:large_cogwheel'}
            )
        .output('create:large_cogwheel')
        .tool('#artisanworktables:tools/file', 10)
        .id('kubejs:large_cogwheel')
        .create()
    //water wheels
    event.remove({ output: 'create:water_wheel' })
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['CCC', 'C#C', 'CCC'],
            { 'C': '#minecraft:wooden_slabs', '#': 'create:shaft'}
            )
        .output('create:water_wheel')
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/file', 20)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(2)                  // workstation or workshop only
        .id('kubejs:water_wheel')
        .create()
    //mechanical presses
    event.remove({ output: 'create:mechanical_press' })
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['S', 'C', 'I'],
            { 'C': 'custom_tiers:andesite_zinc_casing', 'S': 'create:shaft', 'I': 'minecraft:iron_block'}
            )
        .output('custom_tiers:andesite_zinc_mechanical_press')
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/spanner', 50)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(2)                  // workstation or workshop only
        .id('kubejs:andesite_zinc_mechanical_press')
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['S', 'C', 'I'],
            { 'C': 'custom_tiers:andesite_iron_casing', 'S': 'create:shaft', 'I': 'minecraft:iron_block'}
            )
        .output('custom_tiers:andesite_iron_mechanical_press')
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/spanner', 50)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(2)                  // workstation or workshop only
        .id('kubejs:andesite_iron_mechanical_press')
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['S', 'C', 'I'],
            { 'C': 'custom_tiers:granite_zinc_casing', 'S': 'create:shaft', 'I': 'minecraft:iron_block'}
            )
        .output('custom_tiers:granite_zinc_mechanical_press')
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/spanner', 50)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(2)                  // workstation or workshop only
        .id('kubejs:granite_zinc_mechanical_press')
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['S', 'C', 'I'],
            { 'C': 'custom_tiers:granite_iron_casing', 'S': 'create:shaft', 'I': 'minecraft:iron_block'}
            )
        .output('custom_tiers:granite_iron_mechanical_press')
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/spanner', 50)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(2)                  // workstation or workshop only
        .id('kubejs:granite_iron_mechanical_press')
        .create()
})