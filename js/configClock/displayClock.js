function displayClock() {
    // ... (Các phần khác giữ nguyên)

    // Cập nhật thời gian hiện tại và đếm ngược đến ngày cụ thể
    this.updateTime = function () {
        const currentDate = new Date();
        const targetDate = new Date(2024, 0, 29, 0, 0, 0, 0); // Ngày cụ thể (29-1-2024)

        const timeDiff = targetDate - currentDate;
        const daysRemaining = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
        const hoursRemaining = Math.floor((timeDiff % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
        const minutesRemaining = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
        const secondsRemaining = Math.floor((timeDiff % (60 * 1000)) / 1000);

        // Update text content for element-time
        this.elementTime[0].innerText = this.formatTimeUnit(hoursRemaining);
        this.elementTime[1].innerText = this.formatTimeUnit(minutesRemaining);
        this.elementTime[2].innerText = this.formatTimeUnit(secondsRemaining);

        // Update text content for date (ngày, tháng, năm)
        this.elementTime[3].innerText = this.formatTimeUnit(daysRemaining);
        this.elementTime[4].innerText = this.formatTimeUnit(currentDate.getMonth() + 1); // Tháng bắt đầu từ 0
        this.elementTime[5].innerText = currentDate.getFullYear();
    };

    // ... (Các phần khác giữ nguyên)
}

// ... (Các phần khác giữ nguyên)

// Khởi chạy các hàm
var liveClock = new displayClock();
liveClock.displayContainClock();
liveClock.displayElementTime();
liveClock.displayTimeName();
liveClock.displayHaiCham();

// Cập nhật thời gian mỗi giây
setInterval(() => {
    liveClock.updateTime();
}, 1000);
