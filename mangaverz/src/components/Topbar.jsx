import {Tabs,TabList,TabPanel,TabPanels,Tab} from '@chakra-ui/react'
import Add from './topbar crud/Add';
import Delete from './topbar crud/Delete';
import Read from './topbar crud/Read';
import Update from './topbar crud/Update';
export default function Topbar(){
  const acties = [{
    action:'Add',
    component:<Add/>
  },
  {
    action:'Delete',
    component:<Delete/>
  },
  {
    action:'Update',
    component:<Update/>
  },
  {
    action:'Read',
    component:<Read/>
  }];
  return(
    <>
    <Tabs>
      <TabList>
        {acties.map((e,p)=>{
          return <Tab key={p}>{e.action}</Tab>
        })}
      </TabList>
      <TabPanels>
        {acties.map((e,p)=>{
          return <TabPanel>{e.component}</TabPanel>
        })}
      </TabPanels>
    </Tabs>
    </>
    
  )
}