const titleQuestions = document.querySelectorAll(".titleQuestions");
const chk = document.querySelectorAll(".chk");
titleQuestions.forEach((e, i) => {
    e.addEventListener("click", () => {
        chk.forEach(j => j.classList.remove("checked"));
        chk[i].classList.toggle("checked");
    });
});