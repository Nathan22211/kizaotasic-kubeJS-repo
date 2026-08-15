// Extra / fixed metals for NBT Compat generic casings (ingot + optional block/nugget).
// Restart required for startup_scripts; F3+T refreshes casing trim textures after changes.
NbtCompatEvents.defineMetals(event => {
  // Prefer the storage block for trim color (multicolor ores / alloys).
  // event.add('modid:steel', {
  //   ingot: 'modid:steel_ingot',
  //   block: 'modid:steel_block',
  //   nugget: 'modid:steel_nugget',
  //   name: 'Steel'
  // })
  //
  // Shorthand (ingot only, or ingot + block [+ nugget [+ name]]):
  // event.add('modid:steel', 'modid:steel_ingot')
  // event.add('modid:steel', 'modid:steel_ingot', 'modid:steel_block')
  // event.add('modid:steel', 'modid:steel_ingot', 'modid:steel_block', 'modid:steel_nugget', 'Steel')
  // event.remove('minecraft:gold')
})
