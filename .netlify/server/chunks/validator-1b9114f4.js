var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
__export(exports, {
  I: () => Input,
  v: () => validator
});
var import_index_c6d9d557 = __toModule(require("./index-c6d9d557.js"));
const Input = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  let { type = "text" } = $$props;
  let { text = "" } = $$props;
  let { customClass = "" } = $$props;
  let { label = "" } = $$props;
  let { placeholder = "" } = $$props;
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.customClass === void 0 && $$bindings.customClass && customClass !== void 0)
    $$bindings.customClass(customClass);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  return `${type === "textarea" ? `<textarea${(0, import_index_c6d9d557.d)("type", type, 0)}${(0, import_index_c6d9d557.d)("class", customClass, 0)}${(0, import_index_c6d9d557.d)("aria-label", label, 0)}${(0, import_index_c6d9d557.d)("placeholder", placeholder, 0)}>${(0, import_index_c6d9d557.e)(text)}</textarea>` : `<input${(0, import_index_c6d9d557.d)("type", type, 0)}${(0, import_index_c6d9d557.d)("value", text, 0)}${(0, import_index_c6d9d557.d)("class", customClass, 0)}${(0, import_index_c6d9d557.d)("aria-label", label, 0)}${(0, import_index_c6d9d557.d)("placeholder", placeholder, 0)}>`}`;
});
const validator = (value) => {
  return value.trim().length === 0;
};
