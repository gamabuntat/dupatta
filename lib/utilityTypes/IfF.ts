export type F = (a: any) => any;

export type IfF<T> = T extends F
  ? (...a: Parameters<T>) => ReturnType<T>
  : never;
