function validateUnionType(value: any, allowedTypes: string[]): boolean {
  return allowedTypes.includes(typeof value);
}

console.log(validateUnionType("hello", ["string"])); 
console.log(validateUnionType(42, ["string", "number"])); 
console.log(validateUnionType(true, ["string"]));