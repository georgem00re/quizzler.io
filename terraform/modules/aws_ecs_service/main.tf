
resource "aws_ecs_service" "this" {
	name = var.name
	cluster = var.cluster_id
	task_definition = var.task_definition_arn
	desired_count = var.desired_count
}