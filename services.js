import { instance } from './client'
import * as core from '@actions/core'

const hostname = core.getInput('hostname')
const dnslink = core.getInput('dnslink')

export const getRecord = async () => {
  const response = await instance.get('web3/hostnames')

  const record = response.data.result.find(r => r.name === hostname)

  return record
}

export const createRecord = async () => {
  const response = await instance.post('web3/hostnames', {
    name: hostname,
    description: 'This is my IPFS gateway.',
    target: 'ipfs',
    dnslink
  })

  console.log('Record created successfully', response.data.result)
}

export const updateRecord = async (recordId) => {
  const response = await instance.post(`web3/hostnames/${recordId}`, {
    dnslink
  })

  console.log('Record updated successfully', response.data.result)
}
