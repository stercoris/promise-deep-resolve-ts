//@ts-ignore
import { resolveNestedPromises } from "./promise-deep-resolve";

export type Resolved<T> = T extends object
  ? { [K in keyof T]: Resolved<Awaited<T[K]>> }
  : Awaited<T>;

export const promiseDeepResolve = async <T>(
  objectWithPromises: T | Promise<T>
): Promise<Resolved<T>> =>
  await resolveNestedPromises(await objectWithPromises);
