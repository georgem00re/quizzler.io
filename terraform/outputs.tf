
output "s3_bucket_arn" {
	value = module.s3_bucket.arn
}

output "iam_user_access_key_id" {
	value = module.iam_user.access_key_id
	sensitive = true
}

output "iam_user_secret_access_key" {
	value = module.iam_user.secret_access_key
	sensitive = true
}

output "update_s3_bucket_iam_role" {
	value = module.update_s3_bucket_iam_role.arn
}

output "update_ecr_repository_iam_role" {
	value = module.update_ecr_repository_iam_role.arn
}