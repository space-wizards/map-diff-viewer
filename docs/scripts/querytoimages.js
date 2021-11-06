function queryToImages() {
    const oldUrl = getURLParameter("old");
    const newUrl = getURLParameter("new");

    if (newUrl === null) {
        return;
    }

    const newImage = document.getElementById("new-image");

    if (oldUrl === null) {
        newImage.src = newUrl;
        return;
    }

    const oldImage = document.getElementById("old-image");

    oldImage.src = oldUrl;
    newImage.src = newUrl;

    compare();
}

function getURLParameter(name) {
    const params = new URL(document.location).searchParams;
    return params.get(name);
}

queryToImages();