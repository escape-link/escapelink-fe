import { useState } from "react";
import './LandingPage.css'
import { Link } from "react-router-dom";

export default function LandingPage() {
return (
<div className="landing-page">Welcome to EscapeLink! Choose your room
<div className="buttons">
    <Link to={'/roomID'} className="Room-One">Alien Escape!</Link>
    <button>Coming Soon</button>
    <button>Coming Soon</button>
    <button>Coming Soon</button>
    <button>Coming Soon</button>
    </div>
</div>)
}