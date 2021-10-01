import pandas as pd


#CREATE Dataframe
df = pd.DataFrame()

#--------------OUT------------------------>

#SAVE Dataframe to Excell 
df.to_excel("output.xlsx") 

#SAVE Dataframe to CSV
df.to_csv(index=False)

#SAVE Dataframe to CSV
df.to_csv(index=False)


#--------------IN------------------------>

#READ from Excel to Dataframe
df = pd.read_excel('tmp.xlsx', index_col=0)

#READ from CSV to Daqtaframe
df = pd.read_csv('data.csv')

#Red stdin (from CLI prompt)
var_Nr_1 = input()
