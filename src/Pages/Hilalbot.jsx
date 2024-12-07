import React, { useEffect, useRef, useState } from 'react'
import NavBar from '../Component/Navbar'
import SideNav from '../Component/Hilalbot/SideNav'
import { ChatbotQuery, DeleteChatHistory, GetChatHistory, UpdateChatSubject } from '../service/service';
import RecentChats from '../Component/Hilalbot/RecentChats';
import FAQ from '../Component/Hilalbot/FAQ';
import ConfirmationModal from '../Component/Hilalbot/ConfirmationModal';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoadingSpinner from '../Component/ChatLoader';

import ChatInstance from '../Component/Hilalbot/ChatInstance';



function Hilalbot() {
    let [isOpen, setIsOpen] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);
    const [queryId, setQueryId] = useState('');
    const [chatId, setChatId] = useState('');
    const [refresh, setRefresh] = useState((false))
    const [showRecent, setShowRecent] = useState(false);
    const [showFaQ, setShowFaQ] = useState(false);
    const [ids, setIds] = useState(null);
    const [isLoading, setIsLoading] = useState(false)
    const [disableNewChat,setDisaleNewChat] = useState(false);
   
    const [chats, setChats] = useState([
        {
            chatId: '',
            loading: false,
            conversation: []
        }
    ]);
        useEffect(()=>{
        console.log(chats)
        },[chats])


    const handleNewChat = () => {
        // setRefresh(prev => !prev)
        setMessages([])
        setInputValue('')
        setQueryId('')
        setLoading(false)
        setShowRecent(false)
        setShowFaQ(false)

    }
    const GetChat = (chatId) => {
        // console.log(chatId);
        // if(disableNewChat)  return
        setQueryId(chatId)
        const currentchat = chats.find(chat => chat.chatId === chatId)
       
       if(currentchat.conversation.length===0){
        GetChatHistory(chatId)
        .then((response) => {
            if (response?.success) {
                setMessages([])
                setInputValue('')
                setQueryId('')
                setLoading(false)
                setShowRecent(false)
                setShowFaQ(false)
                const chatHistory = response.data?.conversation.reverse();
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
                setChats((prevChats) =>
                    prevChats.map((chat) =>
                        chat.chatId === chatId
                            ? { ...chat, conversation:extractedMessages  }
                            : chat
                    )
                );
            }
            

        })
        .catch((error) => {
            console.error('Error fetching chat history:', error);
        });
       }
       else{
        const conversation = currentchat.conversation.map((conversation) =>({
            ...conversation,
            typeingEffect: false
        }));
        setMessages(conversation);
    }
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
                        setShowFaQ={setShowFaQ}
                        deleteAllChat={deleteAllChat}
                        disableNewChat={disableNewChat}
                        setChats={setChats}
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
                                        :   showFaQ ?
                                        <FAQ/>
                                        :
                                    <ChatInstance
                                    inputValue={inputValue} setInputValue={setInputValue} messages={messages} setMessages={setMessages} loading={loading} setLoading={setLoading} setDisaleNewChat={setDisaleNewChat} setQueryId={setQueryId} queryId={queryId}
                                    setRefresh={setRefresh}
                                    setChats={setChats}
                                    chats={chats}
                                    />
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