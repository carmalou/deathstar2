export function editTrooper(trooper) {
    if(!trooper) {
        return;
    }
    
    console.log(trooper);
    var db = window.indexedDB.open('deathstar2');

    db.onsuccess = function(event) {
        var db = event.target.result;
        var transaction = db.transaction("stormtroopers", "readwrite").objectStore("stormtroopers");
        // var trooper = transaction.get(trooper.name);

        console.log(trooper);
    }
}