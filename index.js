const searchInput = document.querySelector('.GlobalSearchHeader input[type="search"]');
const svgIcon = document.querySelector('.GlobalSearchHeader svg');
const clearButton = document.querySelector('.GlobalSearchHeader .clear');
const result = document.querySelector('.nav-results-wrapper');

searchInput.addEventListener('input', () => {
 if (searchInput.value.trim()) {
  svgIcon.style.display = 'none';
  clearButton.style.display = 'inline-block';
  searchInput.style.padding = '0 0 0 30px';
   result.style.display = 'flex';
 } else {
  svgIcon.style.display = 'inline-block';
  clearButton.style.display = 'none';
  searchInput.style.padding = '0 0 0 0';
   result.style.display = 'none';
 }
});

clearButton.addEventListener('click', () => {
 searchInput.value = '';
 svgIcon.style.display = 'inline-block';
 clearButton.style.display = 'none';
  searchInput.style.padding = '0 0 0 0';
  result.style.display = 'none';
});

// Sử dụng event listener để lắng nghe sự kiện click
const list = document.querySelectorAll(".ResultListItem .subtitle");
list.forEach((item) => {
  item.addEventListener("click", () => {
    // Nếu item đã có class expanded thì xoá class đó đi
    if (item.classList.contains("expanded")) {
      item.classList.remove("expanded");
    } else {
      // Ngược lại thì thêm class expanded vào
      item.classList.add("expanded");
    }
  });
});

const searchBar = document.querySelector(".global-search.global-search-modal");
const esc = document.querySelector(".GlobalSearchHeader .close");
esc.addEventListener("click", () => {
    searchBar.style.display = "none";
});

