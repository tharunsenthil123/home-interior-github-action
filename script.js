function login() {
  let role = document.getElementById("role").value;
  let user = document.getElementById("username").value;
  let pass = document.getElementById("password").value;

  if (role === "customer" && user === "cust" && pass === "123") {
    localStorage.setItem("user", "Customer");
    window.location.href = "dashboard.html";
  }
  else if (role === "staff" && user === "admin" && pass === "admin") {
    localStorage.setItem("user", "Staff");
    window.location.href = "dashboard.html";
  }
  else {
    alert("Invalid Login");
  }
}

window.onload = function () {
  let user = localStorage.getItem("user");
  if (!user) return;

  document.getElementById("welcome").innerText = "Welcome " + user;

  if (user === "Customer") {
    document.getElementById("staffPanel").style.display = "none";
  } else {
    document.getElementById("customerPanel").style.display = "none";
  }
};

function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

function addDesign() {
  alert("Design Added");
}