declare const _default: import("react").MemoExoticComponent<typeof EmojiPicker>;
export default _default;
export type Props = {
    theme: 'light' | 'dark' | 'auto';
    onSelectEmoji: (arg0: import("../types/types").EmojiMartItem) => void;
    disableRecent: boolean;
    customEmojis: object[];
};
/**
 * @typedef {object} Props
 * @property {'light' | 'dark' | 'auto'} theme
 * @property {function(import("../types/types").EmojiMartItem): void} onSelectEmoji
 * @property {boolean} disableRecent
 * @property {object[]} customEmojis
 */
/**
 * Emoji Picker Component
 * @param {Props} props
 * @return {React.FC}
 */
declare function EmojiPicker(props: Props): React.FC;
declare namespace EmojiPicker {
    namespace propTypes {
        const theme: any;
        const onSelectEmoji: any;
        const disableRecent: any;
        const customEmojis: any;
    }
}
