/* LOGIN FUNCTION */
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
    alert("Invalid Login ❌");
  }
}

/* DASHBOARD LOAD */
window.onload = function () {
  let user = localStorage.getItem("user");
  window.location.href = "dashboard.html";

  if (!user) return;

  document.getElementById("welcome").innerText = "Welcome " + user;

  if (user === "Customer") {
    document.getElementById("customerPanel").style.display = "block";
    document.getElementById("staffPanel").style.display = "none";
  } else {
    document.getElementById("customerPanel").style.display = "none";
    document.getElementById("staffPanel").style.display = "block";
  }
};

/* LOGOUT */
function logout() {
  localStorage.removeItem("user");
  window.location.href = "login.html";
}

/* STAFF ACTION */
function addDesign() {
  alert("New Design Added (Demo)");
}