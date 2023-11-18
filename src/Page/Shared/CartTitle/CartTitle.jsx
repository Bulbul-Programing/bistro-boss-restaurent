
const CartTitle = ({shortTitle, heading}) => {
    
    return (
        <div className="text-center w-4/12 my-10 mx-auto">
            <p className="text-yellow-500">---{shortTitle}---</p>
            <h1 className="border-[3px] py-3 text-4xl font-bold border-r-0 border-l-0 my-3 border-t-slate-300 border-b-slate-300">{heading}</h1>
        </div>
    );
};

export default CartTitle;