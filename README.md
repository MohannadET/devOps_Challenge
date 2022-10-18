# Demo URL: base_url = https://pu8ephrm66.execute-api.eu-central-1.amazonaws.com/api


# Instructions:

1. Generated API access keys for my account.
2. Created credentials file in the ~/.aws/ directory to configure AWS CLI.
3. Add account profiles to ~/.aws/credentials: Ex. 
```[default]
aws_access_key_id = xxx
aws_secret_access_key = xxx
```
4. Created my Lambda Function api.js inside nodejs folder
5. Created my main.tf Terraform script
6. Initialized Terraform environment  ( ``` terraform init ``` ) 
7. Planned Terraform envirnoment ( ``` terraform plan ``` )
8. Deployed Terraform environment ( ``` terraform deploy ``` )

**Terraform deploy logs:**
```
Do you want to perform these actions?
  Terraform will perform the actions described above.
  Only 'yes' will be accepted to approve.

  Enter a value: yes

aws_api_gateway_rest_api.challenge: Creating...
aws_iam_role.challenge: Creating...
aws_api_gateway_rest_api.challenge: Creation complete after 2s [id=pu8ephrm66]
aws_api_gateway_resource.proxy: Creating...
aws_api_gateway_method.proxy_root: Creating...
aws_api_gateway_method.proxy_root: Creation complete after 1s [id=agm-pu8ephrm66-w7pwahnec0-ANY]
aws_iam_role.challenge: Creation complete after 3s [id=challenge]
aws_lambda_function.challenge: Creating...
aws_api_gateway_resource.proxy: Creation complete after 1s [id=56a1fh]
aws_api_gateway_method.proxy: Creating...
aws_api_gateway_method.proxy: Creation complete after 1s [id=agm-pu8ephrm66-56a1fh-ANY]
aws_lambda_function.challenge: Still creating... [10s elapsed]
aws_lambda_function.challenge: Creation complete after 17s [id=devOps_Challenge]
aws_lambda_permission.apigw: Creating...
aws_api_gateway_integration.lambda: Creating...
aws_api_gateway_integration.lambda_root: Creating...
aws_lambda_permission.apigw: Creation complete after 1s [id=AllowAPIGatewayInvoke]
aws_api_gateway_integration.lambda: Creation complete after 1s [id=agi-pu8ephrm66-56a1fh-ANY]
aws_api_gateway_integration.lambda_root: Creation complete after 1s [id=agi-pu8ephrm66-w7pwahnec0-ANY]
aws_api_gateway_deployment.challenge: Creating...
aws_api_gateway_deployment.challenge: Creation complete after 1s [id=miv1b0]

Apply complete! Resources: 10 added, 0 changed, 0 destroyed.

Outputs:

base_url = "https://pu8ephrm66.execute-api.eu-central-1.amazonaws.com/api"

```

9. After finishing the deployment created my own CI/CD using github actions

10. 


# Resources: https://registry.terraform.io/providers/hashicorp/aws/latest/docs