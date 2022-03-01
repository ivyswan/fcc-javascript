// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (prop != recordCollection.tracks && value != "") {
        recordCollection[id][prop] = value;
        console.log("then set that album's prop to value");
    } else if (prop == recordCollection.tracks && prop == recordCollection.hasOwnProperty("tracks") == false) {
        recordCollection[id].tracks = [];
        recordCollection[id].tracks = value;
        console.log("then create an empty array and add value to it");
    } else if (prop == recordCollection.tracks && value != "") {
        recordCollection[id].tracks.push(value);
        console.log("then add value to the end of the album's existing tracks array");
    } else if (value == "") {
        delete recordCollection[id][prop];
        console.log("then delete the given prop property from the album");
    }
    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');