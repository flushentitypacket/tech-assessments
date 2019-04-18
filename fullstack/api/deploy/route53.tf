resource "aws_route53_zone" "primary_route" {
  name = "${var.domain}"
}

data "aws_route53_zone" "luminopia_dev" {
  name = "luminopia-dev.com."
}

resource "aws_route53_record" "tech_assessment_ns" {
  zone_id = "${data.aws_route53_zone.luminopia_dev.zone_id}"
  type    = "NS"
  ttl     = "60"

  # TODO: This isn't very modular. Should be derived from var.domain or something like that.
  name    = "tech-assessment-fullstack"
  records = ["${aws_route53_zone.primary_route.name_servers}"]
}

resource "aws_route53_record" "main" {
  zone_id = "${aws_route53_zone.primary_route.id}"
  name    = "${var.domain}"
  type    = "A"

  alias {
    name                   = "${module.ecs.alb_dns_name}"
    zone_id                = "${module.ecs.alb_zone_id}"
    evaluate_target_health = true
  }
}
