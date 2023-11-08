import { F } from "./utilityTypes";

export const map = <T extends { map: F }>(fn: F, f: T) => f.map(fn);
