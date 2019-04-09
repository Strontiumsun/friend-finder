# files that I need for this assignment (and what goes in them)

1. server.js
    This file contains
    - the connection to the database
    - requirements for express and path
    - establishing the local host
2. htmlroutes.js
    This file contains
    - A GET Route to `/survey` which should display the survey page.
    - A default, catch-all route that leads to `home.html` which displays the home page.
    - requirements for express and path
    - requirements for exports?
3. apiRoutes.js
    This file contains
    - A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
    - A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    - requirements for express, mysql and path
    - connectivity with the database
4. schema.sql
    This file contains
    - the basis for my database. I will use this to plan it out and fill it with at least two dummy data sets

# I need to set this assignment up with Heroku. 

---

create an array of total differences = []
First loop through the array of people
outer loop with loop through the profiles in our Database
 make a variable var comparsion
then once we loop it, for every person inside of the profile's array we loop through that and get the scores - position 2
inside THIS Loop, you compare it to the new user-submitted row
user 1's score compared to other user's score
    compare user 1 [x,y,z] to user 2 [x,y,z] 
    comparsion += user 1[i] - user2[j]
after inner loop finishes, push comparison into total differences array
differences.push(comparison)
The differences will be in order

Use math.min to find smallest number and it's position
it'll indicate who that user is
then we send that to the front end with the matched person's data



Make sure you grab the person first and store it in the route


