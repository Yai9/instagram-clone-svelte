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
  default: () => Login
});
var import_index_c6d9d557 = __toModule(require("../../chunks/index-c6d9d557.js"));
var import_validator_1b9114f4 = __toModule(require("../../chunks/validator-1b9114f4.js"));
var import_firebase_060a07e6 = __toModule(require("../../chunks/firebase-060a07e6.js"));
const Login = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  let { email = "" } = $$props;
  let { password = "" } = $$props;
  let isInvalid = true;
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.password === void 0 && $$bindings.password && password !== void 0)
    $$bindings.password(password);
  {
    if ((0, import_validator_1b9114f4.v)(email) || (0, import_validator_1b9114f4.v)(password)) {
      isInvalid = true;
    } else {
      isInvalid = false;
    }
  }
  return `${$$result.head += `${$$result.title = `<title>Login - Instagram</title>`, ""}`, ""}

<section class="${"container flex mx-auto max-w-screen-md items-center h-screen"}"><div class="${"flex w-3/5"}"><img src="${"iphone-with-picture.png"}" alt="${"iphone-with-profile"}"></div>
    <div><div class="${"flex flex-col bg-white p-8 border border-gray-primary mb-4"}"><div class="${"flex justify-center w-full"}"><img src="${"logo.png"}" alt="${"instagram"}" class="${"mt-2 mb-4"}"></div>
            <div><form method="${"POST"}"><div>${``}
                        ${(0, import_index_c6d9d557.v)(import_validator_1b9114f4.I, "Input").$$render($$result, {
    type: "email",
    text: email,
    customClass: "text-sm text-gray-base w-72 mr-3 py-4 px-2 h-2 border border-gray-primary rounded mb-2",
    label: "E-mail",
    placeholder: "Phone number, username, or email"
  }, {}, {})}</div>
                    <div>${(0, import_index_c6d9d557.v)(import_validator_1b9114f4.I, "Input").$$render($$result, {
    type: "password",
    text: password,
    customClass: "text-sm text-gray-base w-72 mr-3 py-4 px-2 h-2 border border-gray-primary rounded mb-2",
    label: "Password",
    placeholder: "Password"
  }, {}, {})}</div>
                    <button ${isInvalid ? "disabled" : ""}${(0, import_index_c6d9d557.d)("class", `bg-blue-500 text-white w-72 rounded py-1 ${isInvalid ? "opacity-50" : "opacity-100"}`, 0)}>Log in</button></form></div></div>
        <div class="${"bg-white p-8 border border-gray-primary"}"><p class="${""}">Don&#39;t have an account? <a href="${"/signup"}" class="${"text-blue-500 font-bold cursor-pointer hover:no-underline"}">Sign up</a></p></div></div></section>`;
});
