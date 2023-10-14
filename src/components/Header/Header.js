import './Header.css'
import alien from '../../assets/alien.png'

export default function Header() {
  return (
    <header>
      <h1>Escape Link</h1>
      <img className='alien' src={alien} alt='image of an alien'/>
    </header>
  )
}
