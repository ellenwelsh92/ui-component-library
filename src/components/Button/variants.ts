export const variations = ['ghost', 'subtle', 'destructive', 'warning', 'solid'] as const

export type TVariations = (typeof variations)[number]
