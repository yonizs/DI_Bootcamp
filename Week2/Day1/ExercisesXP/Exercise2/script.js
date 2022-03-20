let myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

let myWatchedSeriesLength = myWatchedSeries.length;

let myWatchedSeriesSentence =myWatchedSeries[0] + ', ' + myWatchedSeries[1] + ', and ' + myWatchedSeries[2];

console.log(`I watched ${myWatchedSeriesLength} series : ${myWatchedSeriesSentence}`);

myWatchedSeries[2] = 'friends';

myWatchedSeries.splice(0,1);

console.log(myWatchedSeries[0].slice(2,3));
