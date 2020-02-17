"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../../utils/styles/styles_utils");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = function styles(theme) {
  var spacing = theme.miscellaneous.spacing;
  return _defineProperty({
    addButtonDashed: {
      height: 365,
      width: 300,
      margin: spacing * 2
    },
    sortableHelper: {
      zIndex: 2120
    }
  }, (0, _styles_utils.createScreenWidthMediaQuery)('max-width', theme.screenSizes.small), {
    addButtonDashed: {
      height: 75,
      minHeight: 75
    }
  });
};

exports.styles = styles;