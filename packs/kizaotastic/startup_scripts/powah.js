FeElectricsEvents.define(event => {
    //cables configuration
    event.externalCable('powah:energy_cable_starter')
    .maxAmps(10)
    //.bufferFe(4096)
    .resistance(1)
    .shock(1)
    .overload('fire', 1)
    event.externalCable('powah:energy_cable_basic')
    .maxAmps(15)
    //.bufferFe(4096)
    .resistance(0.75)
    .shock(2)
    .overload('fire', 2)
    event.externalCable('powah:energy_cable_hardened')
    .maxAmps(20)
    //.bufferFe(4096)
    .resistance(0.5)
    .shock(3)
    .overload('fire', 3)
    event.externalCable('powah:energy_cable_blazing')
    .maxAmps(80)
    //.bufferFe(4096)
    .resistance(0.125)
    .shock(9)
    .overload('explosion', 2)
    event.externalCable('powah:energy_cable_niotic')
    .maxAmps(200)
    //.bufferFe(4096)
    .resistance(0.05)
    .shock(12)
    .overload('explosion', 4)
    event.externalCable('powah:energy_cable_spirited')
    .maxAmps(800)
    //.bufferFe(4096)
    .resistance(0.000625)
    .shock(15)
    .overload('explosion', 8)
    event.externalCable('powah:energy_cable_nitro')
    .maxAmps(4000)
    //.bufferFe(4096)
    .resistance(0.00015625)
    .shock(20)
    .overload('explosion', 16)

    //solar panels (passive, but generates none during the night)
    event.generator('powah:solar_panel_starter').fromFeOutput({
        baseVoltage: 0,
        voltagePerFe: 1.5,
        baseAmps: 0,
        ampsPerFe: 0.125,
        maxVoltage: 30,
        maxAmps: 2.5
      })
    event.generator('powah:solar_panel_basic').fromFeOutput({
        baseVoltage: 0,
        voltagePerFe: 0.75,
        baseAmps: 0,
        ampsPerFe: 0.833333333,
        maxVoltage: 60,
        maxAmps: 5
      })
})