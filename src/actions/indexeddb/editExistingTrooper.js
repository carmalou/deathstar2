export function editTrooper(trooper) {
    if(!trooper) {
        return;
    }
    
    console.log(trooper);
    var db = window.indexedDB.open('deathstar2');

    db.onsuccess = function(event) {
        var db = event.target.result;
        var objectStore = db.transaction("stormtroopers", "readwrite").objectStore("stormtroopers");
        var tmpTrooper = objectStore.get(trooper.name);

        tmpTrooper.onsuccess = function(event) {
            var oldTrooper = event.target.result;
            for(var prop in oldTrooper) {
                oldTrooper[prop] = trooper[prop]
            }

            objectStore.put(oldTrooper);
        }

        console.log(trooper);
    }
}