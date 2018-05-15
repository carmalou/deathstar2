export function pushRoomsToServer(rooms) {
    var open = window.indexedDB.open('deathstar2');
    var arr = [];

    open.onsuccess = function(event) {
        console.log('hello');
        var db = event.target.result;
        var tmpTransaction = db.transaction('rooms', 'readonly');
        tmpTransaction.objectStore('rooms').getAll().onsuccess = function(event) {
            var rooms = event.target.result;
            for(var i = 0; i < rooms.length; i++) {
                var tmpRecord = {
                    keyName: rooms[i].keyName,
                    displayName: rooms[i].displayName
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