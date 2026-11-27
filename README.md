# SDEV_255_Final_Project_Elder_Scrolls
Final Project

## Team

- *Brandon:* Project Manager, front-end, QA tester, authentication/security, integrates all team members' work into final project.
- *Hong:* Backend, database.
- *John:* Haven't been in contact with him yet, so we haven't been able to assign any roles. If he ever responds, I imagine he'll take some of Brandon's responsibilities. 


## What it does

- *Course index page* lists every course as a card with a view, edit, and delete button.
- *Add course* will, at a future date, will have a drop down with all of the available courses. Selecting one will autofill the form.

## Front-end choices -Brandon

-**Stuck with React, Vite, TypeScript, and Bootstrap to stay in line with what is being learned through the course's assignments. That way if there's an issue, the textbook may be able to help and we'll be set up to solve it. 

## Pages and routes

| Route | Page|

| '/' | Course index (all courses, Add Course button) |
| '/courses/new' | Add course form |
| '/courses/:id' | Course details |
| '/courses/:id/edit' | Edit course form |

## Current limitations

-Courses are currently in a React state only. Refreshing the page resets the list to the five starter courses.
-No login, no student view, and no backend just yet.
-No catalog dropdown box yet, so a user would need to enter all course details manually.
