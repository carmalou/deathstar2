export function generateDB() {
    var db = window.indexedDB.open('deathstar2', 1);

    db.onupgradeneeded = function(event) {
        console.log('hello from line 5');
        
        var tmpDb = event.target.result;
        var trooperStore = tmpDb.createObjectStore("stormtroopers", { keyPath: 'name' });
        var shipStore = tmpDb.createObjectStore("rooms", { keyPath: "id", autoIncrement: true });

        trooperStore.createIndex("trashCompactorAccess", "trashCompactorAccess", { unique: false });
        trooperStore.createIndex("messHallAccess", "messHallAccess", { unique: false });	
        trooperStore.createIndex("landingStripAccess", "landingStripAccess", { unique: false });	
        trooperStore.createIndex("armoryAccess", "armoryAccess", { unique: false });

        shipStore.createIndex("keyName", "keyName", { unique: true });
        shipStore.createIndex("displayName", "displayName", { unique: true });
    }
}