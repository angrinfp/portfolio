$(document).ready(function(){
  // Change this to the correct selector.
  $('header').midnight();
});

function setup() {
 var mycanvas = createCanvas(windowWidth, windowHeight,  WEBGL);
 mycanvas.parent('inicio');
 noStroke();
}

function draw() {
    // Red point light on the right
    pointLight(145, 0, 242, 500, 0, 200);

    // Blue directional light from the left
    directionalLight(230, 30, 190, -1, 0, 0);

    // Green spotlight from the front
    pointLight(41, 32, 161, 0, 0, 100);
    
    background('rgba(0,0,0, 0)');
    rotateY(frameCount * 0.01);
    rotateX(map(mouseY, 0, height, 0, PI));
    torus(180, 10, 4, 12);

    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    translate(p5.Vector.fromAngle(millis() / 2000, 100));
    sphere(3);

    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    translate(p5.Vector.fromAngle(millis() / 3000, 200));
    sphere(3);

    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    translate(p5.Vector.fromAngle(millis() / 1000, 200));
    sphere(3);

    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    translate(p5.Vector.fromAngle(millis() / 1000, 300));
    sphere(3);

    rotateY(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    translate(100, 50);
    sphere(3);

    /*
    rotateX(frameCount * 0.04);
    rotateY(frameCount * 0.04);
    torus(50, 2, 4, 3);

    rotateX(frameCount * 0.05);
    rotateY(frameCount * 0.05);
    torus(80, 2, 4, 3);

    rotateX(frameCount * 0.06);
    rotateY(frameCount * 0.06);
    torus(100, 2, 4, 3);

    rotateX(frameCount * 0.07);
    rotateY(frameCount * 0.07);
    torus(140, 2, 4, 3);

    rotateX(frameCount * 0.08);
    rotateY(frameCount * 0.08);
    torus(160, 2, 4, 3);
    */
}

$(function() {
    var $window = $(window),
        $document = $(document),
        transitionSupported = typeof document.body.style.transitionProperty === 'string',
        scrollTime = 1; // scroll time in seconds

    $("a[href*=#]:not([href=#])").on("click", function(e) {
        var target,
            avail,
            scroll,
            deltaScroll;
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            target = $(this.hash);
            target = target.length ? target : $("[id=" + this.hash.slice(1) + "]");

            if (target.length) {
                avail = $document.height() - $window.height();

                if (avail > 0) {
                    scroll = target.offset().top;
                    if (scroll > avail) {
                        scroll = avail;
                    }
                } else {
                    scroll = 0;
                }

                deltaScroll = $window.scrollTop() - scroll;

                // if we don't have to scroll because we're already at the right scrolling level, 
                if (!deltaScroll) { // do nothing
                    return;
                }

                e.preventDefault();
                if (transitionSupported) {
                    $("html").css({
                        "margin-top": deltaScroll + "px",
                        "transition": scrollTime + "s ease-in-out"
                    }).data("transitioning", scroll);
                } else {
                    $("html, body").stop(true, true) // stop potential other jQuery animation (assuming we're the only one doing it)
                    .animate({
                        scrollTop: scroll + 'px'
                    }, scrollTime * 1000);
                    return;
                }
            }
        }
    });

    if (transitionSupported) {
        $("html").on("transitionend webkitTransitionEnd msTransitionEnd oTransitionEnd", function(e) {
            var $this = $(this),
                scroll = $this.data("transitioning");
            if (e.target === e.currentTarget && scroll != null) {
                $this.removeAttr("style").data("transitioning", null);
                $("html, body").scrollTop(scroll);
            }
        });
    }
});

function valida_envia() {

    if(document.validar.nombre.value.length==0){
        alert("Name missing")
        document.fvalida.nombre.focus()
        return 0;
    }

    if(document.validar.email.value.length==0){
        alert("Email missing")
        document.fvalida.email.focus()
        return 0;
    }

    if(document.validar.message.value.length==0){
        alert("Please write your message")
        document.validar.message.focus()
        return 0;
    }
    
    alert("Your message has been sent successfully");
    document.fvalida.submit();

}