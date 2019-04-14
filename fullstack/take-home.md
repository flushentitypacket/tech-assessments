# React Take Home Question

## Intro

We have been impressed by the programming ability and technical experience that you've demonstrated so far. To further evaluate your skill set in a more realistic scenario we have furnished this take home assignment encompassing a variety of directly applicable concepts and methodologies that will be required as you work at Luminopia.

This assignment consists of several core features as well as a few optional "icing-on-the-cake" features. The optional features are not expected nor evaluated as a means to boost your performance rating, instead they are simply additional context items that may provide a more enjoyable program for you to work on that more closely mimics the application you will be working on at Luminopia.

## Features

### Overview

You will produce a simple React application that downloads video channel information from an API endpoint, then parses and displays that information to the user in a list.

### Criteria

* README with brief notes on your project.
* Query an API that returns video channels as a JSON serialized response.
  * Some visual element should indicate to the user when the data is loading.
* The channels should be presented to the user in a list that is sorted by name and is searchable/filterable.
  * The channels should be displayed in an alphabetically sorted list along with the number of videos in the channel.
  * The list of channels should be filterable using an input field above the channels list. This field should filter on the channels' names.
* Elements should have some styling.
  * Just some styling. Does not have to be particularly tasteful.
  * Use your own styling, do not import from another source unless it was written by you.
  * *Optional*: Flexibility with varying screen sizes. Please note in your README whether you decided to handle this.
* *Optional*: There are some security vulnerabilities in the backend implementation. What are they, and how could you exploit them? Include your answers in your README.
  * Do not spend a huge amount of time on this. We recommend 30 minutes at most.
  * Do not perform any destructive operations! Not a huge deal, but it is just added work for us to reset the server.

## Getting Started

Highly recommend [create-react-app](https://github.com/facebookincubator/create-react-app) to get started.

## Evaluated Criteria

Several elements of the resulting project will be focused on by the reviewer.

1. Code readability (no magic numbers, appropriate variable names)
2. Code maturity (idiomatic, modular, encapsulated, suitable abstraction)
3. Thoroughness / Compliance with the requirements (if there are any questions, email the interviewer!)
4. Project structure
5. Development history (try to commit code as you work on the project, we're trying to understand what it would be realistically like to work with you)

There is no need to show off fancy coding style! Code that is understandable is much preferable to code that is cool.

## Deliverable

On completion of the project, a git repository should be made accessible, with the resulting React project and code, to the interviewer. This can either be done by hosting the project on a git hosting service or by sending a git bundle of repository via email (`git bundle create luminopia.bundle --all`).

The project should be executable by running `npm install && npm start`, which should serve the project on http://localhost:3000, and should require no additional configuration. If additional configuration is required, the README must contain instructions.
