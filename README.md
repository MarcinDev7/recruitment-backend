# recruitment-backend

Backend app

If you are using vs code I would suggest using https://marketplace.visualstudio.com/items?itemName=GraphQL.vscode-graphql-syntax to highlight the syntax

## Prerequisites

- Node 16.20.1
- mongo credentials
- Set up your own .env based on env-example (DB_PASSWORD AND DB_USERNAME IS NEEDED)

## Run the project

- You can run the project simply running `npm i` then `npm run start`

## Short description and feedback

I have developed an application that retrieves data from two public APIs. One API is utilized for fetching dog facts, while the other is set for retrieving dog images. The query for dog facts requires authentication.
For authentication, I opted to use Auth0 since there is an existing built-in plugin in graphql-yoga to facilitate authentication processes.
To maintain access logs, I developed a custom plugin responsible for writing logs directly to a MongoDB database. I utilized a free MongoDB cluster to store all the log data securely.
To fulfill the typescript criteria I've decided to use codegen to generate all the necessary graphql typing.
Schema stitching is configured separately in the getGatewaySchema.ts file to ensure a modular and organized setup.

Feedback
I must admit that this task can take a lot of time that people might not have. However, I decided to undertake it because I genuinely enjoy working with GraphQL, and I have fond memories from when I used it at a previous company. It's been a while since I built everything from scratch, so setting up the project took some time. From configuring types with Mongoose to choosing the right libraries and understanding how schema stitching works, there was a learning curve involved.
I've decided to add generated types for each schema separately so it is included in separate directories. It seems easier to maintain.

I initially intended to establish a distinct collection dedicated to storing user data; however, this would have required additional time for implementation. Consequently, I opted to store only the provider user id for the time being.

I had considered utilizing an httpOnly cookie to pass the token for enhanced security; however, due to time constraints, I was unable to implement it at this time.
