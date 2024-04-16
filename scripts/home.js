let movieShows_array = [
    {
      name: "IB71",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/9829/1711391679829-h",
      releaseDate: "2024-03-12",
      rating: "5",
    },
    {
      name: "BHUJ",
      image:
        "https://www.adgully.com/img/800/202107/bhuj-the-pride-of-india.jpg",
      releaseDate: "2024-04-03",
      rating: "4",
    },
    {
      name: "SHOWTIME",
      image: "https://i.ytimg.com/vi/tAXew1iKCnw/maxresdefault.jpg",
      releaseDate: "2024-04-25",
      rating: "7",
    },
    {
      name: "HOUSEFULL4",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/3669/593669-v",
      releaseDate: "2024-02-07",
      rating: "6",
    },
    {
      name: "DRISHYAM",
      image:
        "https://www.91-cdn.com/hub/wp-content/uploads/2021/06/Drishyam-top-hotstar-movies-Hindi.jpg?tr=q-100",
      releaseDate: "2024-07-05",
      rating: "8",
    },
    {
      name: "MISSION MANGAL",
      image:
        "https://www.91-cdn.com/hub/wp-content/uploads/2021/06/Mission-Mangal-top-hotstar-movies-Hindi.jpg?tr=q-100",
      releaseDate: "2024-02-22",
      rating: "8",
    },
    {
      name: "KABIL",
      image:
        "https://www.91-cdn.com/hub/wp-content/uploads/2021/06/Kaabil-top-hotstar-movies-Hindi.jpg?tr=q-100",
      releaseDate: "2024-07-26",
      rating: "6",
    },
    {
      name: "LOOTCASE",
      image:
        "https://media.gqindia.com/wp-content/uploads/2020/06/Lootcase.jpg",
      releaseDate: "2024-11-21",
      rating: "3",
    },
    {
      name: "TANHAJI",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/7676/647676-v",
      releaseDate: "2024-11-23",
      rating: "3",
    },
    {
      name: "ALLADIN",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/1944/941944-v",
      releaseDate: "2026-02-05",
      rating: "4",
    },
    {
      name: "VIKRAM",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/436/1630436-h-18323ab5427d",
      releaseDate: "2023-06-08",
      rating: "5.5",
    },
  ],

  localStorage.setItem("movieShows",JSON.stringify(movieShows_array));


// storing images into an array for carousel
const image_array = [
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/4469/674469-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/6362/936362-h",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/244/1530244-h-c05c58fd405f",
  "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/9198/1710254439198-h",
];

// getting all html elements into js
const carousel_container = document.querySelector(".carousel-container");
const carousel_imageContainer = document.querySelector(
  ".carousel-imageContainer"
);
const right_arrow = document.querySelector(".right-arrow");
const left_arrow = document.querySelector(".left-arrow");

// IntervalID
let intervalId = null;

// current index of images
let currentIndex = 0;

// click event for right arrow button
right_arrow.addEventListener("click", function () {
  currentIndex++;
  if (currentIndex === image_array.length) {
    currentIndex = 0;
  }
  carouselImages(currentIndex);
});

// click event for left arrow button
left_arrow.addEventListener("click", function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = image_array.length - 1;
  }
  carouselImages(currentIndex);
});

// function for carousel images
function carouselImages(index) {
  clearInterval(intervalId);
  carousel_imageContainer.innerHTML = null;

  const imgTag = document.createElement("img");
  imgTag.src = image_array[index];
  imgTag.setAttribute("class", "w-full h-full rounded-lg");
  carousel_imageContainer.append(imgTag);
  carousel_container.append(carousel_imageContainer);

  // applying set interval
  intervalId = setInterval(function () {
    carousel_imageContainer.innerHTML = null;
    const imageTag = document.createElement("img");

    if (currentIndex === image_array.length) {
      currentIndex = 0;
    }
    imageTag.src = image_array[currentIndex];
    imageTag.setAttribute("class", "w-full h-full rounded-lg");
    carousel_imageContainer.append(imageTag);
    carousel_container.append(carousel_imageContainer);
    currentIndex++;
  }, 2000);
}
carouselImages(currentIndex);

const movieContainer = document.querySelector(".movie-container");

// using the same movie array by getting from localStorage
const movie_shows = JSON.parse(localStorage.getItem("movieShows"));
// console.log(movie_shows);

function display(movieArray) {
  movieContainer.innerHTML = "";

  movieArray.forEach(function (ele, ind) {
    // movie container which holds both movie images and content
    let mainDiv = document.createElement("div");
    mainDiv.setAttribute(
      "class",
      "border-transparent hover:shadow-xl rounded-lg cursor-pointer flex flex-col justify-between"
    );
    mainDiv.classList.add("h-80");
    mainDiv.classList.add("w-60");

    // movie images
    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("class", "border-transparent rounded-lg");
    imageDiv.classList.add("h-60");

    let imgTag = document.createElement("img");
    imgTag.src = ele.image;
    imgTag.setAttribute("class", "w-full h-full rounded-lg");

    // Movie content like name, release dat and rating
    let contentDiv = document.createElement("div");
    contentDiv.setAttribute(
      "class",
      "border-transparent bg-slate-100 relative px-2 rounded-lg"
    );
    contentDiv.classList.add("h-20");

    // name of the movie
    let pTag_movie_name = document.createElement("p");
    pTag_movie_name.textContent = ele.name;
    pTag_movie_name.setAttribute(
      "class",
      "font-bold italic text-fuchsia-600 text-lg"
    );

    // release date
    let span_release_date_text = document.createElement("span");
    span_release_date_text.textContent = "RELEASE DATE: ";
    span_release_date_text.setAttribute(
      "class",
      "text-sm italic text-fuchsia-600"
    );

    let span_release_date = document.createElement("span");
    span_release_date.textContent = ele.releaseDate;
    span_release_date.setAttribute("class", "text-sm text-emerald-600");

    // IMDB rating
    let imdb_rating = document.createElement("span");
    imdb_rating.setAttribute(
      "class",
      "italic text-sm text-fuchsia-600 font-semibold flex justify-start"
    );
    imdb_rating.textContent = "IMDB: ";

    let imdb_rating_text = document.createElement("span");
    imdb_rating_text.setAttribute(
      "class",
      "text-base text-emerald-600 absolute top-[3.15rem] left-[3.2rem]"
    );
    imdb_rating_text.textContent = ele.rating;

    // appending names, relaese date and rating into content container
    contentDiv.append(
      pTag_movie_name,
      span_release_date_text,
      span_release_date,
      imdb_rating,
      imdb_rating_text
    );

    // appending image into image container
    imageDiv.append(imgTag);

    // appending image and content container into movie container
    mainDiv.append(imageDiv, contentDiv);

    // appending movie container into main container
    movieContainer.append(mainDiv);
  });
}
display(movie_shows);

// sorting the array by IMDB rating and showing in UI
let sort_by_rating = document.getElementById("sortByRating");

sort_by_rating.addEventListener("change", function () {
  
  if (sort_by_rating.value === "low") {
    movie_shows.sort(function (a, b) {
      return +a.rating - +b.rating;
    });
    display(movie_shows);
  } else if (sort_by_rating.value === "high") {
    movie_shows.sort(function (a, b) {
      return +b.rating - +a.rating;
    });
    display(movie_shows);
  }
});
