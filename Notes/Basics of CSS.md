# CSS
- CSS stands for Cascading Style Sheet.
- This is used to make a webpage applealing for user experience.

### Types of CSS
- _Inline_ : This is applied on the HTML Element directly using "style" attribute (global attribute). Not recommended way to use most of the time.
    `Eg: style="background:lightblue"`
- _Internal_ : used on that same page. We put styles in the < style ></ style >
- _External_ : This is used as an efficient way of applying stylesheet. We create a stylesheet with .css suffix/extension
              we link this to all the pages where we want to apply styles using < link > tag.

### CSS Rule/Ruleset

```
selector(means where to apply the CSS){
        property1 : value1;
        property2 : value2;
        property3 : value3;
        .              .
        .              .
        .              .
        .              .
       propertyN : valueN;
    }
```

Eg: 
```
p{
        background: blue;
 }
```

Note:
- It is recommended to use External Css over any other style sheet.
- Precedence is for inline style sheet over external or internal Css.

CSS Selectors: They are used to tell where should the CSS to be applied.
- Element Selectors: applies to html Element directly.
    ```
    element{
        css declaration
    }
    ```
- id selector: which is applied to an element with that id.
    ```
    #id{

    }
    ```
- class selector: class is a global attribute which is used to categorize or group html elements of related type
    we can use class selector to apply CSS to that particular class.
    ```
    .class{
        css declaration
    }
    Eg: .text{
        color: red;
    }
    ```
- Pseudo-class selector: these are behavioral properties of html element. mouse hover, onfocus,focusout
    Note:
    - among class element and id, id selector gets highest precedence 