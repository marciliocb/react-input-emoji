/**
 * @typedef {import('../types/types').SanitizeFn} SanitizeFn
 */
/** */
export function useSanitize(): {
    addSanitizeFn: (fn: SanitizeFn) => void;
    sanitize: (html: string) => string;
    sanitizedTextRef: import("react").MutableRefObject<string>;
};
/**
 *
 * @param {string} html
 * @return {string}
 */
export function replaceAllHtmlToString(html: string): string;
export type SanitizeFn = import('../types/types').SanitizeFn;
