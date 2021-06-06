type PropTypes = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const Button: React.FC<PropTypes> = ({ children, ...restProps }) => {
  return (
    <button className="p-2 rounded-lg bg-gray-800 outline-none text-white shadow w-32 justify-center focus:bg-gray-700 hover:bg-gray-700 cursor-pointer" {...restProps}>
      {children}
    </button>
  )
}
export default Button