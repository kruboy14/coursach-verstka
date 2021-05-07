$(function () {
  const categoryGallery = document.querySelectorAll('.category-gallery');
  
  const allGalleryPosts = document.querySelectorAll('.all-gallery');
  const activeGallery = Array.from(categoryGallery).find((node) =>
    node.classList.contains('active'),
  );
  for (let i = 0; i < categoryGallery.length; i++) {
    categoryGallery[i].addEventListener(
      'click',
      filterGallery.bind(this, categoryGallery[i]),
    );
  }

  function filterGallery(item) {
    changeActivePositionGallery(item);
    for (let i = 0; i < allGalleryPosts.length; i++) {
      if (allGalleryPosts[i].classList.contains(item.attributes.id.value)) {
        allGalleryPosts[i].style.display = 'flex';
      } else {
        allGalleryPosts[i].style.display = 'none';
      }
    }
  }
  filterGallery(activeGallery);
  function changeActivePositionGallery(activeItem) {
    for (let i = 0; i < categoryGallery.length; i++) {
      categoryGallery[i].classList.remove('active');
    }
    activeItem.classList.add('active');
  }
  
const header = document.querySelector('.header');
const headerBurger = document.querySelector('.header__burger');
const headerNav = document.querySelector('.menu');

headerBurger.addEventListener('click', (event) => {
  console.log(event);
  headerBurger.classList.toggle('active');
  headerNav.classList.toggle('active');
});
});
const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');
const activeElem = Array.from(categoryTitle).find((node) =>
  node.classList.contains('active'),
);
for (let i = 0; i < categoryTitle.length; i++) {
  categoryTitle[i].addEventListener(
    'click',
    filterPosts.bind(this, categoryTitle[i]),
  );
}

function filterPosts(item) {
  changeActivePosition(item);
  for (let i = 0; i < allCategoryPosts.length; i++) {
    if (allCategoryPosts[i].classList.contains(item.attributes.id.value)) {
      allCategoryPosts[i].style.display = 'block';
    } else {
      allCategoryPosts[i].style.display = 'none';
    }
  }
}
filterPosts(activeElem);
function changeActivePosition(activeItem) {
  for (let i = 0; i < categoryTitle.length; i++) {
    categoryTitle[i].classList.remove('active');
  }
  activeItem.classList.add('active');
}

