# Fide Ratings AWS Lambda

A lambda function that wraps my [fide-ratings-scraper](https://github.com/xRuiAlves/fide-ratings-scraper/) project.

## Infrastructure Configuration and Management

To manage the infrastructure of the Lambda, use the Terraform definitions from the [terraform](terraform/) directory.

## Usage

The function takes query two query parameters:

- `fideId`: The player's numeric FIDE identifier;
- `operation`:
    - `getPlayerElo`: Returns the player ELO;
    - `getPlayerHistory`: Returns the player ratings history;
    - `getPlayerRank`: Returns the player rank;
    - `getPlayerFullInfo`: Returns the full player information;
    - `getPlayerPersonalData`: Returns the player personal data.

For more information regarding the content/format of the responses, please refer to the [fide-ratings-scraper API documentation](https://github.com/xRuiAlves/fide-ratings-scraper/blob/master/README.md#api).

## License

[MIT](https://github.com/xRuiAlves/fide-ratings-lambda/blob/master/LICENSE)
