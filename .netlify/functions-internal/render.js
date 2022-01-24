const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","icon.png","iphone-with-picture.png","jonas.jpg","loader.png","logo.png","ludo.jpg","photos/1.jpg","photos/2.jpg","photos/3.jpg","photos/4.jpg","photos/5.jpg","robots.txt","svelte-welcome.png","svelte-welcome.webp","ursula.jpg","xboy.jpg","yai.jpg"]),
	_: {
		mime: {".png":"image/png",".jpg":"image/jpeg",".txt":"text/plain",".webp":"image/webp"},
		entry: {"file":"start-a74092dd.js","js":["start-a74092dd.js","chunks/vendor-1cf4823d.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js')),
			() => Promise.resolve().then(() => require('../server/nodes/5.js')),
			() => Promise.resolve().then(() => require('../server/nodes/6.js'))
		],
		routes: [
			{
				type: 'page',
				pattern: /^\/$/,
				params: null,
				path: "/",
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/profile\/([^/]+?)\/?$/,
				params: (m) => ({ id: m[1]}),
				path: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/signup\/?$/,
				params: null,
				path: "/signup",
				a: [0,4],
				b: [1]
			},
			{
				type: 'page',
				pattern: /^\/login\/?$/,
				params: null,
				path: "/login",
				a: [0,5],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/todos\.json$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/todos/index.json.ts.js'))
			},
			{
				type: 'page',
				pattern: /^\/todos\/?$/,
				params: null,
				path: "/todos",
				a: [0,6],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/todos\/([^/]+?)\.json$/,
				params: (m) => ({ uid: m[1]}),
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/todos/_uid_.json.ts.js'))
			}
		]
	}
});
