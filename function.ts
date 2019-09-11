

export function parameterTest(param1: number, param2?: number, param3: number=4, ...moreParams: number[]) {

}

parameterTest(1);
parameterTest(2,23);
parameterTest(4,4,4);

export function parameterTest2(...moreParams: number[]) {

}

// Rest parameters
parameterTest2(1);
parameterTest2(1,2,3,3,3,3,3,3,3,3,3);




