var APP = APP || {};
APP.DB = (function() {
    var db,
        cfg = {
            name: 'Twitter.db',
            version: '1.0',
            description: 'Twitter database',
            size: 1 * 1024 * 1024
        };
    var createTabla = "create table if not exists tweets (id TEXT CONSTRAINT pk_tweet PRIMARY KEY,text TEXT, author TEXT,created_at INTEGER)";
    //crear base de datos o abrirla si existe
    try {
        db = openDatabase(cfg.name, cfg.version, cfg.description, cfg.size);
        var createSchema = function(tx) {
            tx.executeSql(createTabla, [], function(tx, results) {
                console.log(results);
                console.log('Database created!');
            }, function(tx, error) {
                console.log('DbError: ' + error);
            });
        };
        db.transaction(createSchema);
    } catch (e) {

        //cuando intenta abrir otra version el codigo de error es el 11,
        //asi que si da el error cambiamos de version
        if (e.code === 11) {
            db.changeVersion('2.o');
            //si cambia la version hay que mirar que ha cambiado(tablas,
            //campos,...) y modificar todo lo necesario
        }
        console.log(e);
    }
    var insert = function(tweet) {
        db.transaction(function(tx) {
            var insert = "insert into tweets values(?,?,?,?);";
            tx.executeSql(insert, [tweet.id,tweet.text,tweet.author,tweet.created_at], function(tx, results) {
                console.log('tweet inserted!!');
                console.log(results);
            }, function(tx, error) {
                console.log("error insert");
            });
        });
    };
       var getAll= function(success) {
        db.transaction(function(tx) {
            var selectAll= "select * from tweets order by created_at desc";
            tx.executeSql(selectAll, [], function(tx, results) {
                console.log(results.rows);
                var datos=[];
                for (var i = rows.length - 1; i >= 0; i--) {
                	arr.push(results.rows.item(i));
                }
                success(datos);
                console.log("error getAll");
            });
        });
    };
    //para hacer publicas las funciones
    return {
    	"insert":insert,
    	"getAll":getAll
    };
})();
