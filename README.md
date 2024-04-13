# element-arrayer



## Installation
To install, in terminal type

```
	npm i --save element-arrayer
```

then, in your project,

```
import ElementArrayer from 'element-arrayer'
```  
or
```
import {DocumentArrayer} from 'element-arrayer'
```
**DocumentArrayer**
Returns ElementArrayer but for the document, so it behaves a little differently from the others.

# ElementArrayer(HTMLElement)
Manipulates a supplied Element so that any many of the returns that would provide an HTML element as an ElementArrayer of that element, and those that would provide an HTMLCollection provide an Array of ElementArrayers for that element,

## Class Variables
**elem: ElementArrayer**  
the HTMLElement being targeted by the ElementArrayer.  

**children: ElementArrayer[]**  
**childNodes: ElementArrayer[]**  
**firstChild: ElementArrayer | null**  
**firstElementChild: ElementArrayer | null**  
**lastChild: ElementArrayer | null**  
**nextSibling: ElementArrayer | null**  
**previousSibling: ElementArrayer | null**  
**parentElement: ElementArrayer | null**  
**parentNode: ElementArrayer | null**  
Identical to their normal counterparts, but they return ElementArrayer objects instead of elements and Arrays instead of HTMLCollections.

## Methods

### Document only

**getElementById(id: string)**  
**byId(id: string)** 
Identical to getElementsById except it returns an ElementArrayer object .

**getElementsByName (name: string) => ElementArrayer[]**  
**byName: (name: string) => ElementArrayer[]**  
Identical to getElementsByName except it returns an array of ElementArrayer objects.

## Any element

**getElementsByTagNameNS(namespaceURI, localName: string): ElementArrayer[]**  
**getElementsByTagNameNS(qualifiedName: string, localName: string): ElementArrayer[]**  
**byTagNameNS(namespaceURI, localName: string): ElementArrayer[]**  
**byTagNameNS(qualifiedName: string, localName: string): ElementArrayer[]**  
Identical to getElememtsByTagNameNS except it returns an array of ElementArrayer objects.

**getElementsByTagName (tagName: string): ElementArrayer[]**  
**byTagName (tagName: string): ElementArrayer[]**  
Identical to getElementsByTagName except it returns an array of ElementArrayer objects.

**getElementsByClassName(classNames: string): ElementArrayer[]**  
**byClassName(classNames: string): ElementArrayer[]**  
Identical to getElementsByClassName except it returns an array of ElementArrayer objects.
