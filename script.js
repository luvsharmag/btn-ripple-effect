const buttons = document.querySelectorAll('.ripple');

buttons.forEach((btn)=>{
    btn.addEventListener('click',function(e){
        const x = e.clientX;
        const y = e.clientY;

        console.log(x,y);

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;
        console.log(btnleft,btntop);
        const xInside = x - btnleft;
        const yInside = y - btntop;
        console.log(xInside,yInside);

        const circle = document.createElement('span');
        circle.classList.add('circle');
        circle.style.top = yInside + 'px';
        circle.style.left = xInside + 'px';

        this.appendChild(circle);

        setTimeout(() => {
            circle.remove();
        }, 500);
    });
});
