
const CartBanner = ({ cartTitle, cartDescription }) => {
    return (
        <div className="flex justify-center rounded-xl my-20 py-28 bg-[url('https://i.ibb.co/pQT2Q5h/chef-service.jpg')] bg-cover">
            <div className="bg-white bg-opacity-70 rounded-lg px-5 py-10 w-[700px]">
                <h1 className="text-4xl font-bold text-center mb-5">{cartTitle}</h1>
                <p className="font-medium">{cartDescription}</p>
            </div>
        </div>
    );
};

export default CartBanner;