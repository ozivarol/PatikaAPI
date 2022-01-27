const ModelService = require("../services/ModelService")
const hs = require("http-status")
const ApiError = require("../errors/ApiError")


class ModelController {
    index(req, res, next) {
        ModelService.list().then((list) => {
            if (!list) {
                return next(new ApiError("Sorun oluştu"));
            }



            res.status(hs.OK).send(
                {
                    görevler: [
                        ...list
                    ]


                }
            )

        })
            .catch(e => {
                next(new ApiError(e?.message))
            })
    }
    create(req, res, next) {
        ModelService.create(req.body).then(create => {
            res.status(hs.OK).send(create)
        })
            .catch(e => {
                next(new ApiError(e?.message))

            })

    }
}

module.exports = new ModelController()