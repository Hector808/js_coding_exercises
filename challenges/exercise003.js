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
  // Your code here!
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
}
