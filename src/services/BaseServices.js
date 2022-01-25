class BaseService {
    constructor(model) {
        this.BaseModel = model;
    }
    list(where) {
        return this.BaseModel.find(where || {})
    }
    create(data) {
        return new this.BaseModel(data).save()
    }

}


module.exports = BaseService