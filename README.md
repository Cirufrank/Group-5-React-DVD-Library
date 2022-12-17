# Group-5-React-DVD-Library
![](https://media.giphy.com/media/jqwzq0LoZOfLqqJZ0b/giphy.gif)

DVDs.. a thing of the past... a forgotten piece of technology that's soon to fade into the digital ether. Is what they all said. But you.. you're not them... NO... you're a blue ray connoisseur. You enjoy the classics and respect the intricacies of the digital versatile disc. This application was made for you! You have a beautiful collection of DVDs, but alas, you've been craving a quick, and responsive web application to help you keep track of them, to share with, to write about the DVDs that made you laugh, cry, see the world in a new light. Additionally, you've been in search of other affecionados and would love to show your notes and impactful DVDs with the world, while also being able to view any DVDs loved by others. Well look no further my friend. The DVD library CRUD app is here.

## Steps to run this app on your local machine
<ol>
  <li>Navigate to the folder you'd like to save this project in and run the command <code>git clone https://github.com/Cirufrank/Group-5-React-DVD-Library.git</code> to pull in the files</code></li>
  <li>Run the command <code>cd Group-5-React-DVD-Library</code> from the terminal to navigate into the project's root directory</li>
  <li>Run the command <code>npm install</code> to download all of the project's dependencies (to view a list of these dependencies please see the <code>package.json</code> file)</li>
  <li>To launch this app run the command <code>npm run dev</code> and you'll be able to view this app by typing the URL <code>http://localhost:1234</code> into the browser</li>
</ol>

## How It's Made:
This is a fully-responsize Single Page Application created with React. Why React you say? Well, through use of the virtual DOM, React is able to update only the parts of the page that have changed. This greatly enhances the speed of the website's performance when updating the elements rendered through the DOM. Additionally, through use of JSX (or JavaScript if preferred) you are able to conditionally write the compontents of HTML to be rendered on the client's side, and use JavaScript directly within your code. Additionally, components allow you to render the same code within different pages or places within the application without having to re-wite the code. This makes for a more modular application. 

Additionally, through use of a RESTful DVD library API in coorditation with JavaScript's fetch API, this application persists any DVDs added and edited to permanently storage. This allows you to share your favorite DVDs with others, view the DVDs others have listed, and make edits whenever you make a typo 😉.

## Languages and Tools used
<p align="left"> <a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a> <a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a> </p>

## Optimizations
<ul>
  <li>
  Used the useContext API to maintain the global stated of any user logged in so personalized messages can be shared on any child components
  </li>
  <li>Used React's useEffect API to make calls to the public DVD library API so that everytime the homepage is rendered the data is refreshed</li>
  <li>Used React for the project so that each time the page is updated, only the changes pieces of the DOM are re-rendered</li>
</ul>

## Future goals
<ul>
  <li>
    Implement authentication, and update the UserContext to share needed information throughout the application with the currently implemented useContext API
  </li>
  <li>Create a custom DVD library API that allows for pagination so that whenever the DVD list gets to a certain length, users can navigate to pages and only have a page's worth of data loaded at a time</li>
  <li>Deploy the application so that it can be publicly accessed on the internet</li>
</ul>


## Lessons Learned:
<ul>
  <li>Further solidified knowledge of prop drilling and how to organize components and state so that all needed parts of the application are able to</li>
  <li>Learned the use cases that can lead to the useEffect API causing an infinite loop when making calls to an external API, how to avoid this, and how to use the API to its full potential</li>
  <li>Learned how the useState's state and state setted methods can be passed to children components and still affect that state expectedly</li>
  <li>Learned the best times to implement prop drilling for sharing state and when to opt to the useContext API, as well as the benefits adn consequences for both of those decisions</li>
  <li>Learned how to implement React Routing and also use React's nagiation link APIs</li>
  <li>Learned how to create a React application from scratch and without a create-react-app generated starter as well as how to use Parcel as the application's bundler instead of webpack</li>
  <li>Learned how to use Lucidchart to plan and organize components before implementing the application, as well as how to plan out the application's creation</li>
  </br>
  This project was a ton of fun to create, while getting mroe intimate knowledge of React. Thanks for stopping by, enjoy the application, and don't forget to celerate your accomplishments!
    

