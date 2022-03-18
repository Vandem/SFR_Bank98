# FaaS

## Approach
### Openfaas
At first, I tried running my own FaaS setup with Openfaas, but the whole procedure of setting everything up correctly seemed to difficult, tedious and ill explained. It quickly developed into a rabbit hole so I decided to get out half way before I was in too deep.

### Google Cloud Functions
My next idea was to see what Google had to offer and if they made it a bit less painful to get started. It seemed more straight forward at first and I found better explenatory ressources. I wanted to build a firebase app but found out that the functions module cannot be used for free so I stopped there as well.

### Azure Functions
Having already invested a good amount of time on this exercise, I listened to the feedback of my colleagues who said there are good tutorials for the Azure environment. They were right. Turns out that no matter how sophisticated your platform is, if you don't make it easy to use, people will look elsewhere.

There are plenty of detailed and interactive tutorials for all kind of programming languages and setups and I was able to get things done much quicker.

## Implementation
I used CosmosDB for persiting data and apart from querying for a specific month (see also the comments in the reportsService), it was relatively straight forward.

I wrote services for customers, transactions and reports that implement the logic for the functions. I originally planned to supper CRUD for customers and transactions but we have a lot of asignments these days so I kept the implementation to a minimum.

## Requests
There is a postman collection in the repo if you want to test things out.


