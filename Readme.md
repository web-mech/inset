# Inset

### A super-simple, ultra-lightweight (323B) interpolation module

#### Usage

```
const inset = require('inset');

let sentence = inset('Hi, My name is {person.name.first} and I am {person.age}', {
  person: {
    name: {
      first: 'Mike'
    },
    age: 40
  }
});

// Hi, My name is Mike and I am 40'
```

