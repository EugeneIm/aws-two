import Amplify, { API } from "aws-amplify"
import awsExports from "./aws-exports"

Amplify.configure(awsExports)

const apiName = 'taskList'

export async function getTasks() {
  const path = '/tasks' 
  const result = await API.get(apiName, path)
  return result.tasks
}

export async function createTask(title) {
  const path = '/tasks' 
  const result = await API.post(apiName, path, {
    body: { title }
  })
  console.log(result)
  return result.task
}
