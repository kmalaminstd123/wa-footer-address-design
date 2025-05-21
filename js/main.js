  const firstColor = document.getElementById("firstColor");
  const secondColor = document.getElementById("secondColor");
  const angle = document.getElementById("radientAngle");
  const textColor = document.getElementById("textColor");
  const opacity = document.getElementById("opacity");

  const outFirst = document.getElementById("outFirst");
  const outSecond = document.getElementById("outSecond");
  const outAngle = document.getElementById("outAngle");
  const angleVal = document.getElementById("angleVal");
  const opacityVal = document.getElementById("opacityVal");

  const preview = document.getElementById("outputPreview");

  function updateGradient() {
    // Update the preview background and text color
    const angleDeg = angle.value;
    const color1 = firstColor.value;
    const color2 = secondColor.value;
    const txtColor = textColor.value;
    const opac = opacity.value;

    // Set background gradient
    preview.style.background = `linear-gradient(${angleDeg}deg, ${color1}, ${color2})`;

    // Set text color and opacity
    preview.style.color = txtColor;
    preview.style.opacity = opac;

    // Show live output values
    outFirst.textContent = color1;
    outSecond.textContent = color2;
    outAngle.textContent = angleDeg;
    angleVal.textContent = angleDeg;
    opacityVal.textContent = opac;
  }

  // Add event listeners
  firstColor.addEventListener("input", updateGradient);
  secondColor.addEventListener("input", updateGradient);
  angle.addEventListener("input", updateGradient);
  textColor.addEventListener("input", updateGradient);
  opacity.addEventListener("input", updateGradient);

  // Run once on load
  updateGradient();
