import { Parallax } from 'react-parallax';

const Cover = ({ img, title, shortDescription }) => {
    return (
        <Parallax
            // blur={{ min: -15, max: 15 }}
            blur={{ min: -50, max: 50 }}
            // blur={{ min: -150, max: 150 }}
            // bgImage={require('path/to/another/image.jpg')}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className="hero h-[700px]">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{shortDescription}</p>
                    </div>
                </div>
            </div>
        </Parallax>


    );
};

export default Cover;