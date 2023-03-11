provider "aws" {
  region = "eu-west-1"
}

data "archive_file" "zip-lambda-function-source-code" {
  type        = "zip"
  source_dir = "../src"
  output_path = "fide-ratings.zip"
}

resource "aws_lambda_function" "fide-ratings" {
  function_name = "fide-ratings"
  role          = aws_iam_role.fide-ratings.arn
  filename      = "fide-ratings.zip"
  handler       = "index.handler"
  runtime       = "nodejs18.x"
  timeout       = 60 # 1 minute
  architectures = [
    "arm64"
  ]
}

resource "aws_lambda_function_url" "fide-ratings" {
  function_name      = aws_lambda_function.fide-ratings.function_name
  authorization_type = "NONE"
  
  # Allow cors on all origins
  cors {
    allow_credentials = false
    allow_origins     = ["*"]
    allow_methods     = []
    allow_headers     = []
    expose_headers    = []
    max_age           = 0
  }
}

resource "aws_iam_role" "fide-ratings" {
  name = "fide-ratings-lambda-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect    = "Allow"
        Principal = {
          Service = "lambda.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })
}

resource "aws_iam_role_policy_attachment" "fide-ratings-lambda-execution" {
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
  role       = aws_iam_role.fide-ratings.name
}
