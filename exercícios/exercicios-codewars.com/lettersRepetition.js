function countLetters(str) {
    // Create an object to store letter counts
    const letterCount = {};
  
    // Convert the input string to lowercase to make the count case-insensitive
    str = str.toLowerCase();
  
    // Iterate through the string
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
  
      // Check if the character is a letter
      if (/[a-z]/.test(char)) {
        // If the character is a letter, update its count in the object
        if (letterCount[char]) {
          letterCount[char]++;
        } else {
          letterCount[char] = 1;
        }
      }
    }
  
    return letterCount;
  }
  
  // Example usage:
  const inputString = "Hello, World!";
  const result = countLetters(inputString);
  console.log(result);
  