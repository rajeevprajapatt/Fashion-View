let selectedSize = null;

function selectSize(button) {
    document.querySelectorAll("#sizeBtn").forEach(btn => btn.classList.remove("selected"));
    button.classList.add('selected');
    selectedSize = button.innerText;
}