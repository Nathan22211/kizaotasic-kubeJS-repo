ServerEvents.recipes(event => {

  event.shaped('custom_furnaces:stone_kilning_furnace', [
    'CCC',
    'C C',
    'AAA'
  ], { C: 'minecraft:bricks',
       A: 'minecraft:cobblestone',
    })
  event.shaped('custom_furnaces:mud_brick_kilning_furnace', [
      'CCC',
      'C C',
      'AAA'
  ], { C: 'minecraft:mud_bricks',
         A: 'minecraft:cobblestone',
      })
  event.shaped('custom_furnaces:iron_kilning_furnace', [
    'III',
    'IFI',
    'III'
  ], {
    I: 'minecraft:iron_ingot',
    F: 'custom_furnaces:stone_kilning_furnace'
  })

  // Cooking ovens
  event.shaped('custom_furnaces:brick_cooking_furnace', [
    'CCC',
    'C C',
    'AAA'
  ], {
    C: 'minecraft:bricks',
    A: 'minecraft:smooth_stone',
  })
  event.shaped('custom_furnaces:mud_brick_cooking_furnace', [
    'CCC',
    'C C',
    'AAA'
  ], {
    C: 'minecraft:mud_bricks',
    A: 'minecraft:smooth_stone',
  })
  event.shaped('custom_furnaces:iron_cooking_furnace', [
    'III',
    'IFI',
    'III'
  ], {
    I: 'minecraft:iron_ingot',
    F: 'custom_furnaces:brick_cooking_furnace',
  })

  // Food for cooking ovens (from smoker twins + extras). Avoid forEach/const — Rhino scope bugs.
  // cookTime is furnace pace (smoker time × 2).
  let cookingFoods = [
    { in: 'minecraft:beef', out: 'minecraft:cooked_beef', xp: 0.35, time: 200 },
    { in: 'minecraft:porkchop', out: 'minecraft:cooked_porkchop', xp: 0.35, time: 200 },
    { in: 'minecraft:chicken', out: 'minecraft:cooked_chicken', xp: 0.35, time: 200 },
    { in: 'minecraft:mutton', out: 'minecraft:cooked_mutton', xp: 0.35, time: 200 },
    { in: 'minecraft:rabbit', out: 'minecraft:cooked_rabbit', xp: 0.35, time: 200 },
    { in: 'minecraft:cod', out: 'minecraft:cooked_cod', xp: 0.35, time: 200 },
    { in: 'minecraft:salmon', out: 'minecraft:cooked_salmon', xp: 0.35, time: 200 },
    { in: 'minecraft:potato', out: 'minecraft:baked_potato', xp: 0.35, time: 200 },
    { in: 'minecraft:kelp', out: 'minecraft:dried_kelp', xp: 0.1, time: 200 },
    { in: 'farmersdelight:minced_beef', out: 'farmersdelight:beef_patty', xp: 0.35, time: 200 },
    { in: 'farmersdelight:bacon', out: 'farmersdelight:cooked_bacon', xp: 0.35, time: 200 },
    { in: 'farmersdelight:chicken_cuts', out: 'farmersdelight:cooked_chicken_cuts', xp: 0.35, time: 200 },
    { in: 'farmersdelight:cod_slice', out: 'farmersdelight:cooked_cod_slice', xp: 0.35, time: 200 },
    { in: 'farmersdelight:mutton_chops', out: 'farmersdelight:cooked_mutton_chops', xp: 0.35, time: 200 },
    { in: 'farmersdelight:salmon_slice', out: 'farmersdelight:cooked_salmon_slice', xp: 0.35, time: 200 },
    { in: 'minecraft:egg', out: 'farmersdelight:fried_egg', xp: 0.35, time: 200 },
    { in: 'farmersdelight:wheat_dough', out: 'minecraft:bread', xp: 0.35, time: 200 },
    { in: 'create:dough', out: 'minecraft:bread', xp: 0.0, time: 200 },
    { in: 'farmersdelight:ham', out: 'farmersdelight:smoked_ham', xp: 0.35, time: 400 },
    { in: 'betternether:hook_mushroom', out: 'betternether:hook_mushroom_cooked', xp: 0.1, time: 200 },
  ]

  let moved = 0
  for (let i = 0; i < cookingFoods.length; i++) {
    let r = cookingFoods[i]
    event.remove({ type: 'minecraft:smelting', input: r.in, output: r.out })
    CustomFurnaces.recipe(event, 'cooking')
      .input(r.in)
      .output(r.out)
      .xp(r.xp)
      .cookTime(r.time)
      .id('kubejs:cooking/' + r.out.replace(':', '_') + '_' + i)
      .create()
    moved++
  }

  console.log('[cooking] Added ' + moved + ' cooking oven recipe(s)')
})
