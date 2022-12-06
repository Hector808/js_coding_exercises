
export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  return nums.map(num => Math.pow(num,2));

}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

words = words.map((camel,aux) => {
  if(aux == 0){
    return(camel);
  }else{ 
    return(camel[0].toUpperCase() + camel.slice(1));
  }
})
return words.join("");

}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let cont = 0 
  people = people.map(element => {
   cont = cont + element.subjects.length; 
 })
 return (cont);

}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let arr = menu.map (toppi =>
    toppi.ingredients.includes(ingredient)? true:false);
    return arr.includes(true)? true : false;

}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");


  let newArr = arr1.map(item => arr2.includes(item) ? item : "")
  let resArr = newArr.filter(Boolean).sort()
  let orgArr = resArr.sort();
  
  const setti =new Set (orgArr);
  return( [... setti]);

}


