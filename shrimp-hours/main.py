from math import ceil


class Invoice:
    MONTHLY_BILLABLE_DAYS = 22
    BILLABLE_HOURS_PER_DAY = 8

    def __init__(self, *, hourly_rate, num_days, discount_percent):
        self.hourly_rate = hourly_rate
        self.discount_rate = hourly_rate * (1 - discount_percent)

        self.full_rate_days = num_days % self.MONTHLY_BILLABLE_DAYS
        self.discounted_days = num_days - self.full_rate_days

    def __cost_for_days_with_rate(self, days, hourly_rate):
        return days * self.BILLABLE_HOURS_PER_DAY * hourly_rate

    def get_price_with_monthly_discount(self):
        discounted_cost = self.__cost_for_days_with_rate(
            self.discounted_days, self.discount_rate
        )
        full_rate_cost = self.__cost_for_days_with_rate(
            self.full_rate_days, self.hourly_rate
        )
        return ceil(discounted_cost + full_rate_cost)


def main():
    expected = 97972
    invoice = Invoice(hourly_rate=89, num_days=230, discount_percent=0.42)
    actual = invoice.get_price_with_monthly_discount()
    assert actual == expected, f"expected {expected}, got {actual}"


if __name__ == "__main__":
    main()
