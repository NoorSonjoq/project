function showNotification(message, isSuccess) {
  const notification = document.getElementById("notification");
  const notificationMessage = document.getElementById("notification-message");

  // تعيين الرسالة
  notificationMessage.textContent = message;

  // تعيين لون الخلفية بناءً على النجاح أو الفشل
  if (isSuccess) {
    notification.classList.remove("error");
    notification.classList.add("success");
  } else {
    notification.classList.remove("success");
    notification.classList.add("error");
  }

  // عرض الإشعار
  notification.style.display = "block";

  // إخفاء الإشعار بعد 5 ثوانٍ
  setTimeout(() => {
    notification.style.display = "none";
  }, 5000); // 5000 ميلي ثانية = 5 ثوانٍ
}

// دالة محاكاة لإرسال النموذج
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // منع إرسال النموذج الفعلي

  // محاكاة نجاح أو فشل الحجز
  const isBookingSuccessful = Math.random() > 0.5; // 50% فرصة للنجاح

  if (isBookingSuccessful) {
    showNotification("تم الحجز بنجاح!", true); // إشعار نجاح
  } else {
    showNotification("حدث خطأ أثناء الحجز. يرجى المحاولة مرة أخرى.", false); // إشعار فشل
  }
});
function closeNotification() {
  document.getElementById("notification").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const menu = document.querySelector(".menu");

  toggleBtn.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});
