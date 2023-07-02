provider "aws" {
  region     = "ap-south-1" 
}

resource "aws_instance" "centos_vm" {
  ami           = "ami-0123456789abcdef" 
  instance_type = "t2.micro" 

  tags = {
    Name = "centos-vm"
  }
}