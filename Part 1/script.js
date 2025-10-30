const buyNow = document.getElementsByClassName("buynow")[0];
const delivery = document.getElementsByClassName("delivery")[0];
const loadingTest = document.getElementsByClassName("loading-text")[0];

buyNow.addEventListener("click", function() {
    delivery.classList.add("move");

    var percentage = 0;
    loadingTest.innerHTML = `${percentage}%`;

    const loadingInterval = setInterval(function() {
        percentage += 2;
        loadingTest.innerHTML = `${percentage}%`;
        if (percentage >= 100) {
            clearInterval(loadingInterval);
            window.location.href = "products.html";
        }
    }, 100);

});