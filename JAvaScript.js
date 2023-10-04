function noAvalible() {
  document.getElementById("erro").innerHTML = "website under construction";
  erro.style.display = "flex";
  erro.style.textAlign = "center";
  erro.style.alignItems = "center";
  erro.style.textTransform = "uppercase";
  erro.style.borderRadius = "20px";
  erro.style.backgroundImage = "url('assets/closed.png')";
  erro.style.backgroundRepeat = "no-repeat";
  erro.style.backgroundSize = "65px 65px";
  erro.style.backgroundPosition = "1050px 50px";
}

document.getElementById("erro").addEventListener("click", function () {
  location.reload();
});
