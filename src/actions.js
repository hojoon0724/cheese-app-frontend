import { redirect } from 'react-router-dom'

const URL = process.env.REACT_APP_URL

export const updateAction = async ({ request, params }) => {
  const formData = await request.formData()
  const updatedCheese = {
    name: formData.get('name'),
    countryOfOrigin: formData.get('countryOfOrigin'),
    image: formData.get('image')
  }
  console.log(updatedCheese)

  await fetch(`${URL}/cheese/${params.id}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedCheese)
  })

  return redirect('/') //go back to the landing page
}

export const createAction = async ({ request }) => {
  const formData = await request.formData()
  const createdCheese = {
    name: formData.get('name'),
    countryOfOrigin: formData.get('countryOfOrigin'),
    image: formData.get('image')
  }
  console.log(createdCheese)

  await fetch(`${URL}/cheese`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(createdCheese)
  })
}

export const deleteAction = async ({ params }) => {
  await fetch(`${URL}/cheese/${params.id}`, {
    method: 'delete'
  })

  return redirect('/')
}
