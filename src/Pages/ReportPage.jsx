import React, { useEffect, useState } from 'react'
import NavBar from '../Component/Navbar'
import Footer from '../Component/Footer,'
import img from '../assets/bitcoin-cover.png'
import breaks from 'remark-breaks';
import { useLocation, useNavigate } from 'react-router-dom';
import Markdown from 'react-markdown';
export default function ReportPage() {
  const location = useLocation();
  const data = location.state; // Access the data here
  // const [sections, setSections] = useState([])
  const navigate = useNavigate();

  const renderers = {
    paragraph: ({ children }) => <p>{children}</p>
  };
  useEffect(() => {

    const sections = data.report.split('\n\n').filter(section => section.trim() !== '')
    console.log(sections);
    // setSections(sections)

  }, []);
  return (
    <div className='bg-[#F2F2F2]'>
      <NavBar />
      <section className='pt-6 sm:pt-12'>
        <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md mx-auto px-3 lg:px-0'>
          {/* <div
            style={{

              background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.50) 100%), url(${img}) lightgray -11.343px -38.072px / 114.652% 145.496% no-repeat`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
            className='border-[2px] border-[#D7D9E4] rounded-3xl bg-white px-4 sm:px-8 py-6 h-[500px]'>
            <div className='flex flex-col sm:flex-row justify-between items-end h-full text-white'>
              <div >

                <div className="flex items-center gap-x-2 mb-2">
                  <img
                    src={data?.logo}
                    alt="logo"
                    className="w-8 rounded-full bg-gray-50"
                  />
                  <div className="text-[20px] font-medium">

                    {data?.name}
                    <span className="text-lg ml-1">

                      {data?.symbol}
                    </span>

                  </div>
                </div>
                <div className='text-3xl font-bold'>
                  
                </div>
              </div>
              <div>
                <div className="text-[20px] font-normal">

                  Report Uploaded:
                  <br />
                  <span className="font-semibold">
                    14 March 2024
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className='pt-6'>
            <div className="bg-white shadow-sm rounded-3xl border-[2px] border-[#D7D9E4] px-4 sm:px-8 py-6">
              <h2 className="text-2xl font-semibold  text-primaryPurple sm:text-32">
              Name of the Protocol: Bitcoin
              </h2>
              <div className="py-6">
                <div className='flex flex-wrap gap-7'>
                  <div className='w-full md:w-[40%] flex flex-col gap-2'>
                    <span className='text-base text-[#747474]'>Name of the Token:</span>
                    <div className='text-xl font-semibold'>.COM</div>
                  </div>
                  <div className='w-full md:w-[40%] flex flex-col gap-2'>
                    <span className='text-base text-[#747474]'>Official Website:</span>
                    <div className='text-xl font-semibold'><a className='text-blue-600 line-clamp-1' href="https://brc20.com/">https://brc20.com/</a></div>
                  </div>
                  <div className='w-full md:w-[40%] flex flex-col gap-2'>
                    <span className='text-base text-[#747474]'>Whitepaper link</span>
                    <div className='text-xl font-semibold'>
                      <a className='text-blue-600 line-clamp-1' href="https://brc20.com/wiki/com-pro...">https://brc20.com/wiki/com-pro...</a>
                    </div>
                  </div>
                  <div className='w-full md:w-[40%] flex flex-col gap-2'>
                    <span className='text-base text-[#747474]'>CoinMarketCap Link:</span>
                    <div className='text-xl font-semibold'>
                      <a className='text-blue-600 line-clamp-1' href="https://coinmarketcap.com/curr...">https://coinmarketcap.com/curr...</a>
                    </div>
                  </div>
                  <div className='w-full md:w-[40%] flex flex-col gap-2'>
                    <span className='text-base text-[#747474]'>CoinGecko Link:</span>
                    <div className='text-xl font-semibold text-[#747474]'>Not Available</div>
                  </div>
                  <div className='w-full md:w-[40%] flex flex-col gap-2'>
                    <span className='text-base text-[#747474]'>Reviewer:</span>
                    <div className='text-xl font-semibold'>Dr Farrukh Habib</div>
                  </div>
                  <div className='w-full md:w-[40%] flex flex-col gap-2'>
                    <span className='text-base text-[#747474]'>Review Date</span>
                    <div className='text-xl font-semibold'>
                      08 February 2024
                    </div>
                  </div>
                  <div className='w-full md:w-[40%] flex flex-col gap-2'>
                    <span className='text-base text-[#747474]'>Report Expiry Date:</span>
                    <div className='text-xl font-semibold'>
                      07 February 2025
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div> */}
          <div className='markdown-container'>
            <div className="bg-white shadow-sm rounded-3xl border-[2px] border-[#D7D9E4] px-4 sm:px-8 py-6 relative">
              <Markdown remarkPlugins={[breaks]}>{data?.report}</Markdown>

              
              <button 
              onClick={()=>navigate('/hilalbot')}
              className="bg-primaryPurple whitespace-nowrap h-[50px] text-white font-medium flex justify-center items-center hover:bg-opacity-90 py-3 px-3 min-w-28 text-center rounded-lg disabled:opacity-50 absolute top-8 right-8"
                  >
                    Ask Hilalbot
                  </button>
            </div>
          </div>
         

          {/* <div className='pt-6'>
            <div className='border-[2px] border-[#D7D9E4] rounded-3xl bg-white px-4 sm:px-8 py-6'>

              <div className='mb-4 flex flex-col sm:flex-row justify-between gap-4'>
                <h2 className="text-2xl font-bold tracking-tight text-primaryPurple sm:text-32">
                  Section 1: Main Functions of the Protocol and Token

                </h2>

                <div className='flex gap-2'>

                  <button className="bg-primaryPurple whitespace-nowrap h-10 text-white font-medium flex justify-center items-center hover:bg-opacity-90 py-3 px-3 min-w-28 text-center rounded-lg disabled:opacity-50  z-[1]"
                  >
                    Ask From Hilalbot
                  </button>
                </div>
              </div>
              <div className='space-y-4'>
                <div>
                  <h2 className='mb-4 text-[24px] font-semibold text-primaryDark'>1. Protocol Overview:</h2>
                  <p>
                    BRC20.com introduces a groundbreaking concept in the cryptocurrency space by integrating the capability to create and manage digital assets atop the Bitcoin network. This development leverages the Bitcoin Ordinals protocol, marking a significant evolution from Bitcoin's original purpose to a more versatile digital asset platform. The introduction of BRC-20 tokens represents a notable experiment in enhancing Bitcoin's utility, enabling functionalities akin to those seen with ERC-20 tokens on the Ethereum network​​.
                  </p>

                </div>
                <div>
                  <h2 className='mb-4 text-[24px] font-semibold text-primaryDark'>2. Token Analysis:</h2>
                  <p>
                    The .COM token, introduced by BRC20.com, emerged as a leading BRC20 token, gaining rapid popularity. It was launched through a "fair launch" mechanism on the Bitcoin network, accessible to the public without restrictions, only requiring gas for transactions. The token has seen substantial growth, amassing over 300 holders and achieving a market cap exceeding $5 million. It's tradable on various Bitcoin network marketplaces, including Unisats and OKX BRC20 marketplaces​​.
                  </p>

                </div>
              </div>
            </div>
          </div>
          <div className='pt-6'>
            <div className='border-[2px] border-[#D7D9E4] rounded-3xl bg-white px-4 sm:px-8 py-6'>

              <div className='mb-4 flex flex-col sm:flex-row justify-between gap-4'>
                <h2 className="text-2xl font-bold tracking-tight text-primaryPurple sm:text-32">
                  Section 2: Islamic Legal Analysis of the Protocol and Token

                </h2>

                <div className='flex gap-2'>

                  <button className="bg-primaryPurple whitespace-nowrap h-10 text-white font-medium flex justify-center items-center hover:bg-opacity-90 py-3 px-3 min-w-28 text-center rounded-lg disabled:opacity-50  z-[1]"
                  >
                    Ask From Hilalbot
                  </button>
                </div>
              </div>
              <div className='space-y-4'>
                <div>
                  <h2 className='mb-4 text-[24px] font-semibold text-primaryDark'>
                    Shariah Nature of the Platform/Protocol:
                  </h2>
                  <p>
                    The BRC20.com platform and the introduction of BRC-20 tokens bring innovation to the Bitcoin network by facilitating digital asset management and DeFi capabilities. Given the fact that Bitcoin is Shariah-compliant, the Shariah nature of the platform is fine.
                  </p>

                </div>
                <div>
                  <h2 className='mb-4 text-[24px] font-semibold text-primaryDark'>Islamic Legal Characterization of the Coin/Token:</h2>
                  <p>
                    The .COM token, serving as a utility token within the BRC20.com ecosystem, can be considered "مال متقوم" (valuable property) under Islamic jurisprudence, provided it is utilized in Shariah-compliant transactions and activities.
                  </p>

                </div>
                <div>
                  <h2 className='mb-4 text-[24px] font-semibold text-primaryDark'>Examination of Prohibited Elements:</h2>
                  <ul className='ml-4 list-disc leading-[30px]'>
                    <li><strong>Interest (Usury):</strong> There is no indication of interest-based transactions within the .COM token or BRC20.com's offerings.
                    </li>
                    <li>
                      <strong>Gambling or Lottery:</strong> The platform and token's primary function does not inherently involve gambling or speculative ventures.
                    </li>
                    <li>
                      <strong>Excessive Uncertainty (Gharar):</strong>  While the cryptocurrency market inherently involves volatility, the BRC20.com platform itself does not introduce excessive uncertainty.
                    </li>
                    <li>
                      <strong>Other Prohibited Elements:</strong>  There is no evidence suggesting involvement in activities deemed unethical or immoral under Islamic law.  </li>

                  </ul>

                </div>
              </div>
            </div>
          </div>
          <div className='pt-6'>
            <div className='border-[2px] border-[#D7D9E4] rounded-3xl bg-white px-4 sm:px-8 py-6'>

              <div className='mb-4 flex flex-col sm:flex-row justify-between gap-4'>
                <h2 className="text-2xl font-bold tracking-tight text-primaryPurple sm:text-32">
                Section 3: Shariah Compliance Verdict and Guidance

                </h2>

                <div className='flex gap-2'>

                  <button className="bg-primaryPurple whitespace-nowrap h-10 text-white font-medium flex justify-center items-center hover:bg-opacity-90 py-3 px-3 min-w-28 text-center rounded-lg disabled:opacity-50  z-[1]"
                  >
                    Ask From Hilalbot
                  </button>
                </div>
              </div>
              <div className='space-y-4'>
                <div>
                  <h2 className='mb-4 text-[24px] font-semibold text-primaryDark'>
                  Verdict:
                  </h2>
                  <p>
                  Based on the information available, the BRC20.com protocol and its .COM token do not exhibit elements that are explicitly prohibited in Shariah. Therefore, they can be considered Shariah-compliant, with the condition that their application and usage adhere to Islamic principles.
                   </p>

                </div>
                <div>
                  <h2 className='mb-4 text-[24px] font-semibold text-primaryDark'>
                  Guidance:
                  </h2>
                  <p>
                  Users engaging with the BRC20.com protocol and .COM token should ensure their transactions and activities remain within Shariah-compliant boundaries. Continuous monitoring and analysis are recommended due to the dynamic nature of crypto platforms and coins/tokens.
                     </p>

                </div>
                <div>
                  <h2 className='mb-4 text-[24px] font-semibold text-primaryDark'>
                  Disclaimer:
                  </h2>
                  <p>
                  This review focuses solely on the Shariah compliance of the BRC20.com protocol and its .COM token. It does not extend to the Shariah implications of specific products, utilities, or services offered by the protocol. Users are advised to exercise their judgment or seek separate guidance regarding the Shariah compliance of any specific feature or service within the BRC20.com ecosystem.

                 </p>

                </div>
              </div>
            </div>
          </div> */}

        </div>

      </section>
      <Footer />
    </div>
  )
}
