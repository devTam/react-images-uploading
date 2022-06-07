"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListFiles = exports.getImage = exports.getBase64 = exports.getAcceptTypeString = exports.openFileDialog = void 0;
var openFileDialog = function (inputRef) {
    if (inputRef.current)
        inputRef.current.click();
};
exports.openFileDialog = openFileDialog;
var getAcceptTypeString = function (acceptType) {
    return acceptType && acceptType.length > 0
        ? acceptType.map(function (item) { return ".".concat(item); }).join(', ')
        : 'image/*';
};
exports.getAcceptTypeString = getAcceptTypeString;
var getBase64 = function (file) {
    var reader = new FileReader();
    return new Promise(function (resolve) {
        reader.addEventListener('load', function () { return resolve(String(reader.result)); });
        reader.readAsDataURL(file);
    });
};
exports.getBase64 = getBase64;
var getImage = function (file) {
    var image = new Image();
    return new Promise(function (resolve) {
        image.addEventListener('load', function () { return resolve(image); });
        image.src = URL.createObjectURL(file);
    });
};
exports.getImage = getImage;
var getListFiles = function (files, dataURLKey) {
    var promiseFiles = [];
    for (var i = 0; i < files.length; i += 1) {
        promiseFiles.push((0, exports.getBase64)(files[i]));
    }
    return Promise.all(promiseFiles).then(function (fileListBase64) {
        var fileList = fileListBase64.map(function (base64, index) {
            var _a;
            return (_a = {},
                _a[dataURLKey] = base64,
                _a.file = files[index],
                _a);
        });
        return fileList;
    });
};
exports.getListFiles = getListFiles;
