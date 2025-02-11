import datetime

def func(date):
        date_obj = datetime.datetime.strptime(date, "%Y-%m-%d %H:%M:%S")
        now = datetime.datetime.now()
        time=now-date_obj
        minutes_of_live= time.total_seconds()/60
        return minutes_of_live


date_str = "1992-07-08 04:00:45"
print(func(date_str))