StartupEvents.registry('item', event => {
    event.create('kaolin_clay_ball')
    
    event.create('andesite_zinc_alloy')
    event.create('andesite_iron_alloy')
    event.create('granite_zinc_alloy')
    event.create('granite_iron_alloy')
    event.create('diorite_zinc_alloy')
    event.create('diorite_iron_alloy')
    //mekanism
    event.create('alloy_starter').texture('kubejs:item/starter-alloy')
    event.create('basic_alloy')
    //circuts
    event.create('starter_control_circuit').texture('kubejs:item/starter-control-circuit')
    event.create('infused_control_circuit').texture('kubejs:item/infused-control-circuit')
})
