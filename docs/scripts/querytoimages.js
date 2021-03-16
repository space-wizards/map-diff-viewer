function queryToImages() {
    var oldUrl = getURLParameter("old");
    var newUrl = getURLParameter("new");

    if (oldUrl === null || newUrl === null) {
        return;
    }

    var oldImage = document.getElementById("old-image");
    var newImage = document.getElementById("new-image");

    oldImage.src = oldUrl;
    newImage.src = newUrl;
}

function getURLParameter(name) {
    const params = new URL(document.location).searchParams;
    return params.get(name);
}

queryToImages();