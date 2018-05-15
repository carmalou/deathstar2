export function editTrooper(troopers) {
    if(!troopers || troopers.length <= 0) {
        return;
    }

    console.log(troopers);
    var db = window.indexedDB.open('deathstar2');

    db.onsuccess = function(event) {
        var db = event.target.result;
        var transaction = db.transaction("stormtroopers", "readwrite").objectStore("stormtroopers");
        for(var i = 0; i < troopers.length; i++) {
            var tmpTrooper = transaction.get(troopers[i].name);
            tmpTrooper.onsuccess = function(event) {
                console.log(event.target.result);
            }
        }

        console.log(troopers);
    }
}