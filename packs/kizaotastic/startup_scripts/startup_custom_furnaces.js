// Copied from custom-furnaces examples — restart after edits.
CustomFurnacesEvents.define(event => {
  event.vanilla('smelting')
    .tier('andesite', { speed: 1.2, fuelEfficiency: 0.8, color: '#a3a3a3' })
    .tier('diorite', { speed: 0.8, fuelEfficiency: 1.2, color: '#b0b0b0' })
    .tier('granite', { speed: 1.1, fuelEfficiency: 1.1, color: '#ffc7cb' })
    .tier('asurine', { speed: 1.15, fuelEfficiency: 1.2, color: '#329ea8' })
    .tier('crimsite', { speed: 1.2, fuelEfficiency: 1.25, color: '#c24323' })
    .tier('veridium', { speed: 1.05, fuelEfficiency: 1.01, color: '#2e579e' })
    .tier('ochrum', { speed: 1.25, fuelEfficiency: 1.3, color: '#d6ad3c' })
    .tier('scoria', { speed: 1.3, fuelEfficiency: 1.4, color: '#824110' })
    .tier('scorchia', { speed: 2.0, fuelEfficiency: 1.8, color: '#1f0f02' })
    .tier('holystone', { speed: 1.3, fuelEfficiency: 1.3, color: '#dbd8d5' })
    .tier('iron', { speed: 1.5, fuelEfficiency: 1.2, color: '#C6C6C6' })
    .tier('gold', { speed: 2.0, fuelEfficiency: 1.5, color: '#FCEE4B' })
    .factories(true)
  event.vanilla('blasting')
    .tier('andesite', { speed: 0.6, fuelEfficiency: 0.9, color: '#a3a3a3' })
    .tier('granite', { speed: 0.3, fuelEfficiency: 0.7, color: '#ffc7cb' })
    .tier('diorite', { speed: 0.8, fuelEfficiency: 0.5, color: '#b0b0b0' })
    .tier('gold', { speed: 2.0, fuelEfficiency: 1.5, color: '#FCEE4B' })
    .factories(true)
  event.vanilla('smoking')
    .tier('iron', { speed: 1.5, fuelEfficiency: 1.2, color: '#C6C6C6' })
    .tier('gold', { speed: 2.0, fuelEfficiency: 1.5, color: '#FCEE4B' })
    .factories(true)
  
  event.create('kilning')
    .displayName('Kiln')
    .color('#e6bc8c')
    .cookTime(200)
    .baseTier('stone')
    .tier('stone', { speed: 1.0, fuelEfficiency: 1.0, color: '#e6bc8c' })
    .tier('mud_brick', { speed: 0.7, fuelEfficiency: 0.95, color: '#78644e' })
    .tier('iron', {
      speed: 1.5,
      fuelEfficiency: 1.2,
      color: '#e6cdb1',
      previous: 'stone',
      upgradeMaterial: 'minecraft:iron_ingot'
    })
    .factories(true)
    .fan({
      priority: 250,
      blockCatalysts: ['minecraft:magma_block']
    })

    event.create('cooking')
    .displayName('Oven')
    .color('#e6bc8c')
    .cookTime(200)
    .baseTier('brick')
    .tier('brick', { speed: 1.0, fuelEfficiency: 1.0, color: '#e6bc8c' })
    .tier('mud_brick', { speed: 0.7, fuelEfficiency: 0.95, color: '#78644e' })
    .tier('iron', {
      speed: 1.5,
      fuelEfficiency: 1.2,
      color: '#e6cdb1',
      previous: 'stone',
      upgradeMaterial: 'minecraft:iron_ingot'
    })
    .factories(true)
    .fan({
      priority: 250,
      blockCatalysts: ['minecraft:campfire']
    })

    event.create('soul_cooking')
    .displayName('Soul Oven')
    .color('#e6bc8c')
    .cookTime(200)
    .baseTier('nether_brick')
    .tier('nether_brick', { speed: 1.0, fuelEfficiency: 1.0, color: '#e6bc8c' })
    .tier('cincinnasite', { speed: 1.5, fuelEfficiency: 1.5, color: '#c24323' })
    .tier('iron', {
      speed: 1.5,
      fuelEfficiency: 1.2,
      color: '#e6cdb1',
      previous: 'nether_brick',
      upgradeMaterial: 'minecraft:iron_ingot'
    })
    .factories(true)
    .fan({
      priority: 250,
      blockCatalysts: ['minecraft:soul_campfire']
    })

  // Haunt Furnace wrappers (soft-dep: skipped if hauntfurnace missing)
  event.haunt('haunting')
    .tier('iron', { speed: 1.5, fuelEfficiency: 1.2, color: '#5B3A6B' })
    .tier('gold', { speed: 2.0, fuelEfficiency: 1.5, color: '#8B5A9B' })
    .factories(true)

  event.haunt('corrupting')
    .tier('iron', { speed: 1.5, fuelEfficiency: 1.2, color: '#3D2A5C' })
    .tier('gold', { speed: 2.0, fuelEfficiency: 1.5, color: '#6B4A8C' })
    .factories(true)
})
