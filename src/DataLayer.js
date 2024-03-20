import React from 'react'
import loginEmailPassword from './Auth.js'
import axios from 'axios'

async function fetchData () {
  const user = await loginEmailPassword('admin@trott.com', 'Admin@123')
  const accessToken = user.accessToken
  const data = JSON.stringify({
    collection: 'api_tree',
    database: 'api_management',
    dataSource: 'Cluster0'
    //      "projection": {
    //          "_id": 1
    //      }
  })

  const config = {
    method: 'post',
    url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-rjvmy/endpoint/data/v1/action/findOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      Authorization: 'Bearer ' + accessToken
    },
    data
  }

  return axios(config)
}

export default fetchData
