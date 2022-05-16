# Inspiration Station
***

Feeling uninspired lately? Need a new Hobby? Inspiration Station has you covered! Our application has thousands of quotes to lift your spirits and a random hobby generator with a corresponding Wikipedia link to give you all the details you need to get started. This application calls on 2 external API’s and was built by Dani Gordon and Omar Al-Sanea over a 48-hour period.

# Site Overview:
### Home Page: 
<img width="350" alt="image" src="https://user-images.githubusercontent.com/99892502/168510370-c060497f-f4a0-471d-b293-cb740da11451.png">

### Register & Login pages:
<img width="281" alt="image" src="https://user-images.githubusercontent.com/99892502/168510433-20576cd7-e981-4cf9-a65f-574957f52949.png">     <img width="281" alt="image" src="https://user-images.githubusercontent.com/99892502/168510438-1577da77-3d39-447e-bedc-4008bc411c4a.png">

### Random Quotes page:
<img width="347" alt="image" src="https://user-images.githubusercontent.com/99892502/168510468-e9905346-a9f2-4a50-9596-ac9fcd04ef48.png">

### Random Hobby page:
<img width="352" alt="image" src="https://user-images.githubusercontent.com/99892502/168510501-9733af10-d761-4fa5-b2b8-59e58f7cada3.png">

### Random Hobby Wikipedia page for more detail:
<img width="352" alt="image" src="https://user-images.githubusercontent.com/99892502/168510542-84622683-fa5a-4580-b9c8-3123e1c83086.png">

# Deployment
Our SPA, Inspiration Station, has been deployed using Netlify and is available to check out [here][https://inspiration-station.netlify.app/]! 

# Installation Instructions:
-	Clone repo --> npm install --> npm start

# Goal and timeframe:
To build a React application that consumes a public API in 48 hours.

# Technologies Used:
-	Front End: React
    - SPA Routing and Components
    - Packages: Axios for API handling, UUID4 for unique IDs
-	Styling: Sass & Bulma
-	Version Control: Git
-	Deployment: Netlify

# Project Overview: 
Initially, we both had ideas on API’s we could use for the project and presented them to each other but found it challenging trying to find an API that would work for what we needed it for. We looked at multiple different API’s and the information provided by those API’s, however, every API we found produced information that was seemingly out of date or not useful. It took us the better part of the first 24 hours to find something we liked, and thought could be useful.  We wanted to utilize a free API and were able to find a Random Quote generator API on API Ninja’s that worked well. We both agreed that even though this API worked well and had 67 different categories, it wouldn’t be enough content for the project. Through the same site, we found a Random Hobby generator API that had 6 different Hobby categories and decided to use them together for our project, calling it “Inspiration Station”.  

Due to the short timeframe for this project, we decided it would be easier to utilize the time we had working together on Zoom while one of us screenshared and coded and the other brainstormed ideas and helped write the code. We started with Excalidraw and created a wireframe for the app. I created a repository in GitHub and Omar cloned it so we could work together and have the same code at the end of the day. Once we created functional Register and Login pages, we created the home page and discussed the design and functionality we wanted. We made sure we were able to pull the data through from the API and have all functions working properly before styling the application. Using Bulma-CSS framework over the last few hours of the project, we created buttons for the Quotes and Hobbies pages in addition to a button on each page that generated a new random quote or hobby the user could click on. 

As you can see from the wireframing diagrams below, we originally planned to have the quotes and hobbies displayed on one page but decided to change the design. Also, we initially wanted the user to be able to add their own quotes or hobbies to the site but had to adapt and consider that as stretch goal. Ultimately, we ran out of time and were unable to add that functionality.  My contributions were linking the API’s in React, creating the navigation bar, creating a working user registration and login page, and linking the quotes and hobbies buttons to their respective pages.

# Wireframes
***

<img width="468" alt="image" src="https://user-images.githubusercontent.com/99892502/168511042-a7061f05-be4d-4e6b-904d-c0ce41fd23d1.png">
<img width="468" alt="image" src="https://user-images.githubusercontent.com/99892502/168511055-e3d94173-b719-4b45-9417-11e07ccefb29.png">

## Bugs: 

-	The user can register but is unable to login due to a CORS error 
-	The site has full functionality for the user without having to register or login
-	Currently, the random Hobbies button only pulls from the “general” category instead of all 6 categories within the API

## Challenges: 

-	Finding a free API that had information we could use for the project.
-	Pulling only the necessary information from the API for the app and displaying it on the front-end in a readable format.


 ## Wins:

-	Successfully connecting and retrieving the necessary data from both API’s 

# Future Improvements/Features
***

Some additional features I would like to add to improve the app and create a more in-depth user experience:

-	Login functionality/CORS error resolution
-	Functionality for the user to add their own quotes or hobbies
-	Responsive design to allow users to play in mobile/tablet mode
-	A more unique approach to the styling of all pages
-	For the Random Hobbies page to pull from various categories within the API




# Key Learnings
***

I learned a lot throughout this process including how to send Axios POST requests with headers utilizing an X-API-key, connect third party API’s and pull data from those APIs to display information in a practical and useable format. One thing I wasn’t fully aware of, but learned as well, is that there are a lot of free APIs that are not kept up-to-date or have information in a format that makes it difficult to grab specific pieces of data from them. 





