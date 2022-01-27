const expectChai = require('chai').expect;

// let x = [ '$ 399.00', '$ 429.00' ];
// let z = [ '$ 429.00', '$ 399.00' ];
// let y = x.slice().reverse();
// console.log(x)
// console.log(y)
// console.log(z)
function validate(){
expectChai(x).to.eql(y);
console.log('hello');
}
function mysort() {
    let xx = [399, 429, 499,  499,  549, 599, 599, 599,  649,  699, 699, 799, 899,  899,  899, 899, 999, 999, 1199, 1299, 1399 ]
    console.dir(xx.slice().sort(function(a, b){return a-b}));
}
//validate();

//mysort();
