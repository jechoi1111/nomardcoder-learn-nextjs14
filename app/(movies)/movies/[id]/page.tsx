import MovieVideos from '../../../../components/movieVideos';
import MovieInfo from '../../../../components/movieInfo';
import { Suspense } from 'react';

export default async function MovieDetail({params: {id}} : {params: {id: string}}) {
    return <div>
        <Suspense fallback={<h1>Loading Movie Info</h1>}>
            <MovieInfo id={id} />
        </Suspense>
        <Suspense fallback={<h1>Loading Movie Videos</h1>}>
            <MovieVideos id={id} />
        </Suspense>
    </div>
}