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
  default: () => Todos,
  load: () => load
});
var import_index_c6d9d557 = __toModule(require("../../../chunks/index-c6d9d557.js"));
var index_svelte_svelte_type_style_lang = "";
const css = {
  code: `.todos.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn{line-height:1;margin:var(--column-margin-top) auto 0 auto;max-width:var(--column-width);width:100%}.new.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn{margin:0 0 .5rem}input.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn{border:1px solid transparent}input.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn:focus-visible{border:1px solid #ff3e00!important;box-shadow:inset 1px 1px 6px rgba(0,0,0,.1);outline:none}.new.svelte-16tkvjn input.svelte-16tkvjn.svelte-16tkvjn{background:hsla(0,0%,100%,.05);box-sizing:border-box;font-size:28px;padding:.5em 1em .3em;text-align:center;width:100%}.new.svelte-16tkvjn input.svelte-16tkvjn.svelte-16tkvjn,.todo.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn{border-radius:8px}.todo.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn{grid-gap:.5rem;align-items:center;background-color:#fff;display:grid;filter:drop-shadow(2px 4px 6px rgba(0,0,0,.1));grid-template-columns:2rem 1fr 2rem;margin:0 0 .5rem;padding:.5rem;transform:translate(-1px,-1px);transition:filter .2s,transform .2s}.done.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn{filter:drop-shadow(0 0 1px rgba(0,0,0,.1));opacity:.4;transform:none}form.text.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn{align-items:center;display:flex;flex:1;position:relative}.todo.svelte-16tkvjn input.svelte-16tkvjn.svelte-16tkvjn{border-radius:3px;flex:1;padding:.5em 2em .5em .8em}.todo.svelte-16tkvjn button.svelte-16tkvjn.svelte-16tkvjn{background-color:transparent;background-position:50% 50%;background-repeat:no-repeat;border:none;height:2em;width:2em}button.toggle.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn{background-size:1em auto;border:1px solid rgba(0,0,0,.2);border-radius:50%;box-sizing:border-box}.done.svelte-16tkvjn .toggle.svelte-16tkvjn.svelte-16tkvjn{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='22' height='16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m20.5 1.5-13.063 13L1.5 8.59' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")}.delete.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4.5 5v17h15V5h-15Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M10 10v6.5M14 10v6.5' stroke='%23fff' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M2 5h20' stroke='%23676778' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='m8 5 1.645-3h4.744L16 5H8Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3C/svg%3E");opacity:.2}.delete.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn:focus,.delete.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn:hover{opacity:1;transition:opacity .2s}.save.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.5 2h-17A1.5 1.5 0 0 0 2 3.5v17A1.5 1.5 0 0 0 3.5 22h17a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 20.5 2Z' fill='%23676778' stroke='%23676778' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M17 2v9H7.5V2H17Z' fill='%23fff' stroke='%23fff' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M13.5 5.5v2M5.998 2H18.5' stroke='%23676778' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");opacity:0;position:absolute;right:0}.save.svelte-16tkvjn.svelte-16tkvjn.svelte-16tkvjn:focus,.todo.svelte-16tkvjn input.svelte-16tkvjn:focus+.save.svelte-16tkvjn{opacity:1;transition:opacity .2s}`,
  map: null
};
var __awaiter = globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
const load = ({ fetch }) => __awaiter(void 0, void 0, void 0, function* () {
  const res = yield fetch("/todos.json");
  if (res.ok) {
    const todos = yield res.json();
    return { props: { todos } };
  }
  const { message } = yield res.json();
  return { error: new Error(message) };
});
const Todos = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  let { todos } = $$props;
  if ($$props.todos === void 0 && $$bindings.todos && todos !== void 0)
    $$bindings.todos(todos);
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Todos</title>`, ""}`, ""}

<div class="${"todos svelte-16tkvjn"}"><h1>Todos</h1>

    <form class="${"new svelte-16tkvjn"}" action="${"/todos.json"}" method="${"post"}"><input name="${"text"}" aria-label="${"Add todo"}" placeholder="${"+ tap to add a todo"}" class="${"svelte-16tkvjn"}"></form>

    ${(0, import_index_c6d9d557.f)(todos, (todo) => {
    return `<div class="${["todo svelte-16tkvjn", todo.done ? "done" : ""].join(" ").trim()}"><form action="${"/todos/" + (0, import_index_c6d9d557.e)(todo.uid) + ".json?_method=patch"}" method="${"post"}"><input type="${"hidden"}" name="${"done"}"${(0, import_index_c6d9d557.d)("value", todo.done ? "" : "true", 0)} class="${"svelte-16tkvjn"}">
                <button class="${"toggle svelte-16tkvjn"}" aria-label="${"Mark todo as " + (0, import_index_c6d9d557.e)(todo.done ? "not done" : "done")}"></button></form>

            <form class="${"text svelte-16tkvjn"}" action="${"/todos/" + (0, import_index_c6d9d557.e)(todo.uid) + ".json?_method=patch"}" method="${"post"}"><input aria-label="${"Edit todo"}" type="${"text"}" name="${"text"}"${(0, import_index_c6d9d557.d)("value", todo.text, 0)} class="${"svelte-16tkvjn"}">
                <button class="${"save svelte-16tkvjn"}" aria-label="${"Save todo"}"></button></form>

            <form action="${"/todos/" + (0, import_index_c6d9d557.e)(todo.uid) + ".json?_method=delete"}" method="${"post"}"><button class="${"delete svelte-16tkvjn"}" aria-label="${"Delete todo"}" ${todo.pending_delete ? "disabled" : ""}></button></form>
        </div>`;
  })}
</div>`;
});
