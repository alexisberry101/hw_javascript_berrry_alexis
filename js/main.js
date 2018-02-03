var iceCream = ['chocolate', 'cookies and cream', 'cookie dough'];
var newLength = iceCream.push('butter pecan');

var presidents = [
{firstName: 'Donald', lastName: 'Trump', termLength: '1', party: 'Republican', yearsOfPresidency: '1'},
{firstName: 'Barack', lastName: 'Obama', termLength: '2', party: 'Democrat', yearsOfPresidency: '8'},
{firstName: 'George', lastName: 'Bush', termLength: '2', party: 'Republican', yearsOfPresidency: '8'},
{firstName: 'Bill', lastName: 'Clinton', termLength: '2', party: 'Democrat', yearsOfPresidency: '8'},
{firstName: 'George', lastName: 'Bush', termLength: '1', party: 'Republican', yearsOfPresidency: '4'}
];

var name = presidents[3];

function howdy() {
  return 'Alexis Berry says hello!';
}

howdy();
console.log( howdy() );

var numba = function ([string]) {
  if (7 > numba) {
    console.log('What a short little word!');
  } else if (7 < numba){
    console.log('I'm sorry, but that's too many to count.');
  } else {
    console.log('7, what a perfect choice!');
  }

}

console.log('7');
console.log('70');
console.log('university');

var combiner = function inception (display, favMovie) {
  retun display(favMovie)
};

var favMovie = combiner ('The Last Song is a fantastic movie.');
console.log(favMovie);
