# **UpscaleID**

# API DOC

## Create Task

    POST /tasks

> Request Body

```
{
    name  : string,
    description : string,
    status : boolean
}
```

> Response 201

```
{
    _id : "string",
    name : "string",
    description : "string".
    status : boolean
}
```

> response 400
> {

    msg : "string"

}

## Fetch All Data

    GET /tasks

> Response 200

```
[
    {
        _id : "string",
        name : "string",
        description : "string",
        status : boolean
    }
]
```

## Get One Data

    GET /tasks/_id

> Request Params

```
{
    _id : "string"
}
```

> Response 200

```
    {
        _id : "string",
        name : "string",
        description : "string",
        status : boolean
    }
```

## Delete Data

    DELETE /tasks/_id

> Request Params

```
{
    _id : "string"
}
```

> Response 200

```
{
    acknowledged : boolean,
    deletedCount : integer
}
```

> Response 404

```
{
    msg : "string",
}
```

## Update Data

    PATCH /task/_id

> Request Params

```
{
    _id : "string"
}
```

> Request Body

```
{
    name : "string",
    description : "string",
    status : boolean
}
```

> Response 200

```
{
    acknowledged : boolean,
    modifiedCount : integer,
    upsertedId : integer,
    upsertedCount : integer,
    matchedCount : integer
}
```

> Response 404

```
{
    msg : "string",
}
```

> Response 400

```
{
    msg : "string",
}
```
