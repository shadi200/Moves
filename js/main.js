let trendingMovies = [];
var Links = document.querySelectorAll(".navLink");
for (let i = 0; i < Links.length; i++) {
  Links[i].addEventListener("click", function (e) {
    var Category = e.target.getAttribute("movie");

    getData(Category);
  });
}
async function getData(movieCategory) {
  var request = await fetch(
    `https://api.themoviedb.org/3/movie/${movieCategory}?api_key=eba8b9a7199efdcb0ca1f96879b83c44`
  );
  var myData = await request.json();
  trendingMovies = await myData.results;
  displayItem();
}
getData("upcoming");
function displayItem() {
  var cartona = ``;
  for (let i = 0; i < trendingMovies.length; i++) {
    cartona += `
    <div class="col-md-6 col-lg-4 my-3  shadow"">
        <div class="item shadow rounded">
            <img src='https://image.tmdb.org/t/p/w500/${trendingMovies[i].poster_path}' class='w-100 img-fluid rounded' />
            <div class="overlay d-flex align-items-center justify-content-center">
            <div class='captionDescription p-0'>
                <h2>${trendingMovies[i].title}</h2>
                <p>${trendingMovies[i].overview}</p>
                <p>Rate: ${trendingMovies[i].vote_average}</p>
                <p>${trendingMovies[i].release_date}</p>
            </div>  
            
            </div>
             
        </div>
    </div>
    `;
  }
  document.getElementById("rowData").innerHTML = cartona;
}

//Regex//

var inputName = document.getElementById("name");
var inputEmail = document.getElementById("email");
var inputPhone = document.getElementById("phone");
var inputAge = document.getElementById("age");
var inputPassword = document.getElementById("password");
var inputRePassword = document.getElementById("repassword");

function validName() {
  var regex = /^[A-Za-z\s]{5,20}$/;
  var testValid = false;
  if (regex.test(inputName.value) == true) {
    document.getElementById("alertName").style.display = "none";
    testValid = true;
  } else {
    document.getElementById("alertName").style.display = "block";
    testValid = false;
  }
  return testValid;
}

function validEmail() {
  var regex = /^[A-Za-z_]{3,10}@[a-zA-Z]{3,7}\.[a-zA-Z]{2,3}$/;
  var testValid = false;
  if (regex.test(inputEmail.value) == true) {
    document.getElementById("alertEmail").style.display = "none";
    testValid = true;
  } else {
    document.getElementById("alertEmail").style.display = "block";
    testValid = false;
  }
  return testValid;
}

function validPhone() {
  var regex = /^(010|011|012|015)[0-9]{8}$/;
  var testValid = false;
  if (regex.test(inputPhone.value) == true) {
    document.getElementById("alertPhone").style.display = "none";
    testValid = true;
  } else {
    document.getElementById("alertPhone").style.display = "block";
    testValid = false;
  }
  return testValid;
}

function validAge() {
  var regex = /^[1-90]{0,2}$/;
  var testValid = false;
  if (regex.test(inputAge.value) == true) {
    document.getElementById("alertAge").style.display = "none";
    testValid = true;
  } else {
    document.getElementById("alertAge").style.display = "block";
    testValid = false;
  }
  return testValid;
}

function validPassword() {
  var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var testValid = false;
  if (regex.test(inputPassword.value) == true) {
    document.getElementById("alertPassword").style.display = "none";
    testValid = true;
  } else {
    document.getElementById("alertPassword").style.display = "block";
    testValid = false;
  }
  return testValid;
}

function validRePassword() {
  var regex = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  var testValid = false;
  if (regex.test(inputRePassword.value) == true) {
    document.getElementById("alertRePassword").style.display = "none";
    testValid = true;
  } else {
    document.getElementById("alertRePassword").style.display = "block";
    testValid = false;
  }
  return testValid;
}

$(".LinksNav").click(function () {
  let leftNav = $(".outerBox").css("left");

  let innerBoxWidth = $(".innerBox").outerWidth();
  if (leftNav == "0px") {
    $(".outerBox").animate({ left: `${innerBoxWidth}px` }, 500);
  } else {
    $(".outerBox").animate({ left: `0px` }, 500);
  }
});

var searchInput = document.getElementById("searchMovies");
function searchData() {
  var searchValue = searchInput.value;
  var cartona = "";
  for (let i = 0; i < trendingMovies.length; i++) {
    if (
      trendingMovies[i].title.toLowerCase().includes(searchValue.toLowerCase())
    ) {
      cartona += `
            <div class="col-md-6 col-lg-4 my-3  shadow"">
                <div class="item shadow rounded">
                    <img src='https://image.tmdb.org/t/p/w500${trendingMovies[i].poster_path}' class='w-100 img-fluid rounded' />
                    <div class="overlay d-flex align-items-center justify-content-center">
                    <div class='captionDescription p-0'>
                        <h2>${trendingMovies[i].title}</h2>
                        <p>${trendingMovies[i].overview}</p>
                        <p>Rate: ${trendingMovies[i].vote_average}</p>
                        <p>${trendingMovies[i].release_date}</p>
                    </div>  
                    
                    </div>
                  
                </div>
            </div>
            `;
    }
  }
  document.getElementById("rowData").innerHTML = cartona;
}

$(".LinksNav").click(function () {
  $(".innerBox .item1").animate({ opacity: "1", paddingTop: "25px" }, 1000),
    $(".innerBox .item2").animate({ opacity: "1", paddingTop: "25px" }, 1100),
    $(".innerBox .item3").animate({ opacity: "1", paddingTop: "25px" }, 1200),
    $(".innerBox .item4").animate({ opacity: "1", paddingTop: "25px" }, 1300),
    $(".innerBox .item5").animate({ opacity: "1", paddingTop: "25px" }, 1400),
    $(".innerBox .item6").animate({ opacity: "1", paddingTop: "25px" }, 1500);
});
var allMoviesByWord = document.getElementById("allMovies");
function getMoviesByWord(w) {
  var myHttp = new XMLHttpRequest();
  myHttp.open(
    "get",
    "https://api.themoviedb.org/3/search/movie?query=" +
      w +
      "&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false"
  ),
    myHttp.send(),
    (myHttp.onreadystatechange = function () {
      if (myHttp.readyState == 4 && myHttp.status == 200) {
        trendingMovies = JSON.parse(myHttp.response).results;
        console.log(trendingMovies);
        displayItem();
      }
    });
}
allMoviesByWord.onkeyup = function () {
  getMoviesByWord(allMoviesByWord.value);
};
