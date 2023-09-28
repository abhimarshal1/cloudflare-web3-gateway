import axios from 'axios'
import * as core from '@actions/core'

const token = core.getInput('token')
const zone = core.getInput('zone')

export const instance = axios.create({
  baseURL: `https://api.cloudflare.com/client/v4/zones/${zone}/`,
  headers: { Authorization: `Bearer ${token}` }
})
