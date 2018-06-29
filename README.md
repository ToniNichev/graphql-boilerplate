# graphql-boilerplate

example query:

* Add Dog

  query queryLabel($id:ID!, $name:String!, $age:Int!, $gender: String) {
    addDog(id: $id, name: $name, age:$age, gender:$gender )
  }

  {
    "id": 7,
    "name": "test",
    "age": 12,
    "gender": "M"
  }

* Find Dog

query queryLabel($id:ID!) {
  getDog(id: $id) {
    id
    name
    age
  }
}

{
  "id": 1
}