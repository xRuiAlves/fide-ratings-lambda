lambdaEntrypoint="index.mjs"
nodeModules="node_modules"
target="fide-ratings.zip"

zip -r $target \
    $lambdaEntrypoint \
    $nodeModules
