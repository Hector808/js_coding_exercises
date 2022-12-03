export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings;
}
  

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  if ( person.city == "Manchester"){
    return true;
  }else{
   return false;
  }
  
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");

  let tot = 0 ;
  tot = Math.ceil(people/40);
  return (tot);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  let count =0;
  arr.forEach(element => {
    if (element == "sheep"){
    count = count +1;
    } 
  }
  );
    return count;
  
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");

  let codPost = (person.address.postCode).charAt(0) ;
  let Cit = (person.address.city);
  if (codPost === "M" && Cit === "Manchester"  ){
   return true;
  }else {
    return false;
  }
}
