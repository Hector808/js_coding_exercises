// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
   
  return word.substring(0,1).toUpperCase() + word.substring(1,word.length);
   
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  
  return (firstName.substring(0,1).concat('.', lastName.substring(0,1) ));
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  let vatAdd =(originalPrice*vatRate/100) + originalPrice;
   if (Number.isInteger == vatAdd) {
    return vatAdd;
   } else {
    return Number.parseFloat(vatAdd.toFixed(2));
   }

}


export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  let Discount =originalPrice - (originalPrice * reduction/100) ;
  if (Number.isInteger == Discount) {
   return Discount;
  }else {
    return Number.parseFloat(Discount.toFixed(2));
  }



}
export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  let long = (str.length/2);
  if (long % 1 == 0) {
    return (str.substring(long-1, long+1));
  }else{
    long = (str.length/2).toFixed();
    return str.charAt(long-1);
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

 let arrWord = word.split("");
 return arrWord.reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  let newArray = [];
  for (let index in words) {
    let aux = words[index]
    let separLett = aux.split("");
    let joinLett = (separLett.reverse().join(""));
    newArray [index] = joinLett;
  }
  return newArray ;

}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let count = 0;
  users.forEach(element => {
  if (element.type == "Linux"){
    count = count +1;
  }else{ 
    return (0);
  }
  });
return count ;
}


export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  let bigPoint=0;
  let add = 0;
  scores.forEach(function(scores, index) {
    bigPoint = index;
    add = add+scores;
  });
  bigPoint = bigPoint +1;
  return (Number.parseFloat((add/bigPoint).toFixed(2)));
}


export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if ( n % 3 == 0 && n % 5 == 0) 
      return "fizzbuzz";
  else if (n % 3 == 0)   
      return "fizz";
  else if (n % 5 == 0)  
      return "buzz";
  else
      return 4;
  // Add your code here!


}
