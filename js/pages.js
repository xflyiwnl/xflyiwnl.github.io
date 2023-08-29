function showMain() {
    document.getElementById("main").classList.remove("hide");
    document.getElementById("portfolio").classList.add("hide");
    document.getElementById("me").classList.add("hide");

    document.getElementById("main__header").classList.add("active");
    document.getElementById("portfolio__header").classList.remove("active");
    document.getElementById("me__header").classList.remove("active");
}

function showPortfolio() {
    document.getElementById("portfolio").classList.remove("hide");
    document.getElementById("main").classList.add("hide");
    document.getElementById("me").classList.add("hide");

    document.getElementById("portfolio__header").classList.add("active");
    document.getElementById("main__header").classList.remove("active");
    document.getElementById("me__header").classList.remove("active");
}

function showMe() {
    document.getElementById("me").classList.remove("hide");
    document.getElementById("main").classList.add("hide");
    document.getElementById("portfolio").classList.add("hide");

    document.getElementById("me__header").classList.add("active");
    document.getElementById("main__header").classList.remove("active");
    document.getElementById("portfolio__header").classList.remove("active");
}