import './Room.css'
import blueBackground from '../../assets/room/blue-bg.png'
import clock from '../../assets/room/clock.png'
import plant from '../../assets/room/plant.png'
import door from '../../assets/room/door.png'
import board from '../../assets/room/board.png'
// import bike from '../../assets/room/bike.png'
import radio from '../../assets/room/radio.png'
// import desk from '../../assets/room/desk.png'
// import laptop from '../../assets/room/laptop.png'
import lamp from '../../assets/room/lamp.png'
import deskComp from '../../assets/room/desk-comp.png'
import bike from '../../assets/room/bike-front.png'

export default function Room() {
  return (
    <article className='room' style={{ '--room-bg': `url(${blueBackground})` }}>
      <button className='clock-btn'><img className='clock' src={clock} alt='clock'></img></button>
      <button className='plant-btn'><img className='plant' src={plant} alt='plant'></img></button>
      <button className='bike-btn'><img className='bike' src={bike} alt='bike'></img></button>
      <button className='door-btn'><img className='door' src={door} alt='door'></img></button>
      <button className='board-btn'><img className='board' src={board} alt='board'></img></button>
      <button className='desk-comp-btn'><img className='desk-comp' src={deskComp} alt='desk'></img></button>
      <button className='lamp-btn'><img className='lamp' src={lamp} alt='lamp'></img></button>
      <button className='radio-btn'><img className='radio' src={radio} alt='radio'></img></button>

    </article>
  )
}