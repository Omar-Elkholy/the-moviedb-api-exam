
export class SearchCollection {
  collection = [];
  
  constructor(allData) {
      this.allData = allData;
      
      document.querySelector("#searchCollection").addEventListener("focus", function () {
          $("#hint").show(500);
      });

    this.searchCollection();
  }

  searchCollection() {
      
    // Making The Search Starts After The User Stop Typing
    document.querySelector("#searchCollection").addEventListener(
      "keyup",
        this.debounce((e) => {
          
        setTimeout(() => {
            $("#hint").remove();
        }, 100);
        this.collection = [];
        for (let i = 0; i < this.allData.length; i++) {
          this.movieTitle = this.allData[i].original_title;
          this.collectionVal = $("#searchCollection").val();

          if (
            this.movieTitle
              .toLowerCase()
              .includes(this.collectionVal.toLowerCase())
          ) {
            this.collection.push(this.allData[i]);
          }
        }
        this.displayCollection();
      }, 700)
    );
  }

  // Function To Make Search happens After User Stop Typing
  debounce = (fn, delay) => {
    this.timeoutId;
    return function (...args) {
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  };

  displayCollection() {
    this.str = "";

    for (let i = 0; i < this.collection.length; i++) {
      this.str += `
            <div class="col-sm-6 col-lg-4 my-3 shadow">
                <div class="movie-image">
                    <img class="img-fluid" src= "https://image.tmdb.org/t/p/w500/${this.collection[i].poster_path}" alt="" />
                    <div class="image-layer">
                        <h2>${this.collection[i].title}</h2>
                        <p>
                        ${this.collection[i].overview}
                        </p>
                        <p>rate: ${this.collection[i].vote_average}</p>
                        <p>${this.collection[i].release_date}</p>
                    </div>
                </div>
            </div>
            `;
    }

      $("#moviesRow").html(this.str);
      
  }
}
