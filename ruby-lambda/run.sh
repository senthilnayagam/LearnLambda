aws lambda invoke \
--invocation-type RequestResponse \
--function-name hello-ruby \
--log-type Tail \
--payload '{"key1":"value1", "key2":"value2", "key3":"value3"}' \
outputfile.txt
