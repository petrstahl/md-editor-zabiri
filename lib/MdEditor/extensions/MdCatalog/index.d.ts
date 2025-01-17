import { PropType, ExtractPropTypes } from 'vue';
import { MarkedHeadingId, Themes } from '../../type';
export interface TocItem {
    text: string;
    level: number;
    index: number;
    active: boolean;
    children?: Array<TocItem>;
}
declare const MdCatalog: import("vue").DefineComponent<{
    /**
     * 编辑器的Id，务必与需要绑定的编辑器Id相同
     */
    editorId: {
        type: PropType<string>;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    markedHeadingId: {
        type: PropType<MarkedHeadingId>;
        default: (text: string) => string;
    };
    /**
     * 指定滚动的容器，选择器需带上对应的符号，默认预览框
     * 元素必须定位！！！！！！
     *
     * 默认：#md-editor-preview-wrapper
     */
    scrollElement: {
        type: PropType<string | HTMLElement>;
    };
    theme: {
        type: PropType<Themes>;
        default: string;
    };
    /**
     * 高亮标题相对滚动容器顶部偏移量，即距离该值时，高亮当前目录菜单项
     *
     * 默认：20px
     */
    offsetTop: {
        type: PropType<number>;
        default: number;
    };
    /**
     * 滚动区域的固定顶部高度
     *
     * 默认：0
     */
    scrollElementOffsetTop: {
        type: PropType<number>;
        default: number;
    };
    onClick: {
        type: PropType<(e: MouseEvent, t: TocItem) => void>;
        default: () => void;
    };
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "onClick"[], "onClick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<ExtractPropTypes<{
    /**
     * 编辑器的Id，务必与需要绑定的编辑器Id相同
     */
    editorId: {
        type: PropType<string>;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    markedHeadingId: {
        type: PropType<MarkedHeadingId>;
        default: (text: string) => string;
    };
    /**
     * 指定滚动的容器，选择器需带上对应的符号，默认预览框
     * 元素必须定位！！！！！！
     *
     * 默认：#md-editor-preview-wrapper
     */
    scrollElement: {
        type: PropType<string | HTMLElement>;
    };
    theme: {
        type: PropType<Themes>;
        default: string;
    };
    /**
     * 高亮标题相对滚动容器顶部偏移量，即距离该值时，高亮当前目录菜单项
     *
     * 默认：20px
     */
    offsetTop: {
        type: PropType<number>;
        default: number;
    };
    /**
     * 滚动区域的固定顶部高度
     *
     * 默认：0
     */
    scrollElementOffsetTop: {
        type: PropType<number>;
        default: number;
    };
    onClick: {
        type: PropType<(e: MouseEvent, t: TocItem) => void>;
        default: () => void;
    };
}>> & {
    onOnClick?: ((...args: any[]) => any) | undefined;
}, {
    theme: Themes;
    class: string;
    markedHeadingId: MarkedHeadingId;
    onClick: (e: MouseEvent, t: TocItem) => void;
    offsetTop: number;
    scrollElementOffsetTop: number;
}>;
export default MdCatalog;
