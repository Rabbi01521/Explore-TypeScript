"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const submitBtn = document.getElementById("submit-btn");
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener("click", () => {
    const inputValue = document.getElementById("input-field");
    const inputText = inputValue === null || inputValue === void 0 ? void 0 : inputValue.value;
    if (inputText.length > 0) {
        getValue(inputText);
    }
    else {
        const error = document.getElementById("error-message");
        error.innerHTML = `<p class='text-center p-3 bg-warning'><b>Please enter Right Username...</b></p>`;
    }
});
const fetchget = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(url);
    const data = yield response.json();
    return data;
});
const getValue = (getValue) => {
    displayUser(`https://api.github.com/users/${getValue}`);
};
const displayUser = (url) => {
    fetchget(url).then((data) => {
        console.log(data);
        const hide = document.getElementById("hide");
        hide.style.display = "none";
        const showUser = document.getElementById("userInfo");
        showUser.style.display = "block";
        showUser.innerHTML = `
        <h1 class="text-center my-3">Hello ${data.name} Broo </h1>
        <img src="${data.avatar_url}" class="w-25 rounded rounded-circle mx-auto d-block my-3 border border-light" alt="...">
        <div class="text-center">
            <p><i class="bi bi-people-fill"></i> ${data.followers} Follower. ${data.following} Following.</p>
        </div>
    `;
    });
};
