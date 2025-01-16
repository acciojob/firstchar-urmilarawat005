function firstChar(text) {
    // Trim leading spaces and check if the string is not empty
    let stripped = text.trimStart(); // Removes leading spaces
    if (stripped.length > 0) {
        return stripped[0]; // Return the first non-space character
    } else {
        return ''; // Return an empty string if there are no non-space characters
    }
}

// Do not change the code below
// Uncomment the following line to show the prompt popup
const text = prompt("Enter text:"); // Get user input using prompt
alert(firstChar(text)); // Alert the result of the firstChar function

