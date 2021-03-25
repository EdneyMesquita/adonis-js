import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import {CherryPick} from '@ioc:Adonis/Lucid/Model'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public content: string

  @column({ serializeAs: null })
  public authorId: number

  @belongsTo(() => User, { foreignKey: 'authorId' })
  public author: BelongsTo<typeof User>

  @column()
  public slug: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  public serialize(cherryPick?: CherryPick) {
    return {
      ...this.serializeAttributes(cherryPick?.fields, false),
      ...this.serializeComputed(cherryPick?.fields),
      ...this.serializeRelations({
        author: {
          fields: ['id', 'email', 'name']
        }
      }, false)
    }
  }
}
