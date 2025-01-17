var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { reactive, watch, onMounted, onBeforeUnmount, provide, computed, ref, defineComponent, createVNode, cloneVNode, nextTick, inject, Fragment, toRef, mergeProps, isVNode } from "vue";
const prefix = "md-editor";
const defaultEditorId = "md-editor-zabiri";
const iconfontUrl = "https://at.alicdn.com/t/c/font_2605852_gymddm8qwtd.js";
const cdnBase = "https://cdnjs.cloudflare.com/ajax/libs";
const highlightUrl = `${cdnBase}/highlight.js/11.7.0/highlight.min.js`;
const prettierUrl = {
  main: `${cdnBase}/prettier/2.8.0/standalone.js`,
  markdown: `${cdnBase}/prettier/2.8.0/parser-markdown.js`
};
const cropperUrl = {
  css: `${cdnBase}/cropperjs/1.5.13/cropper.min.css`,
  js: `${cdnBase}/cropperjs/1.5.13/cropper.min.js`
};
const screenfullUrl = `${cdnBase}/screenfull.js/5.2.0/screenfull.min.js`;
const allToolbar = [
  "bold",
  "underline",
  "italic",
  "strikeThrough",
  "-",
  "title",
  "sub",
  "sup",
  "quote",
  "unorderedList",
  "orderedList",
  "task",
  "-",
  "codeRow",
  "code",
  "link",
  "image",
  "table",
  "mermaid",
  "katex",
  "-",
  "revoke",
  "next",
  "save",
  "=",
  "prettier",
  "pageFullscreen",
  "fullscreen",
  "preview",
  "htmlPreview",
  "catalog",
  "github"
];
const allFooter = ["markdownTotal", "=", "scrollSwitch"];
const staticTextDefault = {
  "zh-CN": {
    toolbarTips: {
      bold: "\u52A0\u7C97",
      underline: "\u4E0B\u5212\u7EBF",
      italic: "\u659C\u4F53",
      strikeThrough: "\u5220\u9664\u7EBF",
      title: "\u6807\u9898",
      sub: "\u4E0B\u6807",
      sup: "\u4E0A\u6807",
      quote: "\u5F15\u7528",
      unorderedList: "\u65E0\u5E8F\u5217\u8868",
      orderedList: "\u6709\u5E8F\u5217\u8868",
      task: "\u4EFB\u52A1\u5217\u8868",
      codeRow: "\u884C\u5185\u4EE3\u7801",
      code: "\u5757\u7EA7\u4EE3\u7801",
      link: "\u94FE\u63A5",
      image: "\u56FE\u7247",
      table: "\u8868\u683C",
      mermaid: "mermaid\u56FE",
      katex: "katex\u516C\u5F0F",
      revoke: "\u540E\u9000",
      next: "\u524D\u8FDB",
      save: "\u4FDD\u5B58",
      prettier: "\u7F8E\u5316",
      pageFullscreen: "\u6D4F\u89C8\u5668\u5168\u5C4F",
      fullscreen: "\u5C4F\u5E55\u5168\u5C4F",
      preview: "\u9884\u89C8",
      htmlPreview: "html\u4EE3\u7801\u9884\u89C8",
      catalog: "\u76EE\u5F55",
      github: "\u6E90\u7801\u5730\u5740"
    },
    titleItem: {
      h1: "\u4E00\u7EA7\u6807\u9898",
      h2: "\u4E8C\u7EA7\u6807\u9898",
      h3: "\u4E09\u7EA7\u6807\u9898",
      h4: "\u56DB\u7EA7\u6807\u9898",
      h5: "\u4E94\u7EA7\u6807\u9898",
      h6: "\u516D\u7EA7\u6807\u9898"
    },
    imgTitleItem: {
      link: "\u6DFB\u52A0\u94FE\u63A5",
      upload: "\u4E0A\u4F20\u56FE\u7247",
      clip2upload: "\u88C1\u526A\u4E0A\u4F20"
    },
    linkModalTips: {
      linkTitle: "\u6DFB\u52A0\u94FE\u63A5",
      imageTitle: "\u6DFB\u52A0\u56FE\u7247",
      descLabel: "\u94FE\u63A5\u63CF\u8FF0\uFF1A",
      descLabelPlaceHolder: "\u8BF7\u8F93\u5165\u63CF\u8FF0...",
      urlLabel: "\u94FE\u63A5\u5730\u5740\uFF1A",
      urlLabelPlaceHolder: "\u8BF7\u8F93\u5165\u94FE\u63A5...",
      buttonOK: "\u786E\u5B9A"
    },
    clipModalTips: {
      title: "\u88C1\u526A\u56FE\u7247\u4E0A\u4F20",
      buttonUpload: "\u4E0A\u4F20"
    },
    copyCode: {
      text: "\u590D\u5236\u4EE3\u7801",
      successTips: "\u5DF2\u590D\u5236\uFF01",
      failTips: "\u590D\u5236\u5931\u8D25\uFF01"
    },
    mermaid: {
      flow: "\u6D41\u7A0B\u56FE",
      sequence: "\u65F6\u5E8F\u56FE",
      gantt: "\u7518\u7279\u56FE",
      class: "\u7C7B\u56FE",
      state: "\u72B6\u6001\u56FE",
      pie: "\u997C\u56FE",
      relationship: "\u5173\u7CFB\u56FE",
      journey: "\u65C5\u7A0B\u56FE"
    },
    katex: {
      inline: "\u884C\u5185\u516C\u5F0F",
      block: "\u5757\u7EA7\u516C\u5F0F"
    },
    footer: {
      markdownTotal: "\u5B57\u6570",
      scrollAuto: "\u540C\u6B65\u6EDA\u52A8"
    }
  },
  "en-US": {
    toolbarTips: {
      bold: "bold",
      underline: "underline",
      italic: "italic",
      strikeThrough: "strikeThrough",
      title: "title",
      sub: "subscript",
      sup: "superscript",
      quote: "quote",
      unorderedList: "unordered list",
      orderedList: "ordered list",
      task: "task list",
      codeRow: "inline code",
      code: "block-level code",
      link: "link",
      image: "image",
      table: "table",
      mermaid: "mermaid",
      katex: "formula",
      revoke: "revoke",
      next: "undo revoke",
      save: "save",
      prettier: "prettier",
      pageFullscreen: "fullscreen in page",
      fullscreen: "fullscreen",
      preview: "preview",
      htmlPreview: "html preview",
      catalog: "catalog",
      github: "source code"
    },
    titleItem: {
      h1: "Lv1 Heading",
      h2: "Lv2 Heading",
      h3: "Lv3 Heading",
      h4: "Lv4 Heading",
      h5: "Lv5 Heading",
      h6: "Lv6 Heading"
    },
    imgTitleItem: {
      link: "Add Img Link",
      upload: "Upload Img",
      clip2upload: "Clip Upload"
    },
    linkModalTips: {
      linkTitle: "Add Link",
      imageTitle: "Add Image",
      descLabel: "Desc:",
      descLabelPlaceHolder: "Enter a description...",
      urlLabel: "Link:",
      urlLabelPlaceHolder: "Enter a link...",
      buttonOK: "OK"
    },
    clipModalTips: {
      title: "Crop Image",
      buttonUpload: "Upload"
    },
    copyCode: {
      text: "Copy",
      successTips: "Copied!",
      failTips: "Copy failed!"
    },
    mermaid: {
      flow: "flow",
      sequence: "sequence",
      gantt: "gantt",
      class: "class",
      state: "state",
      pie: "pie",
      relationship: "relationship",
      journey: "journey"
    },
    katex: {
      inline: "inline",
      block: "block"
    },
    footer: {
      markdownTotal: "Word Count",
      scrollAuto: "Scroll Auto"
    }
  }
};
const mermaidUrl = `${cdnBase}/mermaid/9.3.0/mermaid.min.js`;
const codeCss = {
  a11y: {
    light: `${cdnBase}/highlight.js/11.7.0/styles/a11y-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.7.0/styles/a11y-dark.min.css`
  },
  atom: {
    light: `${cdnBase}/highlight.js/11.7.0/styles/atom-one-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.7.0/styles/atom-one-dark.min.css`
  },
  github: {
    light: `${cdnBase}/highlight.js/11.7.0/styles/github.min.css`,
    dark: `${cdnBase}/highlight.js/11.7.0/styles/github-dark.min.css`
  },
  gradient: {
    light: `${cdnBase}/highlight.js/11.7.0/styles/gradient-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.7.0/styles/gradient-dark.min.css`
  },
  kimbie: {
    light: `${cdnBase}/highlight.js/11.7.0/styles/kimbie-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.7.0/styles/kimbie-dark.min.css`
  },
  paraiso: {
    light: `${cdnBase}/highlight.js/11.7.0/styles/paraiso-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.7.0/styles/paraiso-dark.min.css`
  },
  qtcreator: {
    light: `${cdnBase}/highlight.js/11.7.0/styles/qtcreator-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.7.0/styles/qtcreator-dark.min.css`
  },
  stackoverflow: {
    light: `${cdnBase}/highlight.js/11.7.0/styles/stackoverflow-light.min.css`,
    dark: `${cdnBase}/highlight.js/11.7.0/styles/stackoverflow-dark.min.css`
  }
};
const configOption = {
  markedRenderer: (r) => r,
  markedExtensions: [],
  markedOptions: {},
  editorExtensions: {},
  editorConfig: {}
};
const config = (option) => {
  if (option) {
    for (const key in option) {
      const optionItem = option[key];
      if (optionItem) {
        configOption[key] = optionItem;
      }
    }
  }
};
class Bus {
  constructor() {
    this.pools = {};
  }
  remove(race, name, func) {
    const targetRace = this.pools[race];
    const events = targetRace && this.pools[race][name];
    if (events) {
      this.pools[race][name] = events.filter((item) => item !== func);
    }
  }
  clear(race) {
    this.pools[race] = {};
  }
  on(race, event) {
    if (!this.pools[race]) {
      this.pools[race] = {};
    }
    if (!this.pools[race][event.name]) {
      this.pools[race][event.name] = [];
    }
    this.pools[race][event.name].push(event.callback);
    return this.pools[race][event.name].includes(event.callback);
  }
  emit(race, name, ...params) {
    if (!this.pools[race]) {
      this.pools[race] = {};
    }
    const targetRace = this.pools[race];
    const events = targetRace[name];
    if (events) {
      events.forEach((item) => {
        try {
          item(...params);
        } catch (error) {
          console.error(`${name} monitor event exception\uFF01`, error);
        }
      });
    }
  }
}
var bus = new Bus();
const setPosition = (tarDom, startPos = 0, endPos = startPos) => {
  return new Promise((resolve, reject) => {
    if (tarDom.setSelectionRange) {
      setTimeout(() => {
        tarDom.setSelectionRange(startPos, endPos);
        tarDom.focus();
        resolve(true);
      }, 0);
    } else {
      console.error("Can not reset position!");
      reject();
    }
  });
};
const insert = (dom, tarValue, params) => {
  const { deviationStart = 0, deviationEnd = 0, direct = false, select = false } = params;
  let res = "";
  if (dom.selectionStart || dom.selectionStart === 0) {
    const startPos = dom.selectionStart;
    const endPos = dom.selectionEnd || 0;
    const {
      prefixVal = dom.value.substring(0, startPos),
      subfixVal = dom.value.substring(endPos, dom.value.length)
    } = params;
    res = prefixVal + tarValue + subfixVal;
    setPosition(dom, select ? startPos + deviationStart : startPos + tarValue.length + deviationEnd, startPos + tarValue.length + deviationEnd);
  } else {
    res += tarValue;
  }
  if (direct) {
    dom.value = res;
  }
  return res;
};
const goto = (url, option = {
  newWindow: true,
  nofollow: true
}) => {
  if (!url) {
    console.error("error link!");
  }
  const aEle = document.createElement("a");
  aEle.href = url;
  aEle.style.display = "none";
  if (option.newWindow) {
    aEle.target = "_blank";
  }
  if (option.nofollow) {
    aEle.rel = "noopener noreferrer";
  }
  document.body.appendChild(aEle);
  aEle.click();
  document.body.removeChild(aEle);
};
const scrollAuto = (pEle, cEle) => {
  const addEvent = debounce(() => {
    pEle.removeEventListener("scroll", scrollHandler);
    pEle.addEventListener("scroll", scrollHandler);
    cEle.removeEventListener("scroll", scrollHandler);
    cEle.addEventListener("scroll", scrollHandler);
  }, 50);
  const scrollHandler = (e) => {
    const pHeight = pEle.clientHeight;
    const cHeight = cEle.clientHeight;
    const pScrollHeight = pEle.scrollHeight;
    const cScrollHeight = cEle.scrollHeight;
    const scale = (pScrollHeight - pHeight) / (cScrollHeight - cHeight);
    if (e.target === pEle) {
      cEle.removeEventListener("scroll", scrollHandler);
      cEle.scrollTo({
        top: pEle.scrollTop / scale
      });
      addEvent();
    } else {
      pEle.removeEventListener("scroll", scrollHandler);
      pEle.scrollTo({
        top: cEle.scrollTop * scale
      });
      addEvent();
    }
  };
  return [
    addEvent,
    () => {
      pEle.removeEventListener("scroll", scrollHandler);
      cEle.removeEventListener("scroll", scrollHandler);
    }
  ];
};
const base642File = (base64, fileName = "image.png") => {
  const arr = base64.split(",");
  const regResult = arr[0].match(/:(.*?);/);
  if (regResult) {
    const mime = regResult[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], fileName, { type: mime });
  }
  return null;
};
const debounce = (fn, ms = 200) => {
  let timer = 0;
  return (...params) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = window.setTimeout(() => {
      fn.apply(globalThis, params);
      timer = 0;
    }, ms);
  };
};
const throttle = (fn, ms = 200) => {
  let start = 0;
  let _params = null;
  return (...params) => {
    const handler = (timeStamp) => {
      if (start === 0) {
        start = timeStamp;
      }
      if (timeStamp - start >= ms) {
        fn.apply(globalThis, _params);
        _params = null;
        start = 0;
      } else {
        window.requestAnimationFrame(handler);
      }
    };
    if (_params === null) {
      window.requestAnimationFrame(handler);
    }
    _params = params;
  };
};
const getSelectionText = (textarea) => {
  var _a;
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf("Firefox") > -1) {
    return textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
  }
  return ((_a = window.getSelection()) == null ? void 0 : _a.toString()) || "";
};
const getRelativeTop = (element, container) => {
  const eleRect = element == null ? void 0 : element.getBoundingClientRect();
  if (container === document.documentElement) {
    return eleRect.top - container.clientTop;
  }
  const conRect = container == null ? void 0 : container.getBoundingClientRect();
  return eleRect.top - conRect.top;
};
const omit = (obj, keys) => {
  const omitObj = __spreadValues({}, obj);
  keys.forEach((k) => {
    Reflect.deleteProperty(omitObj, k);
  });
  return omitObj;
};
const keyMove = (trigger, moveHandler) => {
  const triggerMouseDown = (mdown) => {
    const parent = trigger.parentElement || document.body;
    const width = parent.offsetWidth;
    const height = parent.offsetHeight;
    const { clientWidth } = document.documentElement;
    const { clientHeight } = document.documentElement;
    const x = mdown.offsetX;
    const y = mdown.offsetY;
    const mouseMoveHandler = (e) => {
      let tx = e.x + document.body.scrollLeft - document.body.clientLeft - x;
      let ty = e.y + document.body.scrollTop - document.body.clientTop - y;
      tx = tx < 1 ? 1 : tx < clientWidth - width - 1 ? tx : clientWidth - width - 1;
      ty = ty < 1 ? 1 : ty < clientHeight - height - 1 ? ty : clientHeight - height - 1;
      if (moveHandler) {
        moveHandler(tx, ty);
      } else {
        parent.style.left = `${tx}px`;
        parent.style.top = `${ty}px`;
      }
    };
    document.addEventListener("mousemove", mouseMoveHandler);
    const mouseUpHandler = () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    };
    document.addEventListener("mouseup", mouseUpHandler);
  };
  trigger.addEventListener("mousedown", triggerMouseDown);
  return () => {
    trigger.removeEventListener("mousedown", triggerMouseDown);
  };
};
const appendHandler = (ele, checkKey = "") => {
  const insertedEle = document.getElementById(ele.id);
  if (!insertedEle) {
    document.head.appendChild(ele);
  } else if (checkKey !== "" && ele.onload instanceof Function) {
    if (Reflect.get(window, checkKey)) {
      ele.onload(new Event("load"));
    } else {
      insertedEle.addEventListener("load", ele.onload);
    }
  }
};
const ON_SAVE = "onSave";
const CHANGE_CATALOG_VISIBLE = "changeCatalogVisible";
const CHANGE_FULL_SCREEN = "changeFullscreen";
const PAGE_FULL_SCREEN_CHANGED = "pageFullscreenChanged";
const FULL_SCREEN_CHANGED = "fullscreenChanged";
const PREVIEW_CHANGED = "previewChanged";
const HTML_PREVIEW_CHANGED = "htmlPreviewChanged";
const CATALOG_VISIBLE_CHANGED = "catalogVisibleChanged";
const TEXTAREA_FOCUS = "textarea_focus";
const useKeyBoard = (props, context) => {
  const { editorId, noPrettier, previewOnly } = props;
  const state = reactive({
    buildFinished: false,
    html: ""
  });
  const keyDownHandler = (event) => {
    if (event.target !== document.querySelector(`#${props.editorId}-textarea`)) {
      return;
    }
    bus.emit(editorId, "selectTextChange");
    if (event.ctrlKey || event.metaKey) {
      switch (event.code) {
        case "KeyS": {
          if (event.shiftKey) {
            bus.emit(editorId, "replace", "strikeThrough");
          } else {
            bus.emit(editorId, ON_SAVE, props.modelValue);
            event.preventDefault();
          }
          break;
        }
        case "KeyB": {
          bus.emit(editorId, "replace", "bold");
          event.preventDefault();
          break;
        }
        case "KeyU": {
          if (event.shiftKey) {
            bus.emit(editorId, "replace", "unorderedList");
            event.preventDefault();
          } else {
            bus.emit(editorId, "replace", "underline");
            event.preventDefault();
          }
          break;
        }
        case "KeyI": {
          if (event.shiftKey) {
            bus.emit(editorId, "openModals", "image");
            event.preventDefault();
          } else {
            bus.emit(editorId, "replace", "italic");
            event.preventDefault();
          }
          break;
        }
        case "Digit1": {
          bus.emit(editorId, "replace", "h1");
          event.preventDefault();
          break;
        }
        case "Digit2": {
          bus.emit(editorId, "replace", "h2");
          event.preventDefault();
          break;
        }
        case "Digit3": {
          bus.emit(editorId, "replace", "h3");
          event.preventDefault();
          break;
        }
        case "Digit4": {
          bus.emit(editorId, "replace", "h4");
          event.preventDefault();
          break;
        }
        case "Digit5": {
          bus.emit(editorId, "replace", "h5");
          event.preventDefault();
          break;
        }
        case "Digit6": {
          bus.emit(editorId, "replace", "h6");
          event.preventDefault();
          break;
        }
        case "ArrowUp": {
          bus.emit(editorId, "replace", "sup");
          event.preventDefault();
          break;
        }
        case "ArrowDown": {
          bus.emit(editorId, "replace", "sub");
          event.preventDefault();
          break;
        }
        case "KeyQ": {
          if (event.key === "a") {
            event.target.select();
            return;
          }
          bus.emit(editorId, "replace", "quote");
          event.preventDefault();
          break;
        }
        case "KeyA": {
          if (event.key === "q") {
            bus.emit(editorId, "replace", "quote");
            event.preventDefault();
            break;
          } else {
            return;
          }
        }
        case "KeyO": {
          bus.emit(editorId, "replace", "orderedList");
          event.preventDefault();
          break;
        }
        case "KeyC": {
          if (event.shiftKey) {
            bus.emit(editorId, "replace", "code");
            event.preventDefault();
          } else if (event.altKey) {
            bus.emit(editorId, "replace", "codeRow");
            event.preventDefault();
          } else {
            event.preventDefault();
            bus.emit(editorId, "replace", "ctrlC");
            break;
          }
          break;
        }
        case "KeyL": {
          bus.emit(editorId, "openModals", "link");
          event.preventDefault();
          break;
        }
        case "KeyZ": {
          if (event.key === "w") {
            return;
          }
          if (event.shiftKey) {
            bus.emit(editorId, "ctrlShiftZ");
            event.preventDefault();
          } else {
            bus.emit(editorId, "ctrlZ");
            event.preventDefault();
          }
          break;
        }
        case "KeyW": {
          if (event.key === "z") {
            if (event.shiftKey) {
              bus.emit(editorId, "ctrlShiftZ");
              event.preventDefault();
            } else {
              bus.emit(editorId, "ctrlZ");
              event.preventDefault();
            }
            break;
          } else {
            return;
          }
        }
        case "KeyF": {
          if (event.shiftKey) {
            if (!noPrettier) {
              bus.emit(editorId, "replace", "prettier");
              event.preventDefault();
            }
          }
          break;
        }
        case "KeyT": {
          if (event.altKey && event.shiftKey) {
            bus.emit(editorId, "replace", "table");
            event.preventDefault();
          }
          break;
        }
        case "KeyX": {
          bus.emit(editorId, "replace", "ctrlX");
          event.preventDefault();
          break;
        }
        case "KeyD": {
          event.preventDefault();
          bus.emit(editorId, "replace", "ctrlD");
          break;
        }
      }
    } else if (event.code === "Tab") {
      event.preventDefault();
      if (event.shiftKey) {
        bus.emit(editorId, "replace", "shiftTab");
      } else {
        bus.emit(editorId, "replace", "tab");
      }
    }
  };
  watch(() => props.modelValue, () => {
    state.buildFinished = false;
  });
  onMounted(() => {
    if (!previewOnly) {
      window.addEventListener("keydown", keyDownHandler);
      bus.on(editorId, {
        name: "buildFinished",
        callback(html) {
          state.buildFinished = true;
          state.html = html;
        }
      });
      bus.on(editorId, {
        name: ON_SAVE,
        callback() {
          const htmlPromise = new Promise((rev) => {
            if (state.buildFinished) {
              rev(state.html);
            } else {
              const buildFinishedCallback = (html) => {
                rev(html);
                bus.remove(editorId, "buildFinished", buildFinishedCallback);
              };
              bus.on(editorId, {
                name: "buildFinished",
                callback: buildFinishedCallback
              });
            }
          });
          if (props.onSave) {
            props.onSave(props.modelValue, htmlPromise);
          } else {
            context.emit("onSave", props.modelValue, htmlPromise);
          }
        }
      });
    }
  });
  onBeforeUnmount(() => {
    if (!previewOnly) {
      window.removeEventListener("keydown", keyDownHandler);
    }
  });
};
const useProvide = (props) => {
  var _a;
  const { editorId, previewOnly } = props;
  const highlightConfig = (_a = configOption == null ? void 0 : configOption.editorExtensions) == null ? void 0 : _a.highlight;
  provide("editorId", editorId);
  provide("tabWidth", props.tabWidth);
  provide("theme", computed(() => props.theme));
  provide("highlight", computed(() => {
    const cssList = __spreadValues(__spreadValues({}, codeCss), highlightConfig == null ? void 0 : highlightConfig.css);
    const theme = props.codeStyleReverse && props.codeStyleReverseList.includes(props.previewTheme) ? "dark" : props.theme;
    return {
      js: (highlightConfig == null ? void 0 : highlightConfig.js) || highlightUrl,
      css: cssList[props.codeTheme] ? cssList[props.codeTheme][theme] : codeCss.atom[theme]
    };
  }));
  provide("historyLength", props.historyLength);
  provide("previewOnly", previewOnly);
  provide("showCodeRowNumber", props.showCodeRowNumber);
  const usedLanguageText = computed(() => {
    var _a2;
    const allText = __spreadValues(__spreadValues({}, staticTextDefault), (_a2 = configOption == null ? void 0 : configOption.editorConfig) == null ? void 0 : _a2.languageUserDefined);
    if (allText[props.language]) {
      return allText[props.language];
    } else {
      return staticTextDefault["zh-CN"];
    }
  });
  provide("usedLanguageText", usedLanguageText);
  provide("previewTheme", computed(() => props.previewTheme));
};
const useExpansion = (props) => {
  var _a, _b, _c, _d, _e, _f;
  const { noPrettier, previewOnly, noIconfont, noUploadImg } = props;
  const { editorExtensions } = configOption;
  const noPrettierScript = noPrettier || !!((_b = (_a = configOption.editorExtensions) == null ? void 0 : _a.prettier) == null ? void 0 : _b.prettierInstance);
  const noParserMarkdownScript = noPrettier || !!((_d = (_c = configOption.editorExtensions) == null ? void 0 : _c.prettier) == null ? void 0 : _d.parserMarkdownInstance);
  const noCropperScript = noUploadImg || !!((_f = (_e = configOption.editorExtensions) == null ? void 0 : _e.cropper) == null ? void 0 : _f.instance);
  onMounted(() => {
    var _a2, _b2, _c2, _d2;
    const iconfontScript = document.createElement("script");
    iconfontScript.src = (editorExtensions == null ? void 0 : editorExtensions.iconfont) || iconfontUrl;
    iconfontScript.id = `${prefix}-icon`;
    const prettierScript = document.createElement("script");
    const prettierMDScript = document.createElement("script");
    prettierScript.src = ((_a2 = editorExtensions == null ? void 0 : editorExtensions.prettier) == null ? void 0 : _a2.standaloneJs) || prettierUrl.main;
    prettierScript.id = `${prefix}-prettier`;
    prettierMDScript.src = ((_b2 = editorExtensions == null ? void 0 : editorExtensions.prettier) == null ? void 0 : _b2.parserMarkdownJs) || prettierUrl.markdown;
    prettierMDScript.id = `${prefix}-prettierMD`;
    const cropperLink = document.createElement("link");
    cropperLink.rel = "stylesheet";
    cropperLink.href = ((_c2 = editorExtensions == null ? void 0 : editorExtensions.cropper) == null ? void 0 : _c2.css) || cropperUrl.css;
    cropperLink.id = `${prefix}-cropperCss`;
    const cropperScript = document.createElement("script");
    cropperScript.src = ((_d2 = editorExtensions == null ? void 0 : editorExtensions.cropper) == null ? void 0 : _d2.js) || cropperUrl.js;
    cropperScript.id = `${prefix}-cropper`;
    if (!previewOnly) {
      if (!noIconfont) {
        appendHandler(iconfontScript);
      }
      if (!noCropperScript) {
        appendHandler(cropperLink);
        appendHandler(cropperScript);
      }
      if (!noPrettierScript) {
        appendHandler(prettierScript);
      }
      if (!noParserMarkdownScript) {
        appendHandler(prettierMDScript);
      }
    }
  });
};
const useConfig = (props, context) => {
  const { editorId, previewOnly } = props;
  const setting = reactive({
    pageFullscreen: props.pageFullscreen,
    fullscreen: false,
    preview: props.preview,
    htmlPreview: props.preview ? false : props.htmlPreview
  });
  const updateSetting = (k, v) => {
    setting[k] = v === void 0 ? !setting[k] : v;
    if (k === "preview" && setting.preview) {
      setting.htmlPreview = false;
    } else if (k === "htmlPreview" && setting.htmlPreview) {
      setting.preview = false;
    }
  };
  let bodyOverflowHistory = "";
  const adjustBody = () => {
    if (setting.pageFullscreen || setting.fullscreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = bodyOverflowHistory;
    }
  };
  watch(() => [setting.pageFullscreen, setting.fullscreen], adjustBody);
  onMounted(() => {
    if (!previewOnly) {
      bus.on(editorId, {
        name: "uploadImage",
        callback(files, cb) {
          const insertHanlder = (urls) => {
            bus.emit(editorId, "replace", "image", {
              desc: "",
              urls
            });
            cb && cb();
          };
          if (props.onUploadImg) {
            props.onUploadImg(files, insertHanlder);
          } else {
            context.emit("onUploadImg", files, insertHanlder);
          }
        }
      });
    }
    bodyOverflowHistory = document.body.style.overflow;
    adjustBody();
  });
  return [setting, updateSetting];
};
const useCatalog = (props) => {
  const { editorId } = props;
  const catalogVisible = ref(false);
  onMounted(() => {
    bus.on(editorId, {
      name: CHANGE_CATALOG_VISIBLE,
      callback: (v) => {
        if (v === void 0) {
          catalogVisible.value = !catalogVisible.value;
        } else {
          catalogVisible.value = v;
        }
      }
    });
  });
  const catalogShow = computed(() => {
    return !props.toolbarsExclude.includes("catalog") && props.toolbars.includes("catalog");
  });
  return [catalogVisible, catalogShow];
};
const useExpose = (props, ctx, catalogVisible, setting, updateSetting) => {
  const { editorId } = props;
  watch(() => setting.pageFullscreen, (newVal) => {
    bus.emit(editorId, PAGE_FULL_SCREEN_CHANGED, newVal);
  });
  watch(() => setting.fullscreen, (newVal) => {
    bus.emit(editorId, FULL_SCREEN_CHANGED, newVal);
  });
  watch(() => setting.preview, (newVal) => {
    bus.emit(editorId, PREVIEW_CHANGED, newVal);
  });
  watch(() => setting.htmlPreview, (newVal) => {
    bus.emit(editorId, HTML_PREVIEW_CHANGED, newVal);
  });
  watch(catalogVisible, (newVal) => {
    bus.emit(editorId, CATALOG_VISIBLE_CHANGED, newVal);
  });
  const exposeParam = {
    on(eventName, callBack) {
      switch (eventName) {
        case "pageFullscreen": {
          bus.on(editorId, {
            name: PAGE_FULL_SCREEN_CHANGED,
            callback(status) {
              callBack(status);
            }
          });
          break;
        }
        case "fullscreen": {
          bus.on(editorId, {
            name: FULL_SCREEN_CHANGED,
            callback(status) {
              callBack(status);
            }
          });
          break;
        }
        case "preview": {
          bus.on(editorId, {
            name: PREVIEW_CHANGED,
            callback(status) {
              callBack(status);
            }
          });
          break;
        }
        case "htmlPreview": {
          bus.on(editorId, {
            name: HTML_PREVIEW_CHANGED,
            callback(status) {
              callBack(status);
            }
          });
          break;
        }
        case "catalog": {
          bus.on(editorId, {
            name: CATALOG_VISIBLE_CHANGED,
            callback(status) {
              callBack(status);
            }
          });
          break;
        }
      }
    },
    togglePageFullscreen(status) {
      updateSetting("pageFullscreen", status);
    },
    toggleFullscreen(status) {
      bus.emit(editorId, CHANGE_FULL_SCREEN, status);
    },
    togglePreview(status) {
      updateSetting("preview", status);
    },
    toggleHtmlPreview(status) {
      updateSetting("htmlPreview", status);
    },
    toggleCatalog(status) {
      bus.emit(editorId, CHANGE_CATALOG_VISIBLE, status);
    },
    triggerSave() {
      bus.emit(editorId, ON_SAVE);
    },
    insert(generate) {
      bus.emit(editorId, "replace", "universal", { generate });
    },
    focus() {
      bus.emit(editorId, TEXTAREA_FOCUS);
    }
  };
  ctx.expose(exposeParam);
};
var index$1 = "";
var Divider = defineComponent({
  setup() {
    return () => createVNode("div", {
      "class": `${prefix}-divider`
    }, null);
  }
});
const getSlot = ({
  instance,
  ctx,
  props = {}
}, name = "default") => {
  const targetSlot = (instance == null ? void 0 : instance.$slots[name]) || (ctx == null ? void 0 : ctx.slots[name]);
  return (targetSlot ? targetSlot(instance) : "") || props[name];
};
var style$4 = "";
const dropdownToolbarProps$1 = () => ({
  trigger: {
    type: String,
    default: "hover"
  },
  overlay: {
    type: [String, Object],
    default: ""
  },
  visible: {
    type: Boolean,
    default: false
  },
  onChange: {
    type: Function,
    default: () => {
    }
  },
  relative: {
    type: String,
    default: "html"
  }
});
var Dropdown = defineComponent({
  props: dropdownToolbarProps$1(),
  setup(props, ctx) {
    const HIDDEN_CLASS = `${prefix}-dropdown-hidden`;
    const ctl = reactive({
      overlayClass: [HIDDEN_CLASS],
      overlayStyle: {},
      triggerHover: false,
      overlayHover: false
    });
    const triggerRef = ref();
    const overlayRef = ref();
    const triggerHandler = () => {
      var _a;
      if (props.trigger === "hover") {
        ctl.triggerHover = true;
      }
      const triggerEle = triggerRef.value;
      const overlayEle = overlayRef.value;
      const triggerInfo = triggerEle.getBoundingClientRect();
      const triggerTop = triggerEle.offsetTop;
      const triggerLeft = triggerEle.offsetLeft;
      const triggerHeight = triggerInfo.height;
      const triggerWidth = triggerInfo.width;
      const relativecrollLeft = ((_a = document.querySelector(props.relative)) == null ? void 0 : _a.scrollLeft) || 0;
      ctl.overlayStyle = __spreadProps(__spreadValues({}, ctl.overlayStyle), {
        top: triggerTop + triggerHeight + "px",
        left: triggerLeft - overlayEle.offsetWidth / 2 + triggerWidth / 2 - relativecrollLeft + "px"
      });
      props.onChange(true);
    };
    const overlayHandler = () => {
      ctl.overlayHover = true;
    };
    watch(() => props.visible, (newV) => {
      if (newV) {
        ctl.overlayClass = ctl.overlayClass.filter((classItem) => classItem !== HIDDEN_CLASS);
      } else {
        ctl.overlayClass.push(HIDDEN_CLASS);
      }
    });
    const clickHidden = (e) => {
      const triggerEle = triggerRef.value;
      const overlayEle = overlayRef.value;
      if (!triggerEle.contains(e.target) && !overlayEle.contains(e.target)) {
        props.onChange(false);
      }
    };
    let hiddenTimer = -1;
    const leaveHidden = (e) => {
      if (triggerRef.value === e.target) {
        ctl.triggerHover = false;
      } else {
        ctl.overlayHover = false;
      }
      clearTimeout(hiddenTimer);
      hiddenTimer = window.setTimeout(() => {
        if (!ctl.overlayHover && !ctl.triggerHover) {
          props.onChange(false);
        }
      }, 10);
    };
    onMounted(() => {
      if (props.trigger === "click") {
        triggerRef.value.addEventListener("click", triggerHandler);
        document.addEventListener("click", clickHidden);
      } else {
        triggerRef.value.addEventListener("mouseenter", triggerHandler);
        triggerRef.value.addEventListener("mouseleave", leaveHidden);
        overlayRef.value.addEventListener("mouseenter", overlayHandler);
        overlayRef.value.addEventListener("mouseleave", leaveHidden);
      }
    });
    onBeforeUnmount(() => {
      if (props.trigger === "click") {
        triggerRef.value.removeEventListener("click", triggerHandler);
        document.removeEventListener("click", clickHidden);
      } else {
        triggerRef.value.removeEventListener("mouseenter", triggerHandler);
        triggerRef.value.removeEventListener("mouseleave", leaveHidden);
        overlayRef.value.removeEventListener("mouseenter", overlayHandler);
        overlayRef.value.removeEventListener("mouseleave", leaveHidden);
      }
    });
    return () => {
      const slotDefault = getSlot({
        ctx
      });
      const slotOverlay = getSlot({
        props,
        ctx
      }, "overlay");
      const trigger = cloneVNode(slotDefault instanceof Array ? slotDefault[0] : slotDefault, {
        ref: triggerRef
      });
      const overlay = createVNode("div", {
        "class": [`${prefix}-dropdown`, ctl.overlayClass],
        "style": ctl.overlayStyle,
        "ref": overlayRef
      }, [createVNode("div", {
        "class": `${prefix}-dropdown-overlay`
      }, [slotOverlay instanceof Array ? slotOverlay[0] : slotOverlay])]);
      return [trigger, overlay];
    };
  }
});
var style$3 = "";
const modalProps = () => ({
  title: {
    type: String,
    default: ""
  },
  visible: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: "auto"
  },
  height: {
    type: String,
    default: "auto"
  },
  onClose: {
    type: Function,
    default: () => {
    }
  },
  showAdjust: {
    type: Boolean,
    default: false
  },
  isFullscreen: {
    type: Boolean,
    default: false
  },
  onAdjust: {
    type: Function,
    default: () => {
    }
  },
  class: {
    type: String
  }
});
var Modal = defineComponent({
  props: modalProps(),
  setup(props, ctx) {
    const modalVisible = ref(props.visible);
    const modalClass = ref([`${prefix}-modal`]);
    const modalRef = ref();
    const modalHeaderRef = ref();
    let keyMoveClear = () => {
    };
    const state = reactive({
      initPos: {
        left: "0px",
        top: "0px"
      },
      historyPos: {
        left: "0px",
        top: "0px"
      }
    });
    const innerSize = computed(() => {
      if (props.isFullscreen) {
        return {
          width: "100%",
          height: "100%"
        };
      } else {
        return {
          width: props.width,
          height: props.height
        };
      }
    });
    onMounted(() => {
      keyMoveClear = keyMove(modalHeaderRef.value, (left, top) => {
        state.initPos.left = left + "px";
        state.initPos.top = top + "px";
      });
    });
    onBeforeUnmount(() => {
      keyMoveClear();
    });
    watch(() => props.isFullscreen, (nVal) => {
      if (nVal) {
        keyMoveClear();
      } else {
        keyMoveClear = keyMove(modalHeaderRef.value, (left, top) => {
          state.initPos.left = left + "px";
          state.initPos.top = top + "px";
        });
      }
    });
    watch(() => props.visible, (nVal) => {
      if (nVal) {
        modalClass.value.push("zoom-in");
        modalVisible.value = nVal;
        nextTick(() => {
          const halfWidth = modalRef.value.offsetWidth / 2;
          const halfHeight = modalRef.value.offsetHeight / 2;
          const halfClientWidth = document.documentElement.clientWidth / 2;
          const halfClientHeight = document.documentElement.clientHeight / 2;
          state.initPos.left = halfClientWidth - halfWidth + "px";
          state.initPos.top = halfClientHeight - halfHeight + "px";
        });
        setTimeout(() => {
          modalClass.value = modalClass.value.filter((item) => item !== "zoom-in");
        }, 140);
      } else {
        modalClass.value.push("zoom-out");
        setTimeout(() => {
          modalClass.value = modalClass.value.filter((item) => item !== "zoom-out");
          modalVisible.value = nVal;
        }, 130);
      }
    });
    return () => {
      const slotDefault = getSlot({
        ctx
      });
      const slotTitle = getSlot({
        props,
        ctx
      }, "title");
      return createVNode("div", {
        "class": [props.class],
        "style": {
          display: modalVisible.value ? "block" : "none"
        }
      }, [createVNode("div", {
        "class": `${prefix}-modal-mask`,
        "onClick": props.onClose
      }, null), createVNode("div", {
        "class": modalClass.value,
        "style": __spreadValues(__spreadValues({}, state.initPos), innerSize.value),
        "ref": modalRef
      }, [createVNode("div", {
        "class": `${prefix}-modal-header`,
        "ref": modalHeaderRef
      }, [slotTitle || ""]), createVNode("div", {
        "class": `${prefix}-modal-body`
      }, [slotDefault]), createVNode("div", {
        "class": `${prefix}-modal-func`
      }, [props.showAdjust && createVNode("div", {
        "class": `${prefix}-modal-adjust`,
        "onClick": (e) => {
          e.stopPropagation();
          if (!props.isFullscreen) {
            state.historyPos = state.initPos;
            state.initPos = {
              left: "0",
              top: "0"
            };
          } else {
            state.initPos = state.historyPos;
          }
          props.onAdjust(!props.isFullscreen);
        }
      }, [createVNode("svg", {
        "class": `${prefix}-icon`,
        "aria-hidden": "true"
      }, [createVNode("use", {
        "xlink:href": `#md-editor-icon-${props.isFullscreen ? "suoxiao" : "fangda"}`
      }, null)])]), createVNode("div", {
        "class": `${prefix}-modal-close`,
        "onClick": (e) => {
          e.stopPropagation();
          props.onClose && props.onClose();
        }
      }, [createVNode("svg", {
        "class": `${prefix}-icon`,
        "aria-hidden": "true"
      }, [createVNode("use", {
        "xlink:href": "#md-editor-icon-close"
      }, null)])])])])]);
    };
  }
});
const linkProps = () => ({
  type: {
    type: String,
    default: "link"
  },
  visible: {
    type: Boolean,
    default: false
  },
  onCancel: {
    type: Function,
    default: () => {
    }
  },
  onOk: {
    type: Function,
    default: () => {
    }
  }
});
var LinkModal = defineComponent({
  props: linkProps(),
  setup(props) {
    const ult = inject("usedLanguageText");
    const editorId = inject("editorId");
    const title = computed(() => {
      var _a, _b;
      switch (props.type) {
        case "link": {
          return (_a = ult.value.linkModalTips) == null ? void 0 : _a.linkTitle;
        }
        case "image": {
          return (_b = ult.value.linkModalTips) == null ? void 0 : _b.imageTitle;
        }
        default: {
          return "";
        }
      }
    });
    const linkData = reactive({
      desc: "",
      url: ""
    });
    watch(() => props.visible, (nVal) => {
      if (!nVal) {
        setTimeout(() => {
          linkData.desc = "";
          linkData.url = "";
        }, 200);
      }
    });
    return () => createVNode(Modal, {
      "title": title.value,
      "visible": props.visible,
      "onClose": props.onCancel
    }, {
      default: () => {
        var _a, _b, _c, _d, _e;
        return [createVNode("div", {
          "class": `${prefix}-form-item`
        }, [createVNode("label", {
          "class": `${prefix}-label`,
          "for": `link-desc-${editorId}`
        }, [(_a = ult.value.linkModalTips) == null ? void 0 : _a.descLabel]), createVNode("input", {
          "placeholder": (_b = ult.value.linkModalTips) == null ? void 0 : _b.descLabelPlaceHolder,
          "class": `${prefix}-input`,
          "id": `link-desc-${editorId}`,
          "type": "text",
          "value": linkData.desc,
          "onChange": (e) => {
            linkData.desc = e.target.value;
          },
          "autocomplete": "off"
        }, null)]), createVNode("div", {
          "class": `${prefix}-form-item`
        }, [createVNode("label", {
          "class": `${prefix}-label`,
          "for": `link-url-${editorId}`
        }, [(_c = ult.value.linkModalTips) == null ? void 0 : _c.urlLabel]), createVNode("input", {
          "placeholder": (_d = ult.value.linkModalTips) == null ? void 0 : _d.urlLabelPlaceHolder,
          "class": `${prefix}-input`,
          "id": `link-url-${editorId}`,
          "type": "text",
          "value": linkData.url,
          "onChange": (e) => {
            linkData.url = e.target.value;
          },
          "autocomplete": "off"
        }, null)]), createVNode("div", {
          "class": `${prefix}-form-item`
        }, [createVNode("button", {
          "class": [`${prefix}-btn`, `${prefix}-btn-row`],
          "type": "button",
          "onClick": () => {
            props.onOk(linkData);
            linkData.desc = "";
            linkData.url = "";
          }
        }, [(_e = ult.value.linkModalTips) == null ? void 0 : _e.buttonOK])])];
      }
    });
  }
});
var style$2 = "";
const clipProps = () => ({
  visible: {
    type: Boolean,
    default: false
  },
  onCancel: {
    type: Function,
    default: () => {
    }
  },
  onOk: {
    type: Function,
    default: () => {
    }
  }
});
var ClipModal = defineComponent({
  props: clipProps(),
  setup(props) {
    var _a, _b;
    const ult = inject("usedLanguageText");
    const editorId = inject("editorId");
    let Cropper = (_b = (_a = configOption == null ? void 0 : configOption.editorExtensions) == null ? void 0 : _a.cropper) == null ? void 0 : _b.instance;
    const uploadRef = ref();
    const uploadImgRef = ref();
    const previewTargetRef = ref();
    const data = reactive({
      cropperInited: false,
      imgSelected: false,
      imgSrc: "",
      isFullscreen: false
    });
    let cropper = null;
    watch(() => props.visible, () => {
      if (props.visible && !data.cropperInited) {
        Cropper = Cropper || window.Cropper;
        uploadRef.value.onchange = () => {
          if (!Cropper) {
            bus.emit(editorId, "errorCatcher", {
              name: "Cropper",
              message: "Cropper is undefined"
            });
            return;
          }
          const fileList = uploadRef.value.files || [];
          data.imgSelected = true;
          if ((fileList == null ? void 0 : fileList.length) > 0) {
            const fileReader = new FileReader();
            fileReader.onload = (e) => {
              data.imgSrc = e.target.result;
              nextTick(() => {
                cropper = new Cropper(uploadImgRef.value, {
                  viewMode: 2,
                  preview: `.${prefix}-clip-preview-target`
                });
              });
            };
            fileReader.readAsDataURL(fileList[0]);
          }
        };
      }
    });
    watch(() => [data.imgSelected], () => {
      previewTargetRef.value.style = "";
    });
    watch(() => data.isFullscreen, () => {
      nextTick(() => {
        cropper == null ? void 0 : cropper.destroy();
        previewTargetRef.value.style = "";
        if (uploadImgRef.value) {
          cropper = new Cropper(uploadImgRef.value, {
            viewMode: 2,
            preview: `.${prefix}-clip-preview-target`
          });
        }
      });
    });
    const reset = () => {
      cropper.clear();
      cropper.destroy();
      cropper = null;
      uploadRef.value.value = "";
      data.imgSelected = false;
    };
    return () => {
      var _a2;
      return createVNode(Modal, {
        "class": `${prefix}-modal-clip`,
        "title": (_a2 = ult.value.clipModalTips) == null ? void 0 : _a2.title,
        "visible": props.visible,
        "onClose": props.onCancel,
        "showAdjust": true,
        "isFullscreen": data.isFullscreen,
        "onAdjust": (val) => {
          data.isFullscreen = val;
        },
        "width": "668px",
        "height": "421px"
      }, {
        default: () => {
          var _a3, _b2;
          return [createVNode("div", {
            "class": `${prefix}-form-item ${prefix}-clip`
          }, [createVNode("div", {
            "class": `${prefix}-clip-main`
          }, [data.imgSelected ? createVNode("div", {
            "class": `${prefix}-clip-cropper`
          }, [createVNode("img", {
            "src": data.imgSrc,
            "ref": uploadImgRef,
            "style": {
              display: "none"
            },
            "alt": ""
          }, null), createVNode("div", {
            "class": `${prefix}-clip-delete`,
            "onClick": reset
          }, [createVNode("svg", {
            "class": `${prefix}-icon`,
            "aria-hidden": "true"
          }, [createVNode("use", {
            "xlink:href": "#md-editor-icon-delete"
          }, null)])])]) : createVNode("div", {
            "class": `${prefix}-clip-upload`,
            "onClick": () => {
              uploadRef.value.click();
            }
          }, [createVNode("svg", {
            "class": `${prefix}-icon`,
            "aria-hidden": "true"
          }, [createVNode("use", {
            "xlink:href": "#md-editor-icon-upload"
          }, null)])])]), createVNode("div", {
            "class": `${prefix}-clip-preview`
          }, [createVNode("div", {
            "class": `${prefix}-clip-preview-target`,
            "ref": previewTargetRef
          }, null)])]), createVNode("div", {
            "class": `${prefix}-form-item`
          }, [createVNode("button", {
            "class": `${prefix}-btn`,
            "type": "button",
            "onClick": () => {
              if (cropper) {
                const cvs = cropper.getCroppedCanvas();
                bus.emit(editorId, "uploadImage", [base642File(cvs.toDataURL("image/png"))], props.onOk);
                reset();
              }
            }
          }, [((_a3 = ult.value.clipModalTips) == null ? void 0 : _a3.buttonUpload) || ((_b2 = ult.value.linkModalTips) == null ? void 0 : _b2.buttonOK)])]), createVNode("input", {
            "ref": uploadRef,
            "accept": "image/*",
            "type": "file",
            "multiple": false,
            "style": {
              display: "none"
            }
          }, null)];
        }
      });
    };
  }
});
const modalsProps = () => ({
  type: {
    type: String,
    default: "link"
  },
  linkVisible: {
    type: Boolean,
    default: false
  },
  clipVisible: {
    type: Boolean,
    default: false
  },
  onCancel: {
    type: Function,
    default: () => {
    }
  },
  onOk: {
    type: Function,
    default: () => {
    }
  }
});
var Modals = defineComponent({
  props: modalsProps(),
  setup(props) {
    return () => createVNode(Fragment, null, [createVNode(LinkModal, {
      "type": props.type,
      "visible": props.linkVisible,
      "onOk": props.onOk,
      "onCancel": props.onCancel
    }, null), createVNode(ClipModal, {
      "visible": props.clipVisible,
      "onOk": props.onOk,
      "onCancel": props.onCancel
    }, null)]);
  }
});
const useSreenfull = (props) => {
  var _a, _b, _c, _d;
  const editorId = inject("editorId");
  let screenfull = (_b = (_a = configOption.editorExtensions) == null ? void 0 : _a.screenfull) == null ? void 0 : _b.instance;
  const screenfullJs = (_d = (_c = configOption.editorExtensions) == null ? void 0 : _c.screenfull) == null ? void 0 : _d.js;
  const screenfullMe = ref(false);
  const fullscreenHandler = (status) => {
    if (!screenfull) {
      bus.emit(editorId, "errorCatcher", {
        name: "fullscreen",
        message: "fullscreen is undefined"
      });
      return;
    }
    if (screenfull.isEnabled) {
      screenfullMe.value = true;
      const targetStatus = status === void 0 ? !screenfull.isFullscreen : status;
      if (targetStatus) {
        screenfull.request();
      } else {
        screenfull.exit();
      }
    } else {
      console.error("browser does not support screenfull!");
    }
  };
  const onScreenfullEvent = () => {
    if (screenfull && screenfull.isEnabled) {
      screenfull.on("change", () => {
        if (screenfullMe.value || props.setting.fullscreen) {
          screenfullMe.value = false;
          props.updateSetting("fullscreen");
        }
      });
    }
  };
  const screenfullLoad = () => {
    screenfull = window.screenfull;
    onScreenfullEvent();
  };
  onMounted(() => {
    onScreenfullEvent();
    if (!screenfull) {
      const screenScript = document.createElement("script");
      screenScript.src = screenfullJs || screenfullUrl;
      screenScript.onload = screenfullLoad;
      screenScript.id = `${prefix}-screenfull`;
      appendHandler(screenScript, "screenfull");
    }
  });
  onMounted(() => {
    bus.on(editorId, {
      name: CHANGE_FULL_SCREEN,
      callback: fullscreenHandler
    });
  });
  return { fullscreenHandler };
};
const tableShapeProps = () => ({
  tableShape: {
    type: Array,
    default: () => [6, 4]
  },
  onSelected: {
    type: Function,
    default: () => {
    }
  }
});
const TableShape = defineComponent({
  name: "TableShape",
  props: tableShapeProps(),
  setup(props) {
    const hoverPosition = reactive({
      x: -1,
      y: -1
    });
    return () => createVNode("div", {
      "class": `${prefix}-table-shape`,
      "onMouseleave": () => {
        hoverPosition.x = -1;
        hoverPosition.y = -1;
      }
    }, [new Array(props.tableShape[1]).fill("").map((_, rowIndex) => createVNode("div", {
      "class": `${prefix}-table-shape-row`,
      "key": `table-shape-row-${rowIndex}`
    }, [new Array(props.tableShape[0]).fill("").map((_2, colIndex) => createVNode("div", {
      "class": `${prefix}-table-shape-col`,
      "key": `table-shape-col-${colIndex}`,
      "onMouseenter": () => {
        hoverPosition.x = rowIndex;
        hoverPosition.y = colIndex;
      },
      "onClick": () => {
        props.onSelected(hoverPosition);
      }
    }, [createVNode("div", {
      "class": [`${prefix}-table-shape-col-default`, rowIndex <= hoverPosition.x && colIndex <= hoverPosition.y && `${prefix}-table-shape-col-include`]
    }, null)]))]))]);
  }
});
const toolbarProps = () => ({
  noPrettier: {
    type: Boolean
  },
  toolbars: {
    type: Array,
    default: () => []
  },
  toolbarsExclude: {
    type: Array,
    default: () => []
  },
  setting: {
    type: Object,
    default: () => ({})
  },
  screenfull: {
    type: Object,
    default: null
  },
  screenfullJs: {
    type: String,
    default: ""
  },
  updateSetting: {
    type: Function,
    default: () => {
    }
  },
  tableShape: {
    type: Array,
    default: () => [6, 4]
  },
  defToolbars: {
    type: Object
  },
  noUploadImg: {
    type: Boolean
  }
});
var ToolBar = defineComponent({
  name: "MDEditorToolbar",
  props: toolbarProps(),
  setup(props) {
    const editorId = inject("editorId");
    const ult = inject("usedLanguageText");
    const {
      fullscreenHandler
    } = useSreenfull(props);
    const wrapperId = `${editorId}-toolbar-wrapper`;
    const visible = reactive({
      title: false,
      catalog: false,
      image: false,
      table: false,
      mermaid: false,
      katex: false
    });
    const emitHandler = (direct, params) => {
      bus.emit(editorId, "replace", direct, params);
    };
    const modalData = reactive({
      type: "link",
      linkVisible: false,
      clipVisible: false
    });
    const toolbarLeftRef = ref();
    onMounted(() => {
      bus.on(editorId, {
        name: "openModals",
        callback(type) {
          modalData.type = type;
          modalData.linkVisible = true;
        }
      });
    });
    const splitedbar = computed(() => {
      const excluedBars = props.toolbars.filter((barItem) => !props.toolbarsExclude.includes(barItem));
      const moduleSplitIndex = excluedBars.indexOf("=");
      const barLeft = moduleSplitIndex === -1 ? excluedBars : excluedBars.slice(0, moduleSplitIndex + 1);
      const barRight = moduleSplitIndex === -1 ? [] : excluedBars.slice(moduleSplitIndex, Number.MAX_SAFE_INTEGER);
      return [barLeft, barRight];
    });
    const uploadRef = ref();
    const uploadHandler = () => {
      bus.emit(editorId, "uploadImage", Array.from(uploadRef.value.files || []));
      uploadRef.value.value = "";
    };
    onMounted(() => {
      uploadRef.value.addEventListener("change", uploadHandler);
    });
    const barRender = (barItem) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q;
      if (allToolbar.includes(barItem)) {
        switch (barItem) {
          case "-": {
            return createVNode(Divider, null, null);
          }
          case "bold": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_a = ult.value.toolbarTips) == null ? void 0 : _a.bold,
              "onClick": () => {
                emitHandler("bold");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-bold"
            }, null)])]);
          }
          case "underline": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_b = ult.value.toolbarTips) == null ? void 0 : _b.underline,
              "onClick": () => {
                emitHandler("underline");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-underline"
            }, null)])]);
          }
          case "italic": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_c = ult.value.toolbarTips) == null ? void 0 : _c.italic,
              "onClick": () => {
                emitHandler("italic");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-italic"
            }, null)])]);
          }
          case "strikeThrough": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_d = ult.value.toolbarTips) == null ? void 0 : _d.strikeThrough,
              "onClick": () => {
                emitHandler("strikeThrough");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-strike-through"
            }, null)])]);
          }
          case "title": {
            return createVNode(Dropdown, {
              "relative": `#${wrapperId}`,
              "visible": visible.title,
              "onChange": (v) => {
                visible.title = v;
              },
              "overlay": createVNode("ul", {
                "class": `${prefix}-menu`,
                "onClick": () => {
                  visible.title = false;
                }
              }, [createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("h1");
                }
              }, [(_e = ult.value.titleItem) == null ? void 0 : _e.h1]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("h2");
                }
              }, [(_f = ult.value.titleItem) == null ? void 0 : _f.h2]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("h3");
                }
              }, [(_g = ult.value.titleItem) == null ? void 0 : _g.h3]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("h4");
                }
              }, [(_h = ult.value.titleItem) == null ? void 0 : _h.h4]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("h5");
                }
              }, [(_i = ult.value.titleItem) == null ? void 0 : _i.h5]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("h6");
                }
              }, [(_j = ult.value.titleItem) == null ? void 0 : _j.h6])])
            }, {
              default: () => {
                var _a2;
                return [createVNode("div", {
                  "class": `${prefix}-toolbar-item`,
                  "title": (_a2 = ult.value.toolbarTips) == null ? void 0 : _a2.title
                }, [createVNode("svg", {
                  "class": `${prefix}-icon`,
                  "aria-hidden": "true"
                }, [createVNode("use", {
                  "xlink:href": "#md-editor-icon-title"
                }, null)])])];
              }
            });
          }
          case "sub": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_k = ult.value.toolbarTips) == null ? void 0 : _k.sub,
              "onClick": () => {
                emitHandler("sub");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-sub"
            }, null)])]);
          }
          case "sup": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_l = ult.value.toolbarTips) == null ? void 0 : _l.sup,
              "onClick": () => {
                emitHandler("sup");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-sup"
            }, null)])]);
          }
          case "quote": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_m = ult.value.toolbarTips) == null ? void 0 : _m.quote,
              "onClick": () => {
                emitHandler("quote");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-quote"
            }, null)])]);
          }
          case "unorderedList": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_n = ult.value.toolbarTips) == null ? void 0 : _n.unorderedList,
              "onClick": () => {
                emitHandler("unorderedList");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-unordered-list"
            }, null)])]);
          }
          case "orderedList": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_o = ult.value.toolbarTips) == null ? void 0 : _o.orderedList,
              "onClick": () => {
                emitHandler("orderedList");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-ordered-list"
            }, null)])]);
          }
          case "task": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_p = ult.value.toolbarTips) == null ? void 0 : _p.task,
              "onClick": () => {
                emitHandler("task");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-task"
            }, null)])]);
          }
          case "codeRow": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_q = ult.value.toolbarTips) == null ? void 0 : _q.codeRow,
              "onClick": () => {
                emitHandler("codeRow");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-code-row"
            }, null)])]);
          }
          case "code": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_r = ult.value.toolbarTips) == null ? void 0 : _r.code,
              "onClick": () => {
                emitHandler("code");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-code"
            }, null)])]);
          }
          case "link": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_s = ult.value.toolbarTips) == null ? void 0 : _s.link,
              "onClick": () => {
                modalData.type = "link";
                modalData.linkVisible = true;
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-link"
            }, null)])]);
          }
          case "image": {
            return props.noUploadImg ? createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_t = ult.value.toolbarTips) == null ? void 0 : _t.image,
              "onClick": () => {
                modalData.type = "image";
                modalData.linkVisible = true;
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-image"
            }, null)])]) : createVNode(Dropdown, {
              "relative": `#${wrapperId}`,
              "visible": visible.image,
              "onChange": (v) => {
                visible.image = v;
              },
              "overlay": createVNode("ul", {
                "class": `${prefix}-menu`,
                "onClick": () => {
                  visible.title = false;
                }
              }, [createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  modalData.type = "image";
                  modalData.linkVisible = true;
                }
              }, [(_u = ult.value.imgTitleItem) == null ? void 0 : _u.link]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  uploadRef.value.click();
                }
              }, [(_v = ult.value.imgTitleItem) == null ? void 0 : _v.upload]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  modalData.clipVisible = true;
                }
              }, [(_w = ult.value.imgTitleItem) == null ? void 0 : _w.clip2upload])])
            }, {
              default: () => {
                var _a2;
                return [createVNode("div", {
                  "class": `${prefix}-toolbar-item`,
                  "title": (_a2 = ult.value.toolbarTips) == null ? void 0 : _a2.image
                }, [createVNode("svg", {
                  "class": `${prefix}-icon`,
                  "aria-hidden": "true"
                }, [createVNode("use", {
                  "xlink:href": "#md-editor-icon-image"
                }, null)])])];
              }
            });
          }
          case "table": {
            return createVNode(Dropdown, {
              "relative": `#${wrapperId}`,
              "visible": visible.table,
              "onChange": (v) => {
                visible.table = v;
              },
              "key": "bar-table",
              "overlay": createVNode(TableShape, {
                "tableShape": props.tableShape,
                "onSelected": (selectedShape) => {
                  emitHandler("table", {
                    selectedShape
                  });
                }
              }, null)
            }, {
              default: () => {
                var _a2;
                return [createVNode("div", {
                  "class": `${prefix}-toolbar-item`,
                  "title": (_a2 = ult.value.toolbarTips) == null ? void 0 : _a2.table
                }, [createVNode("svg", {
                  "class": `${prefix}-icon`,
                  "aria-hidden": "true"
                }, [createVNode("use", {
                  "xlink:href": "#md-editor-icon-table"
                }, null)])])];
              }
            });
          }
          case "revoke": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_x = ult.value.toolbarTips) == null ? void 0 : _x.revoke,
              "onClick": () => {
                bus.emit(editorId, "ctrlZ");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-revoke"
            }, null)])]);
          }
          case "next": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_y = ult.value.toolbarTips) == null ? void 0 : _y.next,
              "onClick": () => {
                bus.emit(editorId, "ctrlShiftZ");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-next"
            }, null)])]);
          }
          case "save": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_z = ult.value.toolbarTips) == null ? void 0 : _z.save,
              "onClick": () => {
                bus.emit(editorId, ON_SAVE);
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-baocun"
            }, null)])]);
          }
          case "prettier": {
            return !props.noPrettier ? createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_A = ult.value.toolbarTips) == null ? void 0 : _A.prettier,
              "onClick": () => {
                emitHandler("prettier");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-prettier"
            }, null)])]) : "";
          }
          case "pageFullscreen": {
            return !props.setting.fullscreen && createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_B = ult.value.toolbarTips) == null ? void 0 : _B.pageFullscreen,
              "onClick": () => {
                props.updateSetting("pageFullscreen");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": `#md-editor-icon-${props.setting.pageFullscreen ? "suoxiao" : "fangda"}`
            }, null)])]);
          }
          case "fullscreen": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_C = ult.value.toolbarTips) == null ? void 0 : _C.fullscreen,
              "onClick": () => {
                fullscreenHandler();
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": `#md-editor-icon-${props.setting.fullscreen ? "fullscreen-exit" : "fullscreen"}`
            }, null)])]);
          }
          case "preview": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_D = ult.value.toolbarTips) == null ? void 0 : _D.preview,
              "onClick": () => {
                props.updateSetting("preview");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-preview"
            }, null)])]);
          }
          case "htmlPreview": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_E = ult.value.toolbarTips) == null ? void 0 : _E.htmlPreview,
              "onClick": () => {
                props.updateSetting("htmlPreview");
              }
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-coding"
            }, null)])]);
          }
          case "catalog": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_F = ult.value.toolbarTips) == null ? void 0 : _F.catalog,
              "onClick": () => {
                bus.emit(editorId, CHANGE_CATALOG_VISIBLE);
              },
              "key": "bar-catalog"
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-catalog"
            }, null)])]);
          }
          case "github": {
            return createVNode("div", {
              "class": `${prefix}-toolbar-item`,
              "title": (_G = ult.value.toolbarTips) == null ? void 0 : _G.github,
              "onClick": () => goto("https://github.com/petrstahl/md-editor-zabiri")
            }, [createVNode("svg", {
              "class": `${prefix}-icon`,
              "aria-hidden": "true"
            }, [createVNode("use", {
              "xlink:href": "#md-editor-icon-github"
            }, null)])]);
          }
          case "mermaid": {
            return createVNode(Dropdown, {
              "relative": `#${wrapperId}`,
              "visible": visible.mermaid,
              "onChange": (v) => {
                visible.mermaid = v;
              },
              "overlay": createVNode("ul", {
                "class": `${prefix}-menu`,
                "onClick": () => {
                  visible.mermaid = false;
                }
              }, [createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("flow");
                }
              }, [(_H = ult.value.mermaid) == null ? void 0 : _H.flow]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("sequence");
                }
              }, [(_I = ult.value.mermaid) == null ? void 0 : _I.sequence]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("gantt");
                }
              }, [(_J = ult.value.mermaid) == null ? void 0 : _J.gantt]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("class");
                }
              }, [(_K = ult.value.mermaid) == null ? void 0 : _K.class]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("state");
                }
              }, [(_L = ult.value.mermaid) == null ? void 0 : _L.state]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("pie");
                }
              }, [(_M = ult.value.mermaid) == null ? void 0 : _M.pie]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("relationship");
                }
              }, [(_N = ult.value.mermaid) == null ? void 0 : _N.relationship]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("journey");
                }
              }, [(_O = ult.value.mermaid) == null ? void 0 : _O.journey])]),
              "key": "bar-mermaid"
            }, {
              default: () => {
                var _a2;
                return [createVNode("div", {
                  "class": `${prefix}-toolbar-item`,
                  "title": (_a2 = ult.value.toolbarTips) == null ? void 0 : _a2.mermaid
                }, [createVNode("svg", {
                  "class": `${prefix}-icon`,
                  "aria-hidden": "true"
                }, [createVNode("use", {
                  "xlink:href": "#md-editor-icon-mermaid"
                }, null)])])];
              }
            });
          }
          case "katex": {
            return createVNode(Dropdown, {
              "relative": `#${wrapperId}`,
              "visible": visible.katex,
              "onChange": (v) => {
                visible.katex = v;
              },
              "overlay": createVNode("ul", {
                "class": `${prefix}-menu`,
                "onClick": () => {
                  visible.katex = false;
                }
              }, [createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("katexInline");
                }
              }, [(_P = ult.value.katex) == null ? void 0 : _P.inline]), createVNode("li", {
                "class": `${prefix}-menu-item`,
                "onClick": () => {
                  emitHandler("katexBlock");
                }
              }, [(_Q = ult.value.katex) == null ? void 0 : _Q.block])]),
              "key": "bar-katex"
            }, {
              default: () => {
                var _a2;
                return [createVNode("div", {
                  "class": `${prefix}-toolbar-item`,
                  "title": (_a2 = ult.value.toolbarTips) == null ? void 0 : _a2.katex
                }, [createVNode("svg", {
                  "class": `${prefix}-icon`,
                  "aria-hidden": "true"
                }, [createVNode("use", {
                  "xlink:href": "#md-editor-icon-formula"
                }, null)])])];
              }
            });
          }
        }
      } else if (props.defToolbars instanceof Array) {
        const defItem = props.defToolbars[barItem];
        return defItem || "";
      } else if (props.defToolbars && props.defToolbars.children instanceof Array) {
        const defItem = props.defToolbars.children[barItem];
        return defItem || "";
      } else {
        return "";
      }
    };
    return () => {
      const LeftBar = splitedbar.value[0].map((barItem) => barRender(barItem));
      const RightBar = splitedbar.value[1].map((barItem) => barRender(barItem));
      return createVNode(Fragment, null, [props.toolbars.length > 0 && createVNode("div", {
        "class": `${prefix}-toolbar-wrapper`,
        "id": wrapperId
      }, [createVNode("div", {
        "class": `${prefix}-toolbar`
      }, [createVNode("div", {
        "class": `${prefix}-toolbar-left`,
        "ref": toolbarLeftRef
      }, [LeftBar]), createVNode("div", {
        "class": `${prefix}-toolbar-right`
      }, [RightBar])])]), createVNode("input", {
        "ref": uploadRef,
        "accept": "image/*",
        "type": "file",
        "multiple": true,
        "style": {
          display: "none"
        }
      }, null), createVNode(Modals, {
        "linkVisible": modalData.linkVisible,
        "clipVisible": modalData.clipVisible,
        "type": modalData.type,
        "onCancel": () => {
          modalData.linkVisible = false;
          modalData.clipVisible = false;
        },
        "onOk": (data) => {
          if (data) {
            emitHandler(modalData.type, {
              desc: data.desc,
              url: data.url
            });
          }
          modalData.linkVisible = false;
          modalData.clipVisible = false;
        }
      }, null)]);
    };
  }
});
function getDefaults() {
  return {
    async: false,
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: "",
    highlight: null,
    langPrefix: "language-",
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}
let defaults = getDefaults();
const escapeTest = /[&<>"']/;
const escapeReplace = new RegExp(escapeTest.source, "g");
const escapeTestNoEncode = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/;
const escapeReplaceNoEncode = new RegExp(escapeTestNoEncode.source, "g");
const escapeReplacements = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;"
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }
  return html;
}
const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;
function unescape(html) {
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === "colon")
      return ":";
    if (n.charAt(0) === "#") {
      return n.charAt(1) === "x" ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
    }
    return "";
  });
}
const caret = /(^|[^\[])\^/g;
function edit(regex, opt) {
  regex = typeof regex === "string" ? regex : regex.source;
  opt = opt || "";
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, "$1");
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}
const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(unescape(href)).replace(nonWordAndColonTest, "").toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf("javascript:") === 0 || prot.indexOf("vbscript:") === 0 || prot.indexOf("data:") === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, "%");
  } catch (e) {
    return null;
  }
  return href;
}
const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;
function resolveUrl(base, href) {
  if (!baseUrls[" " + base]) {
    if (justDomain.test(base)) {
      baseUrls[" " + base] = base + "/";
    } else {
      baseUrls[" " + base] = rtrim(base, "/", true);
    }
  }
  base = baseUrls[" " + base];
  const relativeBase = base.indexOf(":") === -1;
  if (href.substring(0, 2) === "//") {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, "$1") + href;
  } else if (href.charAt(0) === "/") {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, "$1") + href;
  } else {
    return base + href;
  }
}
const noopTest = { exec: function noopTest2() {
} };
function merge(obj) {
  let i = 1, target, key;
  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }
  return obj;
}
function splitCells(tableRow, count) {
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
    let escaped = false, curr = offset;
    while (--curr >= 0 && str[curr] === "\\")
      escaped = !escaped;
    if (escaped) {
      return "|";
    } else {
      return " |";
    }
  }), cells = row.split(/ \|/);
  let i = 0;
  if (!cells[0].trim()) {
    cells.shift();
  }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) {
    cells.pop();
  }
  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count)
      cells.push("");
  }
  for (; i < cells.length; i++) {
    cells[i] = cells[i].trim().replace(/\\\|/g, "|");
  }
  return cells;
}
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return "";
  }
  let suffLen = 0;
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }
  return str.slice(0, l - suffLen);
}
function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0, i = 0;
  for (; i < l; i++) {
    if (str[i] === "\\") {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}
function repeatString(pattern, count) {
  if (count < 1) {
    return "";
  }
  let result = "";
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}
function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, "$1");
  if (cap[0].charAt(0) !== "!") {
    lexer.state.inLink = true;
    const token = {
      type: "link",
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text)
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: "image",
    raw,
    href,
    title,
    text: escape(text)
  };
}
function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);
  if (matchIndentToCode === null) {
    return text;
  }
  const indentToCode = matchIndentToCode[1];
  return text.split("\n").map((node) => {
    const matchIndentInNode = node.match(/^\s+/);
    if (matchIndentInNode === null) {
      return node;
    }
    const [indentInNode] = matchIndentInNode;
    if (indentInNode.length >= indentToCode.length) {
      return node.slice(indentToCode.length);
    }
    return node;
  }).join("\n");
}
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }
  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: "space",
        raw: cap[0]
      };
    }
  }
  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, "");
      return {
        type: "code",
        raw: cap[0],
        codeBlockStyle: "indented",
        text: !this.options.pedantic ? rtrim(text, "\n") : text
      };
    }
  }
  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || "");
      return {
        type: "code",
        raw,
        lang: cap[2] ? cap[2].trim().replace(this.rules.inline._escapes, "$1") : cap[2],
        text
      };
    }
  }
  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, "#");
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          text = trimmed.trim();
        }
      }
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: "hr",
        raw: cap[0]
      };
    }
  }
  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, "");
      return {
        type: "blockquote",
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }
  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine, line, nextLine, rawLine, itemContents, endEarly;
      let bull = cap[1].trim();
      const isordered = bull.length > 1;
      const list = {
        type: "list",
        raw: "",
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : "",
        loose: false,
        items: []
      };
      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;
      if (this.options.pedantic) {
        bull = isordered ? bull : "[*+-]";
      }
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[	 ][^\\n]*)?(?:\\n|$))`);
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }
        if (this.rules.block.hr.test(src)) {
          break;
        }
        raw = cap[0];
        src = src.substring(raw.length);
        line = cap[2].split("\n", 1)[0];
        nextLine = src.split("\n", 1)[0];
        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/);
          indent = indent > 4 ? 1 : indent;
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }
        blankLine = false;
        if (!line && /^ *$/.test(nextLine)) {
          raw += nextLine + "\n";
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }
        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);
          while (src) {
            rawLine = src.split("\n", 1)[0];
            line = rawLine;
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ");
            }
            if (fencesBeginRegex.test(line)) {
              break;
            }
            if (headingBeginRegex.test(line)) {
              break;
            }
            if (nextBulletRegex.test(line)) {
              break;
            }
            if (hrRegex.test(src)) {
              break;
            }
            if (line.search(/[^ ]/) >= indent || !line.trim()) {
              itemContents += "\n" + line.slice(indent);
            } else if (!blankLine) {
              itemContents += "\n" + line;
            } else {
              break;
            }
            if (!blankLine && !line.trim()) {
              blankLine = true;
            }
            raw += rawLine + "\n";
            src = src.substring(rawLine.length + 1);
          }
        }
        if (!list.loose) {
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== "[ ] ";
            itemContents = itemContents.replace(/^\[[ xX]\] +/, "");
          }
        }
        list.items.push({
          type: "list_item",
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });
        list.raw += raw;
      }
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();
      const l = list.items.length;
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter((t) => t.type === "space");
        const hasMultipleLineBreaks = spacers.every((t) => {
          const chars = t.raw.split("");
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === "\n") {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }
          return false;
        });
        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          list.loose = true;
          list.items[i].loose = true;
        }
      }
      return list;
    }
  }
  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: "html",
        raw: cap[0],
        pre: !this.options.sanitizer && (cap[1] === "pre" || cap[1] === "script" || cap[1] === "style"),
        text: cap[0]
      };
      if (this.options.sanitize) {
        const text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]);
        token.type = "paragraph";
        token.text = text;
        token.tokens = this.lexer.inline(text);
      }
      return token;
    }
  }
  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      const tag = cap[1].toLowerCase().replace(/\s+/g, " ");
      const href = cap[2] ? cap[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "";
      const title = cap[3] ? cap[3].substring(1, cap[3].length - 1).replace(this.rules.inline._escapes, "$1") : cap[3];
      return {
        type: "def",
        tag,
        raw: cap[0],
        href,
        title
      };
    }
  }
  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: "table",
        header: splitCells(cap[1]).map((c) => {
          return { text: c };
        }),
        align: cap[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, "").split("\n") : []
      };
      if (item.header.length === item.align.length) {
        item.raw = cap[0];
        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = "right";
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = "center";
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = "left";
          } else {
            item.align[i] = null;
          }
        }
        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map((c) => {
            return { text: c };
          });
        }
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = this.lexer.inline(item.header[j].text);
        }
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = this.lexer.inline(row[k].text);
          }
        }
        return item;
      }
    }
  }
  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      return {
        type: "heading",
        raw: cap[0],
        depth: cap[2].charAt(0) === "=" ? 1 : 2,
        text: cap[1],
        tokens: this.lexer.inline(cap[1])
      };
    }
  }
  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const text = cap[1].charAt(cap[1].length - 1) === "\n" ? cap[1].slice(0, -1) : cap[1];
      return {
        type: "paragraph",
        raw: cap[0],
        text,
        tokens: this.lexer.inline(text)
      };
    }
  }
  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      return {
        type: "text",
        raw: cap[0],
        text: cap[0],
        tokens: this.lexer.inline(cap[0])
      };
    }
  }
  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: "escape",
        raw: cap[0],
        text: escape(cap[1])
      };
    }
  }
  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }
      return {
        type: this.options.sanitize ? "text" : "html",
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0]
      };
    }
  }
  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        if (!/>$/.test(trimmedUrl)) {
          return;
        }
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), "\\");
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        const lastParenIndex = findClosingBracket(cap[2], "()");
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf("!") === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = "";
        }
      }
      let href = cap[2];
      let title = "";
      if (this.options.pedantic) {
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);
        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : "";
      }
      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !/>$/.test(trimmedUrl)) {
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, "$1") : href,
        title: title ? title.replace(this.rules.inline._escapes, "$1") : title
      }, cap[0], this.lexer);
    }
  }
  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src)) || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, " ");
      link = links[link.toLowerCase()];
      if (!link) {
        const text = cap[0].charAt(0);
        return {
          type: "text",
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }
  emStrong(src, maskedSrc, prevChar = "") {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match)
      return;
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u))
      return;
    const nextChar = match[1] || match[2] || "";
    if (!nextChar || nextChar && (prevChar === "" || this.rules.inline.punctuation.exec(prevChar))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;
      const endReg = match[0][0] === "*" ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);
      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];
        if (!rDelim)
          continue;
        rLength = rDelim.length;
        if (match[3] || match[4]) {
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) {
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue;
          }
        }
        delimTotal -= rLength;
        if (delimTotal > 0)
          continue;
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);
        const raw = src.slice(0, lLength + match.index + (match[0].length - rDelim.length) + rLength);
        if (Math.min(lLength, rLength) % 2) {
          const text2 = raw.slice(1, -1);
          return {
            type: "em",
            raw,
            text: text2,
            tokens: this.lexer.inlineTokens(text2)
          };
        }
        const text = raw.slice(2, -2);
        return {
          type: "strong",
          raw,
          text,
          tokens: this.lexer.inlineTokens(text)
        };
      }
    }
  }
  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, " ");
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = escape(text, true);
      return {
        type: "codespan",
        raw: cap[0],
        text
      };
    }
  }
  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: "br",
        raw: cap[0]
      };
    }
  }
  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: "del",
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2])
      };
    }
  }
  autolink(src, mangle2) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[1]) : cap[1]);
        href = "mailto:" + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  url(src, mangle2) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === "@") {
        text = escape(this.options.mangle ? mangle2(cap[0]) : cap[0]);
        href = "mailto:" + text;
      } else {
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = escape(cap[0]);
        if (cap[1] === "www.") {
          href = "http://" + text;
        } else {
          href = text;
        }
      }
      return {
        type: "link",
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: "text",
            raw: text,
            text
          }
        ]
      };
    }
  }
  inlineText(src, smartypants2) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
      } else {
        text = escape(this.options.smartypants ? smartypants2(cap[0]) : cap[0]);
      }
      return {
        type: "text",
        raw: cap[0],
        text
      };
    }
  }
}
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
  def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};
block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def).replace("label", block._label).replace("title", block._title).getRegex();
block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */).replace("bull", block.bullet).getRegex();
block.list = edit(block.list).replace(/bull/g, block.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + block.def.source + ")").getRegex();
block._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul";
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, "i").replace("comment", block._comment).replace("tag", block._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
block.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.blockquote = edit(block.blockquote).replace("paragraph", block.paragraph).getRegex();
block.normal = merge({}, block);
block.gfm = merge({}, block.normal, {
  table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
});
block.gfm.table = edit(block.gfm.table).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.gfm.paragraph = edit(block._paragraph).replace("hr", block.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", block.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", block._tag).getRegex();
block.pedantic = merge({}, block.normal, {
  html: edit(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace("comment", block._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest,
  lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
  paragraph: edit(block.normal._paragraph).replace("hr", block.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", block.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
});
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: "reflink|nolink(?!\\()",
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};
inline._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~";
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g;
inline._comment = edit(block._comment).replace("(?:-->|$)", "-->").getRegex();
inline.emStrong.lDelim = edit(inline.emStrong.lDelim).replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, "g").replace(/punct/g, inline._punctuation).getRegex();
inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, "g").replace(/punct/g, inline._punctuation).getRegex();
inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink).replace("scheme", inline._scheme).replace("email", inline._email).getRegex();
inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
inline.tag = edit(inline.tag).replace("comment", inline._comment).replace("attribute", inline._attribute).getRegex();
inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
inline.link = edit(inline.link).replace("label", inline._label).replace("href", inline._href).replace("title", inline._title).getRegex();
inline.reflink = edit(inline.reflink).replace("label", inline._label).replace("ref", block._label).getRegex();
inline.nolink = edit(inline.nolink).replace("ref", block._label).getRegex();
inline.reflinkSearch = edit(inline.reflinkSearch, "g").replace("reflink", inline.reflink).replace("nolink", inline.nolink).getRegex();
inline.normal = merge({}, inline);
inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/).replace("label", inline._label).getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", inline._label).getRegex()
});
inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace("])", "~|])").getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});
inline.gfm.url = edit(inline.gfm.url, "i").replace("email", inline.gfm._extended_email).getRegex();
inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace("{2,}", "*").getRegex(),
  text: edit(inline.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
});
function smartypants(text) {
  return text.replace(/---/g, "\u2014").replace(/--/g, "\u2013").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1\u2018").replace(/'/g, "\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1\u201C").replace(/"/g, "\u201D").replace(/\.{3}/g, "\u2026");
}
function mangle(text) {
  let out = "", i, ch;
  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = "x" + ch.toString(16);
    }
    out += "&#" + ch + ";";
  }
  return out;
}
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = /* @__PURE__ */ Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };
    const rules = {
      block: block.normal,
      inline: inline.normal
    };
    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }
  static get rules() {
    return {
      block,
      inline
    };
  }
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }
  lex(src) {
    src = src.replace(/\r\n|\r/g, "\n");
    this.blockTokens(src, this.tokens);
    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }
    return this.tokens;
  }
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, "    ").replace(/^ +$/gm, "");
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + "    ".repeat(tabs.length);
      });
    }
    let token, lastToken, cutSrc, lastParagraphClipped;
    while (src) {
      if (this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          tokens[tokens.length - 1].raw += "\n";
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === "paragraph" || lastToken.type === "text")) {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === "paragraph") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = cutSrc.length !== src.length;
        src = src.substring(token.raw.length);
        continue;
      }
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += "\n" + token.raw;
          lastToken.text += "\n" + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    this.state.top = true;
    return tokens;
  }
  inline(src, tokens = []) {
    this.inlineQueue.push({ src, tokens });
    return tokens;
  }
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf("[") + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + "[" + repeatString("a", match[0].length - 2) + "]" + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index + match[0].length - 2) + "++" + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
      this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
    }
    while (src) {
      if (!keepPrevChar) {
        prevChar = "";
      }
      keepPrevChar = false;
      if (this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((extTokenizer) => {
        if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
          src = src.substring(token.raw.length);
          tokens.push(token);
          return true;
        }
        return false;
      })) {
        continue;
      }
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === "text" && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === "number" && tempStart >= 0) {
            startIndex = Math.min(startIndex, tempStart);
          }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== "_") {
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === "text") {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }
      if (src) {
        const errMsg = "Infinite loop on byte: " + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }
    return tokens;
  }
}
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }
  code(code, infostring, escaped) {
    const lang = (infostring || "").match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }
    code = code.replace(/\n$/, "") + "\n";
    if (!lang) {
      return "<pre><code>" + (escaped ? code : escape(code, true)) + "</code></pre>\n";
    }
    return '<pre><code class="' + this.options.langPrefix + escape(lang) + '">' + (escaped ? code : escape(code, true)) + "</code></pre>\n";
  }
  blockquote(quote) {
    return `<blockquote>
${quote}</blockquote>
`;
  }
  html(html) {
    return html;
  }
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>
`;
    }
    return `<h${level}>${text}</h${level}>
`;
  }
  hr() {
    return this.options.xhtml ? "<hr/>\n" : "<hr>\n";
  }
  list(body, ordered, start) {
    const type = ordered ? "ol" : "ul", startatt = ordered && start !== 1 ? ' start="' + start + '"' : "";
    return "<" + type + startatt + ">\n" + body + "</" + type + ">\n";
  }
  listitem(text) {
    return `<li>${text}</li>
`;
  }
  checkbox(checked) {
    return "<input " + (checked ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> ";
  }
  paragraph(text) {
    return `<p>${text}</p>
`;
  }
  table(header, body) {
    if (body)
      body = `<tbody>${body}</tbody>`;
    return "<table>\n<thead>\n" + header + "</thead>\n" + body + "</table>\n";
  }
  tablerow(content) {
    return `<tr>
${content}</tr>
`;
  }
  tablecell(content, flags) {
    const type = flags.header ? "th" : "td";
    const tag = flags.align ? `<${type} align="${flags.align}">` : `<${type}>`;
    return tag + content + `</${type}>
`;
  }
  strong(text) {
    return `<strong>${text}</strong>`;
  }
  em(text) {
    return `<em>${text}</em>`;
  }
  codespan(text) {
    return `<code>${text}</code>`;
  }
  br() {
    return this.options.xhtml ? "<br/>" : "<br>";
  }
  del(text) {
    return `<del>${text}</del>`;
  }
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + href + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += ">" + text + "</a>";
    return out;
  }
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? "/>" : ">";
    return out;
  }
  text(text) {
    return text;
  }
}
class TextRenderer {
  strong(text) {
    return text;
  }
  em(text) {
    return text;
  }
  codespan(text) {
    return text;
  }
  del(text) {
    return text;
  }
  html(text) {
    return text;
  }
  text(text) {
    return text;
  }
  link(href, title, text) {
    return "" + text;
  }
  image(href, title, text) {
    return "" + text;
  }
  br() {
    return "";
  }
}
class Slugger {
  constructor() {
    this.seen = {};
  }
  serialize(value) {
    return value.toLowerCase().trim().replace(/<[!\/a-z].*?>/ig, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-");
  }
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + "-" + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }
  parse(tokens, top = true) {
    let out = "", i, j, k, l2, l3, row, cell, header, body, token, ordered, start, loose, itemBody, item, checked, task, checkbox, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "space": {
          continue;
        }
        case "hr": {
          out += this.renderer.hr();
          continue;
        }
        case "heading": {
          out += this.renderer.heading(this.parseInline(token.tokens), token.depth, unescape(this.parseInline(token.tokens, this.textRenderer)), this.slugger);
          continue;
        }
        case "code": {
          out += this.renderer.code(token.text, token.lang, token.escaped);
          continue;
        }
        case "table": {
          header = "";
          cell = "";
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(this.parseInline(token.header[j].tokens), { header: true, align: token.align[j] });
          }
          header += this.renderer.tablerow(cell);
          body = "";
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];
            cell = "";
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(this.parseInline(row[k].tokens), { header: false, align: token.align[k] });
            }
            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case "blockquote": {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case "list": {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;
          body = "";
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;
            itemBody = "";
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === "paragraph") {
                  item.tokens[0].text = checkbox + " " + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === "text") {
                    item.tokens[0].tokens[0].text = checkbox + " " + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: "text",
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }
            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }
          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case "html": {
          out += this.renderer.html(token.text);
          continue;
        }
        case "paragraph": {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case "text": {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === "text") {
            token = tokens[++i];
            body += "\n" + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = "", i, token, ret;
    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(token.type)) {
          out += ret || "";
          continue;
        }
      }
      switch (token.type) {
        case "escape": {
          out += renderer.text(token.text);
          break;
        }
        case "html": {
          out += renderer.html(token.text);
          break;
        }
        case "link": {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case "image": {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case "strong": {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case "em": {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case "codespan": {
          out += renderer.codespan(token.text);
          break;
        }
        case "br": {
          out += renderer.br();
          break;
        }
        case "del": {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case "text": {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}
Parser.parse;
Lexer.lex;
var toggleSelection = function() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }
    active && active.focus();
  };
};
var deselectCurrent = toggleSelection;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text;
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text);
        } else {
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var copyToClipboard = copy;
/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
var isSupported = function isSupported2(node) {
  return node.tagName === "IMG";
};
var isNodeList = function isNodeList2(selector) {
  return NodeList.prototype.isPrototypeOf(selector);
};
var isNode = function isNode2(selector) {
  return selector && selector.nodeType === 1;
};
var isSvg = function isSvg2(image) {
  var source = image.currentSrc || image.src;
  return source.substr(-4).toLowerCase() === ".svg";
};
var getImagesFromSelector = function getImagesFromSelector2(selector) {
  try {
    if (Array.isArray(selector)) {
      return selector.filter(isSupported);
    }
    if (isNodeList(selector)) {
      return [].slice.call(selector).filter(isSupported);
    }
    if (isNode(selector)) {
      return [selector].filter(isSupported);
    }
    if (typeof selector === "string") {
      return [].slice.call(document.querySelectorAll(selector)).filter(isSupported);
    }
    return [];
  } catch (err) {
    throw new TypeError("The provided selector is invalid.\nExpects a CSS selector, a Node element, a NodeList or an array.\nSee: https://github.com/francoischalifour/medium-zoom");
  }
};
var createOverlay = function createOverlay2(background) {
  var overlay = document.createElement("div");
  overlay.classList.add("medium-zoom-overlay");
  overlay.style.background = background;
  return overlay;
};
var cloneTarget = function cloneTarget2(template) {
  var _template$getBounding = template.getBoundingClientRect(), top = _template$getBounding.top, left = _template$getBounding.left, width = _template$getBounding.width, height = _template$getBounding.height;
  var clone = template.cloneNode();
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
  clone.removeAttribute("id");
  clone.style.position = "absolute";
  clone.style.top = top + scrollTop + "px";
  clone.style.left = left + scrollLeft + "px";
  clone.style.width = width + "px";
  clone.style.height = height + "px";
  clone.style.transform = "";
  return clone;
};
var createCustomEvent = function createCustomEvent2(type, params) {
  var eventParams = _extends({
    bubbles: false,
    cancelable: false,
    detail: void 0
  }, params);
  if (typeof window.CustomEvent === "function") {
    return new CustomEvent(type, eventParams);
  }
  var customEvent = document.createEvent("CustomEvent");
  customEvent.initCustomEvent(type, eventParams.bubbles, eventParams.cancelable, eventParams.detail);
  return customEvent;
};
var mediumZoom = function mediumZoom2(selector) {
  var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  var Promise2 = window.Promise || function Promise3(fn) {
    function noop() {
    }
    fn(noop, noop);
  };
  var _handleClick = function _handleClick2(event) {
    var target = event.target;
    if (target === overlay) {
      close();
      return;
    }
    if (images.indexOf(target) === -1) {
      return;
    }
    toggle({ target });
  };
  var _handleScroll = function _handleScroll2() {
    if (isAnimating || !active.original) {
      return;
    }
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (Math.abs(scrollTop - currentScroll) > zoomOptions.scrollOffset) {
      setTimeout(close, 150);
    }
  };
  var _handleKeyUp = function _handleKeyUp2(event) {
    var key = event.key || event.keyCode;
    if (key === "Escape" || key === "Esc" || key === 27) {
      close();
    }
  };
  var update = function update2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    var newOptions = options2;
    if (options2.background) {
      overlay.style.background = options2.background;
    }
    if (options2.container && options2.container instanceof Object) {
      newOptions.container = _extends({}, zoomOptions.container, options2.container);
    }
    if (options2.template) {
      var template = isNode(options2.template) ? options2.template : document.querySelector(options2.template);
      newOptions.template = template;
    }
    zoomOptions = _extends({}, zoomOptions, newOptions);
    images.forEach(function(image) {
      image.dispatchEvent(createCustomEvent("medium-zoom:update", {
        detail: { zoom }
      }));
    });
    return zoom;
  };
  var clone = function clone2() {
    var options2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return mediumZoom2(_extends({}, zoomOptions, options2));
  };
  var attach = function attach2() {
    for (var _len = arguments.length, selectors = Array(_len), _key = 0; _key < _len; _key++) {
      selectors[_key] = arguments[_key];
    }
    var newImages = selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []);
    newImages.filter(function(newImage) {
      return images.indexOf(newImage) === -1;
    }).forEach(function(newImage) {
      images.push(newImage);
      newImage.classList.add("medium-zoom-image");
    });
    eventListeners.forEach(function(_ref) {
      var type = _ref.type, listener = _ref.listener, options2 = _ref.options;
      newImages.forEach(function(image) {
        image.addEventListener(type, listener, options2);
      });
    });
    return zoom;
  };
  var detach = function detach2() {
    for (var _len2 = arguments.length, selectors = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      selectors[_key2] = arguments[_key2];
    }
    if (active.zoomed) {
      close();
    }
    var imagesToDetach = selectors.length > 0 ? selectors.reduce(function(imagesAccumulator, currentSelector) {
      return [].concat(imagesAccumulator, getImagesFromSelector(currentSelector));
    }, []) : images;
    imagesToDetach.forEach(function(image) {
      image.classList.remove("medium-zoom-image");
      image.dispatchEvent(createCustomEvent("medium-zoom:detach", {
        detail: { zoom }
      }));
    });
    images = images.filter(function(image) {
      return imagesToDetach.indexOf(image) === -1;
    });
    return zoom;
  };
  var on = function on2(type, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.addEventListener("medium-zoom:" + type, listener, options2);
    });
    eventListeners.push({ type: "medium-zoom:" + type, listener, options: options2 });
    return zoom;
  };
  var off = function off2(type, listener) {
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    images.forEach(function(image) {
      image.removeEventListener("medium-zoom:" + type, listener, options2);
    });
    eventListeners = eventListeners.filter(function(eventListener) {
      return !(eventListener.type === "medium-zoom:" + type && eventListener.listener.toString() === listener.toString());
    });
    return zoom;
  };
  var open = function open2() {
    var _ref2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref2.target;
    var _animate = function _animate2() {
      var container = {
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      var viewportWidth = void 0;
      var viewportHeight = void 0;
      if (zoomOptions.container) {
        if (zoomOptions.container instanceof Object) {
          container = _extends({}, container, zoomOptions.container);
          viewportWidth = container.width - container.left - container.right - zoomOptions.margin * 2;
          viewportHeight = container.height - container.top - container.bottom - zoomOptions.margin * 2;
        } else {
          var zoomContainer = isNode(zoomOptions.container) ? zoomOptions.container : document.querySelector(zoomOptions.container);
          var _zoomContainer$getBou = zoomContainer.getBoundingClientRect(), _width = _zoomContainer$getBou.width, _height = _zoomContainer$getBou.height, _left = _zoomContainer$getBou.left, _top = _zoomContainer$getBou.top;
          container = _extends({}, container, {
            width: _width,
            height: _height,
            left: _left,
            top: _top
          });
        }
      }
      viewportWidth = viewportWidth || container.width - zoomOptions.margin * 2;
      viewportHeight = viewportHeight || container.height - zoomOptions.margin * 2;
      var zoomTarget = active.zoomedHd || active.original;
      var naturalWidth = isSvg(zoomTarget) ? viewportWidth : zoomTarget.naturalWidth || viewportWidth;
      var naturalHeight = isSvg(zoomTarget) ? viewportHeight : zoomTarget.naturalHeight || viewportHeight;
      var _zoomTarget$getBoundi = zoomTarget.getBoundingClientRect(), top = _zoomTarget$getBoundi.top, left = _zoomTarget$getBoundi.left, width = _zoomTarget$getBoundi.width, height = _zoomTarget$getBoundi.height;
      var scaleX = Math.min(Math.max(width, naturalWidth), viewportWidth) / width;
      var scaleY = Math.min(Math.max(height, naturalHeight), viewportHeight) / height;
      var scale = Math.min(scaleX, scaleY);
      var translateX = (-left + (viewportWidth - width) / 2 + zoomOptions.margin + container.left) / scale;
      var translateY = (-top + (viewportHeight - height) / 2 + zoomOptions.margin + container.top) / scale;
      var transform = "scale(" + scale + ") translate3d(" + translateX + "px, " + translateY + "px, 0)";
      active.zoomed.style.transform = transform;
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = transform;
      }
    };
    return new Promise2(function(resolve) {
      if (target && images.indexOf(target) === -1) {
        resolve(zoom);
        return;
      }
      var _handleOpenEnd = function _handleOpenEnd2() {
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleOpenEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:opened", {
          detail: { zoom }
        }));
        resolve(zoom);
      };
      if (active.zoomed) {
        resolve(zoom);
        return;
      }
      if (target) {
        active.original = target;
      } else if (images.length > 0) {
        var _images = images;
        active.original = _images[0];
      } else {
        resolve(zoom);
        return;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:open", {
        detail: { zoom }
      }));
      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      isAnimating = true;
      active.zoomed = cloneTarget(active.original);
      document.body.appendChild(overlay);
      if (zoomOptions.template) {
        var template = isNode(zoomOptions.template) ? zoomOptions.template : document.querySelector(zoomOptions.template);
        active.template = document.createElement("div");
        active.template.appendChild(template.content.cloneNode(true));
        document.body.appendChild(active.template);
      }
      if (active.original.parentElement && active.original.parentElement.tagName === "PICTURE" && active.original.currentSrc) {
        active.zoomed.src = active.original.currentSrc;
      }
      document.body.appendChild(active.zoomed);
      window.requestAnimationFrame(function() {
        document.body.classList.add("medium-zoom--opened");
      });
      active.original.classList.add("medium-zoom-image--hidden");
      active.zoomed.classList.add("medium-zoom-image--opened");
      active.zoomed.addEventListener("click", close);
      active.zoomed.addEventListener("transitionend", _handleOpenEnd);
      if (active.original.getAttribute("data-zoom-src")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("srcset");
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        active.zoomedHd.src = active.zoomed.getAttribute("data-zoom-src");
        active.zoomedHd.onerror = function() {
          clearInterval(getZoomTargetSize);
          console.warn("Unable to reach the zoom image target " + active.zoomedHd.src);
          active.zoomedHd = null;
          _animate();
        };
        var getZoomTargetSize = setInterval(function() {
          if (active.zoomedHd.complete) {
            clearInterval(getZoomTargetSize);
            active.zoomedHd.classList.add("medium-zoom-image--opened");
            active.zoomedHd.addEventListener("click", close);
            document.body.appendChild(active.zoomedHd);
            _animate();
          }
        }, 10);
      } else if (active.original.hasAttribute("srcset")) {
        active.zoomedHd = active.zoomed.cloneNode();
        active.zoomedHd.removeAttribute("sizes");
        active.zoomedHd.removeAttribute("loading");
        var loadEventListener = active.zoomedHd.addEventListener("load", function() {
          active.zoomedHd.removeEventListener("load", loadEventListener);
          active.zoomedHd.classList.add("medium-zoom-image--opened");
          active.zoomedHd.addEventListener("click", close);
          document.body.appendChild(active.zoomedHd);
          _animate();
        });
      } else {
        _animate();
      }
    });
  };
  var close = function close2() {
    return new Promise2(function(resolve) {
      if (isAnimating || !active.original) {
        resolve(zoom);
        return;
      }
      var _handleCloseEnd = function _handleCloseEnd2() {
        active.original.classList.remove("medium-zoom-image--hidden");
        document.body.removeChild(active.zoomed);
        if (active.zoomedHd) {
          document.body.removeChild(active.zoomedHd);
        }
        document.body.removeChild(overlay);
        active.zoomed.classList.remove("medium-zoom-image--opened");
        if (active.template) {
          document.body.removeChild(active.template);
        }
        isAnimating = false;
        active.zoomed.removeEventListener("transitionend", _handleCloseEnd2);
        active.original.dispatchEvent(createCustomEvent("medium-zoom:closed", {
          detail: { zoom }
        }));
        active.original = null;
        active.zoomed = null;
        active.zoomedHd = null;
        active.template = null;
        resolve(zoom);
      };
      isAnimating = true;
      document.body.classList.remove("medium-zoom--opened");
      active.zoomed.style.transform = "";
      if (active.zoomedHd) {
        active.zoomedHd.style.transform = "";
      }
      if (active.template) {
        active.template.style.transition = "opacity 150ms";
        active.template.style.opacity = 0;
      }
      active.original.dispatchEvent(createCustomEvent("medium-zoom:close", {
        detail: { zoom }
      }));
      active.zoomed.addEventListener("transitionend", _handleCloseEnd);
    });
  };
  var toggle = function toggle2() {
    var _ref3 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, target = _ref3.target;
    if (active.original) {
      return close();
    }
    return open({ target });
  };
  var getOptions = function getOptions2() {
    return zoomOptions;
  };
  var getImages = function getImages2() {
    return images;
  };
  var getZoomedImage = function getZoomedImage2() {
    return active.original;
  };
  var images = [];
  var eventListeners = [];
  var isAnimating = false;
  var scrollTop = 0;
  var zoomOptions = options;
  var active = {
    original: null,
    zoomed: null,
    zoomedHd: null,
    template: null
  };
  if (Object.prototype.toString.call(selector) === "[object Object]") {
    zoomOptions = selector;
  } else if (selector || typeof selector === "string") {
    attach(selector);
  }
  zoomOptions = _extends({
    margin: 0,
    background: "#fff",
    scrollOffset: 40,
    container: null,
    template: null
  }, zoomOptions);
  var overlay = createOverlay(zoomOptions.background);
  document.addEventListener("click", _handleClick);
  document.addEventListener("keyup", _handleKeyUp);
  document.addEventListener("scroll", _handleScroll);
  window.addEventListener("resize", close);
  var zoom = {
    open,
    close,
    toggle,
    update,
    clone,
    attach,
    detach,
    on,
    off,
    getOptions,
    getImages,
    getZoomedImage
  };
  return zoom;
};
function styleInject(css2, ref2) {
  if (ref2 === void 0)
    ref2 = {};
  var insertAt = ref2.insertAt;
  if (!css2 || typeof document === "undefined") {
    return;
  }
  var head = document.head || document.getElementsByTagName("head")[0];
  var style2 = document.createElement("style");
  style2.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style2, head.firstChild);
    } else {
      head.appendChild(style2);
    }
  } else {
    head.appendChild(style2);
  }
  if (style2.styleSheet) {
    style2.styleSheet.cssText = css2;
  } else {
    style2.appendChild(document.createTextNode(css2));
  }
}
var css = ".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";
styleInject(css);
var mediumZoom$1 = mediumZoom;
const splitHelp = (textarea) => {
  const text = textarea.value;
  const prefixStr = text.substring(0, textarea.selectionStart);
  const subfixStr = text.substring(textarea.selectionEnd, text.length);
  const prefixStrIndexOfLineCode = prefixStr.lastIndexOf("\n");
  const prefixStrEndRow = prefixStr.substring(0, prefixStrIndexOfLineCode + 1);
  const subfixStrIndexOfLineCode = subfixStr.indexOf("\n");
  const subfixStrEndRow = subfixStr.substring(subfixStrIndexOfLineCode === -1 ? subfixStr.length : subfixStrIndexOfLineCode, subfixStr.length);
  const prefixSupply = prefixStr.substring(prefixStrIndexOfLineCode + 1, prefixStr.length);
  const subfixSupply = subfixStr.substring(0, subfixStrIndexOfLineCode);
  return {
    prefixStr,
    subfixStr,
    prefixStrEndRow,
    subfixStrEndRow,
    prefixSupply,
    subfixSupply
  };
};
const directive2flag = (direct, selectedText = "", inputArea, params) => {
  var _a, _b, _c, _d, _e, _f;
  let targetValue = "";
  let deviationStart = 0;
  let deviationEnd = 0;
  let select = false;
  let prefixVal;
  let subfixVal;
  const mermaidTemplate = (_a = configOption.editorConfig) == null ? void 0 : _a.mermaidTemplate;
  if (/^h[1-6]{1}$/.test(direct)) {
    const pix = direct.replace(/^h(\d)/, (_, num) => {
      return new Array(Number(num)).fill("#", 0, num).join("");
    });
    targetValue = `${pix} ${selectedText}`;
    deviationStart = pix.length + 1;
  } else if (direct === "prettier") {
    const prettier = window.prettier || ((_c = (_b = configOption.editorExtensions) == null ? void 0 : _b.prettier) == null ? void 0 : _c.prettierInstance);
    const prettierPlugins = [
      ((_d = window.prettierPlugins) == null ? void 0 : _d.markdown) || ((_f = (_e = configOption.editorExtensions) == null ? void 0 : _e.prettier) == null ? void 0 : _f.parserMarkdownInstance)
    ];
    if (!prettier || prettierPlugins[0] === void 0) {
      bus.emit(params.editorId, "errorCatcher", {
        name: "prettier",
        message: "prettier is undefined"
      });
      return inputArea.value;
    }
    return prettier.format(inputArea.value, {
      parser: "markdown",
      plugins: prettierPlugins
    });
  } else {
    switch (direct) {
      case "bold": {
        targetValue = `**${selectedText}**`;
        deviationStart = 2;
        deviationEnd = -2;
        break;
      }
      case "underline": {
        targetValue = `<u>${selectedText}</u>`;
        deviationStart = 3;
        deviationEnd = -4;
        break;
      }
      case "italic": {
        targetValue = `*${selectedText}*`;
        deviationStart = 1;
        deviationEnd = -1;
        break;
      }
      case "strikeThrough": {
        targetValue = `~~${selectedText}~~`;
        deviationStart = 2;
        deviationEnd = -2;
        break;
      }
      case "sub": {
        targetValue = `~${selectedText}~`;
        deviationStart = 1;
        deviationEnd = -1;
        break;
      }
      case "sup": {
        targetValue = `^${selectedText}^`;
        deviationStart = 1;
        deviationEnd = -1;
        break;
      }
      case "codeRow": {
        targetValue = "`" + selectedText + "`";
        deviationStart = 1;
        deviationEnd = -1;
        break;
      }
      case "quote": {
        targetValue = `> ${selectedText}`;
        deviationStart = 2;
        break;
      }
      case "orderedList": {
        targetValue = `1. ${selectedText}`;
        deviationStart = 3;
        break;
      }
      case "unorderedList": {
        targetValue = `- ${selectedText}`;
        deviationStart = 2;
        break;
      }
      case "task": {
        targetValue = `- [ ] ${selectedText}`;
        deviationStart = 6;
        select = true;
        break;
      }
      case "code": {
        const text = params.text || selectedText || "";
        const mode = params.mode || "language";
        targetValue = `\`\`\`${mode}
${text}
\`\`\`
`;
        deviationStart = 3;
        deviationEnd = 3 + mode.length - targetValue.length;
        select = true;
        break;
      }
      case "table": {
        targetValue = "|";
        const { selectedShape = { x: 1, y: 1 } } = params;
        const { x, y } = selectedShape;
        for (let i = 0; i <= y; i++) {
          targetValue += " col |";
        }
        targetValue += "\n|";
        for (let i = 0; i <= y; i++) {
          targetValue += " --- |";
        }
        for (let row = 0; row <= x; row++) {
          targetValue += "\n|";
          for (let col = 0; col <= y; col++) {
            targetValue += " content |";
          }
        }
        deviationStart = 2;
        deviationEnd = 5 - targetValue.length;
        select = true;
        break;
      }
      case "link": {
        const { desc, url } = params;
        targetValue = `[${desc}](${url})`;
        break;
      }
      case "image": {
        const { desc, url, urls } = params;
        if (urls instanceof Array) {
          targetValue = urls.reduce((pVal, url2) => {
            return pVal + `![${desc}](${url2})
`;
          }, "");
        } else {
          targetValue = `![${desc}](${url})
`;
        }
        break;
      }
      case "tab": {
        const { tabWidth = 2 } = params;
        const retract = new Array(tabWidth).fill(" ").join("");
        if (selectedText === "") {
          targetValue = retract;
        } else if (/\n/.test(selectedText)) {
          const { prefixStr, subfixStr, prefixSupply, subfixSupply } = splitHelp(inputArea);
          const str2adjust = `${prefixSupply}${selectedText}${subfixSupply}`;
          const str2AdjustRows = str2adjust.split("\n");
          targetValue = str2AdjustRows.map((strItem) => {
            return `${retract}${strItem}`;
          }).join("\n");
          prefixVal = prefixStr.substring(0, prefixStr.length - prefixSupply.length);
          subfixVal = subfixStr.substring(subfixSupply.length, subfixStr.length);
          select = true;
          deviationStart = tabWidth;
          deviationEnd = -prefixSupply.length - subfixSupply.length;
        } else {
          const mdText = inputArea.value;
          const prefixStr = mdText.substring(0, inputArea.selectionStart);
          if (/\n$/.test(prefixStr) || prefixStr === "") {
            targetValue = `${retract}${selectedText}`;
            select = true;
          } else {
            targetValue = retract;
          }
        }
        break;
      }
      case "shiftTab": {
        const { tabWidth = 2 } = params;
        const {
          prefixStr,
          prefixStrEndRow,
          subfixStrEndRow,
          prefixSupply,
          subfixSupply
        } = splitHelp(inputArea);
        const normalReg = new RegExp(`^\\s{${tabWidth}}`);
        const notMultiRow = (selected = false, row = false) => {
          const str2adjust = `${prefixSupply}${selectedText}${subfixSupply}`;
          if (normalReg.test(str2adjust)) {
            const startPos = prefixStr.length - (row ? 0 : tabWidth);
            const endPos = selected ? startPos + selectedText.length - tabWidth : startPos;
            setPosition(inputArea, startPos, endPos);
            return `${prefixStrEndRow}${str2adjust.replace(normalReg, "")}${subfixStrEndRow}`;
          } else if (/^\s/.test(str2adjust)) {
            const deletedTabStr = str2adjust.replace(/^\s/, "");
            const deletedLength = str2adjust.length - deletedTabStr.length;
            const startPos = inputArea.selectionStart - (row ? 0 : deletedLength);
            const endPos = selected ? startPos + selectedText.length - deletedLength : startPos;
            setPosition(inputArea, startPos, endPos);
            return `${prefixStrEndRow}${deletedTabStr}${subfixStrEndRow}`;
          } else {
            targetValue = selectedText;
          }
        };
        if (selectedText === "") {
          const newContent = notMultiRow();
          if (newContent) {
            return newContent;
          }
        } else if (/\n/.test(selectedText)) {
          const str2adjust = `${prefixSupply}${selectedText}${subfixSupply}`;
          const str2AdjustRows = str2adjust.split("\n");
          let [firstRowDelNum, totalRowDelNum] = [0, 0];
          const str2AdjustRowsMod = str2AdjustRows.map((strItem, index2) => {
            if (normalReg.test(strItem)) {
              if (index2 === 0) {
                firstRowDelNum = tabWidth;
              }
              totalRowDelNum += tabWidth;
              return strItem.replace(normalReg, "");
            } else if (/^\s/.test(strItem)) {
              const deletedTabStr = strItem.replace(/^\s/, "");
              totalRowDelNum += strItem.length - deletedTabStr.length;
              return deletedTabStr;
            }
            return strItem;
          }).join("\n");
          setPosition(inputArea, inputArea.selectionStart - firstRowDelNum, inputArea.selectionEnd - totalRowDelNum);
          return `${prefixStrEndRow}${str2AdjustRowsMod}${subfixStrEndRow}`;
        } else {
          const newContent = notMultiRow(true, true);
          if (newContent) {
            return newContent;
          }
        }
        break;
      }
      case "ctrlC": {
        const { prefixSupply, subfixSupply } = splitHelp(inputArea);
        if (selectedText === "") {
          copyToClipboard(`${prefixSupply}${subfixSupply}`);
        } else {
          copyToClipboard(selectedText);
        }
        return inputArea.value;
      }
      case "ctrlX": {
        const {
          prefixStrEndRow,
          subfixStrEndRow,
          prefixStr,
          subfixStr,
          prefixSupply,
          subfixSupply
        } = splitHelp(inputArea);
        if (selectedText === "") {
          copyToClipboard(`${prefixSupply}${subfixSupply}`);
          setPosition(inputArea, prefixStrEndRow.length);
          return `${prefixStrEndRow}${subfixStrEndRow.replace(/^\n/, "")}`;
        } else {
          copyToClipboard(selectedText);
          setPosition(inputArea, prefixStr.length);
          return `${prefixStr}${subfixStr}`;
        }
      }
      case "ctrlD": {
        const { prefixStrEndRow, subfixStrEndRow } = splitHelp(inputArea);
        setPosition(inputArea, prefixStrEndRow.length);
        return `${prefixStrEndRow}${subfixStrEndRow.replace(/^\n/, "")}`;
      }
      case "flow": {
        targetValue = `\`\`\`mermaid
${(mermaidTemplate == null ? void 0 : mermaidTemplate.flow) || "flowchart TD \n  Start --> Stop"}
\`\`\`
`;
        deviationStart = 2;
        break;
      }
      case "sequence": {
        targetValue = `\`\`\`mermaid
${(mermaidTemplate == null ? void 0 : mermaidTemplate.sequence) || "sequenceDiagram\n  A->>B: hello!\n  B-->>A: hi!\n  A-)B: bye!"}
\`\`\`
`;
        deviationStart = 2;
        break;
      }
      case "gantt": {
        targetValue = `\`\`\`mermaid
${(mermaidTemplate == null ? void 0 : mermaidTemplate.gantt) || "gantt\ntitle A Gantt Diagram\ndateFormat  YYYY-MM-DD\nsection Section\nA task  :a1, 2014-01-01, 30d\nAnother task  :after a1, 20d"}
\`\`\`
`;
        deviationStart = 2;
        break;
      }
      case "class": {
        targetValue = `\`\`\`mermaid
${(mermaidTemplate == null ? void 0 : mermaidTemplate.class) || "classDiagram\n  class Animal\n  Vehicle <|-- Car"}
\`\`\`
`;
        deviationStart = 2;
        break;
      }
      case "state": {
        targetValue = `\`\`\`mermaid
${(mermaidTemplate == null ? void 0 : mermaidTemplate.state) || "stateDiagram-v2\n  s1 --> s2"}
\`\`\`
`;
        deviationStart = 2;
        break;
      }
      case "pie": {
        targetValue = `\`\`\`mermaid
${(mermaidTemplate == null ? void 0 : mermaidTemplate.pie) || 'pie title Pets adopted by volunteers\n  "Dogs" : 386\n  "Cats" : 85\n  "Rats" : 15'}
\`\`\`
`;
        deviationStart = 2;
        break;
      }
      case "relationship": {
        targetValue = `\`\`\`mermaid
${(mermaidTemplate == null ? void 0 : mermaidTemplate.relationship) || "erDiagram\n  CAR ||--o{ NAMED-DRIVER : allows\n  PERSON ||--o{ NAMED-DRIVER : is"}
\`\`\`
`;
        deviationStart = 2;
        break;
      }
      case "journey": {
        targetValue = `\`\`\`mermaid
${(mermaidTemplate == null ? void 0 : mermaidTemplate.journey) || "journey\n  title My working day\n  section Go to work\n    Make tea: 5: Me\n    Go upstairs: 3: Me\n    Do work: 1: Me, Cat\n  section Go home\n    Go downstairs: 5: Me\n    Sit down: 5: Me"}
\`\`\`
`;
        deviationStart = 2;
        break;
      }
      case "katexInline": {
        targetValue = "$$";
        deviationStart = 1;
        deviationEnd = -1;
        break;
      }
      case "katexBlock": {
        targetValue = "$$\n\n$$\n";
        deviationStart = 1;
        deviationEnd = -4;
        break;
      }
      case "universal": {
        const { generate } = params;
        const insertOptions = generate(selectedText);
        targetValue = insertOptions.targetValue;
        select = insertOptions.select;
        deviationStart = insertOptions.deviationStart;
        deviationEnd = insertOptions.deviationEnd;
      }
    }
  }
  return insert(inputArea, targetValue, {
    deviationStart,
    deviationEnd,
    select,
    prefixVal,
    subfixVal
  });
};
const useHistory = (props, textAreaRef, completeStatus) => {
  var _a, _b;
  const previewOnly = inject("previewOnly");
  const historyLength = inject("historyLength");
  const editorId = inject("editorId");
  if (previewOnly) {
    return;
  }
  let saveHistoryId = -1;
  const history = {
    list: [
      {
        content: props.value,
        startPos: ((_a = textAreaRef.value) == null ? void 0 : _a.selectionStart) || 0,
        endPos: ((_b = textAreaRef.value) == null ? void 0 : _b.selectionEnd) || 0
      }
    ],
    userUpdated: true,
    curr: 0
  };
  const POSITION_START = [0, 0];
  let historyPos = POSITION_START;
  const keyZCallback = (curr) => {
    var _a2, _b2;
    const startPos = ((_a2 = textAreaRef.value) == null ? void 0 : _a2.selectionStart) || 0;
    const endPos = ((_b2 = textAreaRef.value) == null ? void 0 : _b2.selectionEnd) || 0;
    history.list[history.curr].startPos = startPos;
    history.list[history.curr].endPos = endPos;
    history.userUpdated = false;
    history.curr = curr;
    const currHistory = history.list[history.curr];
    historyPos = [currHistory.startPos, currHistory.endPos];
    props.onChange(currHistory.content);
    setPosition(textAreaRef.value, currHistory.startPos, currHistory.endPos).then(() => {
      bus.emit(editorId, "selectTextChange");
    });
  };
  const saveHistory = (content) => {
    var _a2, _b2;
    clearTimeout(saveHistoryId);
    const startPos = ((_a2 = textAreaRef.value) == null ? void 0 : _a2.selectionStart) || 0;
    const endPos = ((_b2 = textAreaRef.value) == null ? void 0 : _b2.selectionEnd) || 0;
    saveHistoryId = setTimeout(() => {
      if (history.userUpdated) {
        if (history.curr < history.list.length - 1) {
          history.list = history.list.slice(0, history.curr + 1);
        }
        if (history.list.length > historyLength) {
          history.list.shift();
        }
        const lastStep = history.list.pop() || {
          startPos: 0,
          endPos: 0,
          content
        };
        lastStep.startPos = historyPos[0];
        lastStep.endPos = historyPos[1];
        historyPos = POSITION_START;
        Array.prototype.push.call(history.list, lastStep, {
          content,
          startPos,
          endPos
        });
        history.curr = history.list.length - 1;
      } else {
        history.userUpdated = true;
      }
    }, 150);
  };
  const saveHistoryPos = (force) => {
    var _a2, _b2;
    if (historyPos === POSITION_START || force) {
      historyPos = [(_a2 = textAreaRef.value) == null ? void 0 : _a2.selectionStart, (_b2 = textAreaRef.value) == null ? void 0 : _b2.selectionEnd];
    }
  };
  watch([toRef(props, "value"), completeStatus], () => {
    if (completeStatus.value) {
      saveHistory(props.value);
    }
  });
  watch(() => props.value, () => {
    bus.emit(editorId, "selectTextChange");
  }, {
    flush: "post"
  });
  onMounted(() => {
    bus.on(editorId, {
      name: "ctrlZ",
      callback() {
        keyZCallback(history.curr - 1 < 0 ? 0 : history.curr - 1);
      }
    });
    bus.on(editorId, {
      name: "ctrlShiftZ",
      callback() {
        keyZCallback(history.curr + 1 === history.list.length ? history.curr : history.curr + 1);
      }
    });
    bus.on(editorId, {
      name: "saveHistoryPos",
      callback: saveHistoryPos
    });
  });
};
const useServerSide = (props, mermaidData) => {
  const convertedMd = ref(null);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + props.previewBearer
    },
    body: JSON.stringify({ inputFormat: "MD", outputFormat: "HTML", input: "-" })
  };
  const editorId = inject("editorId");
  const html = ref(props.value);
  const markHtml = debounce(() => {
    requestOptions.body = JSON.stringify({
      inputFormat: "MD",
      outputFormat: "HTML",
      input: props.value
    });
    fetch(props.previewUrl, requestOptions).then((response) => response.json()).then((data) => {
      convertedMd.value = data;
      const convertedValue = convertedMd.value ? convertedMd.value : { output: "" };
      const _html = convertedValue == null ? void 0 : convertedValue.output;
      html.value = _html;
      bus.emit(editorId, "buildFinished", _html);
      props.onHtmlChanged(_html);
    });
  }, 500);
  watch([toRef(props, "value")], markHtml);
  return { html };
};
const useAutoScroll = (props, html, textAreaRef, previewRef, htmlRef) => {
  const previewOnly = inject("previewOnly");
  const ult = inject("usedLanguageText");
  const editorId = inject("editorId");
  let clearScrollAuto = () => {
  };
  let initScrollAuto = () => {
  };
  const initCopyEntry = () => {
    document.querySelectorAll(`#${editorId}-preview pre`).forEach((pre) => {
      var _a, _b;
      (_a = pre.querySelector(".copy-button")) == null ? void 0 : _a.remove();
      const copyBtnText = ((_b = ult.value.copyCode) == null ? void 0 : _b.text) || "\u590D\u5236\u4EE3\u7801";
      const copyButton = document.createElement("span");
      copyButton.setAttribute("class", "copy-button");
      copyButton.innerText = copyBtnText;
      copyButton.addEventListener("click", () => {
        var _a2, _b2;
        const codeText = pre.querySelector("code").innerText;
        const success = copyToClipboard(props.formatCopiedText(codeText));
        const succssTip = ((_a2 = ult.value.copyCode) == null ? void 0 : _a2.successTips) || "\u5DF2\u590D\u5236\uFF01";
        const failTip = ((_b2 = ult.value.copyCode) == null ? void 0 : _b2.failTips) || "\u5DF2\u590D\u5236\uFF01";
        copyButton.innerText = success ? succssTip : failTip;
        setTimeout(() => {
          copyButton.innerText = copyBtnText;
        }, 1500);
      });
      pre.appendChild(copyButton);
    });
  };
  const htmlChanged = () => {
    nextTick(() => {
      if (props.setting.preview && !previewOnly && props.scrollAuto) {
        clearScrollAuto();
        initScrollAuto();
      }
      initCopyEntry();
    });
  };
  const settingPreviewChanged = (nVal) => {
    if (nVal && !previewOnly) {
      nextTick(() => {
        clearScrollAuto();
        [initScrollAuto, clearScrollAuto] = scrollAuto(textAreaRef.value, previewRef.value || htmlRef.value);
        initScrollAuto();
      });
    }
  };
  watch(() => html.value, htmlChanged);
  watch(() => ult.value, initCopyEntry);
  watch(() => props.setting.preview, settingPreviewChanged);
  watch(() => props.setting.htmlPreview, settingPreviewChanged);
  watch(() => props.scrollAuto, (sa) => {
    if (sa) {
      initScrollAuto();
    } else {
      clearScrollAuto();
    }
  });
  onMounted(() => {
    initCopyEntry();
    if (!previewOnly && (previewRef.value || htmlRef.value)) {
      [initScrollAuto, clearScrollAuto] = scrollAuto(textAreaRef.value, previewRef.value || htmlRef.value);
    }
    if (props.scrollAuto) {
      initScrollAuto();
    }
  });
};
const useAutoGenrator = (props, textAreaRef) => {
  const previewOnly = inject("previewOnly");
  const tabWidth = inject("tabWidth");
  const editorId = inject("editorId");
  const selectedText = ref("");
  onMounted(() => {
    var _a;
    if (!previewOnly) {
      (_a = textAreaRef.value) == null ? void 0 : _a.addEventListener("keypress", (event) => {
        var _a2, _b, _c;
        if (event.key === "Enter") {
          const endPoint = (_a2 = textAreaRef.value) == null ? void 0 : _a2.selectionStart;
          const prefixStr = (_b = textAreaRef.value) == null ? void 0 : _b.value.substring(0, endPoint);
          const subStr = (_c = textAreaRef.value) == null ? void 0 : _c.value.substring(endPoint);
          const lastIndexBR = prefixStr == null ? void 0 : prefixStr.lastIndexOf("\n");
          const enterPressRow = prefixStr == null ? void 0 : prefixStr.substring(lastIndexBR + 1, endPoint);
          if (/^\d+\.\s|^-\s/.test(enterPressRow)) {
            event.cancelBubble = true;
            event.preventDefault();
            event.stopPropagation();
            if (/^(\d+\.|-)\s+(\[[x\s]\]\s+)?$/.test(enterPressRow)) {
              const resetPrefixStr = prefixStr == null ? void 0 : prefixStr.replace(/(\d+\.|-)\s+(\[[x\s]\]\s+)?$/, "");
              props.onChange(resetPrefixStr + subStr);
              setPosition(textAreaRef.value, resetPrefixStr == null ? void 0 : resetPrefixStr.length);
            } else if (/^-\s+.+/.test(enterPressRow)) {
              const newLine = /^-\s+\[[x\s]\]/.test(enterPressRow) ? "\n- [ ] " : "\n- ";
              props.onChange(insert(textAreaRef.value, newLine, {}));
            } else {
              const lastOrderMatch = enterPressRow == null ? void 0 : enterPressRow.match(/\d+(?=\.)/);
              const nextOrder = lastOrderMatch && Number(lastOrderMatch[0]) + 1 || 1;
              const newLine = /^\d\.\s+\[[x\s]\]/.test(enterPressRow) ? `
${nextOrder}. [ ] ` : `
${nextOrder}. `;
              props.onChange(insert(textAreaRef.value, newLine, {}));
            }
          }
        }
      });
      bus.on(editorId, {
        name: "replace",
        callback(direct, params = {}) {
          props.onChange(directive2flag(direct, selectedText.value, textAreaRef.value, __spreadProps(__spreadValues({}, params), {
            tabWidth,
            editorId
          })));
        }
      });
      bus.on(editorId, {
        name: "selectTextChange",
        callback() {
          selectedText.value = getSelectionText(textAreaRef.value);
        }
      });
    }
  });
  watch(() => props.value, () => {
    selectedText.value = "";
  });
};
const useMermaid = (props) => {
  const theme = inject("theme");
  const { editorExtensions } = configOption;
  const mermaidConf = editorExtensions == null ? void 0 : editorExtensions.mermaid;
  const mermaidData = reactive({
    reRender: false,
    mermaidInited: !!(mermaidConf == null ? void 0 : mermaidConf.instance)
  });
  const reSetMermaidTheme = () => {
    if (!props.noMermaid) {
      if (mermaidConf == null ? void 0 : mermaidConf.instance) {
        mermaidConf.instance.initialize({
          theme: theme.value === "dark" ? "dark" : "default"
        });
      } else if (window.mermaid) {
        window.mermaid.initialize({
          theme: theme.value === "dark" ? "dark" : "default"
        });
      }
      mermaidData.reRender = !mermaidData.reRender;
    }
  };
  watch(() => theme.value, reSetMermaidTheme);
  let mermaidScript;
  onMounted(() => {
    if (!props.noMermaid && !(mermaidConf == null ? void 0 : mermaidConf.instance)) {
      mermaidScript = document.createElement("script");
      mermaidScript.src = (mermaidConf == null ? void 0 : mermaidConf.js) || mermaidUrl;
      mermaidScript.onload = () => {
        window.mermaid.initialize({
          theme: theme.value === "dark" ? "dark" : "default",
          logLevel: "Fatal"
        });
        mermaidData.mermaidInited = true;
      };
      mermaidScript.id = `${prefix}-mermaid`;
      appendHandler(mermaidScript, "mermaid");
    } else if (!props.noMermaid) {
      reSetMermaidTheme();
    }
  });
  return mermaidData;
};
const usePasteUpload = (props, textAreaRef) => {
  const editorId = inject("editorId");
  const previewOnly = inject("previewOnly");
  const pasteHandler = (e) => {
    if (!e.clipboardData) {
      return;
    }
    if (e.clipboardData.files.length > 0) {
      const { files } = e.clipboardData;
      bus.emit(editorId, "uploadImage", Array.from(files).filter((file) => {
        return /image\/.*/.test(file.type);
      }));
      e.preventDefault();
    }
    if (props.autoDetectCode && e.clipboardData.types.includes("vscode-editor-data")) {
      const vscCoodInfo = JSON.parse(e.clipboardData.getData("vscode-editor-data"));
      bus.emit(editorId, "replace", "code", {
        mode: vscCoodInfo.mode,
        text: e.clipboardData.getData("text/plain")
      });
      e.preventDefault();
    }
  };
  onMounted(() => {
    if (!previewOnly) {
      textAreaRef.value.addEventListener("paste", pasteHandler);
    }
  });
  onBeforeUnmount(() => {
    if (!previewOnly) {
      textAreaRef.value.removeEventListener("paste", pasteHandler);
    }
  });
};
const userZoom = (props, html) => {
  const editorId = inject("editorId");
  const zoomHander = debounce(() => {
    const imgs = document.querySelectorAll(`#${editorId}-preview img[zoom]`);
    if (imgs.length === 0) {
      return;
    }
    mediumZoom$1(imgs, {
      background: "#00000073"
    });
  });
  onMounted(zoomHander);
  watch([html, toRef(props.setting, "preview")], zoomHander);
};
const useAttach = (textAreaRef) => {
  const editorId = inject("editorId");
  onMounted(() => {
    bus.on(editorId, {
      name: TEXTAREA_FOCUS,
      callback() {
        var _a;
        (_a = textAreaRef.value) == null ? void 0 : _a.focus();
      }
    });
  });
};
const contentProps = () => ({
  value: {
    type: String,
    default: ""
  },
  onChange: {
    type: Function,
    default: () => {
    }
  },
  setting: {
    type: Object,
    default: () => ({})
  },
  onHtmlChanged: {
    type: Function,
    default: () => {
    }
  },
  onGetCatalog: {
    type: Function,
    default: () => {
    }
  },
  markedHeadingId: {
    type: Function,
    default: () => ""
  },
  noMermaid: {
    type: Boolean,
    default: false
  },
  sanitize: {
    type: Function,
    default: (html) => html
  },
  placeholder: {
    type: String,
    default: ""
  },
  noKatex: {
    type: Boolean,
    default: false
  },
  scrollAuto: {
    type: Boolean
  },
  formatCopiedText: {
    type: Function,
    default: (text) => text
  },
  autofocus: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  readonly: {
    type: Boolean
  },
  maxlength: {
    type: Number
  },
  autoDetectCode: {
    type: Boolean
  },
  previewUrl: {
    type: String,
    default: ""
  },
  previewBearer: {
    type: String,
    default: ""
  }
});
var Content = defineComponent({
  name: "MDEditorContent",
  props: contentProps(),
  setup(props) {
    const completeStatus = ref(true);
    const previewOnly = inject("previewOnly");
    const showCodeRowNumber = inject("showCodeRowNumber");
    const previewTheme = inject("previewTheme");
    const editorId = inject("editorId");
    const textAreaRef = ref();
    const previewRef = ref();
    const htmlRef = ref();
    useMermaid(props);
    const {
      html
    } = useServerSide(props);
    useAutoScroll(props, html, textAreaRef, previewRef, htmlRef);
    useAutoGenrator(props, textAreaRef);
    useHistory(props, textAreaRef, completeStatus);
    usePasteUpload(props, textAreaRef);
    userZoom(props, html);
    useAttach(textAreaRef);
    return () => {
      const attrs = omit(props, ["formatCopiedText", "markedHeadingId", "noKatex", "noMermaid", "onChange", "onGetCatalog", "onHtmlChanged", "sanitize", "scrollAuto", "setting", "autoDetectCode"]);
      return createVNode(Fragment, null, [createVNode("div", {
        "class": `${prefix}-content`
      }, [!previewOnly && createVNode("div", {
        "class": `${prefix}-input-wrapper`
      }, [createVNode("textarea", mergeProps(attrs, {
        "id": `${editorId}-textarea`,
        "ref": textAreaRef,
        "onBlur": () => {
          bus.emit(editorId, "selectTextChange");
        },
        "onKeydown": () => {
          bus.emit(editorId, "saveHistoryPos", true);
        },
        "onCompositionstart": () => {
          completeStatus.value = false;
        },
        "onInput": (e) => {
          props.onChange(e.target.value);
        },
        "onCompositionend": () => {
          completeStatus.value = true;
        },
        "class": [props.setting.preview || props.setting.htmlPreview ? "" : "textarea-only"]
      }), null)]), props.setting.preview && createVNode("div", {
        "id": `${editorId}-preview-wrapper`,
        "class": `${prefix}-preview-wrapper`,
        "ref": previewRef,
        "key": "content-preview-wrapper"
      }, [createVNode("article", {
        "id": `${editorId}-preview`,
        "class": [`${prefix}-preview`, `${previewTheme == null ? void 0 : previewTheme.value}-theme`, showCodeRowNumber && `${prefix}-scrn`],
        "innerHTML": html.value
      }, null)]), props.setting.htmlPreview && createVNode("div", {
        "class": `${prefix}-preview-wrapper`,
        "ref": htmlRef,
        "key": "html-preview-wrapper"
      }, [createVNode("div", {
        "class": `${prefix}-html`
      }, [html.value])])])]);
    };
  }
});
var MarkdownTotal = defineComponent({
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const ult = inject("usedLanguageText");
    return () => {
      var _a, _b;
      return createVNode("div", {
        "class": `${prefix}-footer-item`
      }, [createVNode("label", {
        "class": `${prefix}-footer-label`
      }, [`${(_a = ult.value.footer) == null ? void 0 : _a.markdownTotal}:`]), createVNode("span", null, [((_b = props.modelValue) == null ? void 0 : _b.length) || 0])]);
    };
  }
});
var style$1 = "";
const checkboxProps = () => ({
  checked: {
    type: Boolean,
    default: false
  },
  onChange: {
    type: Function,
    default: () => {
    }
  }
});
var Checkbox = defineComponent({
  props: checkboxProps(),
  setup(props) {
    return () => {
      return createVNode("div", {
        "class": [`${prefix}-checkbox`, props.checked && `${prefix}-checkbox-checked`],
        "onClick": () => {
          props.onChange(!props.checked);
        }
      }, null);
    };
  }
});
const scrollAutoProps = () => ({
  scrollAuto: {
    type: Boolean
  },
  onScrollAutoChange: {
    type: Function,
    default: () => {
    }
  }
});
var ScrollAuto = defineComponent({
  props: scrollAutoProps(),
  setup(props) {
    const ult = inject("usedLanguageText");
    return () => {
      var _a;
      return createVNode("div", {
        "class": `${prefix}-footer-item`
      }, [createVNode("label", {
        "class": `${prefix}-footer-label`,
        "onClick": () => {
          props.onScrollAutoChange(!props.scrollAuto);
        }
      }, [(_a = ult.value.footer) == null ? void 0 : _a.scrollAuto]), createVNode(Checkbox, {
        "checked": props.scrollAuto,
        "onChange": props.onScrollAutoChange
      }, null)]);
    };
  }
});
const footerProps = () => ({
  modelValue: {
    type: String,
    default: ""
  },
  footers: {
    type: Array,
    default: []
  },
  scrollAuto: {
    type: Boolean
  },
  onScrollAutoChange: {
    type: Function,
    default: () => {
    }
  },
  defFooters: {
    type: Object
  }
});
var Footer = defineComponent({
  name: "MDEditorFooter",
  props: footerProps(),
  setup(props) {
    const splitedItems = computed(() => {
      const moduleSplitIndex = props.footers.indexOf("=");
      const barLeft = moduleSplitIndex === -1 ? props.footers : props.footers.slice(0, moduleSplitIndex);
      const barRight = moduleSplitIndex === -1 ? [] : props.footers.slice(moduleSplitIndex, Number.MAX_SAFE_INTEGER);
      return [barLeft, barRight];
    });
    const footerRender = (name) => {
      if (allFooter.includes(name)) {
        switch (name) {
          case "markdownTotal": {
            return createVNode(MarkdownTotal, {
              "modelValue": props.modelValue
            }, null);
          }
          case "scrollSwitch": {
            return createVNode(ScrollAuto, {
              "scrollAuto": props.scrollAuto,
              "onScrollAutoChange": props.onScrollAutoChange
            }, null);
          }
        }
      } else if (props.defFooters instanceof Array) {
        return props.defFooters[name] || "";
      } else if (props.defFooters && props.defFooters.children instanceof Array) {
        return props.defFooters.children[name] || "";
      } else {
        return "";
      }
    };
    return () => {
      const LeftFooter = splitedItems.value[0].map((name) => footerRender(name));
      const RightFooter = splitedItems.value[1].map((name) => footerRender(name));
      return createVNode("div", {
        "class": `${prefix}-footer`
      }, [createVNode("div", {
        "class": `${prefix}-footer-left`
      }, [LeftFooter]), createVNode("div", {
        "class": `${prefix}-footer-right`
      }, [RightFooter])]);
    };
  }
});
const catalogLinkProps = () => ({
  tocItem: {
    type: Object,
    default: () => ({})
  },
  markedHeadingId: {
    type: Function,
    default: () => {
    }
  },
  scrollElement: {
    type: [String, Object],
    default: ""
  },
  onClick: {
    type: Function,
    default: () => {
    }
  },
  scrollElementOffsetTop: {
    type: Number,
    default: 0
  }
});
const CatalogLink = defineComponent({
  props: catalogLinkProps(),
  setup(props) {
    return () => {
      const {
        tocItem,
        markedHeadingId: markedHeadingId2,
        scrollElement,
        onClick,
        scrollElementOffsetTop
      } = props;
      return createVNode("div", {
        "class": [`${prefix}-catalog-link`, tocItem.active && `${prefix}-catalog-active`],
        "onClick": (e) => {
          onClick(e, tocItem);
          e.stopPropagation();
          const id = markedHeadingId2(tocItem.text, tocItem.level, tocItem.index);
          const targetHeadEle = document.getElementById(id);
          const scrollContainer = scrollElement instanceof Element ? scrollElement : document.querySelector(scrollElement);
          if (targetHeadEle && scrollContainer) {
            let par = targetHeadEle.offsetParent;
            let offsetTop = targetHeadEle.offsetTop;
            if (scrollContainer.contains(par)) {
              while (par && scrollContainer != par) {
                offsetTop += par == null ? void 0 : par.offsetTop;
                par = par == null ? void 0 : par.offsetParent;
              }
            }
            scrollContainer == null ? void 0 : scrollContainer.scrollTo({
              top: offsetTop - scrollElementOffsetTop,
              behavior: "smooth"
            });
          }
        }
      }, [createVNode("span", {
        "title": tocItem.text
      }, [tocItem.text]), createVNode("div", {
        "class": `${prefix}-catalog-wrapper`
      }, [tocItem.children && tocItem.children.map((item) => createVNode(CatalogLink, {
        "markedHeadingId": markedHeadingId2,
        "key": `${tocItem.text}-link-${item.level}-${item.text}`,
        "tocItem": item,
        "scrollElement": scrollElement,
        "onClick": onClick,
        "scrollElementOffsetTop": scrollElementOffsetTop
      }, null))])]);
    };
  }
});
var style = "";
const mdCatalogProps = () => ({
  editorId: {
    type: String
  },
  class: {
    type: String,
    default: ""
  },
  markedHeadingId: {
    type: Function,
    default: (text) => text
  },
  scrollElement: {
    type: [String, Object]
  },
  theme: {
    type: String,
    default: "light"
  },
  offsetTop: {
    type: Number,
    default: 20
  },
  scrollElementOffsetTop: {
    type: Number,
    default: 0
  },
  onClick: {
    type: Function,
    default: () => {
    }
  }
});
const MdCatalog = defineComponent({
  name: "MdCatalog",
  props: mdCatalogProps(),
  emits: ["onClick"],
  setup(props, ctx) {
    const editorId = props.editorId;
    const state = reactive({
      list: [],
      show: false,
      scrollElement: props.scrollElement || `#${editorId}-preview-wrapper`
    });
    const catalogs = computed(() => {
      const tocItems = [];
      state.list.forEach(({
        text,
        level,
        active
      }, index2) => {
        const item = {
          level,
          text,
          index: index2 + 1,
          active: !!active
        };
        if (tocItems.length === 0) {
          tocItems.push(item);
        } else {
          let lastItem = tocItems[tocItems.length - 1];
          if (item.level > lastItem.level) {
            for (let i = lastItem.level + 1; i <= 6; i++) {
              const {
                children
              } = lastItem;
              if (!children) {
                lastItem.children = [item];
                break;
              }
              lastItem = children[children.length - 1];
              if (item.level <= lastItem.level) {
                children.push(item);
                break;
              }
            }
          } else {
            tocItems.push(item);
          }
        }
      });
      return tocItems;
    });
    onMounted(() => {
      bus.on(editorId, {
        name: "catalogChanged",
        callback: (_list) => {
          state.list = _list.map((item, index2) => {
            if (index2 === 0) {
              return __spreadProps(__spreadValues({}, item), {
                active: true
              });
            }
            return __spreadValues({}, item);
          });
        }
      });
      bus.emit(editorId, "pushCatalog");
    });
    onMounted(() => {
      var _a;
      const scrollElement = state.scrollElement instanceof HTMLElement ? state.scrollElement : document.querySelector(state.scrollElement);
      (_a = scrollElement === document.documentElement ? window : scrollElement) == null ? void 0 : _a.addEventListener("scroll", throttle(() => {
        if (state.list.length === 0) {
          return false;
        }
        const {
          activeHead
        } = state.list.reduce((activeData, link, index2) => {
          const linkEle = document.getElementById(props.markedHeadingId(link.text, link.level, index2 + 1));
          if (linkEle instanceof HTMLElement) {
            const relativeTop = getRelativeTop(linkEle, scrollElement);
            if (relativeTop < props.offsetTop && relativeTop > activeData.minTop) {
              return {
                activeHead: link,
                minTop: relativeTop
              };
            }
          }
          return activeData;
        }, {
          activeHead: state.list[0],
          minTop: Number.MIN_SAFE_INTEGER
        });
        state.list = state.list.map((item) => {
          if (item === activeHead) {
            return __spreadProps(__spreadValues({}, item), {
              active: true
            });
          }
          return __spreadProps(__spreadValues({}, item), {
            active: false
          });
        });
      }));
    });
    return () => createVNode("div", {
      "class": `${prefix}-catalog${props.theme === "dark" ? "-dark" : ""} ${props.class}`
    }, [catalogs.value.map((item) => {
      return createVNode(CatalogLink, {
        "markedHeadingId": props.markedHeadingId,
        "tocItem": item,
        "key": `link-${item.level}-${item.text}`,
        "scrollElement": state.scrollElement,
        "onClick": (e, t) => {
          if (props.onClick) {
            props.onClick(e, t);
          } else {
            ctx.emit("onClick", e, t);
          }
        },
        "scrollElementOffsetTop": props.scrollElementOffsetTop
      }, null);
    })]);
  }
});
const editorProps = () => ({
  modelValue: {
    type: String,
    default: ""
  },
  theme: {
    type: String,
    default: "light"
  },
  class: {
    type: String,
    default: ""
  },
  historyLength: {
    type: Number,
    default: 10
  },
  onChange: {
    type: Function
  },
  onSave: {
    type: Function
  },
  onUploadImg: {
    type: Function
  },
  pageFullscreen: {
    type: Boolean,
    default: false
  },
  preview: {
    type: Boolean,
    default: true
  },
  htmlPreview: {
    type: Boolean,
    default: false
  },
  previewOnly: {
    type: Boolean,
    default: false
  },
  language: {
    type: String,
    default: "zh-CN"
  },
  toolbars: {
    type: Array,
    default: allToolbar
  },
  toolbarsExclude: {
    type: Array,
    default: []
  },
  noPrettier: {
    type: Boolean,
    default: false
  },
  onHtmlChanged: {
    type: Function
  },
  onGetCatalog: {
    type: Function
  },
  editorId: {
    type: String,
    default: defaultEditorId
  },
  tabWidth: {
    type: Number,
    default: 2
  },
  showCodeRowNumber: {
    type: Boolean,
    default: false
  },
  previewTheme: {
    type: String,
    default: "default"
  },
  style: {
    type: Object,
    default: () => ({})
  },
  markedHeadingId: {
    type: Function,
    default: markedHeadingId
  },
  tableShape: {
    type: Array,
    default: () => [6, 4]
  },
  noMermaid: {
    type: Boolean,
    default: false
  },
  sanitize: {
    type: Function,
    default: (html) => html
  },
  placeholder: {
    type: String,
    default: ""
  },
  noKatex: {
    type: Boolean,
    default: false
  },
  defToolbars: {
    type: [String, Object]
  },
  onError: {
    type: Function
  },
  codeTheme: {
    type: String,
    default: "atom"
  },
  footers: {
    type: Array,
    default: allFooter
  },
  scrollAuto: {
    type: Boolean,
    default: true
  },
  defFooters: {
    type: [String, Object]
  },
  noIconfont: {
    type: Boolean
  },
  formatCopiedText: {
    type: Function,
    default: (text) => text
  },
  noUploadImg: {
    type: Boolean
  },
  codeStyleReverse: {
    type: Boolean,
    default: true
  },
  codeStyleReverseList: {
    type: Array,
    default: ["default", "mk-cute"]
  },
  autoFocus: {
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  readOnly: {
    type: Boolean
  },
  maxLength: {
    type: Number
  },
  autoDetectCode: {
    type: Boolean
  },
  previewUrl: {
    type: String
  },
  previewBearer: {
    type: String
  }
});
const markedHeadingId = (text) => text;
var index = "";
var alert = "";
var all = "";
const Editor = defineComponent({
  name: "MdEditorV3",
  props: editorProps(),
  emits: ["onChange", "onSave", "onUploadImg", "onHtmlChanged", "onGetCatalog", "onError", "update:modelValue"],
  setup(props, context) {
    const {
      editorId,
      previewOnly,
      noKatex,
      noMermaid,
      noPrettier,
      noUploadImg
    } = props;
    const state = reactive({
      scrollAuto: props.scrollAuto
    });
    useKeyBoard(props, context);
    useProvide(props);
    useExpansion(props);
    const [setting, updateSetting] = useConfig(props, context);
    const [catalogVisible, catalogShow] = useCatalog(props);
    onBeforeUnmount(() => {
      bus.clear(editorId);
    });
    useExpose(props, context, catalogVisible, setting, updateSetting);
    return () => {
      var _a;
      const defToolbars = getSlot({
        props,
        ctx: context
      }, "defToolbars");
      const defFooters = getSlot({
        props,
        ctx: context
      }, "defFooters");
      return createVNode("div", {
        "id": editorId,
        "class": [prefix, props.class, props.theme === "dark" && `${prefix}-dark`, setting.fullscreen || setting.pageFullscreen ? `${prefix}-fullscreen` : "", previewOnly && `${prefix}-previewOnly`],
        "style": props.style
      }, [!previewOnly && createVNode(ToolBar, {
        "noPrettier": noPrettier,
        "toolbars": props.toolbars,
        "toolbarsExclude": props.toolbarsExclude,
        "setting": setting,
        "updateSetting": updateSetting,
        "tableShape": props.tableShape,
        "defToolbars": defToolbars,
        "noUploadImg": noUploadImg
      }, null), createVNode(Content, {
        "value": props.modelValue,
        "onChange": (value) => {
          bus.emit(editorId, "saveHistoryPos");
          if (props.onChange) {
            props.onChange(value);
          } else {
            context.emit("update:modelValue", value);
            context.emit("onChange", value);
          }
        },
        "setting": setting,
        "onHtmlChanged": (html) => {
          if (props.onHtmlChanged) {
            props.onHtmlChanged(html);
          } else {
            context.emit("onHtmlChanged", html);
          }
        },
        "onGetCatalog": (list) => {
          if (props.onGetCatalog) {
            props.onGetCatalog(list);
          } else {
            context.emit("onGetCatalog", list);
          }
        },
        "markedHeadingId": props.markedHeadingId,
        "noMermaid": noMermaid,
        "sanitize": props.sanitize,
        "placeholder": props.placeholder,
        "noKatex": noKatex,
        "scrollAuto": state.scrollAuto,
        "formatCopiedText": props.formatCopiedText,
        "autofocus": props.autoFocus,
        "disabled": props.disabled,
        "readonly": props.readOnly,
        "maxlength": props.maxLength,
        "autoDetectCode": props.autoDetectCode,
        "previewUrl": props.previewUrl,
        "previewBearer": props.previewBearer
      }, null), !previewOnly && ((_a = props.footers) == null ? void 0 : _a.length) > 0 && createVNode(Footer, {
        "modelValue": props.modelValue,
        "footers": props.footers,
        "defFooters": defFooters,
        "scrollAuto": state.scrollAuto,
        "onScrollAutoChange": (v) => state.scrollAuto = v
      }, null), catalogShow.value && !previewOnly && createVNode(MdCatalog, {
        "theme": props.theme,
        "style": {
          display: catalogVisible.value ? "block" : "none"
        },
        "class": `${prefix}-catalog-editor`,
        "editorId": editorId,
        "markedHeadingId": props.markedHeadingId
      }, null)]);
    };
  }
});
const normalToolbarProps = () => ({
  title: {
    type: String,
    default: ""
  },
  trigger: {
    type: [String, Object]
  },
  onClick: {
    type: Function
  }
});
var NormalToolbar = defineComponent({
  name: "NormalToolbar",
  props: normalToolbarProps(),
  emits: ["onClick"],
  setup(props, ctx) {
    return () => {
      const Trigger = getSlot({
        props,
        ctx
      }, "trigger");
      return createVNode("div", {
        "class": `${prefix}-toolbar-item`,
        "title": props.title,
        "onClick": (e) => {
          if (props.onClick instanceof Function) {
            props.onClick(e);
          } else {
            ctx.emit("onClick", e);
          }
        }
      }, [Trigger]);
    };
  }
});
const dropdownToolbarProps = () => ({
  title: {
    type: String,
    default: ""
  },
  visible: {
    type: Boolean
  },
  trigger: {
    type: [String, Object]
  },
  onChange: {
    type: Function
  },
  overlay: {
    type: [String, Object]
  }
});
var DropdownToolbar = defineComponent({
  name: "DropdownToolbar",
  props: dropdownToolbarProps(),
  emits: ["onChange"],
  setup(props, ctx) {
    const editorId = inject("editorId");
    return () => {
      const Trigger = getSlot({
        props,
        ctx
      }, "trigger");
      const Overlay = getSlot({
        props,
        ctx
      }, "overlay");
      return createVNode(Dropdown, {
        "relative": `#${editorId}-toolbar-wrapper`,
        "visible": props.visible,
        "onChange": (v) => {
          if (props.onChange instanceof Function) {
            props.onChange(v);
          } else {
            ctx.emit("onChange", v);
          }
        },
        "overlay": Overlay
      }, {
        default: () => [createVNode("div", {
          "class": `${prefix}-toolbar-item`,
          "title": props.title || ""
        }, [Trigger])]
      });
    };
  }
});
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const modalToolbarProps = () => ({
  title: {
    type: String,
    default: ""
  },
  modalTitle: {
    type: String,
    default: ""
  },
  visible: {
    type: Boolean
  },
  width: {
    type: String,
    default: "auto"
  },
  height: {
    type: String,
    default: "auto"
  },
  trigger: {
    type: [String, Object]
  },
  onClick: {
    type: Function
  },
  onClose: {
    type: Function
  },
  showAdjust: {
    type: Boolean,
    default: false
  },
  isFullscreen: {
    type: Boolean,
    default: false
  },
  onAdjust: {
    type: Function
  }
});
var ModalToolbar = defineComponent({
  name: "ModalToolbar",
  props: modalToolbarProps(),
  emits: ["onClick", "onClose", "onAdjust"],
  setup(props, ctx) {
    return () => {
      const Trigger = getSlot({
        props,
        ctx
      }, "trigger");
      const Default = getSlot({
        props,
        ctx
      }, "default");
      return createVNode(Fragment, null, [createVNode("div", {
        "class": `${prefix}-toolbar-item`,
        "title": props.title,
        "onClick": () => {
          if (props.onClick instanceof Function) {
            props.onClick();
          } else {
            ctx.emit("onClick");
          }
        }
      }, [Trigger]), createVNode(Modal, {
        "width": props.width,
        "height": props.height,
        "title": props.modalTitle,
        "visible": props.visible,
        "onClose": () => {
          if (props.onClose instanceof Function) {
            props.onClose();
          } else {
            ctx.emit("onClose");
          }
        },
        "showAdjust": props.showAdjust,
        "isFullscreen": props.isFullscreen,
        "onAdjust": (v) => {
          if (props.onAdjust instanceof Function) {
            props.onAdjust(v);
          } else {
            ctx.emit("onAdjust", v);
          }
        }
      }, _isSlot(Default) ? Default : {
        default: () => [Default]
      })]);
    };
  }
});
Editor.install = (app) => {
  app.component(Editor.name, Editor);
  app.component(NormalToolbar.name, NormalToolbar);
  app.component(DropdownToolbar.name, DropdownToolbar);
  app.component(MdCatalog.name, MdCatalog);
  app.component(ModalToolbar.name, ModalToolbar);
  return app;
};
Editor.NormalToolbar = NormalToolbar;
Editor.DropdownToolbar = DropdownToolbar;
Editor.MdCatalog = MdCatalog;
Editor.ModalToolbar = ModalToolbar;
Editor.config = config;
export { Editor as default };
