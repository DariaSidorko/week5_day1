

//PART ONE

const mainEl = document.querySelector("main");
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.classList.add("flex-ctr");
const h1 = document.createElement('h1');
//let content = 'SEI Rocks!';
//h1.textContent = content;
h1.textContent = 'SEI Rocks!'
mainEl.appendChild(h1);


//PART TWO

const topMenuEl = document.querySelector("#top-menu");
console.log(topMenuEl);
topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");


//PART THREE

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

for (link of menuLinks){
  let newLink = document.createElement('a');
  newLink.textContent = link.text;
  newLink.setAttribute('href', link.href);
  topMenuEl.appendChild(newLink);
}
