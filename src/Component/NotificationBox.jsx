import React, { useEffect, useState } from 'react';
import { Popover, Transition, Tab } from '@headlessui/react';
import { BellNotificationIcon, GreenDot } from '../assets/custom-icon';
import { GetAllNotification, ReadNotification } from '../service/service';
import { useNavigate } from 'react-router-dom';
import { formatDistanceToNow } from 'date-fns';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const NotificationBox = () => {
    const [NotifData, useNotifData] = useState([]);

    const currentPath = location.pathname;
    const excludedPaths = ['/sign-in', '/sign-up', '/forget-password', '/otp-verification', '/new-password'];
    const isPathExcluded = !excludedPaths.includes(currentPath);
    useEffect(() => {
        if(isPathExcluded){
            fetchData()
        }
        const interval = setInterval(fetchData, 20000);
        return () => clearInterval(interval);

        // eslint-disable-next-line
    }, [])

    const fetchData = () => {
        GetAllNotification().then((result) => {
            useNotifData(result?.body?.notifications)
        }).catch((err) => {
            console.error(err);
        })
    }
    const navigate = useNavigate()
    const NotifNaviagte = (id) => {
        navigate('/odr')
        const data = {
            ids: [
                id
            ],
            all: false
        }
        ReadNotification(data).then((result) => {
            if (result.success) {
                fetchData()
            }

        }).catch((err) => {
            console.error(err);
        })
    }
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button>
                        <BellNotificationIcon />
                        <GreenDot className="absolute top-0 right-0" />
                    </Popover.Button>

                    <Transition
                        show={open}
                        as={React.Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                    >
                        <Popover.Panel static className="absolute right-0 mt-2 w-96 bg-white shadow-lg rounded-md z-10">
                        {({ close }) => (
                            <Tab.Group>
                                <Tab.List className="flex border-b border-primaryPurple text-primaryPurple font-semibold">
                                    <Tab as={React.Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={classNames(
                                                    'flex-1 py-2 px-4 focus:outline-none',
                                                    selected ? 'border-b border-primaryPurple' : ''
                                                )}
                                            >
                                                System
                                            </button>
                                        )}
                                    </Tab>
                                    <Tab as={React.Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={classNames(
                                                    'flex-1 py-2 px-4 focus:outline-none',
                                                    selected ? 'border-b border-primaryPurple' : ''
                                                )}
                                            >
                                                Alerts
                                            </button>
                                        )}
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels className="max-h-[400px] overflow-y-auto">
                                    <Tab.Panel>
                                        <p className='text-center p-4'>No Result Found</p>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        {
                                            NotifData.length===0 &&
                                            <p className='text-center p-4'>No Result Found</p>
                                        }
                                        <div onClick={() => close()}>

                                            {NotifData?.map((item, index) => (
                                                <div
                                                    onClick={() => NotifNaviagte(item?._id)}
                                                    key={`item-${index}`} className={`flex items-center gap-2 border-y-[1px] p-4 cursor-pointer hover:bg-slate-50 `}>
                                                    <img className='size-6 rounded-full' src={item?.data?.logo} alt="logo" />
                                                    <div className='flex flex-col'>{item.title}

                                                    <span className='text-[12px] text-lightThemeSecondary'>{formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}</span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                                )}
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default NotificationBox;
