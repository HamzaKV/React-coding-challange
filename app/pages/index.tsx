import { useEffect, useState } from 'react';
import { HomePage, MainTemplate } from '../components';
import { getImages } from '../constants/Queries';
import { usePagination } from '../controls';

const Home = () => {
    const [images, setImages] = useState<{
        url: string;
        alt: string;
        author: string;
        likes: number;
        tagLine?: string;
        description?: string;
        authorUrl?: string;
    }[]>([]);
    const [fetchStatus, fetchData, _, runFetch, count] = usePagination(
        async () => await getImages(count + 1)
    );

    useEffect(() => {
        if (fetchStatus === 'success') {
            const newImages: typeof images = [];
            for (const data of fetchData) {
                newImages.push({
                    url: data?.urls?.full ?? '',
                    alt: data?.alt_description ?? '',
                    author: data?.user?.name,
                    likes: data?.likes ?? 0,
                    tagLine: data?.sponsorship?.tagline ?? '',
                    description: data?.description ?? '',
                    authorUrl: data?.user?.links?.html
                });
            }
            setImages((prev) => [...prev, ...newImages]);
        }
    }, [fetchStatus]);

    return (
        <MainTemplate pageTitle='Home' pageDescription='Home Page'>
            <HomePage 
                images={images} 
                loadMore={() => runFetch(async () => await getImages(count))}
            />
        </MainTemplate>
    );
};

export default Home;
