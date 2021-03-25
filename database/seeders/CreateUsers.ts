import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class CreateUsersSeeder extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        name: 'Admin User',
        email: 'admin@gmail.com',
        role: 'admin',
        password: 'teste123'
      },
      {
        name: 'Normal User',
        email: 'user@gmail.com',
        role: 'normal',
        password: 'teste123'
      }
    ])
  }
}
