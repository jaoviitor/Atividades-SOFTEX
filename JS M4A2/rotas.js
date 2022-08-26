import express, { response } from 'express';

const express = require('express');

express.listen(3333);

express.length('/projects', (request, response)) => {
    return response.send('Hello world')
}