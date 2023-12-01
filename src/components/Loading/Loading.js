import './Loading.css';
import alien from '../../assets/donut-icon.png';

export default function Loading() {
  return (
    <section className="loading-container">
      <span className="sr-only">Loading</span>
      <img src={alien} alt="alien" className="alien" aria-hidden="true" />
    </section>
  );
}
