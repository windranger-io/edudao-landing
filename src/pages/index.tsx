// import react and hooks
import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { PopupButton } from '@typeform/embed-react'

// import brand logos
import BitDAOLogo from '../../public/images/BitDAO.svg'
import EduDAOLogo from '../../public/images/EduDAO.svg'

// import social icons
import TwitterLogo from '../../public/images/icons/Twitter.svg'
import DiscordLogo from '../../public/images/icons/Discord.svg'

// import mobile-nav state controls
import NavOpen from '../../public/images/icons/NavOpen.svg'
import NavClose from '../../public/images/icons/NavClose.svg'

// import components
import Image from 'next/image'

// import custom styled elements
import {
  FlexContainer,
  HeaderContainer,
  HeroLogoWrapper,
  BrandLogoJoin,
  Heading1,
  Heading2,
  RoundedImage,
  LogoWrapper,
  LogoFlexGrid,
  FooterLogoWrapper,
} from 'components/styles'

const Home = () => {
  const [open, setOpen] = useState(false)

  return (
    <FlexContainer>
      {/* hero */}
      <section className="bg-primary w-full">
        <div className="absolute right-0 top-4 p-4 sm:-ml-10 sm:pr-4 text-white hover:text-orange-dark cursor-pointer lg:hidden">
          <button onClick={() => setOpen(true)}>
            <NavOpen alt="open navigation" />
          </button>
        </div>

        <HeaderContainer className="mb-12">
          <HeroLogoWrapper>
            <a
              href="https://edudao.io/"
              target="_self"
              rel="nofollow noopener noreferrer"
            >
              <EduDAOLogo width="280" height="50.46" alt="EduDAO" />
            </a>
            <BrandLogoJoin className="lg:px-4">
              in partnership with
            </BrandLogoJoin>
            <a
              href="https://bitdao.io/"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              <BitDAOLogo
                className="text-white"
                width="135"
                height="47"
                alt="BitDAO"
              />
            </a>
          </HeroLogoWrapper>
        </HeaderContainer>
        <HeaderContainer>
          <div className="lg:order-1 order-2 mb-32 p-4">
            <Heading1>
              Funding University Ecosystems to support the Innovators of
              tomorrow
            </Heading1>

            <PopupButton
              id="jIuKP3DN"
              className="text-2xl w-11/12 mx-auto flex justify-center mt-12 mb-6 p-4 lg:m-6 lg:w-auto lg:px-32 bg-orange-primary hover:bg-orange-dark text-white rounded"
            >
              Get Involved
            </PopupButton>
          </div>
          <div className="lg:order-2 order-1">
            <div className="flex justify-center m-auto">
              <Image
                src="/images/rocket-man.svg"
                alt="Man wearing jetpack illustration"
                width="547.36"
                height="590.59"
              />
            </div>
          </div>
        </HeaderContainer>
      </section>

      {/* body */}
      <section className="sm:container mx-auto -mt-16 bg-white rounded-2xl shadow-inner-1">
        <div className="rounded-2xl from-grad-yellow to-grad-green bg-gradient-[123.23deg]">
          <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 lg:gap-0">
            <div className="grid grid-flow-row justify-center">
              <RoundedImage className="-mt-6 mb-0 lg:mb-12">
                <Image
                  src="/images/body-image.png"
                  alt="Two people in office setting looking at a whiteboard"
                  width="556"
                  height="669"
                />
              </RoundedImage>
            </div>
            <div className="m-auto py-6 px-12 lg:py-12 lg:pl-12 lg:pr-32">
              <h2 className="text-4xl font-bold font-uncut-sans leading-tight my-4">
                Looking for your dream job, exciting summer opportunities or the
                chance to network?
              </h2>
              <span className="font-uncut-sans text-2xl inline-block my-4">
                More information on future events coming soon.
              </span>
              <br />
              <PopupButton
                id="jIuKP3DN"
                className="text-2xl text-center w-full inline-block mt-8 mb-6 py-4 px-4 bg-orange-primary hover:bg-orange-dark text-white rounded"
              >
                Get Involved
              </PopupButton>
            </div>
          </div>
        </div>
      </section>

      {/* Supported By */}
      <section className="mx-auto mb-auto pb-12 lg:pb-6">
        <Heading2>Supported by</Heading2>

        <LogoFlexGrid>
          <LogoWrapper>
            <Image
              src="/images/supporters/blockchain-at-berkeley-logo.svg"
              alt="Blockchain at Berkeley"
              height="44"
              width="151"
            />
          </LogoWrapper>
          <LogoWrapper>
            <Image
              src="/images/supporters/harvard-blockchain-logo.svg"
              alt="Harvard Blockchain"
              height="44"
              width="151"
            />
          </LogoWrapper>
          <LogoWrapper>
            <Image
              src="/images/supporters/blockchain-michigan-logo.svg"
              alt="Blockchain Michigan"
              height="87"
              width="87"
            />
          </LogoWrapper>
          <LogoWrapper>
            <Image
              src="/images/supporters/mit-solan-blockchain-logo.svg"
              alt="MIT Solan Blockchain"
              height="55"
              width="176"
            />
          </LogoWrapper>
          <LogoWrapper>
            <Image
              src="/images/supporters/berkeley-logo.svg"
              alt="Berkeley RDI"
              height="39"
              width="194"
            />
          </LogoWrapper>
          <LogoWrapper>
            <Image
              src="/images/supporters/bc-logo.svg"
              alt="BC"
              height="75.6"
              width="67.7"
            />
          </LogoWrapper>
          <LogoWrapper>
            <Image
              src="/images/supporters/the-house-fund-logo.svg"
              alt="The House Fund"
              height="29"
              width="190"
            />
          </LogoWrapper>
          <LogoWrapper>
            <Image
              src="/images/supporters/oxford-blockchain-logo.svg"
              alt="Oxford Blockchain"
              height="55"
              width="112.4"
            />
          </LogoWrapper>
          <LogoWrapper>
            <Image
              src="/images/supporters/thubadao-logo.png"
              alt="ThubaDAO"
              height="80"
              width="80"
            />
          </LogoWrapper>
        </LogoFlexGrid>
      </section>

      {/* Footer */}
      <footer className="bg-primary lg:px-24">
        <div className="container mx-auto">
          <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2">
            <FooterLogoWrapper>
              <a
                href="https://edudao.io/"
                target="_self"
                rel="nofollow noopener noreferrer"
              >
                <EduDAOLogo
                  className="brightness-200 saturate-0"
                  width="280"
                  height="50.46"
                  alt="EduDAO"
                />
              </a>
              <BrandLogoJoin className="lg:py-2">
                in partnership with
              </BrandLogoJoin>
              <a
                href="https://bitdao.io/"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <BitDAOLogo
                  className="text-white brightness-200 saturate-0"
                  width="135"
                  height="47"
                  alt="BitDAO"
                />
              </a>
            </FooterLogoWrapper>
            <div className="text-white my-12 text-center lg:text-right">
              <div className="flex justify-center lg:justify-end">
                <a
                  href="https://twitter.com/Edu_DAO"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mx-2 flex h-6 hover:text-orange-dark group cursor-pointer"
                >
                  <i className="mr-2">
                    <TwitterLogo
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      alt="Twitter Logo"
                      className="pt-1 stroke-white group-hover:stroke-orange-dark"
                    />
                  </i>
                  <span className="font-uncut-sans">Twitter</span>
                </a>
                <a
                  href="https://discord.com/invite/gNQYMBVGxe"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="mx-2 flex h-6 hover:text-orange-dark group cursor-pointer"
                >
                  <i className="mr-2">
                    <DiscordLogo
                      width="24"
                      height="17"
                      viewBox="0 0 24 17"
                      alt="Discord Logo"
                      className="pt-1 fill-white group-hover:fill-orange-dark"
                    />
                  </i>
                  <span className="font-uncut-sans">Discord</span>
                </a>
              </div>
              <a
                href="mailto:info@edudao.io"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="inline-block font-extrabold font-uncut-sans mx-1 mt-4 hover:text-orange-dark cursor-pointer"
              >
                Contact us
              </a>
            </div>
          </div>
          <hr className="border-grey lg:mx-12" />
          <div className="text-grey text-center text-sm font-uncut-sans py-2">
            © 2022 Windranger. All Rights Reserved
          </div>
        </div>
      </footer>

      {/* Mobile Nav */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden lg:hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full h-min">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <div className="pointer-events-auto bg-white w-screen min-w-[375px] relative rounded-b-2xl">
                    <div className="w-full h-full from-grad-yellow to-grad-green bg-gradient-[123.23deg] overflow-y-auto max-h-screen">
                      <div className="absolute right-0 top-4 p-4 sm:-ml-10 sm:pr-4">
                        <button
                          type="button"
                          className="p-1 text-gray-500 hover:text-black"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <NavClose alt="close navigation" />
                        </button>
                      </div>

                      <HeroLogoWrapper>
                        <a
                          href="https://edudao.io/"
                          target="_self"
                          rel="nofollow noopener noreferrer"
                        >
                          <EduDAOLogo width="280" height="50.46" alt="EduDAO" />
                        </a>
                        <BrandLogoJoin className="lg:px-4">
                          in partnership with
                        </BrandLogoJoin>
                        <a
                          href="https://bitdao.io/"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                        >
                          <BitDAOLogo
                            className="text-black"
                            width="135"
                            height="47"
                            alt="BitDAO"
                          />
                        </a>
                      </HeroLogoWrapper>
                      <hr className="border-mobile-nav-hr w-11/12 m-auto" />
                      <h3 className="font-uncut-sans font-extrabold text-body-text text-lg mt-10 ml-6">
                        Join our Community
                      </h3>
                      <div>
                        <a
                          href="https://twitter.com/Edu_DAO"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="inline-block text-body-text m-6 mb-0 hover:text-orange-dark text-lg group cursor-pointer"
                        >
                          <i className="px-2 w-11 inline-block">
                            <TwitterLogo
                              width="20"
                              height="18"
                              viewBox="0 0 20 18"
                              alt="Twitter Logo"
                              className="relative top-1 text-orange-primary group-hover:stroke-orange-dark"
                            />
                          </i>
                          <span className="font-uncut-sans pr-1">Twitter</span>
                        </a>
                      </div>
                      <div>
                        <a
                          href="https://discord.com/invite/gNQYMBVGxe"
                          target="_blank"
                          rel="nofollow noopener noreferrer"
                          className="inline-block m-6 text-body-text hover:text-orange-dark text-lg group cursor-pointer"
                        >
                          <i className="px-2 w-11 inline-block">
                            <DiscordLogo
                              width="24"
                              height="17"
                              viewBox="0 0 24 17"
                              alt="Discord Logo"
                              className="relative top-1 fill-orange-primary group-hover:fill-orange-dark"
                            />
                          </i>
                          <span className="font-uncut-sans pr-1">Discord</span>
                        </a>
                      </div>
                      <PopupButton
                        id="jIuKP3DN"
                        className="text-2xl w-11/12 mx-auto flex justify-center p-4 my-12 bg-orange-primary hover:bg-orange-dark text-white rounded"
                      >
                        Get Involved
                      </PopupButton>
                    </div>
                  </div>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </FlexContainer>
  )
}

export default Home
