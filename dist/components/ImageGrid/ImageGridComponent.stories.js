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
import { jsx as _jsx } from "react/jsx-runtime";
import { within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import UseUnsplashApi from "../../hooks/useUnsplashApi";
import ImageGrid from "./ImageGridComponent";
var meta = {
    component: ImageGrid,
    render: function (args, _a) {
        var images = _a.loaded.images;
        return (_jsx(ImageGrid, __assign({}, args, { images: images })));
    },
    title: "ImageGrid",
    tags: ["autodocs"],
};
export default meta;
export var Base = {
    loaders: [
        function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, UseUnsplashApi()];
                    case 1: return [2 /*return*/, (_a.images = _b.sent(),
                            _a)];
                }
            });
        }); },
    ],
    args: {
        imagesGridMaxWidth: "30rem",
        imagesGridHeight: "20rem",
    },
    play: function (_a) {
        var canvasElement = _a.canvasElement;
        return __awaiter(void 0, void 0, void 0, function () {
            var canvas, imageWrapper;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        canvas = within(canvasElement);
                        imageWrapper = canvas.getByTestId("wrapper");
                        return [4 /*yield*/, expect(imageWrapper).toBeInTheDocument()];
                    case 1:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
};
export var OneImage = {
    loaders: [
        function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, UseUnsplashApi(1)];
                    case 1: return [2 /*return*/, (_a.images = _b.sent(),
                            _a)];
                }
            });
        }); },
    ],
    args: {
        imagesGridMaxWidth: "30rem",
        imagesGridHeight: "20rem",
    },
};
export var TwoImages = {
    loaders: [
        function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, UseUnsplashApi(2)];
                    case 1: return [2 /*return*/, (_a.images = _b.sent(),
                            _a)];
                }
            });
        }); },
    ],
    args: {
        imagesGridMaxWidth: "30rem",
        imagesGridHeight: "20rem",
    },
};
export var ThreeImages = {
    loaders: [
        function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, UseUnsplashApi(3)];
                    case 1: return [2 /*return*/, (_a.images = _b.sent(),
                            _a)];
                }
            });
        }); },
    ],
    args: {
        imagesGridMaxWidth: "30rem",
        imagesGridHeight: "20rem",
    },
};
export var FourImages = {
    loaders: [
        function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, UseUnsplashApi(4)];
                    case 1: return [2 /*return*/, (_a.images = _b.sent(),
                            _a)];
                }
            });
        }); },
    ],
    args: {
        imagesGridMaxWidth: "30rem",
        imagesGridHeight: "20rem",
    },
};
export var FiveImages = {
    loaders: [
        function () { return __awaiter(void 0, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = {};
                        return [4 /*yield*/, UseUnsplashApi(5)];
                    case 1: return [2 /*return*/, (_a.images = _b.sent(),
                            _a)];
                }
            });
        }); },
    ],
    args: {
        imagesGridMaxWidth: "30rem",
        imagesGridHeight: "20rem",
    },
};
