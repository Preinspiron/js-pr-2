const elements = {
  imgMax: document.querySelector('.js-img-max'),
  imgMinList: document.querySelector('.js-img-list'),
}

elements.imgMinList.addEventListener('click',onClickReplzceImgReplace);

function onClickReplzceImgReplace(event) {
  console.log(event.target);
  if(event.target.classList.contains('js-img-min')) {
    let pathNewMaxImg = event.target.src;
    renderImgGallery(pathNewMaxImg);
  }
}

function renderImgGallery(path) {
  elements.imgMax.innerHTML = `<img src="${path}" alt="" width="295" height="387">` 
}