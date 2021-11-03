export declare type Resolved<T> = T extends object ? {
    [K in keyof T]: Resolved<Awaited<T[K]>>;
} : Awaited<T>;
export declare const promiseDeepResolve: <T>(objectWithPromises: T | Promise<T>) => Promise<Resolved<T>>;
//# sourceMappingURL=index.d.ts.map