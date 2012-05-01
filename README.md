# License Information
LiveFilter jQuery Plugin
https://github.com/mikemerritt/LiveFilter

COPYRIGHT (c) 2010-2012 Mike Merritt
http://www.mikemerritt.me

The terms of this software are described in the file LICENSE, which you should have received as
part of this distribution. Redistributions of files must retain the above copyright notice.

# Description
LiveFilter is a jQuery plugin that can be used to sort lists of data in realtime, as you type.

# How to Use
LiveFilter expects your list to use a certain HTML structure. It can be used on ordered/unordered lists and tables. Your list must reside inside of a div that the plugin will be targeting. An example of the structure is below.

```html
<div id="wrapping_div">
	<ul>
		<li>List Item</li>
		<li>List Item</li>
		<li>List Item</li>
		<li>List Item</li>
		<li>List Item</li>
		<li>List Item</li>
	</ul>
</div>
```

If your list follows the proper structure like above, you can then call the `liveFilter()` function on the wrapping div like so.

```html
<script type="text/javascript">
	$('#wrapping_div').liveFilter();
</script>
````

If you need custom settings you can set them like this.

```html
<script type="text/javascript">
	$('#wrapping_div').liveFilter({
		delay: 300, 
		defaultText: 'Custom Default Text:',
		zebra: {
			enabled: true,
			baseColor: '#13345d',
			altColor: '#174175'
		}
	});
</script>
```

The full list of available properties, their defaults and what they expect are listed below.

+ delay - A delay between when typing starts and when the list starts to filter.
	+ Default: 0
	+ Expects: Number
+ defaultText - The default text inside of the text input.
	+ Default: 'Type to Filter:'
	+ Exepcts: String
+ hideDefault - Hides the full list by default.
	+ Default: False
	+ Expects: True/False
+ addInputs - Will automatically add text and reset inputs inside the wrapping div.
	+ Default: False
	+ Expects: True/False
+ noMatches - Will display text if no matches are found.
	+ Default: 'No Matches'
	+ Expects: String
+ zebra - An object for all zebra-striping settings.
	+ enabled - Toggles zebra-striping on/off.
		+ Default: False
		+ Expects: True/False
	+ baseColor - The base color to be used for zebra striping.
		+ Default: False
		+ Expects: False/Hex color string.
	+ altColor - The alternate color for zebra striping.
		+ Default: False
		+ Expects: False/Hex color string.

# Changelog

+ Version 1.4
	+ Refactored code & updated for jQuery 1.7.
	+ Added "No matches" text.
	+ Added Non-consecutive search. E.g. A filter of "hot mustard" would match the list item "hot dog with mustard"
	+ Changed zebra-striping options
	+ Performance improvements.
	+ Fixed hideDefault so that when no filter is supplied it will revert back to it's hidden state.
	+ Updated readme.

+ Version 1.3
	+ Completely re-written from scratch.
	+ Added delay feature to increase performance during fast typing.
	+ Added default text option which adds default text to text inputs.
	+ Added an option to allow hiding of the list/table as the default state.
	+ Added the ability zebra stripe a list/table that also keeps it's correct striping as it is filtered.
	+ Added an option to automatically generate text and reset inputs in the wrapping div.

+ Version 1.2
	+ Performance and flexibility improvments.
	+ Improved table support.
	+ Added optional filter animations.
	+ Intelligent element detection.

+ Version 1.1
	+ Added support for filtering tables.
	+ Code optimizations.

+ Version 1.0.1
	+ Fixed an expression compatibility issue with jQuery 1.3.x

+ Version 1.0.0
	+ Initial Version.