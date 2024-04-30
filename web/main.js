"use strict";

/*
----================----
Konstantin Edunov - 2024
----================----
*/

window.addEventListener("DOMContentLoaded", function() {
  const textureCanvas = document.getElementsByTagName("canvas")[0];
  const normalCanvas = document.getElementsByTagName("canvas")[1];
  const specularCanvas = document.getElementsByTagName("canvas")[2];
  const textureContext = textureCanvas.getContext("2d", { alpha: true });
  const normalContext = normalCanvas.getContext("2d", { alpha: true });
  const specularContext = specularCanvas.getContext("2d", { alpha: true });
});