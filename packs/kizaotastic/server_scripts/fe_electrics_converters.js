ServerEvents.recipes(event => {
  // Mek-tiered buck / boost. IDs: fe_electrics:mek_{tier}_{buck|boost}
  let tiers = [
    {
      name: 'basic',
      alloy: '#mekanism:alloys/basic',
      circuit: 'mekanism:basic_control_circuit',
      cable: 'mekanism:basic_universal_cable',
      core: 'mekanism:steel_casing',
    },
    {
      name: 'advanced',
      alloy: '#mekanism:alloys/infused',
      circuit: 'mekanism:advanced_control_circuit',
      cable: 'mekanism:advanced_universal_cable',
      core: 'prev',
    },
    {
      name: 'elite',
      alloy: '#mekanism:alloys/reinforced',
      circuit: 'mekanism:elite_control_circuit',
      cable: 'mekanism:elite_universal_cable',
      core: 'prev',
    },
    {
      name: 'ultimate',
      alloy: '#mekanism:alloys/atomic',
      circuit: 'mekanism:ultimate_control_circuit',
      cable: 'mekanism:ultimate_universal_cable',
      core: 'prev',
    },
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
