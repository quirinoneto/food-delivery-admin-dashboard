import Image from "next/image"

import Home from  "@/assets/home.svg";
import OrderList from  "@/assets/order-list.svg";
import OrderDetail from  "@/assets/order-detail.svg";
import Customer from  "@/assets/customer.svg";
import Analytics from  "@/assets/analytics.svg";
import Reviews from  "@/assets/reviews.svg";
import Foods from  "@/assets/foods.svg";
import FoodDetail from  "@/assets/food-detail.svg";
import CustomerDetail from  "@/assets/customer-detail.svg";
import Calendar from  "@/assets/calendar.svg";
import Chat from  "@/assets/chat.svg";
import Wallet from  "@/assets/wallet.svg";


export function Sidebar() {
    return (
        <div className="flex flex-col gap-10 bg-white w-[350px]">
            <div className="pl-12 pt-8 pr-4 pb-8">
                <h1 className="text-5xl font-black mb-4">Sedap.</h1>
                <span className=" text-gray-300  inline text-base">Modern Admin Dashboard</span>
            </div>
            <ul className="flex flex-col gap-5 pl-10">
                <li className="flex gap-6"><Image className="" src={Home} alt=""/>Dashboard</li>
                <li className="flex  gap-6"><Image src={OrderList} alt=""/>Order List</li>
                <li className="flex  gap-6"><Image src={OrderDetail} alt=""/>Order Detail</li>
                <li className="flex  gap-6"><Image src={Customer} alt=""/>Customer</li>
                <li className="flex  gap-6"><Image src={Analytics} alt=""/>Analytics</li>
                <li className="flex  gap-6"><Image src={Reviews} alt=""/>Reviews</li>
                <li className="flex  gap-6"><Image src={Foods} alt=""/>Foods</li>
                <li className="flex  gap-6"><Image src={FoodDetail} alt=""/>Food Detail</li>
                <li className="flex  gap-6"><Image src={CustomerDetail} alt=""/>Customer Detail</li>
                <li className="flex  gap-6"><Image src={Calendar} alt=""/>Calendar</li>
                <li className="flex  gap-6"><Image src={Chat} alt=""/>Chat</li>
                <li className="flex  gap-6"><Image src={Wallet} alt=""/>Wallet</li>
            </ul>
            <div className={`bg-green-500
                              w-[260px] 
                              h-[149px] rounded-md`}>
                Box Menu
            </div>
            <div>
                <span>Sedap Restaurant Admin Dashboard</span>
                <span>2020 All rights reserved</span>
                <span>Made with love by Quirino </span>
            </div>
        </div>
    )
}