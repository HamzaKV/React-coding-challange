import React, { useState, useEffect, useRef } from 'react';
import {
    default as ScrollDiv,
    IProps as ScrollDivProps,
} from '../atoms/ScrollDiv';
import { default as Spinner } from '../atoms/Spinner';

export interface IProps {
    children: React.ReactNode;
    loadMore: () => Promise<void>;
    maxHeight?: ScrollDivProps['maxHeight'];
}

const InfiniteScroll = ({ children, loadMore, maxHeight }: IProps) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [element, setElement] = useState<any>(null);

    const prevY = useRef<number>(0);

    const observer = useRef<any>();

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                const firstEntry = entries[0];
                const y = firstEntry.boundingClientRect.y;

                if (prevY.current > y) {
                    setLoading(true);
                }

                prevY.current = y;
            },
            { threshold: 1 }
        );
    }, []);

    useEffect(() => {
        (async () => {
            if (loading) {
                await loadMore();
                setLoading(false);
                // setTimeout(() => {
                //     setLoading(false);
                // }, 1000);
            }
        })();
    }, [loading]);

    useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;

        if (currentElement && IntersectionObserver && currentObserver) {
            currentObserver.observe(currentElement);
        }

        return () => {
            if (currentElement && currentObserver) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [element]);

    return (
        <ScrollDiv maxHeight={maxHeight}>
            {children}
            <div
                ref={setElement}
                style={{
                    height: 200,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {loading && (
                    <div style={{ marginTop: 20, width: 'fit-content' }}>
                        <Spinner width={50} />
                    </div>
                )}
            </div>
        </ScrollDiv>
    );
};

export default InfiniteScroll;