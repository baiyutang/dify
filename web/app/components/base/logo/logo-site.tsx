'use client'
import type { FC } from 'react'
import classNames from '@/utils/classnames'
import { withPrefix } from '@/config'

type LogoSiteProps = {
  className?: string
}

const LogoSite: FC<LogoSiteProps> = ({
  className,
}) => {
  return (
    <img
      src={withPrefix('/logo/logo.png')}
      className={classNames('block w-[22.651px] h-[24.5px]', className)}
      alt='logo'
    />
  )
}

export default LogoSite
