let btn = document.getElementById("confirm_btn")
btn.addEventListener("click", submited)

function submited() {
    let i1 = document.querySelector("#box1").value
    let i2 = document.querySelector("#box2").value
    let i3 = document.querySelector("#box3").value
    let i4 = document.querySelector("#box4").value

    if (i1 == 1 && i2 == 2 && i3 == 3 && i4 == 4) {
        alert("OTP Verification completed")
        window.location.href = "end.html"
    } else {
        alert("Invalid OTP")
    }

}