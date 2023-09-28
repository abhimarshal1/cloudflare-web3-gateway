import { createRecord, getRecord, updateRecord } from './services'

async function main () {
  const rec = await getRecord()

  if (rec) {
    await updateRecord(rec.id)
  } else {
    await createRecord()
  }
}

module.exports = main
