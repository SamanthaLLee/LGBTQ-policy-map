import requests
import constants
import json
from collections import defaultdict

searchEndpoint = 'https://api.legiscan.com/?key=' + \
    constants.APIKey+'&op=search&state=all&query='
billEndpoint = 'https://api.legiscan.com/?key='+constants.APIKey+'&op=getBill&id='

billIds = set()
allBills = []

for q in constants.queries:
    isRelevant = True
    pageNum = 1
    while (isRelevant):
        response = requests.get(searchEndpoint+q+'&page='+str(pageNum)).json()
        # response = constants.testJSON
        for i in range(50):
            bill = response['searchresult'][str(i)]
            if(bill is None or int(bill['relevance']) < constants.relevanceThreshold):
                isRelevant = False
                break
            else:
                billIds.add(bill['bill_id'])
        pageNum += 1

for b in billIds:
    billDetails = requests.get(billEndpoint+str(b)).json()
    # billDetails = constants.testBillJSON
    print(b)
    currBill = {}
    currBill['id'] = billDetails['bill']['bill_id']
    currBill['status'] = billDetails['bill']['status']
    if billDetails['bill']['description'] == billDetails['bill']['title']:
        currBill['title'] = "Untitled"
    else:
        currBill['title'] = billDetails['bill']['title']
    currBill['description'] = billDetails['bill']['description']
    currBill['url'] = billDetails['bill']['state_link']
    currBill['date'] = billDetails['bill']['status_date']
    currBill['state'] = billDetails['bill']['state']
    print(len(billDetails['bill']['sponsors']))
    if len(billDetails['bill']['sponsors']) == 0:
        currBill['party'] = 'X'
    else:
        currBill['party'] = billDetails['bill']['sponsors'][0]['party']
    allBills.append(currBill)

with open('allBills.json', 'w', encoding='utf-8') as outfile:
    json.dump(allBills, outfile, ensure_ascii=False, indent=4)
