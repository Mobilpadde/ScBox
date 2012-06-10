Scbox
=====

A plugin to make a box which you can scroll inside (May sound a little weird, but try the demo) :D

## How to ##
First step is always to include the script it self (Either minified, or *human-readable* version).

```html
	<script src="scBox.jquery.min.js"></script>
```


Now to the second part.
Start jquery as always, when call `scbox()` for the element(s) you want to it to (Usually a div).

```html
	<script>
		$(document).ready(function(){
			$(".scbox").scbox();
		})
	</script>
```

#### Done! ####
Now you got it, a beatiful stupid box, that you can scroll in :D


## Settings ##

As in every good plugin, there is some settings, that you can play around with:

```html
	<script>
		$(document).ready(function(){
			$(".scbox").scbox({
				start: 40,
				width: 200,
				height: 50,
				step: 10,
				fontSize: 15,
				textColor: "#fff",
				bgColor: "#000",
				slideColor: "#ff0000",
			});
		})
	</script>
```

As you can see, there is eight settings. Now, lets try to learn them:

* `start`
	* This the start point of the slider.
	* `40` is default.
* `width`
	* Is as the name suggest, the with of the box.
	* `200` is default.
* `height`
	* Again, as the name suggest, height of the box.
	* `50` is default.
* `step`
	* as the name suggest (again), step to take, then scrolling.
	* `10` is default.
* `fontSize`
	* Fontsize of the percent, in bottom right corner.
	* `15` is default.
* `textColor`
	* Color of the text.
	* Can also be removed, by setting this to `transparent`.
	* `#fff` is default.
* `bgColor`
	* Background of the box.
	* Can also be removed, by setting this to `transparent`.
	* `#000` is default.
* `slideColor`
	* Color of the slider.
	* Can also be removed, by setting this to `transparent` (Which there is no point in, unless you do something really awesome! :D ).
	* `#ff0000` is default.


## Weird stuff ##

### Known issues ###
* No way to get output value


### Changelog ###
10 06 2012 - v 0.0.3

* Use data- attributes to make individual settings for each `scBox`.
* Updated README.md


10 06 2012 - v 0.0.2

* Now possible to use more `scBox`'s than one at the same time.


09 06 2012 - v 0.0.1

* Did the whole thing.