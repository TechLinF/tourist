
go.Import("uuid")
go.Import("fmt")
go.Import("time", "encoding/base64")


log.Infoln("hello I am the logger by logrus")

id = uuid.New()
obj = fbp.Object()

cache = caches.Require("todo")

cache[0].Set(id, JSON.stringify({id: id, name: obj.name}))
fbp.SetBody({id: id})