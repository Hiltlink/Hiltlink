const shortbtn = document.getElementById("shortbtn");
const refbtn = document.getElementById("refbtn");

shortbtn.addEventListener('click', () => {
  const longurl = document.getElementById("longurl").value;
  const apiurl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(longurl)}`;
  const shortUrlTextarea = document.getElementById("shorturl"); // Changed to "shorturl" here

  fetch(apiurl)
    .then(response => response.text())
    .then(data => shortUrlTextarea.value = data)
    .catch(error => shortUrlTextarea.value = "Error: Unable to shorten URL");
});

refbtn.addEventListener('click', () => location.reload());

let newURL = document.getElementById("shorturl");
let copyButton = document.getElementById("copy"); // Changed to "copy" here

copyButton.onclick = () => { // Changed to "copy" here
  newURL.select();
  window.navigator.clipboard.writeText(newURL.value);
}