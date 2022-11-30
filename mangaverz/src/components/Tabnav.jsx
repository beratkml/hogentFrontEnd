import {Tabs,TabList,TabPanel,TabPanels,Tab} from '@chakra-ui/react'
import Add from './topbar crud/Add';
import Delete from './topbar crud/Delete';
export default function Sidebar(hookprop){
  const {isOpen,onOpen,onClose,idArr,setIdArr,manga,setManga} = hookprop;
  
  const acties = [{
    action:'Add',
    component:<Add isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
  },
  {
    action:'Delete',
    component:<Delete manga={manga} setManga={setManga} idArr={idArr} setIdArr={setIdArr}/>
  },];
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
          return <TabPanel key={p}>{e.component}</TabPanel>
        })}
      </TabPanels>
    </Tabs>
    </>
    
  )
}