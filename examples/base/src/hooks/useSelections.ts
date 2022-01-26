/* eslint-disable no-unused-vars */
import { useMemo, useState } from 'react'

export type UseSelections<T> = {
  selected: T[]
  noneSelected: Boolean
  allSelected: Boolean
  partiallySelected: Boolean
  setSelected: (value: T[]) => void
  isSelected: (value: T) => boolean
  select: (item: T) => void
  unSelect: (item: T) => void
  toggle: (value: T) => void
  selectAll: () => void
  unSelectAll: () => void
  toggleAll: () => void
}

export default function useSelections<T>(
  items: T[],
  defaultSelected: T[] = [],
  isSingle: Boolean = false
): UseSelections<T> {
  const [selected, setSelected] = useState<T[]>(defaultSelected)

  const selectedSet = useMemo(() => new Set(selected), [selected])

  const isSelected = (item: T) => selectedSet.has(item)

  const unSelectAll = () => {
    items.forEach((o) => {
      selectedSet.delete(o)
    })
    setSelected(Array.from(selectedSet))
  }

  const select = (item: T) => {
    if (isSingle) {
      unSelectAll()
    }
    selectedSet.add(item)
    return setSelected(Array.from(selectedSet))
  }

  const unSelect = (item: T) => {
    selectedSet.delete(item)
    return setSelected(Array.from(selectedSet))
  }

  const toggle = (item: T) => {
    if (isSelected(item)) {
      unSelect(item)
    } else {
      select(item)
    }
  }

  const selectAll = () => {
    items.forEach((o) => {
      selectedSet.add(o)
    })
    setSelected(Array.from(selectedSet))
  }

  const noneSelected = useMemo(
    () => items.every((o) => !selectedSet.has(o)),
    [items, selectedSet]
  )

  const allSelected = useMemo(
    () => items.every((o) => selectedSet.has(o)) && !noneSelected,
    [items, selectedSet, noneSelected]
  )

  const partiallySelected = useMemo(
    () => !noneSelected && !allSelected,
    [noneSelected, allSelected]
  )

  const toggleAll = () => (allSelected ? unSelectAll() : selectAll())

  return {
    selected,
    noneSelected,
    allSelected,
    partiallySelected,
    setSelected,
    isSelected,
    select: select,
    unSelect: unSelect,
    toggle: toggle,
    selectAll: selectAll,
    unSelectAll: unSelectAll,
    toggleAll: toggleAll,
  }
}
