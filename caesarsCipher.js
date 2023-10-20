function rot13(str) {
   function decodeChar(char) {
      if (/[A-M]/.test(char)) {
         return String.fromCharCode(char.charCodeAt(0) + 13);
      } else if (/[N-Z]/.test(char)) {
         return String.fromCharCode(char.charCodeAt(0) - 13);
      }
      return char;
   }

   var decodedStr = str.replace(/[A-Z]/g, function (char) {
      return decodeChar(char);
   });

   return decodedStr;
}

console.log(rot13("SERR PBQR PNZC")); // "FREE CODE CAMP"
console.log(rot13("SERR CVMMN!")); // "FREE PIZZA!"
console.log(rot13("SERR YBIR?")); // "FREE LOVE?"
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")); // "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
