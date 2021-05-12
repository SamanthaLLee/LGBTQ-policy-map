import requests
import constants
from collections import defaultdict

class Bill:
  def __init__(self, id, title):
    self.id = id
    self.title = title

searchEndpoint = 'https://api.legiscan.com/?key='+constants.APIKey+'&op=search&state=all&query='
billEndpoint = 'https://api.legiscan.com/?key='+constants.APIKey+'&op=getBill&id='

billsByState = defaultdict(set)
billsOverview = defaultdict(set)
billsDetails = defaultdict(set)

for q in constants.queries:
    response = requests.get(searchEndpoint+q)
    while True:
        for x in range(50):
            bill = response['searchresults'][str(i)]
            if( int(bill['relevance']) < constants.relevanceThreshold):
                break
            else:
                billsOverview['state'].add( Bill(bill['bill_id'],bill['title']) )

for k, v in billsOverview:
    for b in v:
        response = requests.get(billEndpoint+b['bill_id'])
        billsDetails['bill']['title']
        billsDetails['bill']['description']
        billsDetails['bill']['state_link']
        billsDetails['bill']['status']
   