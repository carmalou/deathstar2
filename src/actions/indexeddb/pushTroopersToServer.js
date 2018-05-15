export function pushTroopersToServer(rooms) {
    var open = window.indexedDB.open('deathstar2');
    var arr = [];

    open.onsuccess = function(event) {
        console.log('hello');
        var db = event.target.result;
        var tmpTransaction = db.transaction('stormtroopers', 'readonly');
        tmpTransaction.objectStore('stormtroopers').getAll().onsuccess = function(event) {
            var troopers = event.target.result;
            for(var i = 0; i < troopers.length; i++) {
                var tmpRecord = {
                    name: troopers[i].name,
                    trashCompactorAccess: troopers[i].trashCompactorAccess,
                    messHallAccess: troopers[i].messHallAccess,
                    landingStripAccess: troopers[i].landingStripAccess,
                    armoryAccess: troopers[i].armoryAccess
                };
                arr.push(tmpRecord);
            }
        }

        tmpTransaction.oncomplete = function(event) {
            // now we would be ready to make our AJAX call
            console.log(arr);
        }
    }
}