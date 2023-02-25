# Fide Ratings Lambda

A lambda function that wraps my [fide-ratings-scraper](github.com/xRuiAlves/fide-ratings-scraper/) project.

## Configuration

To configure the Lambda function, edit `scripts/aws-lambda-bundle.sh`:

- `region`: Lambda function's region
- `arn`: Lambda function's `ARN`
- `timeout`: Lambda function's timeout (in seconds)

Then, run:

```
npm run aws-lambda-configure
```

## License

[MIT](https://github.com/xRuiAlves/fide-ratings-lambda/blob/master/LICENSE)
