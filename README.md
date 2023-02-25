# Fide Ratings AWS Lambda

A lambda function that wraps my [fide-ratings-scraper](github.com/xRuiAlves/fide-ratings-scraper/) project.

## Configuration

To configure the Lambda function, edit `scripts/aws-lambda-bundle.sh`:

- `region`: Lambda function's region
- `arn`: Lambda function's `ARN`
- `timeout`: Lambda function's timeout (in seconds)

Then, run the following script, which leverages the `AWS` `cli`:

```
npm run aws-lambda-configure
```

## Deploying

To deploy the Lambda function, run:

```
npm run aws-lambda-deploy
```

This will:

- Clean the local bundle from previous builds;
- Bundle the function assets in a `zip` file;
- Upload the function's bundle to `AWS Lambda` using the `AWS` `cli`.

## License

[MIT](https://github.com/xRuiAlves/fide-ratings-lambda/blob/master/LICENSE)
