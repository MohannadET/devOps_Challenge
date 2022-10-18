output "base_url" {
  value = "${aws_api_gateway_deployment.challenge.invoke_url}"
}