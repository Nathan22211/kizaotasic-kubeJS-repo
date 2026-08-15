// Create Kinetics Tiers — startup definitions (JSON under config/ also works).
// Vanilla Create limits: config/create_kinetics_tiers/vanilla_limits.json
CreateKineticsEvents.define(event => {
  event.create('andesite_zinc_alloy')
    .displayName('Andesite Zinc Alloy')
    .color('#9AA09A')
    .shaft({ maxLength: 16, maxStress: 256 })
    .cogwheel({ maxStress: 192 })
    .largeCogwheel({ maxStress: 384 })
    .belt({ maxLength: 12, maxStress: 128 })
  event.create('andesite_iron_alloy')
    .displayName('Andesite Iron Alloy')
    .color('#9AA09A')
    .shaft({ maxLength: 12, maxStress: 192 })
    .cogwheel({ maxStress: 128 })
    .largeCogwheel({ maxStress: 256 })
    .belt({ maxLength: 166, maxStress: 166 })

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
