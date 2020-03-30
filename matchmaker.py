from datetime import datetime, timedelta

# object for the matchmaker queue


class recipientProfile:
    def __init__(self, recipient_name, recipient_email, amount_recieved, date_created, num_donations):
        self._amount_receieved = amount_recieved
        self._date_created = date_created
        self._recipient_name = recipient_name
        self._recipient_email = recipient_email
        self._num_donations = num_donations

        # setting burn rate adjusted amount recieived
        # using a 20$ per week rate to drop rate
        # in other words, drop amount by 0.119$ every hour
        hours_since_creation = (
            (datetime.now - date_created).total_seconds() / 60)
        burn_rate = -0.119
        self._burn_adj_amount_recieved = amount_recieved*burn_rate*time_since_creation

    def get_name(self):
        return self._recipient_name

    def get_email(self):
        return self._recipient_email

    def get_burn_adj_amount_recieved(self):
        return self._burn_adj_amount_recieved

    def get_date_created(self):
        return self._date_created

    def get_num_donations(self):
        return self._num_donations

    # reference: https://portingguide.readthedocs.io/en/latest/comparisons.html
    def __eq__(self, other):
        return (self._burn_adj_amount_recieved == other._burn_adj_amount_recieved) & (self._num_donations == other._num_donations) & (self._date_created == other._date_created)

    def __ne__(self, other):
        return not (self._burn_adj_amount_recieved == other._burn_adj_amount_recieved) & (self._num_donations == other._num_donations) & (self._date_created == other._date_created)

    # TODO: Finish the comparisons in the obj for less than, greater than, etc.
    def __lt__(self, other):
        if

# use to implement priority queue and house method that will actually return the desired tuple of
# userid and email
class Matchmaker:
