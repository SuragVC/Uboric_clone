let pay = document.getElementById("payment")

pay.addEventListener("click", clicked)


function clicked() {
    alert("OTP Sent to registered Mobile Number")
    window.location.href = "./otp.html"
}