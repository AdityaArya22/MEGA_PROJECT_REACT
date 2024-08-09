import React,{usseId} from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    className = "",
    ...props
},ref) {
    const id = useId();
  return (
    <div className='w-full'>
        {label && <label htmlFor={id} className='px-2 py-1 inline-block mb-2'>{label}</label>}
        <input type={type} className={`${className} focus:bg-gray-200 bg-white px-2 py-1 text-black border-gray-200`} ref={ref} {...props} id={id}/>
    </div>
  )
})

export default Input