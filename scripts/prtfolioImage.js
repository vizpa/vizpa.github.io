function swapImage(imagePath, description) {
    document.getElementById("imgPreview").src = imagePath;
    document.getElementById("imgDescrip").innerHTML = description;
}

function setActive(element) {
    const links = document.querySelectorAll('#mini-menu .mini-link');
    links.forEach(link => link.classList.remove('active'));
    element.classList.add('active');
}