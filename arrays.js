const movies = [ 'RRR', 'PK', 'Run', '365Days', 'KGF', 'Mard', ];

// Indexing

console.log(movies[4]);
console.log(movies.indexOf('Run'));

console.log(movies.at(-3));
console.log(movies.length);

//Slicing
console.log(movies.slice(2, 6));
console.log(movies.slice(1));
console.log(movies.slice(2, 104));

// Adding element 

console.log( [...movies, 'Barfi'] );
console.log( ['Batman', ...movies, 'Barfi'] );