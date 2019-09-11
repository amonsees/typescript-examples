

let animals = ['cat','dog','zebra'];

console.log('Traditional For')
for(let i=0; i<animals.length; i++) {
  const animal = animals[i];
  console.log(animal);
}

console.log('------------');
console.log('For Of');
for(const animal of animals) {
    console.log(animal);
}

console.log('------------');
console.log('For In - Array');
for(const index in animals) {
    console.log(index);
}


const cat = {
    name: 'cat',
    numberOfLegs: 4,
};

console.log('------------');
console.log('For In - Object');
for(const property in cat) {
    
    let value = (cat as any)[property];
    
    console.log(`${property} = ${value}`);
}