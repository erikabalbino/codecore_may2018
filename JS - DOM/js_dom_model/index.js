// JS: Event Propagation

// Demo

const eventLogger = event => {
    const { currentTarget, eventPhase } = event;
    const { tagName, id, className } = currentTarget;

    // The event object has a property, eventPhase,
    // which holds an integer that corresponds the
    // the current phase of the event as follows:
    const phases = {
        1: "Capturing",
        2: "At Target",
        3: "Bubbling",
        0: "None"
    }

    if (currentTarget.matches(".team.salmon") && eventPhase === 3){
        event.stopPropagation();
    }

    const time = new Date().getTime();

    console.group(time);
    // console.log(event);
    console.log(`${tagName}#${id}.${className.replace(/ /g, ".")}`);
    console.log("Event Phase :", phases[eventPhase]);
    console.groupEnd(time);
};
  
document.querySelectorAll("*").forEach(node => {
    // <node>.addEventListener(...) can take an
    // optional third argument that is an options object.
    // This object can take a property "capture" set to `true`
    // to force the listener to only trigger on the capturing
    // phase instead of the bubbling phase.
    // Other options include "once" which forces the listener
    // to only trigger once.
    node.addEventListener("click", eventLogger, { capture: true});
    node.addEventListener("click", eventLogger);
}); 