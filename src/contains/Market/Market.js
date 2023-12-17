import { Carousel } from 'antd';
// import style from "./Market.css";

const contentStyle = {
    height: '300px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const imageStyle = {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
};

function Market() {
    return (
        <div>
            <Carousel autoplay>
                <div>
                    <div style={contentStyle}>
                        <img style={imageStyle} src="https://www.pinkelephant.ru/imgs/maldives/maldives.jpg" alt=""/>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <img style={imageStyle} src="https://avatars.dzeninfra.ru/get-zen_doc/3524431/pub_6017d8035930a614f24352c9_6017daf7d941687b7084f173/scale_1200" alt=""/>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <img style={imageStyle} src="https://i.pinimg.com/originals/b4/e3/71/b4e371619042d1e80918d09904e90f7d.gif" alt=""/>
                    </div>
                </div>
                <div>
                    <div style={contentStyle}>
                        <img style={imageStyle} src="https://medtempus.com/wp-content/uploads/2018/11/matrix-gato-deja-vu.gif" alt=""/>
                    </div>
                </div>
            </Carousel>
        </div>
    );
}

export default Market;