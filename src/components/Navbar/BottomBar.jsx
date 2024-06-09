import React from 'react'

const BottomBar = () => {
    return (
        <div class="fixed lg:hidden bottom-0 left-0 right-0 flex items-center justify-around bg-black border-t-2 py-2 text-white md:hidden">
            <div class="flex flex-col items-center">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                </svg>
                <span class="text-xs">Home</span>
            </div>
            <div class="flex flex-col items-center">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
                <span class="text-xs">Shorts</span>
            </div>
            <div class="flex flex-col items-center">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18M21 3v18M4 8l4 4-4 4M16 8l4 4-4 4" />
                </svg>
                <span class="text-xs">Subscriptions</span>
            </div>
            <div class="flex flex-col items-center">
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h.01M12 7h.01M16 7h.01M9 11h6M8 15h8M4 4h16M4 20h16" />
                </svg>
                <span class="text-xs">Library</span>
            </div>
        </div>

    )
}

export default BottomBar