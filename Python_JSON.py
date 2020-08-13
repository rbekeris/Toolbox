import json

response = 'some response from API Call'

# DUMP response into a .json file
with open('data.json', 'w') as outfile:
  json.dump(response, outfile)
