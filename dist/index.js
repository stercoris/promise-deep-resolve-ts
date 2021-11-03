"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.promiseDeepResolve = void 0;
//@ts-ignore
const promise_deep_resolve_1 = require("./promise-deep-resolve");
const promiseDeepResolve = async (objectWithPromises) => await (0, promise_deep_resolve_1.resolveNestedPromises)(await objectWithPromises);
exports.promiseDeepResolve = promiseDeepResolve;
