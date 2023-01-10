//your code here
let selectedImages = [];
let resetButton = document.getElementById("reset");
let verifyButton = document.getElementById("verify");
resetButton.style.display = "none";
verifyButton.style.display = "none";

function selectImage(image) {
  //Add the clicked image to the selectedImages array
  selectedImages.push(image);
  if (selectedImages.length === 2) {
    //Show the verify button if two images have been selected
    verifyButton.style.display = "inline-block";
  } else if (selectedImages.length > 2) {
    //Reset the selectedImages array if more than two images have been clicked
    selectedImages = [selectedImages[selectedImages.length - 1], selectedImages[selectedImages.length - 2]];
  }
  // Show reset button if at least one image has been selected
  resetButton.style.display = "inline-block";
}

function resetImages() {
  //Reset the selected images and hide the reset and verify buttons
  selectedImages = [];
  resetButton.style.display = "none";
  verifyButton.style.display = "none";
}

function verifyImages() {
  let para = document.getElementById("para");
  if (selectedImages[0].className === selectedImages[1].className) {
    para.innerHTML = "You are a human. Congratulations!";
  } else {
    para.innerHTML = "We can't verify you as a human. You selected the non-identical tiles.";
  }
  //Reset the selected images and hide the reset and verify buttons
  selectedImages = [];
  resetButton.style.display = "none";
  verifyButton.style.display = "none";
}