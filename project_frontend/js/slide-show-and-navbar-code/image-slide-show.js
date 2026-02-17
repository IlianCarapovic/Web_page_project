function imageSlideShow(images){
    let i = 0;
    const homeDiv = document.getElementById("homeDiv1");
    homeDiv.style.backgroundImage = `url(${images[i]})`;
    setInterval(() => {
        i = (i+1)%images.length;
        document.getElementById("homeDiv1").style.backgroundImage =
            `url(${images[i]})`;
    }, 6000);
}