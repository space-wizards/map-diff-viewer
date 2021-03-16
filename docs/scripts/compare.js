function compare() {
    const x = document.getElementsByClassName("overlay");

    for (let i = 0; i < x.length; i++) {
        const image = x[i];

        let clicked = false;

        const height = image.offsetHeight;
        const width = image.offsetWidth;

        image.style.width = (width / 2) + "px";

        const slider = document.createElement("DIV");
        slider.setAttribute("class", "slider");

        image.parentElement.insertBefore(slider, image);

        slider.style.top = (height / 2) - (slider.offsetHeight / 2) + "px";
        slider.style.left = (width / 2) - (slider.offsetWidth / 2) + "px";

        slider.addEventListener("mousedown", slideReady);
        window.addEventListener("mouseup", () => clicked = false);
        slider.addEventListener("touchstart", slideReady);
        window.addEventListener("touchend", () => clicked = false);

        function slideReady(event) {
            event.preventDefault();

            clicked = true;

            window.addEventListener("mousemove", slideMove);
            window.addEventListener("touchmove", slideMove);
        }

        function slideMove(event) {
            if (!clicked) return false;

            event = event || window.event;

            const imageRect = image.getBoundingClientRect();
            var pos = event.pageX - imageRect.left - window.pageXOffset;

            if (pos < 0) pos = 0;
            if (pos > width) pos = width;

            image.style.width = pos + "px";
            slider.style.left = image.offsetWidth - (slider.offsetWidth / 2) + "px";
        }
    }
}

compare();