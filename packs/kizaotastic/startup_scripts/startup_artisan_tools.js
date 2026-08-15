// kubejs/startup_scripts/artisan_tools.js
// Restart required after changing materials / tool types.

ArtisanWorktablesEvents.defineTools(event => {
  // Optional: only generate these tool kinds (omit to generate all builtins)
  // event.enabledToolTypes(['hammer', 'handsaw', 'cutters', 'chisel', 'knife'])

  // Extra metals / gems — tags, not oredict
  event.material('copper')
    .ingot()                 // => #c:ingots/copper
    .durability(200)
    .color('#E77C56')

  event.material('silver')
    .ingot()                 // => #c:ingots/copper
    .durability(500)
    .color('#daf6f7')


  // Bulk helper
  // event.materials(['tin', 'silver', 'lead'], m => {
  //   m.ingot().durability(180).color('#C0C0C0')
  // })

  //Disable a builtin material
  event.material('wood').disable()
  
  event.material('flint')
  .ingredient('minecraft:flint')
  .durability(80)
  .color('#3B3B3B')

  // Custom tool type
  // event.toolType('wire_snip')
  //   .displayName('Wire Snips')
  //   .pattern(['M M', ' S ', 'S S'])
})
