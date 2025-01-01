import { Parallax } from 'react-parallax';

const Cover = ({ image, title }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={image}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div
                className="hero h-[100vh]"
                style={{
                    backgroundImage: `url("${image}")`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold ">{title}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;