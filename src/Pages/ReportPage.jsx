import React from 'react'
import NavBar from '../Component/Navbar'
import Footer from '../Component/Footer,'

export default function ReportPage() {
  return (
    <div className='bg-[#F2F2F2]'>
      <NavBar />
      <section className='pt-6 sm:pt-12'>
        <div className='2xl:max-w-2xl xl:max-w-xl lg:max-w-lg md:max-w-md sm:max-w-sm mx-auto px-3 lg:px-0'>

          <div>
            <div className='border-[2px] border-[#D7D9E4] rounded-3xl bg-white px-4 sm:px-8 py-6'>

              <div className='mb-4 flex justify-between'>
                <h2 className="text-2xl font-bold tracking-tight text-[#0C0F14] sm:text-32">
                  Report: Bitcoin - Halal and Haram Analysis
                </h2>

                <div className='flex gap-2'>

                  <button
                    // onClick={handleRequestReview}
                    className="bg-primaryPurple h-10 text-white font-medium flex justify-center items-center hover:bg-opacity-90 py-3 px-3 min-w-28 text-center rounded-lg disabled:opacity-50  z-[1]"
                  >
                    Ask From HilalBot
                  </button>
                </div>
              </div>
              <div>
                <h2 className='mb-4 text-[24px] font-medium text-primaryDark'>Introduction:</h2>
                <p>
                  Bitcoin, the pioneering cryptocurrency, has garnered widespread attention, not only for its disruptive technology but also for its compatibility with Islamic finance principles. However, opinions regarding the permissibility (halal) or prohibition (haram) of Bitcoin within Islamic jurisprudence vary considerably. In this report, we will explore the arguments on both sides to provide a comprehensive understanding of Bitcoin's status in Islamic finance.
                </p>

              </div>
            </div>
          </div>
          <div className='pt-6'>
            <div className='border-[2px] border-[#D7D9E4] rounded-3xl bg-white px-4 sm:px-8 py-6'>
              <div>
                <h2 className='mb-4 text-[24px] font-medium text-lightThemeSuccess'>Halal Perspective:</h2>
                <ul className='list-inside list-disc leading-[30px]'>
                  <li><strong>Potential as a Currency:</strong> Some scholars argue that Bitcoin meets the criteria of a currency according to Islamic finance principles. It serves as a medium of exchange, unit of account, and store of value, similar to traditional fiat currencies.</li>
                  <li>
                    <strong>Decentralized Nature:</strong> Bitcoin operates on a decentralized network, free from centralized control by any government or financial institution. This aligns with Islamic finance principles, which encourage fair and transparent transactions without the interference of intermediaries.
                  </li>
                  <li>
                    <strong>Blockchain Technology:</strong> The underlying technology of Bitcoin, blockchain, ensures transparency, immutability, and accountability in transactions. These features are consistent with Islamic principles of transparency and fairness in business dealings.
                  </li>
                  <li>
                    <strong>Potential Social Benefits:</strong> Proponents argue that Bitcoin's accessibility can empower marginalized populations, providing financial services to the unbanked and underbanked, thereby promoting economic inclusion, which resonates with Islamic finance's emphasis on social justice.
                  </li>

                </ul>

              </div>
            </div>
          </div>
          <div className='pt-6'>
            <div className='border-[2px] border-[#D7D9E4] rounded-3xl bg-white px-4 sm:px-8 py-6'>
              <div>
                <h2 className='mb-4 text-[24px] font-medium text-lightThemeDelete'>Haram Perspective:</h2>
                <ul className='list-inside list-disc leading-[30px]'>
                  <li><strong>Speculative Nature:</strong> Critics argue that Bitcoin's extreme price volatility and speculative trading make it akin to gambling, which is considered haram in Islamic finance. Investments should be based on real economic activity, not speculation.
                   </li>
                  <li>
                    <strong>Uncertainty:</strong> Bitcoin's legality and regulatory status in various jurisdictions are uncertain, leading to ambiguity regarding its permissibility in Islamic finance. Shariah-compliant investments require certainty and clarity in legal and regulatory frameworks. </li>
                  <li>
                    <strong>Lack of Intrinsic Value:</strong> Some scholars contend that Bitcoin lacks intrinsic value, as it is not backed by any physical asset or government guarantee. Islamic finance principles emphasize tangible assets with intrinsic value to support transactions. </li>
                  <li>
                    <strong>Potential for Illicit Activities:</strong> Bitcoin's pseudonymous nature has raised concerns about its potential use in illicit activities such as money laundering, terrorism financing, and speculation, which contradict Islamic principles of ethical conduct and prohibition of harm.</li>

                </ul>

              </div>
            </div>
          </div>
          <div className='pt-6'>
            <div className='border-[2px] border-[#D7D9E4] rounded-3xl bg-white px-4 sm:px-8 py-6'>

              
              <div>
                <h2 className='mb-4 text-[24px] font-medium text-primaryDark'>Conclusion:</h2>
                <p>
                In conclusion, the question of whether Bitcoin is halal or haram in Islamic finance is subject to interpretation and debate among scholars. While proponents highlight its potential as a currency, its decentralized nature, and social benefits, critics raise concerns about its speculative nature, lack of intrinsic value, and potential for illicit activities. Ultimately, individuals should seek guidance from knowledgeable scholars and conduct thorough due diligence before engaging in Bitcoin transactions within the framework of Islamic finance principles.
                   </p>

              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
