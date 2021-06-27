import {
    Page,
    Section,
    Text,
    InfiniteScroll,
    ImageContainer,
    InfiniteScrollProps,
} from '../';
import Assets from '../../constants/Assets';
import Utils from '../../constants/Utils';

type TImage = {
    url: string;
    alt: string;
    author: string;
    likes: number;
    tagLine?: string;
    description?: string;
    authorUrl?: string;
};

export interface IProps {
    images: TImage[];
    loadMore: InfiniteScrollProps['loadMore'];
}

const HomePage = ({ images, loadMore }: IProps) => {
    return (
        <Page>
            <Section style={{ margin: '25px 0' }}>
                <Text type='t4' responsive>
                    Image Gallery
                </Text>
            </Section>
            <InfiniteScroll loadMore={loadMore}>
                {Utils.validArray(images) ? (
                    images.map((image, key) => (
                        <ImageContainer
                            key={key}
                            src={image.url}
                            alt={image.alt}
                            likes={image.likes}
                            author={image.author}
                            authorUrl={image.authorUrl}
                            description={image.description}
                            tagLine={image.tagLine}
                        /> 
                        // <Text key={key} type='t8'>{key}</Text>
                    ))
                ) : (
                    <ImageContainer
                        src={Assets.testImage}
                        alt='test image'
                        likes={2}
                        author='NextJS'
                        authorUrl='http://nextjs.org'
                        description='Default Image'
                        tagLine='Default Image'
                    />
                )}
            </InfiniteScroll>
        </Page>
    );
};

export default HomePage;