class MyClass {
    private fs = require('fs');

    constructor() {
    }

    createFile(data) {

        this.fs.writeFile('file.txt', data, {flag: "a"}, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    }

    showFile() {
        this.fs.readFile('file.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
        });
    }
}

var obj = new MyClass();
obj.createFile('linh\n');
obj.createFile('linh\n');
obj.createFile('linh\n');
obj.showFile();