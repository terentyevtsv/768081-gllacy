var link = document.querySelector(".btn-feedback");

var popup = document.querySelector(".feedback");
var close = document.querySelector(".btn-close");

var form = popup.querySelector(".form-feedback");
var login = popup.querySelector(".feedback-name");
var email = popup.querySelector(".feedback-email");
var text = popup.querySelector(".feedback-text");

var isStorageSupport = true;
var nameStorage = "";
var emailStorage = "";

try {
    nameStorage = localStorage.getItem("name");
    emailStorage = localStorage.getItem("email");
}
catch (err) {
    isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");

    if (nameStorage) {
        login.value = nameStorage;
        email.focus();
    }
    else {
        login.focus();
    }

    if (emailStorage) {
        email.value = emailStorage;
        text.focus();
    }
    else {
        email.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    }
    else {
        if (isStorageSupport) {
            localStorage.setItem("name", login.value);
            localStorage.setItem("email", email.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("modal-show")) {
            popup.classList.remove("modal-show");
            popup.classList.remove("modal-error");
        }
    }
});