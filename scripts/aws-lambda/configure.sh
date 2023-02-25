region="eu-west-1"
arn="arn:aws:lambda:eu-west-1:264967027223:function:fide-ratings"
timeout=60

aws lambda update-function-configuration \
    --region $region \
    --function-name $arn \
    --timeout $timeout
