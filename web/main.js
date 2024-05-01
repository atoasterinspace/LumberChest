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
        const width = imageData.width;
        const height = imageData.height;
        const aspectRatio = width / height;
        let outputWidth, outputHeight;
        let xOffset = 0
        let yOffset = 0;
        if (width > height) {
          outputWidth = 130;
          outputHeight = Math.round(130 / aspectRatio);
          yOffset = (130 - outputHeight) / 2;
        } else {
          outputHeight = 130;
          outputWidth = Math.round(130 * aspectRatio);
          xOffset = (130 - outputWidth) / 2;
        };
        normalContext.clearRect(0, 0, 1024, 1024);
        textureContext.clearRect(0, 0, 1024, 1024);
        specularContext.clearRect(0, 0, 1024, 1024);
        normalContext.drawImage(imageData, 640 + xOffset, 624 + yOffset, outputWidth, outputHeight);
        textureContext.drawImage(imageData, 640 + xOffset, 624 + yOffset, outputWidth, outputHeight);
        specularContext.drawImage(imageData, 640 + xOffset, 624 + yOffset, outputWidth, outputHeight);
        const canvasArray = [ textureCanvas, normalCanvas, specularCanvas ];
        for (let cycle = 0; cycle < 3; cycle += 1) {
          const anchor = document.getElementsByTagName("a")[cycle];
          const canvasURL = canvasArray[cycle].toDataURL("image/png");
          anchor.setAttribute("href", canvasURL);
        };
      };
      imageData.setAttribute("src", image.getAttribute("src"));
    }, false);
    reader.readAsDataURL(fileURL);
  });
});