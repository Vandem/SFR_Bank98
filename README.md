# FaaS

## Approach
### Openfaas
At first, I tried running my own FaaS setup with Openfaas, but the whole procedure of setting everything up correctly seemed to difficult, tedious and ill explained. It quickly developed into a rabbit hole, so I decided to get out halfway before I was in too deep. (The introduction video for faasd, the slim version of Openfaas, was - for me at least - 15 minutes of buzz words and I was even more confused than before)

### Google Cloud Functions
My next idea was to see what Google had to offer and if they made it a bit less painful to get started. It seemed more straight forward at first and I found better explanatory resources. I wanted to build a firebase app but found out that the functions module cannot be used for free, so I stopped there as well.

### Azure Functions
Having already invested a good amount of time on this exercise, I listened to the feedback of my colleagues who said there are good tutorials for the Azure environment. They were right. Turns out that no matter how sophisticated your platform is, if you don't make it easy to use, people will look elsewhere.

There are plenty of detailed and interactive tutorials for all kind of programming languages and setups and I was able to get things done much quicker.

## Implementation
I used CosmosDB for persisting data and apart from querying for a specific month (see also the comments in the reportsService), it was relatively straight forward.

I wrote services for customers, transactions and reports that implement the logic for the functions. I originally planned to supper CRUD for customers and transactions but we have a lot of assignments these days, so I kept the implementation to a minimum.

## Requests
There is a postman collection in the repo if you want to test things out.
</br>
</br>
</br>

# Serverless-Framework and Claudia.js
I was a bit bummed out by how tedious the setup for Openfaas and Google Cloud Functions was. So of course, the promise of the frameworks to make everything easier and less painful was appealing (hence the gif).
But I know from personal experience with many client side frameworks, that they can be a boon and a curse at the same time.

They are great as long as your requirements are within their scope and you don't want to do black magic or integrate other technologies, environments etc.

So often times, you do get started much faster but sometimes lose as much or even more time on tinkering with the limitations of the framework to get your customer the solution they want/need.