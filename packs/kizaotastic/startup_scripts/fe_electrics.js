// FE Electrics — voltage / amperage rules for FE devices and cables.
FeElectricsEvents.define(event => {
  event.cable('copper')
    .displayName('Copper Cable')
    .color('#B87333')
    .maxAmps(32)
    .resistance(0.08)
    .shock(2)
    .overload('explosion', 1.5)

  event.cable('gold')
    .displayName('Gold Cable')
    .color('#FFD700')
    .maxAmps(64)
    .resistance(0.03)
    .shock(3)
    .overload('fire', 4)

  event.cable('aluminum')
    .displayName('Aluminum Cable')
    .color('#C0C0C0')
    .maxAmps(16)
    .resistance(0.12)
    .shock(1.5)
    .overload('break')

  event.transformer('step_up_2')
    .displayName('2× Step-Up Transformer')
    .ratio(2)
    .maxPrimaryAmps(64)
    .overload('explosion', 2)

  event.transformer('step_down_2')
    .displayName('2× Step-Down Transformer')
    .ratio(0.5)
    .maxPrimaryAmps(128)
    .overload('explosion', 2)

  // Fixed V_out in a window. Under-V: dead. Over-V / over-A: breaks.
  // I_out = I_in × (V_in / V_out)  (buck: V down, A up; boost: V up, A down)
  event.buckConverter('basic')
    .displayName('Basic Buck Converter')
    .inputVoltage(100, 140)
    .outputVoltage(60)
    .maxAmps(32)
    .overload('explosion', 2)

  event.boostConverter('basic')
    .displayName('Basic Boost Converter')
    .inputVoltage(15, 50)
    .outputVoltage(120)
    .maxAmps(16)
    .overload('explosion', 2)

  // Battery bank → load cables. Wiring is auto from cell layout:
  // chain = series (V×N). Filled 2×4 rectangle = 2p 4s (V×4, A×2).
  // Longest axis = series; extra copies of that length = parallel.
  // Optional: .parallel() / .series() to force a mode

  // One-way diode: required to join multiple generators.
  // gens on a bus → combiner (front toward load) → output cable (summed V/A).
  // Wiring gens onto the same cables without a combiner breaks a generator.
  event.combiner('basic')
    .displayName('Diode Combiner')
    .maxAmps(256)
    .overload('explosion', 2)
})
