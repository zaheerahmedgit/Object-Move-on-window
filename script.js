const btn = document.querySelector("#throttle");
const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}
document.querySelector("#center").addEventListener("mousemove",
    throttleFunction((dets) => {
        var div = document.createElement("div");
        div.classList.add("imagediv");
        div.style.left = dets.clientX + 'px';
        div.style.top = dets.clientY + 'px';
        var img = document.createElement("img");
        img.setAttribute("src", "images/1.jpg");
        div.appendChild(img);
        // div.style.transition = "all ease 1s"
        document.body.appendChild(div);
        gsap.to(img, {
            y: "0",
            ease: "power2",
            duration: "2",
        })
        gsap.to(img, {
            y: "100%",
            delay: "2",
            ease: "power2",
            duration: "1",
        })
        setTimeout(function () {
            div.remove();
        }, 2000)
    }, 500));