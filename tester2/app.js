// async function sendData(data) {
//           // Construct a FormData instance
//           const formData = new FormData();

//           // Add a text field
//           formData.append("name", "Pomegranate");

//           // Add a file
//           const selection = await window.showOpenFilePicker();
//           if (selection.length > 0) {
//             const file = await selection[0].getFile();
//             formData.append("file", file);
//           }

//           try {
//             const response = await fetch("https://example.org/post", {
//               method: "POST",
//               // Set the FormData instance as the request body
//               body: formData,
//             });
//             console.log(await response.json());
//           } catch (e) {
//             console.error(e);
//           }
//         }

//         const send = document.querySelector("#send");
//         send.addEventListener("click", sendData);

//         const form = document.querySelector("#userinfo");

// async function sendData() {
//   // Associate the FormData object with the form element
//   const formData = new FormData(form);

//   try {
//     const response = await fetch("https://example.org/post", {
//       method: "POST",
//       // Set the FormData instance as the request body
//       body: formData,
//     });
//     console.log(await response.json());
//   } catch (e) {
//     console.error(e);
//   }
// }

// // Take over form submission
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   sendData();
// });

// var object = [
//   {
//     name: "shyam",
//     fathername: "aa",
//     gender: "male",
//   },
// ];
// console.log(object);

// var ak ={
//           name:'ck',
//           fathername:'jk',
//           gender:'male',
// }
// object.push(ak)

function storeInput() {
  // Initialize an empty array
  const inputArray = [];

  // Get the input elements
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");

  // Get the values of the input elements
  const value1 = input1.value;
  const value2 = input2.value;
  const value3 = input3.value;

  // Add the values to the array
  inputArray.push(value1, value2, value3);

  // Print the array to the console
  console.log(inputArray);
}
