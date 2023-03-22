function toEnglish() {
    document.querySelectorAll('[id^=english]').forEach((e) => {e.style.display = 'block'});
    document.querySelectorAll('[id^=chinese]').forEach((e) => {e.style.display = 'none'});

    document.getElementById("toChineseButton").style.display = 'block';
    document.getElementById("toEnglishButton").style.display = 'none';
}


function toChinese() {
    document.querySelectorAll('[id^=english]').forEach((e) => {e.style.display = 'none'});
    document.querySelectorAll('[id^=chinese]').forEach((e) => {e.style.display = 'block'});

    document.getElementById("toChineseButton").style.display = 'none';
    document.getElementById("toEnglishButton").style.display = 'block';
}