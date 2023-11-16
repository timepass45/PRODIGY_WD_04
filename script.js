document.getElementById('intro-text').addEventListener('mouseover', function () {
  const text = this.textContent.trim();
  let newText = '';
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => {
      newText += text[i];
      this.textContent = newText;
    }, i * 50);
  }
});

document.getElementById('intro-text').addEventListener('mouseout', function () {
  this.textContent = 'Hi, I am Sourav';
});

function downloadResume() {
  var link = document.getElementById('hidden-download-link');
  link.click();
}
