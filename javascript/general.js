var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: "100%"
    }
    })
    
    var sections = document.getElementsByTagName("section");
    
    // create scene for every slide
    for (var i=0; i<sections.length; i++) {
        new ScrollMagic.Scene({
                triggerElement: sections[i]
            })
            .setPin(sections[i], {pushFollowers: false})
            // .addIndicators() // add indicators (requires plugin)
            .addTo(controller);
    }

