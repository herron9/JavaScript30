#ReadMe

##Knowledge

###1. Document method `Document.querySelector()`
https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
> The Document method `querySelector()` returns the first `Element` within the document that matches the specified selector, or group of selectors. If no matches are found, null is returned.

###2. CSS Attribute selector
https://www.w3schools.com/cssref/css_selectors.asp

CSS selector works in the same way in JavaScript:

| Selector | Example | Example description |
|---|---|---|
| `[attribute=value]` | `[target=_blank]` | Selects all elements with target="_blank"

###3. Audio `play()` Method
https://www.w3schools.com/jsref/met_audio_play.asp

####3.1 HTML Audio/Video DOM `currentTime` Property
```JavaScript
var vid = document.getElementById("myVideo");
vid.currentTime = 5;
```
> The currentTime property sets or returns the current position (in seconds) of the audio/video playback.

###4. `Element.classList`
https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
>The `Element.classList` is a read-only property that returns a live `DOMTokenList` collection of the class attributes of the element. **This can then be used to manipulate the class list**.

>Using `classList` is a convenient alternative to accessing an element's list of classes as a space-delimited string via `element.className`.

###5. HTMLElement: `transitionend event`
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/transitionend_event

>The `transitionen` event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the `transition-property` is removed or `display` is set to none, then the event will not be generated.

