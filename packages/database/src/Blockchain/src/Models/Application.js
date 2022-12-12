import mongoose from "mongoose";

export class Application {
  constructor(obj) {
    let {
      name,
      category,
      type,
      CRUD,
      validation,
      models,
      fields,
      testers,
      tests
    } = obj
    this.name = name ? name : null
    this.category = category ? category : null
    this.type = type ? type : null
    this.CRUD = CRUD ? CRUD : null
    this.validation = {
      is_validated: validation ? validation.is_validated : null
    }
    this.models = models ? models : null,
      this.fields = {
        amount: fields ? fields.amount : null,
        steps: [
          {
            fieldName: fields ? fields.fieldName : null,
            fieldDescription: fields ? fields.fieldDescription : null
          }
        ]
      }
    this.testers = testers ? testers : null
    this.tests = tests ? tests : null
  }
  async saveToDb() {
    return await ApplicationDoc.create(this)
  }
  async existsByName() {
    return new Promise(async(res, rej)=>{
      await ApplicationDoc.exists({name:this.name}) ?
      res(true):
      res(false)
    })
  
  }
  log(){
    return console.log(this);
  }
}

export let applicationSchema = new mongoose.Schema({
  name: String,
  category: String,
  type: String,
  CRUD: String,
  validation: {
    is_validated: {
      type: Boolean,
      default: false
    }
  },
  created_at: {
    type: Date,
    default: () => new Date,
    immutable: true
  },
  edited_at: Date,
  models: [String],
  fields: {
    amount: Number,
    steps: [{
      name: String,
      description: String
    }]
  },
  testers: [mongoose.SchemaTypes.ObjectId],
  tests: []
})
applicationSchema.loadClass(Application)
applicationSchema.pre("save",(next, doc)=>{
  next()
})

export let ApplicationDoc = mongoose.model("Application", applicationSchema)