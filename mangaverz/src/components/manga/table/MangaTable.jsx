import {useTable, useRowSelect,usePagination} from 'react-table';
import useMangas from '../../../api/mangas';
import {COLUMNS} from '../table/columns';
import { useMemo,useCallback, useEffect } from 'react';
import { Box, Button, ButtonGroup, Center, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import {ArrowBackIcon,ArrowForwardIcon} from '@chakra-ui/icons'
import { Checkbox } from './Checkbox';
import Delete from '../../topbar crud/Delete';
import Add from '../../topbar crud/Add';

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
    <TableContainer>
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
            <Tr {...e.getRowProps()}>
              {
                e.cells.map(e=>{
                  return <Td {...e.getCellProps()}>{e.render('Cell')}</Td>
                })
              }
            </Tr>
            )
          })
        }
      </Tbody>
    </Table>
    <Center>
    <ButtonGroup>
      <Button onClick={handlePrevious} colorScheme='facebook' disabled={!canPreviousPage}><ArrowBackIcon/></Button>
      <Button onClick={handleNext} colorScheme='facebook' disabled={!canNextPage}><ArrowForwardIcon/></Button>      
    </ButtonGroup>
    </Center>
    
    </TableContainer>
    </>
  )
}