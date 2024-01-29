/****************************************************************************************/
/*-----------Lấy ra các thanh phần thời gian của thời gian còn lại---------------------*/
/************************************************************************************ */

var remainTime = function() {
    this.dateN; // Đối tượng date hiện tại
    this.dateF; // Đối tượng date tương lai
    this.timeNumberN; // Tổng mili giây tính từ 00:00:00:000 1/1/1970 đến hiện tại
    this.timeNumberF; // Tổng mili giây tính từ 00:00:00:000 1/1/1970 đến tương lai
    this.interval; // Hàm setInterval
    this.dateRemain = []; // ngày, giờ, phút, giây, milli giây
    this.timeRemain; // Số mili giây còn lại

    // Trả về mili giây tính từ thời điểm hiện tại
    this.timeN = function() {
        this.dateN = new Date();
        this.timeNumberN = this.dateN.getTime() + 7 * 60 * 60 * 1000; // +7 giờ => Giờ Việt Nam
        return this.timeNumberN;
    }

    // Trả về mili giây tính từ tương lai (ngày 29-1-2024)
    this.timeF = function() {
        this.dateF = new Date(2024, 0, 29, 0, 0, 0, 0); // Tháng tính từ 0 (0 - 11)
        this.timeNumberF = this.dateF.getTime() + 7 * 60 * 60 * 1000; // +7 giờ => Giờ Việt Nam
        return this.timeNumberF;
    }

    // Trả về thời gian còn lại dưới dạng một mảng
    this.getRemainTime = function() {
        this.timeRemain = this.timeF() - this.timeN(); // Số mili giây còn lại trước khi đến thời điểm tương lai đã định
        if (this.timeRemain >= 0) {
            this.dateRemain[0] = Math.floor(this.timeRemain / (24 * 60 * 60 * 1000)); // Ngày
            this.dateRemain[1] = Math.floor((this.timeRemain % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)); // Giờ
            this.dateRemain[2] = Math.floor((this.timeRemain % (60 * 60 * 1000)) / (60 * 1000)); // Phút
            this.dateRemain[3] = Math.floor((this.timeRemain % (60 * 1000)) / 1000); // Giây
            // this.dateRemain[4] = Math.floor(this.timeRemain % 1000); // Milli giây
            return this.dateRemain;
        } else {
            return "NEW_YEAR";
        }
    }
}

// Sử dụng đối tượng remainTime để tính thời gian còn lại đến ngày 29-1-2024
var remainingTimeCounter = new remainTime();
console.log(remainingTimeCounter.getRemainTime());
