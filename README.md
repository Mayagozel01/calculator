## calculator
#### hey there, notes from project making time.. let's learn togather..
#### 7 in 1 architect for scss files managing by Hugo Giraudel
### 1. Components :
- do one thing and one thing only;
- are re-usable and re-used across the project;
- are independent.
#### Components structure
- the style of the component itself;
- the style of the component’s variants, modifiers, and/or states;
- thbe styles of the component’s descendents (i.e. children), if necessary.
### 2. Base 
The base/ folder holds what we might call the boilerplate code for the project. In there, you might find the reset file, some typographic rules, and probably a stylesheet defining some standard styles for commonly used HTML elements (that I like to call _base.scss).
### 3. Layout (Partials)
The layout/ folder contains everything that takes part in laying out the site or application. This folder could have stylesheets for the main parts of the site (header, footer, navigation, sidebar…), the grid system or even CSS styles for all the forms.

### difference between components and layouts folders
For smaller components, there is the components/ folder. While layout/ is macro (defining the global wireframe), components/ is more focused on widgets. It contains all kind of specific modules like a slider, a loader, a widget, and basically anything along those lines. There are usually a lot of files in components/ since the whole site/application should be mostly composed of tiny modules.
### 4.Pages 
If you have page-specific styles, it is better to put them in a pages/ folder, in a file named after the page. For instance, it’s not uncommon to have very specific styles for the home page hence the need for a _home.scss file in pages/.
### 5. Themes
On large sites and applications, it is not unusual to have different themes. There are certainly different ways of dealing with themes but I personally like having them all in a themes/ folder.
### 6. Abstracts (utilities)
The abstracts/ folder gathers all Sass tools and helpers used across the project. Every global variable, function, mixin and placeholder should be put in here.
### 7.Vendors
And last but not least, most projects will have a vendors/ folder containing all the CSS files from external libraries and frameworks – Normalize, Bootstrap, jQueryUI, FancyCarouselSliderjQueryPowered, and so on. Putting those aside in the same folder is a good way to say “Hey, this is not from me, not my code, not my responsibility”.
#### Main file hemmejesini ozunde jemleyar
The main file (usually labelled main.scss) should be the only Sass file from the whole code base not to begin with an underscore. This file should not contain anything but @import and comments


## If you are looking to use the 7-1 pattern, there is a [boilerplate](https://github.com/KittyGiraudel/sass-boilerplate) ready on GitHub. It should contain everything you need to get started with this architecture.
[shu yerde sass file-lary tertiplemek uchin gid](https://sass-guidelin.es/#architecture)
[counter](https://github.com/Mayagozel01.m.pipedream.net)
autoprefixer is part of postcss-cli 
autoprefixer web-kit awtomatki goshmak un gerek
