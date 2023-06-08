// && -> and e
// || -> or ou
// ! -> not não

let n1, n2, n3, n4;
n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

//console.log((n1>n2)&&(n1>n3)); //como ela é regida pelo AND resultado true e false

//console.log((n1>n2)||(n1>n3));  // Ela é regida pelo OU o resultado e true e true

//console.log(!((n1>n2)||(n1>n3))); //operador de negação ou inversão

/*if (n1 > n2) {
  console.log(n1 + " maior que " + n2);
} else {
  console.log(n1 + " menor que " + n2);
}*/
if (!(n1 > n2) && (n3 > n4)) {
  console.log("Verdadeiro");
} else{
  console.log("Falso");
};
