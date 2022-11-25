import * as dotenv from 'dotenv'

dotenv.config()

const config = {
  ACCESS_TOKEN_KEY: process.env.ACCESS_TOKEN_PRIVATE_KEY!,
  REFRESH_TOKEN_KEY: process.env.REFRESH_TOKEN_PRIVATE_KEY!,

  MS_AUTHENTICATION_ADMIN_URL: process.env.MS_AUTHENTICATION_ADMIN_URL
}

export {config}