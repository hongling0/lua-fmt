export declare type Quotemark = 'single' | 'double';
export declare enum WriteMode {
    StdOut = "stdout",
    Replace = "replace",
    Diff = "diff"
}
export interface Options {
    sourceText: string;
    lineWidth: number;
    indentCount: number;
    useTabs: boolean;
    linebreakMultipleAssignments: boolean;
    quotemark: Quotemark;
    writeMode: WriteMode;
}
export declare type UserOptions = Partial<Options>;
export declare const defaultOptions: Options;
export declare function getStringQuotemark(quotemark: Quotemark): "'" | "\"";
export declare function getAlternativeStringQuotemark(quotemark: Quotemark): "'" | "\"";
