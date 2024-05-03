//Function which mixes array elements in random position

function myBlend(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]; // Swap elements at positions i and j
  }
  return arr;
}
//Function which calls myBlend(arr) function for our array arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function mixArray() {
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  arr = myBlend(arr);
  document.getElementById("output").innerHTML =
    "Mixed Array: " + arr.join(", ");
}
