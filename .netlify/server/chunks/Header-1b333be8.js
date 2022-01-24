var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
  H: () => Header,
  a: () => customProfileStore,
  c: () => customUserStore
});
var import_index_c6d9d557 = __toModule(require("./index-c6d9d557.js"));
var import_firebase_95a32990 = __toModule(require("./firebase-95a32990.js"));
const subscriber_queue = [];
function writable(value, start = import_index_c6d9d557.n) {
  let stop;
  const subscribers = new Set();
  function set(new_value) {
    if ((0, import_index_c6d9d557.b)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_c6d9d557.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_c6d9d557.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const userStore = writable(null);
const customUserStore = {
  subscribe: userStore.subscribe,
  setUser: (data) => {
    userStore.set(data);
  },
  updateUser: (data) => {
    userStore.update((user) => {
      const updatedUser = __spreadValues(__spreadValues({}, data), user);
      return updatedUser;
    });
  },
  removeUser: () => {
    userStore.update((data) => {
      const prevData = [...data];
      return prevData.pop();
    });
  }
};
const profileStore = writable(null);
const customProfileStore = {
  subscribe: profileStore.subscribe,
  setProfile: (data) => {
    profileStore.set(data);
  },
  updateProfile: (id, data) => {
    profileStore.update((profile) => {
      const updatedProfile = __spreadValues(__spreadValues({}, profile.find((item) => item.id === id)), data);
      const profileIndex = profile.findIndex((p) => p.id === id);
      const profileArray = [...profile];
      profileArray[profileIndex] = updatedProfile;
      return profileArray;
    });
  },
  removeProfile: () => {
    profileStore.update((data) => {
      const prevData = [...data];
      return prevData.pop();
    });
  }
};
const getStores = () => {
  const stores = (0, import_index_c6d9d557.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const Loader = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"flex justify-center w-full h-screen text-gray-500"}"><div class="${"flex flex-col my-auto w-full"}"><img src="${"../../static/loader.png"}" alt="${"Loader"}" class="${"flex w-32 h-32 mx-auto"}"></div>
</div>`;
});
const Header = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_profiles;
  let $page, $$unsubscribe_page;
  let $users, $$unsubscribe_users;
  $$unsubscribe_profiles = (0, import_index_c6d9d557.a)(customProfileStore, (value) => value);
  $$unsubscribe_page = (0, import_index_c6d9d557.a)(page, (value) => $page = value);
  $$unsubscribe_users = (0, import_index_c6d9d557.a)(customUserStore, (value) => $users = value);
  let searchValue = "";
  const profileQuery = $page.url.pathname.includes("profile");
  $$unsubscribe_profiles();
  $$unsubscribe_page();
  $$unsubscribe_users();
  return `${$$result.head += `${$$result.title = `<title>Instagram</title>`, ""}`, ""}

${!$users ? `${(0, import_index_c6d9d557.v)(Loader, "Loader").$$render($$result, {}, {}, {})}` : `<header class="${"h-16 bg-white w-full border-b border-gray-primary mb-8 sticky top-0"}"><div class="${"container mx-auto max-w-screen-lg h-full"}"><div class="${"flex justify-between h-full"}"><div class="${"text-gray-700 text-center flex items-center align-items cursor-pointer"}"><h1 class="${"flex justify-center w-full"}"><a href="${"/"}" aria-label="${"Instagram logo"}"><img src="${"../../static/logo.png"}" alt="${"Instagram"}" class="${"mt-2 w-5/6"}"></a></h1></div>
                ${!profileQuery ? `<div class="${"w-full text-gray-700 text-center flex items-center align-items cursor-pointer"}"><input type="${"search"}" placeholder="${"Search"}" class="${"border-2 border-gray-200 rounded text-center"}"${(0, import_index_c6d9d557.d)("value", searchValue, 0)}>
                        <svg xmlns="${"http://www.w3.org/2000/svg"}" x="${"0px"}" y="${"0px"}" width="${"15"}" height="${"15"}" viewBox="${"0 0 30 30"}" fill="${"none"}" class="${"float-left -ml-40 text-gray-500"}" stroke="${"currentColor"}"><path d="${"M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"}"></path></svg>
                        ${``}</div>` : ``}
                <div class="${"text-gray-700 text-center flex items-center align-items"}">${$users ? `<a href="${"/"}"><svg class="${"w-8 mr-6 text-black-light cursor-pointer"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path strokelinecap="${"round"}" strokelinejoin="${"round"}"${(0, import_index_c6d9d557.d)("strokewidth", 2, 0)} d="${"M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"}"></path></svg></a>

                        <button type="${"button"}" title="${"Sign Out"}"${(0, import_index_c6d9d557.d)("onkeydown", (event) => {
    if (event.key === "Enter") {
      import_firebase_95a32990.f.auth().signOut();
      location.pathname = "/login";
    }
  }, 0)}><svg class="${"w-8 mr-6 text-black-light cursor-pointer"}" xmlns="${"http://www.w3.org/2000/svg"}" fill="${"none"}" viewBox="${"0 0 24 24"}" stroke="${"currentColor"}"><path strokelinecap="${"round"}" strokelinejoin="${"round"}"${(0, import_index_c6d9d557.d)("strokewidth", 2, 0)} d="${"M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"}"></path></svg></button>
                        ${$users ? `<div class="${"flex items-center cursor-pointer"}"><a${(0, import_index_c6d9d557.d)("href", $users && `/profile/${$users.displayName}`, 0)}><img class="${"rounded-full h-8 w-8 flex"}"${(0, import_index_c6d9d557.d)("src", `../../static/${$users.displayName}.jpg`, 0)}${(0, import_index_c6d9d557.d)("alt", `${$users.displayName} profile`, 0)}${(0, import_index_c6d9d557.d)("onerror", (e) => {
    e.target.src = DEFAULT_IMAGE_PATH;
  }, 0)}></a></div>

                            <a href="${"/"}"><button type="${"button"}" class="${"bg-blue-medium font-bold text-sm rounded text-white w-20 h-8"}">Log In
                                </button></a>` : ``}` : ``}</div></div></div></header>`}`;
});
