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
  default: () => Routes
});
var import_index_c6d9d557 = __toModule(require("../../chunks/index-c6d9d557.js"));
var import_Header_3274ce55 = __toModule(require("../../chunks/Header-3274ce55.js"));
var import_firebase_0f67d1fd = __toModule(require("../../chunks/firebase-0f67d1fd.js"));
var import_app = __toModule(require("firebase/compat/app"));
var import_firestore = __toModule(require("firebase/compat/firestore"));
var import_auth = __toModule(require("firebase/compat/auth"));
const Timeline = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_users;
  $$unsubscribe_users = (0, import_index_c6d9d557.a)(import_Header_3274ce55.c, (value) => value);
  $$unsubscribe_users();
  return `<div class="${"container col-span-2"}">${``}</div>`;
});
const Sidebar = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_users;
  $$unsubscribe_users = (0, import_index_c6d9d557.a)(import_Header_3274ce55.c, (value) => value);
  let user;
  {
    console.log(user, "user");
  }
  $$unsubscribe_users();
  return `<section class="${"p-4"}">${`<p>Loading...</p>`}</section>`;
});
const Dashboard = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  let $users, $$unsubscribe_users;
  $$unsubscribe_users = (0, import_index_c6d9d557.a)(import_Header_3274ce55.c, (value) => $users = value);
  $$unsubscribe_users();
  return `${$$result.head += `${$$result.title = `<title>Instagram</title>`, ""}`, ""}

<div class="${"bg-gray-50 "}">${(0, import_index_c6d9d557.v)(import_Header_3274ce55.H, "Header").$$render($$result, {}, {}, {})}
    ${$users ? `<div class="${"grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg"}">${(0, import_index_c6d9d557.v)(Timeline, "Timeline").$$render($$result, {}, {}, {})}
            ${(0, import_index_c6d9d557.v)(Sidebar, "Sidebar").$$render($$result, {}, {}, {})}</div>` : ``}</div>`;
});
const App = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  let { firebase: firebase2 } = $$props;
  let { FieldValue: FieldValue2 } = $$props;
  if ($$props.firebase === void 0 && $$bindings.firebase && firebase2 !== void 0)
    $$bindings.firebase(firebase2);
  if ($$props.FieldValue === void 0 && $$bindings.FieldValue && FieldValue2 !== void 0)
    $$bindings.FieldValue(FieldValue2);
  return `<div class="${"w-full"}">${(0, import_index_c6d9d557.v)(Dashboard, "Dashboard").$$render($$result, {}, {}, {})}</div>`;
});
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-8cruuo{align-items:center;display:flex;flex:1;flex-direction:column;justify-content:center}",
  map: null
};
const Routes = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_users;
  $$unsubscribe_users = (0, import_index_c6d9d557.a)(import_Header_3274ce55.c, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_users();
  return `${$$result.head += `${$$result.title = `<title>Instagram</title>`, ""}`, ""}

<section class="${"svelte-8cruuo"}">${(0, import_index_c6d9d557.v)(App, "App").$$render($$result, { firebase: import_firebase_0f67d1fd.f, FieldValue: import_firebase_0f67d1fd.F }, {}, {})}</section>`;
});
