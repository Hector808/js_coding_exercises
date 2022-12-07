export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  
  let  index = nums.findIndex(nums => nums === n);
  if (index == nums.length-1 || nums[index] !== n){
  return null
  }else{ 
      return nums[index+1];
    } 

  // Your code here!
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  let arr = str.split(''); 
  let count0 =0;
  let count1 = 0;
  let txt;
  arr.forEach(element => {
    if (element === "0"){
      count0 = count0 +1;
    } else {(element === "1") 
      count1 = count1 +1; 
    }

  })
  txt = `{"0":${count0},"1":${count1}}`;

  if (str === ""){
    return null;
  } else {
return txt;


    //return ( `{"0" : ${count0}, "1": ${count1} } holaaaa` )   ;
    


  }
  
  // Your code here!
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};
