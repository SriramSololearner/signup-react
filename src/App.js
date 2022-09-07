import React from 'react';
import "./App.css";

const App = () => {
  return (
    <div class="main">
        <section class="section1">
            <h1> Learn to paint by  watching others</h1>
            <p> <span id="p-span"> See how experienced painters create art in real-time.</span> <span id="p-span"> Watching scripted tutorials is great, </span> <span id="p-span"> but understand artists </span> <span id="p-span"> think is invaluable. </span> </p>
        </section>
        
        
        <section>
            <div class="try-it">
                <p>Try it free for 7 days then $20/mo there after</p>
            </div>
            <form class="form">
                <input type="text" placeholder="Full Name"  required autocomplete="on"/>
                <input type="text" placeholder="Last Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="password" placeholder="Password" required />
                <button type="submit" id="btn">CLAIM YOUR FREE TRAIL</button>
                
                <p>By clicking the button you are accepting <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjHpOXWy__5AhXFoVwKHaxcA2UQPAgI">Terms & Conditions</a> </p>
        
            </form>
        </section>
    </div>
  )
}

export default App