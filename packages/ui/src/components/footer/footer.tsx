import * as constants from '@center-inc/corp-vars'
import {
  CenterLogo,
  CenterWordmark,
  Discord,
  Row,
  Telegram,
  Text,
  Twitter,
  twMerge,
} from '../../'
import { CenterLinks, DotDevLinks, TermsLinks } from './contants'
import { LinkGroup } from './link-group'
import { SocialMediaButton } from './social-media-button'

export type FooterProps = {
  className?: string
  showThemeSwitch?: boolean
}

export const Footer = ({ showThemeSwitch, className }: FooterProps) => (
  <footer
    className={twMerge(
      'relative z-10 border-t border-gray-700/25 bg-[#0D1018]',
      className
    )}
  >
    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#121826] to-transparent" />
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="opacity-1 absolute left-0 top-[40%] scale-[3] select-none opacity-50 blur-[35px] brightness-50">
        <img
          alt="Center Logo and Text Icon"
          src="/images/center-icon.png"
          width={200}
          height={200}
          className="drag-none"
        />
      </div>
    </div>
    <div className="page-wrapper relative w-full items-start !px-8">
      <div className="page-inner-wrapper-row flex flex-col items-start gap-8 py-12 md:flex-row md:justify-between md:py-20 ">
        <div className="z-20 flex w-full flex-[2] flex-col items-start justify-start">
          <div className="mb-8">
            <Row className="gap-2">
              <CenterLogo className="h-7 w-7 fill-white" />
              <CenterWordmark className="fill-white" />
            </Row>
          </div>
          <Text className="text-30 md:text-40 leading-tight text-white">
            Spend time building,
          </Text>
          <Text className="text-30 md:text-40 leading-tight text-white">
            not indexing.
          </Text>
          <Text className="max-w-64 mt-4 !text-[#5D616F]">
            Get to market faster with the most powerful and reliable blockchain API.
          </Text>
        </div>
        <div className="sm z-20 grid w-full flex-[1] grid-cols-2 grid-rows-2 items-start gap-y-8 space-x-0 sm:flex-[3] sm:grid-cols-3 sm:grid-rows-1 sm:flex-row sm:gap-0 md:space-x-8  lg:flex-[2]">
          <LinkGroup title="Center" items={CenterLinks} />
          <LinkGroup title="API" items={DotDevLinks} />
          <LinkGroup title="Terms" items={TermsLinks} />
        </div>
      </div>
    </div>
    <div className="page-wrapper !m-0 flex w-full flex-col items-center justify-between gap-4 border-t border-[rgb(28,35,44)] !px-8 py-[50px] sm:flex-row md:gap-0">
      <div className="page-inner-wrapper-row flex w-full flex-col items-center justify-between gap-4 sm:flex-row">
        <Text className="z-20 !text-[#5D616F]">
          © Center Pixel, Inc - All Rights Reserved.
        </Text>
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          {/* {showThemeSwitch ? <ThemeSwitch /> : null} */}
          <div className="flex flex-row items-center gap-4">
            <a
              href={constants.TelegramGroupPublicUrl}
              key={constants.TelegramGroupPublicUrl}
              target={'_blank'}
              rel="noreferrer"
            >
              <SocialMediaButton
                icon={<Telegram className="text-telegram cursor-pointer" />}
              />
            </a>
          </div>
          <div className="flex flex-row items-center gap-4">
            <a
              href={constants.DiscordUrl}
              rel="noreferrer"
              key={constants.DiscordUrl}
              target={'_blank'}
            >
              <SocialMediaButton
                icon={<Discord className="text-telegram cursor-pointer" />}
              />
            </a>
          </div>
          <div className="flex flex-row items-center gap-4">
            <a
              href={constants.TwitterUrl}
              rel="noreferrer"
              key={constants.TwitterUrl}
              target={'_blank'}
            >
              <SocialMediaButton
                icon={<Twitter className="text-telegram cursor-pointer" />}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
