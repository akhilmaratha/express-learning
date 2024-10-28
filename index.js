// const express = import('express');
import express from 'express';
const app = express();
const port=3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
let teaData=[];
let nextId = 1;
//add a new tea
app.post('/tea', (req, res) => {
    const {name,price}=req.body;
    const newTea={id:nextId++,name,price}
    teaData.push(newTea);
    res.status(200).send(newTea);
});

//get all teas
app.get('/teas', (req, res) => {
    res.send(teaData).send(teaData);
});

//get a specific tea
app.get('/teas/:id', (req, res) => {
    const teaId=parseInt(req.params.id);
    const tea=teaData.find(t=>t.id===teaId);
    if (teaIndex === -1) {
        return res.status(404).send('Tea not found');
    }
    res.status(200).send(tea);
});

//update a tea


app.put('/teas/:id', (req, res) => {
    const teaId=parseInt(req.params.id);
    const teaIndex=teaData.findIndex(t=>t.id===teaId);
    if(!teaIndex){
        return res.status(404).send('Tea not found');
    }
    const {name,price}=req.body;
    teaIndex.name=name
    teaIndex.price=price
    res.send(200).send(teaIndex);
});

//delete a tea

app.delete('/teas/:id', (req, res) => {
    const teaId=parseInt(req.params.id);
    const teaIndex=teaData.findIndex(t=>t.id===teaId);
    if(teaIndex===-1){
        return res.status(404).send('Tea not found');
    }
    teaData.splice(teaIndex,1);
    res.send(teaData);
});

app.listen(port,()=>{
    console.log(`Server is running at localhost:${port}`);
})