window.addEventListener('scroll',(event) =>{

    let top = this.pageYOffset;
    let left = this.pageXOffset;
    
    const layers = document.querySelectorAll("[data-type='parallax']");
    let layer, speed, xaksel, yPos, xPos;
    for (let i = 0; i < layers.length; i++) {
        layer = layers[i];
        speed = layer.getAttribute('data-speed');
        xaksel = layer.getAttribute('data-xaksel');
        let yPos = -(pageYOffset * speed / 100);
        let xPos = - xaksel * (pageYOffset / 2);
        layer.setAttribute('style', 'transform: translate3d(' + xPos + 'px,'  + yPos + 'px, 0px)');
        
        console.log(pageXOffset);
    }
    });
    
    const walleBg = document.querySelector('#walleBg');
    const mouseleft = document.querySelector('.mouse');
    const mouse_centerbox = document.querySelector('.mouse-center');
    const walle = document.querySelector('.wallE');
    
    
    document.addEventListener('mousemove',(event) =>{
        console.log(event);
    
        let cx = walleBg.clientWidth/2;
        let cy = walleBg.clientHeight/2;
    
        let mouseX = event.clientX,
            mouseY = event.clientY;
    
            let mouseposition = `Vasemmasta kulmasta <br> X: ${mouseX} <br> Y:${mouseX}`;
            mouseleft.innerHTML = mouseposition;
    
            let from_center_x = cx - mouseX;
            let from_center_y = cy - mouseY;
    
            let mouse_centerposition = `Keskeltä <br> X: ${from_center_x} <br> Y:${from_center_y}`;
            mouse_centerbox.innerHTML = mouse_centerposition;
    
            walle.style.transform = 'translateX(' + from_center_x/100 + '%) translateY(' + mouseY/100 + '%)';
            
    
    });