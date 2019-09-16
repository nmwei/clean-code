
class Args {
  marshalers
  argsFound
  currentArgument


  constructor(schema, args) {
    this.marshalers = new Map()
    this.argsFound = new Set()
    this.parseSchema(schema)
    this.parseArgumentStrings(args)
  }

  parseSchema(schema) {
    schema.split(',').forEach(element => {
      if(element.length > 0) {
        this.parseSchemaElement(element.trim())
      }
    })
  }

  parseSchemaElement(element) {
    const elementId = element[0]
    const elementTail = element.substring(1)
    this.validateSchemaElementId(elementId)
    if(elementTail.length == 0) {
      this.marshalers.set(elementId, new BooleanArgumentMarshaler())
    } else if(elementTail === '*') {
      this.marshalers.set(elementId, new StringArgumentMarshaler())
    } else if(elementTail === '#') {
      this.marshalers.set(elementId, new NumberArgumentMarshaler())
    } else if(elementTail === '[*]') {
      this.marshalers.set(elementId, new StringArrayArgumentMarshaler())
    } else {
      throw new ArgsException(INVALED_ARGUMENT_FORMAT, elementId, null)
    }
  }

  validateSchemaElementId(elementId) {
    const Regx = /^[A-Za-z]$/;
    if(!Regx.test(elementId)) {
      throw new ArgsException(INVALED_ARGUMENT_FORMAT, elementId, null)
    }
  }

  parseArgumentStrings(argsList) {
  }
}

class ArgsException {

}

// const main = (args) => {
//   try {
//     const arg = new Args("l,p#,d*", args)
//     const logging = arg.getBoolean('l')
//     const port = arg.getInt('p')
//     const directory = arg.getString('d')
//     execteApplication(logging, port, directory)
//   } catch (e) {
//     console.log(err)
//   }
// }
