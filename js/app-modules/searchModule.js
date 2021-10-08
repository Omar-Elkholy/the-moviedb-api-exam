import { Movies } from "./moviesModule.js";


export class Search  {

    movies = new Movies();


    constructor(allMovies) {



        this.allMovies = allMovies;

        
        document.querySelector("#searchApi").addEventListener("keyup", () => {
            this.searchVal = $("#searchApi").val();
            if (this.searchVal) {
                this.searchMovies(this.searchVal);
            }

        });


    }

    async searchMovies(keyword) {
        await this.movies.fetchUrl(`https://api.themoviedb.org/3/search/movie?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k&language=en-US&page=1&include_adult=false&query=${keyword}`);

    }


   

}