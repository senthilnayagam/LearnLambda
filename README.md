# LearnLambda
AWS lamba experiments to get ruby, go running on it

have created a standalone ruby implementation which runs on AWS lambda, I use OSX, this ruby is compiled for linux_x86_64 sow ont run on your macs or windows



install aswcli and configure it 





aws lambda list-functions


build the image(zip file for upload)
sh build.sh


deploy with name(you have to create the function name 'hello-ruby' from aws lambda console), uploads the zip file 
deploy.sh 



sh run.sh > log.json


cat outputfile.txt for stdout data returned by ruby script

for checking the info returned by AWS lambda including the runtime and status messages
cat log.json | jq ".LogResult" | tr '""' ' ' |  base64 --decode


further reading

standalone ruby

https://github.com/phusion/traveling-ruby

using this template

https://github.com/phusion/traveling-ruby-hello-demo


