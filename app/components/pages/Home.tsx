import {
    Page,
    Section,
    Text,
    InfiniteScroll,
    ImageContainer,
    InfiniteScrollProps,
    Grid
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
        <Page style={{ paddingBottom: 150 }}>
            <Section style={{ margin: '25px 0' }}>
                <Text type='t4' responsive>
                    Image Gallery
                </Text>
            </Section>
            <InfiniteScroll loadMore={loadMore}>
                {Utils.validArray(images) ? (
                    <Grid
                        cols={3}
                        items={images}
                        Component={(image: TImage) => <ImageContainer
                            src={image.url}
                            alt={image.alt}
                            likes={image.likes}
                            author={image.author}
                            authorUrl={image.authorUrl}
                            description={image.description}
                            tagLine={image.tagLine}
                        /> }
                    />
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