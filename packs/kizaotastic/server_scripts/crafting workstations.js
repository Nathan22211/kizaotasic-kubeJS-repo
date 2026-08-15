ServerEvents.recipes(event => {
    ArtisanWorktables.recipe(event, 'basic')
        .shaped(
            ['CCC', 'PPP', 'SSS'],
            { 'C': 'minecraft:iron_ingot', 'P': '#minecraft:planks', 'S': '#kubejs:iron_casings' }
          )
        .output('artisanworktables:engineer_workstation')
        .tool('#artisanworktables:tools/hammer', 50)
        .id('kubejs:engineer_workstation')
        .create()
})