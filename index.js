const modal = document.getElementById("modal");
const contactForm = document.getElementById("contact_form");
const contactCancel = document.getElementById("contact_cancel");
const contactSend = document.getElementById("contact_send");
const contact = document.getElementById("contact");
const printCarousel = document.getElementById("print_carousel");

const apts = document.getElementsByClassName("apt");
const galleryViewer = document.getElementById("gallery_viewer");
const viewerImg = document.getElementById("viewer_img");
const viewerCarousel = document.getElementById("viewer_carousel");

const poses = document.getElementById("poses");
const standee = document.getElementById("standee");
const onePiece = document.getElementById("onepiece");

const lbl = document.getElementById("lbl");
const reno = document.getElementById("reno");
const pride_25 = document.getElementById("pride_25");
const pride_26 = document.getElementById("pride_26");
const redding_spring = document.getElementById("redding_spring");
const redding_summer = document.getElementById("redding_summer");

function showContactForm() {
  modal.style.display = "flex";
  contactForm.style.display = "flex";
}

function closeContactForm() {
  modal.style.display = "none";
  contactForm.style.display = "none";
}

function showPrintViewer() {
  modal.style.display = "flex";
  galleryViewer.style.display = "flex";
}

function setViewerThumbClick() {
  const vts = document.getElementsByClassName("vt");
  for (let el of vts) {
    el.onclick = (e) => {
      viewerImg.setAttribute("src", el.getAttribute("data-full"));
    };
  }
}

contact.onclick = () => showContactForm();
contactCancel.onclick = () => closeContactForm();
contactSend.onclick = () => closeContactForm();

modal.onclick = (e) => {
  if (e.target === e.currentTarget) {
    modal.style.display = "none";
  }
};

galleryViewer.onclick = (e) => {
  if (e.target === e.currentTarget) {
    modal.style.display = "none";
    galleryViewer.style.display = "none";
  }
};

for (let el of apts) {
  el.onclick = (e) => {
    viewerImg.setAttribute("src", el.getAttribute("data-full"));
    showPrintViewer();
    viewerCarousel.innerHTML = "";
    for (let i = 1; i < 14; i++) {
      const tmnl = document.createElement("img");
      tmnl.setAttribute("src", `./images/artPrints/thumbnails/apt_${i}.png`);
      tmnl.setAttribute("data-full", `./images/artPrints/full/ap_${i}.png`);
      tmnl.classList.add("vt");
      tmnl.alt = "Art Print";
      viewerCarousel.append(tmnl);
    }
    setViewerThumbClick();
  };
}

poses.onclick = (e) => {
  viewerImg.setAttribute("src", `./images/stickers/full/poses/1.png`);
  showPrintViewer();
  viewerCarousel.innerHTML = "";
  for (let i = 1; i < 19; i++) {
    const tmnl = document.createElement("img");
    tmnl.setAttribute("src", `./images/stickers/full/poses/${i}.png`);
    tmnl.setAttribute("data-full", `./images/stickers/full/poses/${i}.png`);
    tmnl.classList.add("vt");
    tmnl.alt = "sticker";
    viewerCarousel.append(tmnl);
  }
  setViewerThumbClick();
};

standee.onclick = (e) => {
  viewerImg.setAttribute("src", `./images/stickers/full/standee/1.png`);
  showPrintViewer();
  viewerCarousel.innerHTML = "";
  for (let i = 1; i < 45; i++) {
    const tmnl = document.createElement("img");
    tmnl.setAttribute("src", `./images/stickers/full/standee/${i}.png`);
    tmnl.setAttribute("data-full", `./images/stickers/full/standee/${i}.png`);
    tmnl.classList.add("vt");
    tmnl.alt = "sticker";
    viewerCarousel.append(tmnl);
  }
  setViewerThumbClick();
};

onePiece.onclick = (e) => {
  viewerImg.setAttribute("src", `./images/stickers/full/onepiece/1.png`);
  showPrintViewer();
  viewerCarousel.innerHTML = "";
  for (let i = 1; i < 7; i++) {
    const tmnl = document.createElement("img");
    tmnl.setAttribute("src", `./images/stickers/full/onepiece/${i}.png`);
    tmnl.setAttribute("data-full", `./images/stickers/full/onepiece/${i}.png`);
    tmnl.classList.add("vt");
    tmnl.alt = "sticker";
    viewerCarousel.append(tmnl);
  }
  setViewerThumbClick();
};

lbl.onclick = (e) => {
  viewerImg.setAttribute("src", `./images/events/full/lbl/1.jpeg`);
  showPrintViewer();
  viewerCarousel.innerHTML = "";
  for (let i = 1; i < 5; i++) {
    const tmnl = document.createElement("img");
    tmnl.setAttribute("src", `./images/events/thumbnails/lbl/${i}.jpg`);
    tmnl.setAttribute("data-full", `./images/events/full/lbl/${i}.jpeg`);
    tmnl.classList.add("vt");
    tmnl.alt = "sticker";
    viewerCarousel.append(tmnl);
  }
  setViewerThumbClick();
};

reno.onclick = (e) => {
  viewerImg.setAttribute("src", `./images/events/full/reno/1.jpg`);
  showPrintViewer();
  viewerCarousel.innerHTML = "";
  for (let i = 1; i < 3; i++) {
    const tmnl = document.createElement("img");
    tmnl.setAttribute("src", `./images/events/thumbnails/reno/${i}.jpg`);
    tmnl.setAttribute("data-full", `./images/events/full/reno/${i}.jpg`);
    tmnl.classList.add("vt");
    tmnl.alt = "sticker";
    viewerCarousel.append(tmnl);
  }
  setViewerThumbClick();
};

pride_25.onclick = (e) => {
  viewerImg.setAttribute("src", `./images/events/full/pride_25/1.jpeg`);
  showPrintViewer();
  viewerCarousel.innerHTML = "";
  for (let i = 1; i < 2; i++) {
    const tmnl = document.createElement("img");
    tmnl.setAttribute("src", `./images/events/thumbnails/pride_25/${i}.jpg`);
    tmnl.setAttribute("data-full", `./images/events/full/pride_25/${i}.jpeg`);
    tmnl.classList.add("vt");
    tmnl.alt = "sticker";
    viewerCarousel.append(tmnl);
  }
  setViewerThumbClick();
};

pride_26.onclick = (e) => {
  viewerImg.setAttribute("src", `./images/events/full/pride_26/1.jpeg`);
  showPrintViewer();
  viewerCarousel.innerHTML = "";
  for (let i = 1; i < 4; i++) {
    const tmnl = document.createElement("img");
    tmnl.setAttribute("src", `./images/events/thumbnails/pride_26/${i}.jpg`);
    tmnl.setAttribute("data-full", `./images/events/full/pride_26/${i}.jpeg`);
    tmnl.classList.add("vt");
    tmnl.alt = "sticker";
    viewerCarousel.append(tmnl);
  }
  setViewerThumbClick();
};

redding_spring.onclick = (e) => {
  viewerImg.setAttribute("src", `./images/events/full/redding_spring/1.jpeg`);
  showPrintViewer();
  viewerCarousel.innerHTML = "";
  for (let i = 1; i < 2; i++) {
    const tmnl = document.createElement("img");
    tmnl.setAttribute(
      "src",
      `./images/events/thumbnails/redding_spring/${i}.jpg`,
    );
    tmnl.setAttribute(
      "data-full",
      `./images/events/full/redding_spring/${i}.jpeg`,
    );
    tmnl.classList.add("vt");
    tmnl.alt = "sticker";
    viewerCarousel.append(tmnl);
  }
  setViewerThumbClick();
};

redding_summer.onclick = (e) => {
  viewerImg.setAttribute("src", `./images/events/full/redding_summer/1.jpeg`);
  showPrintViewer();
  viewerCarousel.innerHTML = "";
  for (let i = 1; i < 4; i++) {
    const tmnl = document.createElement("img");
    tmnl.setAttribute(
      "src",
      `./images/events/thumbnails/redding_summer/${i}.jpg`,
    );
    tmnl.setAttribute(
      "data-full",
      `./images/events/full/redding_summer/${i}.jpeg`,
    );
    tmnl.classList.add("vt");
    tmnl.alt = "sticker";
    viewerCarousel.append(tmnl);
  }
  setViewerThumbClick();
};
