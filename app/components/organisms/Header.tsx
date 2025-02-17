import { Link, Text } from '../';

const Header = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#129936',
                padding: '0 25px 0 25px',
                boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.25)',
                zIndex: 9999,
                position: 'sticky',
                top: 0,
            }}
        >
            <Link
                onClick={() => console.log()}
                backgroundColor='transparent'
                link='/'
                containerStyle={{
                    alignItems: 'flex-start',
                    height: 'fit-content',
                    padding: '8px 15px',
                }}
            >
                <Text type='t4' color='white'>App</Text>
            </Link>
        </div>
    );
};

export default Header;
