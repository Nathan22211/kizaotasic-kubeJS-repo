// Force log/stem/wood → planks for every wood in #minecraft:planks (vanilla + modded).
ServerEvents.recipes(event => {
  const logCandidates = (planksId) => {
    const parts = String(planksId).split(':')
    if (parts.length !== 2) return []
    const ns = parts[0]
    const base = parts[1].replace(/_planks$/, '')
    if (!base || base === parts[1]) return []
    return [
      `${ns}:${base}_log`,
      `${ns}:stripped_${base}_log`,
      `${ns}:${base}_wood`,
      `${ns}:stripped_${base}_wood`,
      `${ns}:${base}_stem`,
      `${ns}:stripped_${base}_stem`,
      `${ns}:${base}_hyphae`,
      `${ns}:stripped_${base}_hyphae`,
      `${ns}:${base}_block`,
      `${ns}:stripped_${base}_block`,
    ]
  }

  const countFor = (planksId) =>
    String(planksId).includes('bamboo') ? 2 : 4

  let added = 0
  Ingredient.of('#minecraft:planks').itemIds.forEach((planksId) => {
    if (String(planksId).startsWith('nbtcompat:')) return
    const count = countFor(planksId)
    for (const logId of logCandidates(planksId)) {
      if (!Item.exists(logId)) continue
      const key = String(logId).replace(':', '_')
      event.shapeless(`${count}x ${planksId}`, [logId]).id(`kubejs:log_to_planks/${key}`)
      added++
    }
  })

  console.info(`[kubejs] Restored ${added} log→planks crafting recipes`)
})
