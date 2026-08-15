// Extra / fixed dyes for NBT Compat dyed planks (multiply tint).
// Restart required for startup_scripts; F3+T regenerates multiply sprites after changes.
NbtCompatEvents.defineDyes(event => {
  // event.add('kubejs:neon', {
  //   dye: 'kubejs:neon_dye',
  //   color: 0xff00aa,          // or [255, 0, 170] or '#ff00aa'
  //   name: 'Neon'
  // })
  // event.add('kubejs:neon', 'kubejs:neon_dye', 0xff00aa, 'Neon')
  // event.remove('minecraft:black')
})
