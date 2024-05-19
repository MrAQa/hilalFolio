import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { GetAllFAQ } from '../../service/service';
export default function FAQAccordian() {
    const [isLoading, setIsLoading] = useState(false);
    const [FaqData, setFaqData] = useState([]);

    useEffect(() => {
        setIsLoading(true)
        GetAllFAQ().then((res) => {
            if (res.success) {
                setFaqData(res?.body?.FAQs)
                   setIsLoading(false)
            }

        })
    }, []);


    return (

        <div className='mt-8 flex flex-wrap gap-4 '>
            {isLoading ? (
                <div className='w-full flex justify-center'>
                    <CircularProgress size={40} color='primary' />
                </div>
            ) : (
                <>
                    {FaqData?.map((item, index) => (
                        item.type === 'hilalfolio' &&
                        <Disclosure
                            key={index + '-item'}
                            as='div'
                            className='w-full border-[1px] h-fit border-lightThemeOutline shadow-custom rounded-xl'

                        >
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className='flex justify-between items-center max-h-24 gap-1 p-6 w-full'>
                                        <div className='flex items-center gap-2'>

                                            <div className='flex items-center gap-x-2 text-left'>
                                                {item?.question}
                                            </div>
                                        </div>
                                        <ChevronDownIcon className={`size-5 fill-black/60 ${open ? 'rotate-180' : ''}`} />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className={`p-6 pt-0 ${open ? '' : 'hidden'}`}>
                                        <div>
                                            {item?.answer}
                                        </div>
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    ))}
                </>
            )}
        </div>

    );
}
