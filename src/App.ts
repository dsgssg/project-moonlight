export function App(): string {

const stars = Array.from({length:120})
.map(()=>{

const size=Math.random()*3+1;
const x=Math.random()*100;
const y=Math.random()*100;
const delay=Math.random()*5;

return `
<div
class="star"
style="
left:${x}%;
top:${y}%;
width:${size}px;
height:${size}px;
animation-delay:${delay}s;
">
</div>
`;

})
.join("");

return`

<main id="moonlight-app">

<div class="sky"></div>

<div class="moon-glow"></div>

<div class="moon"></div>

<div class="stars">

${stars}

</div>

<div
class="cloud"
style="
top:140px;
animation-delay:-15s;
">
</div>

<div
class="cloud"
style="
top:260px;
animation-duration:80s;
">
</div>

<div class="intro">

<h1>For Shreeya 🌙</h1>

<p>Something beautiful is waiting for the beautiful...</p>

</div>

<button class="continue" id="startJourney">
    Begin the Journey →
</button>

</main>

`;

}