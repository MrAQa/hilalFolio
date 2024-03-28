import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../Component/Navbar'
import SideNav from '../Component/Hilalbot/SideNav'
import { HeadphoneChatIcon, HilalBotChatLogo, MicChatIcon, ReceivedMessageIcon, SendChatIcon, SendMessageIcon } from '../assets/custom-icon'
import { ChatbotQuery, GetChatHistory } from '../service/service';



function Hilalbot() {

    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [queryId, setQueryId] = useState('');
    const [refresh,setRefresh]= useState((false))
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
                sender: 'user' // Indicate that the message is sent by the user
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
                        text: response.data?.conversation?.answer || 'Sorry, I could not understand that.',
                        sender: 'bot' // Indicate that the message is from the bot
                    };
                    setMessages(prevMessages => [...prevMessages, botMessage]);
                    setQueryId(response.data?.conversation?.queryId || ''); // Update query ID for subsequent requests
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    setLoading(false); // Set loading state to false after API call is complete
                });
        }
    }

    const handleNewChat =()=>{
        setRefresh(prev=>!prev)
        setMessages([])
        setInputValue('')
        setQueryId('')
        setLoading(false)
    }
    const GetChat=(chatId)=>{
        
        GetChatHistory(chatId)
        .then((response) => {
            if(response?.success){
                setMessages([])
                setInputValue('')
                setQueryId('')
                setLoading(false)
                const chatHistory = response.data?.conversation;
                if(chatHistory.length>0){
                    setQueryId(chatHistory[0]?.userId)
                }
                const extractedMessages = chatHistory.reduce((acc, chat) => {
                    // Append question
                    acc.push({
                        text: chat.question,
                        sender: 'user'
                    });
                    // Append answer
                    acc.push({
                        text: chat.answer,
                        sender: 'bot'
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
    return (
        <>
            <div className="min-h-screen bg-white">
                <NavBar />
                <div className='bg-whiteGrey'>
                    <SideNav
                    refresh={refresh}
                    handleNewChat={handleNewChat}
                    GetChat={GetChat}
                    />
                    <main className="h-full md:ml-[300px]">
                        <div className='px-4 md:px-28 py-4 chatbot_conatiner '>
                            {
                                messages?.length > 0 ?
                                    <div ref={chatContainerRef}  className='size-full space-y-4 overflow-y-auto pb-4 mb-4'>
                                        {messages.map((message, index) => (
                                            <div key={index} className={`flex w-full gap-4 ${message.sender === 'user' ? 'items-center' : 'flex-row-reverse items-baseline'}`}>
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

                                                <div className={`${message.sender === 'user' ? 'bg-white border-[#E2E8F0] rounded-tl-none' : 'bg-[#8A71B01C] border-primaryPurple rounded-tr-none'} text-primaryDark p-4 rounded-xl border-[1px] w-full`}>
                                                    {message.text}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    :
                                    <div className='flex justify-center flex-col items-center size-full'>
                                        <HilalBotChatLogo />
                                        <div className='text-[24px] font-medium mt-4'>How may I help you today?</div>
                                    </div>
                            }

                            <div>
                               <form onSubmit={handleSendData}>
                               <div className='flex gap-3'>
                                    <div className="flex p-4 h-[56px] border-[1px] border-[#D7D9E4] rounded-lg flex-1">
                                        <input
                                            className='w-full resize-none border-none outline-none'
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
                        </div>
                    </main>
                </div>

            </div>
        </>
    )
}

export default Hilalbot