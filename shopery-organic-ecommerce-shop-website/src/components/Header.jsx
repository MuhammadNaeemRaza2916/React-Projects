import React from 'react';

function Header() {
    return (
        <div className='w-[120rem] h-[2.625rem] flex justify-center items-center'>
            <div className='flex justify-between w-[82.5rem] h-[1rem]'>
                <div className="left flex gap-[.5rem]">
                    <svg className='w-[0.9375rem] h-[1.125rem]' xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
                        <path d="M16 8.36364C16 14.0909 8.5 19 8.5 19C8.5 19 1 14.0909 1 8.36364C1 6.41068 1.79018 4.53771 3.1967 3.15676C4.60322 1.77581 6.51088 1 8.5 1C10.4891 1 12.3968 1.77581 13.8033 3.15676C15.2098 4.53771 16 6.41068 16 8.36364Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M8.5 10.8182C9.88071 10.8182 11 9.71925 11 8.36364C11 7.00803 9.88071 5.90909 8.5 5.90909C7.11929 5.90909 6 7.00803 6 8.36364C6 9.71925 7.11929 10.8182 8.5 10.8182Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span className='text-[#666] text-[0.75rem] not-italic	font-normal	leading-[0.975rem]'>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                </div>
                <div className="right flex gap-[.25rem] align-center text-[#666] text-[0.75rem] not-italic font-normal leading-[.975rem]">
                    <button>Sign In</button>
                    <p>/</p>
                    <button>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Header;
