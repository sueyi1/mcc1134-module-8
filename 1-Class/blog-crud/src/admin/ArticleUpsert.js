import React, { useEffect, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import AppBar from '../components/AppBar';
import { TextField, Button } from '@mui/material';
import { useHistory } from 'react-router-dom';


const ArticleUpsert = (props) => {

    const { id } = props.match.params;
    const apiUrl = 'http://localhost:3001/articles';

    const [ inputData, setInputData ] = useState({title: '', 
                                                  author: '', 
                                                  shortDescription: '', 
                                                  longDescription: '', 
                                                  mainImage: ''}); 

    const history = useHistory();

    const { handleSubmit, control, reset, setValue } = useForm({defaultValues: inputData}); //pass in an object with default values from input data

    // loads data - similar to componentDidMount()
    useEffect( () => {
        console.log("useEffect: ", inputData);
        // fetch data 
        if (id) {
            const getApiData = () => {
                fetch(apiUrl + '/' + id, {method: "GET"})
                    .then(response => response.json())
                    .then(data => loadData(data));
            };
            getApiData();
        }
    }, []);


    const loadData = (data) => {
        console.log('loadData:', data);
        setInputData(data);
        reset({
            title: data.title,
            author: data.author,
            shortDescription: data.shortDescription,
            longDescription: data.longDescription,
            mainImage: data.mainImage
        });
    };

    const onSubmit = data => {
        let method = "GET";
        let url = "";

        //Rest API
        if (!id) {
            // post new
            method = "POST";
            url = apiUrl;
            
        } else {
            // put change
            method = "PUT";
            url = apiUrl + '/' + id;
        }

        fetch(url,
                {method: method,
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
        )
        .then(response => response.json())
        .then(data => loadData(data))
        .then(res => {
            history.push("/admin");
        });
    };

    return (
        <>
            <AppBar title="Article Admin" />    
            <div style={{width: "50%", margin: "auto", paddingTop: 8}}>

            <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <Controller name="title" control={control} setValue={setValue} render={({field}) => (
                        <TextField sx={{mb: 1}} label="Title" fullWidth {...field} />
                    )} />
                   <Controller name="author" control={control} setValue={setValue} render={({field}) => (
                        <TextField sx={{mb: 1}} label="Author" fullWidth value={inputData.author}  {...field} />
                    )} />
                    <Controller name="shortDescription" control={control} setValue={setValue} render={({field}) => (
                        <TextField sx={{mb: 1}} label="Short Description" fullWidth value={inputData.shortDescription} {...field} />
                    )} />
                    <Controller name="longDescription" control={control} setValue={setValue} render={({field}) => (
                        <TextField sx={{mb: 1}} label="Long Description" fullWidth value={inputData.longDescription} {...field} />
                    )} />
                    <Controller name="mainImage" control={control} setValue={setValue} render={({field}) => (
                        <TextField sx={{mb: 1}} label="Main Image" fullWidth value={inputData.mainImage} {...field} />
                    )} />
                    <Button variant="contained" color="primary" type="submit">Submit</Button>
                </div>
            </form>   
            </div>  
        </>
    );
};

export default ArticleUpsert;