export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  let  index = nums.findIndex(nums => nums === n);
  if (index == nums.length-1 || nums[index] !== n){
  return null
  }else{ 
      return nums[index+1];
    } 


};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  let arr = str.split(''); 
  let add0 = 0
  let add1 = 0
  let x = 0
    for (x=0;x<arr.length;x++) {
      if (0 == arr[x])
      add0 = add0+1
      else if (1 == arr[x])
      add1 = add1+1
   }
  let format0 ="0";
  let format1 ="1";
   

   let print =`{"${format0}": ${add0}, ${format1}: ${add1}}`;
   //let print = JSON.stringify(`{0:${add0},1:${add1}}`);


  
   return  print;  
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  let  convertReverse = n. toString().  split("").reverse(). join("");
   return (Number(convertReverse));

};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

let x;
let y;
let addTot = 0 ;
  for (x=0;x<arrs.length;x++) {
  for (y=0;y<arrs[x].length;y++) {
      addTot = addTot + arrs[x][y];
  }
}
      return addTot;
  
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  let first = "";
  let last = "";
  if (arr.length>=2){ 
    first = arr[0];
    last = arr.length;
    arr.shift();
    arr.pop();
    arr.push(first);
    arr.unshift(last);
    return arr ;
  }else {
    return arr ;
  }
  
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

let newWord =""
Object.entries(haystack).forEach(([, searchTerm]) => {
  newWord = newWord.concat(searchTerm)
})

return newWord.toUpperCase().includes(searchTerm.toUpperCase()) 


};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  let newStr  = str.replace(/[^0-9a-zA-Z ]/g, '').toLowerCase();
  let arr = newStr.split(' '); 
  let result = arr.reduce((valu, index) => ((valu[index] = valu[index] + 1 || 1), valu), {})
  return result ;


  // Your code here!
};
