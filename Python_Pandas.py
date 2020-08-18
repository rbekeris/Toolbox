import pandas as pd
import numpy as np 

#Prepare a cample dataframe 
df_1 = pd.DataFrame()
dates = pd.date_range('19950801',periods=10)
df = pd.DataFrame(np.random.randn(10,4),index=dates,columns=list('ABCD'))

#List all columns
print(df.columns)

#List column datatyupes
print(df.dtypes)

#List all unique values in a column
df['colname'].unique().tolist()

#Replace string in all column names
df.columns = df.columns.str.replace(r"[A]", "Not_A")

#Replace values in a column to new values
df['colname'] = df['colname'].replace(['Old_1','Old_2','Old_3'],['New_1','New_2','New_3']) 

#Drop column (.drop(1=column, 0=row))
df = df.drop('B', 1)

#Drop first 3 rows
df.drop(df.index[:3], inplace=True)

#REGEXP---{find any number of consecutive integers before ')' character}
df['colname'] = df['colname'].str.extract(r'(\d+(?=\)))')

