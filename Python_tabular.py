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

df = pd.read_excel('tmp.xlsx', index_col=0) 

df = pd.read_csv('data.csv')  
