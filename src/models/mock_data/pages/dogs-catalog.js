module.exports = [
  {
    id: '3-1',
    url: '/small-dogs-catalog',
    layout: [ 
      {
        span: 12,
        components: [
          {
            name: "Header"
          }
        ]
      },
      {
        span: 12,
        components:[
          {
            name: "DogsCatalog"
          },
        ] 
      },                  
    ]
  },  
  {
    id: '3',
    url: '/dogs-catalog',
    layout: [ 
      {
        span: 12,
        components: [
          {
            name: "Header"
          }
        ]
      },
      {
        span: 12,
        components:[
          {
            name: "DogsCatalogWithRedux"
          },
        ] 
      },                  
    ]
  },
  {
    id: '4',
    url: '/big-dogs-catalog',
    layout: [ 
      {
        span: 12,
        components: [
          {
            name: "Header"
          }
        ]
      },
      {
        span: 8,
        components:[
          {
            name: "DogsCatalogWithRedux"
          },
          {
            name: "GraphqlExample"
          }          
        ] 
      },                  
    ]
  }  
]