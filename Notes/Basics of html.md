# Full Stack Web Application

## Client-Side
    - Applications/technologies which runs/executes at the Client.
    - Client is the machine at user's end
    - basically it is the web browser (chrome, IE, Edge, Firefox, Safari ....)
    - Client side technologies( also sometimes know as FrontEnd) include : HTML, CSS, Angular, React

## Server-Side
    - Application/technologies which runs/executes on Server.
    - Server is a computer on web (www) which has a unique IP Address (xxx.xxx.xxx.xxx).
    - xxx-> 0 to 255
    - IP Addresses are complex to remember for the user so we prefer to use DNS (which is an alias to IP address).
    - technologies include - C#, Java, .Net, Asp.Net, php, python....
    - Server-side technologies can interact with files system and also can communicate to Database server 
    (which Client side technology cannot do).

## Backend 
    - Backend includes Database server.
    - Database is a logical collection of tables.
    - Tables consists of rows and columns 
    - DBMS (DataBase Management System) refers to the software which manages the DataBase (Db).
    - Eg: Sql Server(Microsoft), OracleDb(Oracle), Postgres, Cloud DB (Azure, AWS, GCP).

- To develop a full stack Application we need the technologies(FrontEnd, Backend, server side)
- For developers IDE (Integrated Development Environment) is required . Eg: VSCode, Visual Studio, Eclipse, Spring
- IDE has code editor windows, File explorer, extensions etc....


# HTML 
-  It stands for Hyper Text Markup Language. Its not a programming language.
-  Typically HTML is used to create a web page/website.
-  The extension of an HTML file is .HTML
-  It is not case sensitive, HTML is same as HTml or html or Html....
-  It runs on the web browser.
-  *TAG* - this starts with < and ends with >
-  Tags can be opening tag < tag name>  and closing tag(tag name starts with /) </ tag name>
-  self-closing tags tags which donot need any closing tag. Eg: <br>, <hr>, <img>, <meta> etc...

### Elements in HTML
- < opening tag > content < / closing tag >
- An HTML element consists of an opening tag, content, closing tag

## Attributes
- Attributes are the properties of an HTML Element. They add some behavior to the element.
- They are present in the opening/start tag after the tag name.
- In HTML there are 2 kinds of attributes:
    - Local Attributes: These are specific to the element. Eg: href, src, type
    - Global attributes: They are applicable to all HTML elements. Eg: id (uniquely identifies all the html element), class (used to categorize a set of related elements), name, style.

### Types of elements in HTML
- Block Element: These elements takes the entire width of the page and new elements starts from a new line.
    Eg:< p >, < h1 >, < div >, < ul >, < li >, < ol >
- Inline Element: These elements they take only required space and new inline element starts right after end of the previous inline element.
    Eg: < span >, < strong >, < em >, < u >, < img >, < a >

### Paths
-  Paths refers to the address of the resource
-  There are 2 types of paths :
    - Absolute Path : This is the fully qualified path to the another page/resource. Absolute path includes the     protocol, file path etc... This is the fully qualified path. Typically absolute path should be used to      reference a page or resource outside the application server.
        Eg: absolute path in server : C:\Revature\RBC\1908-aug-26\Html\Home.html
        absolute path outside server:  https://app.revature.com/
    - Relative Path : Typically used to reference the page or resource within the application server. Its prefered to have relative path for local resources over absolute path.

### HTML Forms
- HTML forms are the way to take input from the user.
- Form has 2 important attributes : 
    - action : referes to URL where the form values should be submitted.
    - Method :  It can have to values *GET* or *POST*.
- Note : A clients request is didvided into 2 parts as Request Header (URI), Request Body (values of form sent by POST method).
