import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewCarousel = () => {
    const settings = {
        autoplay: true, 
        autoplaySpeed: 2500, 
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <Slider {...settings}>
            <div className='md:px-3'>
                <img
                    className='rounded-xl h-[160px] md:h-[180px] w-full object-cover'
                    src="https://s3-alpha-sig.figma.com/img/04ea/2fef/92d270c9026b3c8bc7a48d7dad58a2c1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UzwAOT-2xzL7a8gu9ahegJogFq9K7jnmCk9DguZHS-ABAkpNDt-vfsXfpAjAngrcxgPP~D3ncJcWBHJbY3gEKQeDLq7gALoSBLQYOkGhvz3tbxIViLSPlAomZ3qQMWBeT9KnWWjlmYWZyuGRWM~2-WiAMW4T1zX~7ZcbG7vQEQJg3g-EqdvLwt9l9DD0t-arCY0zv9IxcivFdh1airZsKFrfwI2bpfjySWj3v99s9mmW~bHYTmHUoQoDU2VrrUMTA-v5V8JGgFgjqznO2pCw6NXNMCCIncgNcL3HANBKLqQl6rJLFMg69QCYXUK29Z7S~6KBawxRUiBODZxJv4fxzw__" alt="slide" />
                <div className='text-base font-semibold pt-4'>
                    Bitcoin Token ORDI Surges to New High, Top 50 Coins
                </div>
                <div className='text-sm font-normal pt-2 text-[#747474]'>
                    12m ago • The Block
                </div>
            </div>
            <div className='md:px-3'>
                <img
                    className='rounded-xl h-[160px] md:h-[180px] w-full object-cover'
                    src="https://s3-alpha-sig.figma.com/img/b1b9/b505/11c30e00ae0aed90f467f1341794ef44?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l-9tV7V1uPVDrmzF9gPnGIgR2jBhtqp4pv0QmPiqr56jR9vT0uTpJj3iQkec~AmYXMlQ4j4g9IsPYqYqh1h9uDY5rZxmQtLMF3~vwtRuPXVq~aR4QQznMuhcuCOR-rI7JguzyiHDGOBQirbkkpKAo9m1f-gVcWPDfC~yTydi6z28PDG8TVZlOdkWwrfbOy7U0vKCC-Zd9V0t4BHAt92bhPN5WgaFNMkoYaEtuuhaxhjsIEEoLjOj2j5hDYSphLoFz1qqNUZrSZPc9N7fRT2riczKENSQLV2euFR9AM-WEdPBVxiGvWbHgmkXPeI698Ln9gQilkHmjOjmKv31TdvkPw__"
                    alt="slide" />
                <div className='text-base font-semibold pt-4'>
                    Bitcoin Token ORDI Surges to New High, Top 50 Coins
                </div>
                <div className='text-sm font-normal pt-2 text-[#747474]'>
                    12m ago • The Block
                </div>
            </div>
            <div className='md:px-3'>
                <img
                    className='rounded-xl h-[160px] md:h-[180px] w-full object-cover'
                    src="https://s3-alpha-sig.figma.com/img/9d33/9254/65ca0dc515738db64eff8496660d0640?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dT8jQRpawd2M3LavqvskQiCPhz2b5LAQDyXFBP~XPKdf3Uv~OQP1a5NcPvJcWNvxuZhZL9UzqJV2Q2THBzCCnNrhaz2cDzl6hFI~yWl200FIELJV5r96I3Xa9FVBY8Hifpt8iJCPpy77fd3RlN3cgVTlfCl0KPTALY7bsnqKpavlGnLdUFqfvVsy3SCg8vEDE3SQv8Jpjd047Z~oFA9AIk19sPGYS6IWvHulzN7DyM1C~kj-Zjl~fFBm9fyRtPTc3M04dQIgtnGvwehC1jYRnK9XVfbtip1NF4ClEVjcP9ewthe2~f9-C2rBB3QD5dtHszJvaXn91rSbBUTrD0k9zA__" alt="slide" />
                <div className='text-base font-semibold pt-4'>
                    Bitcoin Token ORDI Surges to New High, Top 50 Coins
                </div>
                <div className='text-sm font-normal pt-2 text-[#747474]'>
                    12m ago • The Block
                </div>
            </div>
            <div className='md:px-3'>
                <img
                    className='rounded-xl h-[160px] md:h-[180px] w-full object-cover'
                    src="https://s3-alpha-sig.figma.com/img/04ea/2fef/92d270c9026b3c8bc7a48d7dad58a2c1?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UzwAOT-2xzL7a8gu9ahegJogFq9K7jnmCk9DguZHS-ABAkpNDt-vfsXfpAjAngrcxgPP~D3ncJcWBHJbY3gEKQeDLq7gALoSBLQYOkGhvz3tbxIViLSPlAomZ3qQMWBeT9KnWWjlmYWZyuGRWM~2-WiAMW4T1zX~7ZcbG7vQEQJg3g-EqdvLwt9l9DD0t-arCY0zv9IxcivFdh1airZsKFrfwI2bpfjySWj3v99s9mmW~bHYTmHUoQoDU2VrrUMTA-v5V8JGgFgjqznO2pCw6NXNMCCIncgNcL3HANBKLqQl6rJLFMg69QCYXUK29Z7S~6KBawxRUiBODZxJv4fxzw__" alt="slide" />
                <div className='text-base font-semibold pt-4'>
                    Bitcoin Token ORDI Surges to New High, Top 50 Coins
                </div>
                <div className='text-sm font-normal pt-2 text-[#747474]'>
                    12m ago • The Block
                </div>
            </div>
        </Slider>
    );
};

export default NewCarousel;
