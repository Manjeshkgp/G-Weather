import { cn } from '@/lib/utils'
import { FC } from 'react'


const styles = {
    primary:'bg-primary-50 dark:bg-primary-650 border-primary-50 dark:border-primary-650 border hover:border-primary-200 dark:hover:border-primary-400 focus-visible:outline outline-primary-200 dark:outline-primary-650 outline-2 outline-offset-2 dark:text-primary-100 text-primary-650',
    link:'!px-0 !py-0 focus-visible:outline outline-primary-200 dark:outline-primary-650 outline-2 outline-offset-2',
}

const sizes = {
    xs:'px-3 py-2 text-sm leading-tight',
    sm:'px-4 py-2.5 text-sm leading-tight',
    base:'px-5 py-3 text-base leading-normal',
    md:'px-6 py-3 text-base leading-normal',
    lg:'px-6 py-4 text-lg leading-7'
}

const baseClass = 'flex justify-center items-center gap-6 transition-all duration-200 rounded text-center font-normal'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: keyof typeof styles
    size?: keyof typeof sizes
}

const Button: FC<ButtonProps> = ({children,variant='primary',size='base',className,...rest}) => {
    
  return <button className={cn(baseClass,styles[variant],sizes[size],className)}
  {...rest}
  >{children}</button>
}

export default Button