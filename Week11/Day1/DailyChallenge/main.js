"use strict";
function validateUnionType(value, allowedTypes) {
    return allowedTypes.includes(typeof value);
}
console.log(validateUnionType("hello", ["string"]));
console.log(validateUnionType(42, ["string", "number"]));
console.log(validateUnionType(true, ["string"]));
