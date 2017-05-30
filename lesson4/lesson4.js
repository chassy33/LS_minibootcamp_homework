document.body.style.backgroundColor = "red";

document.querySelector("h1").style.backgroundColor = "blue";

document.body.style.fontFamily = "sans-serif";

document.getElementById("nickname").innerHTML = "Chassy";

document.getElementById("favorites").innerHTML = "Cars, games, traveling";

document.getElementById("hometown").innerHTML = "Haven, KS";

var items = document.getElementsByTagName('li');
   for (var i = 0; i < items.length; i++) {
      items[i].className = 'listitem';
      items[i].style.color = "red";
      items[i].style.backgroundColor = "white";
   }

var pic = document.createElement("img");
pic.src = "self_image.jpg";

document.body.appendChild(img);
