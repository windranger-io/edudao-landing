import Image from 'next/image'

// Import custom styled elements
import {
  FlexContainer,
  HeaderContainer,
  HeroLogoWrapper,
  BrandLogoJoin,
  HeroSecondaryButton,
  Heading1,
  HeroPrimaryButton,
  RoundedImage,
  RoundedImageButton,
  EventDetailsGrid,
  EventDetailsCell,
  EventDetailsIcon,
  EventDetailsRow,
  EventDetailsType,
  EventDetailsInfo,
  Heading3,
  LogoGrid,
  LogoWrapper,
  Heading2,
  SponsorshipCard,
  SponsorshipSummary,
  SponsorshipSummaryValue,
  SponsorshipSummaryType,
  SponsorshipBadge,
  SponsorshipList,
  SponsorshipListItem,
  SponsorshipListItemTick,
  SponsorshipCTAButton,
  LogoFlexGrid,
  FooterLogoWrapper,
} from 'components/styles'

const Home = () => {
  return (
    <FlexContainer>
      {/* hero */}
      <section className="w-full bg-primary">
        <HeaderContainer className="mb-12">
          <HeroLogoWrapper>
            <Image src="/images/EduDAO.svg" alt="" width="280" height="50.46" />
            <BrandLogoJoin className="lg:px-4">
              in partnership with
            </BrandLogoJoin>
            <Image src="/images/BitDAO.svg" alt="" width="135" height="47" />
          </HeroLogoWrapper>
          <div className="flex justify-end">
            <HeroSecondaryButton>RSVP for the Career Fair</HeroSecondaryButton>
          </div>
        </HeaderContainer>
        <HeaderContainer>
          <div className="lg:order-1 order-2 mb-32 p-4">
            <Heading1>
              Funding University Ecosystems to support the Innovators of
              tomorrow
            </Heading1>
            <HeroPrimaryButton>Get Involved</HeroPrimaryButton>
          </div>
          <div className="lg:order-2 order-1">
            <div className="flex justify-center m-auto">
              <Image
                src="/images/rocket-man.svg"
                alt=""
                width="547.36"
                height="590.59"
              />
            </div>
          </div>
        </HeaderContainer>
      </section>

      {/* body */}
      <section className="sm:container mx-auto -mt-16 bg-white rounded-xl shadow-inner-1">
        <div className="rounded-xl border-grey-border border-b from-grad-yellow to-grad-green bg-gradient-[123.23deg]">
          <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-2 lg:gap-0">
            <div className="grid grid-flow-row justify-center">
              <RoundedImage className="-mt-12">
                <Image
                  src="/images/body-image.png"
                  alt=""
                  width="556"
                  height="669"
                />
                <RoundedImageButton className="">
                  RSVP for the Career Fair
                </RoundedImageButton>
              </RoundedImage>
            </div>
            <div className="m-auto py-6 px-12 lg:py-12 lg:pl-12 lg:pr-32">
              <h2 className="text-4xl font-bold font-uncut-sans leading-tight mb-4">
                Looking for your dream job, potential summer opportunities, or
                fantastic networking?
              </h2>
              <span className="font-uncut-sans text-2xl">
                Immerse yourself in the Career Fair for amazing opportunities to
                work with some of the leading names in crypto.
              </span>
            </div>
          </div>
          <EventDetailsGrid>
            <EventDetailsCell>
              <EventDetailsIcon>
                <Image
                  src="/images/icons/Location.svg"
                  alt=""
                  height="32"
                  width="32"
                />
              </EventDetailsIcon>
              <EventDetailsRow>
                <EventDetailsType>Location</EventDetailsType>
                <EventDetailsInfo>Decentraland</EventDetailsInfo>
              </EventDetailsRow>
            </EventDetailsCell>
            <EventDetailsCell>
              <EventDetailsIcon>
                <Image
                  src="/images/icons/Calendar.svg"
                  alt=""
                  height="32"
                  width="32"
                />
              </EventDetailsIcon>
              <EventDetailsRow>
                <EventDetailsType>Date</EventDetailsType>
                <EventDetailsInfo>June 15th, 2022</EventDetailsInfo>
              </EventDetailsRow>
            </EventDetailsCell>
            <EventDetailsCell>
              <EventDetailsIcon>
                <Image
                  src="/images/icons/Clock.svg"
                  alt=""
                  height="32"
                  width="32"
                />
              </EventDetailsIcon>
              <EventDetailsRow>
                <EventDetailsType>Time</EventDetailsType>
                <EventDetailsInfo>8am EST</EventDetailsInfo>
              </EventDetailsRow>
            </EventDetailsCell>
          </EventDetailsGrid>
        </div>
        <div className="p-px">
          {/* Partners */}
          <section className="mx-auto border-b border-b-grey-border pb-12 lg:pb-6">
            <Heading3>Career Fair Partners</Heading3>

            <LogoGrid>
              <LogoWrapper>
                <Image
                  src="/images/partners/near.png"
                  alt="Near"
                  height="56"
                  width="210"
                />
              </LogoWrapper>
              <LogoWrapper>
                <Image
                  src="/images/partners/polygon.png"
                  alt="Polygon"
                  height="54"
                  width="188"
                />
              </LogoWrapper>
              <LogoWrapper>
                <Image
                  src="/images/partners/kadena.png"
                  alt="Kadena"
                  height="46"
                  width="153"
                />
              </LogoWrapper>
              <LogoWrapper>
                <Image
                  src="/images/partners/kash.png"
                  alt="Kash"
                  height="106.67"
                  width="200"
                />
              </LogoWrapper>
              <LogoWrapper>
                <Image
                  src="/images/partners/gamer.png"
                  alt="GAMER"
                  height="23"
                  width="220"
                />
              </LogoWrapper>
            </LogoGrid>
          </section>

          {/* Sponsorship Tiers */}
          <section className="mx-auto p-6">
            <Heading2>Sponsorship</Heading2>

            {/* Gold */}
            <div className="grid grid-flow-row lg:grid-flow-col lg:grid-cols-3">
              <SponsorshipCard className="group">
                <div className="p-5">
                  <SponsorshipSummary>
                    <div>
                      <SponsorshipSummaryValue>$10k</SponsorshipSummaryValue>
                      <SponsorshipSummaryType>
                        Gold Sponsorship
                      </SponsorshipSummaryType>
                    </div>
                    <SponsorshipBadge>
                      <Image
                        src="/images/icons/gold.svg"
                        alt="check"
                        height="45"
                        width="45"
                        className=""
                      />
                    </SponsorshipBadge>
                  </SponsorshipSummary>
                  <hr />
                  <SponsorshipList>
                    <SponsorshipListItem>
                      <SponsorshipListItemTick>
                        <Image
                          src="/images/icons/tick.svg"
                          alt="check"
                          height="20"
                          width="20"
                        />
                      </SponsorshipListItemTick>
                      <span>10 minutes to present on stage.</span>
                    </SponsorshipListItem>
                    <SponsorshipListItem>
                      <SponsorshipListItemTick>
                        <Image
                          src="/images/icons/tick.svg"
                          alt="check"
                          height="20"
                          width="20"
                        />
                      </SponsorshipListItemTick>
                      <span>Booth.</span>
                    </SponsorshipListItem>
                    <SponsorshipListItem>
                      <SponsorshipListItemTick>
                        <Image
                          src="/images/icons/tick.svg"
                          alt="check"
                          height="20"
                          width="20"
                        />
                      </SponsorshipListItemTick>
                      <span>
                        Access to Top Blockchain Clubs & Schools in the space.
                      </span>
                    </SponsorshipListItem>
                    <SponsorshipListItem>
                      <SponsorshipListItemTick>
                        <Image
                          src="/images/icons/tick.svg"
                          alt="check"
                          height="20"
                          width="20"
                        />
                      </SponsorshipListItemTick>
                      <span>Access to resume book.</span>
                    </SponsorshipListItem>
                    <SponsorshipListItem>
                      <SponsorshipListItemTick>
                        <Image
                          src="/images/icons/tick.svg"
                          alt="check"
                          height="20"
                          width="20"
                        />
                      </SponsorshipListItemTick>
                      <span>Feature on Website, and Twitter.</span>
                    </SponsorshipListItem>
                  </SponsorshipList>
                  <SponsorshipCTAButton>Become a sponsor</SponsorshipCTAButton>
                </div>
              </SponsorshipCard>

              {/* Silver */}
              <SponsorshipCard className="group">
                <div className="p-5">
                  <SponsorshipSummary>
                    <div>
                      <SponsorshipSummaryValue>$5k</SponsorshipSummaryValue>
                      <SponsorshipSummaryType>
                        Silver Sponsorship
                      </SponsorshipSummaryType>
                    </div>
                    <SponsorshipBadge>
                      <Image
                        src="/images/icons/silver.svg"
                        alt="check"
                        height="45"
                        width="45"
                        className=""
                      />
                    </SponsorshipBadge>
                  </SponsorshipSummary>
                  <hr />
                  <SponsorshipList>
                    <SponsorshipListItem>
                      <SponsorshipListItemTick>
                        <Image
                          src="/images/icons/tick.svg"
                          alt="check"
                          height="20"
                          width="20"
                        />
                      </SponsorshipListItemTick>
                      <span>Booth.</span>
                    </SponsorshipListItem>
                    <SponsorshipListItem>
                      <SponsorshipListItemTick>
                        <Image
                          src="/images/icons/tick.svg"
                          alt="check"
                          height="20"
                          width="20"
                        />
                      </SponsorshipListItemTick>
                      <span>
                        Access to Top Blockchain Clubs & Schools in the space.
                      </span>
                    </SponsorshipListItem>
                    <SponsorshipListItem>
                      <SponsorshipListItemTick>
                        <Image
                          src="/images/icons/tick.svg"
                          alt="check"
                          height="20"
                          width="20"
                        />
                      </SponsorshipListItemTick>
                      <span>Access to resume book.</span>
                    </SponsorshipListItem>
                    <SponsorshipListItem>
                      <SponsorshipListItemTick>
                        <Image
                          src="/images/icons/tick.svg"
                          alt="check"
                          height="20"
                          width="20"
                        />
                      </SponsorshipListItemTick>
                      <span>Feature on Website, and Twitter.</span>
                    </SponsorshipListItem>
                  </SponsorshipList>
                  <SponsorshipCTAButton>Become a sponsor</SponsorshipCTAButton>
                </div>
              </SponsorshipCard>

              {/* Bronze */}
              <SponsorshipCard className="group">
                <div className="p-5">
                  <SponsorshipSummary>
                    <div>
                      <SponsorshipSummaryValue>$3k</SponsorshipSummaryValue>
                      <SponsorshipSummaryType>
                        Bronze Sponsorship
                      </SponsorshipSummaryType>
                    </div>
                    <SponsorshipBadge>
                      <Image
                        src="/images/icons/bronze.svg"
                        alt="check"
                        height="45"
                        width="45"
                        className=""
                      />
                    </SponsorshipBadge>
                  </SponsorshipSummary>
                  <hr />
                  <SponsorshipList>
                    <SponsorshipListItem>
                      <SponsorshipListItemTick>
                        <Image
                          src="/images/icons/tick.svg"
                          alt="check"
                          height="20"
                          width="20"
                        />
                      </SponsorshipListItemTick>
                      <span>Booth.</span>
                    </SponsorshipListItem>
                    <SponsorshipListItem>
                      <SponsorshipListItemTick>
                        <Image
                          src="/images/icons/tick.svg"
                          alt="check"
                          height="20"
                          width="20"
                        />
                      </SponsorshipListItemTick>
                      <span>
                        Access to Top Blockchain Clubs & Schools in the space.
                      </span>
                    </SponsorshipListItem>
                    <SponsorshipListItem>
                      <SponsorshipListItemTick>
                        <Image
                          src="/images/icons/tick.svg"
                          alt="check"
                          height="20"
                          width="20"
                        />
                      </SponsorshipListItemTick>
                      <span>Feature on Website, and Twitter.</span>
                    </SponsorshipListItem>
                  </SponsorshipList>
                  <SponsorshipCTAButton>Become a sponsor</SponsorshipCTAButton>
                </div>
              </SponsorshipCard>
            </div>
          </section>
        </div>
      </section>

      {/* Supported By */}
      <section className="mx-auto mb-auto pb-12 lg:pb-6">
        <Heading3>Supported by</Heading3>

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
              <Image
                src="/images/EduDAO.svg"
                alt=""
                width="280"
                height="50.46"
                className="brightness-full"
              />
              <BrandLogoJoin className="lg:py-2">
                in partnership with
              </BrandLogoJoin>
              <Image
                src="/images/BitDAO.svg"
                alt=""
                width="135"
                height="47"
                className="brightness-full"
              />
            </FooterLogoWrapper>
            <div className="text-white my-12">
              <div className="flex justify-center lg:justify-end">
                <div className="mx-1 flex h-6 hover:text-orange-dark group cursor-pointer">
                  <i className="px-2">
                    <svg
                      width="20"
                      height="18"
                      viewBox="0 0 20 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="pt-1 stroke-white group-hover:stroke-orange-dark"
                    >
                      <path
                        d="M19.1666 2.50838C19.1666 2.50838 17.8499 2.67505 16.5499 2.78338C16.048 2.20631 15.381 1.79729 14.6391 1.61165C13.8972 1.42601 13.1162 1.47271 12.4017 1.74542C11.6871 2.01814 11.0736 2.50371 10.6441 3.13648C10.2145 3.76924 9.98967 4.51866 9.99992 5.28338V6.11671C8.5347 6.15376 7.08309 5.82769 5.77447 5.16756C4.46586 4.50744 3.34091 3.53378 2.49992 2.33338C2.49992 2.33338 -0.833415 9.83338 6.66659 13.1667C4.95239 14.336 2.90645 14.9206 0.833252 14.8334C8.33325 19 17.4999 14.8334 17.4999 5.21671C17.4984 4.98463 17.4761 4.75315 17.4333 4.52505C18.0561 3.89287 18.6352 3.2191 19.1666 2.50838Z"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </i>
                  <span className="font-uncut-sans">Twitter</span>
                </div>
                <div className="mx-1 flex h-6 hover:text-orange-dark group cursor-pointer">
                  <i className="px-2">
                    <svg
                      width="24"
                      height="17"
                      viewBox="0 0 24 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="pt-1 fill-white group-hover:fill-orange-dark"
                    >
                      <path d="M9.07483 0.35999C9.07483 0.35999 6.01858 0.56999 4.01983 2.17499C4.01046 2.17874 3.99921 2.18436 3.98983 2.18999C3.64296 2.51062 3.38233 3.00749 3.05983 3.71999C2.73733 4.43249 2.39608 5.34937 2.08483 6.37499C1.46421 8.42811 0.959834 10.9481 0.959834 13.32C0.957959 13.4044 0.978584 13.4869 1.01983 13.56C1.72108 14.7919 3.01108 15.5362 4.21483 16.005C5.41858 16.4737 6.53046 16.6612 7.09483 16.68C7.25421 16.6856 7.40608 16.6125 7.49983 16.485L8.66983 14.865C9.61296 15.0881 10.7192 15.24 11.9998 15.24C13.2805 15.24 14.3867 15.0881 15.3298 14.865L16.4998 16.485C16.5936 16.6125 16.7455 16.6856 16.9048 16.68C17.4692 16.6612 18.5811 16.4737 19.7848 16.005C20.9886 15.5362 22.2786 14.7919 22.9798 13.56C23.0211 13.4869 23.0417 13.4044 23.0398 13.32C23.0398 10.9481 22.5355 8.42811 21.9148 6.37499C21.6036 5.34937 21.2623 4.43249 20.9398 3.71999C20.6173 3.00749 20.3567 2.51062 20.0098 2.18999C20.0005 2.18436 19.9892 2.17874 19.9798 2.17499C17.9811 0.56999 14.9248 0.35999 14.9248 0.35999C14.8892 0.35624 14.8555 0.35624 14.8198 0.35999C14.653 0.38249 14.5123 0.49124 14.4448 0.64499C14.4448 0.64499 14.2817 1.00312 14.1748 1.51499C13.2392 1.36499 12.4517 1.31999 11.9998 1.31999C11.548 1.31999 10.7605 1.36499 9.82483 1.51499C9.71796 1.00312 9.55483 0.64499 9.55483 0.64499C9.47233 0.45749 9.27921 0.343115 9.07483 0.35999ZM8.77483 1.39499C8.81046 1.49249 8.83483 1.58436 8.86483 1.69499C7.78296 1.94624 6.59796 2.35686 5.48983 3.04499C5.31546 3.11811 5.20108 3.28686 5.19546 3.47624C5.19171 3.66374 5.29858 3.83811 5.46733 3.92061C5.63796 4.00124 5.84046 3.97686 5.98483 3.85499C8.20858 2.47686 11.038 2.27999 11.9998 2.27999C12.9617 2.27999 15.7911 2.47686 18.0148 3.85499C18.1592 3.97686 18.3617 4.00124 18.5323 3.92061C18.7011 3.83811 18.808 3.66374 18.8042 3.47624C18.7986 3.28686 18.6842 3.11811 18.5098 3.04499C17.4017 2.35686 16.2167 1.94624 15.1348 1.69499C15.1648 1.58436 15.1892 1.49249 15.2248 1.39499C15.7723 1.46249 17.9005 1.74936 19.3498 2.89499C19.4436 2.98124 19.7698 3.46124 20.0698 4.12499C20.3698 4.78874 20.6848 5.65312 20.9848 6.64499C21.5698 8.57999 22.0423 10.9669 22.0648 13.155C21.5192 14.0381 20.4955 14.6944 19.4398 15.105C18.4798 15.4781 17.5836 15.645 17.1148 15.69L16.3048 14.595C16.7173 14.4619 17.0886 14.3175 17.4148 14.175C18.6261 13.6425 19.2748 13.08 19.2748 13.08C19.4736 12.9019 19.4905 12.5962 19.3123 12.3975C19.1342 12.1987 18.8286 12.1819 18.6298 12.36C18.6298 12.36 18.1273 12.8194 17.0248 13.305C16.6198 13.4831 16.1286 13.6594 15.5698 13.815C15.4405 13.8 15.3111 13.8375 15.2098 13.92C14.3155 14.1375 13.2523 14.28 11.9998 14.28C10.738 14.28 9.67296 14.1244 8.77483 13.905C8.67358 13.8375 8.54983 13.8094 8.42983 13.83C7.86921 13.6744 7.38171 13.4831 6.97483 13.305C5.87233 12.8194 5.36983 12.36 5.36983 12.36C5.26108 12.2587 5.11108 12.2156 4.96483 12.24C4.77921 12.2681 4.62546 12.4012 4.57483 12.5831C4.52233 12.7631 4.58233 12.9581 4.72483 13.08C4.72483 13.08 5.37358 13.6425 6.58483 14.175C6.91108 14.3175 7.28233 14.4619 7.69483 14.595L6.88483 15.69C6.41608 15.645 5.51983 15.4781 4.55983 15.105C3.50421 14.6944 2.48046 14.0381 1.93483 13.155C1.95733 10.9669 2.42983 8.57999 3.01483 6.64499C3.31483 5.65312 3.62983 4.78874 3.92983 4.12499C4.22983 3.46124 4.55608 2.98124 4.64983 2.89499C6.09921 1.74936 8.22733 1.46249 8.77483 1.39499ZM8.87983 7.07999C7.65546 7.07999 6.71983 8.19186 6.71983 9.47999C6.71983 10.7681 7.65546 11.88 8.87983 11.88C10.1042 11.88 11.0398 10.7681 11.0398 9.47999C11.0398 8.19186 10.1042 7.07999 8.87983 7.07999ZM15.1198 7.07999C13.8955 7.07999 12.9598 8.19186 12.9598 9.47999C12.9598 10.7681 13.8955 11.88 15.1198 11.88C16.3442 11.88 17.2798 10.7681 17.2798 9.47999C17.2798 8.19186 16.3442 7.07999 15.1198 7.07999ZM8.87983 8.03999C9.51171 8.03999 10.0798 8.64749 10.0798 9.47999C10.0798 10.3125 9.51171 10.92 8.87983 10.92C8.24796 10.92 7.67983 10.3125 7.67983 9.47999C7.67983 8.64749 8.24796 8.03999 8.87983 8.03999ZM15.1198 8.03999C15.7517 8.03999 16.3198 8.64749 16.3198 9.47999C16.3198 10.3125 15.7517 10.92 15.1198 10.92C14.488 10.92 13.9198 10.3125 13.9198 9.47999C13.9198 8.64749 14.488 8.03999 15.1198 8.03999Z" />
                    </svg>
                  </i>
                  <span className="font-uncut-sans">Discord</span>
                </div>
              </div>
              <div className="mx-1 flex justify-center lg:justify-end font-extrabold font-uncut-sans mt-4 hover:text-orange-dark cursor-pointer ">
                Contact us
              </div>
            </div>
          </div>
          <hr className="border-grey lg:mx-12" />
          <div className="text-grey text-center text-sm font-uncut-sans py-2">
            © 2022 Windranger. All Rights Reserved
          </div>
        </div>
      </footer>
    </FlexContainer>
  )
}

export default Home
