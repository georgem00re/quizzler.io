variable "aws_region" {
	description = "The AWS region within which resources will be provisioned"
	default = "eu-west-2"
}

variable "bucket_prefix" {
	type = string
	description = "Create a unique bucket name beginning with the specified prefix"
	default = "quizzler-react-app"
}

variable "aws_profile" {
	type = string
	description = "The AWS profile with which resources will be provisioned"
	default = "default"
}

# variable "bucket_name" {
# 	type = string
# 	description = "The name of the S3 bucket"
# 	default = "quizzler-react-frontend"
# }