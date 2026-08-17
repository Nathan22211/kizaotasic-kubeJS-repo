CustomTiersEvents.define(event => {
    event.create('starter')
    .order(6)
    .upgradeMaterial('minecraft:command_block')
    .color('#1f1f1e')
    .mekanism({
        enabled: true,
        previous: "basic",
        tier_installer: false,
        bin_storage: 1024,
        energy_cube_capacity: 400000,
        energy_cube_output: 20000,
        fluid_tank_storage: 8000,
        fluid_tank_output: 4000,
        chemical_tank_storage: 16000,
        chemical_tank_output: 8000,
        cable_capacity: 80000,
        pipe_capacity: 500,
        pipe_pull: 500,
        tube_capacity: 1000,
        tube_pull: 500,
        transporter_pull: 2,
        transporter_speed: 1,
        conductor_conduction: 1.0,
        conductor_heat_capacity: 1.0,
        conductor_insulation: 1,
        induction_cell_capacity: 2000000,
        induction_provider_output: 20000,
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
        bin_storage: 2048,
        energy_cube_capacity: 800000,
        energy_cube_output: 40000,
        fluid_tank_storage: 16000,
        fluid_tank_output: 8000,
        chemical_tank_storage: 32000,
        chemical_tank_output: 16000,
        cable_capacity: 320000,
        pipe_capacity: 2000,
        pipe_pull: 100,
        tube_capacity: 4000,
        tube_pull: 1000,
        transporter_pull: 4,
        transporter_speed: 2,
        conductor_conduction: 2.0,
        conductor_heat_capacity: 2.0,
        conductor_insulation: 2,
        induction_cell_capacity: 5000000,
        induction_provider_output: 50000,
        factory_processes: 2
    })
    event.create('proper_basic')
    .order(6)
    .upgradeMaterial('kubejs:basic_alloy')
    .color('#259c4f')
    .mekanism({
        enabled: true,
        replaces: 'basic',
        previous: "infused",
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
        transporter_speed: 4,
        conductor_conduction: 4.0,
        conductor_heat_capacity: 4.0,
        conductor_insulation: 4,
        induction_cell_capacity: 10000000,
        induction_provider_output: 100000,
        factory_processes: 3
    })
})

FeElectricsEvents.define(event => {
  // bufferFe ≈ one tick of V×A staging (not a battery). Defaults to amps×480 if omitted.
  // Must stay ≥ peak FE/tick or Mek fill→emit will starve throughput.
  event.externalCable('mekanism:basic_universal_cable')
    .maxAmps(8)
    .bufferFe(4096)
    .resistance(0.50)
    .shock(2)
    .overload('fire', 1)

   event.externalCable('custom_tiers:starter_universal_cable')
    .maxAmps(5)
    .bufferFe(4096)
    .resistance(1)
    .shock(1)
    .overload('fire', 1)
   event.externalCable('custom_tiers:infused_universal_cable')
    .maxAmps(7.5)
    .bufferFe(4096)
    .resistance(0.75)
    .shock(1)
    .overload('fire', 1)
   event.externalCable('custom_tiers:proper_basic_universal_cable')
    .maxAmps(10)
    .bufferFe(4096)
    .resistance(0.5)
    .shock(1)
    .overload('fire', 1)

  event.externalCable('mekanism:advanced_universal_cable')
    .maxAmps(16)
    .bufferFe(8192)
    .resistance(0.25)
    .shock(2.5)
    .overload('fire', 2)

  event.externalCable('mekanism:elite_universal_cable')
    .maxAmps(64)
    .bufferFe(32768)
    .resistance(0.10)
    .shock(3)
    .overload('fire', 4)

  event.externalCable('mekanism:ultimate_universal_cable')
    .maxAmps(256)
    .bufferFe(131072)
    .resistance(0.05)
    .shock(4)
    .overload('fire', 8)

    // Mekanism base-tier machines voltage/amperage/overvoltage configuration
    // https://wiki.aidancbrady.com/wiki/ and JEI for block registry names

    // Mekanism Factories - voltage/amperage by tier:
    // Voltage:    Basic 60(±10), Advanced 120(±10), Elite/Ultimate 240(±10)
    // Amps:       Basic 5, Advanced 10, Elite 15, Ultimate 20

    const mekFactoryTypes = [
      'enrichment',
      'smelting',
      'crushing',
      'compressing',
      'purifying',
      'injecting',
      'infusing',
      'sawing',
      'enriching',
      'combining'
    ];

    mekFactoryTypes.forEach(type => {
      // Basic Factory
      event.machine(`mekanism:basic_${type}_factory`)
        .voltage(110, 130)
        .amps(2)
        .overvoltage('explosion', 1);

      event.machine(`custom_tiers:starter_${type}_factory`)
        .voltage(40, 80)
        .amps(1)
        .overvoltage('explosion', 1);

      event.machine(`custom_tiers:infused_${type}_factory`)
        .voltage(40, 80)
        .amps(2.5)
        .overvoltage('explosion', 1);
      event.machine(`custom_tiers:proper_basic_${type}_factory`)
        .voltage(40, 80)
        .amps(5)
        .overvoltage('explosion', 1);

      // Advanced Factory
      event.machine(`mekanism:advanced_${type}_factory`)
        .voltage(110, 130)
        .amps(4)
        .overvoltage('explosion', 2);

      // Elite Factory
      event.machine(`mekanism:elite_${type}_factory`)
        .voltage(230, 250)
        .amps(6)
        .overvoltage('explosion', 3);

      // Ultimate Factory
      event.machine(`mekanism:ultimate_${type}_factory`)
        .voltage(230, 250)
        .amps(8)
        .overvoltage('explosion', 4);
    });

    // Mekanism machines that do NOT have factory variants
    const mekMachines = [
      // Machines with no factory variant
      'rotary_condensentrator',
      'pressurized_reaction_chamber',
      'chemical_infuser',
      'chemical_dissolution_chamber',
      'chemical_washer',
      'chemical_crystallizer',
      'osmium_compressor',
      'electric_pump',
      'electrolytic_separator',
      'digital_miner',
      'formulaic_assemblicator',
      'resistive_heater',
      'seismic_vibrator',
      'isotopic_centrifuge',
      'solar_neutron_activator',
      'antiprotonic_nucleosynthesizer',
      'nutritional_liquifier',
      'enrichment_chamber',
      'metallurgic_infuser',
      'crusher',
      'combiner',
      'purification_chamber',
      'energized_smelter'
    ];

    mekMachines.forEach(machine => {
      event.machine(`mekanism:${machine}`)
        .voltage(40, 80)
        .amps(1)
        .overvoltage('explosion', 1);
    });

    // Energy cubes — nickel tolerates over-V; lithium/sodium DESTROY without a BMS
    // Put fragile packs behind a BMS so they only see regulated chargeVoltage
    event.battery('mekanism:basic_energy_cube')
      .maxVoltage(140).storedVoltage(120).amps(8, 8).chemistry('lithium')
    event.battery('mekanism:advanced_energy_cube')
      .maxVoltage(140).storedVoltage(120).amps(16, 16).chemistry('lithium')
    event.battery('mekanism:elite_energy_cube')
      .maxVoltage(260).storedVoltage(240).amps(32, 32).chemistry('lithium')
    event.battery('mekanism:ultimate_energy_cube')
      .maxVoltage(260).storedVoltage(240).amps(64, 64).chemistry('lithium')

    event.battery('custom_tiers:starter_energy_cube')
      .maxVoltage(70).storedVoltage(60).amps(1, 4).chemistry('lithium')
    event.battery('custom_tiers:infused_energy_cube')
      .maxVoltage(70).storedVoltage(60).amps(2, 6.5).chemistry('lithium')
    event.battery('custom_tiers:proper_basic_energy_cube')
      .maxVoltage(70).storedVoltage(60).amps(2, 10).chemistry('lithium')

    // BMS for energy cubes. IDs become fe_electrics:<id>_bms
    event.bms('basic')
    .displayName('Basic BMS')
    .maxInputVoltage(120)
    .chargeVoltage(60)
    .maxBatteries(2)
    .maxAmps(8)
    .overload('explosion', 2)

    event.bms('starter')
    .displayName('Starter BMS')
    .maxInputVoltage(100)
    .chargeVoltage(60)
    .maxBatteries(2)
    .maxAmps(4)
    .overload('explosion', 2)

    event.bms('infused')
    .displayName('Infused BMS')
    .maxInputVoltage(100)
    .chargeVoltage(60)
    .maxBatteries(2)
    .maxAmps(7.5)
    .overload('explosion', 2)

    event.bms('proper_basic')
    .displayName('Basic BMS')
    .maxInputVoltage(100)
    .chargeVoltage(60)
    .maxBatteries(4)
    .maxAmps(10)
    .overload('explosion', 2)

    event.bms('advanced')
    .displayName('Advanced BMS')
    .maxInputVoltage(240)
    .chargeVoltage(120)
    .maxBatteries(4)
    .maxAmps(16)
    .overload('explosion', 2)

    event.bms('elite')
    .displayName('Elite BMS')
    .maxInputVoltage(360)
    .chargeVoltage(240)
    .maxBatteries(6)
    .maxAmps(24)
    .overload('explosion', 2)

    event.bms('ultimate')
    .displayName('Ultimate BMS')
    .maxInputVoltage(360)
    .chargeVoltage(240)
    .maxBatteries(8)
    .maxAmps(32)
    .overload('explosion', 2)
    //transformers
    event.transformer('step_up_basic_2')
    .displayName('2× Basic Step-Up Transformer')
    .ratio(2)
    .maxPrimaryAmps(16)
    .overload('explosion', 2)

    event.transformer('step_down_basic_2')
    .displayName('2× Basic Step-Down Transformer')
    .ratio(0.5)
    .maxPrimaryAmps(32)
    .overload('explosion', 2)
    event.transformer('step_up_basic_4')
    .displayName('4× Basic Step-Up Transformer')
    .ratio(4)
    .maxPrimaryAmps(64)
    .overload('explosion', 2)

    event.transformer('step_down_basic_4')
    .displayName('4× Basic Step-Down Transformer')
    .ratio(0.25)
    .maxPrimaryAmps(128)
    .overload('explosion', 2)

    event.transformer('step_up_advanced_2')
    .displayName('2× Advanced Step-Up Transformer')
    .ratio(2)
    .maxPrimaryAmps(24)
    .overload('explosion', 2)

    event.transformer('step_down_advanced_2')
    .displayName('2× Advanced Step-Down Transformer')
    .ratio(0.5)
    .maxPrimaryAmps(48)
    .overload('explosion', 2)

    event.transformer('step_up_advanced_4')
    .displayName('4× Advanced Step-Up Transformer')
    .ratio(4)
    .maxPrimaryAmps(96)
    .overload('explosion', 2)

    event.transformer('step_down_advanced_4')
    .displayName('4× Advanced Step-Down Transformer')
    .ratio(0.25)
    .maxPrimaryAmps(192)
    .overload('explosion', 2)

    event.transformer('step_up_elite_2')
    .displayName('2× Elite Step-Up Transformer')
    .ratio(2)
    .maxPrimaryAmps(32)
    .overload('explosion', 2)

    event.transformer('step_down_elite_2')
    .displayName('2× Elite Step-Down Transformer')
    .ratio(0.5)
    .maxPrimaryAmps(64)
    .overload('explosion', 2)

    event.transformer('step_up_elite_4')
    .displayName('4× Elite Step-Up Transformer')
    .ratio(4)
    .maxPrimaryAmps(128)
    .overload('explosion', 2)

    event.transformer('step_down_elite_4')
    .displayName('4× Elite Step-Down Transformer')
    .ratio(0.25)
    .maxPrimaryAmps(256)

    event.transformer('step_up_ultimate_2')
    .displayName('2× Ultimate Step-Up Transformer')
    .ratio(2)
    .maxPrimaryAmps(48)
    .overload('explosion', 2)

    event.transformer('step_down_ultimate_2')
    .displayName('2× Ultimate Step-Down Transformer')
    .ratio(0.5)
    .maxPrimaryAmps(96)
    .overload('explosion', 2)

    event.transformer('step_up_ultimate_4')
    .displayName('4× Ultimate Step-Up Transformer')
    .ratio(4)
    .maxPrimaryAmps(192)
    .overload('explosion', 2)

    event.transformer('step_down_ultimate_4')
    .displayName('4× Ultimate Step-Down Transformer')
    .ratio(0.25)
    .maxPrimaryAmps(384)
    .overload('explosion', 2)

    // Buck / boost: window in → fixed V_out. Under-V: dead. Over-V / over-A: breaks.
    // I_out = I_in × (V_in / V_out)
    event.buckConverter('mek_basic')
    .displayName('Basic Buck Converter')
    .inputVoltage(100, 140)
    .outputVoltage(60)
    .maxAmps(16)
    .overload('explosion', 2)

    event.boostConverter('mek_basic')
    .displayName('Basic Boost Converter')
    .inputVoltage(15, 50)
    .outputVoltage(120)
    .maxAmps(16)
    .overload('explosion', 2)

    event.buckConverter('mek_advanced')
    .displayName('Advanced Buck Converter')
    .inputVoltage(100, 140)
    .outputVoltage(60)
    .maxAmps(24)
    .overload('explosion', 2)

    event.boostConverter('mek_advanced')
    .displayName('Advanced Boost Converter')
    .inputVoltage(40, 90)
    .outputVoltage(120)
    .maxAmps(24)
    .overload('explosion', 2)

    event.buckConverter('mek_elite')
    .displayName('Elite Buck Converter')
    .inputVoltage(200, 280)
    .outputVoltage(120)
    .maxAmps(32)
    .overload('explosion', 2)

    event.boostConverter('mek_elite')
    .displayName('Elite Boost Converter')
    .inputVoltage(80, 140)
    .outputVoltage(240)
    .maxAmps(32)
    .overload('explosion', 2)

    event.buckConverter('mek_ultimate')
    .displayName('Ultimate Buck Converter')
    .inputVoltage(200, 280)
    .outputVoltage(120)
    .maxAmps(48)
    .overload('explosion', 2)

    event.boostConverter('mek_ultimate')
    .displayName('Ultimate Boost Converter')
    .inputVoltage(80, 140)
    .outputVoltage(240)
    .maxAmps(48)
    .overload('explosion', 2)

    event.bankOutput('mek_basic')
    .displayName('Basic Bank Output')
    .auto()
    .maxBatteries(2)
    .maxAmps(64)
    .overload('explosion', 2)

    event.bankOutput('mek_advanced')
    .displayName('Advanced Bank Output')
    .auto()
    .maxBatteries(4)
    .maxAmps(128)
    .overload('explosion', 2)

    event.bankOutput('mek_elite')
    .displayName('Elite Bank Output')
    .auto()
    .maxBatteries(6)
    .maxAmps(256)
    .overload('explosion', 2)

    event.bankOutput('mek_ultimate')
    .displayName('Ultimate Bank Output')
    .auto()
    .maxBatteries(8)
    .maxAmps(512)
    .overload('explosion', 2)

    event.combiner('mek_basic')
    .displayName('Basic Combiner')
    .maxAmps(32)
    .overload('explosion', 1)

    event.combiner('mek_advanced')
    .displayName('Advanced Combiner')
    .maxAmps(64)
    .overload('explosion', 2)

    event.combiner('mek_elite')
    .displayName('Elite Combiner')
    .maxAmps(128)
    .overload('explosion', 3)

    event.combiner('mek_ultimate')
    .displayName('Ultimate Combiner')
    .maxAmps(256)
    .overload('explosion', 4)

    //mekanism generators
    event.generator('mekanismgenerators:wind_generator').fromFeOutput({
        baseVoltage: 30,
        voltagePerFe: 0.001,
        baseAmps: 2,
        ampsPerFe: 0.05,
        maxVoltage: 0,
        maxAmps: 10
      })
    
    event.generator('mekanismgenerators:solar_generator').fromFeOutput({
        baseVoltage: 30,
        voltagePerFe: 0.001,
        baseAmps: 1,
        ampsPerFe: 0.0001,
        maxVoltage: 0,
        maxAmps: 5
      })

    event.generator('mekanismgenerators:advanced_solar_generator').fromFeOutput({
        baseVoltage: 30,
        voltagePerFe: 0.001,
        baseAmps: 1,
        ampsPerFe: 0.0001,
        maxVoltage: 0,
        maxAmps: 5
      })
    
    event.generator('mekanismgenerators:heat_generator').fromFeOutput({
        baseVoltage: 15,
        voltagePerFe: 0.01,
        baseAmps: 0.25,
        ampsPerFe: 0.001,
        maxVoltage: 0,
        maxAmps: 2.5
      })
    event.generator('mekanismgenerators:bio_generator').fromStored({
        baseVoltage: 30,
        voltageFromStored: 0.0001,
        baseAmps: 0.5,
        ampsFromStored: 0.0001,
        maxVoltage: 60,
        maxAmps: 10
      })
    event.generator('mekanismgenerators:gas_burning_generator').fromStored({
        baseVoltage: 60,
        voltageFromStored: 0.0001,
        baseAmps: 1,
        ampsFromStored: 0.0001,
        maxVoltage: 90,
        maxAmps: 10
      })
})
