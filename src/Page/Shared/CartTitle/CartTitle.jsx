
const CartTitle = (data) => {
    console.log(data);
    return (
        <div className="text-center w-4/12 my-10 mx-auto">
            <p className="text-yellow-500">---{data.data.shortTitle}---</p>
            <h1 className="border-2 py-3 text-4xl font-bold border-r-0 border-l-0 my-3 border-t-slate-600 border-b-slate-600">{data.data.heading}</h1>
        </div>
    );
};

export default CartTitle;