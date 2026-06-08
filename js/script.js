//burger bar example
let navigationUl = document.getElementById("navBar");
let burgerBar = document.getElementById("burgerBar");

burgerBar.addEventListener("click", function () {
  navigationUl.classList.toggle("activeNavigation");
  burgerBar.classList.toggle("activeBurgerBar");
});

//this & target
let divBox = document.querySelector(".box");

divBox.addEventListener("click", function (event) {
  //   console.log(event.target); //es erti dacherili elementi
  //   console.log(this);
  //   event.target.style.backgroundColor = "red";
  this.style.backgroundColor = "yellow";
});

//ajax - fetch
fetch("https://jsonplaceholder.typicode.com/users", {
  method: "GET",
})
  .then(function (response) {
    console.log(response);
    if (!response.ok) {
      throw "Server Erorr";
    }
    return response.json();
  })
  .then(function (info) {
    console.log(info);
    let ulNewUsers = document.createElement("ul");

    info.forEach((element) => {
      console.log(element); //titoeuli obj
      let liElement = document.createElement("li");
      liElement.textContent = element.username;
      ulNewUsers.appendChild(liElement);
    });

    document.getElementById("api-users").appendChild(ulNewUsers);
  })
  .catch(function (error) {
    let perror = document.createElement("p");
    perror.textContent = error;
    document.getElementById("api-users").appendChild(perror);
  });
