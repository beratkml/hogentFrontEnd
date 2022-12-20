import {useTable, useRowSelect,usePagination} from 'react-table';
import useMangas from '../../../api/mangas';
import {COLUMNS} from '../table/columns';
import { useMemo,useCallback, useEffect } from 'react';
import { Box, Button, ButtonGroup, Card, CardBody, Center, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import {ArrowBackIcon,ArrowForwardIcon,SettingsIcon} from '@chakra-ui/icons'
import { Checkbox } from './Checkbox';
import Delete from '../../topbar crud/Delete';
import Add from '../../topbar crud/Add';
import Update from '../../topbar crud/Update';
import { Link as ReactLink } from "react-router-dom";

export default function MangaTable(props){
  const {manga,setManga,isOpen,onClose,onOpen} = props;
  const {getAllManga} = useMangas();

  const columns = useMemo(()=>COLUMNS,[]);

  const mangas = useCallback(async()=>{
    const allMangas = await getAllManga();
    setManga(allMangas);
  },[getAllManga,setManga])

  useEffect(()=>{
    mangas();
  },[isOpen,mangas]);

  

  const tableInstance = useTable({
    columns: columns,
    data: manga
  },
  usePagination,
  useRowSelect,
  (tableHooks)=>{
    tableHooks.visibleColumns.push((column)=>{
      return [
        {
          id: 'selection',
          Header: ({getToggleAllRowsSelectedProps})=>(
            <Checkbox {...getToggleAllRowsSelectedProps()}/>
          ),
          Cell:({row})=>(
            <Checkbox {...row.getToggleRowSelectedProps()}/>
          )
        },
        ...column
      ]
    })
  }
  )

  const {getTableProps,getTableBodyProps,headerGroups,page,prepareRow,selectedFlatRows,nextPage,previousPage,canNextPage,canPreviousPage} = tableInstance;
  const handlePrevious = useCallback(()=>{
    previousPage();
  },[previousPage])

  const handleNext = useCallback(()=>{
    nextPage();
  },[nextPage])

  return(
    <>
    <ButtonGroup>
    <Add isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    <Delete setManga={setManga} selectedFlatRows={selectedFlatRows}/>
    </ButtonGroup>
    <TableContainer m={'30px'}>
    <Table size={'sm'} {...getTableProps()}>
      <Thead>
        {
          headerGroups.map((e)=>(
          <Tr {...e.getHeaderGroupProps}>
            {
              e.headers.map(c=>(
                <Th {...c.getHeaderProps()}>{c.render('Header')}</Th>
              ))
            }
          </Tr>
          ))
        }
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {
          page.map(e=>{
            prepareRow(e);
            return (
              <>
              <Tr {...e.getRowProps()}>
              {
                e.cells.map((e,i)=>{
                  return <Td {...e.getCellProps()}><Text width={i===7?'200px':'100%'} textOverflow={'ellipsis'} whiteSpace={'nowrap'} overflow={'hidden'}>{e.render('Cell')}</Text></Td>
                })
              }
              <ReactLink to={`/manga/edit/${e.cells[1].value}`} state={{data:e.cells[1].value}}><Button ml={'10px'}><SettingsIcon/></Button></ReactLink>
            </Tr>
              </>
            
            )
          })
        }
      </Tbody>
    </Table>
    <Center>
    <ButtonGroup m={'20px'}>
      <Button onClick={handlePrevious} colorScheme='facebook' disabled={!canPreviousPage}><ArrowBackIcon/></Button>
      <Button onClick={handleNext} colorScheme='facebook' disabled={!canNextPage}><ArrowForwardIcon/></Button>      
    </ButtonGroup>
    </Center>
    </TableContainer>
    </>
  )
}