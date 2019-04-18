variable "region" {
  description = "Region that the instances will be created"
  default = "us-east-2"
}

variable "database_name" {
  description = "The database name"
}

variable "database_username" {
  description = "The username for the database"
}

variable "database_password" {
  description = "The user password for the database"
}

variable "domain" {
  description = "The domain of your application"
}

variable "seed_username" {
  description = "username for the user that will be created upon server start"
}

variable "seed_password" {
  description = "password for the user that will be created upon server start"
}
