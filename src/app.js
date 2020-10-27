class Album {
  constructor(title, artist, url) {
    this.title = title;
    this.artist = artist;
    this.url = url;
  }
}

class UI {
  //method to show new album
  addAlbumToList(album) {
    let html = `<div class="display-album flex-row"><div class="display-title">%title%</div><div class="display-artist">%artist%</div><div class="display-cover"><img src="%url%" alt=""></div><div class="remove-album">Remove Album X</div>`;
    let newHtml = html.replace("%title%", album.title);
    newHtml = newHtml.replace("%artist%", album.artist);
    newHtml = newHtml.replace("%url%", album.url);
    document.querySelector(".display").insertAdjacentHTML("beforeend", newHtml);
  }
  //method to clear out the input fields
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("artist").value = "";
    document.getElementById("url").value = "";
  }
  //delete target album method
  deleteAlbum(target) {
    if (target.className === "remove-album") {
      target.parentElement.remove();
    }
  }
}

//event listener main function
document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();
  //Get values
  const title = document.getElementById("title").value;
  const artist = document.getElementById("artist").value;
  const url = document.getElementById("url").value;
  //instantiate new album with values
  const album = new Album(title, artist, url);
  //console.log(album);
  const ui = new UI();
  //console.log(ui);
  ui.addAlbumToList(album);
  ui.clearFields();
});

document.querySelector(".display").addEventListener("click", function (e) {
  const ui = new UI();
  ui.deleteAlbum(e.target);
  console.log(e);
  console.log(e.target);

  ui.clearFields();
  e.preventDefault();
});
