StartupEvents.registry('item', event => {
    event.create('kaolin_clay_ball')
    
    event.create('andesite_zinc_alloy').texture('kubejs:item/andesite-alloy')
    event.create('andesite_iron_alloy').texture('kubejs:item/andesite-alloy')
    event.create('granite_zinc_alloy').texture('kubejs:item/granite-alloy')
    event.create('granite_iron_alloy').texture('kubejs:item/granite-alloy')
    event.create('diorite_zinc_alloy').texture('kubejs:item/diorite-alloy')
    event.create('diorite_iron_alloy').texture('kubejs:item/diorite-alloy')
    event.create('powdered_infused_alloy').texture('kubejs:item/powdered_infused_alloy')
    //mekanism
    event.create('alloy_starter').texture('kubejs:item/starter-alloy')
    event.create('basic_alloy').texture('kubejs:item/basic-alloy')
    //circuts
    event.create('starter_control_circuit').texture('kubejs:item/starter-control-circuit')
    event.create('infused_control_circuit').texture('kubejs:item/infused-control-circuit')
})
