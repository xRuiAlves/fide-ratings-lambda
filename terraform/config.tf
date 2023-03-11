provider "aws" {
  region = "eu-west-1"
}

resource "aws_lambda_function" "fide-ratings" {
  filename      = "fide-ratings.zip"
  function_name = "fide-ratings"
  role          = aws_iam_role.fide-ratings.arn
  handler       = "index.handler"
  runtime       = "nodejs18.x"
  timeout       = 60 # 1 minute
  architectures = [
    "arm64"
  ]
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
