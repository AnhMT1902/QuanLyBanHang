var MyClass = /** @class */ (function () {
    function MyClass() {
        // Here we import the File System module of node
        this.fs = require('fs');
    }
    MyClass.prototype.createFile = function (data) {
        this.fs.writeFile('file.txt', data, { flag: "a" }, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    };
    MyClass.prototype.showFile = function () {
        this.fs.readFile('file.txt', function (err, data) {
            if (err) {
                return console.error(err);
            }
            console.log("Asynchronous read: " + data.toString());
        });
    };
    return MyClass;
}());
var obj = new MyClass();
obj.createFile('linh\n');
obj.createFile('linh\n');
obj.createFile('linh\n');
obj.showFile();
