export function addRoomToList(rooms) {
    var db = window.indexedDB.open('deathstar2');

    db.onsuccess = function(event) {
        var result = event.target.result;

        for(var i = 0; i < rooms.length; i++) {
            var tmpRecord = {
                keyName: rooms[i].keyName,
                displayName: rooms[i].displayName
            }

            result.transaction('rooms', 'readwrite').objectStore('rooms').add(tmpRecord);
        }
    }
}