/* Vistar appið svo það opnist líka án netsambands. Nær alltaf í nýjustu útgáfu þegar net er til staðar. */
var C="vt27-v8";
self.addEventListener("install",function(e){self.skipWaiting();e.waitUntil(caches.open(C).then(function(c){return c.addAll(["./","./index.html","./manifest.webmanifest","./icon-192.png","./apple-touch-icon.png","./kort-heim.jpg"])}))});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim())});
self.addEventListener("fetch",function(e){var r=e.request;if(r.method!=="GET")return;var u=new URL(r.url);
 if(u.origin!==location.origin&&!/fonts\.(googleapis|gstatic)\.com$/.test(u.hostname))return;
 e.respondWith(fetch(r).then(function(res){if(res&&(res.ok||res.type==="opaque")){var cp=res.clone();caches.open(C).then(function(c){c.put(r,cp)})}return res}).catch(function(){return caches.match(r).then(function(m){return m||caches.match("./index.html")})}))});
