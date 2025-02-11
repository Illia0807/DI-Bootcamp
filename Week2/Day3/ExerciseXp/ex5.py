
from datetime import datetime,timedelta
def timer():
        
        now1=datetime.now()
        januar1=datetime(2025,5,31)
        var = januar1-now1
        return var

print(timer())
