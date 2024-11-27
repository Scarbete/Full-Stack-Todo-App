import { dark, light, noSidebar } from '@adminjs/themes'
import Todo from './models/Todo.js'

import mongoose from 'mongoose'
import AdminJS from 'adminjs'

import * as AdminJSExpress from '@adminjs/express'
import * as AdminJSMongoose from '@adminjs/mongoose'

AdminJS.registerAdapter(AdminJSMongoose)

const adminJs = new AdminJS({
    databases: [mongoose],
    resources: [
        {
            resource: Todo,
            options: {
                listProperties: ['title', 'description', 'completed', 'image'],
                editProperties: ['title', 'description', 'completed', 'image'],
            },
        },
    ],
    rootPath: '/admin',
    defaultTheme: dark.id,
    availableThemes: [dark, light, noSidebar]
})

const ADMIN = {
    email: 'scarbete.1338@gmail.com',
    password: 'MaybeYato2004',
}

const sessionOptions = () => ({
    resave: false,
    saveUninitialized: false
})

const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    adminJs,
    {
        authenticate: async (email, password) => {
            return (email === ADMIN.email && password === ADMIN.password) ? ADMIN : null
        },
        cookieName: 'adminjs',
        cookiePassword: 'supersecret',
    },
    null,
    sessionOptions()
)

export default adminRouter