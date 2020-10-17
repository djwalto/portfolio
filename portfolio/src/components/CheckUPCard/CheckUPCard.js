import React from 'react'
import ReactDOM from 'react-dom'
import { useSpring, animated } from 'react-spring'
import './CheckUPCard.css'
import CardIcons from "../CardIcons/CardIcons";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function CheckUPCard() {
    let site = 'https://vimeo.com/460774354';
    let repo = 'https://github.com/djwalto/CheckUP';

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    return (
        <div className="cardDiv">
            <animated.div
                className="checkupCard"
                onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                onMouseLeave={() => set({ xys: [0, 0, 1] })}
                style={{ transform: props.xys.interpolate(trans) }}
            />
            <CardIcons site={site} repo={repo} />
        </div>
    )
}