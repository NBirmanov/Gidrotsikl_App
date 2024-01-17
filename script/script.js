function closeBack(){
    var back = document.getElementById('back');
    if (back.style.display === 'none' || back.style.display === '') {
        back.style.display = 'block';
      } else {
        back.style.display = 'none';
    }
  }

function openPage() {
    window.location.href = "catalog.html";
}

function openFooter() {
    var nav = document.getElementById('nav');
    if (nav.style.display === 'none' || nav.style.display === '') {
        nav.style.display = 'block';
      } else {
        nav.style.display = 'none';
    }
}

function openFooterShop() {
    var shop = document.getElementById('shop');
    if (shop.style.display === 'none' || shop.style.display === '') {
        shop.style.display = 'block';
      } else {
        shop.style.display = 'none';
    }
}

function openCard() {
    window.location.href = "card.html";
}

function openHome() {
    window.location.href = "index.html"
}
