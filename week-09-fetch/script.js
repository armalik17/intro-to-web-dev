// Loads content for a Wikipedia article and displays it in the page.
async function loadContent() {
  const pageId = 'Nature';
  const response = await fetch(
    'https://en.wikipedia.org/w/api.php?' +
    'action=parse&formatversion=2&format=json&origin=*&page='
    + pageId);
  const json = await response.json();
  const article = json.parse;

//Categories from Nature page 

let categories = json.parse.categories;

let sortkeyElement = document.getElementById ('sortkey');

for (let sort of categories) {
  let liElement = document.createElement ('li'); 
  let aElement = document.createElement ('a');
  aElement.innerText = sort.category;
  
  liElement.appendChild(aElement);
  sortkeyElement.appendChild(liElement);
  }
  console.log (article.links);
  
  
// Languages with active links to different sites 

let title = article.title;

let titleElement = document.getElementById('title');
  titleElement.innerText = title; 

let langLinks = json.parse.langlinks;

let linksElement = document.getElementById('langlinks');
  
for (let link of langLinks) {
  let liElement = document.createElement ('li'); 
  let aElement = document.createElement ('a');
  aElement.innerText = link.title;
  aElement.href = link.url;
  
  liElement.appendChild(aElement);
  linksElement.appendChild(liElement);
  }
  console.log (article.links);

  // Get the links in the Wikipedia article, and display them in         the page.
  
  const interalLinksElement = document.getElementById('interallinks');
  for (const link of article.links) {
    const linkElement = document.createElement('a');

    linkElement.href = 'https://en.wikipedia.org/wiki/' + link.title;
    linkElement.innerText = link.title;

    const liElement = document.createElement('li');
    liElement.appendChild(linkElement);

    interalLinksElement.appendChild(liElement);
  }

  loadImages(article.images);

// Takes an array of image file names, uses the Wikipedia API to get the full
// URL for each one, and then displays them in the page.
async function loadImages(images) {
  const imagesContainer = document.getElementById('images');
  for (const image of images) {
    // image is a local filename (e.g. Cat.jpg), so call the Wikipedia API to
    // get the full URL for the image.
    const response = await fetch(
      'https://en.wikipedia.org/w/api.php'
      + '?action=query&prop=imageinfo&iiprop=url&format=json&formatversion=2&origin=*'
      + '&titles=Image:' + image );
      const json = await response.json();

      const imageUrl = json.query.pages[0].imageinfo[0].url;

      // Skip images that can't be displayed as img elements
      if (imageUrl.endsWith('.ogg')
          || imageUrl.endsWith('.tiff')
          || imageUrl.endsWith('.webm')
          || imageUrl.endsWith('.ogv')) {
        continue;
      }

      const imageElement = document.createElement('img');
      imageElement.src = imageUrl;
      imagesContainer.appendChild(imageElement);
    }
  }
}
  


