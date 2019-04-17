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

# variable "public_key_path" {
#   description = "Public key for ssh purposes"
# }