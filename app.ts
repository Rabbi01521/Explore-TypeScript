const submitBtn = document.getElementById("submit-btn");

submitBtn?.addEventListener("click", () => {
  const inputValue: HTMLElement | any = document.getElementById("input-field");
  const inputText: string = inputValue?.value;
  if (inputText.length > 0) {
    getValue(inputText);
  } else {
    const error: HTMLElement | any = document.getElementById("error-message");
    error.innerHTML = `<p class='text-center p-3 bg-warning'><b>Please enter Right Username...</b></p>`;
  }
});

const fetchget = async (url: string) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const getValue = (getValue: string): void => {
  displayUser(`https://api.github.com/users/${getValue}`);
};

const displayUser = (url: string): void => {
  fetchget(url).then((data) => {
    console.log(data);
    const hide: HTMLElement | any = document.getElementById("hide");
    hide.style.display = "none";
    const showUser: HTMLElement | any = document.getElementById("userInfo");
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
