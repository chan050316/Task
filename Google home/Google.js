// building HTML
const searchBoxClick__TextBoxs = [
    {
      Text : "자바스크립트 요소 밖 클릭했을때"
    },
    {
      Text : "자바스크립트 검색창 만들기"
    },
    {
      Text : "자바스크립트 이벤트 mozilla"
    },
    {
      Text : "javascript mouse event"
    },
    {
      Text : "javascript 마우스 바깥 클릭"
    },
    {
      Text : "마우스 이벤트"
    },
    {
      Text : "google font"
    },
    {
      Text : "Google"
    },
  ]
function buildingHTML() {
  for (var i in searchBoxClick__TextBoxs) {
    let searchBoxClick__Text = searchBoxClick__TextBoxs[i]
    document.querySelector('#jssearchBoxClick').innerHTML += `
    <div class="searchBoxClick__TextBox">
      <span class="material-icons scheduleIcon">schedule</span>
      <div class="searchBoxClick__Text">${searchBoxClick__Text.Text}</div>
      <span class="material-icons closeIcon">close</span>
    </div>
    `;
  }
}


const bodyEl = document.querySelector('body');
const searchBarEl = document.querySelector('#jssearchBar');
const searchBarIconEl = document.querySelectorAll('.searchIconBox');
const seachedWordEl = document.querySelector('#jssearchBoxClick');
const searchBoxClick__TextBoxEl = document.querySelectorAll('.searchBoxClick__TextBox');

const searchBarIconEl_className = 'searchIconBoxClick';

function Search(event) {
  if(event.target.className === 'searchBar') {
    searchBarEl.placeholder = "";
    searchBarIconEl[0].classList.add(searchBarIconEl_className);
    searchBarIconEl[1].classList.add(searchBarIconEl_className);
    seachedWordEl.classList.remove('hidden');
  } else {
    searchBarEl.placeholder = "Search Google or type a UPL";
    searchBarIconEl[0].classList.remove(searchBarIconEl_className);
    searchBarIconEl[1].classList.remove(searchBarIconEl_className);
    seachedWordEl.classList.add('hidden');
  }
}

function addSearchedWord(event) {
  if(event.keyCode === 13 && searchBarEl.value !== "") {
    console.log(2);
    const Text = {Text : searchBarEl.value};
    searchBoxClick__TextBoxs.unshift(Text);
    searchBoxClick__TextBoxs.pop()
  }
  document.querySelector('#jssearchBoxClick').innerHTML =  ``
  buildingHTML()
}

function textBoxHover(event) {
  event.target.classList.add('searchBoxClick__TextBox-Hover');
}

function textBoxOut(event) {
  event.target.classList.remove('searchBoxClick__TextBox-Hover');
}

window.addEventListener('load', buildingHTML)
bodyEl.addEventListener('click', Search);
searchBarEl.addEventListener('keyup', addSearchedWord);
searchBoxClick__TextBoxEl.forEach(text => text.addEventListener('mouseenter', textBoxHover));
searchBoxClick__TextBoxEl.forEach(text => text.addEventListener('mouseleave', textBoxOut));