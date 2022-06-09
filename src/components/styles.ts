import tw from 'twin.macro'

export const FlexContainer = tw.div`flex flex-col min-h-screen justify-between min-w-[375px]`

export const HeaderContainer = tw.div`container mx-auto text-white grid lg:grid-cols-2 lg:grid-flow-col gap-4 grid-cols-1 grid-flow-row`

export const HeroLogoWrapper = tw.div`flex items-start ml-4 py-8 flex-col lg:flex-row lg:place-self-start`
export const BrandLogoJoin = tw.span`my-4 mx-0 text-grey lg:my-auto font-uncut-sans whitespace-nowrap`

export const HeroNavPseudoButton = tw.a`text-xl text-center m-6 bg-orange-secondary hover:bg-orange-primary text-white py-3 px-4 rounded hidden lg:inline-block absolute`

export const EventDetailsGrid = tw.div`grid grid-flow-row mb-6 lg:mb-4 lg:grid-flow-col lg:grid-cols-3 lg:gap-4 lg:mx-24 lg:my-12 xl:mx-36`
export const EventDetailsCell = tw.div`flex my-4 ml-12 lg:m-auto lg:my-6`
export const EventDetailsIcon = tw.div`flex justify-center bg-body-icon-bg rounded p-2 mr-4`
export const EventDetailsRow = tw.div`grid grid-flow-row`
export const EventDetailsType = tw.span`font-uncut-sans`
export const EventDetailsInfo = tw.span`font-neue-machina text-2xl font-bold whitespace-nowrap`

export const RoundedImage = tw.div`flex justify-center relative overflow-hidden mx-12 rounded-t-2xl rounded-b-full`
export const RoundedImagePseudoButton = tw.a`text-xl text-center z-10 w-10/12 md:w-auto absolute bottom-40 lg:bottom-36 xl:bottom-24 py-3 mx-auto px-12 xl:px-12 bg-orange-primary hover:bg-orange-dark text-white rounded`

export const LogoGrid = tw.div`grid grid-flow-row justify-center lg:grid-flow-col lg:justify-between lg:px-12`
export const LogoFlexGrid = tw.div`lg:flex lg:flex-wrap lg:justify-center`
export const LogoWrapper = tw.div`py-4 lg:py-2 my-auto px-4 text-center`

export const SponsorshipCard = tw.div`mx-6 my-4 rounded-lg border border-gray-200 shadow-sm hover:bg-primary`
export const SponsorshipBadge = tw.div`flex justify-end mb-auto`
export const SponsorshipSummary = tw.div`grid auto-cols-auto grid-flow-col`
export const SponsorshipSummaryValue = tw.h4`font-neue-machina my-6 text-2xl font-bold tracking-tight text-gray-900 group-hover:text-white`
export const SponsorshipSummaryType = tw.h4`font-uncut-sans mb-6 text-2xl font-extrabold tracking-tight text-gray-500 group-hover:text-white group-hover:opacity-90`
export const SponsorshipList = tw.ul`list-none group-hover:text-white py-4 lg:mb-auto`
export const SponsorshipListItem = tw.li`grid auto-cols-auto grid-flow-col py-1 justify-start`
export const SponsorshipListItemTick = tw.i`relative top-1 px-2`

export const SponsorshipCTAPseudoButton = tw.a`inline-block text-center font-uncut-sans font-extrabold text-xl my-4 w-full text-center bg-orange-secondary text-dark py-3 px-4 rounded group-hover:hover:bg-orange-dark group-hover:text-white group-hover:bg-orange-primary`

export const Heading1 = tw.h1`text-5xl p-5 font-bold font-uncut-sans leading-tight`
export const Heading2 = tw.h2`font-uncut-sans font-extrabold text-darker text-4xl text-center py-6`
export const Heading3 = tw.h3`font-uncut-sans font-extrabold text-body-text text-lg text-center pt-6 pb-12 lg:py-4`

export const FooterLogoWrapper = tw.div`flex items-center lg:items-start ml-4 my-12 flex-col`
