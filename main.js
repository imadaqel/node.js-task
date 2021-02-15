'use strict';
var fs = require('fs');
var parse = require('csv-parse');
var inputFile = './MOCK_DATA.csv';
var arr = []
var count = 0;
var readPlain = parse({ delimiter: ',' }, function (err, data) {
    data.forEach(function (line) {
        var country = {
            "id": line[0]
            , "first_name": line[1]
            , "last_name": line[2]
            , "email": line[4]
            , "gender": line[5]
            , "ip_address": line[6]
            , "color": line[7]
            , "parentId": line[0]
        };
        count++;
        if (count > 1) {
            arr.push(country);
        }
        if (count == 200) {
            console.log(arr);
            var data = JSON.stringify(arr)
            saveToFile(data)
        }
    });
});
let reader = fs.createReadStream(inputFile).pipe(readPlain);

function saveToFile(data) {
    fs.writeFile('MOCK_DATA.json', data, (err) => {
        if (err) throw err;
        console.log('Lyric saved!');
    });
}

function readJsonFile() {
    fs.readFile('./MOCK_DATA.json', 'utf8', function (err, data) {
        console.log(data);
    });
    console.log('readFile called');
}
// readJsonFile()