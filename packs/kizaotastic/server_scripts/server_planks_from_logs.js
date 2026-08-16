// Vanilla log → planks can get lost/stolen under this pack's recipe stack.
// Force-restore for every vanilla wood (item tags, same as vanilla).
ServerEvents.recipes(event => {
  const woods = [
    'oak',
    'spruce',
    'birch',
    'jungle',
    'acacia',
    'dark_oak',
    'mangrove',
    'cherry',
    'crimson',
    'warped',
  ]

  for (const wood of woods) {
    const planks = `minecraft:${wood}_planks`
    const tag = `minecraft:${wood}_logs`
    event.remove({ id: `minecraft:${wood}_planks` })
    event.shapeless(`4x ${planks}`, [`#${tag}`]).id(`kubejs:planks_from_${wood}_logs`)
  }

  // Bamboo uses blocks, not logs.
  event.remove({ id: 'minecraft:bamboo_planks' })
  event.shapeless('2x minecraft:bamboo_planks', ['#minecraft:bamboo_blocks'])
    .id('kubejs:planks_from_bamboo_blocks')
})
