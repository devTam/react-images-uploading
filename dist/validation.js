"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorValidation = exports.isMaxNumberValid = exports.isAcceptTypeValid = exports.isMaxFileSizeValid = exports.isResolutionValid = void 0;
var constants_1 = require("./constants");
var utils_1 = require("./utils");
var isResolutionValid = function (image, resolutionType, resolutionWidth, resolutionHeight) {
    if (resolutionWidth === void 0) { resolutionWidth = 0; }
    if (resolutionHeight === void 0) { resolutionHeight = 1; }
    if (!resolutionWidth || !resolutionHeight || !image.width || !image.height)
        return true;
    switch (resolutionType) {
        case 'absolute': {
            if (image.width === resolutionWidth && image.height === resolutionHeight)
                return true;
            break;
        }
        case 'ratio': {
            var ratio = resolutionWidth / resolutionHeight;
            if (image.width / image.height === ratio)
                return true;
            break;
        }
        case 'less': {
            if (image.width <= resolutionWidth && image.height <= resolutionHeight)
                return true;
            break;
        }
        case 'more': {
            if (image.width >= resolutionWidth && image.height >= resolutionHeight)
                return true;
            break;
        }
        default:
            break;
    }
    return false;
};
exports.isResolutionValid = isResolutionValid;
// export const isImageValid = (fileType: string) => {
//   if (fileType.includes('image')) {
//     return true;
//   }
//   return false;
// };
var isMaxFileSizeValid = function (fileSize, maxFileSize) {
    return maxFileSize ? fileSize <= maxFileSize : true;
};
exports.isMaxFileSizeValid = isMaxFileSizeValid;
var isAcceptTypeValid = function (acceptType, fileName) {
    if (acceptType && acceptType.length > 0) {
        var type_1 = fileName.split('.').pop() || '';
        if (acceptType.findIndex(function (item) { return item.toLowerCase() === type_1.toLowerCase(); }) < 0)
            return false;
    }
    return true;
};
exports.isAcceptTypeValid = isAcceptTypeValid;
var isMaxNumberValid = function (totalNumber, maxNumber, keyUpdate) {
    if (maxNumber !== 0 && !maxNumber)
        return true;
    if (keyUpdate === constants_1.DEFAULT_NULL_INDEX) {
        if (totalNumber <= maxNumber)
            return true;
    }
    else if (totalNumber <= maxNumber + 1)
        return true;
    return false;
};
exports.isMaxNumberValid = isMaxNumberValid;
var getErrorValidation = function (_a) {
    var fileList = _a.fileList, value = _a.value, maxNumber = _a.maxNumber, keyUpdate = _a.keyUpdate, acceptType = _a.acceptType, maxFileSize = _a.maxFileSize, resolutionType = _a.resolutionType, resolutionWidth = _a.resolutionWidth, resolutionHeight = _a.resolutionHeight;
    return __awaiter(void 0, void 0, void 0, function () {
        var newErrors, i, file, image, checkRes;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    newErrors = {};
                    if (!!(0, exports.isMaxNumberValid)(fileList.length + value.length, maxNumber, keyUpdate)) return [3 /*break*/, 1];
                    newErrors.maxNumber = true;
                    return [3 /*break*/, 5];
                case 1:
                    i = 0;
                    _b.label = 2;
                case 2:
                    if (!(i < fileList.length)) return [3 /*break*/, 5];
                    file = fileList[i].file;
                    if (!file)
                        return [3 /*break*/, 4];
                    // if (!isImageValid(file.type)) {
                    //   newErrors.acceptType = true;
                    //   break;
                    // }
                    if (!(0, exports.isAcceptTypeValid)(acceptType, file.name)) {
                        newErrors.acceptType = true;
                        return [3 /*break*/, 5];
                    }
                    if (!(0, exports.isMaxFileSizeValid)(file.size, maxFileSize)) {
                        newErrors.maxFileSize = true;
                        return [3 /*break*/, 5];
                    }
                    if (!resolutionType) return [3 /*break*/, 4];
                    return [4 /*yield*/, (0, utils_1.getImage)(file)];
                case 3:
                    image = _b.sent();
                    checkRes = (0, exports.isResolutionValid)(image, resolutionType, resolutionWidth, resolutionHeight);
                    if (!checkRes) {
                        newErrors.resolution = true;
                        return [3 /*break*/, 5];
                    }
                    _b.label = 4;
                case 4:
                    i += 1;
                    return [3 /*break*/, 2];
                case 5:
                    if (Object.values(newErrors).find(Boolean))
                        return [2 /*return*/, newErrors];
                    return [2 /*return*/, null];
            }
        });
    });
};
exports.getErrorValidation = getErrorValidation;
