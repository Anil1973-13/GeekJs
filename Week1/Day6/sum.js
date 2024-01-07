let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
  var sum=0;
Object.keys(salaries).forEach((salary) => {
sum+=salaries[salary]
}  )

console.log(sum)