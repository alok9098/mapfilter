const numbers =[1,2,3,4];
const double = numbers.map(item=>item*2);
console.log(double);
//filter
/*const nomber =[22,23,24,25,26];
const even = nomber.filter(item=>item%2==-0);
console.log(even);*/
 const student =[
    {name:'alok',grade:99},
    {name:'anmol',grade:40},
    {name:'anad',grade:95},
    {name:'alkk',grade:46},
    {name:'pank',grade:97},
 ];
 const sgrade = student.filter(student=>student.grade>=90);
 console.log(sgrade);

