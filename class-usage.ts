

export interface Interface1 {
    name: string;
}

export interface Interface2 extends Interface1 {
    description: string;
}

const var2: Interface2 = {
    name:'name',
    description: 'desc',
}

export class Class1 implements Interface1 {
    name: string;
}

export class Class2 implements Class1, Interface2 {
    name: string;
    description: string;
}

const var3: Class2 = {
    name : '',
    description: ''
}