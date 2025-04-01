// script.js
(function () {
    // ตรวจสอบสถานะการล็อกอิน
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn || isLoggedIn !== 'true') {
        // ถ้าไม่ได้ล็อกอิน จะ redirect ไปหน้า login.html
        alert('You must log in first!');
        window.location.href = 'login.html';
    }
})();
