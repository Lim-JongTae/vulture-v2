import { useRuntimeConfig } from '#imports'

/**
 * Cloudinary Upload Response Interface
 */
interface CloudinaryUploadResponse {
  secure_url: string
  public_id: string
  format: string
  width: number
  height: number
  bytes: number
  created_at: string
  [key: string]: any
}

// Default fallback image path stored in the public folder
const DEFAULT_FALLBACK_IMAGE = '/images/default-vulture.jpg'

/**
 * Uploads a file (Buffer or Base64 string) to Cloudinary.
 * If the upload fails, it returns the fallback default image URL to prevent site crashes.
 * 
 * @param fileBuffer - The file content as a Buffer
 * @param fileName - The original file name
 * @param folder - Cloudinary folder destination (e.g. 'vulture-ulsan')
 * @returns Promise<{ url: string; publicId: string | null; isFallback: boolean }>
 */
export async function uploadToCloudinary(
  fileBuffer: Buffer,
  fileName: string,
  folder: string = 'vulture-ulsan'
): Promise<{ url: string; publicId: string | null; isFallback: boolean }> {
  const config = useRuntimeConfig()
  
  const cloudName = config.cloudinaryCloudName || globalThis.process?.env?.CLOUDINARY_CLOUD_NAME
  const uploadPreset = config.cloudinaryUploadPreset || globalThis.process?.env?.CLOUDINARY_UPLOAD_PRESET
  const apiKey = config.cloudinaryApiKey || globalThis.process?.env?.CLOUDINARY_API_KEY
  const apiSecret = config.cloudinaryApiSecret || globalThis.process?.env?.CLOUDINARY_API_SECRET

  // Fallback check: If configuration is missing, immediately fallback
  if (!cloudName || !uploadPreset) {
    console.warn('[Cloudinary] Config missing. Using fallback URL for:', fileName)
    return { url: DEFAULT_FALLBACK_IMAGE, publicId: null, isFallback: true }
  }

  try {
    const base64File = `data:image/jpeg;base64,${fileBuffer.toString('base64')}`
    
    // Construct the endpoint for direct upload
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`

    const formData = new FormData()
    formData.append('file', base64File)
    formData.append('upload_preset', uploadPreset)
    formData.append('folder', folder)
    formData.append('public_id', fileName.split('.')[0])

    const response = await $fetch<CloudinaryUploadResponse>(url, {
      method: 'POST',
      body: formData
    })

    return {
      url: response.secure_url,
      publicId: response.public_id,
      isFallback: false
    }
  } catch (error) {
    console.error('[Cloudinary] Upload failed for:', fileName, error)
    // Fallback: Safe return instead of throwing to prevent site crashing
    return {
      url: DEFAULT_FALLBACK_IMAGE,
      publicId: null,
      isFallback: true
    }
  }
}

/**
 * Generates an optimized Cloudinary URL based on device responsive sizes, format, and quality.
 * Example transformation: f_auto (format), q_auto (quality), w_800 (resize)
 * 
 * @param url - The original Cloudinary secure URL
 * @param width - The targeted width for responsive resizing
 * @param height - Optional targeted height
 * @returns string
 */
export function getOptimizedUrl(url: string, width?: number, height?: number): string {
  if (!url) return DEFAULT_FALLBACK_IMAGE
  if (url.startsWith('/') || !url.includes('cloudinary.com')) return url // local fallback or other domain

  const urlParts = url.split('/upload/')
  if (urlParts.length !== 2) return url

  // Transformation parameters: f_auto (format), q_auto (quality)
  const transformations = ['f_auto', 'q_auto']
  
  if (width) {
    transformations.push(`w_${width}`)
  }
  if (height) {
    transformations.push(`h_${height}`, 'c_limit') // limit to maintain aspect ratio
  }

  return `${urlParts[0]}/upload/${transformations.join(',')}/${urlParts[1]}`
}
