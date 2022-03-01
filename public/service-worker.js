const { version } = require("mongoose");

const APP_PREFIX = 'BudgetTracker-';
const VERSION = 'version_01';
const CASH_NAME = APP_PREFIX + VERSION;

const FILES_TO_CACHE = [
    "./index.html",
    "./js/idb.js",
    "./js/index.js",
    "./css/styles.css",
    "./icons/icon-128x128.png",
    "./icons/icon-144x144.png",
    "./icons/icon-152x152.png",
    "./icons/icon-192x192.png",
    "./icons/icon-384x384.png",
    "./icons/icon-512x512.png",
    "./icons/icon-72x72.png",
    "./icons/icon-96x96.png",
    "./manifest.json"
];

self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open(CASH_NAME).then(function (cache) {
            console.log('installing cache : ' + CASH_NAME)
            return cache.addAll(FILES_TO_CACHE)
        })
    )
});



