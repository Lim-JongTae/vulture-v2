export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const cloudName = config.public.cloudinaryCloudName
  const folder = config.public.cloudinaryFolder || 'vulture'

  const formData = await readFormData(event)
  const file = formData.get('file') as Blob

  if (!file) {
    throw createError({
      statusCode: 400,
      statusMessage: 'No file uploaded'
    })
  }

  // Cloudinary direct REST API upload
  const cloudinaryFormData = new FormData()
  cloudinaryFormData.append('file', file)
  cloudinaryFormData.append('upload_preset', 'vulture_preset') // 기본 preset 또는 unsigned
  cloudinaryFormData.append('folder', folder)

  try {
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST',
      body: cloudinaryFormData
    })

    const data = await response.json()
    return data
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: error?.message || 'Cloudinary upload failed'
    })
  }
})
