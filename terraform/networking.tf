variable "personal-domain" {
  type = string
  description = "The domain to use for the lambda function."
}

resource "aws_route53_zone" "tech" {
  name = "tech.${var.personal-domain}"
}

resource "aws_route53_record" "lambda" {
  zone_id = aws_route53_zone.tech.zone_id
  name    = "fide-ratings.${aws_route53_zone.tech.name}"
  type    = "CNAME"
  alias {
    name                   = aws_lambda_function_url.fide-ratings.function_url
    zone_id                = aws_route53_zone.tech.zone_id
    evaluate_target_health = true
  }
}
