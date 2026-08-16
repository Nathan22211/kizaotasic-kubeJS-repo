// Create Kinetics Tiers — startup definitions (JSON under config/ also works).
// Vanilla Create limits: config/create_kinetics_tiers/vanilla_limits.json
CreateKineticsEvents.define(event => {
  event.create('andesite_zinc_alloy')
    .displayName('Andesite Zinc Alloy')
    .color('#9AA09A')
    .shaft({ maxLength: 16, maxStress: 64 })
    .cogwheel({ maxStress: 64 })
    .largeCogwheel({ maxStress: 64 })
    .belt({ maxLength: 12, maxStress: 64 })
  event.create('andesite_iron_alloy')
    .displayName('Andesite Iron Alloy')
    .color('#9AA09A')
    .shaft({ maxLength: 12, maxStress: 48 })
    .cogwheel({ maxStress: 48 })
    .largeCogwheel({ maxStress: 48 })
    .belt({ maxLength: 16, maxStress: 48 })

  event.create('granite_zinc_alloy')
    .displayName('Granite Zinc Alloy')
    .color('#ed6b96')
    .shaft({ maxLength: 24, maxStress: 48 })
    .cogwheel({ maxStress: 48 })
    .largeCogwheel({ maxStress: 48 })
    .belt({ maxLength: 16, maxStress: 48 })
  event.create('granite_iron_alloy')
    .displayName('Granite Iron Alloy')
    .color('#ed6b96')
    .shaft({ maxLength: 20, maxStress: 64 })
    .cogwheel({ maxStress: 64 })
    .largeCogwheel({ maxStress: 64 })
    .belt({ maxLength: 24, maxStress: 64 })

  event.create('diorite_zinc_alloy')
    .displayName('Diorite Zinc Alloy')
    .color('#f0e9eb')
    .shaft({ maxLength: 12, maxStress: 70 })
    .cogwheel({ maxStress: 70 })
    .largeCogwheel({ maxStress: 70 })
    .belt({ maxLength: 10, maxStress: 70 })
  event.create('granite_iron_alloy')
    .displayName('Diorite Iron Alloy')
    .color('#f0e9eb')
    .shaft({ maxLength: 18, maxStress: 96 })
    .cogwheel({ maxStress: 96 })
    .largeCogwheel({ maxStress: 96 })
    .belt({ maxLength: 12, maxStress: 96 })

  event.create('steel')
    .displayName('Steel')
    .color('#6E6E6E')
    .limits({
      maxShaftLength: 48,
      maxShaftStress: 2048,
      maxCogStress: 1536,
      maxLargeCogStress: 3072,
      maxBeltLength: 48,
      maxBeltStress: 2048
    })
})
