# Inspiration Station
***

Overview: 
Welcome to Inspiration Station - a web app designed for anyone in need of a little inspiration! 
Built using 2 external APIs this web-app offers the user thousands of quotes to draw inspiration from and to think about and also a hobby page with a  randomly generated hobby and corresponding Wikipedia page to give you all the details you need to get started. 
Feeling uninspired lately? Need a new Hobby? Inspiration Station has you covered! Our application has thousands of quotes to lift your spirits and a random hobby generator with a corresponding Wikipedia link to give you all the details you need to get started. 

Project Name: Inspiration Station
Timeframe: Two Days
Pair Coded Project - Omar Al-Sanea and Dani Gordon

Deployment
Our SPA, Inspiration Station, has been deployed using Netlify and is available to check out here!
Installation Instructions:
Clone repo --> npm install --> npm start
The Brief
The web-app must:
Consume a public API.
Have several components.
Use react-router-dom for routing.
Technologies Used
Front-End
React
Axios
React Router Dom
Public APIs
Quotes API
Hobbies API 
Development Tools
Postman
Netlify (deployment)
Git & GitHub
1) Planning
Due to the project having a strict 48-hour deadline, we planned on only spending half of the first day in the planning stage. The planning however took up the entirety of the first day as finding an external API that was suitable proved to be a real challenge. We experimented with many different APIs but we found that many had CORS issues, required registration and payment, had low call-limits or the data was simply unusable. Eventually we found the quotes API and agreed that this would be suitable and the data functioned as it was supposed to. The problem however was that this API wouldn’t make enough content for the project and so we decided to find another API to combine with the first. We found a hobbies API that functioned correctly and we decided to utilise this and combined the two to create InspirationStation.
Although the brief stated that we only needed one external API and we were using two the workload didn’t double because of this. Once we had the code figured out for one it wasn’t too difficult to replicate this for the other.  
After settling on the two external APIs to use we then created wireframes: 


As can be seen from the wireframes we were originally planning on having more user interaction with the page - with a registered and logged in user able to submit their favourite quotes or hobbies if they didn’t seem to be present on the site.   
This wasn’t feasible in the end as we had sunk one day into the planning and only had one day to really build the web app. 
We also agreed on trying to incorporate Bulma into our styling as we had only recently been shown this way and we were keen to explore other ways of applying styling to our work.
2) Functionality
In our first experience with using React, we created Axios requests to receive the relevant endpoints with an accompanying component.
We created routh paths in the App.js file to each of the areas of the web app: 
 
 

Within both the hobbies component and the quotes component we made use of async await functions, State and useEffects. Prior to starting the project we had a very rudimentary understanding of State but over the course of this project it became clearer to us both the necessity and the power of it. 
Below shows all three of these particular examples of code: 

As can be seen, we also made sure to include try...catch statements. If the Try block throws an exception then the code in the Catch block will be executed. We saw no need to have a Finally block as the function was simple. 
Lastly, we included the reload function so that if the user didn’t like that particular quote or hobby or wanted to see more they could just keep pressing the button. 
3) Styling
As mentioned previously, we included Bulma for the styling of the project (where it made sense) in order to learn more about it and better understand it. We found that it was fantastic as a way of styling and was very user friendly but was slightly limiting. Due to the strict time frame of the project, we kept the design fairly minimalistic and clean.
 
 
 
 





 
 
 
 
 
 
Wins & Blockers
Wins
Successfully connecting and retrieving the necessary data from both API’s.
Utilising Bulma for the first time and using it in conjunction with the CSS we were already accustomed to. 
Gaining a more expansive understanding of Postman.
Using React for the first time and learning how useState and useEffect work.
Pair coding a project in a 48-hour deadline over Zoom was a great way to develop both planning and collaborative skills.
Blockers
Finding a free API that had usable data, no call limits and no CORS issues was without a doubt the biggest blocker and the one we least expected. It also meant that because we were relying on an external API we were severely limited in what we could produce as the data was already dictated and we had to adjust and adapt our project to suit it.
Being selective about what parts of the data we wanted to call and then formatting it so as to make sense to the user and deliver a good user experience.
Due to not having used React before we found that State, Use Effect etc were tricky to implement at first.
Bugs
The user can register but is unable to login due to a CORS error.
The site has full functionality for the user without having to register or login.
Currently, the random Hobbies button only pulls from the “general” category instead of all 6 categories within the API.
Future Improvements
Some additional features I would like to add to improve the app and create a more in-depth user experience:
Login functionality/CORS error resolution
Functionality for the user to add their own quotes or hobbies
Responsive design to allow users to play in mobile/tablet mode
A more unique approach to the styling of all pages
For the Random Hobbies page to pull from all 6 various categories within the API
Key Takeaways
Working in a team for the first time was a great experience of how to problem-solve together. The approach was congruent throughout, and our goals for any set period were always clear and ultimately achieved. The ability to talk through a plan with a colleague and clearly lay out what needed doing further emphasised the importance of this aspect of development. Additionally creating a first project using React was instrumental in highlighting its power, and I will definitely seek to use the framework in many future projects.
 
 
I learned a lot throughout this process including how to send Axios POST requests with headers utilizing an X-API-key, connect third party API’s and pull data from those APIs to display information in a practical and usable format. One thing I wasn’t fully aware of, but learned as well, is that there are a lot of free APIs that are not kept up-to-date or have information in a format that makes it difficult to grab specific pieces of data from them.
 
 
Despite the very short time frame (made shorter by having such a difficult time actually finding APIs that were suitable) I learnt a lot over the two days completing this project.
 
Excalidraw - I had already used Excalidraw for the project 1 wireframing and it was good to get more practice in project 2. 
Postman - We had some experience of using Postman but this project is where that knowledge was really solidified. 
APIs - In my experience with this project good external APIs aren’t easy to come by and this should be factored into any project of this nature. 
useState/useEffect - Understanding more clearly how useState and useEffect function. 
Bulma - Utilising Bulma in our styling for the first time and growing accustomed to its syntax. 
Presenting - I did the presentation for this project and although we did daily stand-ups on this course this presentation was still a good opportunity for publicly presenting a project. 
Pair coding - This project was a great experience in pair coding and I was lucky to have been paired with Dani. We were able to tackle the various challenges together and bounce creative ideas off each other with ease. 
