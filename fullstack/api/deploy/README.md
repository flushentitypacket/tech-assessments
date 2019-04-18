# fullstack deploy

## Are you a candidate?

Are you a full-stack candidate? Take a look at the [take home assignment](../take-home.md).

You do not need to read anything in this section, but you can poke around if you're curious!

## Overview

- DB: Postgres hosted on RDS
- App: Dockerized node app hosted on ECS Fargate

## Getting started

Set your tfvars:

```sh
# Copy from the example
cp terraform.tfvars.example terraform.tfvars
# Make your changes with the best editor in the world
vim terraform.tfvars
```

Then you can do terraform operations as usual:

```sh
terraform init
terraform plan
```
