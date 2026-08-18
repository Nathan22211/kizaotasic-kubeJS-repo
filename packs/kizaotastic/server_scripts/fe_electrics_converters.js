ServerEvents.recipes(event => {
  // Mek-tiered buck / boost. IDs: fe_electrics:mek_{tier}_{buck|boost}
  let tiers = [
    {
      name: 'starter',
      alloy: 'kubejs:alloy_starter',
      circuit: 'kubejs:starter_control_circuit',
      cable: 'custom_teirs:starter_universal_cable',
      core: 'mekanism:steel_casing',
    },
    {
      name: 'infused',
      alloy: 'mekanism:alloy_infused',
      circuit: 'kubejs:infused_control_circuit',
      cable: 'custom_teirs:infused_universal_cable',
      core: 'prev',
    },
    {
      name: 'proper_basic',
      alloy: 'kubejs:basic_alloy',
      circuit: 'mekanism:basic_control_circuit',
      cable: 'custom_teirs:proper_basic_universal_cable',
      core: 'prev',
    }
  ]

  for (let i = 0; i < tiers.length; i++) {
    let t = tiers[i]
    let prevName = i === 0 ? null : tiers[i - 1].name
    let buck = 'fe_electrics:mek_' + t.name + '_buck'
    let boost = 'fe_electrics:mek_' + t.name + '_boost'
    let coreBuck = i === 0 ? t.core : 'fe_electrics:mek_' + prevName + '_buck'
    let coreBoost = i === 0 ? t.core : 'fe_electrics:mek_' + prevName + '_boost'

    event.shaped(Item.of(boost, 1), ['###', 'AXA', 'CQC'], {
      '#': t.cable,
      A: t.alloy,
      X: coreBoost,
      C: t.circuit,
      Q: 'minecraft:comparator',
    })
    event.shaped(Item.of(buck, 1), ['CQC', 'AXA', '###'], {
      '#': t.cable,
      A: t.alloy,
      X: coreBuck,
      C: t.circuit,
      Q: 'minecraft:comparator',
    })
  }
})

ServerEvents.recipes(event => {
  // Mek-tiered FE Electrics: transformers, BMS, bank outputs.
  // IDs: fe_electrics:step_{up|down}_{tier}_{2|4}_transformer
  //      fe_electrics:{tier}_bms
  //      fe_electrics:mek_{tier}_bank_output

  let tiers = [
    {
      name: 'starter',
      alloy: 'kubejs:alloy_starter',
      circuit: 'kubejs:starter_control_circuit',
      ingot: '#c:ingots/copper',
      cable: 'custom_teirs:starter_universal_cable',
      core: 'mekanism:steel_casing',
    },
    {
      name: 'infused',
      alloy: 'mekanism:alloy_infused',
      circuit: 'kubejs:infused_control_circuit',
      cable: 'custom_teirs:infused_universal_cable',
      ingot: 'c:ingots/copper'
      core: 'prev',
    },
    {
      name: 'proper_basic',
      alloy: 'kubejs:basic_alloy',
      circuit: 'mekanism:basic_control_circuit',
      cable: 'custom_teirs:proper_basic_universal_cable',
      ingot: 'c:ingots/iron'
      core: 'prev',
    }
  ]

  for (let i = 0; i < tiers.length; i++) {
    let t = tiers[i]
    let prevName = i === 0 ? null : tiers[i - 1].name
    let xfmr2up = 'fe_electrics:step_up_' + t.name + '_2_transformer'
    let xfmr2dn = 'fe_electrics:step_down_' + t.name + '_2_transformer'
    let xfmr4up = 'fe_electrics:step_up_' + t.name + '_4_transformer'
    let xfmr4dn = 'fe_electrics:step_down_' + t.name + '_4_transformer'
    let bms = 'fe_electrics:' + t.name + '_bms'
    let bank = 'fe_electrics:mek_' + t.name + '_bank_output'

    let core2up = i === 0 ? t.core : 'fe_electrics:step_up_' + prevName + '_2_transformer'
    let core2dn = i === 0 ? t.core : 'fe_electrics:step_down_' + prevName + '_2_transformer'
    let coreBms = i === 0 ? t.core : 'fe_electrics:' + prevName + '_bms'
    let coreBank = i === 0 ? t.core : 'fe_electrics:mek_' + prevName + '_bank_output'

    // 2× step-up: cables on top. 2× step-down: cables on bottom.
    event.shaped(Item.of(xfmr2up, 1), ['###', 'AXA', 'CIC'], {
      '#': t.cable,
      A: t.alloy,
      X: core2up,
      C: t.circuit,
      I: t.ingot,
    })
    event.shaped(Item.of(xfmr2dn, 1), ['CIC', 'AXA', '###'], {
      '#': t.cable,
      A: t.alloy,
      X: core2dn,
      C: t.circuit,
      I: t.ingot,
    })

    // 4×: two 2× of the same direction + extra cable/alloy
    event.shaped(Item.of(xfmr4up, 1), ['#C#', 'TXT', '#A#'], {
      '#': t.cable,
      C: t.circuit,
      T: xfmr2up,
      X: t.alloy,
      A: t.ingot,
    })
    event.shaped(Item.of(xfmr4dn, 1), ['#C#', 'TXT', '#A#'], {
      '#': t.cable,
      C: t.circuit,
      T: xfmr2dn,
      X: t.alloy,
      A: t.ingot,
    })

    // BMS — circuits + energy tablets, upgrades previous BMS
    event.shaped(Item.of(bms, 1), ['CAC', 'EXE', 'C#C'], {
      C: t.circuit,
      A: t.alloy,
      E: 'mekanism:energy_tablet',
      X: coreBms,
      '#': t.cable,
    })

    // Bank output — cable-heavy discharge block
    event.shaped(Item.of(bank, 1), ['#C#', 'AXA', '#I#'], {
      '#': t.cable,
      C: t.circuit,
      A: t.alloy,
      X: coreBank,
      I: t.ingot,
    })
  }

  event.remove({ output: 'mekanism:metallurgic_infuser' })
  event.shaped(
    Item.of('custom_tiers:starter_infusing_factory', 1),
    ['ABA', 'DCD', 'ABA'],
    {
      A: '#minecraft:cobbles',
      B: 'minecraft:furnace',
      C: 'mekanism:ingot_osmium',
      D: 'minecraft:redstone',
    }
  )

  event.remove({ output: 'mekanism:crusher' })
  event.shaped(
    Item.of('custom_tiers:starter_crushing_factory', 1),
    ['ABA', 'DCD', 'ABA'],
    {
      A: 'minecraft:redstone',
      B: 'kubejs:starter_control_circuit',
      C: 'mekanism:steel_casing',
      D: 'create:millstone',
    }
  )

  event.remove({ output: 'mekanism:enrichment_chamber' })
  event.shaped(
    Item.of('custom_tiers:starter_enriching_factory', 1),
    ['ACA', 'IXI', 'ACA'],
    {
      A: 'kubejs:alloy_starter',
      C: 'kubejs:starter_control_circuit',
      I: '#c:ingots/iron',
      X: 'mekanism:steel_casing',
    }
  )

  event.remove({ output: 'mekanism:energized_smelter' })

  event.remove({ output: 'mekanism:precision_sawmill' })
  event.shaped(
    Item.of('custom_tiers:starter_sawing_factory', 1),
    ['ICI', 'AXA', 'ICI'],
    {
      A: 'kubejs:alloy_starter',
      C: 'kubejs:starter_control_circuit',
      I: '#c:ingots/iron',
      X: 'mekanism:steel_casing',
    }
  )

  event.remove({ output: 'mekanism:osmium_compressor' })
  event.shaped(
    Item.of('custom_tiers:starter_compressing_factory', 1),
    ['ACA', 'BXB', 'ACA'],
    {
      A: 'kubejs:alloy_starter',
      B: 'minecraft:bucket',
      C: 'kubejs:starter_control_circuit',
      X: 'mekanism:steel_casing',
    }
  )

  event.remove({ output: 'mekanism:combiner' })
  event.shaped(
    Item.of('custom_tiers:starter_combining_factory', 1),
    ['ACA', '_X_', 'ACA'],
    {
      A: '#mekanism:alloys/infused',
      C: 'kubejs:starter_control_circuit',
      X: 'mekanism:steel_casing',
      _: '#mekanism:stone_crafting_materials',
    }
  )

  event.remove({ output: 'mekanism:purification_chamber' })
  event.custom({
    type: 'mekanism:mek_data',
    category: 'misc',
    pattern: ['ACA', 'OPO', 'ACA'],
    key: {
      A: { tag: 'kubejs:alloy_starter' },
      C: { item: 'kubejs:starter_control_circuit' },
      O: { tag: 'c:ingots/osmium' },
      P: { item: 'custom_tiers:starter_enriching_factory' },
    },
    result: { count: 1, id: 'custom_tiers:starter_purifying_factory' },
  })

  event.remove({ output: 'mekanism:chemical_injection_chamber' })
  event.custom({
    type: 'mekanism:mek_data',
    category: 'misc',
    pattern: ['ACA', 'I#I', 'ACA'],
    key: {
      '#': { item: 'custom_tiers:starter_purifying_factory' },
      A: { tag: 'kubejs:basic_alloy' },
      C: { item: 'kubejs:starter_control_circuit' },
      I: { tag: 'c:ingots/gold' },
    },
    result: { count: 1, id: 'custom_tiers:starter_injecting_factory' },
  })

  // Starter-tier cables / tanks / bin (basic recipes with starter circuit where applicable)
  event.shaped(
    Item.of('custom_tiers:starter_bin', 1),
    ['_C_', 'A A', '___'],
    {
      A: 'kubejs:alloy_starter',
      C: 'kubejs:starter_control_circuit',
      _: '#mekanism:stone_crafting_materials',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_energy_cube', 1),
    ['AEA', 'IPI', 'AEA'],
    {
      A: 'kubejs:alloy_starter',
      E: 'mekanism:energy_tablet',
      I: '#c:ingots/iron',
      P: 'mekanism:steel_casing',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_fluid_tank', 1),
    ['AIA', 'I I', 'AIA'],
    {
      A: 'kubejs:alloy_starter',
      I: '#c:ingots/iron',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_chemical_tank', 1),
    ['AOA', 'O O', 'AOA'],
    {
      A: 'kubejs:alloy_starter',
      O: '#c:ingots/osmium',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_universal_cable', 8),
    ['S#S'],
    {
      '#': '#c:dusts/redstone',
      S: '#c:ingots/steel',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_mechanical_pipe', 8),
    ['S#S'],
    {
      '#': 'minecraft:bucket',
      S: '#c:ingots/steel',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_pressurized_tube', 8),
    ['S#S'],
    {
      '#': '#c:glass_blocks/cheap',
      S: '#c:ingots/steel',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_logistical_transporter', 8),
    ['S#S'],
    {
      '#': 'kubejs:starter_control_circuit',
      S: '#c:ingots/steel',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_thermodynamic_conductor', 8),
    ['S#S'],
    {
      '#': '#c:ingots/copper',
      S: '#c:ingots/steel',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_induction_cell', 1),
    ['LEL', 'E#E', 'LEL'],
    {
      '#': 'custom_tiers:starter_energy_cube',
      E: 'mekanism:energy_tablet',
      L: '#c:dusts/lithium',
    }
  )
  event.shaped(
    Item.of('custom_tiers:starter_induction_provider', 1),
    ['LCL', 'C#C', 'LCL'],
    {
      '#': 'custom_tiers:starter_energy_cube',
      C: 'kubejs:starter_control_circuit',
      L: '#c:dusts/lithium',
    }
  )

  // custom_furnaces starter factories — same pattern, one circuit swapped for the furnace block
  const furnaceFactories = [
    { out: 'custom_furnaces:starter_smelting_factory', furnace: 'minecraft:furnace' },
    { out: 'custom_furnaces:starter_blasting_factory', furnace: 'minecraft:blast_furnace' },
    { out: 'custom_furnaces:starter_smoking_factory', furnace: 'minecraft:smoker' },
    { out: 'custom_furnaces:starter_kilning_factory', furnace: 'custom_furnaces:stone_kilning_furnace' },
  ]
  for (const entry of furnaceFactories) {
    event.shaped(
      Item.of(entry.out, 1),
      ['ACA', 'GXG', 'AFA'],
      {
        A: 'kubejs:alloy_starter',
        C: 'kubejs:starter_control_circuit',
        F: entry.furnace,
        G: '#c:glass_blocks/cheap',
        X: 'mekanism:steel_casing',
      }
    )
  }
})
