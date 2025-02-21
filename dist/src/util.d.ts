import { Node } from 'luaparse';
export declare function locStart(node: Node): number;
export declare function locEnd(node: Node): number;
export declare function isNode(value: any): boolean;
export interface SearchOptions {
    searchBackwards?: boolean;
}
export declare function skipOnce(text: string, idx: number, sequences: string[], searchOptions?: SearchOptions): number;
export declare function skipMany(text: string, idx: number, sequences: string[], searchOptions?: SearchOptions): number;
export declare function skipNewLine(text: string, idx: number, searchOptions?: SearchOptions): number;
export declare function skipSpaces(text: string, idx: number, searchOptions?: SearchOptions): number;
export declare function skipToLineEnd(text: string, idx: number, searchOptions?: SearchOptions): number;
export declare function hasNewLine(text: string, idx: number, searchOptions?: SearchOptions): boolean;
export declare function hasNewLineInRange(text: string, start: number, end: number): boolean;
export declare function isPreviousLineEmpty(text: string, idx: number): boolean;
export declare function skipTrailingComment(text: string, idx: number): number;
export declare function isNextLineEmpty(text: string, idx: number, searchOptions?: SearchOptions): boolean;
