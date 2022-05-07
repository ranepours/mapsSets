//Q1 [1,2,3,4]
//Q2 "ref"
//Q3 Map(2) {Array(3) => true, Array(3) => false}

hasDuplicate = (arr) => {
    let noDupes = new Set(arr);
    return ((noDupes.size === arr.length) ? false : true);
}

vowels = (char) => { return "aeiou".includes(char); }
  
vowelCount = (str) => {
    const vowelCounter = new Map();
    for(let char of str){
      let lowercase = char.toLowerCase();
      if(vowels(lowercase)){
        if(vowelCounter.has(lowercase)){
          vowelCounter.set(lowercase, vowelCounter.get(lowercase) + 1);
        } else {
          vowelCounter.set(lowercase, 1);
        }
      }
    }
    return vowelCounter;
  }