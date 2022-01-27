const UserService = require("../services/UserService")
const hs = require("http-status")
const { passwordToHash, generateAccessToken, generateRefreshToken } = require("../scripts/utils/helper");
const ApiError = require("../errors/ApiError")

class UserController {
    create(req, res, next) {
        req.body.password = passwordToHash(req.body.password)
        UserService.create(req.body).then(create => {


            res.status(hs.OK).send(create)
        })
            .catch(e => {
                next(new ApiError(e?.message))
            })
    }
    login(req, res, next) {
        req.body.password = passwordToHash(req.body.password)
        UserService.findOne(req.body)
            .then((user) => {
                if (!user) { return res.status(hs.NOT_FOUND).send({ message: "Böyle bir kullanıcı yok" }) }

                user = {
                    ...user.toObject(),
                    tokens: {
                        access_token: generateAccessToken(user),
                        refresh_token: generateRefreshToken(user),
                    }
                }
                delete user.password
                res.status(hs.OK).send({
                    code: 200,
                    message: "Giriş başarılı.",
                    user
                })

            })
            .catch(e => {
                next(new ApiError(e?.message))
            })

    }
}