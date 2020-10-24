from datetime import datetime
from datetime import timedelta
import pytz

today = datetime.now()
datetime_now_with_timezone = datetime.now(pytz.timezone('Europe/Riga'))
time_delta_1 = timedelta(days = 365, hours = 12, minutes = 10, seconds =30, milliseconds= 50, microseconds= 8) #resolution = 1 microsecond
Latvia_male_life_expectancy_in_years = 70
time_delta_2 = timedelta(days = 365)
dt_string_1 = '01.08.1995'
dt_string_2 = "12/11/2018 09:15:32"
dt_string_3 = '2019-01-01T00:00:00+03:00'

# Convert a string to datetime object 
dt_object_1 = datetime.strptime(dt_string_1, '%d.%m.%Y') 
dt_object_2 = datetime.strptime(dt_string_2, "%d/%m/%Y %H:%M:%S")
dt_object_3 = datetime.fromisoformat(dt_string_3)

#Manipulate datetime objects
one_year_birthday = dt_object_1 + time_delta_1
My_age = today - dt_object_1 
Expiry_date = dt_object_1 + time_delta_2*Latvia_male_life_expectancy_in_years

# Convert a datetime object to string
dt_ISO_8601_String = dt_object_3.isoformat()


#return speciffic datetime in other timezone
central_timezone = pytz.timezone("US/Central")
datetime_now_in_US_Central = datetime_now_with_timezone.astimezone(central_timezone)
print(datetime_now_in_US_Central)
