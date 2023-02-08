import { defineComponent, onBeforeUnmount, SetupContext, reactive } from 'vue';
import { prefix } from './config';
import {
  useKeyBoard,
  useProvide,
  useExpansion,
  useConfig,
  useCatalog,
  useExpose
} from './composition';
import ToolBar from './layouts/Toolbar';
import Content from './layouts/Content';
import Footer from './layouts/Footer';
import MdCatalog from './extensions/MdCatalog';
import bus from './utils/event-bus';

import { HeadList } from './type';
import { getSlot } from './utils/vue-tsx';

import { editorProps, EditorProps } from './props';

import './styles/index.less';
import './styles/alert.less';
import '@vavt/markdown-theme/css/all.css';

const Editor = defineComponent({
  name: 'MdEditorV3',
  props: editorProps(),
  emits: [
    'onChange',
    'onSave',
    'onUploadImg',
    'onHtmlChanged',
    'onGetCatalog',
    'onError',
    'update:modelValue'
  ],
  setup(props: EditorProps, context: SetupContext) {
    // ID不允许响应式（解构会失去响应式能力），这会扰乱eventbus
    const { editorId, previewOnly, noKatex, noMermaid, noPrettier, noUploadImg } = props;

    const state = reactive({
      scrollAuto: props.scrollAuto
    });

    // 快捷键监听
    useKeyBoard(props, context);
    // provide 部分prop
    useProvide(props);
    // 插入扩展的外链
    useExpansion(props);
    // 部分配置重构
    const [setting, updateSetting] = useConfig(props, context);
    // 目录状态
    const [catalogVisible, catalogShow] = useCatalog(props);
    // 卸载组件前清空全部事件监听
    onBeforeUnmount(() => {
      bus.clear(editorId);
    });

    useExpose(props, context, catalogVisible, setting, updateSetting);

    return () => {
      const defToolbars = getSlot({ props, ctx: context }, 'defToolbars');
      const defFooters = getSlot({ props, ctx: context }, 'defFooters');

      return (
        <div
          id={editorId}
          class={[
            prefix,
            props.class,
            props.theme === 'dark' && `${prefix}-dark`,
            setting.fullscreen || setting.pageFullscreen ? `${prefix}-fullscreen` : '',
            previewOnly && `${prefix}-previewOnly`
          ]}
          style={props.style}
        >
          {!previewOnly && (
            <ToolBar
              noPrettier={noPrettier}
              toolbars={props.toolbars}
              toolbarsExclude={props.toolbarsExclude}
              setting={setting}
              updateSetting={updateSetting}
              tableShape={props.tableShape}
              defToolbars={defToolbars}
              noUploadImg={noUploadImg}
            />
          )}
          <Content
            value={props.modelValue}
            onChange={(value: string) => {
              bus.emit(editorId, 'saveHistoryPos');

              if (props.onChange) {
                props.onChange(value);
              } else {
                context.emit('update:modelValue', value);
                context.emit('onChange', value);
              }
            }}
            setting={setting}
            onHtmlChanged={(html: string) => {
              if (props.onHtmlChanged) {
                props.onHtmlChanged(html);
              } else {
                context.emit('onHtmlChanged', html);
              }
            }}
            onGetCatalog={(list: HeadList[]) => {
              if (props.onGetCatalog) {
                props.onGetCatalog(list);
              } else {
                context.emit('onGetCatalog', list);
              }
            }}
            markedHeadingId={props.markedHeadingId}
            noMermaid={noMermaid}
            sanitize={props.sanitize}
            placeholder={props.placeholder}
            noKatex={noKatex}
            scrollAuto={state.scrollAuto}
            formatCopiedText={props.formatCopiedText}
            autofocus={props.autoFocus}
            disabled={props.disabled}
            readonly={props.readOnly}
            maxlength={props.maxLength}
            autoDetectCode={props.autoDetectCode}
            previewUrl={props.previewUrl}
            previewBearer={props.previewBearer}
          />
          {!previewOnly && props.footers?.length > 0 && (
            <Footer
              modelValue={props.modelValue}
              footers={props.footers}
              defFooters={defFooters}
              scrollAuto={state.scrollAuto}
              onScrollAutoChange={(v) => (state.scrollAuto = v)}
            />
          )}
          {catalogShow.value && !previewOnly && (
            <MdCatalog
              theme={props.theme}
              style={{
                display: catalogVisible.value ? 'block' : 'none'
              }}
              class={`${prefix}-catalog-editor`}
              editorId={editorId}
              markedHeadingId={props.markedHeadingId}
            />
          )}
        </div>
      );
    };
  }
});

export default Editor;
