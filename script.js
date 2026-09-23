function volume_sphere() {
    //Write your code here
  let radius = document.getElementById("radius").value; let volume = document.getElementById("volume"); radius = Number(radius); if (radius < 0 || isNaN(radius)) { volume.value = "NaN"; return false; } let result = (4 / 3) * Math.PI * radius * radius * radius; volume.value = result.toFixed(4); return false; } document.getElementById("MyForm").addEventListener("submit", function(event) { event.preventDefault(); volume_sphere();
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
