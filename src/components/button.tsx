import { FC } from 'react';

type ButtonTypes = {
    onClick: any
}

const Button: FC<ButtonTypes> = ({ onClick }) => {
  return (
    <div className='generate-QR-code'>
        <button type="submit" onClick={onClick} >Generate QR</button>
    </div>
  )
}

export default Button;