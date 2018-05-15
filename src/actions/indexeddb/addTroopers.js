export function addTroopersToList(troopers) {
    var db = window.indexedDB.open('deathstar2');

    db.onsuccess = function(event) {
        var result = event.target.result;

        for(var i = 0; i < troopers.length; i++) {
            var tmpRecord = {
                name: troopers[i].name,
                trashCompactorAccess: troopers[i].trashCompactorAccess,
                messHallAccess: troopers[i].messHallAccess,
                landingStripAccess: troopers[i].landingStripAccess,
                armoryAccess: troopers[i].armoryAccess
            }

            result.transaction('stormtroopers', 'readwrite').objectStore('stormtroopers').add(tmpRecord);
        }
    }
}