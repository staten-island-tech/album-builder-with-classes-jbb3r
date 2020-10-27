//Create Album Class
//constructor for Album

class Album {
  //class declaration
  constructor(title, artist, url) {
    this.title = title;
    this.artist = artist;
    this.url = url;
  }
}

class UI {
  //Create UI Class ,what does the UI look like? Methods for changing UI? displaying Albums
  //1. Display Album
  addAlbumToList(album) {
    let html =
      '<div class="display-album flex-row"><div class="display-title">%title%</div><div class="display-artist">%artist%</div><div class="display-cover"><img src="%url%"alt=""></div><div class="remove-album">Remove Album X</div>';
    let newHtml = html.replace("%title%", album.title);
    newHtml = newHtml.replace("%artist%", album.artist);
    newHtml = newHtml.replace("%url%", album.url);
    document.querySelector(".display").insertAdjacentHTML("beforeend", newHtml);
  }
  //2. clear out input field method
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("url").value = "";
  }
  //3. Delete Album method
}
//event listener for the form, control flwo, init function
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  //get values from user
  const title = document.getElementById("title").value;
  const artist = document.getElementById("artist").value;
  const url = document.getElementById("url").value;
  //instantiate or get new instance of Album
  const album = new Album(title, artist, url);
  console.log(album);
  const ui = new UI();
  ui.addAlbumToList(album);
  ui.clearFields();
});
