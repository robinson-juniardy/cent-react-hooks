"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const react_1 = tslib_1.__importDefault(require("react"));
function useStateManager(props) {
    const [get, set] = react_1.default.useState(props.state);
    return {
        GET: get,
        SET: set,
    };
}
exports.default = useStateManager;
//# sourceMappingURL=index.js.map