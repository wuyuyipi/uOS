new ScrollMagic.Scene({
    triggerElement: "#themes_trigger",
    triggerHook: 0,
    duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#themes", "themesvisible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);


new ScrollMagic.Scene({
    triggerElement: "#select_trigger",
    triggerHook: 0,
    duration: "100%", // hide 10% before exiting view (80% + 10% from bottom)
    offset: 50 // move trigger to center of element
})
.setClassToggle("#select", "border") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#realistic_trigger",
    triggerHook: 0,
    duration: "100%" // hide 10% before exiting view (80% + 10% from bottom)
})
.setClassToggle("#realistic_theme", "visible") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#realisticpin_trigger",
    triggerHook: 0,
    duration:200
    // duration: "100%" // hide 10% before exiting view (80% + 10% from bottom)
})
.setPin("#realistic_img") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#realisticpin_trigger",
    triggerHook: 0,
    duration:200
    // duration: "100%" // hide 10% before exiting view (80% + 10% from bottom)
})
.setPin("#real_text1") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#realisticpin_trigger",
    triggerHook: 0,
    duration:200
    // duration: "100%" // hide 10% before exiting view (80% + 10% from bottom)
})
.setPin("#real_text2") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#realisticpin_trigger",
    triggerHook: 0,
    duration:200
    // duration: "100%" // hide 10% before exiting view (80% + 10% from bottom)
})
.setPin("#real_text3") // add class to reveal
.addIndicators() // add indicators (requires plugin)
.addTo(controller);

