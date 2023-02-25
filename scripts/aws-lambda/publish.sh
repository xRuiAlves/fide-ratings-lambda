region="eu-west-1"
arn="arn:aws:lambda:eu-west-1:264967027223:function:fide-ratings"
bundleZipFile="fide-ratings.zip"
zipTarget="fileb://$bundleZipFile"

aws lambda update-function-code \
    --region $region \
    --function-name $arn \
    --zip-file $zipTarget
