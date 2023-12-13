import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
# Load data from a CSV file into a Pandas DataFrame
df = pd.read_csv("sales_data.csv")
# Display basic information about the dataset


# View the first few rows of the DataFrame


df['Date'] = pd.to_datetime(df['Date'])
print(df)

print("|||||||")

# Create a new feature 'Age' based on the 'Date' column
df['Age'] = df['Date'].dt.year - df['Year']
print(df)


df_encoded = pd.get_dummies(df, columns=['Make', 'Model'], drop_first=True)
pd.set_option('display.max_columns', None)
print("|||||||")
print(df_encoded)
# Perform one-hot encoding for categorical variables
# df_encoded = pd.get_dummies(df, columns=['Make', 'Model'], drop_first=True)
