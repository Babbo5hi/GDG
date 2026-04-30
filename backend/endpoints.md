## User Page

res:{
token:"string"
}

- /courses

res: {
[
id:"int",
Title:"string",
Desc:"string",
URL: "string",
Image: "url",
faq:[
{
q:"str",
a:"str"
}
]
]
}

- /courses/id

res: {

    id:"int",
    Title:"string",
    Desc:"string",
    URL: "string",
    Image: "url",

}

- /articles/id

res:{
[
title:"str",
article:"markdown"
]
}

- /events
  {
  [
  {
  title:"str",
  article:"str",
  image:"url"
  }
  ]
  }

## Admin Page

- /login

req:{
username
}

- /article

req: {
id:int,
title:
article:"markdown"
}

- /images (GET)

res:{
[
{
image:"File",
url: "string"
}
]
}

- /image (POST)

req:{
name:"str",
file:"file"
}

res:{
url:"string"
}
