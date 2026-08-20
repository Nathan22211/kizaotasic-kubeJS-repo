ServerEvents.recipes(event => {
    //shafts
    event.replaceInput(
    { input: 'create:andesite_casing' },         // Arg 1: the filter
    'create:andesite_casing',                    // Arg 2: the item to replace
    '#kubejs:zinc_casings'
    )
    event.replaceInput(
    { input: 'create:shaft' },         // Arg 1: the filter
    'create:shaft',                    // Arg 2: the item to replace
    '#kubejs:zinc_alloy_shafts'
    )
    
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
        ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['S', 'C', 'I'],
            { 'C': 'custom_tiers:diorite_zinc_casing', 'S': '#kubejs:zinc_alloy_shafts', 'I': 'minecraft:iron_block'}
            )
        .output('custom_tiers:diorite_zinc_mechanical_press')
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/spanner', 50)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(1)                  // workstation or workshop only
        .id('kubejs:diorite_zinc_mechanical_press')
        .create()
    ArtisanWorktables.recipe(event, 'engineer')
        .shaped(
            ['S', 'C', 'I'],
            { 'C': 'custom_tiers:diorite_iron_casing', 'S': '#kubejs:iron_alloy_shafts', 'I': 'minecraft:iron_block'}
            )
        .output('custom_tiers:diorite_iron_mechanical_press')
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/spanner', 50)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(1)                  // workstation or workshop only
        .id('kubejs:diorite_iron_mechanical_press')
        .create()

    // remaining custom_tiers Create machines (alloy tiers only; steel/brass later)
    const alloyMachineTiers = [
        { id: 'andesite_zinc', metal: 'zinc' },
        { id: 'andesite_iron', metal: 'iron' },
        { id: 'granite_zinc', metal: 'zinc' },
        { id: 'granite_iron', metal: 'iron' },
        { id: 'diorite_zinc', metal: 'zinc' },
        { id: 'diorite_iron', metal: 'iron' },
    ]

    const engineerMachineTools = recipe => recipe
        .tool('#artisanworktables:tools/hammer', 50)
        .tool('#artisanworktables:tools/spanner', 50)
        .secondary(['minecraft:iron_nugget', 'minecraft:iron_nugget', 'minecraft:iron_nugget'])
        .minimumTier(1)

    ;[
        'create:millstone',
        'create:encased_fan',
        'create:mechanical_mixer',
        'create:deployer',
        'create:depot',
        'create:basin',
        'create:item_drain',
        'create:spout',
    ].forEach(id => event.remove({ output: id }))

    alloyMachineTiers.forEach(tier => {
        const casing = `custom_tiers:${tier.id}_casing`
        const alloy = `kubejs:${tier.id}_alloy`
        const shaft = `#kubejs:${tier.metal}_alloy_shafts`
        const cog = `#kubejs:${tier.metal}_alloy_cogwheels`

        engineerMachineTools(
            ArtisanWorktables.recipe(event, 'engineer')
                .shaped(['C', 'S', 'I'], { C: cog, S: casing, I: '#c:stones' })
                .output(`custom_tiers:${tier.id}_millstone`)
                .id(`kubejs:${tier.id}_millstone`)
        ).create()

        engineerMachineTools(
            ArtisanWorktables.recipe(event, 'engineer')
                .shaped(['S', 'A', 'P'], { S: shaft, A: casing, P: 'create:propeller' })
                .output(`custom_tiers:${tier.id}_encased_fan`)
                .id(`kubejs:${tier.id}_encased_fan`)
        ).create()

        engineerMachineTools(
            ArtisanWorktables.recipe(event, 'engineer')
                .shaped(['S', 'C', 'I'], { S: cog, C: casing, I: 'create:whisk' })
                .output(`custom_tiers:${tier.id}_mechanical_mixer`)
                .id(`kubejs:${tier.id}_mechanical_mixer`)
        ).create()

        engineerMachineTools(
            ArtisanWorktables.recipe(event, 'engineer')
                .shaped(['B', 'C', 'I'], { B: 'create:electron_tube', C: casing, I: 'create:brass_hand' })
                .output(`custom_tiers:${tier.id}_deployer`)
                .id(`kubejs:${tier.id}_deployer`)
        ).create()

        engineerMachineTools(
            ArtisanWorktables.recipe(event, 'engineer')
                .shapeless([alloy, casing])
                .output(`custom_tiers:${tier.id}_depot`)
                .id(`kubejs:${tier.id}_depot`)
        ).create()

        engineerMachineTools(
            ArtisanWorktables.recipe(event, 'engineer')
                .shaped(['A A', 'AAA'], { A: alloy })
                .output(`custom_tiers:${tier.id}_basin`)
                .id(`kubejs:${tier.id}_basin`)
        ).create()

        engineerMachineTools(
            ArtisanWorktables.recipe(event, 'engineer')
                .shaped(['P', 'S'], { P: 'minecraft:iron_bars', S: casing })
                .output(`custom_tiers:${tier.id}_item_drain`)
                .id(`kubejs:${tier.id}_item_drain`)
        ).create()

        engineerMachineTools(
            ArtisanWorktables.recipe(event, 'engineer')
                .shaped(['T', 'P'], { T: casing, P: 'minecraft:dried_kelp' })
                .output(`custom_tiers:${tier.id}_spout`)
                .id(`kubejs:${tier.id}_spout`)
        ).create()
    })
})
