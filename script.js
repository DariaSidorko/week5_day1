

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

// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '/catalog'},
//   {text: 'orders', href: '/orders'},
//   {text: 'account', href: '/account'},
// ];

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

for (link of menuLinks){
  let newLink = document.createElement('a');
  newLink.textContent = link.text;
  newLink.setAttribute('href', link.href);
  topMenuEl.appendChild(newLink);
}


//Task 4.0

subMenuEl = document.getElementById('sub-menu');

subMenuEl.style.height = '100%';

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

subMenuEl.classList.add('flex-around');

//Task 4.4

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = 0;


//Task 5.1

let topMenuLinks = document.querySelectorAll('a');
console.log(topMenuLinks);
let showingSubMenu = false;

//Task 5.2 - 5.3

topMenuEl.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.tagName.toLowerCase() === 'a'){
   // if (event.target.classList.contains('active')) 
    console.log(event.target.textContent)
   //Task 5.4
   for(link of topMenuLinks){
      link.classList.remove('active');
    }
      event.target.classList.remove('active');
      showingSubMenu = false;
      subMenuEl.style.top = 0;
  }

  //Task 5.5
  event.target.classList.add('active');

  let activeLink;
  //Task 5.6
  for (link of menuLinks){
    if (link.text === event.target.textContent)
      activeLink = link;
  }
    //console.log(link.text)
    if ('subLinks' in activeLink){ 
      showingSubMenu = true;
      console.log('true')
      //Task 5.7
      buildSubMenu(activeLink.subLinks);
      subMenuEl.style.top = '100%';
    } else {
      showingSubMenu = false;
      console.log('false')
      subMenuEl.style.top = '0';
      document.querySelector('h1').textContent = 'SEI Rocks';
    }

})

function buildSubMenu(sublinksArray){
  subMenuEl.textContent = ''
  // building new sub menu
  for(link of sublinksArray){
    let newLink = document.createElement('a');
    newLink.textContent = link.text;
    newLink.setAttribute('href', link.href);
    subMenuEl.appendChild(newLink);
  }
}

// Task 6.0

subMenuEl.addEventListener('click', (event) => {
  event.preventDefault();

  if (event.target.tagName.toLowerCase() !== 'a') return;

  console.log(event.target.textContent);

  //Task 6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';

  //Task 6.2
  for(link of topMenuLinks){
    link.classList.remove('active');
  }

  //Task 6.3
  document.querySelector('h1').textContent = event.target.textContent;
}) 


// var menuLinks = [
//   {text: 'about', href: '/about'},
//   {text: 'catalog', href: '#', subLinks: [
//     {text: 'all', href: '/catalog/all'},
//     {text: 'top selling', href: '/catalog/top'},
//     {text: 'search', href: '/catalog/search'},
//   ]},
//   {text: 'orders', href: '#' , subLinks: [
//     {text: 'new', href: '/orders/new'},
//     {text: 'pending', href: '/orders/pending'},
//     {text: 'history', href: '/orders/history'},
//   ]},
//   {text: 'account', href: '#', subLinks: [
//     {text: 'profile', href: '/account/profile'},
//     {text: 'sign out', href: '/account/signout'},
//   ]},
// ];


