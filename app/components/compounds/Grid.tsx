import { Container } from '../';
export interface IProps {
    // type: 'masonry';
    Component: any;
    cols?: number;
    items: { [key: string]: any }[];
    minWidth?: React.CSSProperties['minWidth'];
}

const Grid: React.FC<IProps> = ({
    Component,
    cols = 2,
    items,
    minWidth = 300,
}) => {
    return (
        <Container
            style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: 10,
            }}
        >
            {Array.from({ length: cols }, (x, i) => i).map((_, key) => {
                const colItems = items.filter((_, index) => {
                    // console.log(key, index, (index + cols) % cols);
                    return (index + cols) % cols === key;
                });

                // console.log(key, colItems);

                return (
                    <div
                        key={key}
                        style={{
                            flex: 1,
                            minWidth: minWidth,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 10,
                        }}
                    >
                        {colItems.map((item, key) => (
                            <Component key={key} {...item} />
                        ))}
                    </div>
                );
            })}
        </Container>
    );
};

export default Grid;
