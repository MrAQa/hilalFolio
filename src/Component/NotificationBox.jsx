import React, { useState } from 'react';
import { Popover, Transition, Tab } from '@headlessui/react';
import { BellNotificationIcon } from '../assets/custom-icon';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

const NotificationBox = () => {
    return (
        <Popover className="relative">
            {({ open }) => (
                <>
                    <Popover.Button>
                        <BellNotificationIcon />
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
                        <Popover.Panel static className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-md z-10">
                            <Tab.Group>
                                <Tab.List className="flex border-b">
                                    <Tab as={React.Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={classNames(
                                                    'flex-1 py-2 px-4 focus:outline-none',
                                                    selected ? 'bg-gray-200' : 'hover:bg-gray-200'
                                                )}
                                            >
                                                Type 1
                                            </button>
                                        )}
                                    </Tab>
                                    <Tab as={React.Fragment}>
                                        {({ selected }) => (
                                            <button
                                                className={classNames(
                                                    'flex-1 py-2 px-4 focus:outline-none',
                                                    selected ? 'bg-gray-200' : 'hover:bg-gray-200'
                                                )}
                                            >
                                                Type 2
                                            </button>
                                        )}
                                    </Tab>
                                </Tab.List>
                                <Tab.Panels className="p-4">
                                    <Tab.Panel>
                                        <p>Notifications for Type 1</p>
                                    </Tab.Panel>
                                    <Tab.Panel>
                                        <p>Notifications for Type 2</p>
                                    </Tab.Panel>
                                </Tab.Panels>
                            </Tab.Group>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};

export default NotificationBox;
