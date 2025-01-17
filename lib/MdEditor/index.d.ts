import { App } from 'vue';
import NormalToolbar from './extensions/NormalToolbar';
import DropdownToolbar from './extensions/DropdownToolbar';
import MdCatalog from './extensions/MdCatalog';
import ModalToolbar from './extensions/ModalToolbar';
import { config } from './config';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            pageFullscreen: boolean;
            preview: boolean;
            htmlPreview: boolean;
            modelValue: string;
            theme: import("./type").Themes;
            class: string;
            historyLength: number;
            previewOnly: boolean;
            language: string;
            toolbars: import("./type").ToolbarNames[];
            toolbarsExclude: import("./type").ToolbarNames[];
            noPrettier: boolean;
            editorId: string;
            tabWidth: number;
            showCodeRowNumber: boolean;
            previewTheme: string;
            style: string | import("vue").CSSProperties;
            markedHeadingId: import("./type").MarkedHeadingId;
            tableShape: number[];
            noMermaid: boolean;
            sanitize: (html: string) => string;
            placeholder: string;
            noKatex: boolean;
            codeTheme: string;
            footers: import("./type").Footers[];
            scrollAuto: boolean;
            formatCopiedText: (text: string) => string;
            codeStyleReverse: boolean;
            codeStyleReverseList: string[];
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<string>;
                default: string;
            };
            theme: {
                type: import("vue").PropType<import("./type").Themes>;
                default: string;
            };
            class: {
                type: StringConstructor;
                default: string;
            };
            historyLength: {
                type: import("vue").PropType<number>;
                default: number;
            };
            onChange: {
                type: import("vue").PropType<import("./type").ChangeEvent>;
            };
            onSave: {
                type: import("vue").PropType<import("./type").SaveEvent>;
            };
            onUploadImg: {
                type: import("vue").PropType<import("./type").UploadImgEvent>;
            };
            pageFullscreen: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            preview: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            htmlPreview: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            previewOnly: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            language: {
                type: import("vue").PropType<string>;
                default: string;
            };
            toolbars: {
                type: import("vue").PropType<import("./type").ToolbarNames[]>;
                default: string[];
            };
            toolbarsExclude: {
                type: import("vue").PropType<import("./type").ToolbarNames[]>;
                default: never[];
            };
            noPrettier: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            onHtmlChanged: {
                type: import("vue").PropType<import("./type").HtmlChangedEvent>;
            };
            onGetCatalog: {
                type: import("vue").PropType<import("./type").GetCatalogEvent>;
            };
            editorId: {
                type: import("vue").PropType<string>;
                default: string;
            };
            tabWidth: {
                type: import("vue").PropType<number>;
                default: number;
            };
            showCodeRowNumber: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            previewTheme: {
                type: import("vue").PropType<string>;
                default: string;
            };
            style: {
                type: import("vue").PropType<string | import("vue").CSSProperties>;
                default: () => {};
            };
            markedHeadingId: {
                type: import("vue").PropType<import("./type").MarkedHeadingId>;
                default: import("./type").MarkedHeadingId;
            };
            tableShape: {
                type: import("vue").PropType<number[]>;
                default: () => number[];
            };
            noMermaid: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            sanitize: {
                type: import("vue").PropType<(html: string) => string>;
                default: (html: string) => string;
            };
            placeholder: {
                type: import("vue").PropType<string>;
                default: string;
            };
            noKatex: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            defToolbars: {
                type: import("vue").PropType<string | JSX.Element>;
            };
            onError: {
                type: import("vue").PropType<import("./type").ErrorEvent>;
            };
            codeTheme: {
                type: import("vue").PropType<string>;
                default: string;
            };
            footers: {
                type: import("vue").PropType<import("./type").Footers[]>;
                default: import("./type").Footers[];
            };
            scrollAuto: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            defFooters: {
                type: import("vue").PropType<string | JSX.Element>;
            };
            noIconfont: {
                type: import("vue").PropType<boolean>;
            };
            formatCopiedText: {
                type: import("vue").PropType<(text: string) => string>;
                default: (text: string) => string;
            };
            noUploadImg: {
                type: import("vue").PropType<boolean>;
            };
            codeStyleReverse: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            codeStyleReverseList: {
                type: import("vue").PropType<string[]>;
                default: string[];
            };
            autoFocus: {
                type: import("vue").PropType<boolean>;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            readOnly: {
                type: import("vue").PropType<boolean>;
            };
            maxLength: {
                type: import("vue").PropType<number>;
            };
            autoDetectCode: {
                type: import("vue").PropType<boolean>;
            };
            previewUrl: {
                type: import("vue").PropType<string>;
            };
            previewBearer: {
                type: import("vue").PropType<string>;
            };
        }>> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "pageFullscreen" | "preview" | "htmlPreview" | "modelValue" | "theme" | "class" | "historyLength" | "previewOnly" | "language" | "toolbars" | "toolbarsExclude" | "noPrettier" | "editorId" | "tabWidth" | "showCodeRowNumber" | "previewTheme" | "style" | "markedHeadingId" | "tableShape" | "noMermaid" | "sanitize" | "placeholder" | "noKatex" | "codeTheme" | "footers" | "scrollAuto" | "formatCopiedText" | "codeStyleReverse" | "codeStyleReverseList">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: ((event: string, ...args: any[]) => void) | ((event: string, ...args: any[]) => void);
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: import("vue").PropType<string>;
                default: string;
            };
            theme: {
                type: import("vue").PropType<import("./type").Themes>;
                default: string;
            };
            class: {
                type: StringConstructor;
                default: string;
            };
            historyLength: {
                type: import("vue").PropType<number>;
                default: number;
            };
            onChange: {
                type: import("vue").PropType<import("./type").ChangeEvent>;
            };
            onSave: {
                type: import("vue").PropType<import("./type").SaveEvent>;
            };
            onUploadImg: {
                type: import("vue").PropType<import("./type").UploadImgEvent>;
            };
            pageFullscreen: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            preview: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            htmlPreview: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            previewOnly: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            language: {
                type: import("vue").PropType<string>;
                default: string;
            };
            toolbars: {
                type: import("vue").PropType<import("./type").ToolbarNames[]>;
                default: string[];
            };
            toolbarsExclude: {
                type: import("vue").PropType<import("./type").ToolbarNames[]>;
                default: never[];
            };
            noPrettier: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            onHtmlChanged: {
                type: import("vue").PropType<import("./type").HtmlChangedEvent>;
            };
            onGetCatalog: {
                type: import("vue").PropType<import("./type").GetCatalogEvent>;
            };
            editorId: {
                type: import("vue").PropType<string>;
                default: string;
            };
            tabWidth: {
                type: import("vue").PropType<number>;
                default: number;
            };
            showCodeRowNumber: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            previewTheme: {
                type: import("vue").PropType<string>;
                default: string;
            };
            style: {
                type: import("vue").PropType<string | import("vue").CSSProperties>;
                default: () => {};
            };
            markedHeadingId: {
                type: import("vue").PropType<import("./type").MarkedHeadingId>;
                default: import("./type").MarkedHeadingId;
            };
            tableShape: {
                type: import("vue").PropType<number[]>;
                default: () => number[];
            };
            noMermaid: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            sanitize: {
                type: import("vue").PropType<(html: string) => string>;
                default: (html: string) => string;
            };
            placeholder: {
                type: import("vue").PropType<string>;
                default: string;
            };
            noKatex: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            defToolbars: {
                type: import("vue").PropType<string | JSX.Element>;
            };
            onError: {
                type: import("vue").PropType<import("./type").ErrorEvent>;
            };
            codeTheme: {
                type: import("vue").PropType<string>;
                default: string;
            };
            footers: {
                type: import("vue").PropType<import("./type").Footers[]>;
                default: import("./type").Footers[];
            };
            scrollAuto: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            defFooters: {
                type: import("vue").PropType<string | JSX.Element>;
            };
            noIconfont: {
                type: import("vue").PropType<boolean>;
            };
            formatCopiedText: {
                type: import("vue").PropType<(text: string) => string>;
                default: (text: string) => string;
            };
            noUploadImg: {
                type: import("vue").PropType<boolean>;
            };
            codeStyleReverse: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            codeStyleReverseList: {
                type: import("vue").PropType<string[]>;
                default: string[];
            };
            autoFocus: {
                type: import("vue").PropType<boolean>;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
            };
            readOnly: {
                type: import("vue").PropType<boolean>;
            };
            maxLength: {
                type: import("vue").PropType<number>;
            };
            autoDetectCode: {
                type: import("vue").PropType<boolean>;
            };
            previewUrl: {
                type: import("vue").PropType<string>;
            };
            previewBearer: {
                type: import("vue").PropType<string>;
            };
        }>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, {
            pageFullscreen: boolean;
            preview: boolean;
            htmlPreview: boolean;
            modelValue: string;
            theme: import("./type").Themes;
            class: string;
            historyLength: number;
            previewOnly: boolean;
            language: string;
            toolbars: import("./type").ToolbarNames[];
            toolbarsExclude: import("./type").ToolbarNames[];
            noPrettier: boolean;
            editorId: string;
            tabWidth: number;
            showCodeRowNumber: boolean;
            previewTheme: string;
            style: string | import("vue").CSSProperties;
            markedHeadingId: import("./type").MarkedHeadingId;
            tableShape: number[];
            noMermaid: boolean;
            sanitize: (html: string) => string;
            placeholder: string;
            noKatex: boolean;
            codeTheme: string;
            footers: import("./type").Footers[];
            scrollAuto: boolean;
            formatCopiedText: (text: string) => string;
            codeStyleReverse: boolean;
            codeStyleReverseList: string[];
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        modelValue: {
            type: import("vue").PropType<string>;
            default: string;
        };
        theme: {
            type: import("vue").PropType<import("./type").Themes>;
            default: string;
        };
        class: {
            type: StringConstructor;
            default: string;
        };
        historyLength: {
            type: import("vue").PropType<number>;
            default: number;
        };
        onChange: {
            type: import("vue").PropType<import("./type").ChangeEvent>;
        };
        onSave: {
            type: import("vue").PropType<import("./type").SaveEvent>;
        };
        onUploadImg: {
            type: import("vue").PropType<import("./type").UploadImgEvent>;
        };
        pageFullscreen: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        preview: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        htmlPreview: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        previewOnly: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        language: {
            type: import("vue").PropType<string>;
            default: string;
        };
        toolbars: {
            type: import("vue").PropType<import("./type").ToolbarNames[]>;
            default: string[];
        };
        toolbarsExclude: {
            type: import("vue").PropType<import("./type").ToolbarNames[]>;
            default: never[];
        };
        noPrettier: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        onHtmlChanged: {
            type: import("vue").PropType<import("./type").HtmlChangedEvent>;
        };
        onGetCatalog: {
            type: import("vue").PropType<import("./type").GetCatalogEvent>;
        };
        editorId: {
            type: import("vue").PropType<string>;
            default: string;
        };
        tabWidth: {
            type: import("vue").PropType<number>;
            default: number;
        };
        showCodeRowNumber: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        previewTheme: {
            type: import("vue").PropType<string>;
            default: string;
        };
        style: {
            type: import("vue").PropType<string | import("vue").CSSProperties>;
            default: () => {};
        };
        markedHeadingId: {
            type: import("vue").PropType<import("./type").MarkedHeadingId>;
            default: import("./type").MarkedHeadingId;
        };
        tableShape: {
            type: import("vue").PropType<number[]>;
            default: () => number[];
        };
        noMermaid: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        sanitize: {
            type: import("vue").PropType<(html: string) => string>;
            default: (html: string) => string;
        };
        placeholder: {
            type: import("vue").PropType<string>;
            default: string;
        };
        noKatex: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        defToolbars: {
            type: import("vue").PropType<string | JSX.Element>;
        };
        onError: {
            type: import("vue").PropType<import("./type").ErrorEvent>;
        };
        codeTheme: {
            type: import("vue").PropType<string>;
            default: string;
        };
        footers: {
            type: import("vue").PropType<import("./type").Footers[]>;
            default: import("./type").Footers[];
        };
        scrollAuto: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        defFooters: {
            type: import("vue").PropType<string | JSX.Element>;
        };
        noIconfont: {
            type: import("vue").PropType<boolean>;
        };
        formatCopiedText: {
            type: import("vue").PropType<(text: string) => string>;
            default: (text: string) => string;
        };
        noUploadImg: {
            type: import("vue").PropType<boolean>;
        };
        codeStyleReverse: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        codeStyleReverseList: {
            type: import("vue").PropType<string[]>;
            default: string[];
        };
        autoFocus: {
            type: import("vue").PropType<boolean>;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
        };
        readOnly: {
            type: import("vue").PropType<boolean>;
        };
        maxLength: {
            type: import("vue").PropType<number>;
        };
        autoDetectCode: {
            type: import("vue").PropType<boolean>;
        };
        previewUrl: {
            type: import("vue").PropType<string>;
        };
        previewBearer: {
            type: import("vue").PropType<string>;
        };
    }>> & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<string>;
        default: string;
    };
    theme: {
        type: import("vue").PropType<import("./type").Themes>;
        default: string;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    historyLength: {
        type: import("vue").PropType<number>;
        default: number;
    };
    onChange: {
        type: import("vue").PropType<import("./type").ChangeEvent>;
    };
    onSave: {
        type: import("vue").PropType<import("./type").SaveEvent>;
    };
    onUploadImg: {
        type: import("vue").PropType<import("./type").UploadImgEvent>;
    };
    pageFullscreen: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    preview: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    htmlPreview: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    previewOnly: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    language: {
        type: import("vue").PropType<string>;
        default: string;
    };
    toolbars: {
        type: import("vue").PropType<import("./type").ToolbarNames[]>;
        default: string[];
    };
    toolbarsExclude: {
        type: import("vue").PropType<import("./type").ToolbarNames[]>;
        default: never[];
    };
    noPrettier: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    onHtmlChanged: {
        type: import("vue").PropType<import("./type").HtmlChangedEvent>;
    };
    onGetCatalog: {
        type: import("vue").PropType<import("./type").GetCatalogEvent>;
    };
    editorId: {
        type: import("vue").PropType<string>;
        default: string;
    };
    tabWidth: {
        type: import("vue").PropType<number>;
        default: number;
    };
    showCodeRowNumber: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    previewTheme: {
        type: import("vue").PropType<string>;
        default: string;
    };
    style: {
        type: import("vue").PropType<string | import("vue").CSSProperties>;
        default: () => {};
    };
    markedHeadingId: {
        type: import("vue").PropType<import("./type").MarkedHeadingId>;
        default: import("./type").MarkedHeadingId;
    };
    tableShape: {
        type: import("vue").PropType<number[]>;
        default: () => number[];
    };
    noMermaid: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    sanitize: {
        type: import("vue").PropType<(html: string) => string>;
        default: (html: string) => string;
    };
    placeholder: {
        type: import("vue").PropType<string>;
        default: string;
    };
    noKatex: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    defToolbars: {
        type: import("vue").PropType<string | JSX.Element>;
    };
    onError: {
        type: import("vue").PropType<import("./type").ErrorEvent>;
    };
    codeTheme: {
        type: import("vue").PropType<string>;
        default: string;
    };
    footers: {
        type: import("vue").PropType<import("./type").Footers[]>;
        default: import("./type").Footers[];
    };
    scrollAuto: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    defFooters: {
        type: import("vue").PropType<string | JSX.Element>;
    };
    noIconfont: {
        type: import("vue").PropType<boolean>;
    };
    formatCopiedText: {
        type: import("vue").PropType<(text: string) => string>;
        default: (text: string) => string;
    };
    noUploadImg: {
        type: import("vue").PropType<boolean>;
    };
    codeStyleReverse: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    codeStyleReverseList: {
        type: import("vue").PropType<string[]>;
        default: string[];
    };
    autoFocus: {
        type: import("vue").PropType<boolean>;
    };
    disabled: {
        type: import("vue").PropType<boolean>;
    };
    readOnly: {
        type: import("vue").PropType<boolean>;
    };
    maxLength: {
        type: import("vue").PropType<number>;
    };
    autoDetectCode: {
        type: import("vue").PropType<boolean>;
    };
    previewUrl: {
        type: import("vue").PropType<string>;
    };
    previewBearer: {
        type: import("vue").PropType<string>;
    };
}>>, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, "onChange" | "onSave" | "onUploadImg" | "onHtmlChanged" | "onGetCatalog" | "onError" | "update:modelValue", {
    pageFullscreen: boolean;
    preview: boolean;
    htmlPreview: boolean;
    modelValue: string;
    theme: import("./type").Themes;
    class: string;
    historyLength: number;
    previewOnly: boolean;
    language: string;
    toolbars: import("./type").ToolbarNames[];
    toolbarsExclude: import("./type").ToolbarNames[];
    noPrettier: boolean;
    editorId: string;
    tabWidth: number;
    showCodeRowNumber: boolean;
    previewTheme: string;
    style: string | import("vue").CSSProperties;
    markedHeadingId: import("./type").MarkedHeadingId;
    tableShape: number[];
    noMermaid: boolean;
    sanitize: (html: string) => string;
    placeholder: string;
    noKatex: boolean;
    codeTheme: string;
    footers: import("./type").Footers[];
    scrollAuto: boolean;
    formatCopiedText: (text: string) => string;
    codeStyleReverse: boolean;
    codeStyleReverseList: string[];
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & {
    /**
     * 默认工具栏组件
     */
    readonly NormalToolbar: typeof NormalToolbar;
    /**
     * 下拉菜单工具栏组件
     */
    readonly DropdownToolbar: typeof DropdownToolbar;
    /**
     * 目录组件
     */
    readonly MdCatalog: typeof MdCatalog;
    /**
     * 弹窗工具栏组件
     */
    readonly ModalToolbar: typeof ModalToolbar;
    /**
     * 配置编辑器全局内容
     */
    readonly config: typeof config;
    install: (app: App) => App;
};
export default _default;
export * from './type';
