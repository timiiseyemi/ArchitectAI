export const awsServiceData: Record<
  string,
  {
    category: string
    description: string
    bestFor: string[]
    pricing: string
    benefits: string[]
    docs: string
  }
> = {
  Lambda: {
    category: "Compute",

    description:
      "Run code without provisioning or managing servers.",

    bestFor: [
      "REST APIs",
      "Background jobs",
      "Image processing",
      "Event-driven systems",
    ],

    pricing:
      "Pay only for requests and execution duration.",

    benefits: [
      "Operational Excellence",
      "Reliability",
      "Performance Efficiency",
      "Cost Optimization",
    ],

    docs:
      "https://docs.aws.amazon.com/lambda/",
  },

  S3: {
    category: "Storage",

    description:
      "Highly durable object storage for any amount of data.",

    bestFor: [
      "Static websites",
      "Images",
      "Backups",
      "Data lakes",
    ],

    pricing:
      "Pay for storage, requests and data transfer.",

    benefits: [
      "Security",
      "Scalability",
      "Reliability",
    ],

    docs:
      "https://docs.aws.amazon.com/s3/",
  },

  DynamoDB: {
    category: "Database",

    description:
      "Fully managed NoSQL database with single-digit millisecond latency.",

    bestFor: [
      "Serverless apps",
      "High traffic",
      "Gaming",
      "IoT",
    ],

    pricing:
      "On-demand or provisioned capacity.",

    benefits: [
      "Scalability",
      "Reliability",
      "Performance Efficiency",
    ],

    docs:
      "https://docs.aws.amazon.com/dynamodb/",
  },

  "API Gateway": {
    category: "Networking",

    description:
      "Create and manage REST, HTTP and WebSocket APIs.",

    bestFor: [
      "REST APIs",
      "Microservices",
      "Mobile apps",
    ],

    pricing:
      "Pay per API request.",

    benefits: [
      "Security",
      "Operational Excellence",
    ],

    docs:
      "https://docs.aws.amazon.com/apigateway/",
  },

  CloudFront: {
    category: "Content Delivery",

    description:
      "Global CDN for low latency content delivery.",

    bestFor: [
      "Web apps",
      "Static sites",
      "Media delivery",
    ],

    pricing:
      "Pay for requests and bandwidth.",

    benefits: [
      "Performance Efficiency",
      "Reliability",
      "Security",
    ],

    docs:
      "https://docs.aws.amazon.com/cloudfront/",
  },
}