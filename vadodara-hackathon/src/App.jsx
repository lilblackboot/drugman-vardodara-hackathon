import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="main">
      <div class="loader">
        <h2 class="zoom">DRUGMAN</h2>
        <h1 class="scramble">DRUGMAN</h1>
        <div class="Loading"></div>
      </div>
      <div class="svgwaala">
        <div id="dotted">
          <img id="donut" src="/Images/donut.png" alt="" />
          <img id="D" src="/Images/Group 1.svg" alt="" />
          <img id="n" src="/Images/n.svg" alt="" />
          <img id="r" src="/Images/r.svg" alt="" />
          <img id="g" src="Images/g.svg" alt="" />
          <img id="m" src="Images/m.svg" alt="" />
          <img id="a" src="Images/a.svg" alt="" />
          <img id="u" src="Images/u.svg" alt="" />

        </div>
        <div id="explore">
          <h1 onclick="setTimeout( example, 1200)">Explore</h1>
        </div>
      </div>
      <div>
        <h1>
          welcome 
        </h1>
      </div>
    </div>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js" integrity="sha512-f8mwTB+Bs8a5c46DEm7HQLcJuHMBaH/UFlcgyetMqqkvTcYg4g5VXsYR71b3qC82lZytjNYvBj2pf0VekA9/FQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="descrambler.js"></script>
    <script src="script.js"></script>
    </>
  )
}

export default App
