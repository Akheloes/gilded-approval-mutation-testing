declare module 'approvals' {
    export function verify(dirname: string, actual: any, options?: any): Promise<void>;
}
