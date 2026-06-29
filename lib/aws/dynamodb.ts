import {
  DynamoDBClient,
} from "@aws-sdk/client-dynamodb"

import {
  DynamoDBDocumentClient,
  PutCommand,
  ScanCommand,
} from "@aws-sdk/lib-dynamodb"

import { v4 as uuid } from "uuid"

const client = new DynamoDBClient({
  region: process.env.AWS_REGION,

  credentials: {
    accessKeyId:
      process.env.AWS_ACCESS_KEY_ID!,

    secretAccessKey:
      process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

const db =
  DynamoDBDocumentClient.from(client)

const TABLE =
  process.env.DYNAMODB_TABLE!

export async function saveBlueprint(
  project: any,
  blueprint: any
) {
  const item = {
    id: uuid(),

    createdAt: new Date().toISOString(),

    project,

    blueprint,
  }

  await db.send(
    new PutCommand({
      TableName: TABLE,
      Item: item,
    })
  )

  return item
}

export async function getBlueprints() {
  const result = await db.send(
    new ScanCommand({
      TableName: TABLE,
    })
  )

  return result.Items ?? []
}