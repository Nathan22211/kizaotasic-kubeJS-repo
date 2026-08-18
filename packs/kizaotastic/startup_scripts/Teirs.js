CustomTiersEvents.define(event => {
    event.create('better_copper')
    .order(6)
    .upgradeMaterial('minecraft:copper_ingot')
    .storage({ inventorySlots: 18, upgradeSlots: 1, previous: 'cheap' })
    .color('#ed7b24')
    event.create('proper_iron')
    .order(6)
    .upgradeMaterial('minecraft:iron_ingot')
    .storage({ inventorySlots: 27, upgradeSlots: 1, previous: 'better_copper' })
    .color('#ebe8e6')
    event.create('steel')
    .order(6)
    .upgradeMaterial('#c:ingot/steel')
    .storage({ inventorySlots: 45, upgradeSlots: 2, previous: 'proper_iron' })
    .cmm({ processingMultiple: 2, itemCapability: 48 , fluidCapability: 2000})
    .color('#5a5a5a')
    .createMachines({
        millstone: { speedMultiplier: 2.5, outputSlots: 21, stressImpact: 5 },
        itemDrain: { fluidCapacity: 3000 }  // mB; vanilla = 1500
      })
    .color('#d4b183')
    event.create('brass')
    .order(6)
    .upgradeMaterial('#c:ingot/brass')
    .storage({ inventorySlots: 36, upgradeSlots: 3, previous: 'proper_iron' })
    .cmm({ processingMultiple: 1, itemCapability: 64 , fluidCapability: 2000})
    .createMachines({
        millstone: { speedMultiplier: 2, outputSlots: 18, stressImpact: 4 },
        itemDrain: { fluidCapacity: 2000 }  // mB; vanilla = 1500
      })
    .color('#d4b183')
    event.create('gold_archwood')
    .order(6)
    .upgradeMaterial('minecraft:gold_ingot')
    .storage({ inventorySlots: 54, upgradeSlots: 3, previous: 'proper_iron' })
    .color('#f5ed14')
    event.create('cheap')
    .order(6)
    .upgradeMaterial('minecraft:command_block')
    .storage({ inventorySlots: 9, upgradeSlots: 1, previous: 'basic' })
    .color('#282929')
    event.create('andesite_zinc')
    .order(6)
    .upgradeMaterial('kubejs:andesite_zinc_alloy')
    .cmm({ processingMultiple: 1, itemCapability: 32 , fluidCapability: 2000})
    .color('#9e9c9b')
    .createMachines({
        millstone: { speedMultiplier: 1, outputSlots: 9, stressImpact: 2 },
        itemDrain: { fluidCapacity: 1000 },  // mB; vanilla = 1500
        casing: {
            applyTo: 'log',                  // default — stripped logs/woods (hand + deployer)
            // applyTo: 'minecraft:stone',   // wood grain → that block’s texture
            material: 'kubejs:andesite_zinc_alloy'   // optional; else upgradeMaterial
          },
          encasedFan: {
            rangeMultiplier: 1.1,
            processingSpeedMultiplier: 0.8,
            stressImpact: 1.9
          }
      })
    event.create('andesite_iron')
    .order(6)
    .upgradeMaterial('kubejs:andesite_iron_alloy')
    .cmm({ processingMultiple: 1, itemCapability: 32 , fluidCapability: 1000})
    .createMachines({
        millstone: { speedMultiplier: 0.7, outputSlots: 6, stressImpact: 2.3 },
        itemDrain: { fluidCapacity: 1000 },
        casing: {
            applyTo: 'log',                  // default — stripped logs/woods (hand + deployer)
            // applyTo: 'minecraft:stone',   // wood grain → that block’s texture
            material: 'kubejs:andesite_iron_alloy'   // optional; else upgradeMaterial
          },
        encasedFan: {
            rangeMultiplier: 1,
            processingSpeedMultiplier: 1.1,
            stressImpact: 2.2
          }
      })
      event.create('granite_zinc')
      .order(6)
      .upgradeMaterial('kubejs:granite_zinc_alloy')
      .cmm({ processingMultiple: 1, itemCapability: 64 , fluidCapability: 1000})
      .color('#9e9c9b')
      .createMachines({
          millstone: { speedMultiplier: 1, outputSlots: 9, stressImpact: 2 },
          itemDrain: { fluidCapacity: 1000 },  // mB; vanilla = 1500
          casing: {
              applyTo: 'log',                  // default — stripped logs/woods (hand + deployer)
              // applyTo: 'minecraft:stone',   // wood grain → that block’s texture
              material: 'kubejs:granite_zinc_alloy'   // optional; else upgradeMaterial
            },
            encasedFan: {
              rangeMultiplier: 0.8,
              processingSpeedMultiplier: 1.1,
              stressImpact: 2.5
            }
        })
      event.create('granite_iron')
      .order(6)
      .upgradeMaterial('kubejs:granite_iron_alloy')
      .cmm({ processingMultiple: 1, itemCapability: 48 , fluidCapability: 1500})
      .createMachines({
          millstone: { speedMultiplier: 0.8, outputSlots: 8, stressImpact: 2.2 },
          itemDrain: { fluidCapacity: 1000 },
          casing: {
              applyTo: 'log',                  // default — stripped logs/woods (hand + deployer)
              // applyTo: 'minecraft:stone',   // wood grain → that block’s texture
              material: 'kubejs:granite_iron_alloy'   // optional; else upgradeMaterial
            },
          encasedFan: {
              rangeMultiplier: 0.9,
              processingSpeedMultiplier: 1.2,
              stressImpact: 2.4
            }
        })
      event.create('diorite_zinc')
    .order(6)
    .upgradeMaterial('kubejs:diorite_zinc_alloy')
    .cmm({ processingMultiple: 1.3, itemCapability: 24 , fluidCapability: 2000})
    .color('#9e9c9b')
    .createMachines({
        millstone: { speedMultiplier: 1.3, outputSlots: 12, stressImpact: 2.5 },
        itemDrain: { fluidCapacity: 2500 },  // mB; vanilla = 1500
        casing: {
            applyTo: 'log',                  // default — stripped logs/woods (hand + deployer)
            // applyTo: 'minecraft:stone',   // wood grain → that block’s texture
            material: 'kubejs:andesite_zinc_alloy'   // optional; else upgradeMaterial
          },
          encasedFan: {
            rangeMultiplier: 0.7,
            processingSpeedMultiplier: 1.5,
            stressImpact: 1.5
          }
      })
    event.create('diorite_iron')
    .order(6)
    .upgradeMaterial('kubejs:diorite_iron_alloy')
    .cmm({ processingMultiple: 1.3, itemCapability: 64 , fluidCapability: 2500})
    .createMachines({
        millstone: { speedMultiplier: 1.3, outputSlots: 6, stressImpact: 3 },
        itemDrain: { fluidCapacity: 4000 },
        casing: {
            applyTo: 'log',                  // default — stripped logs/woods (hand + deployer)
            // applyTo: 'minecraft:stone',   // wood grain → that block’s texture
            material: 'kubejs:andesite_iron_alloy'   // optional; else upgradeMaterial
          },
        encasedFan: {
            rangeMultiplier: 0.9,
            processingSpeedMultiplier: 1.5,
            stressImpact: 2.5
          }
      })
})
