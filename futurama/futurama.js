// ---------- Futurama ------------//
// https://api.sampleapis.com/futurama/characters

const getPerson = (name) => {
  let cardBody = document.querySelector(".cards");

  const futuramaPromise = fetch(
    "https://api.sampleapis.com/futurama/characters"
  );

  return futuramaPromise
    .then((data) => data.json())
    .then((list) => {
      const listNames = list.map((res) => res.name.first);
      const listImages = list.map((res) => res.images.main);
      const listOcupations = list.map((res) => res.occupation);
      console.log(listImages);
      function setPerson() {
        for (let i = 0; i < listImages.length; i++) {
          let card = document.createElement("card");
          cardBody.appendChild(card);
          let img = document.createElement("img");
          img.src = listImages[i];
          card.appendChild(img);

          let nameTitle = document.createElement("h2");
          let output = "";
          output += `${listNames[i]}`;
          nameTitle.innerHTML = output;
          img.insertAdjacentElement("afterend", nameTitle);

          let button = document.createElement("button");
          button.setAttribute("data-text", listOcupations[i]);
          button.textContent = "show more";
          nameTitle.insertAdjacentElement("afterend", button);

          let occupations = document.createElement("h3");
          occupations.setAttribute("data-text", listOcupations[i]);
          occupations.classList.add("hide");
          let outputs = "";
          outputs += `${listOcupations[i]}`;
          occupations.innerHTML = outputs;
          nameTitle.insertAdjacentElement("afterend", occupations);

          button.addEventListener("click", function () {
            occupations.classList.toggle("hide");
          });
        }
      }
      setPerson();
    });
};
getPerson();
