import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../Component/Navbar'
import SideNav from '../Component/Hilalbot/SideNav'
import { HeadphoneChatIcon, HilalBotChatLogo, MicChatIcon, ReceivedMessageIcon, SendChatIcon, SendMessageIcon } from '../assets/custom-icon'
import { ChatbotQuery, DeleteChatHistory, GetChatHistory, UpdateChatSubject } from '../service/service';
import RecentChats from '../Component/Hilalbot/RecentChats';
import ConfirmationModal from '../Component/Hilalbot/ConfirmationModal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from '../Component/ChatLoader';

const TypingDelay = 50; // Adjust the typing delay time in milliseconds
const MessageDelay = 2000; // Adjust the delay between messages in milliseconds

const TypingEffect = ({ text, onFinish }) => {
    const [typedText, setTypedText] = useState('');
    const typingTimeoutRef = useRef(null);

    useEffect(() => {
        const typingEffect = () => {
            if (text.length > typedText.length) {
                setTypedText(prevTypedText => prevTypedText + text.charAt(typedText.length));
                typingTimeoutRef.current = setTimeout(typingEffect, TypingDelay);
            } else {
                onFinish();
            }
        };

        typingTimeoutRef.current = setTimeout(typingEffect, TypingDelay);

        return () => clearTimeout(typingTimeoutRef.current);
    }, [text, typedText, onFinish]);

    return <div>{typedText}</div>;
};


function Hilalbot() {
    let [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [queryId, setQueryId] = useState('');
    const [chatId, setChatId] = useState('');
    const [refresh, setRefresh] = useState((false))
    const [showRecent, setShowRecent] = useState(false);
    const [ids, setIds] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const chatContainerRef = useRef(null);
    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    const handleChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSendData = (e) => {
        e.preventDefault();

        if (inputValue.trim() !== '') {
            const newMessage = {
                text: inputValue,
                sender: 'user', // Indicate that the message is sent by the 
                typeingEffect: false,
            };
            setMessages(prevMessages => [...prevMessages, newMessage]);
            setInputValue('');
            setLoading(true); // Set loading state before making the API call
            const data = {
                question: inputValue,
                queryId: queryId
            }
            ChatbotQuery(data)
                .then((response) => {
                    const botMessage = {
                        text: response.data?.conversation?.answer || response?.message,
                        sender: 'bot',// Indicate that the message is from the bot
                        typeingEffect: true,
                    };
                    setMessages(prevMessages => [...prevMessages, botMessage]);
                    setQueryId(response.data?.conversation?.queryId || ''); // Update query ID for subsequent requests
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }

    const handleNewChat = () => {
        setRefresh(prev => !prev)
        setMessages([])
        setInputValue('')
        setQueryId('')
        setLoading(false)
        setShowRecent(false)
    }
    const GetChat = (chatId) => {

        GetChatHistory(chatId)
            .then((response) => {
                if (response?.success) {
                    setMessages([])
                    setInputValue('')
                    setQueryId('')
                    setLoading(false)
                    setShowRecent(false)
                    const chatHistory = response.data?.conversation;
                    if (chatHistory.length > 0) {
                        setQueryId(chatHistory[0]?.queryId)
                        setChatId(chatId)
                    }
                    const extractedMessages = chatHistory.reduce((acc, chat) => {
                        // Append question
                        acc.push({
                            text: chat.question,
                            sender: 'user',
                            typeingEffect: false,
                        });
                        // Append answer
                        acc.push({
                            text: chat.answer,
                            sender: 'bot',
                            typeingEffect: false,
                        });
                        return acc;
                    }, []);
                    // Append extracted messages to existing messages state
                    setMessages(extractedMessages);
                }

            })
            .catch((error) => {
                console.error('Error fetching chat history:', error);
            });
    }


    const deleteAllChat = (id) => {
        // console.log(id);
        if (id) {
            setIds(id)

        }
        else {
            setIds(null)
        }
        setIsOpen(true)
    }
    const confirmDeleteAll = () => {
        setIsLoading(true)
        let data = {};
        let allValue = true;
        if (ids !== null) {
            data = {
                ids: [ids]
            }
            allValue = false
        }
        else {
            data = {
                ids: null
            }
        }
        DeleteChatHistory(allValue, data).then((response) => {
            setIsOpen(false)
            setIsLoading(false)
            if (response.success) {
                setRefresh(prev => !prev)
                toast.success(response.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            }
            else {
                toast.error(response.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            }
        })
    }
    const updateTitle = (id, data) => {
        // console.log(id,data);
        UpdateChatSubject(id, data).then((response) => {
            // console.log(response);
            if (response?.success) {
                setRefresh(prev => !prev)
                toast.success(response.message, {
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: 3000,
                });
            }
        })
    }
    return (
        <>
            <ToastContainer />
            <div className=" bg-lightThemebg">
                <NavBar />
                <div className='bg-lightThemebg'>
                    <SideNav
                        refresh={refresh}
                        handleNewChat={handleNewChat}
                        GetChat={GetChat}
                        chatId={chatId}
                        setShowRecent={setShowRecent}
                        deleteAllChat={deleteAllChat}
                    />
                    <main className="h-full md:ml-[294px]">

                        <div className='pl-4 pr-4  py-5 lg:py-5 chatbot_conatiner'>

                            <div className='p-8 rounded-2xl bg-white flex flex-col h-full'>
                                {
                                    showRecent ?
                                        <RecentChats
                                            deleteAllChat={deleteAllChat}
                                            updateTitle={updateTitle}
                                            refresh={refresh}
                                            setRefresh={setRefresh}
                                        />
                                        :
                                        <>
                                            {
                                                messages?.length > 0 ?
                                                    <div ref={chatContainerRef} className='size-full space-y-4 overflow-y-auto pb-4 mb-4 style-3'>
                                                        {messages.map((message, index) => (
                                                            <div key={index} className={`flex w-full gap-4 pr-2 ${message.sender === 'user' ? 'items-center flex-row-reverse' : 'items-baseline'}`}>
                                                                {
                                                                    message.sender === 'user' ?
                                                                        <span className='flex justify-center items-center border-[1px] border-[#E2E8F0] size-10 p-3 rounded-full'>
                                                                            <SendMessageIcon
                                                                                className='fill-primaryPurple size-[13px]'
                                                                            />
                                                                        </span>
                                                                        :
                                                                       
                                                                      
                                                                        <span className='flex justify-center items-center bg-primaryPurple size-10 p-2 rounded-full'>
                                                                            <ReceivedMessageIcon
                                                                            />
                                                                        </span>
                                                                       
                                                                }

                                                                <div className={`${message.sender === 'user' ? 'bg-white border-[#E2E8F0] rounded-tr-none' : 'bg-[#8A71B01C] border-primaryPurple rounded-tl-none'} text-primaryDark p-4 rounded-xl border-[1px] w-full`}>
                                                                    {message.typeingEffect ? (
                                                                        <TypingEffect text={message.text} onFinish={() => setTimeout(() => { }, MessageDelay)} />
                                                                    ) : (
                                                                        message.text
                                                                    )}
                                                                    {/* {message.text} */}
                                                                </div>
                                                            </div>
                                                        ))}
                                                        {loading && <LoadingSpinner/>}
                                                    </div>
                                                    :
                                                    <div className='flex justify-center flex-col items-center size-full'>
                                                        <HilalBotChatLogo />
                                                        <div className='text-base lg:text-[24px] font-medium mt-4'>How may I help you today?</div>
                                                    </div>
                                            }

                                            <div className='relative mx-auto max-w-[924px] w-full'>
                                                {
                                                    messages?.length === 0 &&
                                                    <div className='flex w-full gap-2 lg:gap-4 mb-6 text-lightThemeSecondary text-xs lg:text-sm'>
                                                        <div className='flex flex-col gap-2 lg:gap-4 w-full'>
                                                            <div onClick={() => setInputValue('Is Bitcoin halal?')} className='cursor-pointer bg-white hover:bg-[#8A71B01C] h-11 lg:h-[62px] flex items-center border-[1px] border-lightThemeOutline rounded-lg p-2 lg:p-3'>
                                                                Is Bitcoin halal?
                                                            </div>
                                                            <div onClick={() => setInputValue('Why DOGE is haram?')} className='cursor-pointer bg-white hover:bg-[#8A71B01C] h-11 lg:h-[62px] flex items-center border-[1px] border-lightThemeOutline rounded-lg p-2 lg:p-3'>
                                                                Why DOGE is haram?
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col gap-2 lg:gap-4 w-full'>
                                                            <div onClick={() => setInputValue('What is the utility of ETH?')} className='cursor-pointer bg-white hover:bg-[#8A71B01C] h-11 lg:h-[62px] flex items-center border-[1px] border-lightThemeOutline rounded-lg p-2 lg:p-3'>
                                                                What is the utility of ETH?
                                                            </div>
                                                            <div onClick={() => setInputValue('Are cryptos halal in Shariah?')} className='cursor-pointer bg-white hover:bg-[#8A71B01C] h-11 lg:h-[62px] flex items-center border-[1px] border-lightThemeOutline rounded-lg p-2 lg:p-3'>
                                                                Are cryptos halal in Shariah?
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                                <form onSubmit={handleSendData}>
                                                    <div className='flex gap-3'>
                                                        <div className="flex p-4 h-[56px] border-[1px] border-lightThemeOutline rounded-lg flex-1">
                                                            <input
                                                                className='w-full resize-none border-none outline-none text-xs lg:text-sm'
                                                                value={inputValue}
                                                                onChange={handleChange}
                                                                placeholder='Example : “what will be the price of bitcoin in 2025”'
                                                                type="text" />
                                                            <span className='cursor-pointer'>
                                                                <MicChatIcon />
                                                            </span>
                                                        </div>
                                                        {
                                                            inputValue !== '' ?
                                                                <button
                                                                    disabled={loading}
                                                                    type='submit'
                                                                    className='bg-primaryPurple size-[56px] p-3 flex justify-center items-center rounded-lg  disabled:bg-opacity-50'
                                                                >
                                                                    <SendChatIcon />
                                                                </button>
                                                                :
                                                                <div className='bg-primaryPurple size-[56px] p-3 flex justify-center items-center rounded-lg cursor-pointer'>
                                                                    <HeadphoneChatIcon />
                                                                </div>
                                                        }

                                                    </div>
                                                </form>
                                                <div className='text-lightSecondaryText text-sm text-center mt-4'>Hilalfolio can make mistakes. Consider checking important information.</div>
                                            </div>
                                        </>
                                }
                            </div>

                        </div>

                    </main>
                </div>

            </div>
            <ConfirmationModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                confirmDeleteAll={confirmDeleteAll}
                isLoading={isLoading}
            />
        </>
    )
}

export default Hilalbot