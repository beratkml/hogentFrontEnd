import {useTable, useRowSelect} from 'react-table';
import useMangas from '../../../api/mangas';
import {COLUMNS} from '../table/columns';
import { useMemo,useCallback, useEffect } from 'react';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
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

  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,selectedFlatRows} = tableInstance;

  return(
    <>
    <Add isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
    <Delete setManga={setManga} selectedFlatRows={selectedFlatRows}/>
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
          rows.map(e=>{
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
    </TableContainer>
    </>
  )
}