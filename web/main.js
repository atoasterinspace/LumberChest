"use strict";

/*
----================----
Konstantin Edunov - 2024
----================----
*/

window.addEventListener("DOMContentLoaded", function() {
  const normalCanvas = document.getElementsByTagName("canvas")[1];
  const textureCanvas = document.getElementsByTagName("canvas")[0];
  const specularCanvas = document.getElementsByTagName("canvas")[2];
  const normalContext = normalCanvas.getContext("2d", { alpha: true });
  const textureContext = textureCanvas.getContext("2d", { alpha: true });
  const specularContext = specularCanvas.getContext("2d", { alpha: true });
  normalCanvas.setAttribute("width", "1024");
  normalCanvas.setAttribute("height", "1024");
  textureCanvas.setAttribute("width", "1024");
  textureCanvas.setAttribute("height", "1024");
  specularCanvas.setAttribute("width", "1024");
  specularCanvas.setAttribute("height", "1024");
  normalContext.clearRect(0, 0, 1024, 1024);
  textureContext.clearRect(0, 0, 1024, 1024);
  specularContext.clearRect(0, 0, 1024, 1024);
  const input = document.getElementsByTagName("input")[0];
  input.addEventListener("change", function() {
    const fileURL = input.files[0];
    const image = document.createElement("img");
    const reader = new FileReader();
    reader.addEventListener("load", function () {
      image.setAttribute("src", reader.result);
      const imageData = new Image();
      imageData.onload = function() {
        normalContext.drawImage(imageData, 0, 0);
      };
      imageData.setAttribute("src", image.getAttribute("src"));
    }, false);
    reader.readAsDataURL(fileURL);
  });
});