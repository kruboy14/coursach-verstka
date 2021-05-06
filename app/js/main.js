$(function () {});
const categoryTitle = document.querySelectorAll('.category-title');
const allCategoryPosts = document.querySelectorAll('.all');
const activeElem = Array.from(categoryTitle).find((node) =>
  node.classList.contains('active')
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
