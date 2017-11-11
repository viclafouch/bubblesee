class Bubblesee {
	
	static bind(selector, animation = null) {
		var bubbles = document.querySelectorAll(selector);
		for (var i = bubbles.length - 1; i >= 0; i--) {
			new Bubblesee(bubbles[i], animation);
		}
	}

	constructor(element, animation) {
		this.element = element;
		this.animation = animation;

		let bubbleTarget = this.element.getAttribute('data-bubble');
    	
    	if (bubbleTarget) {
      		this.title = document.querySelector(bubbleTarget).innerHTML;
    	} else {
      		this.title = element.getAttribute('title');
    	}

	    this.bubblesee = null;
	    this.element.addEventListener('mouseover', this.mouseOver.bind(this), false);
	    this.element.addEventListener('mouseout', this.mouseOut.bind(this), false);
	}

	mouseOver() {
	    let bubblesee = this.createBubble();
	    let width = bubblesee.offsetWidth;
	    let height = bubblesee.offsetHeight;
	    let left = this.element.offsetWidth / 2 - width / 2 + this.element.getBoundingClientRect().left + document.documentElement.scrollLeft;
	    let top = this.element.getBoundingClientRect().top - height - 15 + document.documentElement.scrollTop;
	    bubblesee.style.left = left + "px";
	    bubblesee.style.top = top + "px";
	    bubblesee.classList.add('bubblesee__visible');

      	this.element.setAttribute('title', '');
  	}

	mouseOut() {
		if (this.bubblesee !== null) {
			this.bubblesee.classList.remove('bubblesee__visible');
			this.bubblesee.addEventListener('transitionend', () => {
				if (this.bubblesee !== null) {
					this.element.setAttribute('title', this.title);
					this.bubblesee.remove();
					this.bubblesee = null;
				}
			});
		}
	}

  	createBubble() {
		if (this.bubblesee === null) {
			let bubble = document.createElement('div');
			bubble.innerHTML = this.title;
			bubble.classList.add('bubblesee');
			document.body.appendChild(bubble);
			this.bubblesee = bubble;

			if (this.animation !== null) {
				bubble.classList.add('bubblesee__'+this.animation);
			}
		}
		return this.bubblesee;
  	}  
}

Bubblesee.bind('a[title]', 'rotate');