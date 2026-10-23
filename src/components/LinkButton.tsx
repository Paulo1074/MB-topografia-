import type { AnchorHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'light' | 'outline' | 'outline-light'

interface LinkButtonProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string
  variant?: Variant
  size?: 'md' | 'lg'
  icon?: ReactNode
  /** true = ícone depois do texto (ex.: seta). */
  iconAfter?: boolean
  children: ReactNode
}

/**
 * Link estilizado como botão. Links externos (http...) abrem em nova aba com
 * rel="noopener noreferrer"; âncoras internas (#secao) navegam na mesma página.
 */
export default function LinkButton({
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter = false,
  children,
  className = '',
  ...rest
}: LinkButtonProps) {
  const external = /^https?:\/\//.test(href)
  const classes = `btn btn--${variant} ${size === 'lg' ? 'btn--lg' : ''} ${className}`.trim()

  return (
    <a
      className={classes}
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...rest}
    >
      {!iconAfter && icon}
      <span>{children}</span>
      {iconAfter && icon}
    </a>
  )
}
