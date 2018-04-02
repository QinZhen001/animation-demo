var inp = document.querySelector("input")
var mod = document.querySelector(".module")


inp.addEventListener("input", function () {
    mod.style.setProperty("--notchSize", this.value + "px")
})