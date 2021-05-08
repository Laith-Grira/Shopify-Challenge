# Shopify-Challenge
Shopify fron-end challenge Fall 2021

## Purpose
- Shopify has branched out into movie award shows and needs an app to manage that.
- The application will help Shopify manage their movie nominations for the upcoming Shoppies.

## Main Page
The main page includes an search bar for searching movies, a results section for the choosen movies, and a nomination list
![image](https://user-images.githubusercontent.com/59850587/117552488-9f680f00-b019-11eb-8196-39240fc7e3b4.png)

## Searching a movie
Each user's input will filter the results from the OMDB website to display the results.
Each movie result will have the ttle of the movie, its relase date and a button to nominate that movie.
A banner will appear to tell the user to start searching for movies
![image](https://user-images.githubusercontent.com/59850587/117552499-b1e24880-b019-11eb-9319-cfe28eda1c16.png)

## Nominate a movie
If the user clicks on button `Nominate` nest to the movie's title, the desirable movie will appear in the Nominations list
The `Nominate` button in the results list will be disable so that the user doesn't nominate the same movie again
In the nominations list, the nominated movie will have a `remove` button next to it, so that the user will be able to delete a nomination
If the nomination is deleted, the `Nominate` button will be enable again in the search reults so that the user can reselect it again in the future
A banner will appear in the button, telling the user how many nominees left to reach 5 nominees, if more then 5 nominees are selected, the banner will change it's color to red and tells the user that he has surpassed 5 nominees, and also shows how many extra nominees they have.
![image](https://user-images.githubusercontent.com/59850587/117552631-a0e60700-b01a-11eb-9b3c-d09d26652f72.png)



