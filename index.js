const image_container = document.getElementById("img-container");
const color_pink = document.getElementById("pink");
const color_blue = document.getElementById("blue");
const color_yellow = document.getElementById("yellow");
const uploadDiv = document.getElementById("upload-button");

color_pink.addEventListener("click", function() {
  image_container.innerHTML = ' <img src="./images/pink.spin.png" class="w-1/3 spin animate-spin" alt="">';
  document.body.style.backgroundColor = "pink";
  setTimeout(function() {
    image_container.innerHTML = '<img src="./images/Pink umbrella.png" class="w-1/2" alt="">';
  }, 2000);
});

color_yellow.addEventListener("click", function() {
  
    image_container.innerHTML = ' <img src="./images/yellow.spin.png" class="w-1/3 spin animate-spin" alt="">';
    document.body.style.backgroundColor = "#f8f80987";
    setTimeout(function() {
    image_container.innerHTML = '<img src="./images/Yello umbrella.png" class="w-1/2" alt="">';
  }, 2000);
});

color_blue.addEventListener("click", function() {
  image_container.innerHTML = ' <img src="./images/blue.spin.png" class="w-1/3 spin animate-spin" alt="">';
  document.body.style.backgroundColor = "#0000ff8c";
  setTimeout(function() {
    image_container.innerHTML = '<img src="./images/Blue umbrella.png" class="w-1/2"  alt="">';
  }, 2000);
});
 
  // image upload ////////================
  uploadDiv.addEventListener("click", function() {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = function() {
      const file = this.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function() {
        const img = document.createElement("img");
        img.src = reader.result;
        img.className = "logo";
        image_container.appendChild(img);
      };
    };
    input.click();
  });