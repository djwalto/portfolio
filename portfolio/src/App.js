import React from 'react'
import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import './App.css';
import Nav from './components/Nav/Nav';
import IntroTyping from "./components/IntroTyping/IntroTyping";
import NetflixCard from "./components/NetflixCard/NetflixCard";
import JAConnectCard from "./components/JAConnectCard/JAConnectCard";
import CheckUPCard from "./components/CheckUPCard/CheckUPCard";
import ContactForm from "./components/ContactForm/ContactForm";
import { useSpring, animated } from 'react-spring/renderprops';
import Image1 from "./sunbackground.jpeg";
import FlipCard from "./components/FlipCard";


class App extends React.Component {

  render() {

    return (
      <div>
        <Parallax ref={ref => (this.parallax = ref)} pages={4}>
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'rgba(102, 235, 333, 0.3)' }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} />
          <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: 'rgba(0, 64, 77,0.3)' }} />
          <ParallaxLayer offset={4} speed={1} style={{ backgroundColor: 'rgba(502, 135, 933, 0.3)' }} />
          {/* 
          <ParallaxLayer
            offset={1}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true)
            }}
          /> */}
          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '50%',
              backgroundPosition: 'center',
              backgroundColor: 'rgb(1, 1, 1, 0.5)',
              // backgroundImage: `url(${Image1})`,

            }}
          />
          {/* <ParallaxLayer
              offset={1}
              speed={-0.3}
              style={{
                backgroundSize: '80%',
                backgroundPosition: 'center',
                backgroundImage: url('clients', true)
              }}
            /> */}


          <ParallaxLayer
            offset={0}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IntroTyping style={{ width: '20%' }} />
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            <NetflixCard style={{ width: '30%' }} />

            <JAConnectCard style={{ width: '30%' }} />
            <CheckUPCard style={{ width: '30%' }} />
          </ParallaxLayer>





          <ParallaxLayer
            offset={1}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} >

            <NetflixCard style={{ width: '30%' }} />

            <JAConnectCard style={{ width: '30%' }} />
            <CheckUPCard style={{ width: '30%' }} />

          </ParallaxLayer>


          <ParallaxLayer
            offset={3}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }} >

            <ContactForm style={{ width: '40%' }} />

          </ParallaxLayer>

        </Parallax>
      </div >
    )
  }
}

export default App;
