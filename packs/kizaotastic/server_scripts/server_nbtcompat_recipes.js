// Match vanilla CT / bookshelf recipes, stamp every wood onto nbtcompat furniture.
// Artisan Worktables is optional — dual-register + handsaw CT recipe only when present.
// wood:log / wood:planks / dye / dyed:planks resolve per wood/dye.
NbtCompatEvents.defineRecipes(event => {
  const hasArtisan = Platform.isLoaded('artisanworktables')

  if (hasArtisan) {
    event.craftingTable()
      .shaped(
        ['AB', 'CA'],
        {
          A: 'wood:planks',
          B: 'artisanworktables:flint_handsaw',
          C: 'minecraft:flint'
        }
      )
  } else {
    event.craftingTable()
      .shaped(['AA', 'AA'], { A: 'wood:planks' })
  }

  const bookshelf = event.bookshelf()
    .shaped(
      ['PPP', 'BBB', 'PPP'],
      {
        P: 'wood:planks',
        B: 'minecraft:book'
      }
    )
  if (hasArtisan) {
    bookshelf.artisan('carpenter').removeCrafting()
  }

  const dyedPlanks = event.dyedPlanks()
    .shaped(
      ['PPP', 'PDP', 'PPP'],
      {
        P: 'wood:planks',
        D: 'dye'
      }
    )
  if (hasArtisan) {
    dyedPlanks
      .artisan('carpenter')
      .tool('#artisanworktables:tools/handsaw', 1)
      .removeCrafting()
  }

  const dyeFurniture = (builder) => {
    if (hasArtisan) {
      builder.artisan('carpenter').removeCrafting()
    }
  }

  dyeFurniture(event.dyedStairs()
    .shaped(['#  ', '## ', '###'], { '#': 'dyed:planks' }))

  dyeFurniture(event.dyedSlab()
    .shaped(['###'], { '#': 'dyed:planks' }))

  dyeFurniture(event.dyedFence()
    .shaped(['W#W', 'W#W'], { W: 'dyed:planks', '#': 'minecraft:stick' }))

  dyeFurniture(event.dyedFenceGate()
    .shaped(['#W#', '#W#'], { W: 'dyed:planks', '#': 'minecraft:stick' }))

  dyeFurniture(event.dyedDoor()
    .shaped(['##', '##', '##'], { '#': 'dyed:planks' }))

  dyeFurniture(event.dyedTrapdoor()
    .shaped(['###', '###'], { '#': 'dyed:planks' }))

  dyeFurniture(event.dyedPressurePlate()
    .shaped(['##'], { '#': 'dyed:planks' }))

  dyeFurniture(event.dyedButton()
    .shaped(['#'], { '#': 'dyed:planks' }))

  // One chipped_planks ID; kind + wood in NBT. Carpenter table offers all styles.
  const stylePlanks = (builder) => {
    if (hasArtisan) {
      builder.artisan('carpenter').tool('#artisanworktables:tools/handsaw', 1).removeCrafting()
    }
  }
  for (const kind of event.chippedPlanksKinds()) {
    stylePlanks(event.chippedPlanks(kind).shaped(['P'], { P: 'wood:planks' }))
  }

  for (const end of [
    event.damagedLog(),
    event.nailedLog(),
    event.centerCutLog(),
    event.edgeCutLog(),
    event.plankedLog(),
    event.overgrownLog(),
    event.floweringLog(),
    event.firewoodLog(),
    event.mixedLog(),
  ]) {
    end.removeCrafting()
  }
})

// Hard-coded minecraft:crafting_table / bookshelf → convention tags (include nbtcompat via mod datapack).
ServerEvents.recipes(event => {
  event.replaceInput({}, 'minecraft:crafting_table', '#c:player_workstations/crafting_tables')
  event.replaceInput({}, 'minecraft:bookshelf', '#c:bookshelves')
})
