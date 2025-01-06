import { Button as HUIButton } from "@headlessui/react";
import { tv, VariantProps } from 'tailwind-variants';
 
const button = tv({
  base: 'text-sm leading-5 rounded-md flex justify-center items-center gap-x-2 no-wrap',
  variants: {
    color: {
        primary: 'bg-fluidra-aqua-500 text-white stroke-white border-gray-300 shadow-sm hover:bg-fluidra-aqua-600 active: active:bg-fluidra-aqua-700 focus:bg-fluidra-blue-800 focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-fluidra-blue-800 disabled:bg-gray-300',
        secondary: 'bg-white text-gray-700 border border-solid border-gray-300 shadow-sm hover:bg-gray-50 active:bg-gray-100 focus:bg-gray-300 disabled:text-gray-300',
        transparent: 'bg-transparent text-current stroke-current border-none ring-0 ring-offset-0 shadow-none'
    },
    size: {
        xs: 'h-6 py-1 px-2 leading-4 text-xs rounded',
        sm: 'h-7 py-1 px-2.5',
        md: 'h-8 py-1.5 px-2.5',
        lg: 'h-9 py-2 px-3 gap-x-3',
        xl: 'h-10 py-2.5 px-3.5 gap-x-3',
    },
  },
  //compoundVariants: [
    //     {
    //         color: 'primary',
    //         hover: true,
    //         class: 'bg-fluidra-blue-600',
    //     },
    //     {
    //         color: 'primary',
    //         active: true,
    //         class: 'bg-fluidra-blue-700',
    //     },
    //     {
    //         color: 'primary',
    //         focus: true,
    //         class: 'bg-fluidra-blue-800 ring-2 ring-offset-2 ring-offset-white ring-fluidra-blue-800',
    //     },
    //     {
    //         color: 'primary',
    //         disabled: true,
    //         class: 'bg-gray-300',
    //     },
    //     {
    //         color: 'secondary',
    //         hover: true,
    //         class: 'bg-gray-50',
    //     },
    //     {
    //         color: 'secondary',
    //         active: true,
    //         class: 'bg-gray-100',
    //     },
    //     {
    //         color: 'secondary',
    //         focus: true,
    //         class: 'bg-gray-300',
    //     },
    //     {
    //         color: 'secondary',
    //         disabled: true,
    //         class: 'text-gray-300',
    //     },
    //   ],
  defaultVariants: {
    size: 'md',
    color: 'primary'
  }
});

type ButtonVariants = VariantProps<typeof button>;
 
interface ButtonProps extends ButtonVariants {
  className?: string;
  onClick?: () => {}
  children?: React.ReactNode;
}
const Button = (props: ButtonProps) => {
    return <HUIButton className={button(props)} onClick={props.onClick}>{props.children}</HUIButton>;
};

export default Button;