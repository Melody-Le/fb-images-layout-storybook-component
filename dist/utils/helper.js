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
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";
import { act } from "react-dom/test-utils";
var checkAllItemInList = function (itemList, targetIndex, keyAttribute) { return [
    itemList.forEach(function (item, index) { return __awaiter(void 0, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!(index === targetIndex)) return [3 /*break*/, 2];
                    return [4 /*yield*/, expect(item).toHaveAttribute(keyAttribute, "true")];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 4];
                case 2: return [4 /*yield*/, expect(item).toHaveAttribute(keyAttribute, "false")];
                case 3:
                    _a = _b.sent();
                    _b.label = 4;
                case 4:
                    _a;
                    return [2 /*return*/];
            }
        });
    }); }),
]; };
export var sleep = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
export var testNumberOfImages = function (canvasElement, expectedNumberOfImgs) { return __awaiter(void 0, void 0, void 0, function () {
    var canvas, getByTestId, getAllByRole, imageGrid, imgItems;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                canvas = within(canvasElement);
                getByTestId = canvas.getByTestId, getAllByRole = canvas.getAllByRole;
                imageGrid = getByTestId("imgGrid");
                return [4 /*yield*/, getAllByRole("img")];
            case 1:
                imgItems = _a.sent();
                return [4 /*yield*/, expect(imgItems).toHaveLength(expectedNumberOfImgs)];
            case 2:
                _a.sent();
                return [4 /*yield*/, expect(imageGrid).toBeInTheDocument()];
            case 3:
                _a.sent();
                return [4 /*yield*/, expect(imageGrid).toHaveStyle("display: grid")];
            case 4:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
export var testCarouselFirstMount = function (canvasElement, firstClickIndex, expectedTotalNumberOfImgs) { return __awaiter(void 0, void 0, void 0, function () {
    var canvas, queryByTestId, queryAllByRole, imgSliderList, indicatorBtnList, indicatorImgList;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                canvas = within(canvasElement);
                queryByTestId = canvas.queryByTestId, queryAllByRole = canvas.queryAllByRole;
                imgSliderList = queryAllByRole("img", { name: "img-slider" });
                indicatorBtnList = queryAllByRole("button", {
                    name: "indicator-btn",
                });
                indicatorImgList = queryAllByRole("img", {
                    name: "indicator-img",
                });
                return [4 /*yield*/, expect(queryByTestId("carousel")).toBeVisible()];
            case 1:
                _a.sent();
                return [4 /*yield*/, expect(queryByTestId("img-slider-".concat(firstClickIndex))).toBeVisible()];
            case 2:
                _a.sent();
                return [4 /*yield*/, expect(imgSliderList).toHaveLength(expectedTotalNumberOfImgs)];
            case 3:
                _a.sent();
                return [4 /*yield*/, checkAllItemInList(imgSliderList, firstClickIndex, "data-visible")];
            case 4:
                _a.sent();
                return [4 /*yield*/, expect(indicatorBtnList).toHaveLength(expectedTotalNumberOfImgs)];
            case 5:
                _a.sent();
                return [4 /*yield*/, checkAllItemInList(indicatorBtnList, firstClickIndex, "data-active")];
            case 6:
                _a.sent();
                return [4 /*yield*/, expect(indicatorImgList).toHaveLength(expectedTotalNumberOfImgs)];
            case 7:
                _a.sent();
                return [4 /*yield*/, checkAllItemInList(indicatorImgList, firstClickIndex, "data-active")];
            case 8:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
export var testCarouselSecondClick = function (canvasElement, secondClickIndex) { return __awaiter(void 0, void 0, void 0, function () {
    var canvas, queryAllByRole;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                canvas = within(canvasElement);
                queryAllByRole = canvas.queryAllByRole;
                return [4 /*yield*/, userEvent.click(queryAllByRole("img", {
                        name: "indicator-img",
                    })[secondClickIndex])];
            case 1:
                _a.sent();
                return [4 /*yield*/, sleep(2000)];
            case 2:
                _a.sent();
                return [4 /*yield*/, checkAllItemInList(queryAllByRole("img", { name: "img-slider" }), secondClickIndex, "data-visible")];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
export var userPresESC = function (canvasElement) { return __awaiter(void 0, void 0, void 0, function () {
    var canvas, event, imageGrid;
    return __generator(this, function (_a) {
        canvas = within(canvasElement);
        event = new KeyboardEvent("keydown", { key: "Escape" });
        act(function () {
            document.dispatchEvent(event);
        });
        imageGrid = canvas.getByTestId("imgGrid");
        expect(imageGrid).toBeInTheDocument();
        return [2 /*return*/];
    });
}); };
