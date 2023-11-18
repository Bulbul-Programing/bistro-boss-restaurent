import CartTitle from "../../Shared/CartTitle/CartTitle";

const FromMenu = () => {
    return (
        <div className="text-white my-10 rounded-2xl bg-[url('https://i.ibb.co/QvL70NK/featured.jpg')] bg-cover bg-fixed">
            <div className="pb-20 pt-5 rounded-2xl bg-slate-500 bg-opacity-60">
                <CartTitle shortTitle='Check it out' heading='FROM OUR MENU'></CartTitle>
                <div className="flex mx-16 gap-x-10 mt-20">
                    <img className="w-[400px] rounded-lg" src="https://i.ibb.co/QvL70NK/featured.jpg" alt="" />
                    <div>
                        <p>March 20, 2023</p>
                        <h1 className="text-lg font-bold mt-1">WHERE CAN I GET SOME?</h1>
                        <p className="mt-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere quaerat labore, neque quo assumenda itaque qui incidunt libero ratione eligendi iure odit id dolorum. Inventore blanditiis nostrum hic quasi, nobis culpa laborum quibusdam, nisi quia aliquid, deleniti consectetur! Non neque sint fugiat eligendi dolorum ullam tempora magni? Pariatur, corrupti labore?</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FromMenu;