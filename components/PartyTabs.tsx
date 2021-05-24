import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { IBillDetails } from '../models/data';
import BillsTable from './BillsTable';

interface IPartyTabsProps {
  billsData: IBillDetails[]
}

const PartyTabs = ({billsData}:IPartyTabsProps) => {

  const democratBills = billsData.filter(bill => bill.party === 'D')
  const republicanBills = billsData.filter(bill => bill.party === 'R')
  const thirdPartyBills = billsData.filter(bill => bill.party != '' && bill.party != null && bill.party != 'D' && bill.party != 'R')
  const unknownBills = billsData.filter(bill => bill.party === '' || bill.party == null)

  return(
    <Tabs>
        <TabList>
          <Tab>Democrat</Tab>
          <Tab>Republican</Tab>
          <Tab>Third Party</Tab>
          <Tab>Unknown</Tab>
        </TabList>

        <TabPanel>
         <BillsTable 
              billsData={democratBills}
            />
        </TabPanel>
        <TabPanel>
            <BillsTable 
              billsData={republicanBills}
            />
        </TabPanel>
        <TabPanel>
        <BillsTable 
              billsData={thirdPartyBills}
            />
        </TabPanel>
        <TabPanel>
        <BillsTable 
              billsData={unknownBills}
            />
        </TabPanel>
      </Tabs>
  )
};

export default PartyTabs //only one component here