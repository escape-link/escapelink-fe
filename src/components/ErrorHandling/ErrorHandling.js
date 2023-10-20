import { Link } from 'react-router-dom'
import './ErrorHandling.css'

export default function ErrorHandling() {
  return (
    <div className='error-display'>
      <h2 >Oops! nothing to see here</h2>
      <Link className='retry' to={'/'}>Retry</Link>
    </div>
  )
}