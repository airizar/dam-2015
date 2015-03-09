var APP = APP || {};
APP.DB = (function() {
    var db,
        cfg = {
            name: 'Twitter.db',
            version: 2,
            description: 'Twitter database',
            size: 1 * 1024 * 1024
        };
    var init = function(success) {
        if (!db) {
            var request = indexedDB.open(cfg.name, cfg.version);
            //si la version es igual
            request.addEventListener('success', function(e) {
                console.log("ok");
                db = e.target.result;
                success();
            });
            //si es una version diferente
            request.addEventListener('upgradeneeded', function(e) {
                console.log("updating database...");
                db = e.target.result;
                //crear tabla
                var tweets = db.createObjectStore('tweets', {
                    keyPath: 'id',
                    autoIncrement: false
                });
                console.log(tweets);
            });
            request.addEventListener('error', function(e) {
                console.log("ko");
            });
        } else {
            success();
        }
    };
    var insert = function(tweet) {
        //array de tablas o almacenes que quiero bloquear, modo transaccion
        init(function() {
            var transaction = db.transaction(['tweets'], "readwrite");
            var store = transaction.objectStore('tweets');
            var request = store.add(tweet);
        });

        //otra opcion para añadir, la diferencia es que add añade o da error y el put añade o actualiza
        //var request = store.put(tweet);

    };
    var get = function(keypath, success) {
        init(function() {
            var transaction = db.transaction(['tweets'], "readonly");
            var store = transaction.objectStore('tweets');
            var getRequest = store.get(keypath);
            getRequest.addEventListener('success', function(e) {
                success(e.target.resutl);
            });
        });

    };
    return {
        insert: insert,
        get: get
    };
})();
