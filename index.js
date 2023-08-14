const generateMemeBtn =document.querySelector(`.meme-btn`)

const memeImage = document.querySelector(".main img");
const memeTitle = document.querySelector(".main .meme-post");
const memeAuthor = document.querySelector(".main .author");


const generateMeme = () => {
    fetch("https://meme-api.com/gimme/wholesomememes")
      .then((response) => response.json())
      .then((data) => {
        updateDetails(data.url, data.title, data.author);
      });
  };

const updateDetails = (url, title, author) => {
    memeImage.setAttribute("src", url);
    memeTitle.innerHTML = title;
    memeAuthor.innerHTML = `Meme by: ${author}`;
};

// event call
generateMemeBtn.addEventListener("click", generateMeme);

// init call
generateMeme();

