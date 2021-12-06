new ScrollMagic.Scene({
    triggerElement: "#htsb_trigger",
    triggerHook: 0,
    duration: "80%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#htsb_reveal", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement:"#vtsb_trigger",
    triggerHook:0,
    duration:"80%",
    offset:0
})
.setClassToggle("#vtsb_reveal","expand")
.addIndicators()
.addTo(controller);


new ScrollMagic.Scene({
    triggerElement:"#ctsb_trigger",
    triggerHook:0,
    duration:"80%",
    offset:0
})
.setClassToggle("#corner_tsb_reveal","visible")
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement:"#ptsb_trigger",
    triggerHook:0,
    duration:"80%",
    offset:0
})
.setClassToggle("#pop_tsb_reveal","visible")
.addIndicators()
.addTo(controller);


new ScrollMagic.Scene({
    triggerElement:"#bar1x_trigger",
    triggerHook:0,
    duration:"100%",
    offset:0
})
.setClassToggle("#bar1_x","move")
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement:"#bar1min_trigger",
    triggerHook:0,
    duration:"100%",
    offset:0
})
.setClassToggle("#bar1_min","move")
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement:"#bar1max_trigger",
    triggerHook:0,
    duration:"100%",
    offset:0
})
.setClassToggle("#bar1_max","move")
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement:"#bar2min_trigger",
    triggerHook:0,
    duration:"100%",
    offset:0
})
.setClassToggle("#bar2_min","move")
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement:"#bar2max_trigger",
    triggerHook:0,
    duration:"100%",
    offset:0
})
.setClassToggle("#bar2_max","move")
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement:"#bar2x_trigger",
    triggerHook:0,
    duration:"80%",
    offset:0
})
.setClassToggle("#bar2_x","move")
.addIndicators()
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement:"#bar2dark_trigger",
    triggerHook:0,
    duration:"100%"
})
.setClassToggle("#bar2","dark")
.addIndicators()
.addTo(controller);