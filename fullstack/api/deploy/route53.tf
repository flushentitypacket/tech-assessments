resource "aws_route53_zone" "primary_route" {
  name = "${var.domain}"
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
