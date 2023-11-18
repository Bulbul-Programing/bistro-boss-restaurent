
const PageBanner = ({ img, title, description }) => {
    return (
        <div>
            <div className="hero h-[500px]" style={{ backgroundImage: `url(${img})` }}>
                <div className=""></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="bg-slate-700 text-white bg-opacity-70 rounded-lg px-5 py-10 w-[700px]">
                        <h1 className="text-4xl font-bold text-center mb-5">{title}</h1>
                        <p className="font-medium">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;