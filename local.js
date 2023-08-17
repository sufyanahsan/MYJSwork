function signup() {
  var a = document.getElementById("name").value;
  var b = document.getElementById("password").value;

  localStorage.setItem("name", a);
  localStorage.setItem("password", b);

  var name1 = localStorage.getItem("name");
  var pass1 = localStorage.getItem("password");

  if (a == name1 && b == pass1) {
    window.location.href = "page.html";
  }
}
