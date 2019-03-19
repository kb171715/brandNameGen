var letters = {
	vowels: ['a', 'e', 'i', 'o', 'u'],
	consonants: ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','z', 'y']
};

console.log(letters.vowels[Math.round(10000 * Math.random()) % letters.vowels.length]);


var con = () => {return letters.consonants[Math.round(10000 * Math.random()) % letters.consonants.length]};
var vow = () => {return letters.vowels[Math.round(10000 * Math.random()) % letters.vowels.length]}

function mixer () {



  document.getElementById("section11").innerHTML = con().toUpperCase() + vow() + con() + vow() + con();
  document.getElementById("section12").innerHTML = con().toUpperCase() + vow() + con() + vow() + con();
  document.getElementById("section13").innerHTML = con().toUpperCase() + vow() + con() + vow() + con();
  document.getElementById("section21").innerHTML = con().toUpperCase() + con() + vow() + con() + vow() + con();
  document.getElementById("section22").innerHTML = con().toUpperCase() + con() + vow() + con() + vow() + con();
  document.getElementById("section23").innerHTML = con().toUpperCase() + con() + vow() + con() + vow() + con();
  document.getElementById("section31").innerHTML = con().toUpperCase() + con() + vow() + con() + vow() + con() + con();
  document.getElementById("section32").innerHTML = con().toUpperCase() + con() + vow() + con() + vow() + con() + con();
  document.getElementById("section33").innerHTML = con().toUpperCase() + con() + vow() + con() + vow() + con() + con();
  document.getElementById("section41").innerHTML = con().toUpperCase() + vow() + con() + con() + vow() + con();
  document.getElementById("section42").innerHTML = con().toUpperCase() + vow() + con() + con() + vow() + con();
  document.getElementById("section43").innerHTML = con().toUpperCase() + vow() + con() + con() + vow() + con();
  document.getElementById("section51").innerHTML = con().toUpperCase() + vow() + vow() + con() + vow() + con();
  document.getElementById("section52").innerHTML = con().toUpperCase() + vow() + vow() + con() + vow() + con();
  document.getElementById("section53").innerHTML = con().toUpperCase() + vow() + vow() + con() + vow() + con();
  document.getElementById("section61").innerHTML = con().toUpperCase() + con() + vow() + con() + vow() + vow() + con();
  document.getElementById("section62").innerHTML = con().toUpperCase() + con() + vow() + con() + vow() + vow() + con();
  document.getElementById("section63").innerHTML = con().toUpperCase() + con() + vow() + con() + vow() + vow() + con();




};

function inputMix() {
  var brandName = prompt("Enter words what describes your brand", "Your brand is..");
  if (brandName != null) {

    var newName = brandName.split(" ");

    document.getElementById("inputMix1").innerHTML = newName[Math.round(1000 * Math.random()) % newName.length].toUpperCase()+newName[Math.round(1000 * Math.random()) % newName.length];
    document.getElementById("inputMix2").innerHTML = newName[Math.round(1000 * Math.random()) % newName.length].toUpperCase()+newName[Math.round(1000 * Math.random()) % newName.length];
    document.getElementById("inputMix3").innerHTML = newName[Math.round(1000 * Math.random()) % newName.length].toUpperCase()+newName[Math.round(1000 * Math.random()) % newName.length];
    document.getElementById("inputMix4").innerHTML = newName[Math.round(1000 * Math.random()) % newName.length].toUpperCase()+newName[Math.round(1000 * Math.random()) % newName.length];
  
  }
};


