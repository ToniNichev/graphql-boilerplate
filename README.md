# graphql-boilerplate

example query:

* Add Dog

  query queryLabel($id:String!, $breed:String!, $displayImage: String!) {
    addDog(id: $id, breed: $breed, displayImage:$displayImage )
  }

  {
    "id": "qasdfwaqEF",
    "breed": "test",
    "displayImage": "http://test.jpg"
  }

* Find Dog by breed

  query getDogByBreed($breed: String) 
  {
    getDogByBreed(breed: $breed) {
      id
      breed
      displayImage
    }
  }

  {
    "breed": "labrador"
  }