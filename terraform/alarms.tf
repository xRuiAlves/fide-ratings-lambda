variable "fide-ratings-lambda-execution-notification-email" {
  type = string
  description = "The email address to notify on fide-ratings lambda alarms."
}

resource "aws_cloudwatch_metric_alarm" "fide-ratings-lambda-execution-error" {
  alarm_name          = "lambda-failure-fide-ratings-lambda-execution-error"
  comparison_operator = "GreaterThanOrEqualToThreshold"
  evaluation_periods  = "1"
  metric_name         = "Errors"
  namespace           = "AWS/Lambda"
  period              = "60"
  statistic           = "Sum"
  threshold           = "1"

  dimensions = {
    FunctionName = aws_lambda_function.fide-ratings.function_name
  }

  alarm_description = "Alarm for when the fide-ratings lambda function execution fails"

  alarm_actions = [
    aws_sns_topic.lambda-execution-error-notification.arn
  ]
}

resource "aws_sns_topic" "lambda-execution-error-notification" {
  name = "lambda-execution-error-notification"
}

resource "aws_sns_topic_subscription" "lambda_failure_email_subscription" {
  topic_arn = aws_sns_topic.lambda-execution-error-notification.arn
  protocol  = "email"
  endpoint  = var.fide-ratings-lambda-execution-notification-email
}
