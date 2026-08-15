// kubejs/startup_scripts/artisan_tables.js
// Restart required after changing table types.

ArtisanWorktablesEvents.define(event => {
  event.create('runesmith')
    .displayName('Runesmith')
    .color('#8844AA')
    event.create('leatherworker')
    .displayName('Leatherworker')
    .color('#fff080')
})
