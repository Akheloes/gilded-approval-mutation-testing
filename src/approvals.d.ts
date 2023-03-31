declare module 'approvals' {
    export function verify(dirname: string, actual: any, options?: any): Promise<void>;

    export function verifyAllCombinations1<T1>(func: (i: T1) => any, params1: T1[]);
}
