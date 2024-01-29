var fuT = new Date("Feb 10, 2024 00:00:00").getTime();

setInterval(function() {
    var noW = new Date().getTime();
    var D = fuT - noW;
    var days = Math.floor(D / (1000 * 60 * 60 * 24));
    var hours = Math.floor((D % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((D % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((D % (1000 * 60)) / 1000);

    // Kiểm tra nếu đếm ngược về 0
    if (D <= 0) {
            document.getElementById("days").innerText = "HAPPY";
            document.getElementById("hours").innerText = "NEW";
            document.getElementById("minutes").innerText = "YEAR";
            document.getElementById("seconds").innerText = "2024"
    } else {
        // Hiển thị giá trị đếm ngược
        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        // Nếu đếm ngược kết thúc, chuyển sang hiển thị các từ
        }
}, 1000);
