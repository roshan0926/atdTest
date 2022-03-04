# ATD travel dev test 

## Getting started to view this project on your localhost: 

1. clone the repository 
2. run 'npm i' to install all the dependencies 
3. run 'npm start' to start the development server 
4. go to http://localhost:3000/ 

## functionality 

This single page web app gathers data from ATD travel's API and displays the different travel options available in a table. The results can be queried through the search bar which dynamically shows results of what you’re searching for as you type. 

## My approach 

After reading the test prompt I know I want to use react as my framework in order to make use of some common react hooks such as useEffect and UseState. I also think using axios will be beneficial as it simplifies the task of getting the data from the API. I'll first start by setting up my react app with 'create-react-app' and clean up some of the unnecessary files that I won’t be needing. I will then create a component for my single page being Products.jsx. In this file I will start by declaring the component and writing some skeletal html such as my title form and table with a few place holder pieces of data. Following I'll retrieve the data from the API using axios as store it in the state. Continuing I will do some simple destructuring of the data to obtain the image url, title and destination of each object. Once I have the data from each object that I need, I can make use of react's jsx files and include JavaScript within my html to render each row of the table with unique data, making sure it will only render once the data has been obtained from the API to prevent any errors of an empty page. Lastly, I will implement the search functionality by simply filtering through my data and only displaying results which corresponds with what is being typed in. I can make it change dynamically as the user types by storing the event of the search term in the state. I will finish everything off by adding some styles.