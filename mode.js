const mode = a => 
  Object.values(
    a.reduce((count, e) => {
      if (!(e in count)) {
        count[e] = [0, e];
      }
      
      count[e][0]++;
      return count;
    }, {})
  ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];
;

let vals = [5.15, 5.09, 5.37, 5.20, 4.90, 5.23, 5.52, 5.37, 5.13, 5.37, 5.21, 5.24];
console.log('Mode: ' + mode(vals).toFixed(2));

