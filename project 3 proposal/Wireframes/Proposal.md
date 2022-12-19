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
> | POST | Review/Title | /title/:id/review/:id/add | Create | Submit a new review to the database |
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
> 
> ![Home Page](Product%20Spec%20for%20Characterboxd%203b8a62a7f9fa432fb676283cac517140/Screen_Shot_2022-12-19_at_12.03.44_PM.png)
> 
> Home Page
> 
> ![Index of reviews by title](Product%20Spec%20for%20Characterboxd%203b8a62a7f9fa432fb676283cac517140/Screen_Shot_2022-12-19_at_12.39.35_PM.png)
> 
> Index of reviews by title
> 
> ![Index of reviews by a user](Product%20Spec%20for%20Characterboxd%203b8a62a7f9fa432fb676283cac517140/Screen_Shot_2022-12-19_at_12.50.57_PM.png)
> 
> Index of reviews by a user
> 
> ![User sign in](Product%20Spec%20for%20Characterboxd%203b8a62a7f9fa432fb676283cac517140/Screen_Shot_2022-12-19_at_12.59.34_PM.png)
> 
> User sign in
> 
> ![User sign up](Product%20Spec%20for%20Characterboxd%203b8a62a7f9fa432fb676283cac517140/Screen_Shot_2022-12-19_at_1.02.28_PM.png)
> 
> User sign up
> 
> ![Add a new review](Product%20Spec%20for%20Characterboxd%203b8a62a7f9fa432fb676283cac517140/Screen_Shot_2022-12-19_at_1.17.52_PM.png)
> 
> Add a new review
> 
> ![Edit/delete review](Product%20Spec%20for%20Characterboxd%203b8a62a7f9fa432fb676283cac517140/Screen_Shot_2022-12-19_at_1.19.29_PM.png)
> 
> Edit/delete review
> 
> 💡, 🎥, 🎬*It’s show time!*
>
