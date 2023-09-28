import { createRecord, getRecord, updateRecord } from './services'

async function main () {
  const rec = await getRecord()

  if (rec) {
    await updateRecord(rec.id)
  } else {
    await createRecord()
  }
}

main().catch(e => console.log('Error:', e))
