import React from 'react';

function HeaderPart() {
    return (
        <div className='w-[120rem] h-[2.8125rem] flex justify-center items-center mt-[1rem]'>
            <div className='flex justify-between w-[82.5rem] h-[2.8125rem]'>

                <div className="logo inline-flex items-center gap-[.5rem]">
                    <svg className='w-[2rem] h-[2rem]' xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <path d="M31.2749 4.8428C27.4022 4.8428 21.9311 5.16683 19.1352 7.96126C17.9247 9.17176 17.3202 11.1451 17.4771 13.3787C17.4975 13.6737 17.6937 13.925 17.9756 14.0181C18.256 14.1096 18.5641 14.0239 18.7559 13.7987C20.3108 11.9691 22.2435 10.5029 24.5046 9.44062C24.6964 9.34907 24.9231 9.34178 25.1295 9.41446C25.3111 9.47985 25.4535 9.60335 25.5276 9.76179C25.6816 10.0873 25.6322 10.516 25.1207 10.7572C25.0917 10.7717 25.0655 10.7906 25.0365 10.8037C25.0263 10.8081 25.0147 10.8066 25.006 10.811C19.4346 13.4296 16.6954 17.9983 15.4514 22.6964C14.5446 16.814 12.6294 13.3511 10.8202 11.2251C9.51095 9.52787 8.22341 8.62832 7.47943 8.11976C7.34136 8.02528 6.92435 7.74049 6.7514 7.56754C6.46803 7.28417 6.46803 6.8235 6.7514 6.54013C7.03477 6.2582 7.49687 6.2582 7.81218 6.57208C7.88923 6.6404 8.01272 6.72759 8.16966 6.83222L8.29902 6.91941C9.35108 7.64015 11.31 8.97851 13.0479 11.8601C13.2034 12.1173 13.5042 12.2554 13.7963 12.2002C14.0928 12.1479 14.3252 11.9197 14.3834 11.6247C14.7627 9.68768 14.5927 6.81328 12.8649 5.0855C10.069 2.2925 4.59789 1.96847 0.726671 1.96847C0.32553 1.9684 0 2.29393 0 2.695C0 6.56765 0.324032 12.0388 3.11846 14.8347C4.28387 16.0001 6.08147 16.5233 7.86736 16.5233C9.32486 16.5233 10.7533 16.1585 11.8476 15.5264C13.3399 18.6187 14.5316 23.2383 14.5316 30.305C14.5316 30.7061 14.8571 31.0316 15.2582 31.0316C15.6592 31.0316 15.9848 30.7061 15.9848 30.305C15.9848 26.3626 16.6605 21.6311 19.173 17.7366C20.18 18.7205 21.9137 19.3439 23.8347 19.402C23.9306 19.4049 24.0251 19.4063 24.1195 19.4063C26.0711 19.4063 27.796 18.7946 28.8815 17.7076C31.6773 14.9117 31.9999 9.44055 31.9999 5.56783C32.0015 5.16683 31.6774 4.8428 31.2749 4.8428Z" fill="#00B307" />
                    </svg>
                    <h2 className='text-[#002603] text-[2rem] not-italic font-medium leading-[2.375rem] tracking-[-0.06rem]'>Ecobazar</h2>
                </div>

                <div className="search flex">
                    <svg className='absolute ml-[1rem] mt-[.7rem] w-[1.25rem] h-[1.25rem]' xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                        <path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M17.4999 18L13.8749 14.375" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <input type="search" className='flex items-center gap-[.5rem] w-[25rem] pl-[2.8rem] pr-[1rem] py-[0.75rem] outline-none border-[.1rem] rounded-tl-[0.375rem] rounded-bl-[0.375rem]' placeholder='Search' />
                    <button className='flex py-[0.875rem] px-[1.5rem] justify-center items-center gap-[.75rem bg-[#00B207] rounded-tr-[0.375rem] rounded-br-[0.375rem] text-white'>Search</button>
                </div>

                <div className="right inline-flex items-center gap-[1rem]">
                    <svg className='w-[2rem] h-[2rem]' xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                        <path d="M15.9995 28.5722C-10.6667 13.8333 7.99999 -2.16666 15.9995 7.95075C24 -2.16666 42.6666 13.8333 15.9995 28.5722Z" stroke="#1A1A1A" stroke-width="1.5" />
                    </svg>
                    <div className='w-[0.0625rem] h-[1.5rem] bg-[#CCC]'></div>
                    <svg className='w-[2.125rem] h-[2.125rem]' xmlns="http://www.w3.org/2000/svg" width="34" height="35" viewBox="0 0 34 35" fill="none">
                        <path d="M11.3333 14.6667H7.08333L4.25 30.25H29.75L26.9167 14.6667H22.6667M11.3333 14.6667V10.4167C11.3333 7.28705 13.8704 4.75 17 4.75V4.75C20.1296 4.75 22.6667 7.28705 22.6667 10.4167V14.6667M11.3333 14.6667H22.6667M11.3333 14.6667V18.9167M22.6667 14.6667V18.9167" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className='absolute ml-[5.2rem] mt-[-1rem] flex justify-center items-center p-[.7rem] bg-[#2C742F] rounded-[50%] w-[1.125rem] h-[1.125rem] text-white text-[0.625rem]'>2</div>
                    <div className='flex flex-col items-start gap-[0.4375rem] not-italic'>
                        <p className='text-[#4D4D4D] text-[0.6875rem] font-normal leading-[0.825rem]'>Shopping cart:</p>
                        <p className='text-[#1A1A1A] text-[0.875rem] font-medium leading-[0.875rem]'>$57.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderPart;
