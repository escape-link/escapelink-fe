import './Story.css'
// import background from '../../assets/ufo.jpg'
// import background from '../../assets/ufo2.jpg'
// import background from '../../assets/donut.jpg'
import background from '../../assets/big-donut.jpg'

export default function Story() {
  return (
    <section className='landing-page-body' style={{'--background': `url(${background})`}} >
      <div className='story-and-button'>
        <div className='story'>
        
          "We’re fringe scientists on a black site in Nevada researching highly confidential experimental airframes for the US Air Force. One of our colleagues, Bob, has been acting erratically and hasn’t shown up to work for a few days. Bob has always been an eccentric guy; he bikes to work year-round and we think he lives with his mom. That would explain how he still brings his lunch in a brown paper bag every day despite being in his late 50’s. 
          Bob’s a quiet guy who always seems to be working on something, and half the time is has nothing to do with work. An avid ham-radio enthusiast, Bob’s always tinkering with something to the point where our base commander had to make little games for him to keep him on task.
          Normally, we wouldn’t be that worried - but lately, we’ve been hearing strange sounds coming from his office. Strange radio broadcasts from decades ago, music that sounds otherworldly…our night janitors even report having seen a “Baja blast colored” aura emanating from under his office door. But even still, that’d be business as usual for a guy like Bob with all his weird projects. No one would be surprised.
          Suffice it to say, Bob’s a weird guy. But he’s our weird guy. On base, we have a sacred tradition called Doughnut Friday. In the 37 years Bob’s worked here, he has never missed a Doughnut Friday. Ever. The last time anyone saw him was last Friday, and our night janitors mentioned they never saw him leave. Our base commander is the only one who’s known Bob since he started here - and he’s put the base on lockdown and issued an access override. It’s time to head into Bob’s office to find any clues we can."
        
        </div>
        <button className='start-game'>Start Game</button>
      </div>
 
    </section>
  )
}