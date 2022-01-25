const ModelService = require("../services/ModelService")
const hs = require("http-status")


class ModelController {
    index(req, res) {
        ModelService.list().then((res) => {
            res.status(hs.OK).send(res)
        })
            .catch((e) => {
                res.status(hs.NOT_FOUND).send({ message: "Kayıt Bulunamadı." })
            })
    }
    create(req, res, next) {
        ModelService.create(req.body).then(create => {
            res.status(hs.OK).send(create)
        })
            .catch(e => {
                res.status(hs.INTERNAL_SERVER_ERROR).send({ message: "Bir Hata oluştu" })
            })

    }
}

module.exports = new ModelController()