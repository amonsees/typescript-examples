


let animals = ['cat','dog','zebra'];

for(let i=0; i<animals.length; i++) {
  const animal = animals[i];
  console.log(animal);
}

for(const animal of animals) {
    console.log(animal);
}

for(const index in animals) {
    console.log(index);
}


    let cat = {
        name: 'cat',
        numberOfLegs: 4
    };

    for(const property in cat) {
        let value = cat[property];
        
        console.log(`${property} = ${cat[property]}`);
    }