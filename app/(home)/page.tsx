import { Metadata } from 'next';
import Movie from '../../components/movie/movie';
import styles from './home.module.css';
import { API_URL } from '../constants';

export const metadata: Metadata = {
    title: 'Home',
}


async function getMovies() {
    return fetch(API_URL).then(response => response.json())
}

export default async function HomePage() {
    const movies = await getMovies();
    return <div className={styles.container}>
        {movies.map((movie) => <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} />)}
    </div>
}