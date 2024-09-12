import MovieVideos from '../../../../components/movieVideos/movieVideos';
import MovieInfo, { getMovie } from '../../../../components/movieInfo/movieInfo';
import { Suspense } from 'react';

type MovieDetailParams = {
    params: {id: string};
}

export async function generateMetadata({params: {id}}: MovieDetailParams) {
    const movie = await getMovie(id);
    return {
        title: movie.title
    }
}

export default async function MovieDetail({params: {id}}: MovieDetailParams) {
    return <div>
        <Suspense fallback={<h1>Loading...</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading...</h1>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
}