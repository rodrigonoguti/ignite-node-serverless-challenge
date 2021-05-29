# ignite-node-serverless-challenge
Rocketseat Ignite challenge to get used to serverless implementation

Main technologies and tools:
- NodeJS
- Typescript
- Serverless
- DynamoDB

To run the project on localhost, follow the steps:
- Clone the repository
- Configure your AWS credentials:
```
serverless config credentials --provider aws --key=<YOUR_AWS_KEY> --secret <YOUR_AWS_SECRET>
```
- Install DynamoDB using serverless framework
```
serverless dynamodb install
```
- Install dependencies with ```yarn```
- Run DynamoDB with ```yarn dynamo:start```
- Run project with ```yarn dev```

Available routes:
- POST http://localhost:3000/dev/createTask/{user_id}
```
{
	"title": "Task test",
	"deadline": "2022-01-01 00:00:00"
}
```
- GET http://localhost:3000/dev/getTasks/{user_id}
