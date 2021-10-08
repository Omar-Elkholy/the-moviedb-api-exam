import { SearchCollection } from "./searchModule2.js";
export class Movies {

    allMovies = [];

    urls = [
        "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k&language=en-US&page=1",
        "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k&language=en-US&page=1",
        "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k",
        "https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k&language=en-US&page=1",
    ];
    

    async fetchUrl(url = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k") {

        this.req = await fetch(url);
        

        this.reqJson = await this.req.json();
        if (this.req.ok) {
            this.allMovies = await this.reqJson.results;
            this.displayMovies();
            
        }
        
    }
    
    displayMovies() {

        this.str = "";

        for (let i = 0; i < this.allMovies.length; i++) {

            let overview = this.allMovies[i].overview;
            
            // Handling Text Overflow
            if (overview.length > 450) {
                overview = overview.slice(0, 450);
            }
            // Handling Console Error
            let src = `${this.allMovies[i].poster_path ? "https://image.tmdb.org/t/p/w500/" + this.allMovies[i].poster_path : "images/NotFound.jpg"} `;

            this.str += `
            <div class="col-md-6 col-lg-4 my-3 shadow">
                <div class="movie-image">
                    <img class="img-fluid" src= ${src} alt="" />
                    <div class="image-layer">
                        <h2>${this.allMovies[i].title}</h2>
                        <p>
                        ${overview}
                        </p>
                        <p>rate: ${this.allMovies[i].vote_average}</p>
                        <p>${this.allMovies[i].release_date}</p>
                    </div>
                </div>
            </div>
            `

        }

        $("#moviesRow").html(this.str);

        new SearchCollection(this.allMovies);

    }



}
