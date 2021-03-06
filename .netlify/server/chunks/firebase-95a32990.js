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
  F: () => FieldValue,
  f: () => firebase
});
var import_app = __toModule(require("firebase/app"));
var import_firestore = __toModule(require("firebase/firestore"));
var import_auth = __toModule(require("firebase/auth"));
const config = {
  apiKey: "AIzaSyDAeNoAGfy_5Wrqvnuaf9IfqS1DOZcDayE",
  authDomain: "instagram-clone-svelte.firebaseapp.com",
  projectId: "instagram-clone-svelte",
  storageBucket: "instagram-clone-svelte.appspot.com",
  messagingSenderId: "800924273836",
  appId: "1:800924273836:web:7af277fe7aff1e97806309",
  measurementId: "G-5FRJ8YQ7P6"
};
const firebase = import_app.default.initializeApp(config);
const { FieldValue } = import_app.default.firestore;
console.log(firebase, "firebase");
