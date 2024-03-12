export type WithRequired<
  T extends Record<string, any>,
  TRequiedKeys extends keyof T
> = Pick<T, TRequiedKeys> & Partial<Omit<T, TRequiedKeys>>
