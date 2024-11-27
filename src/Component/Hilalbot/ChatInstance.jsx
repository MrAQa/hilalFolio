import React, { useEffect, useRef, useState } from 'react';
import { HeadphoneChatIcon, HilalBotChatLogo, MicChatIcon, ReceivedMessageIcon, SendChatIcon, SendMessageIcon } from '../../assets/custom-icon';
import LoadingSpinner from '../ChatLoader';
import Markdown from 'react-markdown';
import breaks from 'remark-breaks';
import { ChatbotQuery } from '../../service/service';

const TypingDelay = 10; // Adjust the typing delay time in milliseconds
const MessageDelay = 1000; // Adjust the delay between messages in milliseconds

const TypingEffect = ({ text, onFinish ,chatContainerRef}) => {
    const [typedText, setTypedText] = useState('');
    const typingTimeoutRef = useRef(null);
   
    useEffect(() => {
        scrollToBottom();
    }, [typedText]);

    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };
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

    return <div><Markdown>{typedText}</Markdown></div>;
};
const ChatInstance = ({inputValue, setInputValue,messages, setMessages,loading, setLoading,setDisaleNewChat,setQueryId,queryId,setRefresh}) => {
    const chatContainerRef = useRef(null);
    const queryIdRef = useRef(queryId);
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    useEffect(() => {
        queryIdRef.current = queryId;
    }, [queryId]);
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
        // if(queryId===''){
            setDisaleNewChat(true)
        // }
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
                    console.log('Response queryId:', response.data?.conversation?.queryId);
                    console.log('Current queryIdRef:', queryIdRef.current);
                if (response.data?.conversation?.queryId === queryIdRef.current || queryIdRef.current==='') {
                    const botMessage = {
                        text: response.data?.conversation?.answer || response?.message,
                        sender: 'bot',// Indicate that the message is from the bot
                        typeingEffect: true,
                    };
                    setMessages(prevMessages => [...prevMessages, botMessage]);
                    setQueryId(response.data?.conversation?.queryId || ''); // Update query ID for subsequent requests
                   
                } else {
                    console.warn('Response received for a different conversation. Ignoring...');
                }
                })
                .catch((error) => {
                    console.error('Error:', error);
                })
                .finally(() => {
                    setRefresh(prev => !prev)
                    setLoading(false);
                    setDisaleNewChat(false)
                });
        }
    }
    return (
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
                                    <TypingEffect chatContainerRef={chatContainerRef} text={message.text} onFinish={() => setTimeout(() => { }, MessageDelay)} />
                                ) : (
                                     <Markdown remarkPlugins={[breaks]}> 
                                     {message.text}
                                    </Markdown> 
                                )}
                                {/* {message.text} */}
                            </div>
                        </div>
                    ))}
                    {loading && <LoadingSpinner/>}
                </div>
                :
                <div className='flex justify-center flex-col items-center size-full'>
                    <HilalBotChatLogo/>
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
                            disabled={loading}
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
            <div className='text-lightSecondaryText text-sm text-center mt-4'>Hilalbot can make mistakes. Consider checking important information.</div>
        </div>
    </>
    );
}

export default ChatInstance;
