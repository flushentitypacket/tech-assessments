# Full Stack Take-Home Assessment

## Intro

We have been impressed by the programming ability and technical experience that you've demonstrated so far. 
To further evaluate your skill set in a more realistic scenario we have furnished this take home assignment that uses the same tech stack as we use at Luminopia.

## Overview

This assessment will require you to read and understand backend code which you will interface with by writing frontend code.
We hope this will give you an opportunity to demonstrate your technical skills as a fullstack engineer.

We'd like to respect your time, thus the target time for this project is intended to be less than 4 hours.
Additionally, if you have portfolio items that you feel demonstrate the same technical skills, please share that with your interviewer _instead of_ doing this assessment.

Please feel free to *ask any questions you have along the way*. You will never be penalized for questions!

## Evaluated Criteria

Several elements of the resulting project will be focused on by the reviewer.

1. Code readability (no magic numbers, appropriate variable names)
2. Code maturity (idiomatic, modular, encapsulated, suitable abstraction)
3. Thoroughness / Compliance with the requirements
4. Project structure
5. Development history (try to commit code as you work on the project, we're trying to understand what it would be realistically like to work with you)

There is no need to show off fancy coding style! Code that is understandable is much preferable to code that is cool.

## What you will need

You should have been provided the following:

- URL to the backend API
- source code to the backend API
- username-password credentials to authenticate requests to the backend API

Please reach out if you are missing any of these!

## Deliverable

The completed assessment must be shared with the interviewer as a git repo.
This can either be shared by hosting the project on a git hosting service 
or by sending a [gzipped](https://www.gnu.org/software/gzip/) [git bundle of the repository](https://git-scm.com/docs/git-bundle) via email.

The project must be executable by running `npm install && npm start`, which should serve the project on http://localhost:3000, and should require no additional configuration.
If additional configuration is required, the README must contain instructions.

The repo must include the following:

- React app (details below)
- README with brief notes on your project

### Requirements

You must produce a React app that retrieves channels data from the backend API and displays them as a filterable list.

You should be provided with the API source code, which you should read to figure out how to properly authenticate and retrieve the channels.

- A loading indicator should be displayed to the user while the data is being fetched.
- Channels should be presented to the user in a list that is sorted alphabetically by name and is filterable.
  - Each channel should have its name and video count displayed.
  - The list of channels should be filterable using an input field above the channels list. This field should filter on the channels' names.
- Elements should have some styling.
  - Just some styling. Does not have to be particularly tasteful.
  - Use your own styling. (i.e. do not copy from another source unless it was written by you)
  - Flexibility with varying screen sizes. Please note in your README what range of screen size is allowed.
- *Optional*: There are some security vulnerabilities in the backend implementation. What are they, how would you exploit them, and how would you fix them? Include your answers in your README.
  - Do not spend a huge amount of time on this. We recommend 30 minutes at most.
  - Do not perform any destructive operations! Not a huge deal, but it is just added work for us to reset the server.
  - Depth is more important than breadth. Explain thoroughly what the attack vectors are and how to patch them. (e.g. Got the ssh keys to the DB but not the password? Explain that you can connect to the DB instance but do not have the ability read or modify data, and that the worst possible damage is server shut down.)
- Highlight any note-worthy things about your project in the README that you think are especially good or 
- You may use external libraries
- You may choose any browser compatibility requirement (e.g. "Only works on latest version of Chrome" is acceptable)

We highly recommend [create-react-app](https://github.com/facebookincubator/create-react-app) to get started on a new React app.

## Time

The target time for this project is intended to be less than 4 hours. Do not feel like you need to invest more than that amount of time--if you are missing things that you would have liked to implement with more time, just note what you would have done in your README.
