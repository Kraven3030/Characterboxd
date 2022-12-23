# Product Spec for Characterboxd

<aside>
💡 Characterboxd is a clone of Letterboxd, an app and website to review movies, and let users share and connect around those reviews.

</aside>

# 👀 Requirements

> Project 3**:**
> 
> 1. A link to your project github repo
> 2. Your project idea (a brief 2-3 sentence description of your app)
> 3. A list of each team member's role
> 4. A list of each model, its properties, and any relationships it may have with other models/APIs.
> 5. A route table for your API
> 6. User Stories
> 7. Wireframes: Must include every component and page that your app will have
- 

---

# 💭 Proposal

> Our Project**:**
> 
> 1. https://github.com/Kraven3030/Characterboxd [https://github.com/Kraven3030/Characterboxd](https://github.com/Kraven3030/Characterboxd)
> 2. Chracterboxd is a clone, or homage to Letterboxd. It will not have all of the features such as custom feeds or following other users, but it will have the ability for users to create and share reviews for a multitude of different movies and shows. 
> 3. Blake- GitHub and SCRUM
> Rory- API and Database
> Bren- Documentation and Designer
> 4. This app will incorporate three models: users, reviews, and titles:
>     1. Users will have limited functionality including only, create, delete, and update and will only be related to reviews
>     2. Reviews will have full CRUD functionality and be related to both users and titles
>     3. Titles will only have read functionality and be related to reviews. It is entirely dependent on the Third Party API we are using for images and description. 
>         1. The third party API we are using for this is called The Movie Database API: [https://developers.themoviedb.org/3/getting-started/introduction](https://developers.themoviedb.org/3/getting-started/introduction)
>         2. It will allow us to populate an image for a title so users cannot put crazy unrelated images for an intellectual property. We will also include a title, description, genres, and release date form the API so we are not reliant on users for those.
- 

---

# 🛫 Plan

> **5. Route Table:**
> 
> 
> 
> | HTTP Verb | Model | Path | REST Action | Purpose |
> | --- | --- | --- | --- | --- |
> | GET | Title/Review | /title/:id | Index | See reviews on a title |
> | PUT | User | /user/signup | Create | Submit new user for to add a user to database |
> | PUT | User | /user/:id/submit | Update | Submit changes to user |
> | DELETE | User | /user/:id/delete | Destroy | Delete a user account from database |
> | GET | User/Review | /user/:id | Index | See reviews from a user |
> | POST | Review/Title | /title/:id/review/add | Create | Submit a new review to the database |
> | PUT | Review/Title | /title/:id/review/:id/update | Update | Submit changes from form to review |
> | DELETE | Review/Title | /title/:id/review/:id/delete | Destroy | Delete a review from the database |
> 
> **6. User Stories:**
> 
> - “As a film buff I love to review movies, so a platform to do that is perfect for me. Additionally it allows me to see other user’s reviews and connect to them on shared opinions.”
> - “As a social media addict, I cannot get enough social media platforms, this is one focused solely on TV/Film, which fills a void that is not otherwise covered by the major 3 social media platforms.”
> - “As a technical placement recruiter, this is a good showcase of the Dev Team’s skills and abilities. They deployed a functional product in a limited time-frame that shows their ability to develop in React while adhering to accessibility standards for websites.”
> - “As a software developer, I like to see how they implemented the MovieDB API as a central component of their website. The integration is done well and adds to the user experience.”
> - “As a designer, I think the design of their website is clean and streamlined. They delivered a straightforward and easy-to-use user interface that has powerful functionality for reviewing movies and TV shows.”
> 
> **7. Wire Frames:**
> Home Page
> 
> <img width="463" alt="Screen Shot 2022-12-19 at 12 03 44 PM" src="https://user-images.githubusercontent.com/115426977/208535674-c8758e89-32d2-4ee3-8c81-bdc75930bebc.png">
> 
> Index of reviews by title
> 
<img width="412" alt="Screen Shot 2022-12-19 at 12 39 35 PM" src="https://user-images.githubusercontent.com/115426977/208536174-3a47bab9-6a4c-40a6-85b6-ecd4b28411fe.png">

> 
> Index of reviews by a user
> 
> <img width="399" alt="Screen Shot 2022-12-19 at 12 50 57 PM" src="https://user-images.githubusercontent.com/115426977/208536309-e0a338b1-5170-4fe7-920d-52ae9e88bdf2.png">

> User sign in
> 
<img width="400" alt="Screen Shot 2022-12-19 at 12 59 34 PM" src="https://user-images.githubusercontent.com/115426977/208536727-0980b0a3-6835-4565-9644-a5fbb5606016.png">

> 
> User sign up
> 
<img width="323" alt="Screen Shot 2022-12-19 at 1 02 28 PM" src="https://user-images.githubusercontent.com/115426977/208536814-b361c5e0-37ef-4908-a041-62641e4e6e58.png">

> 
> Add a new review
> 
<img width="363" alt="Screen Shot 2022-12-19 at 1 17 52 PM" src="https://user-images.githubusercontent.com/115426977/208536911-d807466c-79ee-43b5-86d4-e93188967d4e.png">

> 
> Edit/delete review

<img width="299" alt="Screen Shot 2022-12-19 at 1 19 29 PM" src="https://user-images.githubusercontent.com/115426977/208536977-41505029-c024-4676-a33a-675d00c119fe.png">



> 💡, 🎥, 🎬*It’s show time!*
>
