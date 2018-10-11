function showPopup(a) {
    document.getElementsByClassName("pop-up")[a].style.display = 'block';
    document.getElementsByClassName("wrapper")[0].style.filter = 'blur(2px)';
}
function closePopup(b) {
    document.getElementsByClassName("pop-up")[b].style.display = 'none';
    document.getElementsByClassName("wrapper")[0].style.filter = 'blur(0)';
}