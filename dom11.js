const output2 = document.querySelector('.output2');
document.body.prepend(output2);
output2.style.width = '100px';
output2.style.height = '100px'
output2.style.backgroundColor = 'purple';
output2.style.textAlign = 'center';
output2.style.lineHeight = '100px';
output2.style.color = 'aqua';
output2.style.position = 'absolute';

function ran(){
    return Math.floor(Math.random() * 255);
}

output2.addEventListener('click', (e)=>{
    const col = 'rgb('+ran()+','+ran()+','+ran() +')';
    output2.style.background = col;
    console.log(col);
})
const player = {
    x:0,
    y:0,
    speed: 10,
    ani: window.requestAnimationFrame(moveMe)
}

const keys = {
    ArrowDown : false,
    ArrowUp: false,
    ArrowLeft: false,
    ArrowRight: false,
}

window.addEventListener('keydown', (e)=>{
    keys[e.code] = true;
})
window.addEventListener('keyup', (e)=>{
    keys[e.code] = false;
})

function moveMe(){
    if (keys.ArrowDown){player.y += player.speed}
    if (keys.ArrowUp){player.y -= player.speed}
    if (keys.ArrowRight){player.x += player.speed}
    if (keys.ArrowLeft){player.x -= player.speed}
    output2.style.left = player.x +'px';
    output2.style.top = player.y + 'px';
    player.ani = window.requestAnimationFrame(moveMe);
}