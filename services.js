import { instance } from './client'
import * as core from '@actions/core'

const hostname = core.getInput('hostname')
const dnslink = core.getInput('dnslink')

export const getRecord = async () => {
  console.log('fetching records from', instance.getUri())

  const response = await instance.get('web3/hostnames')

  console.log('Records fetched successfully')
  console.log(response.data.result)

  const record = response.data.result.find(r => r.name === hostname)

  if (record) {
    console.log('record found for hostname:', hostname)
  } else {
    console.log('No record found for hostname:', hostname)
  }

  return record
}

export const createRecord = async () => {
  console.log('Initiating record creation')

  const response = await instance.post('web3/hostnames', {
    name: hostname,
    description: 'This is my IPFS gateway.',
    target: 'ipfs',
    dnslink
  })

  console.log('Record created successfully', response.data.result)
}

export const updateRecord = async (recordId) => {
  console.log('Initiating record updation')

  const response = await instance.patch(`web3/hostnames/${recordId}`, {
    dnslink
  })

  console.log('Record updated successfully', response.data.result)
}
