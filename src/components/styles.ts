import tw from 'twin.macro'

export const FlexContainer = tw.div`flex flex-col min-h-screen justify-between min-w-[375px]`

export const HeaderContainer = tw.div`container mx-auto text-white grid lg:grid-cols-2 lg:grid-flow-col gap-4 grid-cols-1 grid-flow-row`

export const HeroLogoWrapper = tw.div`flex items-start ml-4 py-8 flex-col lg:flex-row lg:place-self-start`
export const BrandLogoJoin = tw.span`my-4 mx-0 text-grey lg:my-auto font-uncut-sans whitespace-nowrap`

export const RoundedImage = tw.div`flex justify-center relative overflow-hidden mx-12 rounded-t-2xl rounded-b-full`

export const LogoFlexGrid = tw.div`lg:flex lg:flex-wrap lg:justify-center`
export const LogoWrapper = tw.div`py-4 lg:py-2 my-auto px-4 text-center`

export const Heading1 = tw.h1`text-5xl p-5 font-bold font-uncut-sans leading-tight`
export const Heading2 = tw.h2`font-uncut-sans font-extrabold text-body-text text-lg text-center pt-6 pb-12 lg:py-4`

export const FooterLogoWrapper = tw.div`flex items-center lg:items-start ml-4 my-12 flex-col`
