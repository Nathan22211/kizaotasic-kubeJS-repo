ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('minecraft:packed_mud', 1),
        [
          'minecraft:mud',
          'minecraft:tall_grass'
        ]
      )
    event.shapeless(
        Item.of('minecraft:packed_mud', 1),
        [
          'minecraft:mud',
          'minecraft:short_grass',
          'minecraft:short_grass'
        ]
      )
    event.shapeless(
        Item.of('minecraft:packed_mud', 1),
        [
          'minecraft:mud',
          '#minecraft:leaves',
        ]
      )
})