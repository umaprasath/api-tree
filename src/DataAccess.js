const axios = require('axios')
const data = JSON.stringify({
  collection: 'api_tree',
  database: 'api_management',
  dataSource: 'Cluster0',
  projection: {
    _id: 1
  }
})

const config = {
  method: 'post',
  url: 'https://us-east-2.aws.data.mongodb-api.com/app/data-rjvmy/endpoint/data/v1/action/findOne',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Request-Headers': '*',
    Authorization: 'Bearer <ACCESS_TOKEN>'
  },
  data
}

axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data))
    return response.data
  })
  .catch(function (error) {
    console.log(error)
  })
