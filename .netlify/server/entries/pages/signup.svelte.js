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
  default: () => Signup
});
var import_index_c6d9d557 = __toModule(require("../../chunks/index-c6d9d557.js"));
var import_validator_1b9114f4 = __toModule(require("../../chunks/validator-1b9114f4.js"));
var import_firebase_6a02f7df = __toModule(require("../../chunks/firebase-6a02f7df.js"));
var import_firebase = __toModule(require("firebase"));
let customClass = "text-sm text-gray-base w-72 mr-3 py-5 px-2 h-2 border border-gray-primary rounded mb-2";
const Signup = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  let { email = "" } = $$props;
  let { fullname = "" } = $$props;
  let { username = "" } = $$props;
  let { password = "" } = $$props;
  let { followed = false } = $$props;
  let isInvalid = true;
  if ($$props.email === void 0 && $$bindings.email && email !== void 0)
    $$bindings.email(email);
  if ($$props.fullname === void 0 && $$bindings.fullname && fullname !== void 0)
    $$bindings.fullname(fullname);
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.password === void 0 && $$bindings.password && password !== void 0)
    $$bindings.password(password);
  if ($$props.followed === void 0 && $$bindings.followed && followed !== void 0)
    $$bindings.followed(followed);
  {
    if ((0, import_validator_1b9114f4.v)(email) || (0, import_validator_1b9114f4.v)(password) || (0, import_validator_1b9114f4.v)(fullname) || (0, import_validator_1b9114f4.v)(username)) {
      isInvalid = true;
    } else {
      isInvalid = false;
    }
  }
  return `${$$result.head += `${$$result.title = `<title>Sign Up - Instagram</title>`, ""}`, ""}

<section class="${"container flex mx-auto max-w-screen-md justify-center my-auto items-center h-screen"}"><div><div class="${"flex flex-col items-center bg-white p-8 border border-gray-primary mb-4"}"><div class="${"flex justify-center w-full "}"><img src="${"https://github.com/karlhadwen/instagram/blob/master/public/images/logo.png?raw=true"}" alt="${"instagram"}" class="${"mt-2 mb-4"}"></div>
            <p class="${"w-64 text-center text-gray-400 text-xl font-bold mb-4"}">Sign up to see photos and videos from your friends.
            </p>
            <div id="${"form"}"><form method="${"POST"}"><div class="${"flex flex-col mb-2"}">${``}
                        ${(0, import_index_c6d9d557.v)(import_validator_1b9114f4.I, "Input").$$render($$result, {
    type: "email",
    text: email,
    customClass,
    label: "E-mail",
    placeholder: "Mobile Number or Email"
  }, {}, {})}
                        ${(0, import_index_c6d9d557.v)(import_validator_1b9114f4.I, "Input").$$render($$result, {
    type: "text",
    text: fullname,
    customClass,
    label: "Full Name",
    placeholder: "Full Name"
  }, {}, {})}
                        ${(0, import_index_c6d9d557.v)(import_validator_1b9114f4.I, "Input").$$render($$result, {
    type: "text",
    text: username,
    customClass,
    label: "Username",
    placeholder: "Username"
  }, {}, {})}
                        ${(0, import_index_c6d9d557.v)(import_validator_1b9114f4.I, "Input").$$render($$result, {
    type: "password",
    text: password,
    customClass,
    label: "Password",
    placeholder: "Password"
  }, {}, {})}</div>
                    <button ${isInvalid ? "disabled" : ""}${(0, import_index_c6d9d557.d)("class", `bg-blue-500 text-white w-72 mb-4 rounded py-1 ${isInvalid ? "opacity-50" : "opacity-100"}`, 0)}>Sign up</button>
                    <p class="${"w-72 text-center text-sm text-gray-500"}">By signing up, you agree to our Terms , Data Policy and
                        Cookies Policy .
                    </p></form></div></div>
        <div class="${"bg-white text-center p-8 mb-4 border border-gray-primary"}"><p class="${""}">Have an account? <a href="${"/login"}" class="${"text-blue-500 font-bold cursor-pointer hover:no-underline"}">Log in</a></p></div>
        <p class="${"text-center"}">Get the app.</p>
        <div class="${"flex flex-row items-center mx-auto w-64 h-44"}"><a><img src="${"https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png"}"></a></div></div></section>`;
});
