StartupEvents.registry('item', event => {
    event.create('andesite_zinc_alloy')
    event.create('andesite_iron_alloy')
    event.create('granite_zinc_alloy')
    event.create('granite_iron_alloy')
    event.create('diorite_zinc_alloy')
    event.create('diorite_iron_alloy')
    //mekanism
    event.create('alloy_starter')
    //circuts
    event.create('starter_control_circuit')
    event.create('infused_control_circuit')
})
CustomTiersEvents.define(event => {
    event.create('allthemodium')
    .order(6)
    .upgradeMaterial('allthemodium:allthemodium_ingot')
    .cmm({ processingMultiple: 16, itemCapability: 256 , fluidCapability: 32000})
    .storage({ inventorySlots: 150, upgradeSlots: 10, previous: 'netherite' })
    .color('#FFAA00')
    .mekanism({
        enabled: true,
        previous: "ultimate",
        tier_installer: true,
        bin_storage: 1048576,
        energy_cube_capacity: 1024000000,
        energy_cube_output: 1024000,
        fluid_tank_storage: 4096000,
        fluid_tank_output: 2048000,
        chemical_tank_storage: 131072000,
        chemical_tank_output: 65536000,
        cable_capacity: 65536000,
        pipe_capacity: 1024000,
        pipe_pull: 256000,
        tube_capacity: 8192000,
        tube_pull: 2048000,
        transporter_pull: 128,
        transporter_speed: 55,
        conductor_conduction: 10.0,
        conductor_heat_capacity: 1.0,
        conductor_insulation: 400000,
        induction_cell_capacity: 32768000000,
        induction_provider_output: 1048000000
    })
    event.create('starter')
    .order(6)
    .upgradeMaterial('minecraft:command_block')
    .color('#1f1f1e')
    .mekanism({
        enabled: true,
        previous: "basic",
        tier_installer: false,
        bin_storage: 4096,
        energy_cube_capacity: 1600000,
        energy_cube_output: 80000,
        fluid_tank_storage: 32000,
        fluid_tank_output: 16000,
        chemical_tank_storage: 64000,
        chemical_tank_output: 32000,
        cable_capacity: 320000,
        pipe_capacity: 2000,
        pipe_pull: 250,
        tube_capacity: 4000,
        tube_pull: 750,
        transporter_pull: 2,
        transporter_speed: 1,
        conductor_conduction: 5.0,
        conductor_heat_capacity: 1.0,
        conductor_insulation: 10,
        induction_cell_capacity: 8000000,
        induction_provider_output: 80000,
        factory_processes: 1
    })
    event.create('infused')
    .order(6)
    .upgradeMaterial('mekanism:alloy_infused')
    .color('#ed5151')
    .mekanism({
        enabled: true,
        previous: "starter",
        tier_installer: true,
        bin_storage: 8192,
        energy_cube_capacity: 1600000,
        energy_cube_output: 80000,
        fluid_tank_storage: 32000,
        fluid_tank_output: 16000,
        chemical_tank_storage: 64000,
        chemical_tank_output: 32000,
        cable_capacity: 640000,
        pipe_capacity: 4000,
        pipe_pull: 1000,
        tube_capacity: 8000,
        tube_pull: 2000,
        transporter_pull: 4,
        transporter_speed: 110,
        conductor_conduction: 20.0,
        conductor_heat_capacity: 2.0,
        conductor_insulation: 20,
        induction_cell_capacity: 10000000,
        induction_provider_output: 100000,
        factory_processes: 2
    })
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
      // mB; vanilla = 1500
})
