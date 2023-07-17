// const worker = await Tesseract.createWorker({logger: m => console.log(m)});


// async function readNumbers() {
//     const imageInput = document.getElementById('imageInput');
//     const resultDiv = document.getElementById('result');
  
//     const file = imageInput.files[0];
//     if (!file) return;
  
//     // Tesseract.recognize(
//     //   file,
//     //   'eng', // Language code for English
//     //   {
//     //     logger: info => console.log(info) // Optional logger function for debug info
//     //   }
//     // ).then(({ data }) => {
//     //     console.log(data)
//     //   resultDiv.innerText = `Extracted Numbers: ${extractNumbers(data.text)}`;
//     // });


//     await worker.loadLanguage('eng');
//     await worker.initialize('eng');
//     const { data: { text } } = await worker.recognize(file);
//     console.log(text);

//     resultDiv.innerText = `Extracted Numbers: ${extractNumbers(text)}`;
//     await worker.terminate();


// }
  
function extractNumbers(text) {
    // Use regular expressions to extract numbers from the recognized text
    const numberRegex = /\d+/g;
    const numbersArray = text.match(numberRegex);
    if (!numbersArray) return 'No numbers found.';
    return numbersArray.join(', ');
}
