import { FC, useState } from 'react';
import { Container, Image, ImageProps, Modal, Text, Link } from '../';

export interface IProps extends ImageProps {
    author?: string;
    likes: number;
    tagLine?: string;
    description?: string;
    authorUrl?: string;
}

const ImageContainer: FC<IProps> = ({
    src,
    alt,
    author,
    likes,
    tagLine,
    description,
    authorUrl
}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Container
                style={{
                    cursor: 'pointer',
                }}
                onClick={() => setOpen((prev) => !prev)}
            >
                <Image src={src} alt={alt} width='100%' height='auto' />
            </Container>
            <Modal open={open} setOpen={setOpen}>
                <Image src={src} alt={alt} width='100%' height='auto' />
                <Text type='t8'>Tag Line: {tagLine}</Text>
                <Text type='t8'>Description: {description}</Text>
                <Text type='t8'>Likes: {likes}</Text>
                <Link 
                    onClick={() => window.open(authorUrl)}
                    backgroundColor='transparent'
                    link={authorUrl}
                    containerStyle={{
                        height: 'fit-content',
                    }}
                >
                    <Text type='t8'>Author: {author}</Text>
                </Link>
            </Modal>
        </>
    );
};

export default ImageContainer;
