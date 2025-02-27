"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var utils_1 = require("./utils");
var validation_1 = require("./validation");
var constants_1 = require("./constants");
var ReactImageUploading = function (_a) {
    var _b = _a.value, value = _b === void 0 ? [] : _b, onChange = _a.onChange, onError = _a.onError, children = _a.children, _c = _a.dataURLKey, dataURLKey = _c === void 0 ? constants_1.DEFAULT_DATA_URL_KEY : _c, _d = _a.multiple, multiple = _d === void 0 ? false : _d, _e = _a.maxNumber, maxNumber = _e === void 0 ? constants_1.INIT_MAX_NUMBER : _e, acceptType = _a.acceptType, maxFileSize = _a.maxFileSize, resolutionWidth = _a.resolutionWidth, resolutionHeight = _a.resolutionHeight, resolutionType = _a.resolutionType, _f = _a.inputProps, inputProps = _f === void 0 ? {} : _f;
    var inValue = value || [];
    var inputRef = (0, react_1.useRef)(null);
    var _g = (0, react_1.useState)(constants_1.DEFAULT_NULL_INDEX), keyUpdate = _g[0], setKeyUpdate = _g[1];
    var _h = (0, react_1.useState)(null), errors = _h[0], setErrors = _h[1];
    var _j = (0, react_1.useState)(false), isDragging = _j[0], setIsDragging = _j[1];
    var handleClickInput = (0, react_1.useCallback)(function () { return (0, utils_1.openFileDialog)(inputRef); }, [
        inputRef,
    ]);
    var onImageUpload = (0, react_1.useCallback)(function () {
        setKeyUpdate(constants_1.DEFAULT_NULL_INDEX);
        handleClickInput();
    }, [handleClickInput]);
    var onImageRemoveAll = (0, react_1.useCallback)(function () {
        onChange === null || onChange === void 0 ? void 0 : onChange([]);
    }, [onChange]);
    var onImageRemove = function (index) {
        var updatedList = __spreadArray([], inValue, true);
        if (Array.isArray(index)) {
            index.forEach(function (i) {
                updatedList.splice(i, 1);
            });
        }
        else {
            updatedList.splice(index, 1);
        }
        onChange === null || onChange === void 0 ? void 0 : onChange(updatedList);
    };
    var onImageUpdate = function (index) {
        setKeyUpdate(index);
        handleClickInput();
    };
    var validate = function (fileList) { return __awaiter(void 0, void 0, void 0, function () {
        var errorsValidation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, validation_1.getErrorValidation)({
                        fileList: fileList,
                        maxFileSize: maxFileSize,
                        maxNumber: maxNumber,
                        acceptType: acceptType,
                        keyUpdate: keyUpdate,
                        resolutionType: resolutionType,
                        resolutionWidth: resolutionWidth,
                        resolutionHeight: resolutionHeight,
                        value: inValue,
                    })];
                case 1:
                    errorsValidation = _a.sent();
                    if (errorsValidation) {
                        setErrors(errorsValidation);
                        onError === null || onError === void 0 ? void 0 : onError(errorsValidation, fileList);
                        return [2 /*return*/, false];
                    }
                    errors && setErrors(null);
                    return [2 /*return*/, true];
            }
        });
    }); };
    var handleChange = function (files) { return __awaiter(void 0, void 0, void 0, function () {
        var fileList, checkValidate, updatedFileList, updatedIndexes, firstFile, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!files)
                        return [2 /*return*/];
                    return [4 /*yield*/, (0, utils_1.getListFiles)(files, dataURLKey)];
                case 1:
                    fileList = _a.sent();
                    if (!fileList.length)
                        return [2 /*return*/];
                    return [4 /*yield*/, validate(fileList)];
                case 2:
                    checkValidate = _a.sent();
                    if (!checkValidate)
                        return [2 /*return*/];
                    updatedIndexes = [];
                    if (keyUpdate > constants_1.DEFAULT_NULL_INDEX) {
                        firstFile = fileList[0];
                        updatedFileList = __spreadArray([], inValue, true);
                        updatedFileList[keyUpdate] = firstFile;
                        updatedIndexes.push(keyUpdate);
                    }
                    else if (multiple) {
                        updatedFileList = __spreadArray(__spreadArray([], inValue, true), fileList, true);
                        for (i = inValue.length; i < updatedFileList.length; i += 1) {
                            updatedIndexes.push(i);
                        }
                    }
                    else {
                        updatedFileList = [fileList[0]];
                        updatedIndexes.push(0);
                    }
                    onChange === null || onChange === void 0 ? void 0 : onChange(updatedFileList, updatedIndexes);
                    return [2 /*return*/];
            }
        });
    }); };
    var onInputChange = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, handleChange(e.target.files)];
                case 1:
                    _a.sent();
                    keyUpdate > constants_1.DEFAULT_NULL_INDEX && setKeyUpdate(constants_1.DEFAULT_NULL_INDEX);
                    if (inputRef.current)
                        inputRef.current.value = '';
                    return [2 /*return*/];
            }
        });
    }); };
    var acceptTypeString = (0, react_1.useMemo)(function () { return (0, utils_1.getAcceptTypeString)(acceptType); }, [
        acceptType,
    ]);
    var handleDrag = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    var handleDragIn = function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            setIsDragging(true);
        }
    };
    var handleDragOut = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
    };
    var handleDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
            handleChange(e.dataTransfer.files);
        }
    };
    var handleDragStart = function (e) {
        e.preventDefault();
        e.stopPropagation();
        e.dataTransfer.clearData();
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("input", __assign({ type: "file", accept: acceptTypeString, ref: inputRef, multiple: multiple && keyUpdate === constants_1.DEFAULT_NULL_INDEX, onChange: onInputChange, style: { display: 'none' } }, inputProps)), children === null || children === void 0 ? void 0 :
        children({
            imageList: inValue,
            onImageUpload: onImageUpload,
            onImageRemoveAll: onImageRemoveAll,
            onImageUpdate: onImageUpdate,
            onImageRemove: onImageRemove,
            errors: errors,
            dragProps: {
                onDrop: handleDrop,
                onDragEnter: handleDragIn,
                onDragLeave: handleDragOut,
                onDragOver: handleDrag,
                onDragStart: handleDragStart,
            },
            isDragging: isDragging,
        })));
};
exports.default = ReactImageUploading;
