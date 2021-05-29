import { document } from "../utils/dynamodbClient";
import { APIGatewayProxyHandler } from "aws-lambda";
import { v4 as uuid } from "uuid";

interface ICreateTask {
  title: string;
  deadline: Date;
}

export const handle: APIGatewayProxyHandler = async (event) => {
  const { user_id } = event.pathParameters;
  const { title, deadline } = JSON.parse(event.body) as ICreateTask;

  const task = {
    id: uuid(),
    user_id,
    title,
    done: false,
    deadline: new Date(deadline).toISOString()
  };

  await document.put({
    TableName: "tasks",
    Item: task
  }).promise();

  return {
    statusCode: 201,
    body: JSON.stringify({
      message: "Task created!",
      task
    }),
    headers: {
      "Content-type": "application/json",
    },
  };
}