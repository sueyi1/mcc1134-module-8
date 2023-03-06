import React, { useState, useEffect } from 'react';
import AppBar from '../components/AppBar';
import { Button } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useHistory } from 'react-router-dom';

const Admin = () => {
    const [ rows, setRows ] = useState([]); //set rows to empty array
    const apiUrl = 'http://localhost:3001/articles';
    const history = useHistory();

    // similar to componentDidMount()
    useEffect( () => {
        // Go get data
        // fetch data 
        getApiData();
        // eslint-disable-next-line
    }, []);

    const getApiData = () => {
        fetch(apiUrl, {method: "GET"})
            .then(response => response.json())
            .then(data => loadData(data));
    };

    const loadData = (data) => {
        setRows(data);
    };

    const getId = (params) => {
        return `${params.id}`;
    }

    const handleCreate = () => {
        history.push("/article/create");
    }

    const handleEdit = (e) => {
        const itemId = e.currentTarget.parentElement.parentElement.getAttribute('data-id');
        console.log('edit item:' + itemId);
        history.push("/article/edit/" + itemId);
    };

    const handleDelete = (e) => {
        e.preventDefault();
        const itemId = e.currentTarget.parentElement.parentElement.getAttribute('data-id');
        console.log('delete item:' + itemId);
        fetch(apiUrl + '/' + itemId, {method: "DELETE"})
            .then(response => response.json())
            .then(res => { //reloads data after deleting
                getApiData();
            });
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 70},
        { field: 'title', headerName: 'Title', width: 150, editable: true},
        { field: 'author', headerName: 'Author', width: 100, editable: true},
        { field: 'publishDate', headerName: 'Date', type: 'date', width: 100, editable: true},
        { field: 'shortDescription', headerName: 'Short Desc',  width: 120, editable: true},
        { field: 'longDescription', headerName: 'Description', width: 250, editable: true},
        { field: 'mainImage', headerName: 'Image', width: 300, editable: true},
        { field: 'Edit', headerName: 'Edit', width: 200, valueGetter: getId, renderCell: (params) => (
            <>
                <Button variant="contained" color="primary" size="small" onClick={handleEdit}>Edit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={handleDelete}>Delete</Button>
            </>
        )}
    ];

    return (
        <>
            <AppBar title="Admin" />   
            <div style={{height: 600, width: "50%", margin: "auto", paddingTop: 8}}>
                <Button variant="contained" color="primary" sx={{mb: 1}} onClick={handleCreate}>Create Article</Button>
                <DataGrid rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[5, 10, 25]} checkboxSelection/>
            </div> 
        </>
    );
};

export default Admin;