var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
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
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
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
  default: () => U5Bidu5D,
  load: () => load
});
var import_index_c6d9d557 = __toModule(require("../../../chunks/index-c6d9d557.js"));
var import_firebase_95a32990 = __toModule(require("../../../chunks/firebase-95a32990.js"));
var import_Header_1b333be8 = __toModule(require("../../../chunks/Header-1b333be8.js"));
var import_app = __toModule(require("firebase/app"));
var import_firestore = __toModule(require("firebase/firestore"));
var import_auth = __toModule(require("firebase/auth"));
const Profile = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  let isMyProfile;
  let isProfileFollowed;
  let isButtonToggled;
  let $users, $$unsubscribe_users;
  let $profiles, $$unsubscribe_profiles;
  $$unsubscribe_users = (0, import_index_c6d9d557.a)(import_Header_1b333be8.c, (value) => $users = value);
  $$unsubscribe_profiles = (0, import_index_c6d9d557.a)(import_Header_1b333be8.a, (value) => $profiles = value);
  let { profileId } = $$props;
  let { username } = $$props;
  let { fullName } = $$props;
  let { followers } = $$props;
  let { following } = $$props;
  let { followed } = $$props;
  let currentUserdocId;
  let profilePhotos = [];
  if ($$props.profileId === void 0 && $$bindings.profileId && profileId !== void 0)
    $$bindings.profileId(profileId);
  if ($$props.username === void 0 && $$bindings.username && username !== void 0)
    $$bindings.username(username);
  if ($$props.fullName === void 0 && $$bindings.fullName && fullName !== void 0)
    $$bindings.fullName(fullName);
  if ($$props.followers === void 0 && $$bindings.followers && followers !== void 0)
    $$bindings.followers(followers);
  if ($$props.following === void 0 && $$bindings.following && following !== void 0)
    $$bindings.following(following);
  if ($$props.followed === void 0 && $$bindings.followed && followed !== void 0)
    $$bindings.followed(followed);
  isMyProfile = $users && $users.uid === profileId;
  isProfileFollowed = followed;
  isButtonToggled = false;
  $users && $profiles && !isMyProfile ? $profiles.find((profile) => profile.userId === profileId).profileId : currentUserdocId;
  $$unsubscribe_users();
  $$unsubscribe_profiles();
  return `${$$result.head += `${$$result.title = `<title>${(0, import_index_c6d9d557.e)(username)}</title>`, ""}`, ""}

${(0, import_index_c6d9d557.v)(import_Header_1b333be8.H, "Header").$$render($$result, {}, {}, {})}
<div class="${"grid justify-center"}"><div style="${"width:750px"}"><div class="${"flex justify-between w-full mb-8"}"><img class="${"rounded-full"}" style="${"width:150px; height:150px"}"${(0, import_index_c6d9d557.d)("src", `../../static/${username}.jpg`, 0)}>
            <section class="${"flex flex-col w-3/6"}"><div class="${"flex justify-center"}"><p class="${"font-bold text-2xl mr-8"}">${(0, import_index_c6d9d557.e)(username)}</p>
                    <div class="${"grid ml-auto mr-auto"}"><div class="${"flex"}"><button${(0, import_index_c6d9d557.d)("class", `px-4 ${isProfileFollowed || isMyProfile ? "bg-white" : "bg-blue-600 text-white border-2 border-blue-700 px-11"} bg-white border-2 border-gray-200 rounded max-h-8 font-bold`, 0)}>${(0, import_index_c6d9d557.e)(isMyProfile ? "Edit Profile" : isProfileFollowed ? "Following" : "Follow")}</button>
                            ${isProfileFollowed ? `<button class="${"flex bg-white border-2 border-gray-200 rounded w-8 justify-center max-h-8 font-bold"}">v
                                </button>` : ``}</div>
                        ${isButtonToggled && isProfileFollowed ? `<button class="${"flex bg-white border-2 border-gray-200 rounded w-38 justify-center max-h-8 font-bold"}">Unfollow
                            </button>` : ``}</div>

                    <svg aria-label="${"Options"}" class="${"mt-1 ml-auto mr-auto"}" color="${"#262626"}" fill="${"#262626"}" height="${"24"}" role="${"img"}" viewBox="${"0 0 48 48"}" width="${"24"}"><path clip-rule="${"evenodd"}" d="${"M46.7 20.6l-2.1-1.1c-.4-.2-.7-.5-.8-1-.5-1.6-1.1-3.2-1.9-4.7-.2-.4-.3-.8-.1-1.2l.8-2.3c.2-.5 0-1.1-.4-1.5l-2.9-2.9c-.4-.4-1-.5-1.5-.4l-2.3.8c-.4.1-.8.1-1.2-.1-1.4-.8-3-1.5-4.6-1.9-.4-.1-.8-.4-1-.8l-1.1-2.2c-.3-.5-.8-.8-1.3-.8h-4.1c-.6 0-1.1.3-1.3.8l-1.1 2.2c-.2.4-.5.7-1 .8-1.6.5-3.2 1.1-4.6 1.9-.4.2-.8.3-1.2.1l-2.3-.8c-.5-.2-1.1 0-1.5.4L5.9 8.8c-.4.4-.5 1-.4 1.5l.8 2.3c.1.4.1.8-.1 1.2-.8 1.5-1.5 3-1.9 4.7-.1.4-.4.8-.8 1l-2.1 1.1c-.5.3-.8.8-.8 1.3V26c0 .6.3 1.1.8 1.3l2.1 1.1c.4.2.7.5.8 1 .5 1.6 1.1 3.2 1.9 4.7.2.4.3.8.1 1.2l-.8 2.3c-.2.5 0 1.1.4 1.5L8.8 42c.4.4 1 .5 1.5.4l2.3-.8c.4-.1.8-.1 1.2.1 1.4.8 3 1.5 4.6 1.9.4.1.8.4 1 .8l1.1 2.2c.3.5.8.8 1.3.8h4.1c.6 0 1.1-.3 1.3-.8l1.1-2.2c.2-.4.5-.7 1-.8 1.6-.5 3.2-1.1 4.6-1.9.4-.2.8-.3 1.2-.1l2.3.8c.5.2 1.1 0 1.5-.4l2.9-2.9c.4-.4.5-1 .4-1.5l-.8-2.3c-.1-.4-.1-.8.1-1.2.8-1.5 1.5-3 1.9-4.7.1-.4.4-.8.8-1l2.1-1.1c.5-.3.8-.8.8-1.3v-4.1c.4-.5.1-1.1-.4-1.3zM24 41.5c-9.7 0-17.5-7.8-17.5-17.5S14.3 6.5 24 6.5 41.5 14.3 41.5 24 33.7 41.5 24 41.5z"}" fill-rule="${"evenodd"}"></path></svg></div>
                <div class="${"flex justify-between list-none relative mt-12 "}"><li>${(0, import_index_c6d9d557.e)(profilePhotos.length)} posts</li>
                    <li>${(0, import_index_c6d9d557.e)(followers)} followers</li>
                    <li>${(0, import_index_c6d9d557.e)(following.length)} following</li></div></section></div>
        <div><nav class="${"flex justify-center border-t-2 border-gray-200 "}"><ul class="${"grid grid-cols-3 gap-10 uppercase font-bold text-gray-400 py-3"}"><li>Posts</li>
                    <li>Saved</li>
                    <li>Tagged</li></ul></nav>
            <div class="${"flex gap-3"}">${profilePhotos.length > 0 ? `${(0, import_index_c6d9d557.f)(profilePhotos, (photo) => {
    return `<img class="${"w-64 h-64"}"${(0, import_index_c6d9d557.d)("src", `../../static/${photo.imageSrc}`, 0)}${(0, import_index_c6d9d557.d)("alt", photo.caption, 0)}>`;
  })}` : `${profilePhotos.length === 0 ? `<div class="${"flex justify-center ml-auto mr-auto"}"><p>There are no photos to be displayed.</p></div>` : ``}`}</div></div></div></div>`;
});
async function load({ params }) {
  let pageId = params.id;
  try {
    const user = await import_firebase_95a32990.f.firestore().collection("users").where("username", "==", pageId).get();
    const fetchedUser = user.docs.map((item) => __spreadProps(__spreadValues({}, item.data()), { id: item.data().username }));
    const result = fetchedUser.find((user2) => user2.id === pageId);
    return { props: { result } };
  } catch (err) {
    const error = err.message;
    return { props: { error } };
  }
}
const U5Bidu5D = (0, import_index_c6d9d557.c)(($$result, $$props, $$bindings, slots) => {
  let { result } = $$props;
  let { error } = $$props;
  if ($$props.result === void 0 && $$bindings.result && result !== void 0)
    $$bindings.result(result);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  return `${$$result.head += `${$$result.title = `<title>Instagram - Profile</title>`, ""}`, ""}

${result ? `${(0, import_index_c6d9d557.v)(Profile, "Profile").$$render($$result, {
    profileId: result.userId,
    username: result.username,
    fullName: result.fullName,
    followers: result.followers.length,
    following: result.following,
    followed: result.followed
  }, {}, {})}` : `<p>${(0, import_index_c6d9d557.e)(error)}</p>`}`;
});
