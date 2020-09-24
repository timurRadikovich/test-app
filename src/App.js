import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css'
import Loader from './Components/Loader/Loader'
import Table from './Components/Table/Table';
import RowInfoView from './Components/RowInfoView/RowInfoView'
import DataSelector from './Components/DataSelector/DataSelector'
import Search from './Components/Search/Search'
import TableEditor from './Components/TableEditor/TableEditor'
import EditorButton from './Components/EditorButton/EditorButton'

function App() {
  const [isLoading, setIsLoaing] = useState(false)
  const [data, setData] = useState([])
  const [newRows, setNewRows] = useState([])
  const [sortAsc, setSortAsc] = useState(true)
  const [sortedField, setSortedField] = useState('id')
  const [rowInfo, setRowInfo] = useState(null)
  const [dataSource, setDataSource] = useState('')
  const [currentPage, setCurrentPage] = useState(0)
  const [tableData, setTableData] = useState([])
  const [search, setSearch] = useState('')
  const [pageCount, setPageCount] = useState(0)
  const [isEditorClicked, setIsEditorClicked] = useState(false)
  const tableRowCount = 50
  useEffect(() => {
    if (!dataSource) return
    async function getContent() {
      setIsLoaing(true)
      const response = await fetch(dataSource)
      const data = await response.json()
      setIsLoaing(false)
      setSearch('')
      sortData(data, sortedField)
      setData(data)
    }
    getContent()
  }, [dataSource])
  useEffect(() => {
    setPageCount(Math.ceil(filterData().length / tableRowCount))
    setTableData(filterData().slice(tableRowCount * currentPage, tableRowCount * currentPage + tableRowCount))
  }, [data, currentPage, search, newRows])
  const sortData = (data, field) => {
    data.sort((a, b) => {
      if (sortAsc) {
        return a[field] < b[field] ? 1 : -1
      }
      return a[field] < b[field] ? -1 : 1
    })
    setSortAsc(!sortAsc)
    setSortedField(field)
  }
  function onSort(field) {
    const dataClone = data.concat();
    sortData(dataClone, field)
    setData(dataClone)
  }
  function onRowSelect(item) {
    setRowInfo(item)
  }
  function onSelectData(link) {
    setCurrentPage(0)
    setSortAsc(true)
    setDataSource(link)
  }
  function onPageChange(page) {
    setCurrentPage(page.selected)
  }
  function onSearch(search) {
    setSearch(search)
    setCurrentPage(0)
  }
  function onOpenEditor() {
    setIsEditorClicked(!isEditorClicked);
  }
  function onNewRowSubmit(row) {
    setIsEditorClicked(!isEditorClicked);
    setNewRows(newRows.concat(row))
  }
  function filterData() {
    if (!search) {
      return data
    }
    return data.filter(item => {
      return item['firstName'].toLowerCase().includes(search.toLowerCase())
        || item['lastName'].toLowerCase().includes(search.toLowerCase())
        || item['email'].toLowerCase().includes(search.toLowerCase())
        || item['phone'].toLowerCase().includes(search.toLowerCase())
    })
  }
  return (
    <div className="container">
      <DataSelector onSelectData={onSelectData} />
      {
        isLoading
          ? <Loader />
          : dataSource
            ? <React.Fragment>
              <Search onSearch={onSearch} />
              <EditorButton onOpenEditor = {onOpenEditor}/>
              {isEditorClicked?<TableEditor onNewRowSubmit={onNewRowSubmit}/>: null}
              <Table
                onSort={onSort}
                data={tableData}
                sortedField={sortedField}
                sortAsc={sortAsc}
                onRowSelect={onRowSelect} 
                newRows={newRows}/>
            </React.Fragment>
            : null
      }
      {!isLoading && data.length > tableRowCount
        ? <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={onPageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          pageClassName='page-item'
          pageLinkClassName='page-link'
          previousClassName='page-item'
          nextClassName='page-item'
          previousLinkClassName='page-link'
          nextLinkClassName='page-link'
          forcePage={currentPage}
        />
        : null}

      {
        rowInfo ? <RowInfoView rowInfo={rowInfo} /> : null
      }
    </div>
  );
}

export default App;
