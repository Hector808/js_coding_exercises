export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let newArr = nums.map( res => res < 1? res : "");
   return newArr.filter(Boolean);
  // Your code here
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  let newArr = names.map(res => res.startsWith(char)? res:'' );
  return newArr.filter(Boolean);
  // Your code here
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");

  let newArr = words.map(verb => verb.startsWith("to ")? verb:"" );
  return newArr.filter(Boolean);

  // Your code here
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  let newArr = nums.map(inter => Number.isInteger(inter)? inter:"" );
  return newArr.filter(Boolean);

  // Your code here
}

export function getCities(users) {
  if (!users) throw new Error("users is required");

  let newArr = users.map(cit => cit.data.city.displayName)
  return newArr;
  // Your code here
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  let newArr = nums.map(root => Number.parseFloat((Math.sqrt(root)).toFixed(2)));

  return newArr;
  // Your code here
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here

  
  let newArr = sentences.map(txt => txt.toLowerCase().includes (str.toLowerCase()) ? txt : "");

  return newArr.filter(Boolean);

}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  let newArr = triangles.map(tri => Math.max(...tri));
  return newArr;

  // Your code here
}
