import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import React, { useEffect } from 'react';
import { DeleteIcon } from '../../assets/custom-icon';
import { useGlobalState } from '../../context/context';

const Payment = ({ setshowPayement }) => {

    // const [cartItem,setCartItems]=useCartValue();
    const {cartItem,setCartItems} = useGlobalState();

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));
        setCartItems(cartItems ?? [])
    }, [])
    const removeCoinFromCart = (coinToRemove) => {

        // Ensure that coinToRemove is not null or undefined
        if (!coinToRemove) {
            console.error('coinToRemove must be provided');
            return;
        }

        // Retrieve current cart items from local storage
        const cartItems = JSON.parse(localStorage.getItem('cartItems'));

        if (cartItems) {

            // Filter out the item with the specified ID
            const updatedCartItems = cartItems?.filter(item => item._id !== coinToRemove._id);

            // Update local storage with the updated cart items
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));


            setCartItems(updatedCartItems);
        }

    };
    return (
        <div className="bg-[#F2F2F2]">
            <section className='pt-6 sm:pt-8'>
                <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md mx-auto px-3 lg:px-0'>
                    <div className='flex gap-8'>

                        <div className="flex-1 rounded-2xl px-4 sm:px-8 py-8 bg-white h-screen max-h-[585px]">
                            <div className='flex justify-between'>
                                <div
                                    onClick={() => setshowPayement(false)}
                                    className='flex items-center gap-4 cursor-pointer'>
                                    <ArrowLeftIcon className="h-6 w-6" />
                                    <span className='text-30 font-bold'>Payment Method</span>
                                </div>

                            </div>


                        </div>
                        <div className="inset-y-0 rounded-2xl max-h-[874px] round w-full max-w-[430px] overflow-y-auto bg-white px-6 py-6  sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-baseline justify-between pb-6 border-b-[1px] border-lightThemeOutline">
                                <div className="-m-1.5 p-1.5">
                                    <span className='text-30 font-bold'>Order Summary</span>
                                </div>
                                <div className="flex items-center xs:gap-3">
                                    <span className="text-sm font-semibold text-lightThemeSecondary">{`Total items ${cartItem?.length}`}</span>
                                </div>
                            </div>
                            <div className="pb-6 mt-6 border-b-[1px] overflow-y-auto max-h-[274px] border-lightThemeOutline space-y-4">
                                {cartItem?.map((item, index) => (
                                    <div key={index + '-item'} className="flex items-center gap-4">
                                        <div className='flex flex-1 justify-between items-center gap-1 border-[1px] h-[75px] border-lightThemeOutline shadow-custom rounded-xl p-4'>
                                            <div className='flex items-center gap-2'>

                                                <div className="flex items-center gap-x-2">
                                                    <img
                                                        src={item?.logo}
                                                        alt="logo"
                                                        className="w-8 rounded-full bg-gray-50"
                                                    />
                                                    <div className="text-sm leading-6">
                                                        <p>

                                                            <span className="text-base font-semibold">

                                                                {item?.symbol}
                                                            </span>

                                                        </p>
                                                        <p className="text-[14px] font-medium text-lightSecondaryText line-clamp-1">
                                                            {item?.name}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-lg font-semibold">
                                                $10.00
                                            </div>
                                        </div>
                                        <div onClick={() => removeCoinFromCart(item)} className="bg-[#FFE5E5] rounded-lg flex justify-center items-center min-h-[75px] w-[70px] cursor-pointer">
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                ))}
                                {
                                    cartItem?.length === 0 &&
                                    <div className="bg-white w-full p-3 rounded-lg text-primaryPurple font-semibold text-base h-12 flex justify-center items-center ">
                                        No item to show
                                    </div>
                                }
                            </div>
                            {
                                cartItem?.length > 0 &&

                                <div className="mt-6 space-y-4">
                                    <div className="text-lightThemeSecondary text-base font-medium flex justify-between items-center">
                                        <div>
                                            {'Discount (FRIENDS)'}
                                        </div>
                                        <div>
                                            {'10% ($4.90)'}
                                        </div>
                                    </div>
                                    <div className="text-lightThemeSecondary text-base font-medium flex justify-between items-center">
                                        <div>
                                            {'Express shipping'}
                                        </div>
                                        <div>
                                            {'$3.99'}
                                        </div>
                                    </div>
                                    <div className="text-primaryDark text-base font-semibold flex justify-between items-center">
                                        <div>
                                            {'Total'}
                                        </div>
                                        <div>
                                            {'$48.09'}
                                        </div>
                                    </div>
                                </div>
                            }
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Payment;
