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
      "Serverless compute that automatically scales to run backend code without managing infrastructure.",
    bestFor: ["REST APIs", "Event Processing", "Cron Jobs", "Microservices"],
    pricing: "Pay only for requests and execution time.",
    benefits: [
      "Operational Excellence",
      "Reliability",
      "Performance Efficiency",
      "Cost Optimization",
    ],
    docs: "https://docs.aws.amazon.com/lambda/",
  },

  ECS: {
    category: "Containers",
    description:
      "Managed container orchestration service for running Docker applications at scale.",
    bestFor: [
      "Microservices",
      "Docker Containers",
      "Enterprise Applications",
    ],
    pricing: "Free control plane. Pay for EC2 or Fargate resources.",
    benefits: [
      "Scalability",
      "Reliability",
      "Operational Excellence",
    ],
    docs: "https://docs.aws.amazon.com/ecs/",
  },

  "AWS Fargate": {
    category: "Containers",
    description:
      "Run containers without provisioning or managing servers.",
    bestFor: [
      "Containerized APIs",
      "Background Workers",
      "Microservices",
    ],
    pricing: "Pay only for CPU and memory used.",
    benefits: [
      "Cost Optimization",
      "Scalability",
      "Operational Excellence",
    ],
    docs: "https://docs.aws.amazon.com/fargate/",
  },

  S3: {
    category: "Storage",
    description:
      "Highly durable object storage for static assets, uploads, backups and generated files.",
    bestFor: [
      "Images",
      "Videos",
      "Backups",
      "Static Websites",
    ],
    pricing: "Pay for storage, requests and bandwidth.",
    benefits: [
      "Durability",
      "Scalability",
      "Reliability",
    ],
    docs: "https://docs.aws.amazon.com/s3/",
  },

  DynamoDB: {
    category: "Database",
    description:
      "Fully managed NoSQL database delivering single-digit millisecond performance at any scale.",
    bestFor: [
      "Serverless Apps",
      "Gaming",
      "IoT",
      "High Traffic Systems",
    ],
    pricing: "On-demand or provisioned capacity.",
    benefits: [
      "Performance Efficiency",
      "Reliability",
      "Scalability",
    ],
    docs: "https://docs.aws.amazon.com/dynamodb/",
  },

  "Amazon Aurora Serverless v2": {
    category: "Database",
    description:
      "Auto-scaling relational database compatible with MySQL and PostgreSQL.",
    bestFor: [
      "Transactional Systems",
      "SaaS Platforms",
      "Enterprise Apps",
    ],
    pricing: "Pay for actual database capacity consumed.",
    benefits: [
      "Performance",
      "Reliability",
      "Cost Optimization",
    ],
    docs: "https://docs.aws.amazon.com/aurora/",
  },

  Cognito: {
    category: "Security",
    description:
      "Secure user authentication, authorization and identity management.",
    bestFor: [
      "Login",
      "OAuth",
      "MFA",
      "User Management",
    ],
    pricing: "Free tier available then pay per active user.",
    benefits: [
      "Security",
      "Operational Excellence",
    ],
    docs: "https://docs.aws.amazon.com/cognito/",
  },

  "API Gateway": {
    category: "Networking",
    description:
      "Create secure REST, HTTP and WebSocket APIs with authentication and throttling.",
    bestFor: [
      "REST APIs",
      "Mobile Apps",
      "Serverless Backends",
    ],
    pricing: "Pay per API request.",
    benefits: [
      "Security",
      "Reliability",
    ],
    docs: "https://docs.aws.amazon.com/apigateway/",
  },

  CloudFront: {
    category: "Content Delivery",
    description:
      "Global CDN that delivers content with low latency and high transfer speeds.",
    bestFor: [
      "Static Sites",
      "Media",
      "APIs",
    ],
    pricing: "Pay for bandwidth and requests.",
    benefits: [
      "Performance",
      "Reliability",
      "Security",
    ],
    docs: "https://docs.aws.amazon.com/cloudfront/",
  },

  SNS: {
    category: "Messaging",
    description:
      "Publish/subscribe messaging service for notifications and event fan-out.",
    bestFor: [
      "Email",
      "SMS",
      "Alerts",
      "Event Processing",
    ],
    pricing: "Pay per notification delivered.",
    benefits: [
      "Reliability",
      "Scalability",
    ],
    docs: "https://docs.aws.amazon.com/sns/",
  },

  SQS: {
    category: "Messaging",
    description:
      "Highly reliable message queue that decouples distributed applications.",
    bestFor: [
      "Background Jobs",
      "Queues",
      "Microservices",
    ],
    pricing: "Pay per request.",
    benefits: [
      "Reliability",
      "Scalability",
    ],
    docs: "https://docs.aws.amazon.com/sqs/",
  },

  AppSync: {
    category: "API",
    description:
      "Managed GraphQL API service with real-time subscriptions and offline support.",
    bestFor: [
      "GraphQL APIs",
      "Mobile Apps",
      "Realtime Apps",
    ],
    pricing: "Pay per request and connection.",
    benefits: [
      "Performance",
      "Scalability",
    ],
    docs: "https://docs.aws.amazon.com/appsync/",
  },

  Athena: {
    category: "Analytics",
    description:
      "Query data stored in S3 using standard SQL without managing servers.",
    bestFor: [
      "Analytics",
      "Business Intelligence",
      "Ad-hoc Queries",
    ],
    pricing: "Pay per TB scanned.",
    benefits: [
      "Cost Optimization",
      "Performance",
    ],
    docs: "https://docs.aws.amazon.com/athena/",
  },

  "Kinesis Data Firehose": {
    category: "Streaming",
    description:
      "Capture and deliver real-time streaming data into AWS analytics services.",
    bestFor: [
      "Logs",
      "Analytics",
      "Streaming Data",
    ],
    pricing: "Pay per GB ingested.",
    benefits: [
      "Scalability",
      "Performance",
    ],
    docs: "https://docs.aws.amazon.com/firehose/",
  },

  QuickSight: {
    category: "Business Intelligence",
    description:
      "Interactive dashboards and visual analytics powered by machine learning.",
    bestFor: [
      "Dashboards",
      "Reports",
      "Business Intelligence",
    ],
    pricing: "Per-user or session pricing.",
    benefits: [
      "Performance",
      "Operational Excellence",
    ],
    docs: "https://docs.aws.amazon.com/quicksight/",
  },

  VPC: {
    category: "Networking",
    description:
      "Securely isolate cloud resources inside your own virtual private network.",
    bestFor: [
      "Private Infrastructure",
      "Networking",
      "Enterprise Security",
    ],
    pricing: "No additional cost beyond resources.",
    benefits: [
      "Security",
      "Reliability",
    ],
    docs: "https://docs.aws.amazon.com/vpc/",
  },
}