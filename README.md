# LearnLambda
AWS lamba experiments to get ruby, go running on it


:)  works now


takes about 500ms for execution  and 15mb memory, binary is about 7mb so could upload directly 


have created a standalone ruby implementation which runs on AWS lambda, I use OSX, this ruby is compiled for linux_x86_64 sow ont run on your macs or windows


# installation
install aswcli and configure it 

https://github.com/aws/aws-cli

on mac 
>  brew install awscli

> aws configure

enter AWS Access Key ID, AWS Secret Access Key , Default region name 

currently AWS lambda is available only in 4 regions, so choose any one , I chose us-east-1


login to https://console.aws.amazon.com/lambda/

upload the zip file built  and test it


# console workflow

list all known functions
> aws lambda list-functions

if your method name is different from 'hello-ruby' modify the shell scripts accordingly

build the image(zip file for upload)
> sh build.sh


deploy with name(you have to create the function name 'hello-ruby' from aws lambda console), uploads the zip file 
deploy.sh 



> sh run.sh > log.json


for stdout data returned by ruby script

> cat outputfile.txt 

for checking the info returned by AWS lambda including the runtime and status messages

> cat log.json | jq ".LogResult" | tr '""' ' ' |  base64 --decode


# further reading

standalone ruby

https://github.com/phusion/traveling-ruby

built app using this template

https://github.com/phusion/traveling-ruby-hello-demo

javascript code to invoke the app came from this blog

http://willyg302.github.io/blog/posts/2015-03-29-python-on-aws-lambda/


# todo

* rake file instead of shell script
* 500ms per execution is high, need to figure out a way to lower it
* need to test how to build and use rubygems (pure ruby and with C"
* code generation for template and other boilerplate code



