const expect = require('chai').expect;

const inset = require('..');

describe('inset', function() {
  it('Will interpolate a single word in a sentence given a context', function() {
    var sentence = inset('Hello {noun}', {
      noun: 'world!'
    });
    expect(sentence).to.equal('Hello world!');
  });

  it('Will interpolate multiple words in a sentence given a context', function() {
    var sentence = inset('Hi, My name is {name} and I am {age}', {
      name: 'Mike',
      age: 40
    });
    expect(sentence).to.equal('Hi, My name is Mike and I am 40');
  });

  it('Will interpolate multiple words in a sentences placed together given a context', function() {
    var sentence = inset('Hi, My name is {first},{last} and I am {age}', {
      first: 'Mike',
      last: 'Jones',
      age: 40
    });
    expect(sentence).to.equal('Hi, My name is Mike,Jones and I am 40');
  });

  it('Will interpolate using nested properties', function() {
    var sentence = inset('Hi, My name is {person.name.first} and I am {person.age}', {
      person: {
        name: {
          first: 'Mike'
        },
        age: 40
      }
    });
    expect(sentence).to.equal('Hi, My name is Mike and I am 40');
  });

  it('Will ignore properties that aren\'t found', function() {
    var sentence = inset('Hi, My name is {person.name.first} and I am 40{person.age}', {
      person: {
        name: {
          first: 'Mike'
        }
      }
    });
    expect(sentence).to.equal('Hi, My name is Mike and I am 40');
  });
});