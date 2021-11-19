//@ts-ignore
import { resolveNestedPromises } from "./promise-deep-resolve";

export type Resolved<T> = T extends Function
  ? T
  : T extends object
  ? { [K in keyof T]: Resolved<Awaited<T[K]>> }
  : Awaited<T>;

export const promiseDeepResolve = async <T, ReturnType = Resolved<T>>(
  objectWithPromises: T | Promise<T>
): Promise<ReturnType> =>
  await resolveNestedPromises(await objectWithPromises, undefined, -1);
