FeElectricsEvents.define(event => {
    event.generator('generatorgalore:copper_generator').fromStored({
        baseVoltage: 30,
        voltageFromStored: 0.001,
        baseAmps: 1,
        ampsFromStored: 0.0001,
        maxVoltage: 60,
        maxAmps: 8
      })
    event.generator('generatorgalore:iron_generator').fromStored({
        baseVoltage: 45,
        voltageFromStored: 0.001,
        baseAmps: 1.2,
        ampsFromStored: 0.0012,
        maxVoltage: 70,
        maxAmps: 9.6
      })
    event.generator('generatorgalore:gold_generator').fromStored({
        baseVoltage: 60,
        voltageFromStored: 0.001,
        baseAmps: 1.5,
        ampsFromStored: 0.0012,
        maxVoltage: 120,
        maxAmps: 18
      })
    event.generator('generatorgalore:diamond_generator').fromStored({
        baseVoltage: 120,
        voltageFromStored: 0.001,
        baseAmps: 2.5,
        ampsFromStored: 0.00216,
        maxVoltage: 150,
        maxAmps: 30
      })
    event.generator('generatorgalore:netherite_generator').fromStored({
        baseVoltage: 240,
        voltageFromStored: 0.001,
        baseAmps: 4,
        ampsFromStored: 0.0048,
        maxVoltage: 360,
        maxAmps: 48
      })
    event.generator('generatorgalore:obsidian_generator').fromStored({
        baseVoltage: 360,
        voltageFromStored: 0.001,
        baseAmps: 6,
        ampsFromStored: 0.0072,
        maxVoltage: 480,
        maxAmps: 72
      })
    event.generator('generatorgalore:emerald_generator').fromStored({
        baseVoltage: 240,
        voltageFromStored: 0.002,
        baseAmps: 4.5,
        ampsFromStored: 0.005,
        maxVoltage: 360,
        maxAmps: 54
      })
    event.generator('generatorgalore:ender_generator').fromStored({
        baseVoltage: 360,
        voltageFromStored: 0.001,
        baseAmps: 5,
        ampsFromStored: 0.0084,
        maxVoltage: 480,
        maxAmps: 60
      })
    event.generator('generatorgalore:enchantment_generator').fromStored({
        baseVoltage: 480,
        voltageFromStored: 0.01,
        baseAmps: 6,
        ampsFromStored: 0.012,
        maxVoltage: 540,
        maxAmps: 72
      })
    event.generator('generatorgalore:halitosis_generator').fromStored({
        baseVoltage: 480,
        voltageFromStored: 0.02,
        baseAmps: 6,
        ampsFromStored: 0.024,
        maxVoltage: 540,
        maxAmps: 144
      })
    event.generator('generatorgalore:netherstar_generator').fromStored({
        baseVoltage: 720,
        voltageFromStored: 0.03,
        baseAmps: 9,
        ampsFromStored: 0.036,
        maxVoltage: 810,
        maxAmps: 180
      })
      event.generator('generatorgalore:culinary_generator').fromStored({
        baseVoltage: 60,
        voltageFromStored: 0.001,
        baseAmps: 1,
        ampsFromStored: 0.001,
        maxVoltage: 120,
        maxAmps: 16
      })
    event.generator('generatorgalore:potion_generator').fromStored({
        baseVoltage: 90,
        voltageFromStored: 0.001,
        baseAmps: 1.5,
        ampsFromStored: 0.001,
        maxVoltage: 180,
        maxAmps: 24
      })
    event.generator('generatorgalore:honey_generator').fromStored({
        baseVoltage: 90,
        voltageFromStored: 0.003,
        baseAmps: 2.25,
        ampsFromStored: 0.003375,
        maxVoltage: 180,
        maxAmps: 27
      })
    //*_8x generators
    event.generator('generatorgalore:copper_generator_8x').fromStored({
        baseVoltage: 30,
        voltageFromStored: 0.001,
        baseAmps: 8,
        ampsFromStored: 0.008,
        maxVoltage: 60,
        maxAmps: 64
      })
    event.generator('generatorgalore:iron_generator_8x').fromStored({
        baseVoltage: 45,
        voltageFromStored: 0.001,
        baseAmps: 9.6,
        ampsFromStored: 0.0096,
        maxVoltage: 70,
        maxAmps: 76.8
      })
    event.generator('generatorgalore:gold_generator_8x').fromStored({
        baseVoltage: 60,
        voltageFromStored: 0.001,
        baseAmps: 12,
        ampsFromStored: 0.012,
        maxVoltage: 120,
        maxAmps: 96
      })
    event.generator('generatorgalore:diamond_generator_8x').fromStored({
        baseVoltage: 120,
        voltageFromStored: 0.001,
        baseAmps: 20,
        ampsFromStored: 0.02,
        maxVoltage: 150,
        maxAmps: 160
      })
    event.generator('generatorgalore:netherite_generator_8x').fromStored({
        baseVoltage: 240,
        voltageFromStored: 0.001,
        baseAmps: 32,
        ampsFromStored: 0.032,
        maxVoltage: 360,
        maxAmps: 256
      })
    event.generator('generatorgalore:obsidian_generator_8x').fromStored({
        baseVoltage: 360,
        voltageFromStored: 0.001,
        baseAmps: 48,
        ampsFromStored: 0.048,
        maxVoltage: 480,
        maxAmps: 384
      })
    event.generator('generatorgalore:emerald_generator_8x').fromStored({
        baseVoltage: 240,
        voltageFromStored: 0.002,
        baseAmps: 36,
        ampsFromStored: 0.036,
        maxVoltage: 360,
        maxAmps: 288
      })
    event.generator('generatorgalore:ender_generator_8x').fromStored({
        baseVoltage: 360,
        voltageFromStored: 0.001,
        baseAmps: 40,
        ampsFromStored: 0.04,
        maxVoltage: 480,
        maxAmps: 320
      })
    event.generator('generatorgalore:enchantment_generator_8x').fromStored({
        baseVoltage: 480,
        voltageFromStored: 0.01,
        baseAmps: 48,
        ampsFromStored: 0.048,
        maxVoltage: 540,
        maxAmps: 384
      })
    event.generator('generatorgalore:halitosis_generator_8x').fromStored({
        baseVoltage: 480,
        voltageFromStored: 0.02,
        baseAmps: 48,
        ampsFromStored: 0.048,
        maxVoltage: 540,
        maxAmps: 384
      })
    event.generator('generatorgalore:netherstar_generator_8x').fromStored({
        baseVoltage: 720,
        voltageFromStored: 0.03,
        baseAmps: 72,
        ampsFromStored: 0.072,
        maxVoltage: 810,
        maxAmps: 540
      })
      event.generator('generatorgalore:culinary_generator_8x').fromStored({
        baseVoltage: 60,
        voltageFromStored: 0.001,
        baseAmps: 8,
        ampsFromStored: 0.08,
        maxVoltage: 120,
        maxAmps: 64
      })
    event.generator('generatorgalore:potion_generator_8x').fromStored({
        baseVoltage: 90,
        voltageFromStored: 0.001,
        baseAmps: 12,
        ampsFromStored: 0.12,
        maxVoltage: 180,
        maxAmps: 96
      })
    event.generator('generatorgalore:honey_generator_8x').fromStored({
        baseVoltage: 90,
        voltageFromStored: 0.003,
        baseAmps: 18,
        ampsFromStored: 0.18,
        maxVoltage: 180,
        maxAmps: 144
      })
    //*_64x generators
    event.generator('generatorgalore:ender_generator_64x').fromStored({
        baseVoltage: 240,
        voltageFromStored: 0.001,
        baseAmps: 320,
        ampsFromStored: 2.048,
        maxVoltage: 480,
        maxAmps: 2048
      })
    event.generator('generatorgalore:enchantment_generator_64x').fromStored({
        baseVoltage: 480,
        voltageFromStored: 0.01,
        baseAmps: 384,
        ampsFromStored: 2.4576,
        maxVoltage: 540,
        maxAmps: 24576
      })
    event.generator('generatorgalore:halitosis_generator_64x').fromStored({
        baseVoltage: 480,
        voltageFromStored: 0.02,
        baseAmps: 384,
        ampsFromStored: 2.4576,
        maxVoltage: 540,
        maxAmps: 24576
      })
    event.generator('generatorgalore:netherstar_generator_64x').fromStored({
        baseVoltage: 720,
        voltageFromStored: 0.03,    
        baseAmps: 576,
        ampsFromStored: 3.6864,
        maxVoltage: 810,
        maxAmps: 36864
      })
      event.generator('generatorgalore:culinary_generator_64x').fromStored({
        baseVoltage: 60,
        voltageFromStored: 0.001,
        baseAmps: 64,
        ampsFromStored: 0.08,
        maxVoltage: 120,
        maxAmps: 512
      })
    event.generator('generatorgalore:potion_generator_64x').fromStored({
        baseVoltage: 90,
        voltageFromStored: 0.001,
        baseAmps: 96,
        ampsFromStored: 6.144,
        maxVoltage: 180,
        maxAmps: 768
      })
    event.generator('generatorgalore:honey_generator_64x').fromStored({
        baseVoltage: 90,
        voltageFromStored: 0.003,
        baseAmps: 144,
        ampsFromStored: 8.2944,
        maxVoltage: 180,
        maxAmps: 1152
      })
    event.generator('generatorgalore:netherite_generator_64x').fromStored({
        baseVoltage: 240,
        voltageFromStored: 0.001,
        baseAmps: 256,
        ampsFromStored: 16.384,
        maxVoltage: 360,
        maxAmps: 16384
      })
})