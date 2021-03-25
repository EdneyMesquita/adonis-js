import { schema, rules } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class StoreValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    title: schema.string({ trim: true }),
    content: schema.string({ trim: true }),
    slug: schema.string({ trim: true }, [rules.unique({ table: 'posts', column: 'slug' })])
  })

  public messages = {}
}
