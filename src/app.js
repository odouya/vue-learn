
import MovieList from "./movieList.js"
import Pager from "./pager.js"
import movies from './mockDatas.js'


const template = `
    <div>
        <MovieList :movies="pageMovies"/>
        <Pager 
        :current = "2" 
        :total = "100" 
        page-size="pageSize"
        @change="current=$event"
        />
    </div>
`

export default {
    template,
    data(){
        return {
            current:1,
            total:movies.length,
            pageSize:10,
            allMovie:movies
        }
    },
    computed:{
        pageMovies(){
            return this.allMovie.slice((this.current-1) * this.pageSize, this.current * this.pageSize);
        }
    },
    components:{
        MovieList,
        Pager
    }
}