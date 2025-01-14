export default TextInputWithRef;
export type Props = {
    onKeyDown: (event: React.KeyboardEvent) => void;
    onKeyUp: (event: React.KeyboardEvent) => void;
    onFocus: () => void;
    onBlur: () => void;
    onChange?: (sanitizedText: string) => void;
    onArrowUp: (event: React.KeyboardEvent) => void;
    onArrowDown: (event: React.KeyboardEvent) => void;
    onEnter: (event: React.KeyboardEvent) => void;
    onCopy: (event: React.ClipboardEvent) => void;
    onPaste: (event: React.ClipboardEvent) => void;
    placeholder: string;
    style: React.CSSProperties;
    tabIndex: number;
    className: string;
};
export type Ref = {
    appendContent: (html: string) => void;
    html: string;
    text: string;
    size: {
        width: number;
        height: number;
    };
    focus: () => void;
};
declare const TextInputWithRef: import("react").ForwardRefExoticComponent<import("react").RefAttributes<any>>;
