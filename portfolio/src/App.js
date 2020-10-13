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

const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`


class App extends React.Component {

  render() {

    return (
      <div>
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: 'rgba(102, 235, 333, 0.3)' }} />
          <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }} />
          <ParallaxLayer offset={3} speed={1} style={{ backgroundColor: 'rgba(802, 455, 803, 0.3)' }} />

          <ParallaxLayer
            offset={1}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true)
            }}
          />
          <ParallaxLayer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true)
            }}
          />
          <ParallaxLayer
            offset={1}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
              backgroundImage: url('clients', true)
            }}
          />


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
            <ContactForm style={{ width: '40%' }} />
          </ParallaxLayer>





          <ParallaxLayer
            offset={1}
            speed={-0}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            onClick={() => this.parallax.scrollTo(0)}>
            <NetflixCard style={{ width: '33%' }} />

            <JAConnectCard />
            <CheckUPCard />
          </ParallaxLayer>







          <ParallaxLayer
            offset={2}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IntroTyping style={{ width: '20%' }} />
          </ParallaxLayer>



        </Parallax>
      </div>
    )
  }
}

export default App;
